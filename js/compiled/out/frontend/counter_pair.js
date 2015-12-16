// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.counter_pair');
goog.require('cljs.core');
goog.require('frontend.ui');
goog.require('frontend.counter');
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
}catch (e29381){if((e29381 instanceof Error)){
var e__19654__auto__ = e29381;
if((e__19654__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-reset","on-reset",1057446829))){
return dispatch.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29382){if((e29382 instanceof Error)){
var e__19654__auto____$1 = e29382;
if((e__19654__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__29379 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29379,new cljs.core.Keyword(null,"top","top",-1856271961))){
var s = cljs.core.nth.call(null,signal,(1));
return frontend.counter.control.call(null,new cljs.core.Keyword(null,"top-counter","top-counter",2087161924).cljs$core$IFn$_invoke$arity$1(model),s,((function (s,signal_0__29379,e__19654__auto____$1,e__19654__auto__){
return (function (p1__29368_SHARP_){
return new cljs.core.Keyword(null,"top-counter","top-counter",2087161924).cljs$core$IFn$_invoke$arity$1(dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),p1__29368_SHARP_], null)));
});})(s,signal_0__29379,e__19654__auto____$1,e__19654__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29384){if((e29384 instanceof Error)){
var e__19654__auto____$2 = e29384;
if((e__19654__auto____$2 === cljs.core.match.backtrack)){
try{var signal_0__29379 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29379,new cljs.core.Keyword(null,"bottom","bottom",-1550509018))){
var s = cljs.core.nth.call(null,signal,(1));
return frontend.counter.control.call(null,new cljs.core.Keyword(null,"bottom-counter","bottom-counter",-2039474780).cljs$core$IFn$_invoke$arity$1(model),s,((function (s,signal_0__29379,e__19654__auto____$2,e__19654__auto____$1,e__19654__auto__){
return (function (p1__29369_SHARP_){
return new cljs.core.Keyword(null,"bottom-counter","bottom-counter",-2039474780).cljs$core$IFn$_invoke$arity$1(dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),p1__29369_SHARP_], null)));
});})(s,signal_0__29379,e__19654__auto____$2,e__19654__auto____$1,e__19654__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29385){if((e29385 instanceof Error)){
var e__19654__auto____$3 = e29385;
if((e__19654__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19654__auto____$3;
}
} else {
throw e29385;

}
}} else {
throw e__19654__auto____$2;
}
} else {
throw e29384;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29383){if((e29383 instanceof Error)){
var e__19654__auto____$2 = e29383;
if((e__19654__auto____$2 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__19654__auto____$2;
}
} else {
throw e29383;

}
}} else {
throw e__19654__auto____$1;
}
} else {
throw e29382;

}
}} else {
throw e__19654__auto__;
}
} else {
throw e29381;

}
}});
frontend.counter_pair.reconcile = (function frontend$counter_pair$reconcile(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"reset","reset",-800929946))){
return frontend.counter_pair.init.call(null,(0),(0));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29396){if((e29396 instanceof Error)){
var e__19654__auto__ = e29396;
if((e__19654__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__29394 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29394,new cljs.core.Keyword(null,"top","top",-1856271961))){
var a = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"top-counter","top-counter",2087161924),frontend.counter.reconcile,a);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29398){if((e29398 instanceof Error)){
var e__19654__auto____$1 = e29398;
if((e__19654__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__29394 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29394,new cljs.core.Keyword(null,"bottom","bottom",-1550509018))){
var a = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"bottom-counter","bottom-counter",-2039474780),frontend.counter.reconcile,a);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29399){if((e29399 instanceof Error)){
var e__19654__auto____$2 = e29399;
if((e__19654__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19654__auto____$2;
}
} else {
throw e29399;

}
}} else {
throw e__19654__auto____$1;
}
} else {
throw e29398;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29397){if((e29397 instanceof Error)){
var e__19654__auto____$1 = e29397;
if((e__19654__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__19654__auto____$1;
}
} else {
throw e29397;

}
}} else {
throw e__19654__auto__;
}
} else {
throw e29396;

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
frontend.counter_pair.spec = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init","init",-1875481434),frontend.counter_pair.init,new cljs.core.Keyword(null,"view-model","view-model",-895405675),frontend.counter_pair.view_model,new cljs.core.Keyword(null,"view","view",1247994814),frontend.counter_pair.view,new cljs.core.Keyword(null,"control","control",1892578036),frontend.counter_pair.control,new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),frontend.counter_pair.reconcile], null);

//# sourceMappingURL=counter_pair.js.map?rel=1450279744291