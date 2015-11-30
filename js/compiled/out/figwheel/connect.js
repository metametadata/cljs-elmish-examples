// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('frontend.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__33981__delegate = function (x){
if(cljs.core.truth_(frontend.core.on_js_reload)){
return cljs.core.apply.call(null,frontend.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'frontend.core/on-js-reload' is missing");
}
};
var G__33981 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__33982__i = 0, G__33982__a = new Array(arguments.length -  0);
while (G__33982__i < G__33982__a.length) {G__33982__a[G__33982__i] = arguments[G__33982__i + 0]; ++G__33982__i;}
  x = new cljs.core.IndexedSeq(G__33982__a,0);
} 
return G__33981__delegate.call(this,x);};
G__33981.cljs$lang$maxFixedArity = 0;
G__33981.cljs$lang$applyTo = (function (arglist__33983){
var x = cljs.core.seq(arglist__33983);
return G__33981__delegate(x);
});
G__33981.cljs$core$IFn$_invoke$arity$variadic = G__33981__delegate;
return G__33981;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1448902881160