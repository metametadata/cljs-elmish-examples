(ns frontend.counter-list-fancy
  (:require [frontend.ui :as ui]
            [frontend.counter :refer [counter]]
            [cljs.core.match :refer-macros [match]]))

(defn -init
  [_env_]
  {:counters (list)
   :next-id  0})

(defn -update-counters*
  "Applies a function of args [counter-model & args] to the counters specified by predicate.
  The function can have side-effects. Returns a new model."
  [model pred f & args]
  (letfn [(update-counter [[counter-id counter-model :as counter]]
            (if (pred counter)
              [counter-id (apply f counter-model args)]
              counter))]
    (update model :counters #(doall (map update-counter %)))))

(defn -update-counter
  [model id f & args]
  (apply -update-counters* model #(= id (first %)) f args))

(defn -update-every-counter
  [model f & args]
  (apply -update-counters* model (constantly true) f args))

(defn -control
  [model signal dispatch env]
  (match signal
         :on-connect nil
         :on-insert (dispatch :insert)
         [:on-remove id] (dispatch [:remove id])

         [[:on-modify id] s]
         (-update-counter model id
                          (:control counter) s (ui/tagged dispatch [:modify id]) env)))

(defn -reconcile
  [model action env]
  (match action
         :insert
         (-> model
             (update :counters concat [[(:next-id model) ((:init counter) 0)]])
             (update :next-id inc))

         [:remove id]
         (update model :counters #(filter (fn [[cid _]] (not= cid id)) %))

         [[:modify id] a]
         (-update-counter model id (:reconcile counter) a env)))

(defn -view-model
  [model env]
  (select-keys (-update-every-counter model (:view-model counter) env)
               [:counters]))

(defn -view-counter
  [[id view-model] dispatch]
  [frontend.counter/view-with-remove-button view-model {:dispatch           (ui/tagged dispatch [:on-modify id])
                                                         :dispatch-on-remove #(dispatch [:on-remove id])}])

(defn -view
  [view-model dispatch]
  (let [counters (map #(-view-counter % dispatch) (:counters view-model))
        insert [:button {:on-click #(dispatch :on-insert)} "Insert"]]
    (into [:div insert remove] counters)))

(def counter-list-fancy
  {:init       -init
   :view-model -view-model
   :view       -view
   :control    -control
   :reconcile  -reconcile})

(defn example
  []
  (-> counter-list-fancy
      ui/wrap-log
      (ui/connect-reagent {})))

(defn example-view
  "Wrapper to get rid of unnecessary calls to ui/connect on Figwheel reloads.
  In particular, :on-connect will not be triggered on each reload."
  []
  (:view (example)))