// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.ui');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.pprint');
/**
 * Given a component spec map returns a connected component which can be rendered using Reagent.
 * 
 *   :control can be a non-pure function, :init, :view-model, :view and :reconcile must be pure functions.
 * 
 *   init-args will be passed to :init function.
 * 
 *   Dispatches :on-connect signal and returns a map with:
 *    :view (Reagent view function),
 *    :dispatch-signal (it can be used to dispatch signals not only from the view),
 *    :model ratom (this is exposed mainly for debugging),
 *    :dispatch-action (this is exposed mainly for debugging).
 * 
 *   Data flow:
 *   (init)
 *   |
 *   V
 *   model -> (view-model) -> (view) -signal-> (control) -action-> (reconcile) -> model -> etc.
 */
frontend.ui.connect_reagent = (function frontend$ui$connect_reagent(p__23176,init_args){
var map__23179 = p__23176;
var map__23179__$1 = ((((!((map__23179 == null)))?((((map__23179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23179):map__23179);
var _spec_ = map__23179__$1;
var init = cljs.core.get.call(null,map__23179__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var view_model = cljs.core.get.call(null,map__23179__$1,new cljs.core.Keyword(null,"view-model","view-model",-895405675));
var view = cljs.core.get.call(null,map__23179__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var control = cljs.core.get.call(null,map__23179__$1,new cljs.core.Keyword(null,"control","control",1892578036));
var reconcile = cljs.core.get.call(null,map__23179__$1,new cljs.core.Keyword(null,"reconcile","reconcile",-728661830));
var model = cljs.core.apply.call(null,init,init_args);
var model_ratom = reagent.core.atom.call(null,model);
var dispatch_action = ((function (model,model_ratom,map__23179,map__23179__$1,_spec_,init,view_model,view,control,reconcile){
return (function frontend$ui$connect_reagent_$_dispatch_action(action){
cljs.core.swap_BANG_.call(null,model_ratom,reconcile,action);

return null;
});})(model,model_ratom,map__23179,map__23179__$1,_spec_,init,view_model,view,control,reconcile))
;
var dispatch_signal = ((function (model,model_ratom,map__23179,map__23179__$1,_spec_,init,view_model,view,control,reconcile){
return (function frontend$ui$connect_reagent_$_dispatch_signal(signal){
control.call(null,cljs.core.deref.call(null,model_ratom),signal,dispatch_action);

return null;
});})(model,model_ratom,map__23179,map__23179__$1,_spec_,init,view_model,view,control,reconcile))
;
var reagent_view = ((function (model,model_ratom,map__23179,map__23179__$1,_spec_,init,view_model,view,control,reconcile){
return (function frontend$ui$connect_reagent_$_reagent_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,view_model.call(null,cljs.core.deref.call(null,model_ratom)),dispatch_signal], null);
});})(model,model_ratom,map__23179,map__23179__$1,_spec_,init,view_model,view,control,reconcile))
;
dispatch_signal.call(null,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"view","view",1247994814),reagent_view,new cljs.core.Keyword(null,"dispatch-signal","dispatch-signal",205544591),dispatch_signal,new cljs.core.Keyword(null,"model","model",331153215),model_ratom,new cljs.core.Keyword(null,"dispatch-action","dispatch-action",-1863756601),dispatch_action], null);
});
/**
 * Function decorator which prepends a tag to the single argument.
 *   I.e. it transforms an arg x to [tag x].
 */
frontend.ui.tagged = (function frontend$ui$tagged(f,tag){
return (function frontend$ui$tagged_$_tagged_fn(x){
return f.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,x], null));
});
});
frontend.ui.wrap_log = (function frontend$ui$wrap_log(spec){
return cljs.core.update.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword(null,"control","control",1892578036),(function (p1__23181_SHARP_){
return (function frontend$ui$wrap_log_$_control(model,signal,dispatch){
cljs.core.println.call(null,"signal =",signal);

return p1__23181_SHARP_.call(null,model,signal,dispatch);
});
})),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),(function (p1__23182_SHARP_){
return (function frontend$ui$wrap_log_$_reconcile(model,action){
cljs.core.println.call(null,"  action =",action);

var result = p1__23182_SHARP_.call(null,model,action);
cljs.core.println.call(null,"   ",result);

return result;
});
}));
});

//# sourceMappingURL=ui.js.map?rel=1449083085364