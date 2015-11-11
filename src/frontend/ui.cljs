; GUI architecture API
(ns frontend.ui
  (:require [reagent.core :as r])
  (:require-macros [reagent.ratom :refer [reaction]]))

;;;;;;;;;;;;;;;;;;;;;;;; Core
(defn connect
  "Model must be a ratom.
  Returns a map with :view, :dispatch-signal, :dispatch-action.
  Dispatch functions are exposed for use during debugging.

  Automatically fires :on-connect signal.

  Data flow:
  model -> (view-model) -> (view) -signal-> (control) -action-> (reconcile) -> model"
  [model view-model view control reconcile]
  ; dispatch functions return nil to make API even smaller
  (let [dispatch-action (fn [a] (do (swap! model reconcile a) nil))
        dispatch-signal (fn [s] (do (control @model s dispatch-action) nil))
        connected-view (fn [] [view (view-model @model) dispatch-signal])]
    (dispatch-signal :on-connect)
    {:view            connected-view
     :dispatch-action dispatch-action
     :dispatch-signal dispatch-signal}))

;;;;;;;;;;;;;;;;;;;;;;;; Utils
(defn tagged
  "Function decorator which prepends a tag to the single argument.
  I.e. it transforms an arg x to [tag x]."
  [f tag]
  (fn tagged-fn
    [x]
    (f [tag x])))

;;;;;;;;;;;;;;;;;;;;;;;; Control Middlewares
(defn wrap-log-signals
  [control]
  (fn wrapped-control
    [model signal dispatch]
    (println "signal =" signal)
    (control model signal dispatch)))

;;;;;;;;;;;;;;;;;;;;;;;; Reconcile Middlewares
(defn wrap-log-actions
  [reconcile]
  (fn wrapped-reconcile
    [model action]
    (println "  action =" action)
    (let [result (reconcile model action)]
      (println "   " model "->\n   " result)
      result)))