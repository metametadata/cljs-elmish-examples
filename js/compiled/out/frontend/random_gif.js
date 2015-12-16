// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.random_gif');
goog.require('cljs.core');
goog.require('cljs.core.match');
/**
 * Creates a gif with specified topic and waiting indicator.
 */
frontend.random_gif.init = (function frontend$random_gif$init(topic){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"gif-url","gif-url",122753031),"https://media.giphy.com/media/bIvp5gwLq9MEo/giphy.gif"], null);
});
/**
 * Example of using external dependency
 */
frontend.random_gif.new_control = (function frontend$random_gif$new_control(gif_fetcher){
return (function frontend$random_gif$new_control_$_control(model,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return gif_fetcher.call(null,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(model),(function (p1__29147_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-gif","set-new-gif",671710456),p1__29147_SHARP_], null));
}));
} else {
throw cljs.core.match.backtrack;

}
}catch (e29158){if((e29158 instanceof Error)){
var e__19654__auto__ = e29158;
if((e__19654__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-request-more","on-request-more",442625788))){
return gif_fetcher.call(null,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(model),((function (e__19654__auto__){
return (function (p1__29147_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-gif","set-new-gif",671710456),p1__29147_SHARP_], null));
});})(e__19654__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29159){if((e29159 instanceof Error)){
var e__19654__auto____$1 = e29159;
if((e__19654__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__19654__auto____$1;
}
} else {
throw e29159;

}
}} else {
throw e__19654__auto__;
}
} else {
throw e29158;

}
}});
});
frontend.random_gif.reconcile = (function frontend$random_gif$reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__29166 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__29166,new cljs.core.Keyword(null,"set-new-gif","set-new-gif",671710456))){
var url = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"gif-url","gif-url",122753031),url);
} else {
throw cljs.core.match.backtrack;

}
}catch (e29169){if((e29169 instanceof Error)){
var e__19654__auto__ = e29169;
if((e__19654__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19654__auto__;
}
} else {
throw e29169;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e29168){if((e29168 instanceof Error)){
var e__19654__auto__ = e29168;
if((e__19654__auto__ === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__19654__auto__;
}
} else {
throw e29168;

}
}});
frontend.random_gif.view_model = (function frontend$random_gif$view_model(model){
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"topic","topic",-1960480691),cljs.core.str,"!");
});
frontend.random_gif.view = (function frontend$random_gif$view(view_model,dispatch){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(view_model)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dispatch.call(null,new cljs.core.Keyword(null,"on-request-more","on-request-more",442625788));
})], null),"More Please!"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(150)], null),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"gif-url","gif-url",122753031).cljs$core$IFn$_invoke$arity$1(view_model)], null)], null)], null);
});
frontend.random_gif.new_spec = (function frontend$random_gif$new_spec(gif_fether){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init","init",-1875481434),frontend.random_gif.init,new cljs.core.Keyword(null,"view-model","view-model",-895405675),frontend.random_gif.view_model,new cljs.core.Keyword(null,"view","view",1247994814),frontend.random_gif.view,new cljs.core.Keyword(null,"control","control",1892578036),frontend.random_gif.new_control.call(null,gif_fether),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),frontend.random_gif.reconcile], null);
});

//# sourceMappingURL=random_gif.js.map?rel=1450277867498