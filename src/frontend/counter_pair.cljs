(ns frontend.counter-pair
  (:require [frontend.ui :as ui]
            [frontend.counter :refer [counter]]
            [cljs.core.match :refer-macros [match]]))

(defn -init
  [top bottom env]
  {:top-counter    ((:init counter) top env)
   :bottom-counter ((:init counter) bottom env)})

(defn -control
  [model signal dispatch env]
  (match signal
         :on-connect nil
         :on-reset (dispatch :reset)
         [:top s] ((:control counter) (:top-counter model) s (ui/tagged dispatch :top) env)
         [:bottom s] ((:control counter) (:bottom-counter model) s (ui/tagged dispatch :bottom) env)))

(defn -reconcile
  [model action env]
  (match action
         :reset (-init 0 0 env)
         [:top a] (update model :top-counter (:reconcile counter) a env)
         [:bottom a] (update model :bottom-counter (:reconcile counter) a env)))

(defn -view-model
  [model env]
  {:top-counter    ((:view-model counter) (:top-counter model) env)
   :bottom-counter ((:view-model counter) (:bottom-counter model) env)})

(defn -view
  [view-model dispatch env]
  [:div
   [(:view counter) (:top-counter view-model) (ui/tagged dispatch :top) env]
   [(:view counter) (:bottom-counter view-model) (ui/tagged dispatch :bottom) env]
   [:button {:on-click #(dispatch :on-reset)} "Reset"]])

(def counter-pair
  {:init       -init
   :view-model -view-model
   :view       -view
   :control    -control
   :reconcile  -reconcile})

(defn example
  []
  (-> counter-pair
      ui/wrap-log
      (ui/connect-reagent {} 1 2)))

(defn example-view
  "Wrapper to get rid of unnecessary calls to ui/connect on Figwheel reloads.
  In particular, :on-connect will not be triggered on each reload."
  []
  (:view (example)))