; GUI architecture API
(ns frontend.ui
  (:require [reagent.core :as r]
            [cljs.pprint]))

;;;;;;;;;;;;;;;;;;;;;;;; Core
(defn connect-reagent
  "Given a component spec map returns a connected component which can be rendered using Reagent.

  :control can be a non-pure function, :init, :view-model, :view and :reconcile must be pure functions.

  env map will be passed to all functions as a last arg, so it can be used to inject external dependencies.
  init-args will be passed to :init function.

  Dispatches :on-connect signal and returns a map with:
      :view (Reagent view function),
      :dispatch-signal (it can be used to dispatch signals not only from the view),
      :model ratom (this is exposed mainly for debugging),
      :dispatch-action (this is exposed mainly for debugging).

  Data flow:
  (init)
  |
  V
  model -> (view-model) -> (view) -signal-> (control) -action-> (reconcile) -> model -> etc."
  [{:as _spec_ :keys [init view-model view control reconcile]}
   env
   & init-args]
  (let [model (apply init (concat init-args [env]))
        model-ratom (r/atom model)]
    ; for now dispatch functions return nil to make API even smaller
    (letfn [(dispatch-action [action] (swap! model-ratom reconcile action env) nil)
            (dispatch-signal [signal] (control @model-ratom signal dispatch-action env) nil)
            (reagent-view [] [view (view-model @model-ratom env) dispatch-signal env])]
      (dispatch-signal :on-connect)

      {:view            reagent-view
       :dispatch-signal dispatch-signal
       :model           model-ratom
       :dispatch-action dispatch-action})))

;;;;;;;;;;;;;;;;;;;;;;;; Utils
(defn tagged
  "Function decorator which prepends a tag to the single argument.
  I.e. it transforms an arg x to [tag x]."
  [f tag]
  (fn tagged-fn
    [x]
    (f [tag x])))

;;;;;;;;;;;;;;;;;;;;;;;; Middleware
(defn wrap-log
  [spec]
  (-> spec
      (update :control #(fn control
                         [model signal dispatch env]
                         (println "signal =" signal)
                         (println "   " model)
                         (% model signal dispatch env)))
      (update :reconcile #(fn reconcile
                           [model action env]
                           (println "  action =" action)
                           (let [result (% model action env)]
                             ;(println "   " model)
                             ;(println "     ->")
                             ;(println "   " result)
                             result)))))