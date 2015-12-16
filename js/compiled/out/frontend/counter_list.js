// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.counter_list');
goog.require('cljs.core');
goog.require('frontend.ui');
goog.require('frontend.counter');
goog.require('cljs.core.match');
frontend.counter_list.init = (function frontend$counter_list$init(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"counters","counters",33475982),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"next-id","next-id",-224240762),(0)], null);
});
/**
 * Applies a function of args [counter-model & args] to the counters specified by predicate.
 *   The function can have side-effects. Returns a new model.
 */
frontend.counter_list._update_counters_STAR_ = (function frontend$counter_list$_update_counters_STAR_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___29413 = arguments.length;
var i__17810__auto___29414 = (0);
while(true){
if((i__17810__auto___29414 < len__17809__auto___29413)){
args__17816__auto__.push((arguments[i__17810__auto___29414]));

var G__29415 = (i__17810__auto___29414 + (1));
i__17810__auto___29414 = G__29415;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.counter_list._update_counters_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.counter_list._update_counters_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
var update_counter = (function frontend$counter_list$update_counter(p__29410){
var vec__29412 = p__29410;
var counter_id = cljs.core.nth.call(null,vec__29412,(0),null);
var counter_model = cljs.core.nth.call(null,vec__29412,(1),null);
var counter = vec__29412;
if(cljs.core.truth_(pred.call(null,counter))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter_id,cljs.core.apply.call(null,f,counter_model,args)], null);
} else {
return counter;
}
});
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"counters","counters",33475982),(function (p1__29402_SHARP_){
return cljs.core.doall.call(null,cljs.core.map.call(null,update_counter,p1__29402_SHARP_));
}));
});

frontend.counter_list._update_counters_STAR_.cljs$lang$maxFixedArity = (3);

frontend.counter_list._update_counters_STAR_.cljs$lang$applyTo = (function (seq29403){
var G__29404 = cljs.core.first.call(null,seq29403);
var seq29403__$1 = cljs.core.next.call(null,seq29403);
var G__29405 = cljs.core.first.call(null,seq29403__$1);
var seq29403__$2 = cljs.core.next.call(null,seq29403__$1);
var G__29406 = cljs.core.first.call(null,seq29403__$2);
var seq29403__$3 = cljs.core.next.call(null,seq29403__$2);
return frontend.counter_list._update_counters_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__29404,G__29405,G__29406,seq29403__$3);
});
frontend.counter_list._update_counter = (function frontend$counter_list$_update_counter(var_args){
var args__17816__auto__ = [];
var len__17809__auto___29421 = arguments.length;
var i__17810__auto___29422 = (0);
while(true){
if((i__17810__auto___29422 < len__17809__auto___29421)){
args__17816__auto__.push((arguments[i__17810__auto___29422]));

var G__29423 = (i__17810__auto___29422 + (1));
i__17810__auto___29422 = G__29423;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.counter_list._update_counter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.counter_list._update_counter.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.counter_list._update_counters_STAR_,model,(function (p1__29416_SHARP_){
return cljs.core._EQ_.call(null,id,cljs.core.first.call(null,p1__29416_SHARP_));
}),f,args);
});

frontend.counter_list._update_counter.cljs$lang$maxFixedArity = (3);

frontend.counter_list._update_counter.cljs$lang$applyTo = (function (seq29417){
var G__29418 = cljs.core.first.call(null,seq29417);
var seq29417__$1 = cljs.core.next.call(null,seq29417);
var G__29419 = cljs.core.first.call(null,seq29417__$1);
var seq29417__$2 = cljs.core.next.call(null,seq29417__$1);
var G__29420 = cljs.core.first.call(null,seq29417__$2);
var seq29417__$3 = cljs.core.next.call(null,seq29417__$2);
return frontend.counter_list._update_counter.cljs$core$IFn$_invoke$arity$variadic(G__29418,G__29419,G__29420,seq29417__$3);
});
frontend.counter_list._update_every_counter = (function frontend$counter_list$_update_every_counter(var_args){
var args__17816__auto__ = [];
var len__17809__auto___29427 = arguments.length;
var i__17810__auto___29428 = (0);
while(true){
if((i__17810__auto___29428 < len__17809__auto___29427)){
args__17816__auto__.push((arguments[i__17810__auto___29428]));

var G__29429 = (i__17810__auto___29428 + (1));
i__17810__auto___29428 = G__29429;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((2) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((2)),(0))):null);
return frontend.counter_list._update_every_counter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17817__auto__);
});

frontend.counter_list._update_every_counter.cljs$core$IFn$_invoke$arity$variadic = (function (model,f,args){
return cljs.core.apply.call(null,frontend.counter_list._update_counters_STAR_,model,cljs.core.constantly.call(null,true),f,args);
});

frontend.counter_list._update_every_counter.cljs$lang$maxFixedArity = (2);

frontend.counter_list._update_every_counter.cljs$lang$applyTo = (function (seq29424){
var G__29425 = cljs.core.first.call(null,seq29424);
var seq29424__$1 = cljs.core.next.call(null,seq29424);
var G__29426 = cljs.core.first.call(null,seq29424__$1);
var seq29424__$2 = cljs.core.next.call(null,seq29424__$1);
return frontend.counter_list._update_every_counter.cljs$core$IFn$_invoke$arity$variadic(G__29425,G__29426,seq29424__$2);
});
frontend.counter_list._get_counter = (function frontend$counter_list$_get_counter(model,id){
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29430_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__29430_SHARP_),id);
}),new cljs.core.Keyword(null,"counters","counters",33475982).cljs$core$IFn$_invoke$arity$1(model))));
});
frontend.counter_list.control = (function frontend$counter_list$control(model,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e29448){if((e29448 instanceof Error)){
var e__19654__auto__ = e29448;
if((e__19654__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-insert","on-insert",2113239980))){
return dispatch.call(null,new cljs.core.Keyword(null,"insert","insert",1286475395));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29449){if((e29449 instanceof Error)){
var e__19654__auto____$1 = e29449;
if((e__19654__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-remove","on-remove",-268656163))){
return dispatch.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29450){if((e29450 instanceof Error)){
var e__19654__auto____$2 = e29450;
if((e__19654__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__29444 = cljs.core.nth.call(null,signal,(0));
if((cljs.core.vector_QMARK_.call(null,signal_0__29444)) && ((cljs.core.count.call(null,signal_0__29444) === 2))){
try{var signal_0__29444_0__29446 = cljs.core.nth.call(null,signal_0__29444,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29444_0__29446,new cljs.core.Keyword(null,"on-modify","on-modify",2031917378))){
var id = cljs.core.nth.call(null,signal_0__29444,(1));
var s = cljs.core.nth.call(null,signal,(1));
return frontend.counter_list._update_counter.call(null,model,id,frontend.counter.control,s,((function (id,s,signal_0__29444_0__29446,signal_0__29444,e__19654__auto____$2,e__19654__auto____$1,e__19654__auto__){
return (function (p1__29431_SHARP_){
return frontend.counter_list._get_counter.call(null,dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modify","modify",-1261040869),id], null),p1__29431_SHARP_], null)),id);
});})(id,s,signal_0__29444_0__29446,signal_0__29444,e__19654__auto____$2,e__19654__auto____$1,e__19654__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29453){if((e29453 instanceof Error)){
var e__19654__auto____$3 = e29453;
if((e__19654__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19654__auto____$3;
}
} else {
throw e29453;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29452){if((e29452 instanceof Error)){
var e__19654__auto____$3 = e29452;
if((e__19654__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19654__auto____$3;
}
} else {
throw e29452;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29451){if((e29451 instanceof Error)){
var e__19654__auto____$3 = e29451;
if((e__19654__auto____$3 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__19654__auto____$3;
}
} else {
throw e29451;

}
}} else {
throw e__19654__auto____$2;
}
} else {
throw e29450;

}
}} else {
throw e__19654__auto____$1;
}
} else {
throw e29449;

}
}} else {
throw e__19654__auto__;
}
} else {
throw e29448;

}
}});
frontend.counter_list.reconcile = (function frontend$counter_list$reconcile(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"insert","insert",1286475395))){
return cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"counters","counters",33475982),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(model),frontend.counter.init.call(null,(0))], null)], null)),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29469){if((e29469 instanceof Error)){
var e__19654__auto__ = e29469;
if((e__19654__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"remove","remove",-131428414))){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"counters","counters",33475982),cljs.core.rest);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29470){if((e29470 instanceof Error)){
var e__19654__auto____$1 = e29470;
if((e__19654__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__29465 = cljs.core.nth.call(null,action,(0));
if((cljs.core.vector_QMARK_.call(null,action_0__29465)) && ((cljs.core.count.call(null,action_0__29465) === 2))){
try{var action_0__29465_0__29467 = cljs.core.nth.call(null,action_0__29465,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29465_0__29467,new cljs.core.Keyword(null,"modify","modify",-1261040869))){
var id = cljs.core.nth.call(null,action_0__29465,(1));
var a = cljs.core.nth.call(null,action,(1));
return frontend.counter_list._update_counter.call(null,model,id,frontend.counter.reconcile,a);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29473){if((e29473 instanceof Error)){
var e__19654__auto____$2 = e29473;
if((e__19654__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19654__auto____$2;
}
} else {
throw e29473;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29472){if((e29472 instanceof Error)){
var e__19654__auto____$2 = e29472;
if((e__19654__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19654__auto____$2;
}
} else {
throw e29472;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29471){if((e29471 instanceof Error)){
var e__19654__auto____$2 = e29471;
if((e__19654__auto____$2 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__19654__auto____$2;
}
} else {
throw e29471;

}
}} else {
throw e__19654__auto____$1;
}
} else {
throw e29470;

}
}} else {
throw e__19654__auto__;
}
} else {
throw e29469;

}
}});
frontend.counter_list.view_model = (function frontend$counter_list$view_model(model){
return cljs.core.select_keys.call(null,frontend.counter_list._update_every_counter.call(null,model,frontend.counter.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counters","counters",33475982)], null));
});
frontend.counter_list._view_counter = (function frontend$counter_list$_view_counter(p__29474,dispatch){
var vec__29476 = p__29474;
var id = cljs.core.nth.call(null,vec__29476,(0),null);
var view_model = cljs.core.nth.call(null,vec__29476,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.counter.view,view_model,frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-modify","on-modify",2031917378),id], null))], null);
});
frontend.counter_list.view = (function frontend$counter_list$view(view_model,dispatch){
var counters = cljs.core.map.call(null,(function (p1__29477_SHARP_){
return frontend.counter_list._view_counter.call(null,p1__29477_SHARP_,dispatch);
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
frontend.counter_list.spec = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init","init",-1875481434),frontend.counter_list.init,new cljs.core.Keyword(null,"view-model","view-model",-895405675),frontend.counter_list.view_model,new cljs.core.Keyword(null,"view","view",1247994814),frontend.counter_list.view,new cljs.core.Keyword(null,"control","control",1892578036),frontend.counter_list.control,new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),frontend.counter_list.reconcile], null);

//# sourceMappingURL=counter_list.js.map?rel=1450279744385