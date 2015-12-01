; A list of "things". It's an example of a "higher order" component.
(ns frontend.generic-list
  (:require [frontend.ui :as ui]
            [cljs.core.match :refer-macros [match]]
            [com.rpl.specter :as s]

            [frontend.counter :refer [counter]]))

(defn -init
  [_env_]
  {; list of {:id ... :item ...} maps
   :items   (list)
   :next-id 0})

(defn -update-items*
  "Applies a function of args [gif-model & args] to the gif items specified by predicate.
  The function can have side-effects. Returns a new model."
  [model pred f & args]
  (s/transform [:items s/ALL pred :item]
               #(apply f % args)
               model))

(defn -update-item
  [model id f & args]
  (apply -update-items* model #(= (:id %) id) f args))

(defn -update-every-item
  [model f & args]
  (apply -update-items* model (constantly true) f args))

(defn -new-control
  [item-spec]
  (fn control
    [model signal dispatch env]
    (match signal
           :on-connect nil
           :on-insert
           ; TODO: also send :on-connect to item
           (dispatch :insert)

           ; TODO: remove item

           [[:on-item-signal id] s]
           (-update-item model id
                         (:control item-spec) s (ui/tagged dispatch [:item-action id]) env))))

(defn -new-reconcile
  [item-spec item-init-args]
  (fn reconcile
    [model action env]
    (match action
           :insert
           (let [new-item (apply (:init item-spec) (concat item-init-args [env]))]
             (-> model
                 (update :items concat [{:id (:next-id model) :item new-item}])
                 (update :next-id inc)))

           [[:item-action id] a]
           (-update-item model id (:reconcile item-spec) a env))))

(defn -new-view-model
  [item-spec]
  (fn view-model
    [model env]
    (select-keys (-update-every-item model (:view-model item-spec) env)
                 [:items])))

(defn -item-views
  [items dispatch env item-spec]
  (map #(-> [(:view item-spec) (:item %) (ui/tagged dispatch [:on-item-signal (:id %)]) env])
       items))

(defn -new-view
  [item-spec]
  (fn -view
    [view-model dispatch env]
    (let [items (-item-views (:items view-model) dispatch env item-spec)
          insert [:button {:on-click #(dispatch :on-insert)} "Insert"]]
      (into [:div insert] items))))

(defn new-list
  "Returns a spec for a list of items. Each new item will be initialized using item-init-args."
  [item-spec & item-init-args]
  {:init       -init
   :view-model (-new-view-model item-spec)
   :view       (-new-view item-spec)
   :control    (-new-control item-spec)
   :reconcile  (-new-reconcile item-spec item-init-args)})

(defn example
  []
  (-> (new-list counter 1)
      ui/wrap-log
      (ui/connect-reagent {})))

(defn example-view
  "Wrapper to get rid of unnecessary calls to ui/connect on Figwheel reloads.
  In particular, :on-connect will not be triggered on each reload."
  []
  (:view (example)))