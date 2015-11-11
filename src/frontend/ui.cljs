; GUI architecture API
(ns frontend.ui
  (:require [reagent.core :as r])
  (:require-macros [reagent.ratom :refer [reaction]]))

;;;;;;;;;;;;;;;;;;;;;;;; Core
(defn connect
  "Model must be a ratom.
  Returns a map with :view, :dispatch-event, :dispatch-command.
  Dispatch functions are exposed for use during debugging.

  Automatically fires :on-connect event.

  Data flow:
  model -> (view-model) -> (view) -event-> (control) -command-> (reconcile) -> model"
  [model view-model view control reconcile]
  ; dispatch functions return nil to make API even smaller
  (let [dispatch-command (fn [c] (do (swap! model reconcile c) nil))
        dispatch-event (fn [e] (do (control @model e dispatch-command) nil))
        connected-view (fn [] [view (view-model @model) dispatch-event])]
    (dispatch-event :on-connect)
    {:view             connected-view
     :dispatch-command dispatch-command
     :dispatch-event   dispatch-event}))

;;;;;;;;;;;;;;;;;;;;;;;; Utils
(defn tagged
  "Function decorator which prepends a tag to the single argument.
  I.e. it transforms an arg x to [tag x]."
  [f tag]
  (fn tagged-fn
    [x]
    (f [tag x])))

;;;;;;;;;;;;;;;;;;;;;;;; Control Middlewares
(defn wrap-log-events
  [control]
  (fn wrapped-control
    [model event dispatch]
    (println "event =" event)
    (control model event dispatch)))

;;;;;;;;;;;;;;;;;;;;;;;; Reconcile Middlewares
(defn wrap-log-commands
  [reconcile]
  (fn wrapped-reconcile
    [model command]
    (println "  command =" command)
    (let [result (reconcile model command)]
      (println "   " model "->\n   " result)
      result)))