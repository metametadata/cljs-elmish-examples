(ns frontend.random-gif-pair
  (:require [frontend.ui :as ui]
            [frontend.random-gif :refer [random-gif]]
            [frontend.giphy-api :as giphy]
            [cljs.core.match :refer-macros [match]]))

(defn -init
  [topic-left topic-right env]
  {:left  ((:init random-gif) topic-left env)
   :right ((:init random-gif) topic-right env)})

(defn -control
  [model signal dispatch env]
  (match signal
         :on-connect
         (do
           ((:control random-gif) (:left model) :on-connect (ui/tagged dispatch :left) env)
           ((:control random-gif) (:right model) :on-connect (ui/tagged dispatch :right) env))

         [:left s]
         ((:control random-gif) (:left model) s (ui/tagged dispatch :left) env)

         [:right s]
         ((:control random-gif) (:right model) s (ui/tagged dispatch :right) env)))

(defn -reconcile
  [model action env]
  (match action
         [:left a]
         (update model :left (:reconcile random-gif) a env)

         [:right a]
         (update model :right (:reconcile random-gif) a env)))

(defn -view-model
  [model env]
  {:left  ((:view-model random-gif) (:left model) env)
   :right ((:view-model random-gif) (:right model) env)})

(defn -view
  [view-model dispatch env]
  [:div {:style {:display "flex"}}
   [(:view random-gif) (:left view-model) (ui/tagged dispatch :left) env]
   [(:view random-gif) (:right view-model) (ui/tagged dispatch :right) env]])

; requires :gif-fetcher
(def random-gif-pair
  {:init       -init
   :view-model -view-model
   :view       -view
   :control    -control
   :reconcile  -reconcile})

(defn example
  []
  (-> random-gif-pair
      ui/wrap-log
      (ui/connect-reagent {:gif-fetcher giphy/get-random-gif}
                          "funny cats" "funny dogs")))

(defn example-view
  "Wrapper to get rid of unnecessary calls to ui/connect on Figwheel reloads.
  In particular, :on-connect will not be triggered on each reload."
  []
  (:view (example)))