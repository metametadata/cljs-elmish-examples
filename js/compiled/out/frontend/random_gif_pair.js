// Compiled by ClojureScript 1.7.122 {}
goog.provide('frontend.random_gif_pair');
goog.require('cljs.core');
goog.require('frontend.ui');
goog.require('frontend.giphy_api');
goog.require('reagent.core');
goog.require('cljs.core.match');
goog.require('frontend.random_gif');
frontend.random_gif_pair.init = (function frontend$random_gif_pair$init(topic_left,topic_right){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),frontend.random_gif.init.call(null,topic_left),new cljs.core.Keyword(null,"right","right",-452581833),frontend.random_gif.init.call(null,topic_right)], null);
});
frontend.random_gif_pair.new_control = (function frontend$random_gif_pair$new_control(gif_fetcher){
return (function frontend$random_gif_pair$new_control_$_control(model,signal,dispatch){
try{if(cljs.core.keyword_identical_QMARK_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056))){
frontend.random_gif.new_control.call(null,gif_fetcher).call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056),frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"left","left",-399115937)));

return frontend.random_gif.new_control.call(null,gif_fetcher).call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056),frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"right","right",-452581833)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27404){if((e27404 instanceof Error)){
var e__19072__auto__ = e27404;
if((e__19072__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__27402 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__27402,new cljs.core.Keyword(null,"left","left",-399115937))){
var e = cljs.core.nth.call(null,signal,(1));
return frontend.random_gif.new_control.call(null,gif_fetcher).call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(model),e,frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"left","left",-399115937)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27406){if((e27406 instanceof Error)){
var e__19072__auto____$1 = e27406;
if((e__19072__auto____$1 === cljs.core.match.backtrack)){
try{var signal_0__27402 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__27402,new cljs.core.Keyword(null,"right","right",-452581833))){
var e = cljs.core.nth.call(null,signal,(1));
return frontend.random_gif.new_control.call(null,gif_fetcher).call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(model),e,frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"right","right",-452581833)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e27407){if((e27407 instanceof Error)){
var e__19072__auto____$2 = e27407;
if((e__19072__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19072__auto____$2;
}
} else {
throw e27407;

}
}} else {
throw e__19072__auto____$1;
}
} else {
throw e27406;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27405){if((e27405 instanceof Error)){
var e__19072__auto____$1 = e27405;
if((e__19072__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__19072__auto____$1;
}
} else {
throw e27405;

}
}} else {
throw e__19072__auto__;
}
} else {
throw e27404;

}
}});
});
frontend.random_gif_pair.reconcile = (function frontend$random_gif_pair$reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__27415 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__27415,new cljs.core.Keyword(null,"left","left",-399115937))){
var c = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"left","left",-399115937),frontend.random_gif.reconcile,c);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27418){if((e27418 instanceof Error)){
var e__19072__auto__ = e27418;
if((e__19072__auto__ === cljs.core.match.backtrack)){
try{var action_0__27415 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__27415,new cljs.core.Keyword(null,"right","right",-452581833))){
var c = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"right","right",-452581833),frontend.random_gif.reconcile,c);
} else {
throw cljs.core.match.backtrack;

}
}catch (e27419){if((e27419 instanceof Error)){
var e__19072__auto____$1 = e27419;
if((e__19072__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__19072__auto____$1;
}
} else {
throw e27419;

}
}} else {
throw e__19072__auto__;
}
} else {
throw e27418;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e27417){if((e27417 instanceof Error)){
var e__19072__auto__ = e27417;
if((e__19072__auto__ === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__19072__auto__;
}
} else {
throw e27417;

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
frontend.random_gif_pair.example = (function frontend$random_gif_pair$example(){
return frontend.ui.connect.call(null,frontend.random_gif_pair.model,frontend.random_gif_pair.view_model,frontend.random_gif_pair.view,frontend.ui.wrap_log_signals.call(null,frontend.random_gif_pair.new_control.call(null,frontend.giphy_api.get_random_gif)),frontend.ui.wrap_log_actions.call(null,frontend.random_gif_pair.reconcile));
});
/**
 * Wrapper to get rid of unnecessary calls to ui/connect on Figwheel reloads.
 *   In particalur, :on-connect will not be triggered on each reload.
 */
frontend.random_gif_pair.example_view = (function frontend$random_gif_pair$example_view(){
return new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(frontend.random_gif_pair.example.call(null));
});

//# sourceMappingURL=random_gif_pair.js.map?rel=1448902872735