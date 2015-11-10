// Compiled by ClojureScript 1.7.122 {}
goog.provide('frontend.random_gif');
goog.require('cljs.core');
goog.require('frontend.ui');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('cljs.core.match');
/**
 * Creates a gif with specified topic and waiting indicator.
 */
frontend.random_gif.init = (function frontend$random_gif$init(topic){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"gif-url","gif-url",122753031),"https://media.giphy.com/media/bIvp5gwLq9MEo/giphy.gif"], null);
});
/**
 * Async. Will eventually call (handler url) on success.
 */
frontend.random_gif.get_random_gif = (function frontend$random_gif$get_random_gif(topic,handler){
return ajax.core.GET.call(null,"http://api.giphy.com/v1/gifs/random",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, ["api_key","dc6zaTOxFJmzC","tag",topic], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__27151_SHARP_){
return handler.call(null,cljs.core.get_in.call(null,p1__27151_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data","image_url"], null)));
})], null));
});
frontend.random_gif.control = (function frontend$random_gif$control(model,event,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,event,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
return frontend.random_gif.get_random_gif.call(null,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(model),(function (p1__27152_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-gif","set-new-gif",671710456),p1__27152_SHARP_], null));
}));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27157){if((e27157 instanceof Error)){
var e__19034__auto__ = e27157;
if((e__19034__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,event,new cljs.core.Keyword(null,"on-request-more","on-request-more",442625788))){
return frontend.random_gif.get_random_gif.call(null,new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(model),((function (e__19034__auto__){
return (function (p1__27152_SHARP_){
return dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-gif","set-new-gif",671710456),p1__27152_SHARP_], null));
});})(e__19034__auto__))
);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27158){if((e27158 instanceof Error)){
var e__19034__auto____$1 = e27158;
if((e__19034__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(event)].join('')));
} else {
throw e__19034__auto____$1;
}
} else {
throw e27158;

}
}} else {
throw e__19034__auto__;
}
} else {
throw e27157;

}
}});
frontend.random_gif.reconcile = (function frontend$random_gif$reconcile(model,command){
try{if((cljs.core.vector_QMARK_.call(null,command)) && ((cljs.core.count.call(null,command) === 2))){
try{var command_0__27165 = cljs.core.nth.call(null,command,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,command_0__27165,new cljs.core.Keyword(null,"set-new-gif","set-new-gif",671710456))){
var url = cljs.core.nth.call(null,command,(1));
return cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"gif-url","gif-url",122753031),url);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27168){if((e27168 instanceof Error)){
var e__19034__auto__ = e27168;
if((e__19034__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19034__auto__;
}
} else {
throw e27168;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27167){if((e27167 instanceof Error)){
var e__19034__auto__ = e27167;
if((e__19034__auto__ === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(command)].join('')));
} else {
throw e__19034__auto__;
}
} else {
throw e27167;

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
frontend.random_gif.example_view = (function frontend$random_gif$example_view(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.ui.connect,frontend.random_gif.model,frontend.random_gif.view_model,frontend.random_gif.view,frontend.ui.wrap_log_events.call(null,frontend.random_gif.control),frontend.ui.wrap_log_commands.call(null,frontend.random_gif.reconcile)], null);
});

//# sourceMappingURL=random_gif.js.map?rel=1447113457783