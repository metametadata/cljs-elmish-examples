// Compiled by ClojureScript 1.7.122 {}
goog.provide('frontend.random_gif');
goog.require('cljs.core');
goog.require('frontend.ui');
goog.require('frontend.giphy_api');
goog.require('reagent.core');
goog.require('cljs.core.match');
/**
 * Creates a gif with specified topic and waiting indicator.
 */
frontend.random_gif.init = (function frontend$random_gif$init(topic){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"gif-url","gif-url",122753031),"https://media.giphy.com/media/bIvp5gwLq9MEo/giphy.gif"], null);
});
/**
 * Example of injecting external dependency.
 */
frontend.random_gif.new_control = (function frontend$random_gif$new_control(gif_fetcher){
return (function frontend$random_gif$new_control_$_control(model,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return gif_fetcher.call(null,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(model),(function (p1__27240_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-gif","set-new-gif",671710456),p1__27240_SHARP_], null));
}));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27251){if((e27251 instanceof Error)){
var e__19072__auto__ = e27251;
if((e__19072__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-request-more","on-request-more",442625788))){
return gif_fetcher.call(null,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(model),((function (e__19072__auto__){
return (function (p1__27240_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-gif","set-new-gif",671710456),p1__27240_SHARP_], null));
});})(e__19072__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27252){if((e27252 instanceof Error)){
var e__19072__auto____$1 = e27252;
if((e__19072__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__19072__auto____$1;
}
} else {
throw e27252;

}
}} else {
throw e__19072__auto__;
}
} else {
throw e27251;

}
}});
});
frontend.random_gif.reconcile = (function frontend$random_gif$reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__27259 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__27259,new cljs.core.Keyword(null,"set-new-gif","set-new-gif",671710456))){
var url = cljs.core.nth.call(null,action,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"gif-url","gif-url",122753031),url);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27262){if((e27262 instanceof Error)){
var e__19072__auto__ = e27262;
if((e__19072__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19072__auto__;
}
} else {
throw e27262;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27261){if((e27261 instanceof Error)){
var e__19072__auto__ = e27261;
if((e__19072__auto__ === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__19072__auto__;
}
} else {
throw e27261;

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
if(typeof frontend.random_gif.model !== 'undefined'){
} else {
frontend.random_gif.model = reagent.core.atom.call(null,frontend.random_gif.init.call(null,"funny cats"));
}
frontend.random_gif.example = (function frontend$random_gif$example(){
return frontend.ui.connect.call(null,frontend.random_gif.model,frontend.random_gif.view_model,frontend.random_gif.view,frontend.ui.wrap_log_signals.call(null,frontend.random_gif.new_control.call(null,frontend.giphy_api.get_random_gif)),frontend.ui.wrap_log_actions.call(null,frontend.random_gif.reconcile));
});
/**
 * Wrapper to get rid of unnecessary calls to ui/connect on Figwheel reloads.
 *   In particalur, :on-connect will not be triggered on each reload.
 */
frontend.random_gif.example_view = (function frontend$random_gif$example_view(){
return new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(frontend.random_gif.example.call(null));
});

//# sourceMappingURL=random_gif.js.map?rel=1448902872546