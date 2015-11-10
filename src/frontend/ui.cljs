; GUI architecture API
(ns frontend.ui
  (:require-macros [reagent.ratom :refer [reaction]]))

;;;;;;;;;;;;;;;;;;;;;;;; Core
(defn connect
  "Returns a new view. Model must be a ratom.

  Data flow:
  model -> view-model -> view -(dispatch event)-> control -(dispatch command)-> reconcile -(update)-> model

  Automatically fires :on-connect event.
  "
  [model view-model _view_ control reconcile]
  ; dispatch functions don't return anything to make API even smaller
  (let [dispatch-command (fn [c] (do (swap! model reconcile c) nil))
        dispatch-event (fn [e] (do (control @model e dispatch-command) nil))]
    (dispatch-event :on-connect)
    (fn connected-view
      [_model_ _view-model_ view _control_ _reconcile_]
      [view (view-model @model) dispatch-event])))

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
    [model event command]
    (println "event =" event)
    (control model event command)))

;;;;;;;;;;;;;;;;;;;;;;;; Reconcile Middlewares
(defn wrap-log-commands
  [reconcile]
  (fn wrapped-reconcile
    [model command]
    (println "  command =" command)
    (let [result (reconcile model command)]
      (println "   " model "->\n   " result)
      result)))