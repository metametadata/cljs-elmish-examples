// Compiled by ClojureScript 1.7.122 {}
goog.provide('frontend.ui');
goog.require('cljs.core');
goog.require('reagent.core');
/**
 * Model must be a ratom.
 *   Returns a map with :view, :dispatch-signal, :dispatch-action (dispatch functions are exposed mainly for debugging).
 * 
 *   Automatically fires :on-connect signal.
 * 
 *   Data flow:
 *   model -> (view-model) -> (view) -signal-> (control) -action-> (reconcile) -> model
 */
frontend.ui.connect = (function frontend$ui$connect(model,view_model,view,control,reconcile){
var dispatch_action = (function (a){
cljs.core.swap_BANG_.call(null,model,reconcile,a);

return null;
});
var dispatch_signal = ((function (dispatch_action){
return (function (s){
control.call(null,cljs.core.deref.call(null,model),s,dispatch_action);

return null;
});})(dispatch_action))
;
var connected_view = ((function (dispatch_action,dispatch_signal){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,view_model.call(null,cljs.core.deref.call(null,model)),dispatch_signal], null);
});})(dispatch_action,dispatch_signal))
;
dispatch_signal.call(null,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1247994814),connected_view,new cljs.core.Keyword(null,"dispatch-action","dispatch-action",-1863756601),dispatch_action,new cljs.core.Keyword(null,"dispatch-signal","dispatch-signal",205544591),dispatch_signal], null);
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
frontend.ui.wrap_log_signals = (function frontend$ui$wrap_log_signals(control){
return (function frontend$ui$wrap_log_signals_$_wrapped_control(model,signal,dispatch){
cljs.core.println.call(null,"signal =",signal);

return control.call(null,model,signal,dispatch);
});
});
frontend.ui.wrap_log_actions = (function frontend$ui$wrap_log_actions(reconcile){
return (function frontend$ui$wrap_log_actions_$_wrapped_reconcile(model,action){
cljs.core.println.call(null,"  action =",action);

var result = reconcile.call(null,model,action);
cljs.core.println.call(null,"   ",model,"->\n   ",result);

return result;
});
});

//# sourceMappingURL=ui.js.map?rel=1448902872243