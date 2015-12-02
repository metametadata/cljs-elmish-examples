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
var len__17809__auto___23468 = arguments.length;
var i__17810__auto___23469 = (0);
while(true){
if((i__17810__auto___23469 < len__17809__auto___23468)){
args__17816__auto__.push((arguments[i__17810__auto___23469]));

var G__23470 = (i__17810__auto___23469 + (1));
i__17810__auto___23469 = G__23470;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.random_gif_list._update_gifs_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.random_gif_list._update_gifs_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gifs","gifs",300250082),com.rpl.specter.ALL,pred,new cljs.core.Keyword(null,"item","item",249373802)], null),(function (p1__23463_SHARP_){
return cljs.core.apply.call(null,f,p1__23463_SHARP_,args);
}),model);
});

frontend.random_gif_list._update_gifs_STAR_.cljs$lang$maxFixedArity = (3);

frontend.random_gif_list._update_gifs_STAR_.cljs$lang$applyTo = (function (seq23464){
var G__23465 = cljs.core.first.call(null,seq23464);
var seq23464__$1 = cljs.core.next.call(null,seq23464);
var G__23466 = cljs.core.first.call(null,seq23464__$1);
var seq23464__$2 = cljs.core.next.call(null,seq23464__$1);
var G__23467 = cljs.core.first.call(null,seq23464__$2);
var seq23464__$3 = cljs.core.next.call(null,seq23464__$2);
return frontend.random_gif_list._update_gifs_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23465,G__23466,G__23467,seq23464__$3);
});
frontend.random_gif_list._update_gif = (function frontend$random_gif_list$_update_gif(var_args){
var args__17816__auto__ = [];
var len__17809__auto___23476 = arguments.length;
var i__17810__auto___23477 = (0);
while(true){
if((i__17810__auto___23477 < len__17809__auto___23476)){
args__17816__auto__.push((arguments[i__17810__auto___23477]));

var G__23478 = (i__17810__auto___23477 + (1));
i__17810__auto___23477 = G__23478;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.random_gif_list._update_gif.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.random_gif_list._update_gif.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.random_gif_list._update_gifs_STAR_,model,(function (p1__23471_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__23471_SHARP_),id);
}),f,args);
});

frontend.random_gif_list._update_gif.cljs$lang$maxFixedArity = (3);

frontend.random_gif_list._update_gif.cljs$lang$applyTo = (function (seq23472){
var G__23473 = cljs.core.first.call(null,seq23472);
var seq23472__$1 = cljs.core.next.call(null,seq23472);
var G__23474 = cljs.core.first.call(null,seq23472__$1);
var seq23472__$2 = cljs.core.next.call(null,seq23472__$1);
var G__23475 = cljs.core.first.call(null,seq23472__$2);
var seq23472__$3 = cljs.core.next.call(null,seq23472__$2);
return frontend.random_gif_list._update_gif.cljs$core$IFn$_invoke$arity$variadic(G__23473,G__23474,G__23475,seq23472__$3);
});
frontend.random_gif_list._update_every_gif = (function frontend$random_gif_list$_update_every_gif(var_args){
var args__17816__auto__ = [];
var len__17809__auto___23482 = arguments.length;
var i__17810__auto___23483 = (0);
while(true){
if((i__17810__auto___23483 < len__17809__auto___23482)){
args__17816__auto__.push((arguments[i__17810__auto___23483]));

var G__23484 = (i__17810__auto___23483 + (1));
i__17810__auto___23483 = G__23484;
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

frontend.random_gif_list._update_every_gif.cljs$lang$applyTo = (function (seq23479){
var G__23480 = cljs.core.first.call(null,seq23479);
var seq23479__$1 = cljs.core.next.call(null,seq23479);
var G__23481 = cljs.core.first.call(null,seq23479__$1);
var seq23479__$2 = cljs.core.next.call(null,seq23479__$1);
return frontend.random_gif_list._update_every_gif.cljs$core$IFn$_invoke$arity$variadic(G__23480,G__23481,seq23479__$2);
});
frontend.random_gif_list.new_control = (function frontend$random_gif_list$new_control(gif_fetcher){
return (function frontend$random_gif_list$new_control_$_control(model,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e23535){if((e23535 instanceof Error)){
var e__20496__auto__ = e23535;
if((e__20496__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__23529 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__23529,new cljs.core.Keyword(null,"on-input-topic","on-input-topic",874806732))){
var val = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-topic","set-topic",2087094502),val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23541){if((e23541 instanceof Error)){
var e__20496__auto____$1 = e23541;
if((e__20496__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20496__auto____$1;
}
} else {
throw e23541;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23536){if((e23536 instanceof Error)){
var e__20496__auto____$1 = e23536;
if((e__20496__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-insert","on-insert",2113239980))){
dispatch.call(null,new cljs.core.Keyword(null,"insert","insert",1286475395));

return gif_fetcher.call(null,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(model),((function (e__20496__auto____$1,e__20496__auto__){
return (function (p1__23485_SHARP_){
return frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub-action","sub-action",-496186430),new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(model)], null)).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-gif","set-new-gif",671710456),p1__23485_SHARP_], null));
});})(e__20496__auto____$1,e__20496__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e23537){if((e23537 instanceof Error)){
var e__20496__auto____$2 = e23537;
if((e__20496__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__23531 = cljs.core.nth.call(null,signal,(0));
if((cljs.core.vector_QMARK_.call(null,signal_0__23531)) && ((cljs.core.count.call(null,signal_0__23531) === 2))){
try{var signal_0__23531_0__23533 = cljs.core.nth.call(null,signal_0__23531,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__23531_0__23533,new cljs.core.Keyword(null,"on-sub-signal","on-sub-signal",733578010))){
var id = cljs.core.nth.call(null,signal_0__23531,(1));
var s = cljs.core.nth.call(null,signal,(1));
return frontend.random_gif_list._update_gif.call(null,model,id,frontend.random_gif.new_control.call(null,gif_fetcher),s,frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub-action","sub-action",-496186430),id], null)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23540){if((e23540 instanceof Error)){
var e__20496__auto____$3 = e23540;
if((e__20496__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20496__auto____$3;
}
} else {
throw e23540;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23539){if((e23539 instanceof Error)){
var e__20496__auto____$3 = e23539;
if((e__20496__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20496__auto____$3;
}
} else {
throw e23539;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23538){if((e23538 instanceof Error)){
var e__20496__auto____$3 = e23538;
if((e__20496__auto____$3 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__20496__auto____$3;
}
} else {
throw e23538;

}
}} else {
throw e__20496__auto____$2;
}
} else {
throw e23537;

}
}} else {
throw e__20496__auto____$1;
}
} else {
throw e23536;

}
}} else {
throw e__20496__auto__;
}
} else {
throw e23535;

}
}});
});
frontend.random_gif_list.reconcile = (function frontend$random_gif_list$reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__23556 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__23556,new cljs.core.Keyword(null,"set-topic","set-topic",2087094502))){
var val = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"topic","topic",-1960480691),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e23567){if((e23567 instanceof Error)){
var e__20496__auto__ = e23567;
if((e__20496__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20496__auto__;
}
} else {
throw e23567;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23562){if((e23562 instanceof Error)){
var e__20496__auto__ = e23562;
if((e__20496__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"insert","insert",1286475395))){
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"gifs","gifs",300250082),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"item","item",249373802),frontend.random_gif.init.call(null,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(model))], null)], null)),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.inc),new cljs.core.Keyword(null,"topic","topic",-1960480691),"");
} else {
throw cljs.core.match.backtrack;

}
}catch (e23563){if((e23563 instanceof Error)){
var e__20496__auto____$1 = e23563;
if((e__20496__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__23558 = cljs.core.nth.call(null,action,(0));
if((cljs.core.vector_QMARK_.call(null,action_0__23558)) && ((cljs.core.count.call(null,action_0__23558) === 2))){
try{var action_0__23558_0__23560 = cljs.core.nth.call(null,action_0__23558,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__23558_0__23560,new cljs.core.Keyword(null,"sub-action","sub-action",-496186430))){
var id = cljs.core.nth.call(null,action_0__23558,(1));
var a = cljs.core.nth.call(null,action,(1));
return frontend.random_gif_list._update_gif.call(null,model,id,frontend.random_gif.reconcile,a);
} else {
throw cljs.core.match.backtrack;

}
}catch (e23566){if((e23566 instanceof Error)){
var e__20496__auto____$2 = e23566;
if((e__20496__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20496__auto____$2;
}
} else {
throw e23566;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23565){if((e23565 instanceof Error)){
var e__20496__auto____$2 = e23565;
if((e__20496__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20496__auto____$2;
}
} else {
throw e23565;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23564){if((e23564 instanceof Error)){
var e__20496__auto____$2 = e23564;
if((e__20496__auto____$2 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__20496__auto____$2;
}
} else {
throw e23564;

}
}} else {
throw e__20496__auto____$1;
}
} else {
throw e23563;

}
}} else {
throw e__20496__auto__;
}
} else {
throw e23562;

}
}});
frontend.random_gif_list.view_model = (function frontend$random_gif_list$view_model(model){
return cljs.core.select_keys.call(null,frontend.random_gif_list._update_every_gif.call(null,model,frontend.random_gif.view_model),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"gifs","gifs",300250082)], null));
});
frontend.random_gif_list._element_view = (function frontend$random_gif_list$_element_view(p__23568,dispatch){
var map__23571 = p__23568;
var map__23571__$1 = ((((!((map__23571 == null)))?((((map__23571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23571):map__23571);
var id = cljs.core.get.call(null,map__23571__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var item = cljs.core.get.call(null,map__23571__$1,new cljs.core.Keyword(null,"item","item",249373802));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.random_gif.view,item,frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-sub-signal","on-sub-signal",733578010),id], null))], null);
});
frontend.random_gif_list._is_enter_key_QMARK_ = (function frontend$random_gif_list$_is_enter_key_QMARK_(e){
return cljs.core._EQ_.call(null,e.keyCode,(13));
});
frontend.random_gif_list.view = (function frontend$random_gif_list$view(view_model,dispatch){
var gifs = cljs.core.map.call(null,(function (p1__23573_SHARP_){
return frontend.random_gif_list._element_view.call(null,p1__23573_SHARP_,dispatch);
}),new cljs.core.Keyword(null,"gifs","gifs",300250082).cljs$core$IFn$_invoke$arity$1(view_model));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"20em",new cljs.core.Keyword(null,"height","height",1025178622),"2em"], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What kind of gifs do you want?",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(view_model),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (gifs){
return (function (p1__23574_SHARP_){
if(cljs.core.truth_(frontend.random_gif_list._is_enter_key_QMARK_.call(null,p1__23574_SHARP_))){
return dispatch.call(null,new cljs.core.Keyword(null,"on-insert","on-insert",2113239980));
} else {
return null;
}
});})(gifs))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (gifs){
return (function (p1__23575_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-input-topic","on-input-topic",874806732),p1__23575_SHARP_.target.value], null));
});})(gifs))
], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"wrap"], null)], null)], null),gifs)], null);
});
frontend.random_gif_list.new_spec = (function frontend$random_gif_list$new_spec(gif_fetcher){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init","init",-1875481434),frontend.random_gif_list.init,new cljs.core.Keyword(null,"view-model","view-model",-895405675),frontend.random_gif_list.view_model,new cljs.core.Keyword(null,"view","view",1247994814),frontend.random_gif_list.view,new cljs.core.Keyword(null,"control","control",1892578036),frontend.random_gif_list.new_control.call(null,gif_fetcher),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),frontend.random_gif_list.reconcile], null);
});

//# sourceMappingURL=random_gif_list.js.map?rel=1449083085831