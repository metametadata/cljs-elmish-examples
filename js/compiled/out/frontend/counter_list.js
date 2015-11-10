// Compiled by ClojureScript 1.7.122 {}
goog.provide('frontend.counter_list');
goog.require('cljs.core');
goog.require('frontend.ui');
goog.require('frontend.counter');
goog.require('reagent.core');
goog.require('cljs.core.match');
frontend.counter_list.init = (function frontend$counter_list$init(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"counters","counters",33475982),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"next-id","next-id",-224240762),(0)], null);
});
/**
 * Applies a function of args [counter-model & args] to the counters specified by predicate.
 *   The function can have side-effects. Returns a new model.
 */
frontend.counter_list.update_counters_STAR_ = (function frontend$counter_list$update_counters_STAR_(var_args){
var args__17139__auto__ = [];
var len__17132__auto___27086 = arguments.length;
var i__17133__auto___27087 = (0);
while(true){
if((i__17133__auto___27087 < len__17132__auto___27086)){
args__17139__auto__.push((arguments[i__17133__auto___27087]));

var G__27088 = (i__17133__auto___27087 + (1));
i__17133__auto___27087 = G__27088;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((3) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((3)),(0))):null);
return frontend.counter_list.update_counters_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17140__auto__);
});

frontend.counter_list.update_counters_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
var update_counter = (function frontend$counter_list$update_counter(p__27083){
var vec__27085 = p__27083;
var counter_id = cljs.core.nth.call(null,vec__27085,(0),null);
var counter_model = cljs.core.nth.call(null,vec__27085,(1),null);
var counter = vec__27085;
if(cljs.core.truth_(pred.call(null,counter))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter_id,cljs.core.apply.call(null,f,counter_model,args)], null);
} else {
return counter;
}
});
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"counters","counters",33475982),(function (p1__27075_SHARP_){
return cljs.core.doall.call(null,cljs.core.map.call(null,update_counter,p1__27075_SHARP_));
}));
});

frontend.counter_list.update_counters_STAR_.cljs$lang$maxFixedArity = (3);

frontend.counter_list.update_counters_STAR_.cljs$lang$applyTo = (function (seq27076){
var G__27077 = cljs.core.first.call(null,seq27076);
var seq27076__$1 = cljs.core.next.call(null,seq27076);
var G__27078 = cljs.core.first.call(null,seq27076__$1);
var seq27076__$2 = cljs.core.next.call(null,seq27076__$1);
var G__27079 = cljs.core.first.call(null,seq27076__$2);
var seq27076__$3 = cljs.core.next.call(null,seq27076__$2);
return frontend.counter_list.update_counters_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__27077,G__27078,G__27079,seq27076__$3);
});
frontend.counter_list.update_counter = (function frontend$counter_list$update_counter(var_args){
var args__17139__auto__ = [];
var len__17132__auto___27094 = arguments.length;
var i__17133__auto___27095 = (0);
while(true){
if((i__17133__auto___27095 < len__17132__auto___27094)){
args__17139__auto__.push((arguments[i__17133__auto___27095]));

var G__27096 = (i__17133__auto___27095 + (1));
i__17133__auto___27095 = G__27096;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((3) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((3)),(0))):null);
return frontend.counter_list.update_counter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17140__auto__);
});

frontend.counter_list.update_counter.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.counter_list.update_counters_STAR_,model,(function (p1__27089_SHARP_){
return cljs.core._EQ_.call(null,id,cljs.core.first.call(null,p1__27089_SHARP_));
}),f,args);
});

frontend.counter_list.update_counter.cljs$lang$maxFixedArity = (3);

frontend.counter_list.update_counter.cljs$lang$applyTo = (function (seq27090){
var G__27091 = cljs.core.first.call(null,seq27090);
var seq27090__$1 = cljs.core.next.call(null,seq27090);
var G__27092 = cljs.core.first.call(null,seq27090__$1);
var seq27090__$2 = cljs.core.next.call(null,seq27090__$1);
var G__27093 = cljs.core.first.call(null,seq27090__$2);
var seq27090__$3 = cljs.core.next.call(null,seq27090__$2);
return frontend.counter_list.update_counter.cljs$core$IFn$_invoke$arity$variadic(G__27091,G__27092,G__27093,seq27090__$3);
});
frontend.counter_list.update_every_counter = (function frontend$counter_list$update_every_counter(var_args){
var args__17139__auto__ = [];
var len__17132__auto___27100 = arguments.length;
var i__17133__auto___27101 = (0);
while(true){
if((i__17133__auto___27101 < len__17132__auto___27100)){
args__17139__auto__.push((arguments[i__17133__auto___27101]));

var G__27102 = (i__17133__auto___27101 + (1));
i__17133__auto___27101 = G__27102;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((2) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((2)),(0))):null);
return frontend.counter_list.update_every_counter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17140__auto__);
});

frontend.counter_list.update_every_counter.cljs$core$IFn$_invoke$arity$variadic = (function (model,f,args){
return cljs.core.apply.call(null,frontend.counter_list.update_counters_STAR_,model,cljs.core.constantly.call(null,true),f,args);
});

frontend.counter_list.update_every_counter.cljs$lang$maxFixedArity = (2);

frontend.counter_list.update_every_counter.cljs$lang$applyTo = (function (seq27097){
var G__27098 = cljs.core.first.call(null,seq27097);
var seq27097__$1 = cljs.core.next.call(null,seq27097);
var G__27099 = cljs.core.first.call(null,seq27097__$1);
var seq27097__$2 = cljs.core.next.call(null,seq27097__$1);
return frontend.counter_list.update_every_counter.cljs$core$IFn$_invoke$arity$variadic(G__27098,G__27099,seq27097__$2);
});
frontend.counter_list.control = (function frontend$counter_list$control(model,event,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,event,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e27119){if((e27119 instanceof Error)){
var e__19034__auto__ = e27119;
if((e__19034__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,event,new cljs.core.Keyword(null,"on-insert","on-insert",2113239980))){
return dispatch.call(null,new cljs.core.Keyword(null,"insert","insert",1286475395));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27120){if((e27120 instanceof Error)){
var e__19034__auto____$1 = e27120;
if((e__19034__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,event,new cljs.core.Keyword(null,"on-remove","on-remove",-268656163))){
return dispatch.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27121){if((e27121 instanceof Error)){
var e__19034__auto____$2 = e27121;
if((e__19034__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,event)) && ((cljs.core.count.call(null,event) === 2))){
try{var event_0__27115 = cljs.core.nth.call(null,event,(0));
if((cljs.core.vector_QMARK_.call(null,event_0__27115)) && ((cljs.core.count.call(null,event_0__27115) === 2))){
try{var event_0__27115_0__27117 = cljs.core.nth.call(null,event_0__27115,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,event_0__27115_0__27117,new cljs.core.Keyword(null,"on-modify","on-modify",2031917378))){
var id = cljs.core.nth.call(null,event_0__27115,(1));
var e = cljs.core.nth.call(null,event,(1));
return frontend.counter_list.update_counter.call(null,model,id,frontend.counter.control,e,frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modify","modify",-1261040869),id], null)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27124){if((e27124 instanceof Error)){
var e__19034__auto____$3 = e27124;
if((e__19034__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19034__auto____$3;
}
} else {
throw e27124;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27123){if((e27123 instanceof Error)){
var e__19034__auto____$3 = e27123;
if((e__19034__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19034__auto____$3;
}
} else {
throw e27123;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27122){if((e27122 instanceof Error)){
var e__19034__auto____$3 = e27122;
if((e__19034__auto____$3 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(event)].join('')));
} else {
throw e__19034__auto____$3;
}
} else {
throw e27122;

}
}} else {
throw e__19034__auto____$2;
}
} else {
throw e27121;

}
}} else {
throw e__19034__auto____$1;
}
} else {
throw e27120;

}
}} else {
throw e__19034__auto__;
}
} else {
throw e27119;

}
}});
frontend.counter_list.reconcile = (function frontend$counter_list$reconcile(model,command){
try{if(cljs.core.keyword_identical_QMARK_.call(null,command,new cljs.core.Keyword(null,"insert","insert",1286475395))){
return cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"counters","counters",33475982),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(model),frontend.counter.init.call(null,(0))], null)], null)),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27140){if((e27140 instanceof Error)){
var e__19034__auto__ = e27140;
if((e__19034__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,command,new cljs.core.Keyword(null,"remove","remove",-131428414))){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"counters","counters",33475982),cljs.core.rest);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27141){if((e27141 instanceof Error)){
var e__19034__auto____$1 = e27141;
if((e__19034__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,command)) && ((cljs.core.count.call(null,command) === 2))){
try{var command_0__27136 = cljs.core.nth.call(null,command,(0));
if((cljs.core.vector_QMARK_.call(null,command_0__27136)) && ((cljs.core.count.call(null,command_0__27136) === 2))){
try{var command_0__27136_0__27138 = cljs.core.nth.call(null,command_0__27136,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,command_0__27136_0__27138,new cljs.core.Keyword(null,"modify","modify",-1261040869))){
var id = cljs.core.nth.call(null,command_0__27136,(1));
var c = cljs.core.nth.call(null,command,(1));
return frontend.counter_list.update_counter.call(null,model,id,frontend.counter.reconcile,c);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27144){if((e27144 instanceof Error)){
var e__19034__auto____$2 = e27144;
if((e__19034__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19034__auto____$2;
}
} else {
throw e27144;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27143){if((e27143 instanceof Error)){
var e__19034__auto____$2 = e27143;
if((e__19034__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19034__auto____$2;
}
} else {
throw e27143;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27142){if((e27142 instanceof Error)){
var e__19034__auto____$2 = e27142;
if((e__19034__auto____$2 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(command)].join('')));
} else {
throw e__19034__auto____$2;
}
} else {
throw e27142;

}
}} else {
throw e__19034__auto____$1;
}
} else {
throw e27141;

}
}} else {
throw e__19034__auto__;
}
} else {
throw e27140;

}
}});
frontend.counter_list.view_model = (function frontend$counter_list$view_model(model){
return cljs.core.select_keys.call(null,frontend.counter_list.update_every_counter.call(null,model,frontend.counter.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counters","counters",33475982)], null));
});
frontend.counter_list.view_counter = (function frontend$counter_list$view_counter(p__27145,dispatch){
var vec__27147 = p__27145;
var id = cljs.core.nth.call(null,vec__27147,(0),null);
var view_model = cljs.core.nth.call(null,vec__27147,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.counter.view,view_model,frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-modify","on-modify",2031917378),id], null))], null);
});
frontend.counter_list.view = (function frontend$counter_list$view(view_model,dispatch){
var counters = cljs.core.map.call(null,(function (p1__27148_SHARP_){
return frontend.counter_list.view_counter.call(null,p1__27148_SHARP_,dispatch);
}),new cljs.core.Keyword(null,"counters","counters",33475982).cljs$core$IFn$_invoke$arity$1(view_model));
var insert = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (counters){
return (function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-insert","on-insert",2113239980));
});})(counters))
], null),"Insert"], null);
var remove = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (counters,insert){
return (function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-remove","on-remove",-268656163));
});})(counters,insert))
], null),"Remove"], null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),insert,remove], null),counters);
});
if(typeof frontend.counter_list.model !== 'undefined'){
} else {
frontend.counter_list.model = reagent.core.atom.call(null,frontend.counter_list.init.call(null));
}
frontend.counter_list.example_view = (function frontend$counter_list$example_view(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.ui.connect,frontend.counter_list.model,frontend.counter_list.view_model,frontend.counter_list.view,frontend.ui.wrap_log_events.call(null,frontend.counter_list.control),frontend.ui.wrap_log_commands.call(null,frontend.counter_list.reconcile)], null);
});

//# sourceMappingURL=counter_list.js.map?rel=1447113457717