(ns frontend.random-gif
  (:require [frontend.ui :as ui]
            [frontend.giphy-api :as giphy]
            [cljs.core.match :refer-macros [match]]))

(defn init
  "Creates a gif with specified topic and waiting indicator."
  [topic]
  {:topic   topic
   :gif-url "https://media.giphy.com/media/bIvp5gwLq9MEo/giphy.gif"})

(defn new-control
  "Example of using external dependency"
  [gif-fetcher]
  (fn control
    [model signal dispatch]
    (match signal
           (:or :on-connect :on-request-more)
           (gif-fetcher (:topic model) #(dispatch [:set-new-gif %])))))

(defn reconcile
  [model action]
  (match action
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

(defn new-spec
  [gif-fether]
  {:init       init
   :view-model view-model
   :view       view
   :control    (new-control gif-fether)
   :reconcile  reconcile})

(defn example
  []
  (-> (new-spec giphy/get-random-gif)
      ui/wrap-log
      (ui/connect-reagent "funny cats")))

(defn example-view
  "Wrapper to get rid of unnecessary calls to ui/connect on Figwheel reloads.
  In particular, :on-connect will not be triggered on each reload."
  []
  (:view (example)))