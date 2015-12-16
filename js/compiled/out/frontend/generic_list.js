// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.generic_list');
goog.require('cljs.core');
goog.require('frontend.ui');
goog.require('cljs.core.match');
goog.require('com.rpl.specter');
frontend.generic_list.init = (function frontend$generic_list$init(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"next-id","next-id",-224240762),(0)], null);
});
/**
 * Applies a function of args [gif-model & args] to the gif items specified by predicate.
 *   The function can have side-effects. Returns a new model.
 */
frontend.generic_list._update_items_STAR_ = (function frontend$generic_list$_update_items_STAR_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___28431 = arguments.length;
var i__17810__auto___28432 = (0);
while(true){
if((i__17810__auto___28432 < len__17809__auto___28431)){
args__17816__auto__.push((arguments[i__17810__auto___28432]));

var G__28433 = (i__17810__auto___28432 + (1));
i__17810__auto___28432 = G__28433;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.generic_list._update_items_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.generic_list._update_items_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),com.rpl.specter.ALL,pred,new cljs.core.Keyword(null,"item","item",249373802)], null),(function (p1__28426_SHARP_){
return cljs.core.apply.call(null,f,p1__28426_SHARP_,args);
}),model);
});

frontend.generic_list._update_items_STAR_.cljs$lang$maxFixedArity = (3);

frontend.generic_list._update_items_STAR_.cljs$lang$applyTo = (function (seq28427){
var G__28428 = cljs.core.first.call(null,seq28427);
var seq28427__$1 = cljs.core.next.call(null,seq28427);
var G__28429 = cljs.core.first.call(null,seq28427__$1);
var seq28427__$2 = cljs.core.next.call(null,seq28427__$1);
var G__28430 = cljs.core.first.call(null,seq28427__$2);
var seq28427__$3 = cljs.core.next.call(null,seq28427__$2);
return frontend.generic_list._update_items_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__28428,G__28429,G__28430,seq28427__$3);
});
frontend.generic_list._update_item = (function frontend$generic_list$_update_item(var_args){
var args__17816__auto__ = [];
var len__17809__auto___28439 = arguments.length;
var i__17810__auto___28440 = (0);
while(true){
if((i__17810__auto___28440 < len__17809__auto___28439)){
args__17816__auto__.push((arguments[i__17810__auto___28440]));

var G__28441 = (i__17810__auto___28440 + (1));
i__17810__auto___28440 = G__28441;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.generic_list._update_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.generic_list._update_item.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.generic_list._update_items_STAR_,model,(function (p1__28434_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__28434_SHARP_),id);
}),f,args);
});

frontend.generic_list._update_item.cljs$lang$maxFixedArity = (3);

frontend.generic_list._update_item.cljs$lang$applyTo = (function (seq28435){
var G__28436 = cljs.core.first.call(null,seq28435);
var seq28435__$1 = cljs.core.next.call(null,seq28435);
var G__28437 = cljs.core.first.call(null,seq28435__$1);
var seq28435__$2 = cljs.core.next.call(null,seq28435__$1);
var G__28438 = cljs.core.first.call(null,seq28435__$2);
var seq28435__$3 = cljs.core.next.call(null,seq28435__$2);
return frontend.generic_list._update_item.cljs$core$IFn$_invoke$arity$variadic(G__28436,G__28437,G__28438,seq28435__$3);
});
frontend.generic_list._update_every_item = (function frontend$generic_list$_update_every_item(var_args){
var args__17816__auto__ = [];
var len__17809__auto___28445 = arguments.length;
var i__17810__auto___28446 = (0);
while(true){
if((i__17810__auto___28446 < len__17809__auto___28445)){
args__17816__auto__.push((arguments[i__17810__auto___28446]));

var G__28447 = (i__17810__auto___28446 + (1));
i__17810__auto___28446 = G__28447;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((2) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((2)),(0))):null);
return frontend.generic_list._update_every_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17817__auto__);
});

frontend.generic_list._update_every_item.cljs$core$IFn$_invoke$arity$variadic = (function (model,f,args){
return cljs.core.apply.call(null,frontend.generic_list._update_items_STAR_,model,cljs.core.constantly.call(null,true),f,args);
});

frontend.generic_list._update_every_item.cljs$lang$maxFixedArity = (2);

frontend.generic_list._update_every_item.cljs$lang$applyTo = (function (seq28442){
var G__28443 = cljs.core.first.call(null,seq28442);
var seq28442__$1 = cljs.core.next.call(null,seq28442);
var G__28444 = cljs.core.first.call(null,seq28442__$1);
var seq28442__$2 = cljs.core.next.call(null,seq28442__$1);
return frontend.generic_list._update_every_item.cljs$core$IFn$_invoke$arity$variadic(G__28443,G__28444,seq28442__$2);
});
frontend.generic_list._get_item = (function frontend$generic_list$_get_item(model,id){
return new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__28448_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__28448_SHARP_),id);
}),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(model))));
});
frontend.generic_list.new_control = (function frontend$generic_list$new_control(item_spec){
return (function frontend$generic_list$new_control_$_control(model,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e28488){if((e28488 instanceof Error)){
var e__19654__auto__ = e28488;
if((e__19654__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-insert","on-insert",2113239980))){
var new_id = new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(model);
return frontend$generic_list$new_control_$_control.call(null,dispatch.call(null,new cljs.core.Keyword(null,"insert","insert",1286475395)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-item-signal","on-item-signal",-1097213984),new_id], null),new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056)], null),dispatch);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28489){if((e28489 instanceof Error)){
var e__19654__auto____$1 = e28489;
if((e__19654__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__28484 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__28484,new cljs.core.Keyword(null,"on-remove","on-remove",-268656163))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e28491){if((e28491 instanceof Error)){
var e__19654__auto____$2 = e28491;
if((e__19654__auto____$2 === cljs.core.match.backtrack)){
try{var signal_0__28484 = cljs.core.nth.call(null,signal,(0));
if((cljs.core.vector_QMARK_.call(null,signal_0__28484)) && ((cljs.core.count.call(null,signal_0__28484) === 2))){
try{var signal_0__28484_0__28486 = cljs.core.nth.call(null,signal_0__28484,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__28484_0__28486,new cljs.core.Keyword(null,"on-item-signal","on-item-signal",-1097213984))){
var id = cljs.core.nth.call(null,signal_0__28484,(1));
var s = cljs.core.nth.call(null,signal,(1));
return frontend.generic_list._update_item.call(null,model,id,new cljs.core.Keyword(null,"control","control",1892578036).cljs$core$IFn$_invoke$arity$1(item_spec),s,((function (id,s,signal_0__28484_0__28486,signal_0__28484,e__19654__auto____$2,e__19654__auto____$1,e__19654__auto__){
return (function (p1__28449_SHARP_){
return frontend.generic_list._get_item.call(null,dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-action","item-action",-810685042),id], null),p1__28449_SHARP_], null)),id);
});})(id,s,signal_0__28484_0__28486,signal_0__28484,e__19654__auto____$2,e__19654__auto____$1,e__19654__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28493){if((e28493 instanceof Error)){
var e__19654__auto____$3 = e28493;
if((e__19654__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19654__auto____$3;
}
} else {
throw e28493;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28492){if((e28492 instanceof Error)){
var e__19654__auto____$3 = e28492;
if((e__19654__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19654__auto____$3;
}
} else {
throw e28492;

}
}} else {
throw e__19654__auto____$2;
}
} else {
throw e28491;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28490){if((e28490 instanceof Error)){
var e__19654__auto____$2 = e28490;
if((e__19654__auto____$2 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__19654__auto____$2;
}
} else {
throw e28490;

}
}} else {
throw e__19654__auto____$1;
}
} else {
throw e28489;

}
}} else {
throw e__19654__auto__;
}
} else {
throw e28488;

}
}});
});
frontend.generic_list.new_reconcile = (function frontend$generic_list$new_reconcile(item_spec,item_init_args){
return (function frontend$generic_list$new_reconcile_$_reconcile(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"insert","insert",1286475395))){
var new_item = cljs.core.apply.call(null,new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(item_spec),item_init_args);
return cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"item","item",249373802),new_item], null)], null)),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28530){if((e28530 instanceof Error)){
var e__19654__auto__ = e28530;
if((e__19654__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__28526 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__28526,new cljs.core.Keyword(null,"remove","remove",-131428414))){
var id = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"items","items",1031954938),((function (id,action_0__28526,e__19654__auto__){
return (function (p1__28494_SHARP_){
return cljs.core.filter.call(null,((function (id,action_0__28526,e__19654__auto__){
return (function (item){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),id);
});})(id,action_0__28526,e__19654__auto__))
,p1__28494_SHARP_);
});})(id,action_0__28526,e__19654__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28532){if((e28532 instanceof Error)){
var e__19654__auto____$1 = e28532;
if((e__19654__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__28526 = cljs.core.nth.call(null,action,(0));
if((cljs.core.vector_QMARK_.call(null,action_0__28526)) && ((cljs.core.count.call(null,action_0__28526) === 2))){
try{var action_0__28526_0__28528 = cljs.core.nth.call(null,action_0__28526,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__28526_0__28528,new cljs.core.Keyword(null,"item-action","item-action",-810685042))){
var id = cljs.core.nth.call(null,action_0__28526,(1));
var a = cljs.core.nth.call(null,action,(1));
return frontend.generic_list._update_item.call(null,model,id,new cljs.core.Keyword(null,"reconcile","reconcile",-728661830).cljs$core$IFn$_invoke$arity$1(item_spec),a);
} else {
throw cljs.core.match.backtrack;

}
}catch (e28534){if((e28534 instanceof Error)){
var e__19654__auto____$2 = e28534;
if((e__19654__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19654__auto____$2;
}
} else {
throw e28534;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28533){if((e28533 instanceof Error)){
var e__19654__auto____$2 = e28533;
if((e__19654__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19654__auto____$2;
}
} else {
throw e28533;

}
}} else {
throw e__19654__auto____$1;
}
} else {
throw e28532;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e28531){if((e28531 instanceof Error)){
var e__19654__auto____$1 = e28531;
if((e__19654__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__19654__auto____$1;
}
} else {
throw e28531;

}
}} else {
throw e__19654__auto__;
}
} else {
throw e28530;

}
}});
});
frontend.generic_list.new_view_model = (function frontend$generic_list$new_view_model(item_spec){
return (function frontend$generic_list$new_view_model_$_view_model(model){
return cljs.core.select_keys.call(null,frontend.generic_list._update_every_item.call(null,model,new cljs.core.Keyword(null,"view-model","view-model",-895405675).cljs$core$IFn$_invoke$arity$1(item_spec)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"next-id","next-id",-224240762)], null));
});
});
frontend.generic_list._item_views = (function frontend$generic_list$_item_views(items,dispatch,item_spec){
return cljs.core.map.call(null,(function (p__28538){
var map__28539 = p__28538;
var map__28539__$1 = ((((!((map__28539 == null)))?((((map__28539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28539):map__28539);
var id = cljs.core.get.call(null,map__28539__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var item = cljs.core.get.call(null,map__28539__$1,new cljs.core.Keyword(null,"item","item",249373802));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(item_spec),item,frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-item-signal","on-item-signal",-1097213984),id], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__28539,map__28539__$1,id,item){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-remove","on-remove",-268656163),id], null));
});})(map__28539,map__28539__$1,id,item))
], null),"X"], null)], null);
}),items);
});
frontend.generic_list.new_view = (function frontend$generic_list$new_view(item_spec){
return (function frontend$generic_list$new_view_$__view(view_model,dispatch){
var items = frontend.generic_list._item_views.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(view_model),dispatch,item_spec);
var insert = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (items){
return (function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-insert","on-insert",2113239980));
});})(items))
], null),"Insert"], null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),insert], null),items);
});
});
/**
 * Returns a spec for a list of items. Each new item will be initialized using item-init-args.
 */
frontend.generic_list.new_spec = (function frontend$generic_list$new_spec(var_args){
var args__17816__auto__ = [];
var len__17809__auto___28543 = arguments.length;
var i__17810__auto___28544 = (0);
while(true){
if((i__17810__auto___28544 < len__17809__auto___28543)){
args__17816__auto__.push((arguments[i__17810__auto___28544]));

var G__28545 = (i__17810__auto___28544 + (1));
i__17810__auto___28544 = G__28545;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((1) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((1)),(0))):null);
return frontend.generic_list.new_spec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17817__auto__);
});

frontend.generic_list.new_spec.cljs$core$IFn$_invoke$arity$variadic = (function (item_spec,item_init_args){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init","init",-1875481434),frontend.generic_list.init,new cljs.core.Keyword(null,"view-model","view-model",-895405675),frontend.generic_list.new_view_model.call(null,item_spec),new cljs.core.Keyword(null,"view","view",1247994814),frontend.generic_list.new_view.call(null,item_spec),new cljs.core.Keyword(null,"control","control",1892578036),frontend.generic_list.new_control.call(null,item_spec),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),frontend.generic_list.new_reconcile.call(null,item_spec,item_init_args)], null);
});

frontend.generic_list.new_spec.cljs$lang$maxFixedArity = (1);

frontend.generic_list.new_spec.cljs$lang$applyTo = (function (seq28541){
var G__28542 = cljs.core.first.call(null,seq28541);
var seq28541__$1 = cljs.core.next.call(null,seq28541);
return frontend.generic_list.new_spec.cljs$core$IFn$_invoke$arity$variadic(G__28542,seq28541__$1);
});

//# sourceMappingURL=generic_list.js.map?rel=1450277834880