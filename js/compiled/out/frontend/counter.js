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
 * Non-pure event handler.
 *   Based on current model snapshot and received event it can dispatch a command further to reconcile.
 */
frontend.counter.control = (function frontend$counter$control(_model_,event,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,event,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e27027){if((e27027 instanceof Error)){
var e__19034__auto__ = e27027;
if((e__19034__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,event,new cljs.core.Keyword(null,"on-increment","on-increment",1757490926))){
return dispatch.call(null,new cljs.core.Keyword(null,"increment","increment",-1558831484));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27028){if((e27028 instanceof Error)){
var e__19034__auto____$1 = e27028;
if((e__19034__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,event,new cljs.core.Keyword(null,"on-decrement","on-decrement",614026502))){
return dispatch.call(null,new cljs.core.Keyword(null,"decrement","decrement",-725286119));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27029){if((e27029 instanceof Error)){
var e__19034__auto____$2 = e27029;
if((e__19034__auto____$2 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(event)].join('')));
} else {
throw e__19034__auto____$2;
}
} else {
throw e27029;

}
}} else {
throw e__19034__auto____$1;
}
} else {
throw e27028;

}
}} else {
throw e__19034__auto__;
}
} else {
throw e27027;

}
}});
/**
 * Pure function. It returns a new model based on current model snapshot and received command.
 */
frontend.counter.reconcile = (function frontend$counter$reconcile(model,command){
try{if(cljs.core.keyword_identical_QMARK_.call(null,command,new cljs.core.Keyword(null,"increment","increment",-1558831484))){
return (model + (1));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27034){if((e27034 instanceof Error)){
var e__19034__auto__ = e27034;
if((e__19034__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,command,new cljs.core.Keyword(null,"decrement","decrement",-725286119))){
return (model - (1));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27035){if((e27035 instanceof Error)){
var e__19034__auto____$1 = e27035;
if((e__19034__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(command)].join('')));
} else {
throw e__19034__auto____$1;
}
} else {
throw e27035;

}
}} else {
throw e__19034__auto__;
}
} else {
throw e27034;

}
}});
/**
 * Given a model snapshot returns an immutable value for view to display.
 */
frontend.counter.view_model = (function frontend$counter$view_model(model){
return [cljs.core.str("#"),cljs.core.str(model)].join('');
});
/**
 * View is given an immutable view-model and event dispatching function.
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
frontend.counter.view_with_remove_button = (function frontend$counter$view_with_remove_button(view_model,p__27036){
var map__27039 = p__27036;
var map__27039__$1 = ((((!((map__27039 == null)))?((((map__27039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27039):map__27039);
var _context_ = map__27039__$1;
var dispatch = cljs.core.get.call(null,map__27039__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var dispatch_on_remove = cljs.core.get.call(null,map__27039__$1,new cljs.core.Keyword(null,"dispatch-on-remove","dispatch-on-remove",-1399998797));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27039,map__27039__$1,_context_,dispatch,dispatch_on_remove){
return (function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-increment","on-increment",1757490926));
});})(map__27039,map__27039__$1,_context_,dispatch,dispatch_on_remove))
], null),"+"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),view_model], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27039,map__27039__$1,_context_,dispatch,dispatch_on_remove){
return (function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-decrement","on-decrement",614026502));
});})(map__27039,map__27039__$1,_context_,dispatch,dispatch_on_remove))
], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27039,map__27039__$1,_context_,dispatch,dispatch_on_remove){
return (function (){
return dispatch_on_remove.call(null);
});})(map__27039,map__27039__$1,_context_,dispatch,dispatch_on_remove))
], null),"X"], null)], null);
});
if(typeof frontend.counter.model !== 'undefined'){
} else {
frontend.counter.model = reagent.core.atom.call(null,frontend.counter.init.call(null,(1)));
}
frontend.counter.example_view = (function frontend$counter$example_view(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.ui.connect,frontend.counter.model,frontend.counter.view_model,frontend.counter.view,frontend.ui.wrap_log_events.call(null,frontend.counter.control),frontend.ui.wrap_log_commands.call(null,frontend.counter.reconcile)], null);
});

//# sourceMappingURL=counter.js.map?rel=1447113457468