(ns frontend.counter
  (:require [frontend.ui :as ui]
            [cljs.core.match :refer-macros [match]]
            [reagent.core :as r]))

(defn init
  "Creates a model intance."
  [x]
  x)

(defn control
  "Non-pure event handler.
  Based on current model snapshot and received event it can dispatch a command further to reconcile."
  [_model_ event dispatch]
  ; nothing interesting here: simply turn events into appropriate commands
  (match event
         :on-connect nil
         :on-increment (dispatch :increment)
         :on-decrement (dispatch :decrement)))

(defn reconcile
  "Pure function. It returns a new model based on current model snapshot and received command."
  [model command]
  (match command
         :increment (inc model)
         :decrement (dec model)))

(defn view-model
  "Given a model snapshot returns an immutable value for view to display."
  [model]
  (str "#" model))

(defn view
  "View is given an immutable view-model and event dispatching function."
  [view-model dispatch]
  [:div
   [:button {:on-click #(dispatch :on-increment)} "+"]
   [:span view-model]
   [:button {:on-click #(dispatch :on-decrement)} "-"]])

(defn view-with-remove-button
    "dispatch-on-remove is passed because it's up to container to decide how to handle removing."
    [view-model {:keys [dispatch dispatch-on-remove] :as _context_}]
    [:div
     [:button {:on-click #(dispatch :on-increment)} "+"]
     [:span view-model]
     [:button {:on-click #(dispatch :on-decrement)} "-"]
     [:button {:on-click #(dispatch-on-remove)} "X"]])

(defonce model (r/atom (init 1)))
(defn example-view
  []
  [ui/connect model view-model view (ui/wrap-log-events control) (ui/wrap-log-commands reconcile)])