// Compiled by ClojureScript 1.7.122 {}
goog.provide('frontend.counter_list_fancy');
goog.require('cljs.core');
goog.require('frontend.ui');
goog.require('frontend.counter');
goog.require('reagent.core');
goog.require('cljs.core.match');
frontend.counter_list_fancy.init = (function frontend$counter_list_fancy$init(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"counters","counters",33475982),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"next-id","next-id",-224240762),(0)], null);
});
/**
 * Applies a function of args [counter-model & args] to the counters specified by predicate.
 *   The function can have side-effects. Returns a new model.
 */
frontend.counter_list_fancy.update_counters_STAR_ = (function frontend$counter_list_fancy$update_counters_STAR_(var_args){
var args__17139__auto__ = [];
var len__17132__auto___27297 = arguments.length;
var i__17133__auto___27298 = (0);
while(true){
if((i__17133__auto___27298 < len__17132__auto___27297)){
args__17139__auto__.push((arguments[i__17133__auto___27298]));

var G__27299 = (i__17133__auto___27298 + (1));
i__17133__auto___27298 = G__27299;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((3) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((3)),(0))):null);
return frontend.counter_list_fancy.update_counters_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17140__auto__);
});

frontend.counter_list_fancy.update_counters_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
var update_counter = (function frontend$counter_list_fancy$update_counter(p__27294){
var vec__27296 = p__27294;
var counter_id = cljs.core.nth.call(null,vec__27296,(0),null);
var counter_model = cljs.core.nth.call(null,vec__27296,(1),null);
var counter = vec__27296;
if(cljs.core.truth_(pred.call(null,counter))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter_id,cljs.core.apply.call(null,f,counter_model,args)], null);
} else {
return counter;
}
});
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"counters","counters",33475982),(function (p1__27286_SHARP_){
return cljs.core.doall.call(null,cljs.core.map.call(null,update_counter,p1__27286_SHARP_));
}));
});

frontend.counter_list_fancy.update_counters_STAR_.cljs$lang$maxFixedArity = (3);

frontend.counter_list_fancy.update_counters_STAR_.cljs$lang$applyTo = (function (seq27287){
var G__27288 = cljs.core.first.call(null,seq27287);
var seq27287__$1 = cljs.core.next.call(null,seq27287);
var G__27289 = cljs.core.first.call(null,seq27287__$1);
var seq27287__$2 = cljs.core.next.call(null,seq27287__$1);
var G__27290 = cljs.core.first.call(null,seq27287__$2);
var seq27287__$3 = cljs.core.next.call(null,seq27287__$2);
return frontend.counter_list_fancy.update_counters_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__27288,G__27289,G__27290,seq27287__$3);
});
frontend.counter_list_fancy.update_counter = (function frontend$counter_list_fancy$update_counter(var_args){
var args__17139__auto__ = [];
var len__17132__auto___27305 = arguments.length;
var i__17133__auto___27306 = (0);
while(true){
if((i__17133__auto___27306 < len__17132__auto___27305)){
args__17139__auto__.push((arguments[i__17133__auto___27306]));

var G__27307 = (i__17133__auto___27306 + (1));
i__17133__auto___27306 = G__27307;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((3) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((3)),(0))):null);
return frontend.counter_list_fancy.update_counter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17140__auto__);
});

frontend.counter_list_fancy.update_counter.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.counter_list_fancy.update_counters_STAR_,model,(function (p1__27300_SHARP_){
return cljs.core._EQ_.call(null,id,cljs.core.first.call(null,p1__27300_SHARP_));
}),f,args);
});

frontend.counter_list_fancy.update_counter.cljs$lang$maxFixedArity = (3);

frontend.counter_list_fancy.update_counter.cljs$lang$applyTo = (function (seq27301){
var G__27302 = cljs.core.first.call(null,seq27301);
var seq27301__$1 = cljs.core.next.call(null,seq27301);
var G__27303 = cljs.core.first.call(null,seq27301__$1);
var seq27301__$2 = cljs.core.next.call(null,seq27301__$1);
var G__27304 = cljs.core.first.call(null,seq27301__$2);
var seq27301__$3 = cljs.core.next.call(null,seq27301__$2);
return frontend.counter_list_fancy.update_counter.cljs$core$IFn$_invoke$arity$variadic(G__27302,G__27303,G__27304,seq27301__$3);
});
frontend.counter_list_fancy.update_every_counter = (function frontend$counter_list_fancy$update_every_counter(var_args){
var args__17139__auto__ = [];
var len__17132__auto___27311 = arguments.length;
var i__17133__auto___27312 = (0);
while(true){
if((i__17133__auto___27312 < len__17132__auto___27311)){
args__17139__auto__.push((arguments[i__17133__auto___27312]));

var G__27313 = (i__17133__auto___27312 + (1));
i__17133__auto___27312 = G__27313;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((2) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((2)),(0))):null);
return frontend.counter_list_fancy.update_every_counter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17140__auto__);
});

frontend.counter_list_fancy.update_every_counter.cljs$core$IFn$_invoke$arity$variadic = (function (model,f,args){
return cljs.core.apply.call(null,frontend.counter_list_fancy.update_counters_STAR_,model,cljs.core.constantly.call(null,true),f,args);
});

frontend.counter_list_fancy.update_every_counter.cljs$lang$maxFixedArity = (2);

frontend.counter_list_fancy.update_every_counter.cljs$lang$applyTo = (function (seq27308){
var G__27309 = cljs.core.first.call(null,seq27308);
var seq27308__$1 = cljs.core.next.call(null,seq27308);
var G__27310 = cljs.core.first.call(null,seq27308__$1);
var seq27308__$2 = cljs.core.next.call(null,seq27308__$1);
return frontend.counter_list_fancy.update_every_counter.cljs$core$IFn$_invoke$arity$variadic(G__27309,G__27310,seq27308__$2);
});
frontend.counter_list_fancy.control = (function frontend$counter_list_fancy$control(model,event,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,event,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e27330){if((e27330 instanceof Error)){
var e__19034__auto__ = e27330;
if((e__19034__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,event,new cljs.core.Keyword(null,"on-insert","on-insert",2113239980))){
return dispatch.call(null,new cljs.core.Keyword(null,"insert","insert",1286475395));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27331){if((e27331 instanceof Error)){
var e__19034__auto____$1 = e27331;
if((e__19034__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,event)) && ((cljs.core.count.call(null,event) === 2))){
try{var event_0__27326 = cljs.core.nth.call(null,event,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,event_0__27326,new cljs.core.Keyword(null,"on-remove","on-remove",-268656163))){
var id = cljs.core.nth.call(null,event,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27333){if((e27333 instanceof Error)){
var e__19034__auto____$2 = e27333;
if((e__19034__auto____$2 === cljs.core.match.backtrack)){
try{var event_0__27326 = cljs.core.nth.call(null,event,(0));
if((cljs.core.vector_QMARK_.call(null,event_0__27326)) && ((cljs.core.count.call(null,event_0__27326) === 2))){
try{var event_0__27326_0__27328 = cljs.core.nth.call(null,event_0__27326,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,event_0__27326_0__27328,new cljs.core.Keyword(null,"on-modify","on-modify",2031917378))){
var id = cljs.core.nth.call(null,event_0__27326,(1));
var e = cljs.core.nth.call(null,event,(1));
return frontend.counter_list_fancy.update_counter.call(null,model,id,frontend.counter.control,e,frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modify","modify",-1261040869),id], null)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27335){if((e27335 instanceof Error)){
var e__19034__auto____$3 = e27335;
if((e__19034__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19034__auto____$3;
}
} else {
throw e27335;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27334){if((e27334 instanceof Error)){
var e__19034__auto____$3 = e27334;
if((e__19034__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19034__auto____$3;
}
} else {
throw e27334;

}
}} else {
throw e__19034__auto____$2;
}
} else {
throw e27333;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27332){if((e27332 instanceof Error)){
var e__19034__auto____$2 = e27332;
if((e__19034__auto____$2 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(event)].join('')));
} else {
throw e__19034__auto____$2;
}
} else {
throw e27332;

}
}} else {
throw e__19034__auto____$1;
}
} else {
throw e27331;

}
}} else {
throw e__19034__auto__;
}
} else {
throw e27330;

}
}});
frontend.counter_list_fancy.reconcile = (function frontend$counter_list_fancy$reconcile(model,command){
try{if(cljs.core.keyword_identical_QMARK_.call(null,command,new cljs.core.Keyword(null,"insert","insert",1286475395))){
return cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"counters","counters",33475982),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(model),frontend.counter.init.call(null,(0))], null)], null)),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27354){if((e27354 instanceof Error)){
var e__19034__auto__ = e27354;
if((e__19034__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,command)) && ((cljs.core.count.call(null,command) === 2))){
try{var command_0__27350 = cljs.core.nth.call(null,command,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,command_0__27350,new cljs.core.Keyword(null,"remove","remove",-131428414))){
var id = cljs.core.nth.call(null,command,(1));
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"counters","counters",33475982),((function (id,command_0__27350,e__19034__auto__){
return (function (p1__27336_SHARP_){
return cljs.core.filter.call(null,((function (id,command_0__27350,e__19034__auto__){
return (function (p__27359){
var vec__27360 = p__27359;
var cid = cljs.core.nth.call(null,vec__27360,(0),null);
var _ = cljs.core.nth.call(null,vec__27360,(1),null);
return cljs.core.not_EQ_.call(null,cid,id);
});})(id,command_0__27350,e__19034__auto__))
,p1__27336_SHARP_);
});})(id,command_0__27350,e__19034__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27356){if((e27356 instanceof Error)){
var e__19034__auto____$1 = e27356;
if((e__19034__auto____$1 === cljs.core.match.backtrack)){
try{var command_0__27350 = cljs.core.nth.call(null,command,(0));
if((cljs.core.vector_QMARK_.call(null,command_0__27350)) && ((cljs.core.count.call(null,command_0__27350) === 2))){
try{var command_0__27350_0__27352 = cljs.core.nth.call(null,command_0__27350,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,command_0__27350_0__27352,new cljs.core.Keyword(null,"modify","modify",-1261040869))){
var id = cljs.core.nth.call(null,command_0__27350,(1));
var c = cljs.core.nth.call(null,command,(1));
return frontend.counter_list_fancy.update_counter.call(null,model,id,frontend.counter.reconcile,c);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27358){if((e27358 instanceof Error)){
var e__19034__auto____$2 = e27358;
if((e__19034__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19034__auto____$2;
}
} else {
throw e27358;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27357){if((e27357 instanceof Error)){
var e__19034__auto____$2 = e27357;
if((e__19034__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19034__auto____$2;
}
} else {
throw e27357;

}
}} else {
throw e__19034__auto____$1;
}
} else {
throw e27356;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27355){if((e27355 instanceof Error)){
var e__19034__auto____$1 = e27355;
if((e__19034__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(command)].join('')));
} else {
throw e__19034__auto____$1;
}
} else {
throw e27355;

}
}} else {
throw e__19034__auto__;
}
} else {
throw e27354;

}
}});
frontend.counter_list_fancy.view_model = (function frontend$counter_list_fancy$view_model(model){
return cljs.core.select_keys.call(null,frontend.counter_list_fancy.update_every_counter.call(null,model,frontend.counter.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counters","counters",33475982)], null));
});
frontend.counter_list_fancy.view_counter = (function frontend$counter_list_fancy$view_counter(p__27361,dispatch){
var vec__27363 = p__27361;
var id = cljs.core.nth.call(null,vec__27363,(0),null);
var view_model = cljs.core.nth.call(null,vec__27363,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.counter.view_with_remove_button,view_model,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-modify","on-modify",2031917378),id], null)),new cljs.core.Keyword(null,"dispatch-on-remove","dispatch-on-remove",-1399998797),((function (vec__27363,id,view_model){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-remove","on-remove",-268656163),id], null));
});})(vec__27363,id,view_model))
], null)], null);
});
frontend.counter_list_fancy.view = (function frontend$counter_list_fancy$view(view_model,dispatch){
var counters = cljs.core.map.call(null,(function (p1__27364_SHARP_){
return frontend.counter_list_fancy.view_counter.call(null,p1__27364_SHARP_,dispatch);
}),new cljs.core.Keyword(null,"counters","counters",33475982).cljs$core$IFn$_invoke$arity$1(view_model));
var insert = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (counters){
return (function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-insert","on-insert",2113239980));
});})(counters))
], null),"Insert"], null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),insert,cljs.core.remove], null),counters);
});
if(typeof frontend.counter_list_fancy.model !== 'undefined'){
} else {
frontend.counter_list_fancy.model = reagent.core.atom.call(null,frontend.counter_list_fancy.init.call(null));
}
frontend.counter_list_fancy.example_view = (function frontend$counter_list_fancy$example_view(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.ui.connect,frontend.counter_list_fancy.model,frontend.counter_list_fancy.view_model,frontend.counter_list_fancy.view,frontend.ui.wrap_log_events.call(null,frontend.counter_list_fancy.control),frontend.ui.wrap_log_commands.call(null,frontend.counter_list_fancy.reconcile)], null);
});

//# sourceMappingURL=counter_list_fancy.js.map?rel=1447113458141