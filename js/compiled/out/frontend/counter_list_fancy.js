// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.counter_list_fancy');
goog.require('cljs.core');
goog.require('frontend.ui');
goog.require('frontend.counter');
goog.require('cljs.core.match');
frontend.counter_list_fancy.init = (function frontend$counter_list_fancy$init(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"counters","counters",33475982),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"next-id","next-id",-224240762),(0)], null);
});
/**
 * Applies a function of args [counter-model & args] to the counters specified by predicate.
 *   The function can have side-effects. Returns a new model.
 */
frontend.counter_list_fancy._update_counters_STAR_ = (function frontend$counter_list_fancy$_update_counters_STAR_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___29491 = arguments.length;
var i__17810__auto___29492 = (0);
while(true){
if((i__17810__auto___29492 < len__17809__auto___29491)){
args__17816__auto__.push((arguments[i__17810__auto___29492]));

var G__29493 = (i__17810__auto___29492 + (1));
i__17810__auto___29492 = G__29493;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.counter_list_fancy._update_counters_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.counter_list_fancy._update_counters_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
var update_counter = (function frontend$counter_list_fancy$update_counter(p__29488){
var vec__29490 = p__29488;
var counter_id = cljs.core.nth.call(null,vec__29490,(0),null);
var counter_model = cljs.core.nth.call(null,vec__29490,(1),null);
var counter = vec__29490;
if(cljs.core.truth_(pred.call(null,counter))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter_id,cljs.core.apply.call(null,f,counter_model,args)], null);
} else {
return counter;
}
});
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"counters","counters",33475982),(function (p1__29480_SHARP_){
return cljs.core.doall.call(null,cljs.core.map.call(null,update_counter,p1__29480_SHARP_));
}));
});

frontend.counter_list_fancy._update_counters_STAR_.cljs$lang$maxFixedArity = (3);

frontend.counter_list_fancy._update_counters_STAR_.cljs$lang$applyTo = (function (seq29481){
var G__29482 = cljs.core.first.call(null,seq29481);
var seq29481__$1 = cljs.core.next.call(null,seq29481);
var G__29483 = cljs.core.first.call(null,seq29481__$1);
var seq29481__$2 = cljs.core.next.call(null,seq29481__$1);
var G__29484 = cljs.core.first.call(null,seq29481__$2);
var seq29481__$3 = cljs.core.next.call(null,seq29481__$2);
return frontend.counter_list_fancy._update_counters_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__29482,G__29483,G__29484,seq29481__$3);
});
frontend.counter_list_fancy._update_counter = (function frontend$counter_list_fancy$_update_counter(var_args){
var args__17816__auto__ = [];
var len__17809__auto___29499 = arguments.length;
var i__17810__auto___29500 = (0);
while(true){
if((i__17810__auto___29500 < len__17809__auto___29499)){
args__17816__auto__.push((arguments[i__17810__auto___29500]));

var G__29501 = (i__17810__auto___29500 + (1));
i__17810__auto___29500 = G__29501;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.counter_list_fancy._update_counter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.counter_list_fancy._update_counter.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.counter_list_fancy._update_counters_STAR_,model,(function (p1__29494_SHARP_){
return cljs.core._EQ_.call(null,id,cljs.core.first.call(null,p1__29494_SHARP_));
}),f,args);
});

frontend.counter_list_fancy._update_counter.cljs$lang$maxFixedArity = (3);

frontend.counter_list_fancy._update_counter.cljs$lang$applyTo = (function (seq29495){
var G__29496 = cljs.core.first.call(null,seq29495);
var seq29495__$1 = cljs.core.next.call(null,seq29495);
var G__29497 = cljs.core.first.call(null,seq29495__$1);
var seq29495__$2 = cljs.core.next.call(null,seq29495__$1);
var G__29498 = cljs.core.first.call(null,seq29495__$2);
var seq29495__$3 = cljs.core.next.call(null,seq29495__$2);
return frontend.counter_list_fancy._update_counter.cljs$core$IFn$_invoke$arity$variadic(G__29496,G__29497,G__29498,seq29495__$3);
});
frontend.counter_list_fancy._update_every_counter = (function frontend$counter_list_fancy$_update_every_counter(var_args){
var args__17816__auto__ = [];
var len__17809__auto___29505 = arguments.length;
var i__17810__auto___29506 = (0);
while(true){
if((i__17810__auto___29506 < len__17809__auto___29505)){
args__17816__auto__.push((arguments[i__17810__auto___29506]));

var G__29507 = (i__17810__auto___29506 + (1));
i__17810__auto___29506 = G__29507;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((2) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((2)),(0))):null);
return frontend.counter_list_fancy._update_every_counter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17817__auto__);
});

frontend.counter_list_fancy._update_every_counter.cljs$core$IFn$_invoke$arity$variadic = (function (model,f,args){
return cljs.core.apply.call(null,frontend.counter_list_fancy._update_counters_STAR_,model,cljs.core.constantly.call(null,true),f,args);
});

frontend.counter_list_fancy._update_every_counter.cljs$lang$maxFixedArity = (2);

frontend.counter_list_fancy._update_every_counter.cljs$lang$applyTo = (function (seq29502){
var G__29503 = cljs.core.first.call(null,seq29502);
var seq29502__$1 = cljs.core.next.call(null,seq29502);
var G__29504 = cljs.core.first.call(null,seq29502__$1);
var seq29502__$2 = cljs.core.next.call(null,seq29502__$1);
return frontend.counter_list_fancy._update_every_counter.cljs$core$IFn$_invoke$arity$variadic(G__29503,G__29504,seq29502__$2);
});
frontend.counter_list_fancy._get_counter = (function frontend$counter_list_fancy$_get_counter(model,id){
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29508_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__29508_SHARP_),id);
}),new cljs.core.Keyword(null,"counters","counters",33475982).cljs$core$IFn$_invoke$arity$1(model))));
});
frontend.counter_list_fancy.control = (function frontend$counter_list_fancy$control(model,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e29526){if((e29526 instanceof Error)){
var e__19654__auto__ = e29526;
if((e__19654__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-insert","on-insert",2113239980))){
return dispatch.call(null,new cljs.core.Keyword(null,"insert","insert",1286475395));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29527){if((e29527 instanceof Error)){
var e__19654__auto____$1 = e29527;
if((e__19654__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__29522 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29522,new cljs.core.Keyword(null,"on-remove","on-remove",-268656163))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29529){if((e29529 instanceof Error)){
var e__19654__auto____$2 = e29529;
if((e__19654__auto____$2 === cljs.core.match.backtrack)){
try{var signal_0__29522 = cljs.core.nth.call(null,signal,(0));
if((cljs.core.vector_QMARK_.call(null,signal_0__29522)) && ((cljs.core.count.call(null,signal_0__29522) === 2))){
try{var signal_0__29522_0__29524 = cljs.core.nth.call(null,signal_0__29522,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29522_0__29524,new cljs.core.Keyword(null,"on-modify","on-modify",2031917378))){
var id = cljs.core.nth.call(null,signal_0__29522,(1));
var s = cljs.core.nth.call(null,signal,(1));
return frontend.counter_list_fancy._update_counter.call(null,model,id,frontend.counter.control,s,((function (id,s,signal_0__29522_0__29524,signal_0__29522,e__19654__auto____$2,e__19654__auto____$1,e__19654__auto__){
return (function (p1__29509_SHARP_){
return frontend.counter_list_fancy._get_counter.call(null,dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modify","modify",-1261040869),id], null),p1__29509_SHARP_], null)),id);
});})(id,s,signal_0__29522_0__29524,signal_0__29522,e__19654__auto____$2,e__19654__auto____$1,e__19654__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29531){if((e29531 instanceof Error)){
var e__19654__auto____$3 = e29531;
if((e__19654__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19654__auto____$3;
}
} else {
throw e29531;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29530){if((e29530 instanceof Error)){
var e__19654__auto____$3 = e29530;
if((e__19654__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19654__auto____$3;
}
} else {
throw e29530;

}
}} else {
throw e__19654__auto____$2;
}
} else {
throw e29529;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29528){if((e29528 instanceof Error)){
var e__19654__auto____$2 = e29528;
if((e__19654__auto____$2 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__19654__auto____$2;
}
} else {
throw e29528;

}
}} else {
throw e__19654__auto____$1;
}
} else {
throw e29527;

}
}} else {
throw e__19654__auto__;
}
} else {
throw e29526;

}
}});
frontend.counter_list_fancy.reconcile = (function frontend$counter_list_fancy$reconcile(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"insert","insert",1286475395))){
return cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"counters","counters",33475982),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(model),frontend.counter.init.call(null,(0))], null)], null)),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29550){if((e29550 instanceof Error)){
var e__19654__auto__ = e29550;
if((e__19654__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__29546 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29546,new cljs.core.Keyword(null,"remove","remove",-131428414))){
var id = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"counters","counters",33475982),((function (id,action_0__29546,e__19654__auto__){
return (function (p1__29532_SHARP_){
return cljs.core.filter.call(null,((function (id,action_0__29546,e__19654__auto__){
return (function (p__29555){
var vec__29556 = p__29555;
var cid = cljs.core.nth.call(null,vec__29556,(0),null);
var _ = cljs.core.nth.call(null,vec__29556,(1),null);
return cljs.core.not_EQ_.call(null,cid,id);
});})(id,action_0__29546,e__19654__auto__))
,p1__29532_SHARP_);
});})(id,action_0__29546,e__19654__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29552){if((e29552 instanceof Error)){
var e__19654__auto____$1 = e29552;
if((e__19654__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__29546 = cljs.core.nth.call(null,action,(0));
if((cljs.core.vector_QMARK_.call(null,action_0__29546)) && ((cljs.core.count.call(null,action_0__29546) === 2))){
try{var action_0__29546_0__29548 = cljs.core.nth.call(null,action_0__29546,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29546_0__29548,new cljs.core.Keyword(null,"modify","modify",-1261040869))){
var id = cljs.core.nth.call(null,action_0__29546,(1));
var a = cljs.core.nth.call(null,action,(1));
return frontend.counter_list_fancy._update_counter.call(null,model,id,frontend.counter.reconcile,a);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29554){if((e29554 instanceof Error)){
var e__19654__auto____$2 = e29554;
if((e__19654__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19654__auto____$2;
}
} else {
throw e29554;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29553){if((e29553 instanceof Error)){
var e__19654__auto____$2 = e29553;
if((e__19654__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19654__auto____$2;
}
} else {
throw e29553;

}
}} else {
throw e__19654__auto____$1;
}
} else {
throw e29552;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29551){if((e29551 instanceof Error)){
var e__19654__auto____$1 = e29551;
if((e__19654__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__19654__auto____$1;
}
} else {
throw e29551;

}
}} else {
throw e__19654__auto__;
}
} else {
throw e29550;

}
}});
frontend.counter_list_fancy.view_model = (function frontend$counter_list_fancy$view_model(model){
return cljs.core.select_keys.call(null,frontend.counter_list_fancy._update_every_counter.call(null,model,frontend.counter.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counters","counters",33475982)], null));
});
frontend.counter_list_fancy._view_counter = (function frontend$counter_list_fancy$_view_counter(p__29557,dispatch){
var vec__29559 = p__29557;
var id = cljs.core.nth.call(null,vec__29559,(0),null);
var view_model = cljs.core.nth.call(null,vec__29559,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.counter.view_with_remove_button,view_model,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-modify","on-modify",2031917378),id], null)),new cljs.core.Keyword(null,"dispatch-on-remove","dispatch-on-remove",-1399998797),((function (vec__29559,id,view_model){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-remove","on-remove",-268656163),id], null));
});})(vec__29559,id,view_model))
], null)], null);
});
frontend.counter_list_fancy.view = (function frontend$counter_list_fancy$view(view_model,dispatch){
var counters = cljs.core.map.call(null,(function (p1__29560_SHARP_){
return frontend.counter_list_fancy._view_counter.call(null,p1__29560_SHARP_,dispatch);
}),new cljs.core.Keyword(null,"counters","counters",33475982).cljs$core$IFn$_invoke$arity$1(view_model));
var insert = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (counters){
return (function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-insert","on-insert",2113239980));
});})(counters))
], null),"Insert"], null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),insert], null),counters);
});
frontend.counter_list_fancy.spec = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init","init",-1875481434),frontend.counter_list_fancy.init,new cljs.core.Keyword(null,"view-model","view-model",-895405675),frontend.counter_list_fancy.view_model,new cljs.core.Keyword(null,"view","view",1247994814),frontend.counter_list_fancy.view,new cljs.core.Keyword(null,"control","control",1892578036),frontend.counter_list_fancy.control,new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),frontend.counter_list_fancy.reconcile], null);

//# sourceMappingURL=counter_list_fancy.js.map?rel=1450279744488