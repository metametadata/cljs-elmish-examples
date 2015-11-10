// Compiled by ClojureScript 1.7.122 {}
goog.provide('clojure.core.reducers');
goog.require('cljs.core');
goog.require('cljs.core');
clojure.core.reducers.fjtask = (function clojure$core$reducers$fjtask(f){
return f;
});
clojure.core.reducers.fjinvoke = (function clojure$core$reducers$fjinvoke(f){
return f.call(null);
});
clojure.core.reducers.fjfork = (function clojure$core$reducers$fjfork(task){
return task;
});
clojure.core.reducers.fjjoin = (function clojure$core$reducers$fjjoin(task){
return task.call(null);
});
/**
 * Like core/reduce except:
 *   When init is not provided, (f) is used.
 *   Maps are reduced with reduce-kv
 */
clojure.core.reducers.reduce = (function clojure$core$reducers$reduce(var_args){
var args28329 = [];
var len__17132__auto___28332 = arguments.length;
var i__17133__auto___28333 = (0);
while(true){
if((i__17133__auto___28333 < len__17132__auto___28332)){
args28329.push((arguments[i__17133__auto___28333]));

var G__28334 = (i__17133__auto___28333 + (1));
i__17133__auto___28333 = G__28334;
continue;
} else {
}
break;
}

var G__28331 = args28329.length;
switch (G__28331) {
case 2:
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28329.length)].join('')));

}
});

clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.reduce.call(null,f,f.call(null),coll);
});

clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3 = (function (f,init,coll){
if(cljs.core.map_QMARK_.call(null,coll)){
return cljs.core._kv_reduce.call(null,coll,f,init);
} else {
if((coll == null)){
return init;
} else {
if(cljs.core.array_QMARK_.call(null,coll)){
return cljs.core.array_reduce.call(null,coll,f,init);
} else {
return cljs.core._reduce.call(null,coll,f,init);

}
}
}
});

clojure.core.reducers.reduce.cljs$lang$maxFixedArity = 3;

/**
 * @interface
 */
clojure.core.reducers.CollFold = function(){};

clojure.core.reducers.coll_fold = (function clojure$core$reducers$coll_fold(coll,n,combinef,reducef){
if((!((coll == null))) && (!((coll.clojure$core$reducers$CollFold$coll_fold$arity$4 == null)))){
return coll.clojure$core$reducers$CollFold$coll_fold$arity$4(coll,n,combinef,reducef);
} else {
var x__16729__auto__ = (((coll == null))?null:coll);
var m__16730__auto__ = (clojure.core.reducers.coll_fold[goog.typeOf(x__16729__auto__)]);
if(!((m__16730__auto__ == null))){
return m__16730__auto__.call(null,coll,n,combinef,reducef);
} else {
var m__16730__auto____$1 = (clojure.core.reducers.coll_fold["_"]);
if(!((m__16730__auto____$1 == null))){
return m__16730__auto____$1.call(null,coll,n,combinef,reducef);
} else {
throw cljs.core.missing_protocol.call(null,"CollFold.coll-fold",coll);
}
}
}
});

/**
 * Reduces a collection using a (potentially parallel) reduce-combine
 *   strategy. The collection is partitioned into groups of approximately
 *   n (default 512), each of which is reduced with reducef (with a seed
 *   value obtained by calling (combinef) with no arguments). The results
 *   of these reductions are then reduced with combinef (default
 *   reducef). combinef must be associative, and, when called with no
 *   arguments, (combinef) must produce its identity element. These
 *   operations may be performed in parallel, but the results will
 *   preserve order.
 * 
 *   Note: Performing operations in parallel is currently not implemented.
 */
clojure.core.reducers.fold = (function clojure$core$reducers$fold(var_args){
var args28336 = [];
var len__17132__auto___28339 = arguments.length;
var i__17133__auto___28340 = (0);
while(true){
if((i__17133__auto___28340 < len__17132__auto___28339)){
args28336.push((arguments[i__17133__auto___28340]));

var G__28341 = (i__17133__auto___28340 + (1));
i__17133__auto___28340 = G__28341;
continue;
} else {
}
break;
}

var G__28338 = args28336.length;
switch (G__28338) {
case 2:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28336.length)].join('')));

}
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$2 = (function (reducef,coll){
return clojure.core.reducers.fold.call(null,reducef,reducef,coll);
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3 = (function (combinef,reducef,coll){
return clojure.core.reducers.fold.call(null,(512),combinef,reducef,coll);
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4 = (function (n,combinef,reducef,coll){
return clojure.core.reducers.coll_fold.call(null,coll,n,combinef,reducef);
});

clojure.core.reducers.fold.cljs$lang$maxFixedArity = 4;
/**
 * Given a reducible collection, and a transformation function xf,
 *   returns a reducible collection, where any supplied reducing
 *   fn will be transformed by xf. xf is a function of reducing fn to
 *   reducing fn.
 */
clojure.core.reducers.reducer = (function clojure$core$reducers$reducer(coll,xf){
if(typeof clojure.core.reducers.t_clojure$core$reducers28346 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.t_clojure$core$reducers28346 = (function (reducer,coll,xf,meta28347){
this.reducer = reducer;
this.coll = coll;
this.xf = xf;
this.meta28347 = meta28347;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.t_clojure$core$reducers28346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28348,meta28347__$1){
var self__ = this;
var _28348__$1 = this;
return (new clojure.core.reducers.t_clojure$core$reducers28346(self__.reducer,self__.coll,self__.xf,meta28347__$1));
});

clojure.core.reducers.t_clojure$core$reducers28346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28348){
var self__ = this;
var _28348__$1 = this;
return self__.meta28347;
});

clojure.core.reducers.t_clojure$core$reducers28346.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,f1,f1.call(null));
});

clojure.core.reducers.t_clojure$core$reducers28346.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),init);
});

clojure.core.reducers.t_clojure$core$reducers28346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"reducer","reducer",-948842876,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"xf","xf",2042434515,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a reducible collection, and a transformation function xf,\n  returns a reducible collection, where any supplied reducing\n  fn will be transformed by xf. xf is a function of reducing fn to\n  reducing fn."], null)),new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"xf","xf",2042434515,null),new cljs.core.Symbol(null,"meta28347","meta28347",909749093,null)], null);
});

clojure.core.reducers.t_clojure$core$reducers28346.cljs$lang$type = true;

clojure.core.reducers.t_clojure$core$reducers28346.cljs$lang$ctorStr = "clojure.core.reducers/t_clojure$core$reducers28346";

clojure.core.reducers.t_clojure$core$reducers28346.cljs$lang$ctorPrWriter = (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"clojure.core.reducers/t_clojure$core$reducers28346");
});

clojure.core.reducers.__GT_t_clojure$core$reducers28346 = (function clojure$core$reducers$reducer_$___GT_t_clojure$core$reducers28346(reducer__$1,coll__$1,xf__$1,meta28347){
return (new clojure.core.reducers.t_clojure$core$reducers28346(reducer__$1,coll__$1,xf__$1,meta28347));
});

}

return (new clojure.core.reducers.t_clojure$core$reducers28346(clojure$core$reducers$reducer,coll,xf,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Given a foldable collection, and a transformation function xf,
 *   returns a foldable collection, where any supplied reducing
 *   fn will be transformed by xf. xf is a function of reducing fn to
 *   reducing fn.
 */
clojure.core.reducers.folder = (function clojure$core$reducers$folder(coll,xf){
if(typeof clojure.core.reducers.t_clojure$core$reducers28352 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {clojure.core.reducers.CollFold}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.t_clojure$core$reducers28352 = (function (folder,coll,xf,meta28353){
this.folder = folder;
this.coll = coll;
this.xf = xf;
this.meta28353 = meta28353;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.t_clojure$core$reducers28352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28354,meta28353__$1){
var self__ = this;
var _28354__$1 = this;
return (new clojure.core.reducers.t_clojure$core$reducers28352(self__.folder,self__.coll,self__.xf,meta28353__$1));
});

clojure.core.reducers.t_clojure$core$reducers28352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28354){
var self__ = this;
var _28354__$1 = this;
return self__.meta28353;
});

clojure.core.reducers.t_clojure$core$reducers28352.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (_,f1){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),f1.call(null));
});

clojure.core.reducers.t_clojure$core$reducers28352.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),init);
});

clojure.core.reducers.t_clojure$core$reducers28352.prototype.clojure$core$reducers$CollFold$ = true;

clojure.core.reducers.t_clojure$core$reducers28352.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (_,n,combinef,reducef){
var self__ = this;
var ___$1 = this;
return clojure.core.reducers.coll_fold.call(null,self__.coll,n,combinef,self__.xf.call(null,reducef));
});

clojure.core.reducers.t_clojure$core$reducers28352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"folder","folder",-1138554033,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"xf","xf",2042434515,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a foldable collection, and a transformation function xf,\n  returns a foldable collection, where any supplied reducing\n  fn will be transformed by xf. xf is a function of reducing fn to\n  reducing fn."], null)),new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"xf","xf",2042434515,null),new cljs.core.Symbol(null,"meta28353","meta28353",147438854,null)], null);
});

clojure.core.reducers.t_clojure$core$reducers28352.cljs$lang$type = true;

clojure.core.reducers.t_clojure$core$reducers28352.cljs$lang$ctorStr = "clojure.core.reducers/t_clojure$core$reducers28352";

clojure.core.reducers.t_clojure$core$reducers28352.cljs$lang$ctorPrWriter = (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"clojure.core.reducers/t_clojure$core$reducers28352");
});

clojure.core.reducers.__GT_t_clojure$core$reducers28352 = (function clojure$core$reducers$folder_$___GT_t_clojure$core$reducers28352(folder__$1,coll__$1,xf__$1,meta28353){
return (new clojure.core.reducers.t_clojure$core$reducers28352(folder__$1,coll__$1,xf__$1,meta28353));
});

}

return (new clojure.core.reducers.t_clojure$core$reducers28352(clojure$core$reducers$folder,coll,xf,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Applies f to every value in the reduction of coll. Foldable.
 */
clojure.core.reducers.map = (function clojure$core$reducers$map(var_args){
var args28355 = [];
var len__17132__auto___28358 = arguments.length;
var i__17133__auto___28359 = (0);
while(true){
if((i__17133__auto___28359 < len__17132__auto___28358)){
args28355.push((arguments[i__17133__auto___28359]));

var G__28360 = (i__17133__auto___28359 + (1));
i__17133__auto___28359 = G__28360;
continue;
} else {
}
break;
}

var G__28357 = args28355.length;
switch (G__28357) {
case 1:
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28355.length)].join('')));

}
});

clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (x__16515__auto__){
return clojure.core.reducers.map.call(null,f,x__16515__auto__);
});
});

clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__28362 = null;
var G__28362__0 = (function (){
return f1.call(null);
});
var G__28362__2 = (function (ret,v){
return f1.call(null,ret,f.call(null,v));
});
var G__28362__3 = (function (ret,k,v){
return f1.call(null,ret,f.call(null,k,v));
});
G__28362 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__28362__0.call(this);
case 2:
return G__28362__2.call(this,ret,k);
case 3:
return G__28362__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28362.cljs$core$IFn$_invoke$arity$0 = G__28362__0;
G__28362.cljs$core$IFn$_invoke$arity$2 = G__28362__2;
G__28362.cljs$core$IFn$_invoke$arity$3 = G__28362__3;
return G__28362;
})()
}));
});

clojure.core.reducers.map.cljs$lang$maxFixedArity = 2;
/**
 * Applies f to every value in the reduction of coll, concatenating the result
 *   colls of (f val). Foldable.
 */
clojure.core.reducers.mapcat = (function clojure$core$reducers$mapcat(var_args){
var args28363 = [];
var len__17132__auto___28366 = arguments.length;
var i__17133__auto___28367 = (0);
while(true){
if((i__17133__auto___28367 < len__17132__auto___28366)){
args28363.push((arguments[i__17133__auto___28367]));

var G__28368 = (i__17133__auto___28367 + (1));
i__17133__auto___28367 = G__28368;
continue;
} else {
}
break;
}

var G__28365 = args28363.length;
switch (G__28365) {
case 1:
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28363.length)].join('')));

}
});

clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (x__16515__auto__){
return clojure.core.reducers.mapcat.call(null,f,x__16515__auto__);
});
});

clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__28370 = null;
var G__28370__0 = (function (){
return f1.call(null);
});
var G__28370__2 = (function (ret,v){
return clojure.core.reducers.reduce.call(null,f1,ret,f.call(null,v));
});
var G__28370__3 = (function (ret,k,v){
return clojure.core.reducers.reduce.call(null,f1,ret,f.call(null,k,v));
});
G__28370 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__28370__0.call(this);
case 2:
return G__28370__2.call(this,ret,k);
case 3:
return G__28370__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28370.cljs$core$IFn$_invoke$arity$0 = G__28370__0;
G__28370.cljs$core$IFn$_invoke$arity$2 = G__28370__2;
G__28370.cljs$core$IFn$_invoke$arity$3 = G__28370__3;
return G__28370;
})()
}));
});

clojure.core.reducers.mapcat.cljs$lang$maxFixedArity = 2;
/**
 * Retains values in the reduction of coll for which (pred val)
 *   returns logical true. Foldable.
 */
clojure.core.reducers.filter = (function clojure$core$reducers$filter(var_args){
var args28371 = [];
var len__17132__auto___28374 = arguments.length;
var i__17133__auto___28375 = (0);
while(true){
if((i__17133__auto___28375 < len__17132__auto___28374)){
args28371.push((arguments[i__17133__auto___28375]));

var G__28376 = (i__17133__auto___28375 + (1));
i__17133__auto___28375 = G__28376;
continue;
} else {
}
break;
}

var G__28373 = args28371.length;
switch (G__28373) {
case 1:
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28371.length)].join('')));

}
});

clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__16515__auto__){
return clojure.core.reducers.filter.call(null,pred,x__16515__auto__);
});
});

clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__28378 = null;
var G__28378__0 = (function (){
return f1.call(null);
});
var G__28378__2 = (function (ret,v){
if(cljs.core.truth_(pred.call(null,v))){
return f1.call(null,ret,v);
} else {
return ret;
}
});
var G__28378__3 = (function (ret,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return f1.call(null,ret,k,v);
} else {
return ret;
}
});
G__28378 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__28378__0.call(this);
case 2:
return G__28378__2.call(this,ret,k);
case 3:
return G__28378__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28378.cljs$core$IFn$_invoke$arity$0 = G__28378__0;
G__28378.cljs$core$IFn$_invoke$arity$2 = G__28378__2;
G__28378.cljs$core$IFn$_invoke$arity$3 = G__28378__3;
return G__28378;
})()
}));
});

clojure.core.reducers.filter.cljs$lang$maxFixedArity = 2;
/**
 * Takes any nested combination of sequential things (lists, vectors,
 *   etc.) and returns their contents as a single, flat foldable
 *   collection.
 */
clojure.core.reducers.flatten = (function clojure$core$reducers$flatten(var_args){
var args28379 = [];
var len__17132__auto___28382 = arguments.length;
var i__17133__auto___28383 = (0);
while(true){
if((i__17133__auto___28383 < len__17132__auto___28382)){
args28379.push((arguments[i__17133__auto___28383]));

var G__28384 = (i__17133__auto___28383 + (1));
i__17133__auto___28383 = G__28384;
continue;
} else {
}
break;
}

var G__28381 = args28379.length;
switch (G__28381) {
case 0:
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28379.length)].join('')));

}
});

clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (x__16515__auto__){
return clojure.core.reducers.flatten.call(null,x__16515__auto__);
});
});

clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__28386 = null;
var G__28386__0 = (function (){
return f1.call(null);
});
var G__28386__2 = (function (ret,v){
if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core._reduce.call(null,clojure.core.reducers.flatten.call(null,v),f1,ret);
} else {
return f1.call(null,ret,v);
}
});
G__28386 = function(ret,v){
switch(arguments.length){
case 0:
return G__28386__0.call(this);
case 2:
return G__28386__2.call(this,ret,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28386.cljs$core$IFn$_invoke$arity$0 = G__28386__0;
G__28386.cljs$core$IFn$_invoke$arity$2 = G__28386__2;
return G__28386;
})()
}));
});

clojure.core.reducers.flatten.cljs$lang$maxFixedArity = 1;
/**
 * Removes values in the reduction of coll for which (pred val)
 *   returns logical true. Foldable.
 */
clojure.core.reducers.remove = (function clojure$core$reducers$remove(var_args){
var args28387 = [];
var len__17132__auto___28390 = arguments.length;
var i__17133__auto___28391 = (0);
while(true){
if((i__17133__auto___28391 < len__17132__auto___28390)){
args28387.push((arguments[i__17133__auto___28391]));

var G__28392 = (i__17133__auto___28391 + (1));
i__17133__auto___28391 = G__28392;
continue;
} else {
}
break;
}

var G__28389 = args28387.length;
switch (G__28389) {
case 1:
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28387.length)].join('')));

}
});

clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__16515__auto__){
return clojure.core.reducers.remove.call(null,pred,x__16515__auto__);
});
});

clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.filter.call(null,cljs.core.complement.call(null,pred),coll);
});

clojure.core.reducers.remove.cljs$lang$maxFixedArity = 2;
/**
 * Ends the reduction of coll when (pred val) returns logical false.
 */
clojure.core.reducers.take_while = (function clojure$core$reducers$take_while(var_args){
var args28394 = [];
var len__17132__auto___28397 = arguments.length;
var i__17133__auto___28398 = (0);
while(true){
if((i__17133__auto___28398 < len__17132__auto___28397)){
args28394.push((arguments[i__17133__auto___28398]));

var G__28399 = (i__17133__auto___28398 + (1));
i__17133__auto___28398 = G__28399;
continue;
} else {
}
break;
}

var G__28396 = args28394.length;
switch (G__28396) {
case 1:
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28394.length)].join('')));

}
});

clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__16515__auto__){
return clojure.core.reducers.take_while.call(null,pred,x__16515__auto__);
});
});

clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
return (function() {
var G__28401 = null;
var G__28401__0 = (function (){
return f1.call(null);
});
var G__28401__2 = (function (ret,v){
if(cljs.core.truth_(pred.call(null,v))){
return f1.call(null,ret,v);
} else {
return cljs.core.reduced.call(null,ret);
}
});
var G__28401__3 = (function (ret,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return f1.call(null,ret,k,v);
} else {
return cljs.core.reduced.call(null,ret);
}
});
G__28401 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__28401__0.call(this);
case 2:
return G__28401__2.call(this,ret,k);
case 3:
return G__28401__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28401.cljs$core$IFn$_invoke$arity$0 = G__28401__0;
G__28401.cljs$core$IFn$_invoke$arity$2 = G__28401__2;
G__28401.cljs$core$IFn$_invoke$arity$3 = G__28401__3;
return G__28401;
})()
}));
});

clojure.core.reducers.take_while.cljs$lang$maxFixedArity = 2;
/**
 * Ends the reduction of coll after consuming n values.
 */
clojure.core.reducers.take = (function clojure$core$reducers$take(var_args){
var args28402 = [];
var len__17132__auto___28405 = arguments.length;
var i__17133__auto___28406 = (0);
while(true){
if((i__17133__auto___28406 < len__17132__auto___28405)){
args28402.push((arguments[i__17133__auto___28406]));

var G__28407 = (i__17133__auto___28406 + (1));
i__17133__auto___28406 = G__28407;
continue;
} else {
}
break;
}

var G__28404 = args28402.length;
switch (G__28404) {
case 1:
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28402.length)].join('')));

}
});

clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (x__16515__auto__){
return clojure.core.reducers.take.call(null,n,x__16515__auto__);
});
});

clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
var cnt = cljs.core.atom.call(null,n);
return ((function (cnt){
return (function() {
var G__28409 = null;
var G__28409__0 = (function (){
return f1.call(null);
});
var G__28409__2 = (function (ret,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return cljs.core.reduced.call(null,ret);
} else {
return f1.call(null,ret,v);
}
});
var G__28409__3 = (function (ret,k,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return cljs.core.reduced.call(null,ret);
} else {
return f1.call(null,ret,k,v);
}
});
G__28409 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__28409__0.call(this);
case 2:
return G__28409__2.call(this,ret,k);
case 3:
return G__28409__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28409.cljs$core$IFn$_invoke$arity$0 = G__28409__0;
G__28409.cljs$core$IFn$_invoke$arity$2 = G__28409__2;
G__28409.cljs$core$IFn$_invoke$arity$3 = G__28409__3;
return G__28409;
})()
;})(cnt))
}));
});

clojure.core.reducers.take.cljs$lang$maxFixedArity = 2;
/**
 * Elides the first n values from the reduction of coll.
 */
clojure.core.reducers.drop = (function clojure$core$reducers$drop(var_args){
var args28410 = [];
var len__17132__auto___28413 = arguments.length;
var i__17133__auto___28414 = (0);
while(true){
if((i__17133__auto___28414 < len__17132__auto___28413)){
args28410.push((arguments[i__17133__auto___28414]));

var G__28415 = (i__17133__auto___28414 + (1));
i__17133__auto___28414 = G__28415;
continue;
} else {
}
break;
}

var G__28412 = args28410.length;
switch (G__28412) {
case 1:
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28410.length)].join('')));

}
});

clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (x__16515__auto__){
return clojure.core.reducers.drop.call(null,n,x__16515__auto__);
});
});

clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
var cnt = cljs.core.atom.call(null,n);
return ((function (cnt){
return (function() {
var G__28417 = null;
var G__28417__0 = (function (){
return f1.call(null);
});
var G__28417__2 = (function (ret,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return f1.call(null,ret,v);
} else {
return ret;
}
});
var G__28417__3 = (function (ret,k,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return f1.call(null,ret,k,v);
} else {
return ret;
}
});
G__28417 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__28417__0.call(this);
case 2:
return G__28417__2.call(this,ret,k);
case 3:
return G__28417__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28417.cljs$core$IFn$_invoke$arity$0 = G__28417__0;
G__28417.cljs$core$IFn$_invoke$arity$2 = G__28417__2;
G__28417.cljs$core$IFn$_invoke$arity$3 = G__28417__3;
return G__28417;
})()
;})(cnt))
}));
});

clojure.core.reducers.drop.cljs$lang$maxFixedArity = 2;

/**
* @constructor
 * @implements {clojure.core.reducers.CollFold}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.Cat = (function (cnt,left,right){
this.cnt = cnt;
this.left = left;
this.right = right;
this.cljs$lang$protocol_mask$partition0$ = 8912898;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.Cat.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

clojure.core.reducers.Cat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.concat.call(null,cljs.core.seq.call(null,self__.left),cljs.core.seq.call(null,self__.right));
});

clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,f1,f1.call(null));
});

clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.right,f1,cljs.core._reduce.call(null,self__.left,f1,init));
});

clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$ = true;

clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (this$,n,combinef,reducef){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,reducef);
});

clojure.core.reducers.Cat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"right","right",1187949694,null)], null);
});

clojure.core.reducers.Cat.cljs$lang$type = true;

clojure.core.reducers.Cat.cljs$lang$ctorStr = "clojure.core.reducers/Cat";

clojure.core.reducers.Cat.cljs$lang$ctorPrWriter = (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"clojure.core.reducers/Cat");
});

clojure.core.reducers.__GT_Cat = (function clojure$core$reducers$__GT_Cat(cnt,left,right){
return (new clojure.core.reducers.Cat(cnt,left,right));
});

/**
 * A high-performance combining fn that yields the catenation of the
 *   reduced values. The result is reducible, foldable, seqable and
 *   counted, providing the identity collections are reducible, seqable
 *   and counted. The single argument version will build a combining fn
 *   with the supplied identity constructor. Tests for identity
 *   with (zero? (count x)). See also foldcat.
 */
clojure.core.reducers.cat = (function clojure$core$reducers$cat(var_args){
var args28418 = [];
var len__17132__auto___28421 = arguments.length;
var i__17133__auto___28422 = (0);
while(true){
if((i__17133__auto___28422 < len__17132__auto___28421)){
args28418.push((arguments[i__17133__auto___28422]));

var G__28423 = (i__17133__auto___28422 + (1));
i__17133__auto___28422 = G__28423;
continue;
} else {
}
break;
}

var G__28420 = args28418.length;
switch (G__28420) {
case 0:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28418.length)].join('')));

}
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$0 = (function (){
return [];
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$1 = (function (ctor){
return (function() {
var G__28425 = null;
var G__28425__0 = (function (){
return ctor.call(null);
});
var G__28425__2 = (function (left,right){
return clojure.core.reducers.cat.call(null,left,right);
});
G__28425 = function(left,right){
switch(arguments.length){
case 0:
return G__28425__0.call(this);
case 2:
return G__28425__2.call(this,left,right);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28425.cljs$core$IFn$_invoke$arity$0 = G__28425__0;
G__28425.cljs$core$IFn$_invoke$arity$2 = G__28425__2;
return G__28425;
})()
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2 = (function (left,right){
if((cljs.core.count.call(null,left) === (0))){
return right;
} else {
if((cljs.core.count.call(null,right) === (0))){
return left;
} else {
return (new clojure.core.reducers.Cat((cljs.core.count.call(null,left) + cljs.core.count.call(null,right)),left,right));

}
}
});

clojure.core.reducers.cat.cljs$lang$maxFixedArity = 2;
/**
 * .adds x to acc and returns acc
 */
clojure.core.reducers.append_BANG_ = (function clojure$core$reducers$append_BANG_(acc,x){
var G__28427 = acc;
G__28427.push(x);

return G__28427;
});
/**
 * Equivalent to (fold cat append! coll)
 */
clojure.core.reducers.foldcat = (function clojure$core$reducers$foldcat(coll){
return clojure.core.reducers.fold.call(null,clojure.core.reducers.cat,clojure.core.reducers.append_BANG_,coll);
});
/**
 * Builds a combining fn out of the supplied operator and identity
 *   constructor. op must be associative and ctor called with no args
 *   must return an identity value for it.
 */
clojure.core.reducers.monoid = (function clojure$core$reducers$monoid(op,ctor){
return (function() {
var clojure$core$reducers$monoid_$_m = null;
var clojure$core$reducers$monoid_$_m__0 = (function (){
return ctor.call(null);
});
var clojure$core$reducers$monoid_$_m__2 = (function (a,b){
return op.call(null,a,b);
});
clojure$core$reducers$monoid_$_m = function(a,b){
switch(arguments.length){
case 0:
return clojure$core$reducers$monoid_$_m__0.call(this);
case 2:
return clojure$core$reducers$monoid_$_m__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$core$reducers$monoid_$_m.cljs$core$IFn$_invoke$arity$0 = clojure$core$reducers$monoid_$_m__0;
clojure$core$reducers$monoid_$_m.cljs$core$IFn$_invoke$arity$2 = clojure$core$reducers$monoid_$_m__2;
return clojure$core$reducers$monoid_$_m;
})()
});
clojure.core.reducers.foldvec = (function clojure$core$reducers$foldvec(v,n,combinef,reducef){
if(cljs.core.empty_QMARK_.call(null,v)){
return combinef.call(null);
} else {
if((cljs.core.count.call(null,v) <= n)){
return clojure.core.reducers.reduce.call(null,reducef,combinef.call(null),v);
} else {
var split = cljs.core.quot.call(null,cljs.core.count.call(null,v),(2));
var v1 = cljs.core.subvec.call(null,v,(0),split);
var v2 = cljs.core.subvec.call(null,v,split,cljs.core.count.call(null,v));
var fc = ((function (split,v1,v2){
return (function (child){
return ((function (split,v1,v2){
return (function (){
return clojure$core$reducers$foldvec.call(null,child,n,combinef,reducef);
});
;})(split,v1,v2))
});})(split,v1,v2))
;
return clojure.core.reducers.fjinvoke.call(null,((function (split,v1,v2,fc){
return (function (){
var f1 = fc.call(null,v1);
var t2 = clojure.core.reducers.fjtask.call(null,fc.call(null,v2));
clojure.core.reducers.fjfork.call(null,t2);

return combinef.call(null,f1.call(null),clojure.core.reducers.fjjoin.call(null,t2));
});})(split,v1,v2,fc))
);

}
}
});
(clojure.core.reducers.CollFold["null"] = true);

(clojure.core.reducers.coll_fold["null"] = (function (coll,n,combinef,reducef){
return combinef.call(null);
}));

(clojure.core.reducers.CollFold["object"] = true);

(clojure.core.reducers.coll_fold["object"] = (function (coll,n,combinef,reducef){
return clojure.core.reducers.reduce.call(null,reducef,combinef.call(null),coll);
}));

cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$ = true;

cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (v,n,combinef,reducef){
var v__$1 = this;
return clojure.core.reducers.foldvec.call(null,v__$1,n,combinef,reducef);
});

//# sourceMappingURL=reducers.js.map?rel=1447113460473