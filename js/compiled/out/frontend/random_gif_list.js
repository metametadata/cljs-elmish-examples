// Compiled by ClojureScript 1.7.122 {}
goog.provide('frontend.random_gif_list');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('frontend.giphy_api');
goog.require('reagent.core');
goog.require('frontend.ui');
goog.require('frontend.random_gif');
goog.require('cljs.core.match');
frontend.random_gif_list.init = (function frontend$random_gif_list$init(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topic","topic",-1960480691),"",new cljs.core.Keyword(null,"gifs","gifs",300250082),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"next-id","next-id",-224240762),(0)], null);
});
/**
 * Applies a function of args [gif-model & args] to the gif items specified by predicate.
 *   The function can have side-effects. Returns a new model.
 */
frontend.random_gif_list.update_gifs_STAR_ = (function frontend$random_gif_list$update_gifs_STAR_(var_args){
var args__17178__auto__ = [];
var len__17171__auto___36038 = arguments.length;
var i__17172__auto___36039 = (0);
while(true){
if((i__17172__auto___36039 < len__17171__auto___36038)){
args__17178__auto__.push((arguments[i__17172__auto___36039]));

var G__36040 = (i__17172__auto___36039 + (1));
i__17172__auto___36039 = G__36040;
continue;
} else {
}
break;
}

var argseq__17179__auto__ = ((((3) < args__17178__auto__.length))?(new cljs.core.IndexedSeq(args__17178__auto__.slice((3)),(0))):null);
return frontend.random_gif_list.update_gifs_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17179__auto__);
});

frontend.random_gif_list.update_gifs_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gifs","gifs",300250082),com.rpl.specter.ALL,pred,new cljs.core.Keyword(null,"item","item",249373802)], null),(function (p1__36033_SHARP_){
return cljs.core.apply.call(null,f,p1__36033_SHARP_,args);
}),model);
});

frontend.random_gif_list.update_gifs_STAR_.cljs$lang$maxFixedArity = (3);

frontend.random_gif_list.update_gifs_STAR_.cljs$lang$applyTo = (function (seq36034){
var G__36035 = cljs.core.first.call(null,seq36034);
var seq36034__$1 = cljs.core.next.call(null,seq36034);
var G__36036 = cljs.core.first.call(null,seq36034__$1);
var seq36034__$2 = cljs.core.next.call(null,seq36034__$1);
var G__36037 = cljs.core.first.call(null,seq36034__$2);
var seq36034__$3 = cljs.core.next.call(null,seq36034__$2);
return frontend.random_gif_list.update_gifs_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__36035,G__36036,G__36037,seq36034__$3);
});
frontend.random_gif_list.update_gif = (function frontend$random_gif_list$update_gif(var_args){
var args__17178__auto__ = [];
var len__17171__auto___36046 = arguments.length;
var i__17172__auto___36047 = (0);
while(true){
if((i__17172__auto___36047 < len__17171__auto___36046)){
args__17178__auto__.push((arguments[i__17172__auto___36047]));

var G__36048 = (i__17172__auto___36047 + (1));
i__17172__auto___36047 = G__36048;
continue;
} else {
}
break;
}

var argseq__17179__auto__ = ((((3) < args__17178__auto__.length))?(new cljs.core.IndexedSeq(args__17178__auto__.slice((3)),(0))):null);
return frontend.random_gif_list.update_gif.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17179__auto__);
});

frontend.random_gif_list.update_gif.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.random_gif_list.update_gifs_STAR_,model,(function (p1__36041_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__36041_SHARP_),id);
}),f,args);
});

frontend.random_gif_list.update_gif.cljs$lang$maxFixedArity = (3);

frontend.random_gif_list.update_gif.cljs$lang$applyTo = (function (seq36042){
var G__36043 = cljs.core.first.call(null,seq36042);
var seq36042__$1 = cljs.core.next.call(null,seq36042);
var G__36044 = cljs.core.first.call(null,seq36042__$1);
var seq36042__$2 = cljs.core.next.call(null,seq36042__$1);
var G__36045 = cljs.core.first.call(null,seq36042__$2);
var seq36042__$3 = cljs.core.next.call(null,seq36042__$2);
return frontend.random_gif_list.update_gif.cljs$core$IFn$_invoke$arity$variadic(G__36043,G__36044,G__36045,seq36042__$3);
});
frontend.random_gif_list.update_every_gif = (function frontend$random_gif_list$update_every_gif(var_args){
var args__17178__auto__ = [];
var len__17171__auto___36052 = arguments.length;
var i__17172__auto___36053 = (0);
while(true){
if((i__17172__auto___36053 < len__17171__auto___36052)){
args__17178__auto__.push((arguments[i__17172__auto___36053]));

var G__36054 = (i__17172__auto___36053 + (1));
i__17172__auto___36053 = G__36054;
continue;
} else {
}
break;
}

var argseq__17179__auto__ = ((((2) < args__17178__auto__.length))?(new cljs.core.IndexedSeq(args__17178__auto__.slice((2)),(0))):null);
return frontend.random_gif_list.update_every_gif.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17179__auto__);
});

frontend.random_gif_list.update_every_gif.cljs$core$IFn$_invoke$arity$variadic = (function (model,f,args){
return cljs.core.apply.call(null,frontend.random_gif_list.update_gifs_STAR_,model,cljs.core.constantly.call(null,true),f,args);
});

frontend.random_gif_list.update_every_gif.cljs$lang$maxFixedArity = (2);

frontend.random_gif_list.update_every_gif.cljs$lang$applyTo = (function (seq36049){
var G__36050 = cljs.core.first.call(null,seq36049);
var seq36049__$1 = cljs.core.next.call(null,seq36049);
var G__36051 = cljs.core.first.call(null,seq36049__$1);
var seq36049__$2 = cljs.core.next.call(null,seq36049__$1);
return frontend.random_gif_list.update_every_gif.cljs$core$IFn$_invoke$arity$variadic(G__36050,G__36051,seq36049__$2);
});
frontend.random_gif_list.new_control = (function frontend$random_gif_list$new_control(gif_fetcher){
return (function frontend$random_gif_list$new_control_$_control(model,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e36105){if((e36105 instanceof Error)){
var e__19072__auto__ = e36105;
if((e__19072__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__36099 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__36099,new cljs.core.Keyword(null,"on-input-topic","on-input-topic",874806732))){
var val = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-topic","set-topic",2087094502),val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e36111){if((e36111 instanceof Error)){
var e__19072__auto____$1 = e36111;
if((e__19072__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19072__auto____$1;
}
} else {
throw e36111;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36106){if((e36106 instanceof Error)){
var e__19072__auto____$1 = e36106;
if((e__19072__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-insert","on-insert",2113239980))){
dispatch.call(null,new cljs.core.Keyword(null,"insert","insert",1286475395));

return gif_fetcher.call(null,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(model),((function (e__19072__auto____$1,e__19072__auto__){
return (function (p1__36055_SHARP_){
return frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub-action","sub-action",-496186430),new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(model)], null)).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-gif","set-new-gif",671710456),p1__36055_SHARP_], null));
});})(e__19072__auto____$1,e__19072__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36107){if((e36107 instanceof Error)){
var e__19072__auto____$2 = e36107;
if((e__19072__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__36101 = cljs.core.nth.call(null,signal,(0));
if((cljs.core.vector_QMARK_.call(null,signal_0__36101)) && ((cljs.core.count.call(null,signal_0__36101) === 2))){
try{var signal_0__36101_0__36103 = cljs.core.nth.call(null,signal_0__36101,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__36101_0__36103,new cljs.core.Keyword(null,"on-sub-signal","on-sub-signal",733578010))){
var id = cljs.core.nth.call(null,signal_0__36101,(1));
var e = cljs.core.nth.call(null,signal,(1));
return frontend.random_gif_list.update_gif.call(null,model,id,frontend.random_gif.new_control.call(null,gif_fetcher),e,frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub-action","sub-action",-496186430),id], null)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e36110){if((e36110 instanceof Error)){
var e__19072__auto____$3 = e36110;
if((e__19072__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19072__auto____$3;
}
} else {
throw e36110;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36109){if((e36109 instanceof Error)){
var e__19072__auto____$3 = e36109;
if((e__19072__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19072__auto____$3;
}
} else {
throw e36109;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36108){if((e36108 instanceof Error)){
var e__19072__auto____$3 = e36108;
if((e__19072__auto____$3 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__19072__auto____$3;
}
} else {
throw e36108;

}
}} else {
throw e__19072__auto____$2;
}
} else {
throw e36107;

}
}} else {
throw e__19072__auto____$1;
}
} else {
throw e36106;

}
}} else {
throw e__19072__auto__;
}
} else {
throw e36105;

}
}});
});
frontend.random_gif_list.reconcile = (function frontend$random_gif_list$reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__36126 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__36126,new cljs.core.Keyword(null,"set-topic","set-topic",2087094502))){
var val = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"topic","topic",-1960480691),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36137){if((e36137 instanceof Error)){
var e__19072__auto__ = e36137;
if((e__19072__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19072__auto__;
}
} else {
throw e36137;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36132){if((e36132 instanceof Error)){
var e__19072__auto__ = e36132;
if((e__19072__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"insert","insert",1286475395))){
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"gifs","gifs",300250082),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"item","item",249373802),frontend.random_gif.init.call(null,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(model))], null)], null)),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.inc),new cljs.core.Keyword(null,"topic","topic",-1960480691),"");
} else {
throw cljs.core.match.backtrack;

}
}catch (e36133){if((e36133 instanceof Error)){
var e__19072__auto____$1 = e36133;
if((e__19072__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__36128 = cljs.core.nth.call(null,action,(0));
if((cljs.core.vector_QMARK_.call(null,action_0__36128)) && ((cljs.core.count.call(null,action_0__36128) === 2))){
try{var action_0__36128_0__36130 = cljs.core.nth.call(null,action_0__36128,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__36128_0__36130,new cljs.core.Keyword(null,"sub-action","sub-action",-496186430))){
var id = cljs.core.nth.call(null,action_0__36128,(1));
var c = cljs.core.nth.call(null,action,(1));
return frontend.random_gif_list.update_gif.call(null,model,id,frontend.random_gif.reconcile,c);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36136){if((e36136 instanceof Error)){
var e__19072__auto____$2 = e36136;
if((e__19072__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19072__auto____$2;
}
} else {
throw e36136;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36135){if((e36135 instanceof Error)){
var e__19072__auto____$2 = e36135;
if((e__19072__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19072__auto____$2;
}
} else {
throw e36135;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e36134){if((e36134 instanceof Error)){
var e__19072__auto____$2 = e36134;
if((e__19072__auto____$2 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__19072__auto____$2;
}
} else {
throw e36134;

}
}} else {
throw e__19072__auto____$1;
}
} else {
throw e36133;

}
}} else {
throw e__19072__auto__;
}
} else {
throw e36132;

}
}});
frontend.random_gif_list.view_model = (function frontend$random_gif_list$view_model(model){
return cljs.core.select_keys.call(null,frontend.random_gif_list.update_every_gif.call(null,model,frontend.random_gif.view_model),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"gifs","gifs",300250082)], null));
});
frontend.random_gif_list.element_view = (function frontend$random_gif_list$element_view(p__36138,dispatch){
var map__36141 = p__36138;
var map__36141__$1 = ((((!((map__36141 == null)))?((((map__36141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36141):map__36141);
var id = cljs.core.get.call(null,map__36141__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var item = cljs.core.get.call(null,map__36141__$1,new cljs.core.Keyword(null,"item","item",249373802));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.random_gif.view,item,frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-sub-signal","on-sub-signal",733578010),id], null))], null);
});
frontend.random_gif_list.is_enter_key_QMARK_ = (function frontend$random_gif_list$is_enter_key_QMARK_(e){
return cljs.core._EQ_.call(null,e.keyCode,(13));
});
frontend.random_gif_list.view = (function frontend$random_gif_list$view(view_model,dispatch){
var gifs = cljs.core.map.call(null,(function (p1__36143_SHARP_){
return frontend.random_gif_list.element_view.call(null,p1__36143_SHARP_,dispatch);
}),new cljs.core.Keyword(null,"gifs","gifs",300250082).cljs$core$IFn$_invoke$arity$1(view_model));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"20em",new cljs.core.Keyword(null,"height","height",1025178622),"2em"], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What kind of gifs do you want?",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(view_model),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (gifs){
return (function (p1__36144_SHARP_){
if(cljs.core.truth_(frontend.random_gif_list.is_enter_key_QMARK_.call(null,p1__36144_SHARP_))){
return dispatch.call(null,new cljs.core.Keyword(null,"on-insert","on-insert",2113239980));
} else {
return null;
}
});})(gifs))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (gifs){
return (function (p1__36145_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-input-topic","on-input-topic",874806732),p1__36145_SHARP_.target.value], null));
});})(gifs))
], null)], null),cljs.core.remove,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"wrap"], null)], null)], null),gifs)], null);
});
if(typeof frontend.random_gif_list.model !== 'undefined'){
} else {
frontend.random_gif_list.model = reagent.core.atom.call(null,frontend.random_gif_list.init.call(null));
}
frontend.random_gif_list.example = (function frontend$random_gif_list$example(){
return frontend.ui.connect.call(null,frontend.random_gif_list.model,frontend.random_gif_list.view_model,frontend.random_gif_list.view,frontend.ui.wrap_log_signals.call(null,frontend.random_gif_list.new_control.call(null,frontend.giphy_api.get_random_gif)),frontend.ui.wrap_log_actions.call(null,frontend.random_gif_list.reconcile));
});
/**
 * Wrapper to get rid of unnecessary calls to ui/connect on Figwheel reloads.
 *   In particalur, :on-connect will not be triggered on each reload.
 */
frontend.random_gif_list.example_view = (function frontend$random_gif_list$example_view(){
return new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(frontend.random_gif_list.example.call(null));
});

//# sourceMappingURL=random_gif_list.js.map?rel=1448906312084