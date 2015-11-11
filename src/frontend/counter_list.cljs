(ns frontend.counter-list
  (:require [frontend.ui :as ui]
            [frontend.counter :as counter]
            [reagent.core :as r]
            [cljs.core.match :refer-macros [match]]))

(defn init
  []
  {; list of [id counter-model] vectors
   :counters (list)
   :next-id  0})

(defn update-counters*
  "Applies a function of args [counter-model & args] to the counters specified by predicate.
  The function can have side-effects. Returns a new model."
  [model pred f & args]
  (letfn [(update-counter [[counter-id counter-model :as counter]]
            (if (pred counter)
              [counter-id (apply f counter-model args)]
              counter))]
    (update model :counters #(doall (map update-counter %)))))

(defn update-counter
  [model id f & args]
  (apply update-counters* model #(= id (first %)) f args))

(defn update-every-counter
  [model f & args]
  (apply update-counters* model (constantly true) f args))

(defn control
  [model event dispatch]
  (match event
         :on-connect nil
         :on-insert (dispatch :insert)
         :on-remove (dispatch :remove)

         [[:on-modify id] e]
         (update-counter model id
                         counter/control e (ui/tagged dispatch [:modify id]))))

(defn reconcile
  [model command]
  (match command
         :insert
         (-> model
             (update :counters concat [[(:next-id model) (counter/init 0)]])
             (update :next-id inc))

         :remove
         (update model :counters rest)

         [[:modify id] c]
         (update-counter model id counter/reconcile c)))

(defn view-model
  [model]
  (select-keys (update-every-counter model counter/view-model)
               [:counters]))

(defn view-counter
  [[id view-model] dispatch]
  [counter/view view-model (ui/tagged dispatch [:on-modify id])])

(defn view
  [view-model dispatch]
  (let [counters (map #(view-counter % dispatch) (:counters view-model))
        insert [:button {:on-click #(dispatch :on-insert)} "Insert"]
        remove [:button {:on-click #(dispatch :on-remove)} "Remove"]]
    (into [:div insert remove] counters)))

(defonce model (r/atom (init)))
(defn example
  []
  (ui/connect model view-model view (ui/wrap-log-events control) (ui/wrap-log-commands reconcile)))

(defn example-view
  "Wrapper to get rid of unnecessary calls to ui/connect on Figwheel reloads.
  In particalur, :on-connect will not be triggered on each reload."
  []
  (:view (example)))