(ns frontend.random-gif
  (:require [frontend.ui :as ui]
            [ajax.core :as ajax]
            [reagent.core :as r]
            [cljs.core.match :refer-macros [match]]))

(defn init
  "Creates a gif with specified topic and waiting indicator."
  [topic]
  {:topic   topic
   :gif-url "https://media.giphy.com/media/bIvp5gwLq9MEo/giphy.gif"})

(defn get-random-gif
  "Async. Will eventually call (handler url) on success."
  [topic handler]
  (ajax/GET "http://api.giphy.com/v1/gifs/random"
            {:params  {"api_key" "dc6zaTOxFJmzC"
                       "tag"     topic}
             :handler #(handler (get-in % ["data" "image_url"]))}))

(defn control
  [model event dispatch]
  (match event
         (:or :on-connect :on-request-more)
         (get-random-gif (:topic model) #(dispatch [:set-new-gif %]))))

(defn reconcile
  [model command]
  (match command
         [:set-new-gif url]
         (assoc model :gif-url url)))

(defn view-model
  [model]
  (update model :topic str "!"))

(defn view
  [view-model dispatch]
  [:div
   [:div
    [:strong (:topic view-model)]
    [:button {:on-click #(dispatch :on-request-more)} "More Please!"]]
   [:img {:style {:width 150}
          :src   (:gif-url view-model)}]])

(defonce model (r/atom (init "funny cats")))
(defn example
  []
  (ui/connect model view-model view (ui/wrap-log-events control) (ui/wrap-log-commands reconcile)))

(defn example-view
  "Wrapper to get rid of unnecessary calls to ui/connect on Figwheel reloads.
  In particalur, :on-connect will not be triggered on each reload."
  []
  (:view (example)))