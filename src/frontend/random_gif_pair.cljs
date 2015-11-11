(ns frontend.random-gif-pair
  (:require [frontend.ui :as ui]
            [frontend.giphy-api :as giphy]
            [reagent.core :as r]
            [cljs.core.match :refer-macros [match]]
            [frontend.random-gif :as random-gif]))

(defn init
  [topic-left topic-right]
  {:left  (random-gif/init topic-left)
   :right (random-gif/init topic-right)})

(defn new-control
  [gif-fetcher]
  (fn control
    [model signal dispatch]
    (match signal
           :on-connect
           (do
             ((random-gif/new-control gif-fetcher) (:left model) :on-connect (ui/tagged dispatch :left))
             ((random-gif/new-control gif-fetcher) (:right model) :on-connect (ui/tagged dispatch :right)))

           [:left e]
           ((random-gif/new-control gif-fetcher) (:left model) e (ui/tagged dispatch :left))

           [:right e]
           ((random-gif/new-control gif-fetcher) (:right model) e (ui/tagged dispatch :right)))))

(defn reconcile
  [model action]
  (match action
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
  (ui/connect model view-model view
              (-> (new-control giphy/get-random-gif)
                  ui/wrap-log-signals)
              (ui/wrap-log-actions reconcile)))

(defn example-view
  "Wrapper to get rid of unnecessary calls to ui/connect on Figwheel reloads.
  In particalur, :on-connect will not be triggered on each reload."
  []
  (:view (example)))