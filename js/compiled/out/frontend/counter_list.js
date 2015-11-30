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
var args__17178__auto__ = [];
var len__17171__auto___27175 = arguments.length;
var i__17172__auto___27176 = (0);
while(true){
if((i__17172__auto___27176 < len__17171__auto___27175)){
args__17178__auto__.push((arguments[i__17172__auto___27176]));

var G__27177 = (i__17172__auto___27176 + (1));
i__17172__auto___27176 = G__27177;
continue;
} else {
}
break;
}

var argseq__17179__auto__ = ((((3) < args__17178__auto__.length))?(new cljs.core.IndexedSeq(args__17178__auto__.slice((3)),(0))):null);
return frontend.counter_list.update_counters_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17179__auto__);
});

frontend.counter_list.update_counters_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
var update_counter = (function frontend$counter_list$update_counter(p__27172){
var vec__27174 = p__27172;
var counter_id = cljs.core.nth.call(null,vec__27174,(0),null);
var counter_model = cljs.core.nth.call(null,vec__27174,(1),null);
var counter = vec__27174;
if(cljs.core.truth_(pred.call(null,counter))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter_id,cljs.core.apply.call(null,f,counter_model,args)], null);
} else {
return counter;
}
});
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"counters","counters",33475982),(function (p1__27164_SHARP_){
return cljs.core.doall.call(null,cljs.core.map.call(null,update_counter,p1__27164_SHARP_));
}));
});

frontend.counter_list.update_counters_STAR_.cljs$lang$maxFixedArity = (3);

frontend.counter_list.update_counters_STAR_.cljs$lang$applyTo = (function (seq27165){
var G__27166 = cljs.core.first.call(null,seq27165);
var seq27165__$1 = cljs.core.next.call(null,seq27165);
var G__27167 = cljs.core.first.call(null,seq27165__$1);
var seq27165__$2 = cljs.core.next.call(null,seq27165__$1);
var G__27168 = cljs.core.first.call(null,seq27165__$2);
var seq27165__$3 = cljs.core.next.call(null,seq27165__$2);
return frontend.counter_list.update_counters_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__27166,G__27167,G__27168,seq27165__$3);
});
frontend.counter_list.update_counter = (function frontend$counter_list$update_counter(var_args){
var args__17178__auto__ = [];
var len__17171__auto___27183 = arguments.length;
var i__17172__auto___27184 = (0);
while(true){
if((i__17172__auto___27184 < len__17171__auto___27183)){
args__17178__auto__.push((arguments[i__17172__auto___27184]));

var G__27185 = (i__17172__auto___27184 + (1));
i__17172__auto___27184 = G__27185;
continue;
} else {
}
break;
}

var argseq__17179__auto__ = ((((3) < args__17178__auto__.length))?(new cljs.core.IndexedSeq(args__17178__auto__.slice((3)),(0))):null);
return frontend.counter_list.update_counter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17179__auto__);
});

frontend.counter_list.update_counter.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.counter_list.update_counters_STAR_,model,(function (p1__27178_SHARP_){
return cljs.core._EQ_.call(null,id,cljs.core.first.call(null,p1__27178_SHARP_));
}),f,args);
});

frontend.counter_list.update_counter.cljs$lang$maxFixedArity = (3);

frontend.counter_list.update_counter.cljs$lang$applyTo = (function (seq27179){
var G__27180 = cljs.core.first.call(null,seq27179);
var seq27179__$1 = cljs.core.next.call(null,seq27179);
var G__27181 = cljs.core.first.call(null,seq27179__$1);
var seq27179__$2 = cljs.core.next.call(null,seq27179__$1);
var G__27182 = cljs.core.first.call(null,seq27179__$2);
var seq27179__$3 = cljs.core.next.call(null,seq27179__$2);
return frontend.counter_list.update_counter.cljs$core$IFn$_invoke$arity$variadic(G__27180,G__27181,G__27182,seq27179__$3);
});
frontend.counter_list.update_every_counter = (function frontend$counter_list$update_every_counter(var_args){
var args__17178__auto__ = [];
var len__17171__auto___27189 = arguments.length;
var i__17172__auto___27190 = (0);
while(true){
if((i__17172__auto___27190 < len__17171__auto___27189)){
args__17178__auto__.push((arguments[i__17172__auto___27190]));

var G__27191 = (i__17172__auto___27190 + (1));
i__17172__auto___27190 = G__27191;
continue;
} else {
}
break;
}

var argseq__17179__auto__ = ((((2) < args__17178__auto__.length))?(new cljs.core.IndexedSeq(args__17178__auto__.slice((2)),(0))):null);
return frontend.counter_list.update_every_counter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17179__auto__);
});

frontend.counter_list.update_every_counter.cljs$core$IFn$_invoke$arity$variadic = (function (model,f,args){
return cljs.core.apply.call(null,frontend.counter_list.update_counters_STAR_,model,cljs.core.constantly.call(null,true),f,args);
});

frontend.counter_list.update_every_counter.cljs$lang$maxFixedArity = (2);

frontend.counter_list.update_every_counter.cljs$lang$applyTo = (function (seq27186){
var G__27187 = cljs.core.first.call(null,seq27186);
var seq27186__$1 = cljs.core.next.call(null,seq27186);
var G__27188 = cljs.core.first.call(null,seq27186__$1);
var seq27186__$2 = cljs.core.next.call(null,seq27186__$1);
return frontend.counter_list.update_every_counter.cljs$core$IFn$_invoke$arity$variadic(G__27187,G__27188,seq27186__$2);
});
frontend.counter_list.control = (function frontend$counter_list$control(model,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e27208){if((e27208 instanceof Error)){
var e__19072__auto__ = e27208;
if((e__19072__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-insert","on-insert",2113239980))){
return dispatch.call(null,new cljs.core.Keyword(null,"insert","insert",1286475395));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27209){if((e27209 instanceof Error)){
var e__19072__auto____$1 = e27209;
if((e__19072__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-remove","on-remove",-268656163))){
return dispatch.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27210){if((e27210 instanceof Error)){
var e__19072__auto____$2 = e27210;
if((e__19072__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__27204 = cljs.core.nth.call(null,signal,(0));
if((cljs.core.vector_QMARK_.call(null,signal_0__27204)) && ((cljs.core.count.call(null,signal_0__27204) === 2))){
try{var signal_0__27204_0__27206 = cljs.core.nth.call(null,signal_0__27204,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__27204_0__27206,new cljs.core.Keyword(null,"on-modify","on-modify",2031917378))){
var id = cljs.core.nth.call(null,signal_0__27204,(1));
var e = cljs.core.nth.call(null,signal,(1));
return frontend.counter_list.update_counter.call(null,model,id,frontend.counter.control,e,frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modify","modify",-1261040869),id], null)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27213){if((e27213 instanceof Error)){
var e__19072__auto____$3 = e27213;
if((e__19072__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19072__auto____$3;
}
} else {
throw e27213;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27212){if((e27212 instanceof Error)){
var e__19072__auto____$3 = e27212;
if((e__19072__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19072__auto____$3;
}
} else {
throw e27212;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27211){if((e27211 instanceof Error)){
var e__19072__auto____$3 = e27211;
if((e__19072__auto____$3 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__19072__auto____$3;
}
} else {
throw e27211;

}
}} else {
throw e__19072__auto____$2;
}
} else {
throw e27210;

}
}} else {
throw e__19072__auto____$1;
}
} else {
throw e27209;

}
}} else {
throw e__19072__auto__;
}
} else {
throw e27208;

}
}});
frontend.counter_list.reconcile = (function frontend$counter_list$reconcile(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"insert","insert",1286475395))){
return cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"counters","counters",33475982),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(model),frontend.counter.init.call(null,(0))], null)], null)),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27229){if((e27229 instanceof Error)){
var e__19072__auto__ = e27229;
if((e__19072__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"remove","remove",-131428414))){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"counters","counters",33475982),cljs.core.rest);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27230){if((e27230 instanceof Error)){
var e__19072__auto____$1 = e27230;
if((e__19072__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__27225 = cljs.core.nth.call(null,action,(0));
if((cljs.core.vector_QMARK_.call(null,action_0__27225)) && ((cljs.core.count.call(null,action_0__27225) === 2))){
try{var action_0__27225_0__27227 = cljs.core.nth.call(null,action_0__27225,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__27225_0__27227,new cljs.core.Keyword(null,"modify","modify",-1261040869))){
var id = cljs.core.nth.call(null,action_0__27225,(1));
var c = cljs.core.nth.call(null,action,(1));
return frontend.counter_list.update_counter.call(null,model,id,frontend.counter.reconcile,c);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27233){if((e27233 instanceof Error)){
var e__19072__auto____$2 = e27233;
if((e__19072__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19072__auto____$2;
}
} else {
throw e27233;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27232){if((e27232 instanceof Error)){
var e__19072__auto____$2 = e27232;
if((e__19072__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19072__auto____$2;
}
} else {
throw e27232;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27231){if((e27231 instanceof Error)){
var e__19072__auto____$2 = e27231;
if((e__19072__auto____$2 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__19072__auto____$2;
}
} else {
throw e27231;

}
}} else {
throw e__19072__auto____$1;
}
} else {
throw e27230;

}
}} else {
throw e__19072__auto__;
}
} else {
throw e27229;

}
}});
frontend.counter_list.view_model = (function frontend$counter_list$view_model(model){
return cljs.core.select_keys.call(null,frontend.counter_list.update_every_counter.call(null,model,frontend.counter.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counters","counters",33475982)], null));
});
frontend.counter_list.view_counter = (function frontend$counter_list$view_counter(p__27234,dispatch){
var vec__27236 = p__27234;
var id = cljs.core.nth.call(null,vec__27236,(0),null);
var view_model = cljs.core.nth.call(null,vec__27236,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.counter.view,view_model,frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-modify","on-modify",2031917378),id], null))], null);
});
frontend.counter_list.view = (function frontend$counter_list$view(view_model,dispatch){
var counters = cljs.core.map.call(null,(function (p1__27237_SHARP_){
return frontend.counter_list.view_counter.call(null,p1__27237_SHARP_,dispatch);
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
frontend.counter_list.example = (function frontend$counter_list$example(){
return frontend.ui.connect.call(null,frontend.counter_list.model,frontend.counter_list.view_model,frontend.counter_list.view,frontend.ui.wrap_log_signals.call(null,frontend.counter_list.control),frontend.ui.wrap_log_actions.call(null,frontend.counter_list.reconcile));
});
/**
 * Wrapper to get rid of unnecessary calls to ui/connect on Figwheel reloads.
 *   In particalur, :on-connect will not be triggered on each reload.
 */
frontend.counter_list.example_view = (function frontend$counter_list$example_view(){
return new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(frontend.counter_list.example.call(null));
});

//# sourceMappingURL=counter_list.js.map?rel=1448902872501