(ns frontend.core
  (:require [frontend.counter :as counter]
            [frontend.counter-pair :as counter-pair]
            [frontend.counter-list :as counter-list]
            [frontend.counter-list-fancy :as counter-list-fancy]
            [frontend.random-gif :as random-gif]
            [frontend.random-gif-pair :as random-gif-pair]
            [frontend.random-gif-list :as random-gif-list]
            [frontend.generic-list :as generic-list]
            [frontend.ui :as ui]
            [frontend.persistence-middleware :as persistence]
            [frontend.giphy-api :as giphy]
            [reagent.core :as r]))

(enable-console-print!)

(defn title
  [text]
  [:div {:style {:margin-left "2em" :margin-right "1em"}} text])

; this atom will not be reset on figwheel reloads
(defonce hot-reload-storage (transient {}))

(defn example-view
  "Given a component spec and init args constructs a component instance with logging and hot-reload persistence.
  Returns instance's view.

  Storage key must be unique for each example."
  [storage-key spec & init-args]
  (-> spec
      ui/wrap-log
      (persistence/wrap hot-reload-storage storage-key nil)
      (ui/connect-reagent init-args)
      :view))

; this var can be accessed from REPL
; note that we don't add persistence middleware, because it can only be used with map-like models
(def counter-example (-> counter/spec
                         ui/wrap-log
                         (ui/connect-reagent [1])))

(defn app-view
  []
  [:div {:style {:display "flex" :flex-direction "column" :flex-wrap "wrap"}}
   [:h3 "Counter"]
   [:div {:style {:display "flex" :flex-direction "row"}}
    [title "Single:"]
    [(:view counter-example)]

    [title "Pair:"]
    [example-view :counter-pair counter-pair/spec 1 2]]

   [:h3 "Counter list"]
   [:div {:style {:display "flex" :flex-direction "row"}}
    [title "Ordinary:"]
    [example-view :counter-list counter-list/spec]

    [title "Fancy:"]
    [example-view :counter-list-fancy counter-list-fancy/spec]]

   [:h3 "Random GIF"]
   [:div {:style {:display "flex" :flex-direction "row"}}
    [title "Single:"]
    [example-view :random-gif (random-gif/new-spec giphy/get-random-gif) "funny cats"]

    [title "Pair:"]
    [example-view :random-gif-pair (random-gif-pair/new-spec giphy/get-random-gif) "funny cats" "funny dogs"]]

   [:h3 "Random GIF list"]
   [:div
    [example-view :random-gif-list (random-gif-list/new-spec giphy/get-random-gif)]]

   [:h3 "List of lists"]
   [:div
    [example-view :list-of-lists (generic-list/new-spec
                                   (generic-list/new-spec
                                     (random-gif/new-spec giphy/get-random-gif)
                                     "nature"))]]])

(defn main
  []
  (println "Hi.")
  (r/render-component app-view (. js/document (getElementById "app"))))

(main)

(defn on-js-reload
  []
  #_(. js/console clear))