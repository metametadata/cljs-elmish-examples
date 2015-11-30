// Compiled by ClojureScript 1.7.122 {}
goog.provide('frontend.counter');
goog.require('cljs.core');
goog.require('frontend.ui');
goog.require('cljs.core.match');
goog.require('reagent.core');
/**
 * Creates a model intance.
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
}catch (e27116){if((e27116 instanceof Error)){
var e__19072__auto__ = e27116;
if((e__19072__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-increment","on-increment",1757490926))){
return dispatch.call(null,new cljs.core.Keyword(null,"increment","increment",-1558831484));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27117){if((e27117 instanceof Error)){
var e__19072__auto____$1 = e27117;
if((e__19072__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-decrement","on-decrement",614026502))){
return dispatch.call(null,new cljs.core.Keyword(null,"decrement","decrement",-725286119));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27118){if((e27118 instanceof Error)){
var e__19072__auto____$2 = e27118;
if((e__19072__auto____$2 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__19072__auto____$2;
}
} else {
throw e27118;

}
}} else {
throw e__19072__auto____$1;
}
} else {
throw e27117;

}
}} else {
throw e__19072__auto__;
}
} else {
throw e27116;

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
}catch (e27123){if((e27123 instanceof Error)){
var e__19072__auto__ = e27123;
if((e__19072__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"decrement","decrement",-725286119))){
return (model - (1));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27124){if((e27124 instanceof Error)){
var e__19072__auto____$1 = e27124;
if((e__19072__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__19072__auto____$1;
}
} else {
throw e27124;

}
}} else {
throw e__19072__auto__;
}
} else {
throw e27123;

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
frontend.counter.view_with_remove_button = (function frontend$counter$view_with_remove_button(view_model,p__27125){
var map__27128 = p__27125;
var map__27128__$1 = ((((!((map__27128 == null)))?((((map__27128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27128):map__27128);
var _context_ = map__27128__$1;
var dispatch = cljs.core.get.call(null,map__27128__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var dispatch_on_remove = cljs.core.get.call(null,map__27128__$1,new cljs.core.Keyword(null,"dispatch-on-remove","dispatch-on-remove",-1399998797));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27128,map__27128__$1,_context_,dispatch,dispatch_on_remove){
return (function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-increment","on-increment",1757490926));
});})(map__27128,map__27128__$1,_context_,dispatch,dispatch_on_remove))
], null),"+"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),view_model], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27128,map__27128__$1,_context_,dispatch,dispatch_on_remove){
return (function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-decrement","on-decrement",614026502));
});})(map__27128,map__27128__$1,_context_,dispatch,dispatch_on_remove))
], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27128,map__27128__$1,_context_,dispatch,dispatch_on_remove){
return (function (){
return dispatch_on_remove.call(null);
});})(map__27128,map__27128__$1,_context_,dispatch,dispatch_on_remove))
], null),"X"], null)], null);
});
if(typeof frontend.counter.model !== 'undefined'){
} else {
frontend.counter.model = reagent.core.atom.call(null,frontend.counter.init.call(null,(1)));
}
frontend.counter.example = (function frontend$counter$example(){
return frontend.ui.connect.call(null,frontend.counter.model,frontend.counter.view_model,frontend.counter.view,frontend.ui.wrap_log_signals.call(null,frontend.counter.control),frontend.ui.wrap_log_actions.call(null,frontend.counter.reconcile));
});

//# sourceMappingURL=counter.js.map?rel=1448902872304