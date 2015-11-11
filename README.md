### My take at implementing Elm-ish architecture in ClojureScript using Reagent, core.match and Specter.

[DEMO](http://metametadata.github.io/cljs-elmish-examples/)

## Highlights
* (view-model) function is applied before handing model to a view
* side-effects are handled in a different way: "signals" from a view flow into a side-effecty (control) function which 
can dispatch "actions" to a pure (reconcile) function which updates a model, i.e. the flow is:

```
model -> (view-model) -> (view) -signal-> (control) -action-> (reconcile) -> model
```
    
* no addresses; communication is performed by calling explicit (dispatch) function
* middleware can be added to any function; this is how logging of signals and actions is implemented in examples
* *random-gif-list* uses Specter to update the nested model; compare it to more verbose "vanilla" updates in *counter-list*
* hot-reloading for free, thanks to Figwheel
* it's possible to manually dispatch signals and actions via Figwheel REPL and immediately see results in a browser:
  
```
$ lein figwheel
...
cljs.user=> (ns frontend.core)

frontend.core=> ((:dispatch-action counter-example) :increment)
  action = :increment
    6 ->
    7
```
* external dependencies can be easily injected into components by using closures; for instance, this is how 
gif fetcher client is injected in *random-gif*:

```
(defn new-control
  [gif-fetcher]
  (fn control
    [model signal dispatch]
    (match signal
           (:or :on-connect :on-request-more)
           (gif-fetcher (:topic model) #(dispatch [:set-new-gif %])))))

; ...
(ui/connect model view-model view
              (-> (new-control giphy/get-random-gif)
                  ui/wrap-log-signals)
              (ui/wrap-log-actions reconcile))
```
Now, when unit testing control behavior, it should be easy to stub async API code.

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