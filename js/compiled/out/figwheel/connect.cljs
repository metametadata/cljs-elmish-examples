(ns figwheel.connect (:require [frontend.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/frontend.core.on-js-reload (apply js/frontend.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'frontend.core/on-js-reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

