; A list of "things". It's an example of a "higher order" component.
(ns frontend.generic-list
  (:require [frontend.ui :as ui]
            [cljs.core.match :refer-macros [match]]
            [com.rpl.specter :as s]))

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

(defn -get-item
  [model id]
  (->> (:items model)
       (filter #(= (:id %) id))
       first
       :item))

(defn new-control
  [item-spec]
  (fn control
    [model signal dispatch]
    (match signal
           :on-connect nil

           :on-insert
           (let [new-id (:next-id model)]
             (-> (dispatch :insert)
                 ; we call self here only to get rid of code duplication
                 (control [[:on-item-signal new-id] :on-connect] dispatch)))

           [:on-remove id]
           (dispatch [:remove id])

           [[:on-item-signal id] s]
           (-update-item model id
                         (:control item-spec)
                         s
                         ; make sure that item's control gets new item model after action is handled
                         #(-> (dispatch [[:item-action id] %])
                              (-get-item id))))))

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
          insert [:button {:on-click #(dispatch :on-insert)} "Insert"]]
      (into [:div insert] items))))

(defn new-spec
  "Returns a spec for a list of items. Each new item will be initialized using item-init-args."
  [item-spec & item-init-args]
  {:init       init
   :view-model (new-view-model item-spec)
   :view       (new-view item-spec)
   :control    (new-control item-spec)
   :reconcile  (new-reconcile item-spec item-init-args)})