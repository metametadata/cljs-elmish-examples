// Compiled by ClojureScript 1.7.122 {}
goog.provide('frontend.counter_pair');
goog.require('cljs.core');
goog.require('frontend.ui');
goog.require('frontend.counter');
goog.require('reagent.core');
goog.require('cljs.core.match');
frontend.counter_pair.init = (function frontend$counter_pair$init(top,bottom){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-counter","top-counter",2087161924),frontend.counter.init.call(null,top),new cljs.core.Keyword(null,"bottom-counter","bottom-counter",-2039474780),frontend.counter.init.call(null,bottom)], null);
});
frontend.counter_pair.control = (function frontend$counter_pair$control(model,event,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,event,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e27054){if((e27054 instanceof Error)){
var e__19034__auto__ = e27054;
if((e__19034__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,event,new cljs.core.Keyword(null,"on-reset","on-reset",1057446829))){
return dispatch.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27055){if((e27055 instanceof Error)){
var e__19034__auto____$1 = e27055;
if((e__19034__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,event)) && ((cljs.core.count.call(null,event) === 2))){
try{var event_0__27052 = cljs.core.nth.call(null,event,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,event_0__27052,new cljs.core.Keyword(null,"top","top",-1856271961))){
var e = cljs.core.nth.call(null,event,(1));
return frontend.counter.control.call(null,new cljs.core.Keyword(null,"top-counter","top-counter",2087161924).cljs$core$IFn$_invoke$arity$1(model),e,frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"top","top",-1856271961)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27057){if((e27057 instanceof Error)){
var e__19034__auto____$2 = e27057;
if((e__19034__auto____$2 === cljs.core.match.backtrack)){
try{var event_0__27052 = cljs.core.nth.call(null,event,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,event_0__27052,new cljs.core.Keyword(null,"bottom","bottom",-1550509018))){
var e = cljs.core.nth.call(null,event,(1));
return frontend.counter.control.call(null,new cljs.core.Keyword(null,"bottom-counter","bottom-counter",-2039474780).cljs$core$IFn$_invoke$arity$1(model),e,frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"bottom","bottom",-1550509018)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27058){if((e27058 instanceof Error)){
var e__19034__auto____$3 = e27058;
if((e__19034__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19034__auto____$3;
}
} else {
throw e27058;

}
}} else {
throw e__19034__auto____$2;
}
} else {
throw e27057;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27056){if((e27056 instanceof Error)){
var e__19034__auto____$2 = e27056;
if((e__19034__auto____$2 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(event)].join('')));
} else {
throw e__19034__auto____$2;
}
} else {
throw e27056;

}
}} else {
throw e__19034__auto____$1;
}
} else {
throw e27055;

}
}} else {
throw e__19034__auto__;
}
} else {
throw e27054;

}
}});
frontend.counter_pair.reconcile = (function frontend$counter_pair$reconcile(model,command){
try{if(cljs.core.keyword_identical_QMARK_.call(null,command,new cljs.core.Keyword(null,"reset","reset",-800929946))){
return frontend.counter_pair.init.call(null,(0),(0));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27069){if((e27069 instanceof Error)){
var e__19034__auto__ = e27069;
if((e__19034__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,command)) && ((cljs.core.count.call(null,command) === 2))){
try{var command_0__27067 = cljs.core.nth.call(null,command,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,command_0__27067,new cljs.core.Keyword(null,"top","top",-1856271961))){
var c = cljs.core.nth.call(null,command,(1));
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"top-counter","top-counter",2087161924),frontend.counter.reconcile,c);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27071){if((e27071 instanceof Error)){
var e__19034__auto____$1 = e27071;
if((e__19034__auto____$1 === cljs.core.match.backtrack)){
try{var command_0__27067 = cljs.core.nth.call(null,command,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,command_0__27067,new cljs.core.Keyword(null,"bottom","bottom",-1550509018))){
var c = cljs.core.nth.call(null,command,(1));
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"bottom-counter","bottom-counter",-2039474780),frontend.counter.reconcile,c);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27072){if((e27072 instanceof Error)){
var e__19034__auto____$2 = e27072;
if((e__19034__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19034__auto____$2;
}
} else {
throw e27072;

}
}} else {
throw e__19034__auto____$1;
}
} else {
throw e27071;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27070){if((e27070 instanceof Error)){
var e__19034__auto____$1 = e27070;
if((e__19034__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(command)].join('')));
} else {
throw e__19034__auto____$1;
}
} else {
throw e27070;

}
}} else {
throw e__19034__auto__;
}
} else {
throw e27069;

}
}});
frontend.counter_pair.view_model = (function frontend$counter_pair$view_model(model){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-counter","top-counter",2087161924),frontend.counter.view_model.call(null,new cljs.core.Keyword(null,"top-counter","top-counter",2087161924).cljs$core$IFn$_invoke$arity$1(model)),new cljs.core.Keyword(null,"bottom-counter","bottom-counter",-2039474780),frontend.counter.view_model.call(null,new cljs.core.Keyword(null,"bottom-counter","bottom-counter",-2039474780).cljs$core$IFn$_invoke$arity$1(model))], null);
});
frontend.counter_pair.view = (function frontend$counter_pair$view(view_model,dispatch){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.counter.view,new cljs.core.Keyword(null,"top-counter","top-counter",2087161924).cljs$core$IFn$_invoke$arity$1(view_model),frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"top","top",-1856271961))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.counter.view,new cljs.core.Keyword(null,"bottom-counter","bottom-counter",-2039474780).cljs$core$IFn$_invoke$arity$1(view_model),frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"bottom","bottom",-1550509018))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-reset","on-reset",1057446829));
})], null),"Reset"], null)], null);
});
if(typeof frontend.counter_pair.model !== 'undefined'){
} else {
frontend.counter_pair.model = reagent.core.atom.call(null,frontend.counter_pair.init.call(null,(1),(2)));
}
frontend.counter_pair.example_view = (function frontend$counter_pair$example_view(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.ui.connect,frontend.counter_pair.model,frontend.counter_pair.view_model,frontend.counter_pair.view,frontend.ui.wrap_log_events.call(null,frontend.counter_pair.control),frontend.ui.wrap_log_commands.call(null,frontend.counter_pair.reconcile)], null);
});

//# sourceMappingURL=counter_pair.js.map?rel=1447113457553