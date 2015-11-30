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
frontend.counter_pair.control = (function frontend$counter_pair$control(model,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e27143){if((e27143 instanceof Error)){
var e__19072__auto__ = e27143;
if((e__19072__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-reset","on-reset",1057446829))){
return dispatch.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27144){if((e27144 instanceof Error)){
var e__19072__auto____$1 = e27144;
if((e__19072__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__27141 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__27141,new cljs.core.Keyword(null,"top","top",-1856271961))){
var e = cljs.core.nth.call(null,signal,(1));
return frontend.counter.control.call(null,new cljs.core.Keyword(null,"top-counter","top-counter",2087161924).cljs$core$IFn$_invoke$arity$1(model),e,frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"top","top",-1856271961)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27146){if((e27146 instanceof Error)){
var e__19072__auto____$2 = e27146;
if((e__19072__auto____$2 === cljs.core.match.backtrack)){
try{var signal_0__27141 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__27141,new cljs.core.Keyword(null,"bottom","bottom",-1550509018))){
var e = cljs.core.nth.call(null,signal,(1));
return frontend.counter.control.call(null,new cljs.core.Keyword(null,"bottom-counter","bottom-counter",-2039474780).cljs$core$IFn$_invoke$arity$1(model),e,frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"bottom","bottom",-1550509018)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27147){if((e27147 instanceof Error)){
var e__19072__auto____$3 = e27147;
if((e__19072__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19072__auto____$3;
}
} else {
throw e27147;

}
}} else {
throw e__19072__auto____$2;
}
} else {
throw e27146;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27145){if((e27145 instanceof Error)){
var e__19072__auto____$2 = e27145;
if((e__19072__auto____$2 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__19072__auto____$2;
}
} else {
throw e27145;

}
}} else {
throw e__19072__auto____$1;
}
} else {
throw e27144;

}
}} else {
throw e__19072__auto__;
}
} else {
throw e27143;

}
}});
frontend.counter_pair.reconcile = (function frontend$counter_pair$reconcile(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"reset","reset",-800929946))){
return frontend.counter_pair.init.call(null,(0),(0));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27158){if((e27158 instanceof Error)){
var e__19072__auto__ = e27158;
if((e__19072__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__27156 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__27156,new cljs.core.Keyword(null,"top","top",-1856271961))){
var c = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"top-counter","top-counter",2087161924),frontend.counter.reconcile,c);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27160){if((e27160 instanceof Error)){
var e__19072__auto____$1 = e27160;
if((e__19072__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__27156 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__27156,new cljs.core.Keyword(null,"bottom","bottom",-1550509018))){
var c = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"bottom-counter","bottom-counter",-2039474780),frontend.counter.reconcile,c);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27161){if((e27161 instanceof Error)){
var e__19072__auto____$2 = e27161;
if((e__19072__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19072__auto____$2;
}
} else {
throw e27161;

}
}} else {
throw e__19072__auto____$1;
}
} else {
throw e27160;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27159){if((e27159 instanceof Error)){
var e__19072__auto____$1 = e27159;
if((e__19072__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__19072__auto____$1;
}
} else {
throw e27159;

}
}} else {
throw e__19072__auto__;
}
} else {
throw e27158;

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
frontend.counter_pair.example = (function frontend$counter_pair$example(){
return frontend.ui.connect.call(null,frontend.counter_pair.model,frontend.counter_pair.view_model,frontend.counter_pair.view,frontend.ui.wrap_log_signals.call(null,frontend.counter_pair.control),frontend.ui.wrap_log_actions.call(null,frontend.counter_pair.reconcile));
});
/**
 * Wrapper to get rid of unnecessary calls to ui/connect on Figwheel reloads.
 *   In particalur, :on-connect will not be triggered on each reload.
 */
frontend.counter_pair.example_view = (function frontend$counter_pair$example_view(){
return new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(frontend.counter_pair.example.call(null));
});

//# sourceMappingURL=counter_pair.js.map?rel=1448902872365