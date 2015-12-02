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
var len__17809__auto___23190 = arguments.length;
var i__17810__auto___23191 = (0);
while(true){
if((i__17810__auto___23191 < len__17809__auto___23190)){
args__17816__auto__.push((arguments[i__17810__auto___23191]));

var G__23192 = (i__17810__auto___23191 + (1));
i__17810__auto___23191 = G__23192;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.generic_list._update_items_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.generic_list._update_items_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),com.rpl.specter.ALL,pred,new cljs.core.Keyword(null,"item","item",249373802)], null),(function (p1__23185_SHARP_){
return cljs.core.apply.call(null,f,p1__23185_SHARP_,args);
}),model);
});

frontend.generic_list._update_items_STAR_.cljs$lang$maxFixedArity = (3);

frontend.generic_list._update_items_STAR_.cljs$lang$applyTo = (function (seq23186){
var G__23187 = cljs.core.first.call(null,seq23186);
var seq23186__$1 = cljs.core.next.call(null,seq23186);
var G__23188 = cljs.core.first.call(null,seq23186__$1);
var seq23186__$2 = cljs.core.next.call(null,seq23186__$1);
var G__23189 = cljs.core.first.call(null,seq23186__$2);
var seq23186__$3 = cljs.core.next.call(null,seq23186__$2);
return frontend.generic_list._update_items_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23187,G__23188,G__23189,seq23186__$3);
});
frontend.generic_list._update_item = (function frontend$generic_list$_update_item(var_args){
var args__17816__auto__ = [];
var len__17809__auto___23198 = arguments.length;
var i__17810__auto___23199 = (0);
while(true){
if((i__17810__auto___23199 < len__17809__auto___23198)){
args__17816__auto__.push((arguments[i__17810__auto___23199]));

var G__23200 = (i__17810__auto___23199 + (1));
i__17810__auto___23199 = G__23200;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return frontend.generic_list._update_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

frontend.generic_list._update_item.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.generic_list._update_items_STAR_,model,(function (p1__23193_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__23193_SHARP_),id);
}),f,args);
});

frontend.generic_list._update_item.cljs$lang$maxFixedArity = (3);

frontend.generic_list._update_item.cljs$lang$applyTo = (function (seq23194){
var G__23195 = cljs.core.first.call(null,seq23194);
var seq23194__$1 = cljs.core.next.call(null,seq23194);
var G__23196 = cljs.core.first.call(null,seq23194__$1);
var seq23194__$2 = cljs.core.next.call(null,seq23194__$1);
var G__23197 = cljs.core.first.call(null,seq23194__$2);
var seq23194__$3 = cljs.core.next.call(null,seq23194__$2);
return frontend.generic_list._update_item.cljs$core$IFn$_invoke$arity$variadic(G__23195,G__23196,G__23197,seq23194__$3);
});
frontend.generic_list._update_every_item = (function frontend$generic_list$_update_every_item(var_args){
var args__17816__auto__ = [];
var len__17809__auto___23204 = arguments.length;
var i__17810__auto___23205 = (0);
while(true){
if((i__17810__auto___23205 < len__17809__auto___23204)){
args__17816__auto__.push((arguments[i__17810__auto___23205]));

var G__23206 = (i__17810__auto___23205 + (1));
i__17810__auto___23205 = G__23206;
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

frontend.generic_list._update_every_item.cljs$lang$applyTo = (function (seq23201){
var G__23202 = cljs.core.first.call(null,seq23201);
var seq23201__$1 = cljs.core.next.call(null,seq23201);
var G__23203 = cljs.core.first.call(null,seq23201__$1);
var seq23201__$2 = cljs.core.next.call(null,seq23201__$1);
return frontend.generic_list._update_every_item.cljs$core$IFn$_invoke$arity$variadic(G__23202,G__23203,seq23201__$2);
});
frontend.generic_list.new_control = (function frontend$generic_list$new_control(item_spec){
return (function frontend$generic_list$new_control_$_control(model,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e23248){if((e23248 instanceof Error)){
var e__20496__auto__ = e23248;
if((e__20496__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-insert","on-insert",2113239980))){
return dispatch.call(null,new cljs.core.Keyword(null,"insert","insert",1286475395));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23249){if((e23249 instanceof Error)){
var e__20496__auto____$1 = e23249;
if((e__20496__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__23244 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__23244,new cljs.core.Keyword(null,"on-connect-item","on-connect-item",420213775))){
var id = cljs.core.nth.call(null,signal,(1));
return frontend$generic_list$new_control_$_control.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-item-signal","on-item-signal",-1097213984),id], null),new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056)], null),dispatch);
} else {
throw cljs.core.match.backtrack;

}
}catch (e23251){if((e23251 instanceof Error)){
var e__20496__auto____$2 = e23251;
if((e__20496__auto____$2 === cljs.core.match.backtrack)){
try{var signal_0__23244 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__23244,new cljs.core.Keyword(null,"on-remove","on-remove",-268656163))){
var id = cljs.core.nth.call(null,signal,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),id], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23252){if((e23252 instanceof Error)){
var e__20496__auto____$3 = e23252;
if((e__20496__auto____$3 === cljs.core.match.backtrack)){
try{var signal_0__23244 = cljs.core.nth.call(null,signal,(0));
if((cljs.core.vector_QMARK_.call(null,signal_0__23244)) && ((cljs.core.count.call(null,signal_0__23244) === 2))){
try{var signal_0__23244_0__23246 = cljs.core.nth.call(null,signal_0__23244,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__23244_0__23246,new cljs.core.Keyword(null,"on-item-signal","on-item-signal",-1097213984))){
var id = cljs.core.nth.call(null,signal_0__23244,(1));
var s = cljs.core.nth.call(null,signal,(1));
return frontend.generic_list._update_item.call(null,model,id,new cljs.core.Keyword(null,"control","control",1892578036).cljs$core$IFn$_invoke$arity$1(item_spec),s,frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-action","item-action",-810685042),id], null)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23254){if((e23254 instanceof Error)){
var e__20496__auto____$4 = e23254;
if((e__20496__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20496__auto____$4;
}
} else {
throw e23254;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23253){if((e23253 instanceof Error)){
var e__20496__auto____$4 = e23253;
if((e__20496__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20496__auto____$4;
}
} else {
throw e23253;

}
}} else {
throw e__20496__auto____$3;
}
} else {
throw e23252;

}
}} else {
throw e__20496__auto____$2;
}
} else {
throw e23251;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23250){if((e23250 instanceof Error)){
var e__20496__auto____$2 = e23250;
if((e__20496__auto____$2 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__20496__auto____$2;
}
} else {
throw e23250;

}
}} else {
throw e__20496__auto____$1;
}
} else {
throw e23249;

}
}} else {
throw e__20496__auto__;
}
} else {
throw e23248;

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
}catch (e23291){if((e23291 instanceof Error)){
var e__20496__auto__ = e23291;
if((e__20496__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__23287 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__23287,new cljs.core.Keyword(null,"remove","remove",-131428414))){
var id = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"items","items",1031954938),((function (id,action_0__23287,e__20496__auto__){
return (function (p1__23255_SHARP_){
return cljs.core.filter.call(null,((function (id,action_0__23287,e__20496__auto__){
return (function (item){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),id);
});})(id,action_0__23287,e__20496__auto__))
,p1__23255_SHARP_);
});})(id,action_0__23287,e__20496__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e23293){if((e23293 instanceof Error)){
var e__20496__auto____$1 = e23293;
if((e__20496__auto____$1 === cljs.core.match.backtrack)){
try{var action_0__23287 = cljs.core.nth.call(null,action,(0));
if((cljs.core.vector_QMARK_.call(null,action_0__23287)) && ((cljs.core.count.call(null,action_0__23287) === 2))){
try{var action_0__23287_0__23289 = cljs.core.nth.call(null,action_0__23287,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__23287_0__23289,new cljs.core.Keyword(null,"item-action","item-action",-810685042))){
var id = cljs.core.nth.call(null,action_0__23287,(1));
var a = cljs.core.nth.call(null,action,(1));
return frontend.generic_list._update_item.call(null,model,id,new cljs.core.Keyword(null,"reconcile","reconcile",-728661830).cljs$core$IFn$_invoke$arity$1(item_spec),a);
} else {
throw cljs.core.match.backtrack;

}
}catch (e23295){if((e23295 instanceof Error)){
var e__20496__auto____$2 = e23295;
if((e__20496__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20496__auto____$2;
}
} else {
throw e23295;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23294){if((e23294 instanceof Error)){
var e__20496__auto____$2 = e23294;
if((e__20496__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20496__auto____$2;
}
} else {
throw e23294;

}
}} else {
throw e__20496__auto____$1;
}
} else {
throw e23293;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23292){if((e23292 instanceof Error)){
var e__20496__auto____$1 = e23292;
if((e__20496__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__20496__auto____$1;
}
} else {
throw e23292;

}
}} else {
throw e__20496__auto__;
}
} else {
throw e23291;

}
}});
});
frontend.generic_list.new_view_model = (function frontend$generic_list$new_view_model(item_spec){
return (function frontend$generic_list$new_view_model_$_view_model(model){
return cljs.core.select_keys.call(null,frontend.generic_list._update_every_item.call(null,model,new cljs.core.Keyword(null,"view-model","view-model",-895405675).cljs$core$IFn$_invoke$arity$1(item_spec)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"next-id","next-id",-224240762)], null));
});
});
frontend.generic_list._item_views = (function frontend$generic_list$_item_views(items,dispatch,item_spec){
return cljs.core.map.call(null,(function (p__23299){
var map__23300 = p__23299;
var map__23300__$1 = ((((!((map__23300 == null)))?((((map__23300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23300):map__23300);
var id = cljs.core.get.call(null,map__23300__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var item = cljs.core.get.call(null,map__23300__$1,new cljs.core.Keyword(null,"item","item",249373802));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(item_spec),item,frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-item-signal","on-item-signal",-1097213984),id], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23300,map__23300__$1,id,item){
return (function (){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-remove","on-remove",-268656163),id], null));
});})(map__23300,map__23300__$1,id,item))
], null),"X"], null)], null);
}),items);
});
frontend.generic_list.new_view = (function frontend$generic_list$new_view(item_spec){
return (function frontend$generic_list$new_view_$__view(view_model,dispatch){
var items = frontend.generic_list._item_views.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(view_model),dispatch,item_spec);
var insert = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (items){
return (function (){
dispatch.call(null,new cljs.core.Keyword(null,"on-insert","on-insert",2113239980));

return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-connect-item","on-connect-item",420213775),new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(view_model)], null));
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
var len__17809__auto___23304 = arguments.length;
var i__17810__auto___23305 = (0);
while(true){
if((i__17810__auto___23305 < len__17809__auto___23304)){
args__17816__auto__.push((arguments[i__17810__auto___23305]));

var G__23306 = (i__17810__auto___23305 + (1));
i__17810__auto___23305 = G__23306;
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

frontend.generic_list.new_spec.cljs$lang$applyTo = (function (seq23302){
var G__23303 = cljs.core.first.call(null,seq23302);
var seq23302__$1 = cljs.core.next.call(null,seq23302);
return frontend.generic_list.new_spec.cljs$core$IFn$_invoke$arity$variadic(G__23303,seq23302__$1);
});

//# sourceMappingURL=generic_list.js.map?rel=1449083085509