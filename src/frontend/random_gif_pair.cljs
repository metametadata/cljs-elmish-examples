(ns frontend.random-gif-pair
  (:require [frontend.ui :as ui]
            [frontend.random-gif :as random-gif]
            [frontend.giphy-api :as giphy]
            [cljs.core.match :refer-macros [match]]))

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

           [:left s]
           ((random-gif/new-control gif-fetcher) (:left model) s (ui/tagged dispatch :left))

           [:right s]
           ((random-gif/new-control gif-fetcher) (:right model) s (ui/tagged dispatch :right)))))

(defn reconcile
  [model action]
  (match action
         [:left a]
         (update model :left random-gif/reconcile a)

         [:right a]
         (update model :right random-gif/reconcile a)))

(defn view-model
  [model]
  {:left  (random-gif/view-model (:left model))
   :right (random-gif/view-model (:right model))})

(defn view
  [view-model dispatch]
  [:div {:style {:display "flex"}}
   [random-gif/view (:left view-model) (ui/tagged dispatch :left)]
   [random-gif/view (:right view-model) (ui/tagged dispatch :right)]])

(defn new-spec
  [gif-fetcher]
  {:init       init
   :view-model view-model
   :view       view
   :control    (new-control gif-fetcher)
   :reconcile  reconcile})

(defn example
  []
  (-> (new-spec giphy/get-random-gif)
      ui/wrap-log
      (ui/connect-reagent "funny cats" "funny dogs")))

(defn example-view
  "Wrapper to get rid of unnecessary calls to ui/connect on Figwheel reloads.
  In particular, :on-connect will not be triggered on each reload."
  []
  (:view (example)))