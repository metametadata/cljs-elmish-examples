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
var len__17809__auto___23373 = arguments.length;
var i__17810__auto___23374 = (0);
while(true){
if((i__17810__auto___23374 < len__17809__auto___23373)){
args__17816__auto__.push((arguments[i__17810__auto___23374]));

var G__23375 = (i__17810__auto___23374 + (1));
i__17810__auto___23374 = G__23375;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.counter_list._update_counters_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.counter_list._update_counters_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
var update_counter = (function frontend$counter_list$update_counter(p__23370){
var vec__23372 = p__23370;
var counter_id = cljs.core.nth.call(null,vec__23372,(0),null);
var counter_model = cljs.core.nth.call(null,vec__23372,(1),null);
var counter = vec__23372;
if(cljs.core.truth_(pred.call(null,counter))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter_id,cljs.core.apply.call(null,f,counter_model,args)], null);
} else {
return counter;
}
});
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"counters","counters",33475982),(function (p1__23362_SHARP_){
return cljs.core.doall.call(null,cljs.core.map.call(null,update_counter,p1__23362_SHARP_));
}));
});

frontend.counter_list._update_counters_STAR_.cljs$lang$maxFixedArity = (3);

frontend.counter_list._update_counters_STAR_.cljs$lang$applyTo = (function (seq23363){
var G__23364 = cljs.core.first.call(null,seq23363);
var seq23363__$1 = cljs.core.next.call(null,seq23363);
var G__23365 = cljs.core.first.call(null,seq23363__$1);
var seq23363__$2 = cljs.core.next.call(null,seq23363__$1);
var G__23366 = cljs.core.first.call(null,seq23363__$2);
var seq23363__$3 = cljs.core.next.call(null,seq23363__$2);
return frontend.counter_list._update_counters_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23364,G__23365,G__23366,seq23363__$3);
});
frontend.counter_list._update_counter = (function frontend$counter_list$_update_counter(var_args){
var args__17816__auto__ = [];
var len__17809__auto___23381 = arguments.length;
var i__17810__auto___23382 = (0);
while(true){
if((i__17810__auto___23382 < len__17809__auto___23381)){
args__17816__auto__.push((arguments[i__17810__auto___23382]));

var G__23383 = (i__17810__auto___23382 + (1));
i__17810__auto___23382 = G__23383;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.counter_list._update_counter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.counter_list._update_counter.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.counter_list._update_counters_STAR_,model,(function (p1__23376_SHARP_){
return cljs.core._EQ_.call(null,id,cljs.core.first.call(null,p1__23376_SHARP_));
}),f,args);
});

frontend.counter_list._update_counter.cljs$lang$maxFixedArity = (3);

frontend.counter_list._update_counter.cljs$lang$applyTo = (function (seq23377){
var G__23378 = cljs.core.first.call(null,seq23377);
var seq23377__$1 = cljs.core.next.call(null,seq23377);
var G__23379 = cljs.core.first.call(null,seq23377__$1);
var seq23377__$2 = cljs.core.next.call(null,seq23377__$1);
var G__23380 = cljs.core.first.call(null,seq23377__$2);
var seq23377__$3 = cljs.core.next.call(null,seq23377__$2);
return frontend.counter_list._update_counter.cljs$core$IFn$_invoke$arity$variadic(G__23378,G__23379,G__23380,seq23377__$3);
});
frontend.counter_list._update_every_counter = (function frontend$counter_list$_update_every_counter(var_args){
var args__17816__auto__ = [];
var len__17809__auto___23387 = arguments.length;
var i__17810__auto___23388 = (0);
while(true){
if((i__17810__auto___23388 < len__17809__auto___23387)){
args__17816__auto__.push((arguments[i__17810__auto___23388]));

var G__23389 = (i__17810__auto___23388 + (1));
i__17810__auto___23388 = G__23389;
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

frontend.counter_list._update_every_counter.cljs$lang$applyTo = (function (seq23384){
var G__23385 = cljs.core.first.call(null,seq23384);
var seq23384__$1 = cljs.core.next.call(null,seq23384);
var G__23386 = cljs.core.first.call(null,seq23384__$1);
var seq23384__$2 = cljs.core.next.call(null,seq23384__$1);
return frontend.counter_list._update_every_counter.cljs$core$IFn$_invoke$arity$variadic(G__23385,G__23386,seq23384__$2);
});
frontend.counter_list.control = (function frontend$counter_list$control(model,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e23406){if((e23406 instanceof Error)){
var e__20496__auto__ = e23406;
if((e__20496__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-insert","on-insert",2113239980))){
return dispatch.call(null,new cljs.core.Keyword(null,"insert","insert",1286475395));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23407){if((e23407 instanceof Error)){
var e__20496__auto____$1 = e23407;
if((e__20496__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-remove","on-remove",-268656163))){
return dispatch.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23408){if((e23408 instanceof Error)){
var e__20496__auto____$2 = e23408;
if((e__20496__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__23402 = cljs.core.nth.call(null,signal,(0));
if((cljs.core.vector_QMARK_.call(null,signal_0__23402)) && ((cljs.core.count.call(null,signal_0__23402) === 2))){
try{var signal_0__23402_0__23404 = cljs.core.nth.call(null,signal_0__23402,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__23402_0__23404,new cljs.core.Keyword(null,"on-modify","on-modify",2031917378))){
var id = cljs.core.nth.call(null,signal_0__23402,(1));
var s = cljs.core.nth.call(null,signal,(1));
return frontend.counter_list._update_counter.call(null,model,id,frontend.counter.control,s,frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modify","modify",-1261040869),id], null)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23411){if((e23411 instanceof Error)){
var e__20496__auto____$3 = e23411;
if((e__20496__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20496__auto____$3;
}
} else {
throw e23411;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23410){if((e23410 instanceof Error)){
var e__20496__auto____$3 = e23410;
if((e__20496__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20496__auto____$3;
}
} else {
throw e23410;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23409){if((e23409 instanceof Error)){
var e__20496__auto____$3 = e23409;
if((e__20496__auto____$3 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__20496__auto____$3;
}
} else {
throw e23409;

}
}} else {
throw e__20496__auto____$2;
}
} else {
throw e23408;

}
}} else {
throw e__20496__auto____$1;
}
} else {
throw e23407;

}
}} else {
throw e__20496__auto__;
}
} else {
throw e23406;

}
}});
frontend.counter_list.reconcile = (function frontend$counter_list$reconcile(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"insert","insert",1286475395))){
return cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"counters","counters",33475982),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(model),frontend.counter.init.call(null,(0))], null)], null)),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e23427){if((e23427 instanceof Error)){
var e__20496__auto__ = e23427;
if((e__20496__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"remove","remove",-131428414))){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"counters","counters",33475982),cljs.core.rest);
} else {
throw cljs.core.match.backtrack;

}
}catch (e23428){if((e23428 instanceof Error)){
var e__20496__auto____$1 = e23428;
if((e__20496__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__23423 = cljs.core.nth.call(null,action,(0));
if((cljs.core.vector_QMARK_.call(null,action_0__23423)) && ((cljs.core.count.call(null,action_0__23423) === 2))){
try{var action_0__23423_0__23425 = cljs.core.nth.call(null,action_0__23423,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__23423_0__23425,new cljs.core.Keyword(null,"modify","modify",-1261040869))){
var id = cljs.core.nth.call(null,action_0__23423,(1));
var a = cljs.core.nth.call(null,action,(1));
return frontend.counter_list._update_counter.call(null,model,id,frontend.counter.reconcile,a);
} else {
throw cljs.core.match.backtrack;

}
}catch (e23431){if((e23431 instanceof Error)){
var e__20496__auto____$2 = e23431;
if((e__20496__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20496__auto____$2;
}
} else {
throw e23431;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23430){if((e23430 instanceof Error)){
var e__20496__auto____$2 = e23430;
if((e__20496__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20496__auto____$2;
}
} else {
throw e23430;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23429){if((e23429 instanceof Error)){
var e__20496__auto____$2 = e23429;
if((e__20496__auto____$2 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__20496__auto____$2;
}
} else {
throw e23429;

}
}} else {
throw e__20496__auto____$1;
}
} else {
throw e23428;

}
}} else {
throw e__20496__auto__;
}
} else {
throw e23427;

}
}});
frontend.counter_list.view_model = (function frontend$counter_list$view_model(model){
return cljs.core.select_keys.call(null,frontend.counter_list._update_every_counter.call(null,model,frontend.counter.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counters","counters",33475982)], null));
});
frontend.counter_list._view_counter = (function frontend$counter_list$_view_counter(p__23432,dispatch){
var vec__23434 = p__23432;
var id = cljs.core.nth.call(null,vec__23434,(0),null);
var view_model = cljs.core.nth.call(null,vec__23434,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.counter.view,view_model,frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-modify","on-modify",2031917378),id], null))], null);
});
frontend.counter_list.view = (function frontend$counter_list$view(view_model,dispatch){
var counters = cljs.core.map.call(null,(function (p1__23435_SHARP_){
return frontend.counter_list._view_counter.call(null,p1__23435_SHARP_,dispatch);
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

//# sourceMappingURL=counter_list.js.map?rel=1449083085685