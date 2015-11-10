My take at implementing Elm-ish architecture in ClojureScript using Reagent, core.match and Specter.

Highlights:
* (view-model) function is applied before handing model to a view
* side-effects are handled in a different way: view triggers "events", "events" can trigger "commands".
Events from a view flow into a non-pure (control) function which can 
dispatch commands to a pure (reconcile) function which updates a model, i.e. the flow is:

    model -> (view-model) -> (view) -event-> (control) -command-> (reconcile) -> model
* no addresses - communication is performed by calling explicit (dispatch) function
* middleware can be added to any function; this is how logging of events and commands is implemented in examples
* hot-reloading for free, thanks to Figwheel
* random-gif-list uses Specter to update the nested model; compare it to more verbose "vanilla" updates in counter-list

See original tutorial:
https://github.com/evancz/elm-architecture-tutorial/

Other implementations:
* http://spin.atomicobject.com/2015/07/09/implementing-elm-architecture-clojurescript/
* https://github.com/gaearon/react-elmish-example/tree/master/src/enhancers
* https://github.com/Gozala/reflex-react-driver/tree/master/examples

Also take a look at these UI libs: 
* [dominator](https://github.com/dubiousdavid/dominator)
* [re-frame](https://github.com/Day8/re-frame)
* [Om Next](https://github.com/omcljs/om/wiki/Quick-Start-(om.next))
* [Redux](https://github.com/rackt/redux)
* [Cerebral](https://github.com/christianalfoni/cerebral)
* [CycleJS](http://cycle.js.org/)

---

To get an interactive development environment run:

    lein figwheel

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
