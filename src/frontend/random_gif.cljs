(ns frontend.random-gif
  (:require [frontend.ui :as ui]
            [frontend.giphy-api :as giphy]
            [cljs.core.match :refer-macros [match]]))

(defn -init
  "Creates a gif with specified topic and waiting indicator."
  [topic _env_]
  {:topic   topic
   :gif-url "https://media.giphy.com/media/bIvp5gwLq9MEo/giphy.gif"})

(defn -control
  "Example of using external dependency passed in env."
  [model signal dispatch env]
  (match signal
         (:or :on-connect :on-request-more)
         ((:gif-fetcher env) (:topic model) #(dispatch [:set-new-gif %]))))

(defn -reconcile
  [model action _env_]
  (match action
         [:set-new-gif url]
         (assoc model :gif-url url)))

(defn -view-model
  [model _env_]
  (update model :topic str "!"))

(defn -view
  [view-model dispatch _env_]
  [:div
   [:div
    [:strong (:topic view-model)]
    [:button {:on-click #(dispatch :on-request-more)} "More Please!"]]
   [:img {:style {:width 150}
          :src   (:gif-url view-model)}]])

; requires :gif-fetcher
(def random-gif
  {:init       -init
   :view-model -view-model
   :view       -view
   :control    -control
   :reconcile  -reconcile})

(defn example
  []
  (-> random-gif
      ui/wrap-log
      (ui/connect-reagent {:gif-fetcher giphy/get-random-gif}
                          "funny cats")))

(defn example-view
  "Wrapper to get rid of unnecessary calls to ui/connect on Figwheel reloads.
  In particular, :on-connect will not be triggered on each reload."
  []
  (:view (example)))