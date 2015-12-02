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
}catch (e23341){if((e23341 instanceof Error)){
var e__20496__auto__ = e23341;
if((e__20496__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-reset","on-reset",1057446829))){
return dispatch.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23342){if((e23342 instanceof Error)){
var e__20496__auto____$1 = e23342;
if((e__20496__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__23339 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__23339,new cljs.core.Keyword(null,"top","top",-1856271961))){
var s = cljs.core.nth.call(null,signal,(1));
return frontend.counter.control.call(null,new cljs.core.Keyword(null,"top-counter","top-counter",2087161924).cljs$core$IFn$_invoke$arity$1(model),s,frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"top","top",-1856271961)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23344){if((e23344 instanceof Error)){
var e__20496__auto____$2 = e23344;
if((e__20496__auto____$2 === cljs.core.match.backtrack)){
try{var signal_0__23339 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__23339,new cljs.core.Keyword(null,"bottom","bottom",-1550509018))){
var s = cljs.core.nth.call(null,signal,(1));
return frontend.counter.control.call(null,new cljs.core.Keyword(null,"bottom-counter","bottom-counter",-2039474780).cljs$core$IFn$_invoke$arity$1(model),s,frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"bottom","bottom",-1550509018)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23345){if((e23345 instanceof Error)){
var e__20496__auto____$3 = e23345;
if((e__20496__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20496__auto____$3;
}
} else {
throw e23345;

}
}} else {
throw e__20496__auto____$2;
}
} else {
throw e23344;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23343){if((e23343 instanceof Error)){
var e__20496__auto____$2 = e23343;
if((e__20496__auto____$2 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__20496__auto____$2;
}
} else {
throw e23343;

}
}} else {
throw e__20496__auto____$1;
}
} else {
throw e23342;

}
}} else {
throw e__20496__auto__;
}
} else {
throw e23341;

}
}});
frontend.counter_pair.reconcile = (function frontend$counter_pair$reconcile(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"reset","reset",-800929946))){
return frontend.counter_pair.init.call(null,(0),(0));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23356){if((e23356 instanceof Error)){
var e__20496__auto__ = e23356;
if((e__20496__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__23354 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__23354,new cljs.core.Keyword(null,"top","top",-1856271961))){
var a = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"top-counter","top-counter",2087161924),frontend.counter.reconcile,a);
} else {
throw cljs.core.match.backtrack;

}
}catch (e23358){if((e23358 instanceof Error)){
var e__20496__auto____$1 = e23358;
if((e__20496__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__23354 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__23354,new cljs.core.Keyword(null,"bottom","bottom",-1550509018))){
var a = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"bottom-counter","bottom-counter",-2039474780),frontend.counter.reconcile,a);
} else {
throw cljs.core.match.backtrack;

}
}catch (e23359){if((e23359 instanceof Error)){
var e__20496__auto____$2 = e23359;
if((e__20496__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20496__auto____$2;
}
} else {
throw e23359;

}
}} else {
throw e__20496__auto____$1;
}
} else {
throw e23358;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23357){if((e23357 instanceof Error)){
var e__20496__auto____$1 = e23357;
if((e__20496__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__20496__auto____$1;
}
} else {
throw e23357;

}
}} else {
throw e__20496__auto__;
}
} else {
throw e23356;

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

//# sourceMappingURL=counter_pair.js.map?rel=1449083085600