(ns frontend.counter-pair
  (:require [frontend.ui :as ui]
            [frontend.counter :as counter]
            [reagent.core :as r]
            [cljs.core.match :refer-macros [match]]))

(defn init
  [top bottom]
  {:top-counter    (counter/init top)
   :bottom-counter (counter/init bottom)})

(defn control
  [model event dispatch]
  (match event
         :on-connect nil
         :on-reset (dispatch :reset)
         [:top e] (counter/control (:top-counter model) e (ui/tagged dispatch :top))
         [:bottom e] (counter/control (:bottom-counter model) e (ui/tagged dispatch :bottom))))

(defn reconcile
  [model command]
  (match command
         :reset (init 0 0)
         [:top c] (update model :top-counter counter/reconcile c)
         [:bottom c] (update model :bottom-counter counter/reconcile c)))

(defn view-model
  [model]
  {:top-counter    (counter/view-model (:top-counter model))
   :bottom-counter (counter/view-model (:bottom-counter model))})

(defn view
  [view-model dispatch]
  [:div
   [counter/view (:top-counter view-model) (ui/tagged dispatch :top)]
   [counter/view (:bottom-counter view-model) (ui/tagged dispatch :bottom)]
   [:button {:on-click #(dispatch :on-reset)} "Reset"]])

(defonce model (r/atom (init 1 2)))
(defn example-view
  []
  [ui/connect model view-model view (ui/wrap-log-events control) (ui/wrap-log-commands reconcile)])