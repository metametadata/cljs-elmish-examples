(ns frontend.random-gif-list
  (:require [frontend.ui :as ui]
            [frontend.random-gif :refer [random-gif]]
            [frontend.giphy-api :as giphy]
            [cljs.core.match :refer-macros [match]]
            [com.rpl.specter :as s]))

(defn -init
  [_env_]
  {:topic   ""
   ; list of {:id ... :item ...} maps
   :gifs    (list)
   :next-id 0})

(defn -update-gifs*
  "Applies a function of args [gif-model & args] to the gif items specified by predicate.
  The function can have side-effects. Returns a new model."
  [model pred f & args]
  (s/transform [:gifs s/ALL pred :item]
               #(apply f % args)
               model))

(defn -update-gif
  [model id f & args]
  (apply -update-gifs* model #(= (:id %) id) f args))

(defn -update-every-gif
  [model f & args]
  (apply -update-gifs* model (constantly true) f args))

(defn -control
  [model signal dispatch env]
  (match signal
         :on-connect nil

         [:on-input-topic val]
         (dispatch [:set-topic val])

         :on-insert
         (do
           (dispatch :insert)

           ; TODO: it's better to [somehow] dispatch :on-connect to created gif?
           ((:gif-fetcher env)
             (:topic model)
             #((ui/tagged dispatch [:sub-action (:next-id model)]) [:set-new-gif %])))

         [[:on-sub-signal id] s]
         (-update-gif model id
                      (:control random-gif) s (ui/tagged dispatch [:sub-action id]) env)))

(defn -reconcile
  [model action env]
  (match action
         [:set-topic val]
         (assoc model :topic val)

         :insert
         (-> model
             (update :gifs concat [{:id   (:next-id model)
                                    :item ((:init random-gif) (:topic model) env)}])
             (update :next-id inc)
             (assoc :topic ""))

         [[:sub-action id] a]
         (-update-gif model id (:reconcile random-gif) a env)))

(defn -view-model
  [model env]
  (select-keys (-update-every-gif model (:view-model random-gif) env)
               [:topic :gifs]))

(defn -element-view
  [{:keys [id item]} dispatch env]
  [(:view random-gif) item (ui/tagged dispatch [:on-sub-signal id]) env])

(defn -is-enter-key?
  [e]
  (= (.-keyCode e) 13))

(defn -view
  [view-model dispatch env]
  (let [gifs (map #(-element-view % dispatch env) (:gifs view-model))]
    [:div
     [:input
      {:style       {:width "20em" :height "2em"}
       :placeholder "What kind of gifs do you want?"
       :value       (:topic view-model)
       :on-key-down #(when (-is-enter-key? %) (dispatch :on-insert))
       :on-change   #(dispatch [:on-input-topic (.. % -target -value)])
       }]
     remove
     [:hr]
     (into [:div {:style {:display "flex" :flex-wrap "wrap"}}] gifs)]))

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
      (ui/connect-reagent {:gif-fetcher giphy/get-random-gif})))

(defn example-view
  "Wrapper to get rid of unnecessary calls to ui/connect on Figwheel reloads.
  In particalur, :on-connect will not be triggered on each reload."
  []
  (:view (example)))