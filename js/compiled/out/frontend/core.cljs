(ns frontend.core
  (:require [frontend.counter :as counter]
            [frontend.counter-pair :as counter-pair]
            [frontend.counter-list :as counter-list]
            [frontend.counter-list-fancy :as counter-list-fancy]
            [frontend.random-gif :as random-gif]
            [frontend.random-gif-pair :as random-gif-pair]
            [frontend.random-gif-list :as random-gif-list]
            [reagent.core :as r]))

(enable-console-print!)

(defn title
  [text]
  [:div {:style {:margin-left "2em" :margin-right "1em"}} text])

(defn app-view
  []
  [:div {:style {:display "flex" :flex-direction "column" :flex-wrap "wrap"}}
   [:h3 "Counter"]
   [:div {:style {:display "flex" :flex-direction "row"}}
    [title "Single:"]
    [counter/example-view]
    [title "Pair:"]
    [counter-pair/example-view]]

   [:h3 "Counter list"]
   [:div {:style {:display "flex" :flex-direction "row"}}
    [title "Ordinary:"]
    [counter-list/example-view]
    [title "Fancy:"]
    [counter-list-fancy/example-view]]

   [:h3 "Random GIF"]
   [:div {:style {:display "flex" :flex-direction "row"}}
    [title "Single:"]
    [random-gif/example-view]
    [title "Pair:"]
    [random-gif-pair/example-view]]

   [:h3 "Random GIF list"]
   [:div
    [random-gif-list/example-view]]])

(defn main
  []
  (println "Hi.")
  (r/render-component app-view (. js/document (getElementById "app"))))

(main)

(defn on-js-reload
  []
  #_(. js/console clear))