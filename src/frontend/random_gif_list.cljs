(ns frontend.random-gif-list
  (:require [frontend.ui :as ui]
            [reagent.core :as r]
            [cljs.core.match :refer-macros [match]]
            [frontend.random-gif :as random-gif]
            [com.rpl.specter :as s]))

(defn init
  []
  {:topic   ""
   ; list of {:id ... :item ...} maps
   :gifs    (list)
   :next-id 0})

(defn update-gifs*
  "Applies a function of args [gif-model & args] to the gif items specified by predicate.
  The function can have side-effects. Returns a new model."
  [model pred f & args]
  (s/transform [:gifs s/ALL pred :item]
               #(apply f % args)
               model))

(defn update-gif
  [model id f & args]
  (apply update-gifs* model #(= (:id %) id) f args))

(defn update-every-gif
  [model f & args]
  (apply update-gifs* model (constantly true) f args))

(defn control
  [model signal dispatch]
  (match signal
         :on-connect nil

         [:on-input-topic val]
         (dispatch [:set-topic val])

         :on-insert
         (do
           (dispatch :insert)
           (random-gif/get-random-gif (:topic model)
                                      #((ui/tagged dispatch [:modify (:next-id model)])
                                        [:set-new-gif %])))

         [[:on-sub-signal id] e]
         (update-gif model id
                     random-gif/control e (ui/tagged dispatch [:modify id]))))

(defn reconcile
  [model action]
  (match action
         [:set-topic val]
         (assoc model :topic val)

         :insert
         (-> model
             (update :gifs concat [{:id   (:next-id model)
                                    :item (random-gif/init (:topic model))}])
             (update :next-id inc)
             (assoc :topic ""))

         [[:modify id] c]
         (update-gif model id random-gif/reconcile c)))

(defn view-model
  [model]
  (select-keys (update-every-gif model random-gif/view-model)
               [:topic :gifs]))

(defn element-view
  [{:keys [id item]} dispatch]
  [random-gif/view item (ui/tagged dispatch [:on-sub-signal id])])

(defn is-enter-key?
  [e]
  (= (.-keyCode e) 13))

(defn view
  [view-model dispatch]
  (let [gifs (map #(element-view % dispatch) (:gifs view-model))]
    [:div
     [:input
      {:style       {:width "20em" :height "2em"}
       :placeholder "What kind of gifs do you want?"
       :value       (:topic view-model)
       :on-key-down #(when (is-enter-key? %) (dispatch :on-insert))
       :on-change   #(dispatch [:on-input-topic (.. % -target -value)])
       }]
     remove
     [:hr]
     (into [:div {:style {:display "flex" :flex-wrap "wrap"}}] gifs)]))

(defonce model (r/atom (init)))
(defn example
  []
  (ui/connect model view-model view (ui/wrap-log-signals control) (ui/wrap-log-actions reconcile)))

(defn example-view
  "Wrapper to get rid of unnecessary calls to ui/connect on Figwheel reloads.
  In particalur, :on-connect will not be triggered on each reload."
  []
  (:view (example)))