// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.random_gif_list');
goog.require('cljs.core');
goog.require('frontend.ui');
goog.require('frontend.random_gif');
goog.require('cljs.core.match');
goog.require('com.rpl.specter');
frontend.random_gif_list.init = (function frontend$random_gif_list$init(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topic","topic",-1960480691),"",new cljs.core.Keyword(null,"gifs","gifs",300250082),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"next-id","next-id",-224240762),(0)], null);
});
/**
 * Applies a function of args [gif-model & args] to the gif items specified by predicate.
 *   The function can have side-effects. Returns a new model.
 */
frontend.random_gif_list._update_gifs_STAR_ = (function frontend$random_gif_list$_update_gifs_STAR_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___29177 = arguments.length;
var i__17810__auto___29178 = (0);
while(true){
if((i__17810__auto___29178 < len__17809__auto___29177)){
args__17816__auto__.push((arguments[i__17810__auto___29178]));

var G__29179 = (i__17810__auto___29178 + (1));
i__17810__auto___29178 = G__29179;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.random_gif_list._update_gifs_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.random_gif_list._update_gifs_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gifs","gifs",300250082),com.rpl.specter.ALL,pred,new cljs.core.Keyword(null,"item","item",249373802)], null),(function (p1__29172_SHARP_){
return cljs.core.apply.call(null,f,p1__29172_SHARP_,args);
}),model);
});

frontend.random_gif_list._update_gifs_STAR_.cljs$lang$maxFixedArity = (3);

frontend.random_gif_list._update_gifs_STAR_.cljs$lang$applyTo = (function (seq29173){
var G__29174 = cljs.core.first.call(null,seq29173);
var seq29173__$1 = cljs.core.next.call(null,seq29173);
var G__29175 = cljs.core.first.call(null,seq29173__$1);
var seq29173__$2 = cljs.core.next.call(null,seq29173__$1);
var G__29176 = cljs.core.first.call(null,seq29173__$2);
var seq29173__$3 = cljs.core.next.call(null,seq29173__$2);
return frontend.random_gif_list._update_gifs_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__29174,G__29175,G__29176,seq29173__$3);
});
frontend.random_gif_list._update_gif = (function frontend$random_gif_list$_update_gif(var_args){
var args__17816__auto__ = [];
var len__17809__auto___29185 = arguments.length;
var i__17810__auto___29186 = (0);
while(true){
if((i__17810__auto___29186 < len__17809__auto___29185)){
args__17816__auto__.push((arguments[i__17810__auto___29186]));

var G__29187 = (i__17810__auto___29186 + (1));
i__17810__auto___29186 = G__29187;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.random_gif_list._update_gif.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.random_gif_list._update_gif.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.random_gif_list._update_gifs_STAR_,model,(function (p1__29180_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__29180_SHARP_),id);
}),f,args);
});

frontend.random_gif_list._update_gif.cljs$lang$maxFixedArity = (3);

frontend.random_gif_list._update_gif.cljs$lang$applyTo = (function (seq29181){
var G__29182 = cljs.core.first.call(null,seq29181);
var seq29181__$1 = cljs.core.next.call(null,seq29181);
var G__29183 = cljs.core.first.call(null,seq29181__$1);
var seq29181__$2 = cljs.core.next.call(null,seq29181__$1);
var G__29184 = cljs.core.first.call(null,seq29181__$2);
var seq29181__$3 = cljs.core.next.call(null,seq29181__$2);
return frontend.random_gif_list._update_gif.cljs$core$IFn$_invoke$arity$variadic(G__29182,G__29183,G__29184,seq29181__$3);
});
frontend.random_gif_list._update_every_gif = (function frontend$random_gif_list$_update_every_gif(var_args){
var args__17816__auto__ = [];
var len__17809__auto___29191 = arguments.length;
var i__17810__auto___29192 = (0);
while(true){
if((i__17810__auto___29192 < len__17809__auto___29191)){
args__17816__auto__.push((arguments[i__17810__auto___29192]));

var G__29193 = (i__17810__auto___29192 + (1));
i__17810__auto___29192 = G__29193;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((2) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((2)),(0))):null);
return frontend.random_gif_list._update_every_gif.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17817__auto__);
});

frontend.random_gif_list._update_every_gif.cljs$core$IFn$_invoke$arity$variadic = (function (model,f,args){
return cljs.core.apply.call(null,frontend.random_gif_list._update_gifs_STAR_,model,cljs.core.constantly.call(null,true),f,args);
});

frontend.random_gif_list._update_every_gif.cljs$lang$maxFixedArity = (2);

frontend.random_gif_list._update_every_gif.cljs$lang$applyTo = (function (seq29188){
var G__29189 = cljs.core.first.call(null,seq29188);
var seq29188__$1 = cljs.core.next.call(null,seq29188);
var G__29190 = cljs.core.first.call(null,seq29188__$1);
var seq29188__$2 = cljs.core.next.call(null,seq29188__$1);
return frontend.random_gif_list._update_every_gif.cljs$core$IFn$_invoke$arity$variadic(G__29189,G__29190,seq29188__$2);
});
frontend.random_gif_list._get_gif = (function frontend$random_gif_list$_get_gif(model,id){
return new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29194_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__29194_SHARP_),id);
}),new cljs.core.Keyword(null,"gifs","gifs",300250082).cljs$core$IFn$_invoke$arity$1(model))));
});
frontend.random_gif_list.new_control = (function frontend$random_gif_list$new_control(gif_fetcher){
return (function frontend$random_gif_list$new_control_$_control(model,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e29245){if((e29245 instanceof Error)){
var e__19654__auto__ = e29245;
if((e__19654__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__29239 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29239,new cljs.core.Keyword(null,"on-input-topic","on-input-topic",874806732))){
var val = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-topic","set-topic",2087094502),val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29251){if((e29251 instanceof Error)){
var e__19654__auto____$1 = e29251;
if((e__19654__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19654__auto____$1;
}
} else {
throw e29251;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29246){if((e29246 instanceof Error)){
var e__19654__auto____$1 = e29246;
if((e__19654__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-insert","on-insert",2113239980))){
var new_id = new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(model);
return frontend$random_gif_list$new_control_$_control.call(null,dispatch.call(null,new cljs.core.Keyword(null,"insert","insert",1286475395)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-sub-signal","on-sub-signal",733578010),new_id], null),new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056)], null),dispatch);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29247){if((e29247 instanceof Error)){
var e__19654__auto____$2 = e29247;
if((e__19654__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__29241 = cljs.core.nth.call(null,signal,(0));
if((cljs.core.vector_QMARK_.call(null,signal_0__29241)) && ((cljs.core.count.call(null,signal_0__29241) === 2))){
try{var signal_0__29241_0__29243 = cljs.core.nth.call(null,signal_0__29241,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29241_0__29243,new cljs.core.Keyword(null,"on-sub-signal","on-sub-signal",733578010))){
var id = cljs.core.nth.call(null,signal_0__29241,(1));
var s = cljs.core.nth.call(null,signal,(1));
return frontend.random_gif_list._update_gif.call(null,model,id,frontend.random_gif.new_control.call(null,gif_fetcher),s,((function (id,s,signal_0__29241_0__29243,signal_0__29241,e__19654__auto____$2,e__19654__auto____$1,e__19654__auto__){
return (function (p1__29195_SHARP_){
return frontend.random_gif_list._get_gif.call(null,dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub-action","sub-action",-496186430),id], null),p1__29195_SHARP_], null)),id);
});})(id,s,signal_0__29241_0__29243,signal_0__29241,e__19654__auto____$2,e__19654__auto____$1,e__19654__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29250){if((e29250 instanceof Error)){
var e__19654__auto____$3 = e29250;
if((e__19654__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19654__auto____$3;
}
} else {
throw e29250;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29249){if((e29249 instanceof Error)){
var e__19654__auto____$3 = e29249;
if((e__19654__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19654__auto____$3;
}
} else {
throw e29249;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29248){if((e29248 instanceof Error)){
var e__19654__auto____$3 = e29248;
if((e__19654__auto____$3 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__19654__auto____$3;
}
} else {
throw e29248;

}
}} else {
throw e__19654__auto____$2;
}
} else {
throw e29247;

}
}} else {
throw e__19654__auto____$1;
}
} else {
throw e29246;

}
}} else {
throw e__19654__auto__;
}
} else {
throw e29245;

}
}});
});
frontend.random_gif_list.reconcile = (function frontend$random_gif_list$reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__29266 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29266,new cljs.core.Keyword(null,"set-topic","set-topic",2087094502))){
var val = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"topic","topic",-1960480691),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29277){if((e29277 instanceof Error)){
var e__19654__auto__ = e29277;
if((e__19654__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19654__auto__;
}
} else {
throw e29277;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29272){if((e29272 instanceof Error)){
var e__19654__auto__ = e29272;
if((e__19654__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"insert","insert",1286475395))){
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"gifs","gifs",300250082),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"item","item",249373802),frontend.random_gif.init.call(null,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(model))], null)], null)),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.inc),new cljs.core.Keyword(null,"topic","topic",-1960480691),"");
} else {
throw cljs.core.match.backtrack;

}
}catch (e29273){if((e29273 instanceof Error)){
var e__19654__auto____$1 = e29273;
if((e__19654__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__29268 = cljs.core.nth.call(null,action,(0));
if((cljs.core.vector_QMARK_.call(null,action_0__29268)) && ((cljs.core.count.call(null,action_0__29268) === 2))){
try{var action_0__29268_0__29270 = cljs.core.nth.call(null,action_0__29268,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29268_0__29270,new cljs.core.Keyword(null,"sub-action","sub-action",-496186430))){
var id = cljs.core.nth.call(null,action_0__29268,(1));
var a = cljs.core.nth.call(null,action,(1));
return frontend.random_gif_list._update_gif.call(null,model,id,frontend.random_gif.reconcile,a);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29276){if((e29276 instanceof Error)){
var e__19654__auto____$2 = e29276;
if((e__19654__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19654__auto____$2;
}
} else {
throw e29276;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29275){if((e29275 instanceof Error)){
var e__19654__auto____$2 = e29275;
if((e__19654__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19654__auto____$2;
}
} else {
throw e29275;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29274){if((e29274 instanceof Error)){
var e__19654__auto____$2 = e29274;
if((e__19654__auto____$2 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__19654__auto____$2;
}
} else {
throw e29274;

}
}} else {
throw e__19654__auto____$1;
}
} else {
throw e29273;

}
}} else {
throw e__19654__auto__;
}
} else {
throw e29272;

}
}});
frontend.random_gif_list.view_model = (function frontend$random_gif_list$view_model(model){
return cljs.core.select_keys.call(null,frontend.random_gif_list._update_every_gif.call(null,model,frontend.random_gif.view_model),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"gifs","gifs",300250082)], null));
});
frontend.random_gif_list._element_view = (function frontend$random_gif_list$_element_view(p__29278,dispatch){
var map__29281 = p__29278;
var map__29281__$1 = ((((!((map__29281 == null)))?((((map__29281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29281):map__29281);
var id = cljs.core.get.call(null,map__29281__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var item = cljs.core.get.call(null,map__29281__$1,new cljs.core.Keyword(null,"item","item",249373802));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.random_gif.view,item,frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-sub-signal","on-sub-signal",733578010),id], null))], null);
});
frontend.random_gif_list._is_enter_key_QMARK_ = (function frontend$random_gif_list$_is_enter_key_QMARK_(e){
return cljs.core._EQ_.call(null,e.keyCode,(13));
});
frontend.random_gif_list.view = (function frontend$random_gif_list$view(view_model,dispatch){
var gifs = cljs.core.map.call(null,(function (p1__29283_SHARP_){
return frontend.random_gif_list._element_view.call(null,p1__29283_SHARP_,dispatch);
}),new cljs.core.Keyword(null,"gifs","gifs",300250082).cljs$core$IFn$_invoke$arity$1(view_model));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"20em",new cljs.core.Keyword(null,"height","height",1025178622),"2em"], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What kind of gifs do you want?",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(view_model),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (gifs){
return (function (p1__29284_SHARP_){
if(cljs.core.truth_(frontend.random_gif_list._is_enter_key_QMARK_.call(null,p1__29284_SHARP_))){
return dispatch.call(null,new cljs.core.Keyword(null,"on-insert","on-insert",2113239980));
} else {
return null;
}
});})(gifs))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (gifs){
return (function (p1__29285_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-input-topic","on-input-topic",874806732),p1__29285_SHARP_.target.value], null));
});})(gifs))
], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"wrap"], null)], null)], null),gifs)], null);
});
frontend.random_gif_list.new_spec = (function frontend$random_gif_list$new_spec(gif_fetcher){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init","init",-1875481434),frontend.random_gif_list.init,new cljs.core.Keyword(null,"view-model","view-model",-895405675),frontend.random_gif_list.view_model,new cljs.core.Keyword(null,"view","view",1247994814),frontend.random_gif_list.view,new cljs.core.Keyword(null,"control","control",1892578036),frontend.random_gif_list.new_control.call(null,gif_fetcher),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),frontend.random_gif_list.reconcile], null);
});

//# sourceMappingURL=random_gif_list.js.map?rel=1450277867630