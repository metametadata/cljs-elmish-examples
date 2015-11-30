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
var args__17178__auto__ = [];
var len__17171__auto___27433 = arguments.length;
var i__17172__auto___27434 = (0);
while(true){
if((i__17172__auto___27434 < len__17171__auto___27433)){
args__17178__auto__.push((arguments[i__17172__auto___27434]));

var G__27435 = (i__17172__auto___27434 + (1));
i__17172__auto___27434 = G__27435;
continue;
} else {
}
break;
}

var argseq__17179__auto__ = ((((3) < args__17178__auto__.length))?(new cljs.core.IndexedSeq(args__17178__auto__.slice((3)),(0))):null);
return frontend.counter_list_fancy.update_counters_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17179__auto__);
});

frontend.counter_list_fancy.update_counters_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
var update_counter = (function frontend$counter_list_fancy$update_counter(p__27430){
var vec__27432 = p__27430;
var counter_id = cljs.core.nth.call(null,vec__27432,(0),null);
var counter_model = cljs.core.nth.call(null,vec__27432,(1),null);
var counter = vec__27432;
if(cljs.core.truth_(pred.call(null,counter))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter_id,cljs.core.apply.call(null,f,counter_model,args)], null);
} else {
return counter;
}
});
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"counters","counters",33475982),(function (p1__27422_SHARP_){
return cljs.core.doall.call(null,cljs.core.map.call(null,update_counter,p1__27422_SHARP_));
}));
});

frontend.counter_list_fancy.update_counters_STAR_.cljs$lang$maxFixedArity = (3);

frontend.counter_list_fancy.update_counters_STAR_.cljs$lang$applyTo = (function (seq27423){
var G__27424 = cljs.core.first.call(null,seq27423);
var seq27423__$1 = cljs.core.next.call(null,seq27423);
var G__27425 = cljs.core.first.call(null,seq27423__$1);
var seq27423__$2 = cljs.core.next.call(null,seq27423__$1);
var G__27426 = cljs.core.first.call(null,seq27423__$2);
var seq27423__$3 = cljs.core.next.call(null,seq27423__$2);
return frontend.counter_list_fancy.update_counters_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__27424,G__27425,G__27426,seq27423__$3);
});
frontend.counter_list_fancy.update_counter = (function frontend$counter_list_fancy$update_counter(var_args){
var args__17178__auto__ = [];
var len__17171__auto___27441 = arguments.length;
var i__17172__auto___27442 = (0);
while(true){
if((i__17172__auto___27442 < len__17171__auto___27441)){
args__17178__auto__.push((arguments[i__17172__auto___27442]));

var G__27443 = (i__17172__auto___27442 + (1));
i__17172__auto___27442 = G__27443;
continue;
} else {
}
break;
}

var argseq__17179__auto__ = ((((3) < args__17178__auto__.length))?(new cljs.core.IndexedSeq(args__17178__auto__.slice((3)),(0))):null);
return frontend.counter_list_fancy.update_counter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17179__auto__);
});

frontend.counter_list_fancy.update_counter.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.counter_list_fancy.update_counters_STAR_,model,(function (p1__27436_SHARP_){
return cljs.core._EQ_.call(null,id,cljs.core.first.call(null,p1__27436_SHARP_));
}),f,args);
});

frontend.counter_list_fancy.update_counter.cljs$lang$maxFixedArity = (3);

frontend.counter_list_fancy.update_counter.cljs$lang$applyTo = (function (seq27437){
var G__27438 = cljs.core.first.call(null,seq27437);
var seq27437__$1 = cljs.core.next.call(null,seq27437);
var G__27439 = cljs.core.first.call(null,seq27437__$1);
var seq27437__$2 = cljs.core.next.call(null,seq27437__$1);
var G__27440 = cljs.core.first.call(null,seq27437__$2);
var seq27437__$3 = cljs.core.next.call(null,seq27437__$2);
return frontend.counter_list_fancy.update_counter.cljs$core$IFn$_invoke$arity$variadic(G__27438,G__27439,G__27440,seq27437__$3);
});
frontend.counter_list_fancy.update_every_counter = (function frontend$counter_list_fancy$update_every_counter(var_args){
var args__17178__auto__ = [];
var len__17171__auto___27447 = arguments.length;
var i__17172__auto___27448 = (0);
while(true){
if((i__17172__auto___27448 < len__17171__auto___27447)){
args__17178__auto__.push((arguments[i__17172__auto___27448]));

var G__27449 = (i__17172__auto___27448 + (1));
i__17172__auto___27448 = G__27449;
continue;
} else {
}
break;
}

var argseq__17179__auto__ = ((((2) < args__17178__auto__.length))?(new cljs.core.IndexedSeq(args__17178__auto__.slice((2)),(0))):null);
return frontend.counter_list_fancy.update_every_counter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17179__auto__);
});

frontend.counter_list_fancy.update_every_counter.cljs$core$IFn$_invoke$arity$variadic = (function (model,f,args){
return cljs.core.apply.call(null,frontend.counter_list_fancy.update_counters_STAR_,model,cljs.core.constantly.call(null,true),f,args);
});

frontend.counter_list_fancy.update_every_counter.cljs$lang$maxFixedArity = (2);

frontend.counter_list_fancy.update_every_counter.cljs$lang$applyTo = (function (seq27444){
var G__27445 = cljs.core.first.call(null,seq27444);
var seq27444__$1 = cljs.core.next.call(null,seq27444);
var G__27446 = cljs.core.first.call(null,seq27444__$1);
var seq27444__$2 = cljs.core.next.call(null,seq27444__$1);
return frontend.counter_list_fancy.update_every_counter.cljs$core$IFn$_invoke$arity$variadic(G__27445,G__27446,seq27444__$2);
});
frontend.counter_list_fancy.control = (function frontend$counter_list_fancy$control(model,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e27466){if((e27466 instanceof Error)){
var e__19072__auto__ = e27466;
if((e__19072__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-insert","on-insert",2113239980))){
return dispatch.call(null,new cljs.core.Keyword(null,"insert","insert",1286475395));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27467){if((e27467 instanceof Error)){
var e__19072__auto____$1 = e27467;
if((e__19072__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__27462 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__27462,new cljs.core.Keyword(null,"on-remove","on-remove",-268656163))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27469){if((e27469 instanceof Error)){
var e__19072__auto____$2 = e27469;
if((e__19072__auto____$2 === cljs.core.match.backtrack)){
try{var signal_0__27462 = cljs.core.nth.call(null,signal,(0));
if((cljs.core.vector_QMARK_.call(null,signal_0__27462)) && ((cljs.core.count.call(null,signal_0__27462) === 2))){
try{var signal_0__27462_0__27464 = cljs.core.nth.call(null,signal_0__27462,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__27462_0__27464,new cljs.core.Keyword(null,"on-modify","on-modify",2031917378))){
var id = cljs.core.nth.call(null,signal_0__27462,(1));
var e = cljs.core.nth.call(null,signal,(1));
return frontend.counter_list_fancy.update_counter.call(null,model,id,frontend.counter.control,e,frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modify","modify",-1261040869),id], null)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27471){if((e27471 instanceof Error)){
var e__19072__auto____$3 = e27471;
if((e__19072__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19072__auto____$3;
}
} else {
throw e27471;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27470){if((e27470 instanceof Error)){
var e__19072__auto____$3 = e27470;
if((e__19072__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19072__auto____$3;
}
} else {
throw e27470;

}
}} else {
throw e__19072__auto____$2;
}
} else {
throw e27469;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27468){if((e27468 instanceof Error)){
var e__19072__auto____$2 = e27468;
if((e__19072__auto____$2 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__19072__auto____$2;
}
} else {
throw e27468;

}
}} else {
throw e__19072__auto____$1;
}
} else {
throw e27467;

}
}} else {
throw e__19072__auto__;
}
} else {
throw e27466;

}
}});
frontend.counter_list_fancy.reconcile = (function frontend$counter_list_fancy$reconcile(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"insert","insert",1286475395))){
return cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"counters","counters",33475982),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(model),frontend.counter.init.call(null,(0))], null)], null)),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27490){if((e27490 instanceof Error)){
var e__19072__auto__ = e27490;
if((e__19072__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__27486 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__27486,new cljs.core.Keyword(null,"remove","remove",-131428414))){
var id = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"counters","counters",33475982),((function (id,action_0__27486,e__19072__auto__){
return (function (p1__27472_SHARP_){
return cljs.core.filter.call(null,((function (id,action_0__27486,e__19072__auto__){
return (function (p__27495){
var vec__27496 = p__27495;
var cid = cljs.core.nth.call(null,vec__27496,(0),null);
var _ = cljs.core.nth.call(null,vec__27496,(1),null);
return cljs.core.not_EQ_.call(null,cid,id);
});})(id,action_0__27486,e__19072__auto__))
,p1__27472_SHARP_);
});})(id,action_0__27486,e__19072__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27492){if((e27492 instanceof Error)){
var e__19072__auto____$1 = e27492;
if((e__19072__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__27486 = cljs.core.nth.call(null,action,(0));
if((cljs.core.vector_QMARK_.call(null,action_0__27486)) && ((cljs.core.count.call(null,action_0__27486) === 2))){
try{var action_0__27486_0__27488 = cljs.core.nth.call(null,action_0__27486,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__27486_0__27488,new cljs.core.Keyword(null,"modify","modify",-1261040869))){
var id = cljs.core.nth.call(null,action_0__27486,(1));
var c = cljs.core.nth.call(null,action,(1));
return frontend.counter_list_fancy.update_counter.call(null,model,id,frontend.counter.reconcile,c);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27494){if((e27494 instanceof Error)){
var e__19072__auto____$2 = e27494;
if((e__19072__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19072__auto____$2;
}
} else {
throw e27494;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27493){if((e27493 instanceof Error)){
var e__19072__auto____$2 = e27493;
if((e__19072__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19072__auto____$2;
}
} else {
throw e27493;

}
}} else {
throw e__19072__auto____$1;
}
} else {
throw e27492;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27491){if((e27491 instanceof Error)){
var e__19072__auto____$1 = e27491;
if((e__19072__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__19072__auto____$1;
}
} else {
throw e27491;

}
}} else {
throw e__19072__auto__;
}
} else {
throw e27490;

}
}});
frontend.counter_list_fancy.view_model = (function frontend$counter_list_fancy$view_model(model){
return cljs.core.select_keys.call(null,frontend.counter_list_fancy.update_every_counter.call(null,model,frontend.counter.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counters","counters",33475982)], null));
});
frontend.counter_list_fancy.view_counter = (function frontend$counter_list_fancy$view_counter(p__27497,dispatch){
var vec__27499 = p__27497;
var id = cljs.core.nth.call(null,vec__27499,(0),null);
var view_model = cljs.core.nth.call(null,vec__27499,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.counter.view_with_remove_button,view_model,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-modify","on-modify",2031917378),id], null)),new cljs.core.Keyword(null,"dispatch-on-remove","dispatch-on-remove",-1399998797),((function (vec__27499,id,view_model){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-remove","on-remove",-268656163),id], null));
});})(vec__27499,id,view_model))
], null)], null);
});
frontend.counter_list_fancy.view = (function frontend$counter_list_fancy$view(view_model,dispatch){
var counters = cljs.core.map.call(null,(function (p1__27500_SHARP_){
return frontend.counter_list_fancy.view_counter.call(null,p1__27500_SHARP_,dispatch);
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
frontend.counter_list_fancy.example = (function frontend$counter_list_fancy$example(){
return frontend.ui.connect.call(null,frontend.counter_list_fancy.model,frontend.counter_list_fancy.view_model,frontend.counter_list_fancy.view,frontend.ui.wrap_log_signals.call(null,frontend.counter_list_fancy.control),frontend.ui.wrap_log_actions.call(null,frontend.counter_list_fancy.reconcile));
});
/**
 * Wrapper to get rid of unnecessary calls to ui/connect on Figwheel reloads.
 *   In particalur, :on-connect will not be triggered on each reload.
 */
frontend.counter_list_fancy.example_view = (function frontend$counter_list_fancy$example_view(){
return new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(frontend.counter_list_fancy.example.call(null));
});

//# sourceMappingURL=counter_list_fancy.js.map?rel=1448902872849