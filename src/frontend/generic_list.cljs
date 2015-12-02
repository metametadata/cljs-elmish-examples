; A list of "things". It's an example of a "higher order" component.
(ns frontend.generic-list
  (:require [frontend.ui :as ui]
            [cljs.core.match :refer-macros [match]]
            [com.rpl.specter :as s]

            [frontend.random-gif :as random-gif]
            [frontend.giphy-api :as giphy]))

(defn init
  []
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

(defn new-control
  [item-spec]
  (fn control
    [model signal dispatch]
    (match signal
           :on-connect nil

           :on-insert
           (dispatch :insert)

           ; pattern does not allow sending :on-connect to new item from :on-insert
           ; (because we can't get a new model after dispatching an action),
           ; so this special signal should be explicitly dispatched after insertion
           [:on-connect-item id]
           ; we call self here only to get rid of code duplication
           (control model [[:on-item-signal id] :on-connect] dispatch)

           [:on-remove id]
           (dispatch [:remove id])

           [[:on-item-signal id] s]
           (-update-item model id
                         (:control item-spec) s (ui/tagged dispatch [:item-action id])))))

(defn new-reconcile
  [item-spec item-init-args]
  (fn reconcile
    [model action]
    (match action
           :insert
           (let [new-item (apply (:init item-spec) item-init-args)]
             (-> model
                 (update :items concat [{:id (:next-id model) :item new-item}])
                 (update :next-id inc)))

           [:remove id]
           (update model :items #(filter (fn [item] (not= (:id item) id)) %))

           [[:item-action id] a]
           (-update-item model id (:reconcile item-spec) a))))

(defn new-view-model
  [item-spec]
  (fn view-model
    [model]
    (select-keys (-update-every-item model (:view-model item-spec))
                 [:items :next-id])))

(defn -item-views
  [items dispatch item-spec]
  (map (fn [{:keys [id item]}]
         [:div {:style {:display "flex" :flex-direction "row"}}
          [(:view item-spec) item (ui/tagged dispatch [:on-item-signal id])]
          [:button {:on-click #(dispatch [:on-remove id])} "X"]])
       items))

(defn new-view
  [item-spec]
  (fn -view
    [view-model dispatch]
    (let [items (-item-views (:items view-model) dispatch item-spec)
          insert [:button {:on-click #(do (dispatch :on-insert)
                                          (dispatch [:on-connect-item (:next-id view-model)]))} "Insert"]]
      (into [:div insert] items))))

(defn new-spec
  "Returns a spec for a list of items. Each new item will be initialized using item-init-args."
  [item-spec & item-init-args]
  {:init       init
   :view-model (new-view-model item-spec)
   :view       (new-view item-spec)
   :control    (new-control item-spec)
   :reconcile  (new-reconcile item-spec item-init-args)})

(defn example
  []
  (-> (new-spec (new-spec (random-gif/new-spec giphy/get-random-gif) "nature"))
      ui/wrap-log
      ui/connect-reagent))

(defn example-view
  "Wrapper to get rid of unnecessary calls to ui/connect on Figwheel reloads.
  In particular, :on-connect will not be triggered on each reload."
  []
  (:view (example)))