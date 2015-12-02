// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.counter');
goog.require('cljs.core');
goog.require('cljs.core.match');
/**
 * Pure function. Creates a model intance.
 */
frontend.counter.init = (function frontend$counter$init(x){
return x;
});
/**
 * Non-pure signal handler.
 *   Based on current model snapshot and received signal it can dispatch actions further to reconcile.
 */
frontend.counter.control = (function frontend$counter$control(_model_,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e23314){if((e23314 instanceof Error)){
var e__20496__auto__ = e23314;
if((e__20496__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-increment","on-increment",1757490926))){
return dispatch.call(null,new cljs.core.Keyword(null,"increment","increment",-1558831484));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23315){if((e23315 instanceof Error)){
var e__20496__auto____$1 = e23315;
if((e__20496__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-decrement","on-decrement",614026502))){
return dispatch.call(null,new cljs.core.Keyword(null,"decrement","decrement",-725286119));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23316){if((e23316 instanceof Error)){
var e__20496__auto____$2 = e23316;
if((e__20496__auto____$2 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__20496__auto____$2;
}
} else {
throw e23316;

}
}} else {
throw e__20496__auto____$1;
}
} else {
throw e23315;

}
}} else {
throw e__20496__auto__;
}
} else {
throw e23314;

}
}});
/**
 * Pure function. It returns a new model based on current model snapshot and received action.
 */
frontend.counter.reconcile = (function frontend$counter$reconcile(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"increment","increment",-1558831484))){
return (model + (1));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23321){if((e23321 instanceof Error)){
var e__20496__auto__ = e23321;
if((e__20496__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"decrement","decrement",-725286119))){
return (model - (1));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23322){if((e23322 instanceof Error)){
var e__20496__auto____$1 = e23322;
if((e__20496__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__20496__auto____$1;
}
} else {
throw e23322;

}
}} else {
throw e__20496__auto__;
}
} else {
throw e23321;

}
}});
/**
 * Pure function. Given a model snapshot returns an immutable value for view to display.
 */
frontend.counter.view_model = (function frontend$counter$view_model(model){
return [cljs.core.str("#"),cljs.core.str(model)].join('');
});
/**
 * Pure function. View is given an immutable view-model and a signal dispatching function.
 */
frontend.counter.view = (function frontend$counter$view(view_model,dispatch){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-increment","on-increment",1757490926));
})], null),"+"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),view_model], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-decrement","on-decrement",614026502));
})], null),"-"], null)], null);
});
/**
 * dispatch-on-remove is passed because it's up to container to decide how to handle removing.
 */
frontend.counter.view_with_remove_button = (function frontend$counter$view_with_remove_button(view_model,p__23323){
var map__23326 = p__23323;
var map__23326__$1 = ((((!((map__23326 == null)))?((((map__23326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23326):map__23326);
var _context_ = map__23326__$1;
var dispatch = cljs.core.get.call(null,map__23326__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var dispatch_on_remove = cljs.core.get.call(null,map__23326__$1,new cljs.core.Keyword(null,"dispatch-on-remove","dispatch-on-remove",-1399998797));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23326,map__23326__$1,_context_,dispatch,dispatch_on_remove){
return (function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-increment","on-increment",1757490926));
});})(map__23326,map__23326__$1,_context_,dispatch,dispatch_on_remove))
], null),"+"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),view_model], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23326,map__23326__$1,_context_,dispatch,dispatch_on_remove){
return (function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-decrement","on-decrement",614026502));
});})(map__23326,map__23326__$1,_context_,dispatch,dispatch_on_remove))
], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23326,map__23326__$1,_context_,dispatch,dispatch_on_remove){
return (function (){
return dispatch_on_remove.call(null);
});})(map__23326,map__23326__$1,_context_,dispatch,dispatch_on_remove))
], null),"X"], null)], null);
});
frontend.counter.spec = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init","init",-1875481434),frontend.counter.init,new cljs.core.Keyword(null,"view-model","view-model",-895405675),frontend.counter.view_model,new cljs.core.Keyword(null,"view","view",1247994814),frontend.counter.view,new cljs.core.Keyword(null,"control","control",1892578036),frontend.counter.control,new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),frontend.counter.reconcile], null);

//# sourceMappingURL=counter.js.map?rel=1449083085552