// Compiled by ClojureScript 1.7.122 {}
goog.provide('frontend.random_gif_pair');
goog.require('cljs.core');
goog.require('frontend.ui');
goog.require('reagent.core');
goog.require('cljs.core.match');
goog.require('frontend.random_gif');
frontend.random_gif_pair.init = (function frontend$random_gif_pair$init(topic_left,topic_right){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),frontend.random_gif.init.call(null,topic_left),new cljs.core.Keyword(null,"right","right",-452581833),frontend.random_gif.init.call(null,topic_right)], null);
});
frontend.random_gif_pair.control = (function frontend$random_gif_pair$control(model,event,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,event,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
frontend.random_gif.control.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056),frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"left","left",-399115937)));

return frontend.random_gif.control.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056),frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"right","right",-452581833)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27268){if((e27268 instanceof Error)){
var e__19034__auto__ = e27268;
if((e__19034__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,event)) && ((cljs.core.count.call(null,event) === 2))){
try{var event_0__27266 = cljs.core.nth.call(null,event,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,event_0__27266,new cljs.core.Keyword(null,"left","left",-399115937))){
var e = cljs.core.nth.call(null,event,(1));
return frontend.random_gif.control.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(model),e,frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"left","left",-399115937)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27270){if((e27270 instanceof Error)){
var e__19034__auto____$1 = e27270;
if((e__19034__auto____$1 === cljs.core.match.backtrack)){
try{var event_0__27266 = cljs.core.nth.call(null,event,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,event_0__27266,new cljs.core.Keyword(null,"right","right",-452581833))){
var e = cljs.core.nth.call(null,event,(1));
return frontend.random_gif.control.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(model),e,frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"right","right",-452581833)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27271){if((e27271 instanceof Error)){
var e__19034__auto____$2 = e27271;
if((e__19034__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19034__auto____$2;
}
} else {
throw e27271;

}
}} else {
throw e__19034__auto____$1;
}
} else {
throw e27270;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27269){if((e27269 instanceof Error)){
var e__19034__auto____$1 = e27269;
if((e__19034__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(event)].join('')));
} else {
throw e__19034__auto____$1;
}
} else {
throw e27269;

}
}} else {
throw e__19034__auto__;
}
} else {
throw e27268;

}
}});
frontend.random_gif_pair.reconcile = (function frontend$random_gif_pair$reconcile(model,command){
try{if((cljs.core.vector_QMARK_.call(null,command)) && ((cljs.core.count.call(null,command) === 2))){
try{var command_0__27279 = cljs.core.nth.call(null,command,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,command_0__27279,new cljs.core.Keyword(null,"left","left",-399115937))){
var c = cljs.core.nth.call(null,command,(1));
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"left","left",-399115937),frontend.random_gif.reconcile,c);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27282){if((e27282 instanceof Error)){
var e__19034__auto__ = e27282;
if((e__19034__auto__ === cljs.core.match.backtrack)){
try{var command_0__27279 = cljs.core.nth.call(null,command,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,command_0__27279,new cljs.core.Keyword(null,"right","right",-452581833))){
var c = cljs.core.nth.call(null,command,(1));
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"right","right",-452581833),frontend.random_gif.reconcile,c);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27283){if((e27283 instanceof Error)){
var e__19034__auto____$1 = e27283;
if((e__19034__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19034__auto____$1;
}
} else {
throw e27283;

}
}} else {
throw e__19034__auto__;
}
} else {
throw e27282;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27281){if((e27281 instanceof Error)){
var e__19034__auto__ = e27281;
if((e__19034__auto__ === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(command)].join('')));
} else {
throw e__19034__auto__;
}
} else {
throw e27281;

}
}});
frontend.random_gif_pair.view_model = (function frontend$random_gif_pair$view_model(model){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),frontend.random_gif.view_model.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(model)),new cljs.core.Keyword(null,"right","right",-452581833),frontend.random_gif.view_model.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(model))], null);
});
frontend.random_gif_pair.view = (function frontend$random_gif_pair$view(view_model,dispatch){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.random_gif.view,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(view_model),frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"left","left",-399115937))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.random_gif.view,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(view_model),frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"right","right",-452581833))], null)], null);
});
if(typeof frontend.random_gif_pair.model !== 'undefined'){
} else {
frontend.random_gif_pair.model = reagent.core.atom.call(null,frontend.random_gif_pair.init.call(null,"funny cats","funny dogs"));
}
frontend.random_gif_pair.example_view = (function frontend$random_gif_pair$example_view(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.ui.connect,frontend.random_gif_pair.model,frontend.random_gif_pair.view_model,frontend.random_gif_pair.view,frontend.ui.wrap_log_events.call(null,frontend.random_gif_pair.control),frontend.ui.wrap_log_commands.call(null,frontend.random_gif_pair.reconcile)], null);
});

//# sourceMappingURL=random_gif_pair.js.map?rel=1447113458015