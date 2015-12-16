// Compiled by ClojureScript 1.7.170 {}
goog.provide('frontend.core');
goog.require('cljs.core');
goog.require('frontend.persistence_middleware');
goog.require('frontend.giphy_api');
goog.require('frontend.generic_list');
goog.require('frontend.counter_pair');
goog.require('reagent.core');
goog.require('frontend.counter_list');
goog.require('frontend.counter');
goog.require('frontend.ui');
goog.require('frontend.counter_list_fancy');
goog.require('frontend.random_gif_list');
goog.require('frontend.random_gif');
goog.require('frontend.random_gif_pair');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof frontend.core.hot_reload_storage !== 'undefined'){
} else {
frontend.core.hot_reload_storage = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Given a component spec and init args constructs a component instance with logging and hot-reload persistence.
 *   Returns instance's view.
 * 
 *   Storage key must be unique for each example.
 */
frontend.core.example_view = (function frontend$core$example_view(var_args){
var args__17816__auto__ = [];
var len__17809__auto___29566 = arguments.length;
var i__17810__auto___29567 = (0);
while(true){
if((i__17810__auto___29567 < len__17809__auto___29566)){
args__17816__auto__.push((arguments[i__17810__auto___29567]));

var G__29568 = (i__17810__auto___29567 + (1));
i__17810__auto___29567 = G__29568;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((2) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((2)),(0))):null);
return frontend.core.example_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17817__auto__);
});

frontend.core.example_view.cljs$core$IFn$_invoke$arity$variadic = (function (storage_key,spec,init_args){
return new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(frontend.ui.connect_reagent.call(null,frontend.persistence_middleware.wrap.call(null,frontend.ui.wrap_log.call(null,spec),frontend.core.hot_reload_storage,storage_key,null),init_args));
});

frontend.core.example_view.cljs$lang$maxFixedArity = (2);

frontend.core.example_view.cljs$lang$applyTo = (function (seq29563){
var G__29564 = cljs.core.first.call(null,seq29563);
var seq29563__$1 = cljs.core.next.call(null,seq29563);
var G__29565 = cljs.core.first.call(null,seq29563__$1);
var seq29563__$2 = cljs.core.next.call(null,seq29563__$1);
return frontend.core.example_view.cljs$core$IFn$_invoke$arity$variadic(G__29564,G__29565,seq29563__$2);
});
frontend.core.counter_example = frontend.ui.connect_reagent.call(null,frontend.ui.wrap_log.call(null,frontend.counter.spec),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
frontend.core.title = (function frontend$core$title(text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"2em",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"1em"], null)], null),text], null);
});
frontend.core.app_view = (function frontend$core$app_view(){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"wrap"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Counter"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.title,"Single:"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(frontend.core.counter_example)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.title,"Pair:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.example_view,new cljs.core.Keyword(null,"counter-pair","counter-pair",-1389965090),frontend.counter_pair.spec,(1),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Counter list"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.title,"Ordinary:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.example_view,new cljs.core.Keyword(null,"counter-list","counter-list",568575755),frontend.counter_list.spec], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.title,"Fancy:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.example_view,new cljs.core.Keyword(null,"counter-list-fancy","counter-list-fancy",1420659882),frontend.counter_list_fancy.spec], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Random GIF"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.title,"Single:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.example_view,new cljs.core.Keyword(null,"random-gif","random-gif",-1018494926),frontend.random_gif.new_spec.call(null,frontend.giphy_api.get_random_gif),"funny cats"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.title,"Pair:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.example_view,new cljs.core.Keyword(null,"random-gif-pair","random-gif-pair",275948823),frontend.random_gif_pair.new_spec.call(null,frontend.giphy_api.get_random_gif),"funny cats","funny dogs"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Random GIF list"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.example_view,new cljs.core.Keyword(null,"random-gif-list","random-gif-list",-1557732748),frontend.random_gif_list.new_spec.call(null,frontend.giphy_api.get_random_gif)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"List of lists"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.example_view,new cljs.core.Keyword(null,"list-of-lists","list-of-lists",-408753628),frontend.generic_list.new_spec.call(null,frontend.generic_list.new_spec.call(null,frontend.random_gif.new_spec.call(null,frontend.giphy_api.get_random_gif),"nature"))], null)], null)], null);
});
frontend.core.main = (function frontend$core$main(){
cljs.core.println.call(null,"Hi.");

return reagent.core.render_component.call(null,frontend.core.app_view,document.getElementById("app"));
});
frontend.core.main.call(null);
frontend.core.on_js_reload = (function frontend$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1450279744529