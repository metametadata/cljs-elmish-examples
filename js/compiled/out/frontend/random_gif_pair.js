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
frontend.random_gif.new_control.call(null,gif_fetcher).call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056),frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"left","left",-399115937)));

return frontend.random_gif.new_control.call(null,gif_fetcher).call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056),frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"right","right",-452581833)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23602){if((e23602 instanceof Error)){
var e__20496__auto__ = e23602;
if((e__20496__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,signal)) && ((cljs.core.count.call(null,signal) === 2))){
try{var signal_0__23600 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__23600,new cljs.core.Keyword(null,"left","left",-399115937))){
var s = cljs.core.nth.call(null,signal,(1));
return frontend.random_gif.new_control.call(null,gif_fetcher).call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(model),s,frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"left","left",-399115937)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23604){if((e23604 instanceof Error)){
var e__20496__auto____$1 = e23604;
if((e__20496__auto____$1 === cljs.core.match.backtrack)){
try{var signal_0__23600 = cljs.core.nth.call(null,signal,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,signal_0__23600,new cljs.core.Keyword(null,"right","right",-452581833))){
var s = cljs.core.nth.call(null,signal,(1));
return frontend.random_gif.new_control.call(null,gif_fetcher).call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(model),s,frontend.ui.tagged.call(null,dispatch,new cljs.core.Keyword(null,"right","right",-452581833)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e23605){if((e23605 instanceof Error)){
var e__20496__auto____$2 = e23605;
if((e__20496__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20496__auto____$2;
}
} else {
throw e23605;

}
}} else {
throw e__20496__auto____$1;
}
} else {
throw e23604;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23603){if((e23603 instanceof Error)){
var e__20496__auto____$1 = e23603;
if((e__20496__auto____$1 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(signal)].join('')));
} else {
throw e__20496__auto____$1;
}
} else {
throw e23603;

}
}} else {
throw e__20496__auto__;
}
} else {
throw e23602;

}
}});
});
frontend.random_gif_pair.reconcile = (function frontend$random_gif_pair$reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__23613 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__23613,new cljs.core.Keyword(null,"left","left",-399115937))){
var a = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"left","left",-399115937),frontend.random_gif.reconcile,a);
} else {
throw cljs.core.match.backtrack;

}
}catch (e23616){if((e23616 instanceof Error)){
var e__20496__auto__ = e23616;
if((e__20496__auto__ === cljs.core.match.backtrack)){
try{var action_0__23613 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__23613,new cljs.core.Keyword(null,"right","right",-452581833))){
var a = cljs.core.nth.call(null,action,(1));
return cljs.core.update.call(null,model,new cljs.core.Keyword(null,"right","right",-452581833),frontend.random_gif.reconcile,a);
} else {
throw cljs.core.match.backtrack;

}
}catch (e23617){if((e23617 instanceof Error)){
var e__20496__auto____$1 = e23617;
if((e__20496__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20496__auto____$1;
}
} else {
throw e23617;

}
}} else {
throw e__20496__auto__;
}
} else {
throw e23616;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e23615){if((e23615 instanceof Error)){
var e__20496__auto__ = e23615;
if((e__20496__auto__ === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__20496__auto__;
}
} else {
throw e23615;

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

//# sourceMappingURL=random_gif_pair.js.map?rel=1449083085888