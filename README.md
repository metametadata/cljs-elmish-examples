### My take at implementing Elm-ish architecture in ClojureScript using Reagent, core.match and Specter.

[DEMO](http://metametadata.github.io/cljs-elmish-examples/)

Also take a look at my TodoMVC implementation using the same pattern [HERE](https://github.com/metametadata/cljs-elmish-todomvc) and see the pattern explored further in [Carry](https://github.com/metametadata/carry) framework.

## Highlights
* (view-model) function is applied before handing model to a view
* side-effects are handled in a different way: "signals" from a view flow into a side-effecty (control) function which 
can dispatch "actions" to a pure (reconcile) function which updates a model, i.e. the flow is:

```
(init)
  |
  V
model -> (view-model) -> (view) -signal-> (control) -action-> (reconcile) -> model -> etc.
```
    
* no addresses; communication is performed by calling explicit (dispatch) functions
* hot-reloading for free, thanks to Figwheel
* it's possible to manually dispatch signals and actions via Figwheel REPL and immediately see results in a browser:
  
```
$ lein figwheel
...
cljs.user=> (ns frontend.core)

frontend.core=> ((:dispatch-action counter-example) :increment)
```
* component functions (init, view-model, view, control, reconcile) can be passed around in "spec" maps for easier 
middleware wrapping and using in generic components:

```clj
; logged list of lists of gifs
(-> (generic-list/new-spec
      (generic-list/new-spec
        (random-gif/new-spec giphy/get-random-gif)
        "nature"))
    ui/wrap-log)      
```
* example models are persisted per Figwheel session by using *persistence-middleware*, 
so that on hot-reloading the models are not reset to initial state (but reloading the browser tab will reset the models)
* external dependencies can be easily injected into components by using closures and spec factories; 
for instance, this is how gif fetcher client is injected in *random-gif*:

```clj
(defn new-control
  [gif-fetcher]
  (fn control
    [model signal dispatch]
    (match signal
           (:or :on-connect :on-request-more)
           (gif-fetcher (:topic model) #(dispatch [:set-new-gif %])))))

(defn new-spec
  [gif-fetcher]
  {:init       init
   :view-model view-model
   :view       view
   :control    (new-control gif-fetcher)
   :reconcile  reconcile})

; ...

(ui/connect-reagent (new-spec giphy/get-random-gif) ["funny cats"])

; Pros: 
; 1) when unit testing control behavior it should be easy to stub async API code
; 2) parent components will be able to inject a different API client (e.g. Imgur one)
```
* *random-gif-list* uses Specter to update the nested model; compare it to more verbose "vanilla" updates in *counter-list*
* action dispatch function must return the new model.
It allows controller perform additional side-effects after action is handled (e.g. send updated model to server).
But it makes code for controlling subcomponents brittler, for instance:

```clj
; from counter-list.cljs
(defn control
  [model signal dispatch]
  (match signal
    ; ...
    [[:on-modify id] s]
    (-update-counter model id
                     counter/control
                     s
                     ; note how here we have to extract the subcomponent model, because it may be used in counter/control
                     #(-> (dispatch [[:modify id] %])
                          (-get-counter id))))
```

## TODO
* It's still a question to me, how to write big apps using this or original pattern. In particular, 
generic-list looks cool, but is it usable in a bigger app, e.g. to handle some part of the app model?
Maybe in a bigger app there would be a lot of dumb/stateless components and just a few stateful "sub-apps"/containers?
It seems to me, that Elm-ish architecture will not work well when different components must share some part of the single state data.

## Build

To get an interactive development environment run:

    lein figwheel
    
or better:
    
    rlwrap lein figwheel

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

    lein clean

To create a production build run:

    lein cljsbuild once min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL.

To deploy a build:
 
    ghp-import -p resources/public

## References
Original tutorial:
https://github.com/evancz/elm-architecture-tutorial/

Other implementations:
* http://spin.atomicobject.com/2015/07/09/implementing-elm-architecture-clojurescript/
* https://github.com/gaearon/react-elmish-example/
* https://github.com/Gozala/reflex-react-driver/tree/master/examples

Also take a look at these UI libs: 
* [dominator](https://github.com/dubiousdavid/dominator)
* [re-frame](https://github.com/Day8/re-frame)
* [Om Next](https://github.com/omcljs/om/wiki/Quick-Start-(om.next))
* [Redux](https://github.com/rackt/redux)
* [Cerebral](https://github.com/christianalfoni/cerebral)
* [CycleJS](http://cycle.js.org/)
