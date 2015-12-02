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
var len__17809__auto___23631 = arguments.length;
var i__17810__auto___23632 = (0);
while(true){
if((i__17810__auto___23632 < len__17809__auto___23631)){
args__17816__auto__.push((arguments[i__17810__auto___23632]));

var G__23633 = (i__17810__auto___23632 + (1));
i__17810__auto___23632 = G__23633;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.counter_list_fancy._update_counters_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.counter_list_fancy._update_counters_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
var update_counter = (function frontend$counter_list_fancy$update_counter(p__23628){
var vec__23630 = p__23628;
var counter_id = cljs.core.nth.call(null,vec__23630,(0),null);
var counter_model = cljs.core.nth.call(null,vec__23630,(1),null);
var counter = vec__23630;
if(cljs.core.truth_(pred.call(null,counter))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter_id,cljs.core.apply.call(null,f,counter_model,args)], null);
} else {
return counter;
}
});
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"counters","counters",33475982),(function (p1__23620_SHARP_){
return cljs.core.doall.call(null,cljs.core.map.call(null,update_counter,p1__23620_SHARP_));
}));
});

frontend.counter_list_fancy._update_counters_STAR_.cljs$lang$maxFixedArity = (3);

frontend.counter_list_fancy._update_counters_STAR_.cljs$lang$applyTo = (function (seq23621){
var G__23622 = cljs.core.first.call(null,seq23621);
var seq23621__$1 = cljs.core.next.call(null,seq23621);
var G__23623 = cljs.core.first.call(null,seq23621__$1);
var seq23621__$2 = cljs.core.next.call(null,seq23621__$1);
var G__23624 = cljs.core.first.call(null,seq23621__$2);
var seq23621__$3 = cljs.core.next.call(null,seq23621__$2);
return frontend.counter_list_fancy._update_counters_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23622,G__23623,G__23624,seq23621__$3);
});
frontend.counter_list_fancy._update_counter = (function frontend$counter_list_fancy$_update_counter(var_args){
var args__17816__auto__ = [];
var len__17809__auto___23639 = arguments.length;
var i__17810__auto___23640 = (0);
while(true){
if((i__17810__auto___23640 < len__17809__auto___23639)){
args__17816__auto__.push((arguments[i__17810__auto___23640]));

var G__23641 = (i__17810__auto___23640 + (1));
i__17810__auto___23640 = G__23641;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.counter_list_fancy._update_counter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.counter_list_fancy._update_counter.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.counter_list_fancy._update_counters_STAR_,model,(function (p1__23634_SHARP_){
return cljs.core._EQ_.call(null,id,cljs.core.first.call(null,p1__23634_SHARP_));
}),f,args);
});

frontend.counter_list_fancy._update_counter.cljs$lang$maxFixedArity = (3);

frontend.counter_list_fancy._update_counter.cljs$lang$applyTo = (function (seq23635){
var G__23636 = cljs.core.first.call(null,seq23635);
var seq23635__$1 = cljs.core.next.call(null,seq23635);
var G__23637 = cljs.core.first.call(null,seq23635__$1);
var seq23635__$2 = cljs.core.next.call(null,seq23635__$1);
var G__23638 = cljs.core.first.call(null,seq23635__$2);
var seq23635__$3 = cljs.core.next.call(null,seq23635__$2);
return frontend.counter_list_fancy._update_counter.cljs$core$IFn$_invoke$arity$variadic(G__23636,G__23637,G__23638,seq23635__$3);
});
frontend.counter_list_fancy._update_every_counter = (function frontend$counter_list_fancy$_update_every_counter(var_args){
var args__17816__auto__ = [];
var len__17809__auto___23645 = arguments.length;
var i__17810__auto___23646 = (0);
while(true){
if((i__17810__auto___23646 < len__17809__auto___23645)){
args__17816__auto__.push((arguments[i__17810__auto___23646]));

var G__23647 = (i__17810__auto___23646 + (1));
i__17810__auto___23646 = G__23647;
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

frontend.counter_list_fancy._update_every_counter.cljs$lang$applyTo = (function (seq23642){
var G__23643 = cljs.core.first.call(null,seq23642);
var seq23642__$1 = cljs.core.next.call(null,seq23642);
var G__23644 = cljs.core.first.call(null,seq23642__$1);
var seq23642__$2 = cljs.core.next.call(null,seq23642__$1);
return frontend.counter_list_fancy._update_every_counter.cljs$core$IFn$_invoke$arity$variadic(G__23643,G__23644,seq23642__$2);
});
frontend.counter_list_fancy.control = (function frontend$counter_list_fancy$control(model,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e23664){if((e23664 instanceof Error)){
var e__20496__auto__ = e23664;
if((e__20496__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-insert","on-insert",2113239980))){
return dispatch.call(null,new cljs.core.Keyword(null,"insert","insert",1286475395));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23665){if((e23665 instanceof Error)){
var e__20496__auto____$1 = e23665;
if((e__20496__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__23660 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__23660,new cljs.core.Keyword(null,"on-remove","on-remove",-268656163))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23667){if((e23667 instanceof Error)){
var e__20496__auto____$2 = e23667;
if((e__20496__auto____$2 === cljs.core.match.backtrack)){
try{var signal_0__23660 = cljs.core.nth.call(null,signal,(0));
if((cljs.core.vector_QMARK_.call(null,signal_0__23660)) && ((cljs.core.count.call(null,signal_0__23660) === 2))){
try{var signal_0__23660_0__23662 = cljs.core.nth.call(null,signal_0__23660,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__23660_0__23662,new cljs.core.Keyword(null,"on-modify","on-modify",2031917378))){
var id = cljs.core.nth.call(null,signal_0__23660,(1));
var s = cljs.core.nth.call(null,signal,(1));
return frontend.counter_list_fancy._update_counter.call(null,model,id,frontend.counter.control,s,frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modify","modify",-1261040869),id], null)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23669){if((e23669 instanceof Error)){
var e__20496__auto____$3 = e23669;
if((e__20496__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20496__auto____$3;
}
} else {
throw e23669;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23668){if((e23668 instanceof Error)){
var e__20496__auto____$3 = e23668;
if((e__20496__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20496__auto____$3;
}
} else {
throw e23668;

}
}} else {
throw e__20496__auto____$2;
}
} else {
throw e23667;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23666){if((e23666 instanceof Error)){
var e__20496__auto____$2 = e23666;
if((e__20496__auto____$2 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__20496__auto____$2;
}
} else {
throw e23666;

}
}} else {
throw e__20496__auto____$1;
}
} else {
throw e23665;

}
}} else {
throw e__20496__auto__;
}
} else {
throw e23664;

}
}});
frontend.counter_list_fancy.reconcile = (function frontend$counter_list_fancy$reconcile(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"insert","insert",1286475395))){
return cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"counters","counters",33475982),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(model),frontend.counter.init.call(null,(0))], null)], null)),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e23688){if((e23688 instanceof Error)){
var e__20496__auto__ = e23688;
if((e__20496__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__23684 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__23684,new cljs.core.Keyword(null,"remove","remove",-131428414))){
var id = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"counters","counters",33475982),((function (id,action_0__23684,e__20496__auto__){
return (function (p1__23670_SHARP_){
return cljs.core.filter.call(null,((function (id,action_0__23684,e__20496__auto__){
return (function (p__23693){
var vec__23694 = p__23693;
var cid = cljs.core.nth.call(null,vec__23694,(0),null);
var _ = cljs.core.nth.call(null,vec__23694,(1),null);
return cljs.core.not_EQ_.call(null,cid,id);
});})(id,action_0__23684,e__20496__auto__))
,p1__23670_SHARP_);
});})(id,action_0__23684,e__20496__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e23690){if((e23690 instanceof Error)){
var e__20496__auto____$1 = e23690;
if((e__20496__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__23684 = cljs.core.nth.call(null,action,(0));
if((cljs.core.vector_QMARK_.call(null,action_0__23684)) && ((cljs.core.count.call(null,action_0__23684) === 2))){
try{var action_0__23684_0__23686 = cljs.core.nth.call(null,action_0__23684,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__23684_0__23686,new cljs.core.Keyword(null,"modify","modify",-1261040869))){
var id = cljs.core.nth.call(null,action_0__23684,(1));
var a = cljs.core.nth.call(null,action,(1));
return frontend.counter_list_fancy._update_counter.call(null,model,id,frontend.counter.reconcile,a);
} else {
throw cljs.core.match.backtrack;

}
}catch (e23692){if((e23692 instanceof Error)){
var e__20496__auto____$2 = e23692;
if((e__20496__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20496__auto____$2;
}
} else {
throw e23692;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23691){if((e23691 instanceof Error)){
var e__20496__auto____$2 = e23691;
if((e__20496__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20496__auto____$2;
}
} else {
throw e23691;

}
}} else {
throw e__20496__auto____$1;
}
} else {
throw e23690;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23689){if((e23689 instanceof Error)){
var e__20496__auto____$1 = e23689;
if((e__20496__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__20496__auto____$1;
}
} else {
throw e23689;

}
}} else {
throw e__20496__auto__;
}
} else {
throw e23688;

}
}});
frontend.counter_list_fancy.view_model = (function frontend$counter_list_fancy$view_model(model){
return cljs.core.select_keys.call(null,frontend.counter_list_fancy._update_every_counter.call(null,model,frontend.counter.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counters","counters",33475982)], null));
});
frontend.counter_list_fancy._view_counter = (function frontend$counter_list_fancy$_view_counter(p__23695,dispatch){
var vec__23697 = p__23695;
var id = cljs.core.nth.call(null,vec__23697,(0),null);
var view_model = cljs.core.nth.call(null,vec__23697,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.counter.view_with_remove_button,view_model,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-modify","on-modify",2031917378),id], null)),new cljs.core.Keyword(null,"dispatch-on-remove","dispatch-on-remove",-1399998797),((function (vec__23697,id,view_model){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-remove","on-remove",-268656163),id], null));
});})(vec__23697,id,view_model))
], null)], null);
});
frontend.counter_list_fancy.view = (function frontend$counter_list_fancy$view(view_model,dispatch){
var counters = cljs.core.map.call(null,(function (p1__23698_SHARP_){
return frontend.counter_list_fancy._view_counter.call(null,p1__23698_SHARP_,dispatch);
}),new cljs.core.Keyword(null,"counters","counters",33475982).cljs$core$IFn$_invoke$arity$1(view_model));
var insert = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (counters){
return (function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-insert","on-insert",2113239980));
});})(counters))
], null),"Insert"], null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),insert], null),counters);
});
frontend.counter_list_fancy.spec = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init","init",-1875481434),frontend.counter_list_fancy.init,new cljs.core.Keyword(null,"view-model","view-model",-895405675),frontend.counter_list_fancy.view_model,new cljs.core.Keyword(null,"view","view",1247994814),frontend.counter_list_fancy.view,new cljs.core.Keyword(null,"control","control",1892578036),frontend.counter_list_fancy.control,new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),frontend.counter_list_fancy.reconcile], null);

//# sourceMappingURL=counter_list_fancy.js.map?rel=1449083085994