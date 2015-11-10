// Compiled by ClojureScript 1.7.122 {}
goog.provide('frontend.ui');
goog.require('cljs.core');
/**
 * Returns a new view. Model must be a ratom.
 * 
 *   Data flow:
 *   model -> view-model -> view -(dispatch event)-> control -(dispatch command)-> reconcile -(update)-> model
 * 
 *   Automatically fires :on-connect event.
 *   
 */
frontend.ui.connect = (function frontend$ui$connect(model,view_model,_view_,control,reconcile){
var dispatch_command = (function (c){
cljs.core.swap_BANG_.call(null,model,reconcile,c);

return null;
});
var dispatch_event = ((function (dispatch_command){
return (function (e){
control.call(null,cljs.core.deref.call(null,model),e,dispatch_command);

return null;
});})(dispatch_command))
;
dispatch_event.call(null,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056));

return ((function (dispatch_command,dispatch_event){
return (function frontend$ui$connect_$_connected_view(_model_,_view_model_,view,_control_,_reconcile_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,view_model.call(null,cljs.core.deref.call(null,model)),dispatch_event], null);
});
;})(dispatch_command,dispatch_event))
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
frontend.ui.wrap_log_events = (function frontend$ui$wrap_log_events(control){
return (function frontend$ui$wrap_log_events_$_wrapped_control(model,event,command){
cljs.core.println.call(null,"event =",event);

return control.call(null,model,event,command);
});
});
frontend.ui.wrap_log_commands = (function frontend$ui$wrap_log_commands(reconcile){
return (function frontend$ui$wrap_log_commands_$_wrapped_reconcile(model,command){
cljs.core.println.call(null,"  command =",command);

var result = reconcile.call(null,model,command);
cljs.core.println.call(null,"   ",model,"->\n   ",result);

return result;
});
});

//# sourceMappingURL=ui.js.map?rel=1447113457391