// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.random_gif_pair');
goog.require('cljs.core');
goog.require('frontend.ui');
goog.require('frontend.random_gif');
goog.require('cljs.core.match');
frontend.random_gif_pair.init = (function frontend$random_gif_pair$init(topic_left,topic_right){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),frontend.random_gif.init.call(null,topic_left),new cljs.core.Keyword(null,"right","right",-452581833),frontend.random_gif.init.call(null,topic_right)], null);
});
frontend.random_gif_pair.new_control = (function frontend$random_gif_pair$new_control(gif_fetcher){
return (function frontend$random_gif_pair$new_control_$_control(model,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
frontend.random_gif.new_control.call(null,gif_fetcher).call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056),(function (p1__29288_SHARP_){
return new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),p1__29288_SHARP_], null)));
}));

return frontend.random_gif.new_control.call(null,gif_fetcher).call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056),(function (p1__29289_SHARP_){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),p1__29289_SHARP_], null)));
}));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29316){if((e29316 instanceof Error)){
var e__19654__auto__ = e29316;
if((e__19654__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__29314 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29314,new cljs.core.Keyword(null,"left","left",-399115937))){
var s = cljs.core.nth.call(null,signal,(1));
return frontend.random_gif.new_control.call(null,gif_fetcher).call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(model),s,((function (s,signal_0__29314,e__19654__auto__){
return (function (p1__29290_SHARP_){
return new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),p1__29290_SHARP_], null)));
});})(s,signal_0__29314,e__19654__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29318){if((e29318 instanceof Error)){
var e__19654__auto____$1 = e29318;
if((e__19654__auto____$1 === cljs.core.match.backtrack)){
try{var signal_0__29314 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__29314,new cljs.core.Keyword(null,"right","right",-452581833))){
var s = cljs.core.nth.call(null,signal,(1));
return frontend.random_gif.new_control.call(null,gif_fetcher).call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(model),s,((function (s,signal_0__29314,e__19654__auto____$1,e__19654__auto__){
return (function (p1__29291_SHARP_){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),p1__29291_SHARP_], null)));
});})(s,signal_0__29314,e__19654__auto____$1,e__19654__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29319){if((e29319 instanceof Error)){
var e__19654__auto____$2 = e29319;
if((e__19654__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19654__auto____$2;
}
} else {
throw e29319;

}
}} else {
throw e__19654__auto____$1;
}
} else {
throw e29318;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29317){if((e29317 instanceof Error)){
var e__19654__auto____$1 = e29317;
if((e__19654__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__19654__auto____$1;
}
} else {
throw e29317;

}
}} else {
throw e__19654__auto__;
}
} else {
throw e29316;

}
}});
});
frontend.random_gif_pair.reconcile = (function frontend$random_gif_pair$reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__29327 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29327,new cljs.core.Keyword(null,"left","left",-399115937))){
var a = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"left","left",-399115937),frontend.random_gif.reconcile,a);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29330){if((e29330 instanceof Error)){
var e__19654__auto__ = e29330;
if((e__19654__auto__ === cljs.core.match.backtrack)){
try{var action_0__29327 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29327,new cljs.core.Keyword(null,"right","right",-452581833))){
var a = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"right","right",-452581833),frontend.random_gif.reconcile,a);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29331){if((e29331 instanceof Error)){
var e__19654__auto____$1 = e29331;
if((e__19654__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19654__auto____$1;
}
} else {
throw e29331;

}
}} else {
throw e__19654__auto__;
}
} else {
throw e29330;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29329){if((e29329 instanceof Error)){
var e__19654__auto__ = e29329;
if((e__19654__auto__ === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__19654__auto__;
}
} else {
throw e29329;

}
}});
frontend.random_gif_pair.view_model = (function frontend$random_gif_pair$view_model(model){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),frontend.random_gif.view_model.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(model)),new cljs.core.Keyword(null,"right","right",-452581833),frontend.random_gif.view_model.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(model))], null);
});
frontend.random_gif_pair.view = (function frontend$random_gif_pair$view(view_model,dispatch){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.random_gif.view,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(view_model),frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"left","left",-399115937))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.random_gif.view,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(view_model),frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"right","right",-452581833))], null)], null);
});
frontend.random_gif_pair.new_spec = (function frontend$random_gif_pair$new_spec(gif_fetcher){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init","init",-1875481434),frontend.random_gif_pair.init,new cljs.core.Keyword(null,"view-model","view-model",-895405675),frontend.random_gif_pair.view_model,new cljs.core.Keyword(null,"view","view",1247994814),frontend.random_gif_pair.view,new cljs.core.Keyword(null,"control","control",1892578036),frontend.random_gif_pair.new_control.call(null,gif_fetcher),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),frontend.random_gif_pair.reconcile], null);
});

//# sourceMappingURL=random_gif_pair.js.map?rel=1450277867695