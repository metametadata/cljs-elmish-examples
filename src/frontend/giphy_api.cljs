(ns frontend.giphy-api
  (:require [ajax.core :as ajax]))

(defn get-random-gif
  "Async. Will eventually call (handler url) on success."
  [topic handler]
  (ajax/GET "http://api.giphy.com/v1/gifs/random"
            {:params  {"api_key" "dc6zaTOxFJmzC"
                       "tag"     topic}
             :handler #(handler (get-in % ["data" "image_url"]))}))