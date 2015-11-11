(ns frontend.random-gif-pair
  (:require [frontend.ui :as ui]
            [reagent.core :as r]
            [cljs.core.match :refer-macros [match]]
            [frontend.random-gif :as random-gif]))

(defn init
  [topic-left topic-right]
  {:left  (random-gif/init topic-left)
   :right (random-gif/init topic-right)})

(defn control
  [model event dispatch]
  (match event
         :on-connect
         (do
           (random-gif/control (:left model) :on-connect (ui/tagged dispatch :left))
           (random-gif/control (:right model) :on-connect (ui/tagged dispatch :right)))

         [:left e]
         (random-gif/control (:left model) e (ui/tagged dispatch :left))

         [:right e]
         (random-gif/control (:right model) e (ui/tagged dispatch :right))))

(defn reconcile
  [model command]
  (match command
         [:left c]
         (update model :left random-gif/reconcile c)

         [:right c]
         (update model :right random-gif/reconcile c)))

(defn view-model
  [model]
  {:left  (random-gif/view-model (:left model))
   :right (random-gif/view-model (:right model))})

(defn view
  [view-model dispatch]
  [:div {:style {:display "flex"}}
   [random-gif/view (:left view-model) (ui/tagged dispatch :left)]
   [random-gif/view (:right view-model) (ui/tagged dispatch :right)]])

(defonce model (r/atom (init "funny cats" "funny dogs")))
(defn example
  []
  (ui/connect model view-model view (ui/wrap-log-events control) (ui/wrap-log-commands reconcile)))

(defn example-view
  "Wrapper to get rid of unnecessary calls to ui/connect on Figwheel reloads.
  In particalur, :on-connect will not be triggered on each reload."
  []
  (:view (example)))