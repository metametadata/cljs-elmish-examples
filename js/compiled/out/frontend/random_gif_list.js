// Compiled by ClojureScript 1.7.122 {}
goog.provide('frontend.random_gif_list');
goog.require('cljs.core');
goog.require('frontend.ui');
goog.require('reagent.core');
goog.require('cljs.core.match');
goog.require('frontend.random_gif');
goog.require('com.rpl.specter');
frontend.random_gif_list.init = (function frontend$random_gif_list$init(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topic","topic",-1960480691),"",new cljs.core.Keyword(null,"gifs","gifs",300250082),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"next-id","next-id",-224240762),(0)], null);
});
/**
 * Applies a function of args [gif-model & args] to the gif items specified by predicate.
 *   The function can have side-effects. Returns a new model.
 */
frontend.random_gif_list.update_gifs_STAR_ = (function frontend$random_gif_list$update_gifs_STAR_(var_args){
var args__17139__auto__ = [];
var len__17132__auto___27176 = arguments.length;
var i__17133__auto___27177 = (0);
while(true){
if((i__17133__auto___27177 < len__17132__auto___27176)){
args__17139__auto__.push((arguments[i__17133__auto___27177]));

var G__27178 = (i__17133__auto___27177 + (1));
i__17133__auto___27177 = G__27178;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((3) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((3)),(0))):null);
return frontend.random_gif_list.update_gifs_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17140__auto__);
});

frontend.random_gif_list.update_gifs_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (model,pred,f,args){
return com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gifs","gifs",300250082),com.rpl.specter.ALL,pred,new cljs.core.Keyword(null,"item","item",249373802)], null),(function (p1__27171_SHARP_){
return cljs.core.apply.call(null,f,p1__27171_SHARP_,args);
}),model);
});

frontend.random_gif_list.update_gifs_STAR_.cljs$lang$maxFixedArity = (3);

frontend.random_gif_list.update_gifs_STAR_.cljs$lang$applyTo = (function (seq27172){
var G__27173 = cljs.core.first.call(null,seq27172);
var seq27172__$1 = cljs.core.next.call(null,seq27172);
var G__27174 = cljs.core.first.call(null,seq27172__$1);
var seq27172__$2 = cljs.core.next.call(null,seq27172__$1);
var G__27175 = cljs.core.first.call(null,seq27172__$2);
var seq27172__$3 = cljs.core.next.call(null,seq27172__$2);
return frontend.random_gif_list.update_gifs_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__27173,G__27174,G__27175,seq27172__$3);
});
frontend.random_gif_list.update_gif = (function frontend$random_gif_list$update_gif(var_args){
var args__17139__auto__ = [];
var len__17132__auto___27184 = arguments.length;
var i__17133__auto___27185 = (0);
while(true){
if((i__17133__auto___27185 < len__17132__auto___27184)){
args__17139__auto__.push((arguments[i__17133__auto___27185]));

var G__27186 = (i__17133__auto___27185 + (1));
i__17133__auto___27185 = G__27186;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((3) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((3)),(0))):null);
return frontend.random_gif_list.update_gif.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17140__auto__);
});

frontend.random_gif_list.update_gif.cljs$core$IFn$_invoke$arity$variadic = (function (model,id,f,args){
return cljs.core.apply.call(null,frontend.random_gif_list.update_gifs_STAR_,model,(function (p1__27179_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__27179_SHARP_),id);
}),f,args);
});

frontend.random_gif_list.update_gif.cljs$lang$maxFixedArity = (3);

frontend.random_gif_list.update_gif.cljs$lang$applyTo = (function (seq27180){
var G__27181 = cljs.core.first.call(null,seq27180);
var seq27180__$1 = cljs.core.next.call(null,seq27180);
var G__27182 = cljs.core.first.call(null,seq27180__$1);
var seq27180__$2 = cljs.core.next.call(null,seq27180__$1);
var G__27183 = cljs.core.first.call(null,seq27180__$2);
var seq27180__$3 = cljs.core.next.call(null,seq27180__$2);
return frontend.random_gif_list.update_gif.cljs$core$IFn$_invoke$arity$variadic(G__27181,G__27182,G__27183,seq27180__$3);
});
frontend.random_gif_list.update_every_gif = (function frontend$random_gif_list$update_every_gif(var_args){
var args__17139__auto__ = [];
var len__17132__auto___27190 = arguments.length;
var i__17133__auto___27191 = (0);
while(true){
if((i__17133__auto___27191 < len__17132__auto___27190)){
args__17139__auto__.push((arguments[i__17133__auto___27191]));

var G__27192 = (i__17133__auto___27191 + (1));
i__17133__auto___27191 = G__27192;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((2) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((2)),(0))):null);
return frontend.random_gif_list.update_every_gif.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17140__auto__);
});

frontend.random_gif_list.update_every_gif.cljs$core$IFn$_invoke$arity$variadic = (function (model,f,args){
return cljs.core.apply.call(null,frontend.random_gif_list.update_gifs_STAR_,model,cljs.core.constantly.call(null,true),f,args);
});

frontend.random_gif_list.update_every_gif.cljs$lang$maxFixedArity = (2);

frontend.random_gif_list.update_every_gif.cljs$lang$applyTo = (function (seq27187){
var G__27188 = cljs.core.first.call(null,seq27187);
var seq27187__$1 = cljs.core.next.call(null,seq27187);
var G__27189 = cljs.core.first.call(null,seq27187__$1);
var seq27187__$2 = cljs.core.next.call(null,seq27187__$1);
return frontend.random_gif_list.update_every_gif.cljs$core$IFn$_invoke$arity$variadic(G__27188,G__27189,seq27187__$2);
});
frontend.random_gif_list.control = (function frontend$random_gif_list$control(model,event,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,event,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e27215){if((e27215 instanceof Error)){
var e__19034__auto__ = e27215;
if((e__19034__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,event)) && ((cljs.core.count.call(null,event) === 2))){
try{var event_0__27209 = cljs.core.nth.call(null,event,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,event_0__27209,new cljs.core.Keyword(null,"on-input-topic","on-input-topic",874806732))){
var val = cljs.core.nth.call(null,event,(1));
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-topic","set-topic",2087094502),val], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27221){if((e27221 instanceof Error)){
var e__19034__auto____$1 = e27221;
if((e__19034__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19034__auto____$1;
}
} else {
throw e27221;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27216){if((e27216 instanceof Error)){
var e__19034__auto____$1 = e27216;
if((e__19034__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,event,new cljs.core.Keyword(null,"on-insert","on-insert",2113239980))){
dispatch.call(null,new cljs.core.Keyword(null,"insert","insert",1286475395));

return frontend.random_gif.get_random_gif.call(null,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(model),((function (e__19034__auto____$1,e__19034__auto__){
return (function (p1__27193_SHARP_){
return frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modify","modify",-1261040869),new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(model)], null)).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-gif","set-new-gif",671710456),p1__27193_SHARP_], null));
});})(e__19034__auto____$1,e__19034__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27217){if((e27217 instanceof Error)){
var e__19034__auto____$2 = e27217;
if((e__19034__auto____$2 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,event)) && ((cljs.core.count.call(null,event) === 2))){
try{var event_0__27211 = cljs.core.nth.call(null,event,(0));
if((cljs.core.vector_QMARK_.call(null,event_0__27211)) && ((cljs.core.count.call(null,event_0__27211) === 2))){
try{var event_0__27211_0__27213 = cljs.core.nth.call(null,event_0__27211,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,event_0__27211_0__27213,new cljs.core.Keyword(null,"on-sub-event","on-sub-event",902274045))){
var id = cljs.core.nth.call(null,event_0__27211,(1));
var e = cljs.core.nth.call(null,event,(1));
return frontend.random_gif_list.update_gif.call(null,model,id,frontend.random_gif.control,e,frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modify","modify",-1261040869),id], null)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27220){if((e27220 instanceof Error)){
var e__19034__auto____$3 = e27220;
if((e__19034__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19034__auto____$3;
}
} else {
throw e27220;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27219){if((e27219 instanceof Error)){
var e__19034__auto____$3 = e27219;
if((e__19034__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19034__auto____$3;
}
} else {
throw e27219;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27218){if((e27218 instanceof Error)){
var e__19034__auto____$3 = e27218;
if((e__19034__auto____$3 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(event)].join('')));
} else {
throw e__19034__auto____$3;
}
} else {
throw e27218;

}
}} else {
throw e__19034__auto____$2;
}
} else {
throw e27217;

}
}} else {
throw e__19034__auto____$1;
}
} else {
throw e27216;

}
}} else {
throw e__19034__auto__;
}
} else {
throw e27215;

}
}});
frontend.random_gif_list.reconcile = (function frontend$random_gif_list$reconcile(model,command){
try{if((cljs.core.vector_QMARK_.call(null,command)) && ((cljs.core.count.call(null,command) === 2))){
try{var command_0__27236 = cljs.core.nth.call(null,command,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,command_0__27236,new cljs.core.Keyword(null,"set-topic","set-topic",2087094502))){
var val = cljs.core.nth.call(null,command,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"topic","topic",-1960480691),val);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27247){if((e27247 instanceof Error)){
var e__19034__auto__ = e27247;
if((e__19034__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19034__auto__;
}
} else {
throw e27247;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27242){if((e27242 instanceof Error)){
var e__19034__auto__ = e27242;
if((e__19034__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,command,new cljs.core.Keyword(null,"insert","insert",1286475395))){
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.update.call(null,model,new cljs.core.Keyword(null,"gifs","gifs",300250082),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"item","item",249373802),frontend.random_gif.init.call(null,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(model))], null)], null)),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.inc),new cljs.core.Keyword(null,"topic","topic",-1960480691),"");
} else {
throw cljs.core.match.backtrack;

}
}catch (e27243){if((e27243 instanceof Error)){
var e__19034__auto____$1 = e27243;
if((e__19034__auto____$1 === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,command)) && ((cljs.core.count.call(null,command) === 2))){
try{var command_0__27238 = cljs.core.nth.call(null,command,(0));
if((cljs.core.vector_QMARK_.call(null,command_0__27238)) && ((cljs.core.count.call(null,command_0__27238) === 2))){
try{var command_0__27238_0__27240 = cljs.core.nth.call(null,command_0__27238,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,command_0__27238_0__27240,new cljs.core.Keyword(null,"modify","modify",-1261040869))){
var id = cljs.core.nth.call(null,command_0__27238,(1));
var c = cljs.core.nth.call(null,command,(1));
return frontend.random_gif_list.update_gif.call(null,model,id,frontend.random_gif.reconcile,c);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27246){if((e27246 instanceof Error)){
var e__19034__auto____$2 = e27246;
if((e__19034__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19034__auto____$2;
}
} else {
throw e27246;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27245){if((e27245 instanceof Error)){
var e__19034__auto____$2 = e27245;
if((e__19034__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19034__auto____$2;
}
} else {
throw e27245;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27244){if((e27244 instanceof Error)){
var e__19034__auto____$2 = e27244;
if((e__19034__auto____$2 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(command)].join('')));
} else {
throw e__19034__auto____$2;
}
} else {
throw e27244;

}
}} else {
throw e__19034__auto____$1;
}
} else {
throw e27243;

}
}} else {
throw e__19034__auto__;
}
} else {
throw e27242;

}
}});
frontend.random_gif_list.view_model = (function frontend$random_gif_list$view_model(model){
return cljs.core.select_keys.call(null,frontend.random_gif_list.update_every_gif.call(null,model,frontend.random_gif.view_model),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"gifs","gifs",300250082)], null));
});
frontend.random_gif_list.element_view = (function frontend$random_gif_list$element_view(p__27248,dispatch){
var map__27251 = p__27248;
var map__27251__$1 = ((((!((map__27251 == null)))?((((map__27251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27251):map__27251);
var id = cljs.core.get.call(null,map__27251__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var item = cljs.core.get.call(null,map__27251__$1,new cljs.core.Keyword(null,"item","item",249373802));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.random_gif.view,item,frontend.ui.tagged.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-sub-event","on-sub-event",902274045),id], null))], null);
});
frontend.random_gif_list.is_enter_key_QMARK_ = (function frontend$random_gif_list$is_enter_key_QMARK_(e){
return cljs.core._EQ_.call(null,e.keyCode,(13));
});
frontend.random_gif_list.view = (function frontend$random_gif_list$view(view_model,dispatch){
var gifs = cljs.core.map.call(null,(function (p1__27253_SHARP_){
return frontend.random_gif_list.element_view.call(null,p1__27253_SHARP_,dispatch);
}),new cljs.core.Keyword(null,"gifs","gifs",300250082).cljs$core$IFn$_invoke$arity$1(view_model));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"20em",new cljs.core.Keyword(null,"height","height",1025178622),"2em"], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What kind of gifs do you want?",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(view_model),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (gifs){
return (function (p1__27254_SHARP_){
if(cljs.core.truth_(frontend.random_gif_list.is_enter_key_QMARK_.call(null,p1__27254_SHARP_))){
return dispatch.call(null,new cljs.core.Keyword(null,"on-insert","on-insert",2113239980));
} else {
return null;
}
});})(gifs))
,new cljs.core.Keyword(null,"on-input","on-input",-267523366),((function (gifs){
return (function (p1__27255_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-input-topic","on-input-topic",874806732),p1__27255_SHARP_.target.value], null));
});})(gifs))
], null)], null),cljs.core.remove,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"wrap"], null)], null)], null),gifs)], null);
});
if(typeof frontend.random_gif_list.model !== 'undefined'){
} else {
frontend.random_gif_list.model = reagent.core.atom.call(null,frontend.random_gif_list.init.call(null));
}
frontend.random_gif_list.example_view = (function frontend$random_gif_list$example_view(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.ui.connect,frontend.random_gif_list.model,frontend.random_gif_list.view_model,frontend.random_gif_list.view,frontend.ui.wrap_log_events.call(null,frontend.random_gif_list.control),frontend.ui.wrap_log_commands.call(null,frontend.random_gif_list.reconcile)], null);
});

//# sourceMappingURL=random_gif_list.js.map?rel=1447113457938