// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.persistence_middleware');
goog.require('cljs.core');
goog.require('cljs.core.match');
frontend.persistence_middleware._wrap_control = (function frontend$persistence_middleware$_wrap_control(control,storage,key,load_blacklist){
return (function frontend$persistence_middleware$_wrap_control_$_wrapped_control(model,signal,dispatch){
if(!(cljs.core._EQ_.call(null,signal,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056)))){
return control.call(null,model,signal,dispatch);
} else {
var storage_model = cljs.core.get.call(null,storage,key,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
if(cljs.core._EQ_.call(null,storage_model,new cljs.core.Keyword(null,"not-found","not-found",-629079980))){
return control.call(null,model,signal,dispatch);
} else {
var new_model = cljs.core.merge.call(null,storage_model,cljs.core.select_keys.call(null,model,load_blacklist));
dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.persistence-middleware","reset-from-storage","frontend.persistence-middleware/reset-from-storage",-1233138177),new_model], null));

return control.call(null,new_model,signal,dispatch);
}
}
});
});
frontend.persistence_middleware._wrap_reconcile = (function frontend$persistence_middleware$_wrap_reconcile(reconcile,storage,key,save_blacklist){
return (function frontend$persistence_middleware$_wrap_reconcile_$_wrapped_reconcile(model,action){
try{if((cljs.core.vector_QMARK_.call(null,action)) && ((cljs.core.count.call(null,action) === 2))){
try{var action_0__21310 = cljs.core.nth.call(null,action,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,action_0__21310,new cljs.core.Keyword("frontend.persistence-middleware","reset-from-storage","frontend.persistence-middleware/reset-from-storage",-1233138177))){
var data = cljs.core.nth.call(null,action,(1));
return data;
} else {
throw cljs.core.match.backtrack;

}
}catch (e21313){if((e21313 instanceof Error)){
var e__20496__auto__ = e21313;
if((e__20496__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__20496__auto__;
}
} else {
throw e21313;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e21312){if((e21312 instanceof Error)){
var e__20496__auto__ = e21312;
if((e__20496__auto__ === cljs.core.match.backtrack)){
var result = reconcile.call(null,model,action);
var whitelist = clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,result)),save_blacklist);
cljs.core.assoc_BANG_.call(null,storage,key,cljs.core.select_keys.call(null,result,whitelist));

return result;
} else {
throw e__20496__auto__;
}
} else {
throw e21312;

}
}});
});
/**
 * On :on-connect signal middleware will load the model from storage and send the signal further with updated model to the component.
 *   Blacklist should contain model keys which will not be saved and loaded.
 */
frontend.persistence_middleware.wrap = (function frontend$persistence_middleware$wrap(spec,storage,key,blacklist){
return cljs.core.update.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword(null,"control","control",1892578036),frontend.persistence_middleware._wrap_control,storage,key,blacklist),new cljs.core.Keyword(null,"reconcile","reconcile",-728661830),frontend.persistence_middleware._wrap_reconcile,storage,key,blacklist);
});

//# sourceMappingURL=persistence_middleware.js.map?rel=1449083081716