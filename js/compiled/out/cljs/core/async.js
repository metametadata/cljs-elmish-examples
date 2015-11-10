// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async31014 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31014 = (function (fn_handler,f,meta31015){
this.fn_handler = fn_handler;
this.f = f;
this.meta31015 = meta31015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31016,meta31015__$1){
var self__ = this;
var _31016__$1 = this;
return (new cljs.core.async.t_cljs$core$async31014(self__.fn_handler,self__.f,meta31015__$1));
});

cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31016){
var self__ = this;
var _31016__$1 = this;
return self__.meta31015;
});

cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta31015","meta31015",-1670462585,null)], null);
});

cljs.core.async.t_cljs$core$async31014.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31014";

cljs.core.async.t_cljs$core$async31014.cljs$lang$ctorPrWriter = (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"cljs.core.async/t_cljs$core$async31014");
});

cljs.core.async.__GT_t_cljs$core$async31014 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async31014(fn_handler__$1,f__$1,meta31015){
return (new cljs.core.async.t_cljs$core$async31014(fn_handler__$1,f__$1,meta31015));
});

}

return (new cljs.core.async.t_cljs$core$async31014(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args31019 = [];
var len__17132__auto___31022 = arguments.length;
var i__17133__auto___31023 = (0);
while(true){
if((i__17133__auto___31023 < len__17132__auto___31022)){
args31019.push((arguments[i__17133__auto___31023]));

var G__31024 = (i__17133__auto___31023 + (1));
i__17133__auto___31023 = G__31024;
continue;
} else {
}
break;
}

var G__31021 = args31019.length;
switch (G__31021) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31019.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args31026 = [];
var len__17132__auto___31029 = arguments.length;
var i__17133__auto___31030 = (0);
while(true){
if((i__17133__auto___31030 < len__17132__auto___31029)){
args31026.push((arguments[i__17133__auto___31030]));

var G__31031 = (i__17133__auto___31030 + (1));
i__17133__auto___31030 = G__31031;
continue;
} else {
}
break;
}

var G__31028 = args31026.length;
switch (G__31028) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31026.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31033 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31033);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31033,ret){
return (function (){
return fn1.call(null,val_31033);
});})(val_31033,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args31034 = [];
var len__17132__auto___31037 = arguments.length;
var i__17133__auto___31038 = (0);
while(true){
if((i__17133__auto___31038 < len__17132__auto___31037)){
args31034.push((arguments[i__17133__auto___31038]));

var G__31039 = (i__17133__auto___31038 + (1));
i__17133__auto___31038 = G__31039;
continue;
} else {
}
break;
}

var G__31036 = args31034.length;
switch (G__31036) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31034.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__16977__auto___31041 = n;
var x_31042 = (0);
while(true){
if((x_31042 < n__16977__auto___31041)){
(a[x_31042] = (0));

var G__31043 = (x_31042 + (1));
x_31042 = G__31043;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__31044 = (i + (1));
i = G__31044;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31048 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31048 = (function (alt_flag,flag,meta31049){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta31049 = meta31049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31050,meta31049__$1){
var self__ = this;
var _31050__$1 = this;
return (new cljs.core.async.t_cljs$core$async31048(self__.alt_flag,self__.flag,meta31049__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31048.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31050){
var self__ = this;
var _31050__$1 = this;
return self__.meta31049;
});})(flag))
;

cljs.core.async.t_cljs$core$async31048.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31048.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31048.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31048.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31049","meta31049",68544465,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31048.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31048";

cljs.core.async.t_cljs$core$async31048.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"cljs.core.async/t_cljs$core$async31048");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31048 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31048(alt_flag__$1,flag__$1,meta31049){
return (new cljs.core.async.t_cljs$core$async31048(alt_flag__$1,flag__$1,meta31049));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31048(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31054 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31054 = (function (alt_handler,flag,cb,meta31055){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta31055 = meta31055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31056,meta31055__$1){
var self__ = this;
var _31056__$1 = this;
return (new cljs.core.async.t_cljs$core$async31054(self__.alt_handler,self__.flag,self__.cb,meta31055__$1));
});

cljs.core.async.t_cljs$core$async31054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31056){
var self__ = this;
var _31056__$1 = this;
return self__.meta31055;
});

cljs.core.async.t_cljs$core$async31054.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31054.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31054.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31054.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31055","meta31055",-321724916,null)], null);
});

cljs.core.async.t_cljs$core$async31054.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31054.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31054";

cljs.core.async.t_cljs$core$async31054.cljs$lang$ctorPrWriter = (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"cljs.core.async/t_cljs$core$async31054");
});

cljs.core.async.__GT_t_cljs$core$async31054 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31054(alt_handler__$1,flag__$1,cb__$1,meta31055){
return (new cljs.core.async.t_cljs$core$async31054(alt_handler__$1,flag__$1,cb__$1,meta31055));
});

}

return (new cljs.core.async.t_cljs$core$async31054(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31057_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31057_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31058_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31058_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16074__auto__ = wport;
if(cljs.core.truth_(or__16074__auto__)){
return or__16074__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31059 = (i + (1));
i = G__31059;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16074__auto__ = ret;
if(cljs.core.truth_(or__16074__auto__)){
return or__16074__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16062__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16062__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16062__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17139__auto__ = [];
var len__17132__auto___31065 = arguments.length;
var i__17133__auto___31066 = (0);
while(true){
if((i__17133__auto___31066 < len__17132__auto___31065)){
args__17139__auto__.push((arguments[i__17133__auto___31066]));

var G__31067 = (i__17133__auto___31066 + (1));
i__17133__auto___31066 = G__31067;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((1) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17140__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31062){
var map__31063 = p__31062;
var map__31063__$1 = ((((!((map__31063 == null)))?((((map__31063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31063):map__31063);
var opts = map__31063__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31060){
var G__31061 = cljs.core.first.call(null,seq31060);
var seq31060__$1 = cljs.core.next.call(null,seq31060);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31061,seq31060__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args31068 = [];
var len__17132__auto___31118 = arguments.length;
var i__17133__auto___31119 = (0);
while(true){
if((i__17133__auto___31119 < len__17132__auto___31118)){
args31068.push((arguments[i__17133__auto___31119]));

var G__31120 = (i__17133__auto___31119 + (1));
i__17133__auto___31119 = G__31120;
continue;
} else {
}
break;
}

var G__31070 = args31068.length;
switch (G__31070) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31068.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23057__auto___31122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23057__auto___31122){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (c__23057__auto___31122){
return (function (state_31094){
var state_val_31095 = (state_31094[(1)]);
if((state_val_31095 === (7))){
var inst_31090 = (state_31094[(2)]);
var state_31094__$1 = state_31094;
var statearr_31096_31123 = state_31094__$1;
(statearr_31096_31123[(2)] = inst_31090);

(statearr_31096_31123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (1))){
var state_31094__$1 = state_31094;
var statearr_31097_31124 = state_31094__$1;
(statearr_31097_31124[(2)] = null);

(statearr_31097_31124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (4))){
var inst_31073 = (state_31094[(7)]);
var inst_31073__$1 = (state_31094[(2)]);
var inst_31074 = (inst_31073__$1 == null);
var state_31094__$1 = (function (){var statearr_31098 = state_31094;
(statearr_31098[(7)] = inst_31073__$1);

return statearr_31098;
})();
if(cljs.core.truth_(inst_31074)){
var statearr_31099_31125 = state_31094__$1;
(statearr_31099_31125[(1)] = (5));

} else {
var statearr_31100_31126 = state_31094__$1;
(statearr_31100_31126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (13))){
var state_31094__$1 = state_31094;
var statearr_31101_31127 = state_31094__$1;
(statearr_31101_31127[(2)] = null);

(statearr_31101_31127[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (6))){
var inst_31073 = (state_31094[(7)]);
var state_31094__$1 = state_31094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31094__$1,(11),to,inst_31073);
} else {
if((state_val_31095 === (3))){
var inst_31092 = (state_31094[(2)]);
var state_31094__$1 = state_31094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31094__$1,inst_31092);
} else {
if((state_val_31095 === (12))){
var state_31094__$1 = state_31094;
var statearr_31102_31128 = state_31094__$1;
(statearr_31102_31128[(2)] = null);

(statearr_31102_31128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (2))){
var state_31094__$1 = state_31094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31094__$1,(4),from);
} else {
if((state_val_31095 === (11))){
var inst_31083 = (state_31094[(2)]);
var state_31094__$1 = state_31094;
if(cljs.core.truth_(inst_31083)){
var statearr_31103_31129 = state_31094__$1;
(statearr_31103_31129[(1)] = (12));

} else {
var statearr_31104_31130 = state_31094__$1;
(statearr_31104_31130[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (9))){
var state_31094__$1 = state_31094;
var statearr_31105_31131 = state_31094__$1;
(statearr_31105_31131[(2)] = null);

(statearr_31105_31131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (5))){
var state_31094__$1 = state_31094;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31106_31132 = state_31094__$1;
(statearr_31106_31132[(1)] = (8));

} else {
var statearr_31107_31133 = state_31094__$1;
(statearr_31107_31133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (14))){
var inst_31088 = (state_31094[(2)]);
var state_31094__$1 = state_31094;
var statearr_31108_31134 = state_31094__$1;
(statearr_31108_31134[(2)] = inst_31088);

(statearr_31108_31134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (10))){
var inst_31080 = (state_31094[(2)]);
var state_31094__$1 = state_31094;
var statearr_31109_31135 = state_31094__$1;
(statearr_31109_31135[(2)] = inst_31080);

(statearr_31109_31135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (8))){
var inst_31077 = cljs.core.async.close_BANG_.call(null,to);
var state_31094__$1 = state_31094;
var statearr_31110_31136 = state_31094__$1;
(statearr_31110_31136[(2)] = inst_31077);

(statearr_31110_31136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23057__auto___31122))
;
return ((function (switch__22992__auto__,c__23057__auto___31122){
return (function() {
var cljs$core$async$state_machine__22993__auto__ = null;
var cljs$core$async$state_machine__22993__auto____0 = (function (){
var statearr_31114 = [null,null,null,null,null,null,null,null];
(statearr_31114[(0)] = cljs$core$async$state_machine__22993__auto__);

(statearr_31114[(1)] = (1));

return statearr_31114;
});
var cljs$core$async$state_machine__22993__auto____1 = (function (state_31094){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_31094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e31115){if((e31115 instanceof Object)){
var ex__22996__auto__ = e31115;
var statearr_31116_31137 = state_31094;
(statearr_31116_31137[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31138 = state_31094;
state_31094 = G__31138;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
cljs$core$async$state_machine__22993__auto__ = function(state_31094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22993__auto____1.call(this,state_31094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22993__auto____0;
cljs$core$async$state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22993__auto____1;
return cljs$core$async$state_machine__22993__auto__;
})()
;})(switch__22992__auto__,c__23057__auto___31122))
})();
var state__23059__auto__ = (function (){var statearr_31117 = f__23058__auto__.call(null);
(statearr_31117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto___31122);

return statearr_31117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(c__23057__auto___31122))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31322){
var vec__31323 = p__31322;
var v = cljs.core.nth.call(null,vec__31323,(0),null);
var p = cljs.core.nth.call(null,vec__31323,(1),null);
var job = vec__31323;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23057__auto___31505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23057__auto___31505,res,vec__31323,v,p,job,jobs,results){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (c__23057__auto___31505,res,vec__31323,v,p,job,jobs,results){
return (function (state_31328){
var state_val_31329 = (state_31328[(1)]);
if((state_val_31329 === (1))){
var state_31328__$1 = state_31328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31328__$1,(2),res,v);
} else {
if((state_val_31329 === (2))){
var inst_31325 = (state_31328[(2)]);
var inst_31326 = cljs.core.async.close_BANG_.call(null,res);
var state_31328__$1 = (function (){var statearr_31330 = state_31328;
(statearr_31330[(7)] = inst_31325);

return statearr_31330;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31328__$1,inst_31326);
} else {
return null;
}
}
});})(c__23057__auto___31505,res,vec__31323,v,p,job,jobs,results))
;
return ((function (switch__22992__auto__,c__23057__auto___31505,res,vec__31323,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____0 = (function (){
var statearr_31334 = [null,null,null,null,null,null,null,null];
(statearr_31334[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__);

(statearr_31334[(1)] = (1));

return statearr_31334;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____1 = (function (state_31328){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_31328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e31335){if((e31335 instanceof Object)){
var ex__22996__auto__ = e31335;
var statearr_31336_31506 = state_31328;
(statearr_31336_31506[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31507 = state_31328;
state_31328 = G__31507;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__ = function(state_31328){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____1.call(this,state_31328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__;
})()
;})(switch__22992__auto__,c__23057__auto___31505,res,vec__31323,v,p,job,jobs,results))
})();
var state__23059__auto__ = (function (){var statearr_31337 = f__23058__auto__.call(null);
(statearr_31337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto___31505);

return statearr_31337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(c__23057__auto___31505,res,vec__31323,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31338){
var vec__31339 = p__31338;
var v = cljs.core.nth.call(null,vec__31339,(0),null);
var p = cljs.core.nth.call(null,vec__31339,(1),null);
var job = vec__31339;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__16977__auto___31508 = n;
var __31509 = (0);
while(true){
if((__31509 < n__16977__auto___31508)){
var G__31340_31510 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31340_31510) {
case "compute":
var c__23057__auto___31512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31509,c__23057__auto___31512,G__31340_31510,n__16977__auto___31508,jobs,results,process,async){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (__31509,c__23057__auto___31512,G__31340_31510,n__16977__auto___31508,jobs,results,process,async){
return (function (state_31353){
var state_val_31354 = (state_31353[(1)]);
if((state_val_31354 === (1))){
var state_31353__$1 = state_31353;
var statearr_31355_31513 = state_31353__$1;
(statearr_31355_31513[(2)] = null);

(statearr_31355_31513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (2))){
var state_31353__$1 = state_31353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31353__$1,(4),jobs);
} else {
if((state_val_31354 === (3))){
var inst_31351 = (state_31353[(2)]);
var state_31353__$1 = state_31353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31353__$1,inst_31351);
} else {
if((state_val_31354 === (4))){
var inst_31343 = (state_31353[(2)]);
var inst_31344 = process.call(null,inst_31343);
var state_31353__$1 = state_31353;
if(cljs.core.truth_(inst_31344)){
var statearr_31356_31514 = state_31353__$1;
(statearr_31356_31514[(1)] = (5));

} else {
var statearr_31357_31515 = state_31353__$1;
(statearr_31357_31515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (5))){
var state_31353__$1 = state_31353;
var statearr_31358_31516 = state_31353__$1;
(statearr_31358_31516[(2)] = null);

(statearr_31358_31516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (6))){
var state_31353__$1 = state_31353;
var statearr_31359_31517 = state_31353__$1;
(statearr_31359_31517[(2)] = null);

(statearr_31359_31517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31354 === (7))){
var inst_31349 = (state_31353[(2)]);
var state_31353__$1 = state_31353;
var statearr_31360_31518 = state_31353__$1;
(statearr_31360_31518[(2)] = inst_31349);

(statearr_31360_31518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31509,c__23057__auto___31512,G__31340_31510,n__16977__auto___31508,jobs,results,process,async))
;
return ((function (__31509,switch__22992__auto__,c__23057__auto___31512,G__31340_31510,n__16977__auto___31508,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____0 = (function (){
var statearr_31364 = [null,null,null,null,null,null,null];
(statearr_31364[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__);

(statearr_31364[(1)] = (1));

return statearr_31364;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____1 = (function (state_31353){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_31353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e31365){if((e31365 instanceof Object)){
var ex__22996__auto__ = e31365;
var statearr_31366_31519 = state_31353;
(statearr_31366_31519[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31520 = state_31353;
state_31353 = G__31520;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__ = function(state_31353){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____1.call(this,state_31353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__;
})()
;})(__31509,switch__22992__auto__,c__23057__auto___31512,G__31340_31510,n__16977__auto___31508,jobs,results,process,async))
})();
var state__23059__auto__ = (function (){var statearr_31367 = f__23058__auto__.call(null);
(statearr_31367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto___31512);

return statearr_31367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(__31509,c__23057__auto___31512,G__31340_31510,n__16977__auto___31508,jobs,results,process,async))
);


break;
case "async":
var c__23057__auto___31521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31509,c__23057__auto___31521,G__31340_31510,n__16977__auto___31508,jobs,results,process,async){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (__31509,c__23057__auto___31521,G__31340_31510,n__16977__auto___31508,jobs,results,process,async){
return (function (state_31380){
var state_val_31381 = (state_31380[(1)]);
if((state_val_31381 === (1))){
var state_31380__$1 = state_31380;
var statearr_31382_31522 = state_31380__$1;
(statearr_31382_31522[(2)] = null);

(statearr_31382_31522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31381 === (2))){
var state_31380__$1 = state_31380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31380__$1,(4),jobs);
} else {
if((state_val_31381 === (3))){
var inst_31378 = (state_31380[(2)]);
var state_31380__$1 = state_31380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31380__$1,inst_31378);
} else {
if((state_val_31381 === (4))){
var inst_31370 = (state_31380[(2)]);
var inst_31371 = async.call(null,inst_31370);
var state_31380__$1 = state_31380;
if(cljs.core.truth_(inst_31371)){
var statearr_31383_31523 = state_31380__$1;
(statearr_31383_31523[(1)] = (5));

} else {
var statearr_31384_31524 = state_31380__$1;
(statearr_31384_31524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31381 === (5))){
var state_31380__$1 = state_31380;
var statearr_31385_31525 = state_31380__$1;
(statearr_31385_31525[(2)] = null);

(statearr_31385_31525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31381 === (6))){
var state_31380__$1 = state_31380;
var statearr_31386_31526 = state_31380__$1;
(statearr_31386_31526[(2)] = null);

(statearr_31386_31526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31381 === (7))){
var inst_31376 = (state_31380[(2)]);
var state_31380__$1 = state_31380;
var statearr_31387_31527 = state_31380__$1;
(statearr_31387_31527[(2)] = inst_31376);

(statearr_31387_31527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31509,c__23057__auto___31521,G__31340_31510,n__16977__auto___31508,jobs,results,process,async))
;
return ((function (__31509,switch__22992__auto__,c__23057__auto___31521,G__31340_31510,n__16977__auto___31508,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____0 = (function (){
var statearr_31391 = [null,null,null,null,null,null,null];
(statearr_31391[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__);

(statearr_31391[(1)] = (1));

return statearr_31391;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____1 = (function (state_31380){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_31380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e31392){if((e31392 instanceof Object)){
var ex__22996__auto__ = e31392;
var statearr_31393_31528 = state_31380;
(statearr_31393_31528[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31529 = state_31380;
state_31380 = G__31529;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__ = function(state_31380){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____1.call(this,state_31380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__;
})()
;})(__31509,switch__22992__auto__,c__23057__auto___31521,G__31340_31510,n__16977__auto___31508,jobs,results,process,async))
})();
var state__23059__auto__ = (function (){var statearr_31394 = f__23058__auto__.call(null);
(statearr_31394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto___31521);

return statearr_31394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(__31509,c__23057__auto___31521,G__31340_31510,n__16977__auto___31508,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31530 = (__31509 + (1));
__31509 = G__31530;
continue;
} else {
}
break;
}

var c__23057__auto___31531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23057__auto___31531,jobs,results,process,async){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (c__23057__auto___31531,jobs,results,process,async){
return (function (state_31416){
var state_val_31417 = (state_31416[(1)]);
if((state_val_31417 === (1))){
var state_31416__$1 = state_31416;
var statearr_31418_31532 = state_31416__$1;
(statearr_31418_31532[(2)] = null);

(statearr_31418_31532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (2))){
var state_31416__$1 = state_31416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31416__$1,(4),from);
} else {
if((state_val_31417 === (3))){
var inst_31414 = (state_31416[(2)]);
var state_31416__$1 = state_31416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31416__$1,inst_31414);
} else {
if((state_val_31417 === (4))){
var inst_31397 = (state_31416[(7)]);
var inst_31397__$1 = (state_31416[(2)]);
var inst_31398 = (inst_31397__$1 == null);
var state_31416__$1 = (function (){var statearr_31419 = state_31416;
(statearr_31419[(7)] = inst_31397__$1);

return statearr_31419;
})();
if(cljs.core.truth_(inst_31398)){
var statearr_31420_31533 = state_31416__$1;
(statearr_31420_31533[(1)] = (5));

} else {
var statearr_31421_31534 = state_31416__$1;
(statearr_31421_31534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (5))){
var inst_31400 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31416__$1 = state_31416;
var statearr_31422_31535 = state_31416__$1;
(statearr_31422_31535[(2)] = inst_31400);

(statearr_31422_31535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (6))){
var inst_31397 = (state_31416[(7)]);
var inst_31402 = (state_31416[(8)]);
var inst_31402__$1 = cljs.core.async.chan.call(null,(1));
var inst_31403 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31404 = [inst_31397,inst_31402__$1];
var inst_31405 = (new cljs.core.PersistentVector(null,2,(5),inst_31403,inst_31404,null));
var state_31416__$1 = (function (){var statearr_31423 = state_31416;
(statearr_31423[(8)] = inst_31402__$1);

return statearr_31423;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31416__$1,(8),jobs,inst_31405);
} else {
if((state_val_31417 === (7))){
var inst_31412 = (state_31416[(2)]);
var state_31416__$1 = state_31416;
var statearr_31424_31536 = state_31416__$1;
(statearr_31424_31536[(2)] = inst_31412);

(statearr_31424_31536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (8))){
var inst_31402 = (state_31416[(8)]);
var inst_31407 = (state_31416[(2)]);
var state_31416__$1 = (function (){var statearr_31425 = state_31416;
(statearr_31425[(9)] = inst_31407);

return statearr_31425;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31416__$1,(9),results,inst_31402);
} else {
if((state_val_31417 === (9))){
var inst_31409 = (state_31416[(2)]);
var state_31416__$1 = (function (){var statearr_31426 = state_31416;
(statearr_31426[(10)] = inst_31409);

return statearr_31426;
})();
var statearr_31427_31537 = state_31416__$1;
(statearr_31427_31537[(2)] = null);

(statearr_31427_31537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__23057__auto___31531,jobs,results,process,async))
;
return ((function (switch__22992__auto__,c__23057__auto___31531,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____0 = (function (){
var statearr_31431 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31431[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__);

(statearr_31431[(1)] = (1));

return statearr_31431;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____1 = (function (state_31416){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_31416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e31432){if((e31432 instanceof Object)){
var ex__22996__auto__ = e31432;
var statearr_31433_31538 = state_31416;
(statearr_31433_31538[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31539 = state_31416;
state_31416 = G__31539;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__ = function(state_31416){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____1.call(this,state_31416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__;
})()
;})(switch__22992__auto__,c__23057__auto___31531,jobs,results,process,async))
})();
var state__23059__auto__ = (function (){var statearr_31434 = f__23058__auto__.call(null);
(statearr_31434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto___31531);

return statearr_31434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(c__23057__auto___31531,jobs,results,process,async))
);


var c__23057__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23057__auto__,jobs,results,process,async){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (c__23057__auto__,jobs,results,process,async){
return (function (state_31472){
var state_val_31473 = (state_31472[(1)]);
if((state_val_31473 === (7))){
var inst_31468 = (state_31472[(2)]);
var state_31472__$1 = state_31472;
var statearr_31474_31540 = state_31472__$1;
(statearr_31474_31540[(2)] = inst_31468);

(statearr_31474_31540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (20))){
var state_31472__$1 = state_31472;
var statearr_31475_31541 = state_31472__$1;
(statearr_31475_31541[(2)] = null);

(statearr_31475_31541[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (1))){
var state_31472__$1 = state_31472;
var statearr_31476_31542 = state_31472__$1;
(statearr_31476_31542[(2)] = null);

(statearr_31476_31542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (4))){
var inst_31437 = (state_31472[(7)]);
var inst_31437__$1 = (state_31472[(2)]);
var inst_31438 = (inst_31437__$1 == null);
var state_31472__$1 = (function (){var statearr_31477 = state_31472;
(statearr_31477[(7)] = inst_31437__$1);

return statearr_31477;
})();
if(cljs.core.truth_(inst_31438)){
var statearr_31478_31543 = state_31472__$1;
(statearr_31478_31543[(1)] = (5));

} else {
var statearr_31479_31544 = state_31472__$1;
(statearr_31479_31544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (15))){
var inst_31450 = (state_31472[(8)]);
var state_31472__$1 = state_31472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31472__$1,(18),to,inst_31450);
} else {
if((state_val_31473 === (21))){
var inst_31463 = (state_31472[(2)]);
var state_31472__$1 = state_31472;
var statearr_31480_31545 = state_31472__$1;
(statearr_31480_31545[(2)] = inst_31463);

(statearr_31480_31545[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (13))){
var inst_31465 = (state_31472[(2)]);
var state_31472__$1 = (function (){var statearr_31481 = state_31472;
(statearr_31481[(9)] = inst_31465);

return statearr_31481;
})();
var statearr_31482_31546 = state_31472__$1;
(statearr_31482_31546[(2)] = null);

(statearr_31482_31546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (6))){
var inst_31437 = (state_31472[(7)]);
var state_31472__$1 = state_31472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31472__$1,(11),inst_31437);
} else {
if((state_val_31473 === (17))){
var inst_31458 = (state_31472[(2)]);
var state_31472__$1 = state_31472;
if(cljs.core.truth_(inst_31458)){
var statearr_31483_31547 = state_31472__$1;
(statearr_31483_31547[(1)] = (19));

} else {
var statearr_31484_31548 = state_31472__$1;
(statearr_31484_31548[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (3))){
var inst_31470 = (state_31472[(2)]);
var state_31472__$1 = state_31472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31472__$1,inst_31470);
} else {
if((state_val_31473 === (12))){
var inst_31447 = (state_31472[(10)]);
var state_31472__$1 = state_31472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31472__$1,(14),inst_31447);
} else {
if((state_val_31473 === (2))){
var state_31472__$1 = state_31472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31472__$1,(4),results);
} else {
if((state_val_31473 === (19))){
var state_31472__$1 = state_31472;
var statearr_31485_31549 = state_31472__$1;
(statearr_31485_31549[(2)] = null);

(statearr_31485_31549[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (11))){
var inst_31447 = (state_31472[(2)]);
var state_31472__$1 = (function (){var statearr_31486 = state_31472;
(statearr_31486[(10)] = inst_31447);

return statearr_31486;
})();
var statearr_31487_31550 = state_31472__$1;
(statearr_31487_31550[(2)] = null);

(statearr_31487_31550[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (9))){
var state_31472__$1 = state_31472;
var statearr_31488_31551 = state_31472__$1;
(statearr_31488_31551[(2)] = null);

(statearr_31488_31551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (5))){
var state_31472__$1 = state_31472;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31489_31552 = state_31472__$1;
(statearr_31489_31552[(1)] = (8));

} else {
var statearr_31490_31553 = state_31472__$1;
(statearr_31490_31553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (14))){
var inst_31450 = (state_31472[(8)]);
var inst_31452 = (state_31472[(11)]);
var inst_31450__$1 = (state_31472[(2)]);
var inst_31451 = (inst_31450__$1 == null);
var inst_31452__$1 = cljs.core.not.call(null,inst_31451);
var state_31472__$1 = (function (){var statearr_31491 = state_31472;
(statearr_31491[(8)] = inst_31450__$1);

(statearr_31491[(11)] = inst_31452__$1);

return statearr_31491;
})();
if(inst_31452__$1){
var statearr_31492_31554 = state_31472__$1;
(statearr_31492_31554[(1)] = (15));

} else {
var statearr_31493_31555 = state_31472__$1;
(statearr_31493_31555[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (16))){
var inst_31452 = (state_31472[(11)]);
var state_31472__$1 = state_31472;
var statearr_31494_31556 = state_31472__$1;
(statearr_31494_31556[(2)] = inst_31452);

(statearr_31494_31556[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (10))){
var inst_31444 = (state_31472[(2)]);
var state_31472__$1 = state_31472;
var statearr_31495_31557 = state_31472__$1;
(statearr_31495_31557[(2)] = inst_31444);

(statearr_31495_31557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (18))){
var inst_31455 = (state_31472[(2)]);
var state_31472__$1 = state_31472;
var statearr_31496_31558 = state_31472__$1;
(statearr_31496_31558[(2)] = inst_31455);

(statearr_31496_31558[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31473 === (8))){
var inst_31441 = cljs.core.async.close_BANG_.call(null,to);
var state_31472__$1 = state_31472;
var statearr_31497_31559 = state_31472__$1;
(statearr_31497_31559[(2)] = inst_31441);

(statearr_31497_31559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23057__auto__,jobs,results,process,async))
;
return ((function (switch__22992__auto__,c__23057__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____0 = (function (){
var statearr_31501 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31501[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__);

(statearr_31501[(1)] = (1));

return statearr_31501;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____1 = (function (state_31472){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_31472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e31502){if((e31502 instanceof Object)){
var ex__22996__auto__ = e31502;
var statearr_31503_31560 = state_31472;
(statearr_31503_31560[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31561 = state_31472;
state_31472 = G__31561;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__ = function(state_31472){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____1.call(this,state_31472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22993__auto__;
})()
;})(switch__22992__auto__,c__23057__auto__,jobs,results,process,async))
})();
var state__23059__auto__ = (function (){var statearr_31504 = f__23058__auto__.call(null);
(statearr_31504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto__);

return statearr_31504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(c__23057__auto__,jobs,results,process,async))
);

return c__23057__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args31562 = [];
var len__17132__auto___31565 = arguments.length;
var i__17133__auto___31566 = (0);
while(true){
if((i__17133__auto___31566 < len__17132__auto___31565)){
args31562.push((arguments[i__17133__auto___31566]));

var G__31567 = (i__17133__auto___31566 + (1));
i__17133__auto___31566 = G__31567;
continue;
} else {
}
break;
}

var G__31564 = args31562.length;
switch (G__31564) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31562.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args31569 = [];
var len__17132__auto___31572 = arguments.length;
var i__17133__auto___31573 = (0);
while(true){
if((i__17133__auto___31573 < len__17132__auto___31572)){
args31569.push((arguments[i__17133__auto___31573]));

var G__31574 = (i__17133__auto___31573 + (1));
i__17133__auto___31573 = G__31574;
continue;
} else {
}
break;
}

var G__31571 = args31569.length;
switch (G__31571) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31569.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args31576 = [];
var len__17132__auto___31629 = arguments.length;
var i__17133__auto___31630 = (0);
while(true){
if((i__17133__auto___31630 < len__17132__auto___31629)){
args31576.push((arguments[i__17133__auto___31630]));

var G__31631 = (i__17133__auto___31630 + (1));
i__17133__auto___31630 = G__31631;
continue;
} else {
}
break;
}

var G__31578 = args31576.length;
switch (G__31578) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31576.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23057__auto___31633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23057__auto___31633,tc,fc){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (c__23057__auto___31633,tc,fc){
return (function (state_31604){
var state_val_31605 = (state_31604[(1)]);
if((state_val_31605 === (7))){
var inst_31600 = (state_31604[(2)]);
var state_31604__$1 = state_31604;
var statearr_31606_31634 = state_31604__$1;
(statearr_31606_31634[(2)] = inst_31600);

(statearr_31606_31634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31605 === (1))){
var state_31604__$1 = state_31604;
var statearr_31607_31635 = state_31604__$1;
(statearr_31607_31635[(2)] = null);

(statearr_31607_31635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31605 === (4))){
var inst_31581 = (state_31604[(7)]);
var inst_31581__$1 = (state_31604[(2)]);
var inst_31582 = (inst_31581__$1 == null);
var state_31604__$1 = (function (){var statearr_31608 = state_31604;
(statearr_31608[(7)] = inst_31581__$1);

return statearr_31608;
})();
if(cljs.core.truth_(inst_31582)){
var statearr_31609_31636 = state_31604__$1;
(statearr_31609_31636[(1)] = (5));

} else {
var statearr_31610_31637 = state_31604__$1;
(statearr_31610_31637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31605 === (13))){
var state_31604__$1 = state_31604;
var statearr_31611_31638 = state_31604__$1;
(statearr_31611_31638[(2)] = null);

(statearr_31611_31638[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31605 === (6))){
var inst_31581 = (state_31604[(7)]);
var inst_31587 = p.call(null,inst_31581);
var state_31604__$1 = state_31604;
if(cljs.core.truth_(inst_31587)){
var statearr_31612_31639 = state_31604__$1;
(statearr_31612_31639[(1)] = (9));

} else {
var statearr_31613_31640 = state_31604__$1;
(statearr_31613_31640[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31605 === (3))){
var inst_31602 = (state_31604[(2)]);
var state_31604__$1 = state_31604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31604__$1,inst_31602);
} else {
if((state_val_31605 === (12))){
var state_31604__$1 = state_31604;
var statearr_31614_31641 = state_31604__$1;
(statearr_31614_31641[(2)] = null);

(statearr_31614_31641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31605 === (2))){
var state_31604__$1 = state_31604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31604__$1,(4),ch);
} else {
if((state_val_31605 === (11))){
var inst_31581 = (state_31604[(7)]);
var inst_31591 = (state_31604[(2)]);
var state_31604__$1 = state_31604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31604__$1,(8),inst_31591,inst_31581);
} else {
if((state_val_31605 === (9))){
var state_31604__$1 = state_31604;
var statearr_31615_31642 = state_31604__$1;
(statearr_31615_31642[(2)] = tc);

(statearr_31615_31642[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31605 === (5))){
var inst_31584 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31585 = cljs.core.async.close_BANG_.call(null,fc);
var state_31604__$1 = (function (){var statearr_31616 = state_31604;
(statearr_31616[(8)] = inst_31584);

return statearr_31616;
})();
var statearr_31617_31643 = state_31604__$1;
(statearr_31617_31643[(2)] = inst_31585);

(statearr_31617_31643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31605 === (14))){
var inst_31598 = (state_31604[(2)]);
var state_31604__$1 = state_31604;
var statearr_31618_31644 = state_31604__$1;
(statearr_31618_31644[(2)] = inst_31598);

(statearr_31618_31644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31605 === (10))){
var state_31604__$1 = state_31604;
var statearr_31619_31645 = state_31604__$1;
(statearr_31619_31645[(2)] = fc);

(statearr_31619_31645[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31605 === (8))){
var inst_31593 = (state_31604[(2)]);
var state_31604__$1 = state_31604;
if(cljs.core.truth_(inst_31593)){
var statearr_31620_31646 = state_31604__$1;
(statearr_31620_31646[(1)] = (12));

} else {
var statearr_31621_31647 = state_31604__$1;
(statearr_31621_31647[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23057__auto___31633,tc,fc))
;
return ((function (switch__22992__auto__,c__23057__auto___31633,tc,fc){
return (function() {
var cljs$core$async$state_machine__22993__auto__ = null;
var cljs$core$async$state_machine__22993__auto____0 = (function (){
var statearr_31625 = [null,null,null,null,null,null,null,null,null];
(statearr_31625[(0)] = cljs$core$async$state_machine__22993__auto__);

(statearr_31625[(1)] = (1));

return statearr_31625;
});
var cljs$core$async$state_machine__22993__auto____1 = (function (state_31604){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_31604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e31626){if((e31626 instanceof Object)){
var ex__22996__auto__ = e31626;
var statearr_31627_31648 = state_31604;
(statearr_31627_31648[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31649 = state_31604;
state_31604 = G__31649;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
cljs$core$async$state_machine__22993__auto__ = function(state_31604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22993__auto____1.call(this,state_31604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22993__auto____0;
cljs$core$async$state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22993__auto____1;
return cljs$core$async$state_machine__22993__auto__;
})()
;})(switch__22992__auto__,c__23057__auto___31633,tc,fc))
})();
var state__23059__auto__ = (function (){var statearr_31628 = f__23058__auto__.call(null);
(statearr_31628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto___31633);

return statearr_31628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(c__23057__auto___31633,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23057__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23057__auto__){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (c__23057__auto__){
return (function (state_31696){
var state_val_31697 = (state_31696[(1)]);
if((state_val_31697 === (1))){
var inst_31682 = init;
var state_31696__$1 = (function (){var statearr_31698 = state_31696;
(statearr_31698[(7)] = inst_31682);

return statearr_31698;
})();
var statearr_31699_31714 = state_31696__$1;
(statearr_31699_31714[(2)] = null);

(statearr_31699_31714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (2))){
var state_31696__$1 = state_31696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31696__$1,(4),ch);
} else {
if((state_val_31697 === (3))){
var inst_31694 = (state_31696[(2)]);
var state_31696__$1 = state_31696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31696__$1,inst_31694);
} else {
if((state_val_31697 === (4))){
var inst_31685 = (state_31696[(8)]);
var inst_31685__$1 = (state_31696[(2)]);
var inst_31686 = (inst_31685__$1 == null);
var state_31696__$1 = (function (){var statearr_31700 = state_31696;
(statearr_31700[(8)] = inst_31685__$1);

return statearr_31700;
})();
if(cljs.core.truth_(inst_31686)){
var statearr_31701_31715 = state_31696__$1;
(statearr_31701_31715[(1)] = (5));

} else {
var statearr_31702_31716 = state_31696__$1;
(statearr_31702_31716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (5))){
var inst_31682 = (state_31696[(7)]);
var state_31696__$1 = state_31696;
var statearr_31703_31717 = state_31696__$1;
(statearr_31703_31717[(2)] = inst_31682);

(statearr_31703_31717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (6))){
var inst_31682 = (state_31696[(7)]);
var inst_31685 = (state_31696[(8)]);
var inst_31689 = f.call(null,inst_31682,inst_31685);
var inst_31682__$1 = inst_31689;
var state_31696__$1 = (function (){var statearr_31704 = state_31696;
(statearr_31704[(7)] = inst_31682__$1);

return statearr_31704;
})();
var statearr_31705_31718 = state_31696__$1;
(statearr_31705_31718[(2)] = null);

(statearr_31705_31718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31697 === (7))){
var inst_31692 = (state_31696[(2)]);
var state_31696__$1 = state_31696;
var statearr_31706_31719 = state_31696__$1;
(statearr_31706_31719[(2)] = inst_31692);

(statearr_31706_31719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__23057__auto__))
;
return ((function (switch__22992__auto__,c__23057__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22993__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22993__auto____0 = (function (){
var statearr_31710 = [null,null,null,null,null,null,null,null,null];
(statearr_31710[(0)] = cljs$core$async$reduce_$_state_machine__22993__auto__);

(statearr_31710[(1)] = (1));

return statearr_31710;
});
var cljs$core$async$reduce_$_state_machine__22993__auto____1 = (function (state_31696){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_31696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e31711){if((e31711 instanceof Object)){
var ex__22996__auto__ = e31711;
var statearr_31712_31720 = state_31696;
(statearr_31712_31720[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31721 = state_31696;
state_31696 = G__31721;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22993__auto__ = function(state_31696){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22993__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22993__auto____1.call(this,state_31696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22993__auto____0;
cljs$core$async$reduce_$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22993__auto____1;
return cljs$core$async$reduce_$_state_machine__22993__auto__;
})()
;})(switch__22992__auto__,c__23057__auto__))
})();
var state__23059__auto__ = (function (){var statearr_31713 = f__23058__auto__.call(null);
(statearr_31713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto__);

return statearr_31713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(c__23057__auto__))
);

return c__23057__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args31722 = [];
var len__17132__auto___31774 = arguments.length;
var i__17133__auto___31775 = (0);
while(true){
if((i__17133__auto___31775 < len__17132__auto___31774)){
args31722.push((arguments[i__17133__auto___31775]));

var G__31776 = (i__17133__auto___31775 + (1));
i__17133__auto___31775 = G__31776;
continue;
} else {
}
break;
}

var G__31724 = args31722.length;
switch (G__31724) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31722.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23057__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23057__auto__){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (c__23057__auto__){
return (function (state_31749){
var state_val_31750 = (state_31749[(1)]);
if((state_val_31750 === (7))){
var inst_31731 = (state_31749[(2)]);
var state_31749__$1 = state_31749;
var statearr_31751_31778 = state_31749__$1;
(statearr_31751_31778[(2)] = inst_31731);

(statearr_31751_31778[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (1))){
var inst_31725 = cljs.core.seq.call(null,coll);
var inst_31726 = inst_31725;
var state_31749__$1 = (function (){var statearr_31752 = state_31749;
(statearr_31752[(7)] = inst_31726);

return statearr_31752;
})();
var statearr_31753_31779 = state_31749__$1;
(statearr_31753_31779[(2)] = null);

(statearr_31753_31779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (4))){
var inst_31726 = (state_31749[(7)]);
var inst_31729 = cljs.core.first.call(null,inst_31726);
var state_31749__$1 = state_31749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31749__$1,(7),ch,inst_31729);
} else {
if((state_val_31750 === (13))){
var inst_31743 = (state_31749[(2)]);
var state_31749__$1 = state_31749;
var statearr_31754_31780 = state_31749__$1;
(statearr_31754_31780[(2)] = inst_31743);

(statearr_31754_31780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (6))){
var inst_31734 = (state_31749[(2)]);
var state_31749__$1 = state_31749;
if(cljs.core.truth_(inst_31734)){
var statearr_31755_31781 = state_31749__$1;
(statearr_31755_31781[(1)] = (8));

} else {
var statearr_31756_31782 = state_31749__$1;
(statearr_31756_31782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (3))){
var inst_31747 = (state_31749[(2)]);
var state_31749__$1 = state_31749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31749__$1,inst_31747);
} else {
if((state_val_31750 === (12))){
var state_31749__$1 = state_31749;
var statearr_31757_31783 = state_31749__$1;
(statearr_31757_31783[(2)] = null);

(statearr_31757_31783[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (2))){
var inst_31726 = (state_31749[(7)]);
var state_31749__$1 = state_31749;
if(cljs.core.truth_(inst_31726)){
var statearr_31758_31784 = state_31749__$1;
(statearr_31758_31784[(1)] = (4));

} else {
var statearr_31759_31785 = state_31749__$1;
(statearr_31759_31785[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (11))){
var inst_31740 = cljs.core.async.close_BANG_.call(null,ch);
var state_31749__$1 = state_31749;
var statearr_31760_31786 = state_31749__$1;
(statearr_31760_31786[(2)] = inst_31740);

(statearr_31760_31786[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (9))){
var state_31749__$1 = state_31749;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31761_31787 = state_31749__$1;
(statearr_31761_31787[(1)] = (11));

} else {
var statearr_31762_31788 = state_31749__$1;
(statearr_31762_31788[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (5))){
var inst_31726 = (state_31749[(7)]);
var state_31749__$1 = state_31749;
var statearr_31763_31789 = state_31749__$1;
(statearr_31763_31789[(2)] = inst_31726);

(statearr_31763_31789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (10))){
var inst_31745 = (state_31749[(2)]);
var state_31749__$1 = state_31749;
var statearr_31764_31790 = state_31749__$1;
(statearr_31764_31790[(2)] = inst_31745);

(statearr_31764_31790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31750 === (8))){
var inst_31726 = (state_31749[(7)]);
var inst_31736 = cljs.core.next.call(null,inst_31726);
var inst_31726__$1 = inst_31736;
var state_31749__$1 = (function (){var statearr_31765 = state_31749;
(statearr_31765[(7)] = inst_31726__$1);

return statearr_31765;
})();
var statearr_31766_31791 = state_31749__$1;
(statearr_31766_31791[(2)] = null);

(statearr_31766_31791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23057__auto__))
;
return ((function (switch__22992__auto__,c__23057__auto__){
return (function() {
var cljs$core$async$state_machine__22993__auto__ = null;
var cljs$core$async$state_machine__22993__auto____0 = (function (){
var statearr_31770 = [null,null,null,null,null,null,null,null];
(statearr_31770[(0)] = cljs$core$async$state_machine__22993__auto__);

(statearr_31770[(1)] = (1));

return statearr_31770;
});
var cljs$core$async$state_machine__22993__auto____1 = (function (state_31749){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_31749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e31771){if((e31771 instanceof Object)){
var ex__22996__auto__ = e31771;
var statearr_31772_31792 = state_31749;
(statearr_31772_31792[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31793 = state_31749;
state_31749 = G__31793;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
cljs$core$async$state_machine__22993__auto__ = function(state_31749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22993__auto____1.call(this,state_31749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22993__auto____0;
cljs$core$async$state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22993__auto____1;
return cljs$core$async$state_machine__22993__auto__;
})()
;})(switch__22992__auto__,c__23057__auto__))
})();
var state__23059__auto__ = (function (){var statearr_31773 = f__23058__auto__.call(null);
(statearr_31773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto__);

return statearr_31773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(c__23057__auto__))
);

return c__23057__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16729__auto__ = (((_ == null))?null:_);
var m__16730__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16729__auto__)]);
if(!((m__16730__auto__ == null))){
return m__16730__auto__.call(null,_);
} else {
var m__16730__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__16730__auto____$1 == null))){
return m__16730__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16729__auto__ = (((m == null))?null:m);
var m__16730__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16729__auto__)]);
if(!((m__16730__auto__ == null))){
return m__16730__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__16730__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__16730__auto____$1 == null))){
return m__16730__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16729__auto__ = (((m == null))?null:m);
var m__16730__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16729__auto__)]);
if(!((m__16730__auto__ == null))){
return m__16730__auto__.call(null,m,ch);
} else {
var m__16730__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__16730__auto____$1 == null))){
return m__16730__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16729__auto__ = (((m == null))?null:m);
var m__16730__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16729__auto__)]);
if(!((m__16730__auto__ == null))){
return m__16730__auto__.call(null,m);
} else {
var m__16730__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__16730__auto____$1 == null))){
return m__16730__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32015 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32015 = (function (mult,ch,cs,meta32016){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta32016 = meta32016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32017,meta32016__$1){
var self__ = this;
var _32017__$1 = this;
return (new cljs.core.async.t_cljs$core$async32015(self__.mult,self__.ch,self__.cs,meta32016__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32017){
var self__ = this;
var _32017__$1 = this;
return self__.meta32016;
});})(cs))
;

cljs.core.async.t_cljs$core$async32015.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32015.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32015.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async32015.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32015.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32015.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32015.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32016","meta32016",1875920146,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32015.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32015";

cljs.core.async.t_cljs$core$async32015.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"cljs.core.async/t_cljs$core$async32015");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32015 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32015(mult__$1,ch__$1,cs__$1,meta32016){
return (new cljs.core.async.t_cljs$core$async32015(mult__$1,ch__$1,cs__$1,meta32016));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32015(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23057__auto___32236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23057__auto___32236,cs,m,dchan,dctr,done){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (c__23057__auto___32236,cs,m,dchan,dctr,done){
return (function (state_32148){
var state_val_32149 = (state_32148[(1)]);
if((state_val_32149 === (7))){
var inst_32144 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32150_32237 = state_32148__$1;
(statearr_32150_32237[(2)] = inst_32144);

(statearr_32150_32237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (20))){
var inst_32049 = (state_32148[(7)]);
var inst_32059 = cljs.core.first.call(null,inst_32049);
var inst_32060 = cljs.core.nth.call(null,inst_32059,(0),null);
var inst_32061 = cljs.core.nth.call(null,inst_32059,(1),null);
var state_32148__$1 = (function (){var statearr_32151 = state_32148;
(statearr_32151[(8)] = inst_32060);

return statearr_32151;
})();
if(cljs.core.truth_(inst_32061)){
var statearr_32152_32238 = state_32148__$1;
(statearr_32152_32238[(1)] = (22));

} else {
var statearr_32153_32239 = state_32148__$1;
(statearr_32153_32239[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (27))){
var inst_32020 = (state_32148[(9)]);
var inst_32091 = (state_32148[(10)]);
var inst_32089 = (state_32148[(11)]);
var inst_32096 = (state_32148[(12)]);
var inst_32096__$1 = cljs.core._nth.call(null,inst_32089,inst_32091);
var inst_32097 = cljs.core.async.put_BANG_.call(null,inst_32096__$1,inst_32020,done);
var state_32148__$1 = (function (){var statearr_32154 = state_32148;
(statearr_32154[(12)] = inst_32096__$1);

return statearr_32154;
})();
if(cljs.core.truth_(inst_32097)){
var statearr_32155_32240 = state_32148__$1;
(statearr_32155_32240[(1)] = (30));

} else {
var statearr_32156_32241 = state_32148__$1;
(statearr_32156_32241[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (1))){
var state_32148__$1 = state_32148;
var statearr_32157_32242 = state_32148__$1;
(statearr_32157_32242[(2)] = null);

(statearr_32157_32242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (24))){
var inst_32049 = (state_32148[(7)]);
var inst_32066 = (state_32148[(2)]);
var inst_32067 = cljs.core.next.call(null,inst_32049);
var inst_32029 = inst_32067;
var inst_32030 = null;
var inst_32031 = (0);
var inst_32032 = (0);
var state_32148__$1 = (function (){var statearr_32158 = state_32148;
(statearr_32158[(13)] = inst_32032);

(statearr_32158[(14)] = inst_32030);

(statearr_32158[(15)] = inst_32031);

(statearr_32158[(16)] = inst_32029);

(statearr_32158[(17)] = inst_32066);

return statearr_32158;
})();
var statearr_32159_32243 = state_32148__$1;
(statearr_32159_32243[(2)] = null);

(statearr_32159_32243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (39))){
var state_32148__$1 = state_32148;
var statearr_32163_32244 = state_32148__$1;
(statearr_32163_32244[(2)] = null);

(statearr_32163_32244[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (4))){
var inst_32020 = (state_32148[(9)]);
var inst_32020__$1 = (state_32148[(2)]);
var inst_32021 = (inst_32020__$1 == null);
var state_32148__$1 = (function (){var statearr_32164 = state_32148;
(statearr_32164[(9)] = inst_32020__$1);

return statearr_32164;
})();
if(cljs.core.truth_(inst_32021)){
var statearr_32165_32245 = state_32148__$1;
(statearr_32165_32245[(1)] = (5));

} else {
var statearr_32166_32246 = state_32148__$1;
(statearr_32166_32246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (15))){
var inst_32032 = (state_32148[(13)]);
var inst_32030 = (state_32148[(14)]);
var inst_32031 = (state_32148[(15)]);
var inst_32029 = (state_32148[(16)]);
var inst_32045 = (state_32148[(2)]);
var inst_32046 = (inst_32032 + (1));
var tmp32160 = inst_32030;
var tmp32161 = inst_32031;
var tmp32162 = inst_32029;
var inst_32029__$1 = tmp32162;
var inst_32030__$1 = tmp32160;
var inst_32031__$1 = tmp32161;
var inst_32032__$1 = inst_32046;
var state_32148__$1 = (function (){var statearr_32167 = state_32148;
(statearr_32167[(13)] = inst_32032__$1);

(statearr_32167[(14)] = inst_32030__$1);

(statearr_32167[(15)] = inst_32031__$1);

(statearr_32167[(16)] = inst_32029__$1);

(statearr_32167[(18)] = inst_32045);

return statearr_32167;
})();
var statearr_32168_32247 = state_32148__$1;
(statearr_32168_32247[(2)] = null);

(statearr_32168_32247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (21))){
var inst_32070 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32172_32248 = state_32148__$1;
(statearr_32172_32248[(2)] = inst_32070);

(statearr_32172_32248[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (31))){
var inst_32096 = (state_32148[(12)]);
var inst_32100 = done.call(null,null);
var inst_32101 = cljs.core.async.untap_STAR_.call(null,m,inst_32096);
var state_32148__$1 = (function (){var statearr_32173 = state_32148;
(statearr_32173[(19)] = inst_32100);

return statearr_32173;
})();
var statearr_32174_32249 = state_32148__$1;
(statearr_32174_32249[(2)] = inst_32101);

(statearr_32174_32249[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (32))){
var inst_32091 = (state_32148[(10)]);
var inst_32089 = (state_32148[(11)]);
var inst_32088 = (state_32148[(20)]);
var inst_32090 = (state_32148[(21)]);
var inst_32103 = (state_32148[(2)]);
var inst_32104 = (inst_32091 + (1));
var tmp32169 = inst_32089;
var tmp32170 = inst_32088;
var tmp32171 = inst_32090;
var inst_32088__$1 = tmp32170;
var inst_32089__$1 = tmp32169;
var inst_32090__$1 = tmp32171;
var inst_32091__$1 = inst_32104;
var state_32148__$1 = (function (){var statearr_32175 = state_32148;
(statearr_32175[(10)] = inst_32091__$1);

(statearr_32175[(11)] = inst_32089__$1);

(statearr_32175[(20)] = inst_32088__$1);

(statearr_32175[(22)] = inst_32103);

(statearr_32175[(21)] = inst_32090__$1);

return statearr_32175;
})();
var statearr_32176_32250 = state_32148__$1;
(statearr_32176_32250[(2)] = null);

(statearr_32176_32250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (40))){
var inst_32116 = (state_32148[(23)]);
var inst_32120 = done.call(null,null);
var inst_32121 = cljs.core.async.untap_STAR_.call(null,m,inst_32116);
var state_32148__$1 = (function (){var statearr_32177 = state_32148;
(statearr_32177[(24)] = inst_32120);

return statearr_32177;
})();
var statearr_32178_32251 = state_32148__$1;
(statearr_32178_32251[(2)] = inst_32121);

(statearr_32178_32251[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (33))){
var inst_32107 = (state_32148[(25)]);
var inst_32109 = cljs.core.chunked_seq_QMARK_.call(null,inst_32107);
var state_32148__$1 = state_32148;
if(inst_32109){
var statearr_32179_32252 = state_32148__$1;
(statearr_32179_32252[(1)] = (36));

} else {
var statearr_32180_32253 = state_32148__$1;
(statearr_32180_32253[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (13))){
var inst_32039 = (state_32148[(26)]);
var inst_32042 = cljs.core.async.close_BANG_.call(null,inst_32039);
var state_32148__$1 = state_32148;
var statearr_32181_32254 = state_32148__$1;
(statearr_32181_32254[(2)] = inst_32042);

(statearr_32181_32254[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (22))){
var inst_32060 = (state_32148[(8)]);
var inst_32063 = cljs.core.async.close_BANG_.call(null,inst_32060);
var state_32148__$1 = state_32148;
var statearr_32182_32255 = state_32148__$1;
(statearr_32182_32255[(2)] = inst_32063);

(statearr_32182_32255[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (36))){
var inst_32107 = (state_32148[(25)]);
var inst_32111 = cljs.core.chunk_first.call(null,inst_32107);
var inst_32112 = cljs.core.chunk_rest.call(null,inst_32107);
var inst_32113 = cljs.core.count.call(null,inst_32111);
var inst_32088 = inst_32112;
var inst_32089 = inst_32111;
var inst_32090 = inst_32113;
var inst_32091 = (0);
var state_32148__$1 = (function (){var statearr_32183 = state_32148;
(statearr_32183[(10)] = inst_32091);

(statearr_32183[(11)] = inst_32089);

(statearr_32183[(20)] = inst_32088);

(statearr_32183[(21)] = inst_32090);

return statearr_32183;
})();
var statearr_32184_32256 = state_32148__$1;
(statearr_32184_32256[(2)] = null);

(statearr_32184_32256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (41))){
var inst_32107 = (state_32148[(25)]);
var inst_32123 = (state_32148[(2)]);
var inst_32124 = cljs.core.next.call(null,inst_32107);
var inst_32088 = inst_32124;
var inst_32089 = null;
var inst_32090 = (0);
var inst_32091 = (0);
var state_32148__$1 = (function (){var statearr_32185 = state_32148;
(statearr_32185[(10)] = inst_32091);

(statearr_32185[(11)] = inst_32089);

(statearr_32185[(20)] = inst_32088);

(statearr_32185[(27)] = inst_32123);

(statearr_32185[(21)] = inst_32090);

return statearr_32185;
})();
var statearr_32186_32257 = state_32148__$1;
(statearr_32186_32257[(2)] = null);

(statearr_32186_32257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (43))){
var state_32148__$1 = state_32148;
var statearr_32187_32258 = state_32148__$1;
(statearr_32187_32258[(2)] = null);

(statearr_32187_32258[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (29))){
var inst_32132 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32188_32259 = state_32148__$1;
(statearr_32188_32259[(2)] = inst_32132);

(statearr_32188_32259[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (44))){
var inst_32141 = (state_32148[(2)]);
var state_32148__$1 = (function (){var statearr_32189 = state_32148;
(statearr_32189[(28)] = inst_32141);

return statearr_32189;
})();
var statearr_32190_32260 = state_32148__$1;
(statearr_32190_32260[(2)] = null);

(statearr_32190_32260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (6))){
var inst_32080 = (state_32148[(29)]);
var inst_32079 = cljs.core.deref.call(null,cs);
var inst_32080__$1 = cljs.core.keys.call(null,inst_32079);
var inst_32081 = cljs.core.count.call(null,inst_32080__$1);
var inst_32082 = cljs.core.reset_BANG_.call(null,dctr,inst_32081);
var inst_32087 = cljs.core.seq.call(null,inst_32080__$1);
var inst_32088 = inst_32087;
var inst_32089 = null;
var inst_32090 = (0);
var inst_32091 = (0);
var state_32148__$1 = (function (){var statearr_32191 = state_32148;
(statearr_32191[(30)] = inst_32082);

(statearr_32191[(10)] = inst_32091);

(statearr_32191[(11)] = inst_32089);

(statearr_32191[(20)] = inst_32088);

(statearr_32191[(29)] = inst_32080__$1);

(statearr_32191[(21)] = inst_32090);

return statearr_32191;
})();
var statearr_32192_32261 = state_32148__$1;
(statearr_32192_32261[(2)] = null);

(statearr_32192_32261[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (28))){
var inst_32088 = (state_32148[(20)]);
var inst_32107 = (state_32148[(25)]);
var inst_32107__$1 = cljs.core.seq.call(null,inst_32088);
var state_32148__$1 = (function (){var statearr_32193 = state_32148;
(statearr_32193[(25)] = inst_32107__$1);

return statearr_32193;
})();
if(inst_32107__$1){
var statearr_32194_32262 = state_32148__$1;
(statearr_32194_32262[(1)] = (33));

} else {
var statearr_32195_32263 = state_32148__$1;
(statearr_32195_32263[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (25))){
var inst_32091 = (state_32148[(10)]);
var inst_32090 = (state_32148[(21)]);
var inst_32093 = (inst_32091 < inst_32090);
var inst_32094 = inst_32093;
var state_32148__$1 = state_32148;
if(cljs.core.truth_(inst_32094)){
var statearr_32196_32264 = state_32148__$1;
(statearr_32196_32264[(1)] = (27));

} else {
var statearr_32197_32265 = state_32148__$1;
(statearr_32197_32265[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (34))){
var state_32148__$1 = state_32148;
var statearr_32198_32266 = state_32148__$1;
(statearr_32198_32266[(2)] = null);

(statearr_32198_32266[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (17))){
var state_32148__$1 = state_32148;
var statearr_32199_32267 = state_32148__$1;
(statearr_32199_32267[(2)] = null);

(statearr_32199_32267[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (3))){
var inst_32146 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32148__$1,inst_32146);
} else {
if((state_val_32149 === (12))){
var inst_32075 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32200_32268 = state_32148__$1;
(statearr_32200_32268[(2)] = inst_32075);

(statearr_32200_32268[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (2))){
var state_32148__$1 = state_32148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32148__$1,(4),ch);
} else {
if((state_val_32149 === (23))){
var state_32148__$1 = state_32148;
var statearr_32201_32269 = state_32148__$1;
(statearr_32201_32269[(2)] = null);

(statearr_32201_32269[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (35))){
var inst_32130 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32202_32270 = state_32148__$1;
(statearr_32202_32270[(2)] = inst_32130);

(statearr_32202_32270[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (19))){
var inst_32049 = (state_32148[(7)]);
var inst_32053 = cljs.core.chunk_first.call(null,inst_32049);
var inst_32054 = cljs.core.chunk_rest.call(null,inst_32049);
var inst_32055 = cljs.core.count.call(null,inst_32053);
var inst_32029 = inst_32054;
var inst_32030 = inst_32053;
var inst_32031 = inst_32055;
var inst_32032 = (0);
var state_32148__$1 = (function (){var statearr_32203 = state_32148;
(statearr_32203[(13)] = inst_32032);

(statearr_32203[(14)] = inst_32030);

(statearr_32203[(15)] = inst_32031);

(statearr_32203[(16)] = inst_32029);

return statearr_32203;
})();
var statearr_32204_32271 = state_32148__$1;
(statearr_32204_32271[(2)] = null);

(statearr_32204_32271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (11))){
var inst_32049 = (state_32148[(7)]);
var inst_32029 = (state_32148[(16)]);
var inst_32049__$1 = cljs.core.seq.call(null,inst_32029);
var state_32148__$1 = (function (){var statearr_32205 = state_32148;
(statearr_32205[(7)] = inst_32049__$1);

return statearr_32205;
})();
if(inst_32049__$1){
var statearr_32206_32272 = state_32148__$1;
(statearr_32206_32272[(1)] = (16));

} else {
var statearr_32207_32273 = state_32148__$1;
(statearr_32207_32273[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (9))){
var inst_32077 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32208_32274 = state_32148__$1;
(statearr_32208_32274[(2)] = inst_32077);

(statearr_32208_32274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (5))){
var inst_32027 = cljs.core.deref.call(null,cs);
var inst_32028 = cljs.core.seq.call(null,inst_32027);
var inst_32029 = inst_32028;
var inst_32030 = null;
var inst_32031 = (0);
var inst_32032 = (0);
var state_32148__$1 = (function (){var statearr_32209 = state_32148;
(statearr_32209[(13)] = inst_32032);

(statearr_32209[(14)] = inst_32030);

(statearr_32209[(15)] = inst_32031);

(statearr_32209[(16)] = inst_32029);

return statearr_32209;
})();
var statearr_32210_32275 = state_32148__$1;
(statearr_32210_32275[(2)] = null);

(statearr_32210_32275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (14))){
var state_32148__$1 = state_32148;
var statearr_32211_32276 = state_32148__$1;
(statearr_32211_32276[(2)] = null);

(statearr_32211_32276[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (45))){
var inst_32138 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32212_32277 = state_32148__$1;
(statearr_32212_32277[(2)] = inst_32138);

(statearr_32212_32277[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (26))){
var inst_32080 = (state_32148[(29)]);
var inst_32134 = (state_32148[(2)]);
var inst_32135 = cljs.core.seq.call(null,inst_32080);
var state_32148__$1 = (function (){var statearr_32213 = state_32148;
(statearr_32213[(31)] = inst_32134);

return statearr_32213;
})();
if(inst_32135){
var statearr_32214_32278 = state_32148__$1;
(statearr_32214_32278[(1)] = (42));

} else {
var statearr_32215_32279 = state_32148__$1;
(statearr_32215_32279[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (16))){
var inst_32049 = (state_32148[(7)]);
var inst_32051 = cljs.core.chunked_seq_QMARK_.call(null,inst_32049);
var state_32148__$1 = state_32148;
if(inst_32051){
var statearr_32216_32280 = state_32148__$1;
(statearr_32216_32280[(1)] = (19));

} else {
var statearr_32217_32281 = state_32148__$1;
(statearr_32217_32281[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (38))){
var inst_32127 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32218_32282 = state_32148__$1;
(statearr_32218_32282[(2)] = inst_32127);

(statearr_32218_32282[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (30))){
var state_32148__$1 = state_32148;
var statearr_32219_32283 = state_32148__$1;
(statearr_32219_32283[(2)] = null);

(statearr_32219_32283[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (10))){
var inst_32032 = (state_32148[(13)]);
var inst_32030 = (state_32148[(14)]);
var inst_32038 = cljs.core._nth.call(null,inst_32030,inst_32032);
var inst_32039 = cljs.core.nth.call(null,inst_32038,(0),null);
var inst_32040 = cljs.core.nth.call(null,inst_32038,(1),null);
var state_32148__$1 = (function (){var statearr_32220 = state_32148;
(statearr_32220[(26)] = inst_32039);

return statearr_32220;
})();
if(cljs.core.truth_(inst_32040)){
var statearr_32221_32284 = state_32148__$1;
(statearr_32221_32284[(1)] = (13));

} else {
var statearr_32222_32285 = state_32148__$1;
(statearr_32222_32285[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (18))){
var inst_32073 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32223_32286 = state_32148__$1;
(statearr_32223_32286[(2)] = inst_32073);

(statearr_32223_32286[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (42))){
var state_32148__$1 = state_32148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32148__$1,(45),dchan);
} else {
if((state_val_32149 === (37))){
var inst_32020 = (state_32148[(9)]);
var inst_32107 = (state_32148[(25)]);
var inst_32116 = (state_32148[(23)]);
var inst_32116__$1 = cljs.core.first.call(null,inst_32107);
var inst_32117 = cljs.core.async.put_BANG_.call(null,inst_32116__$1,inst_32020,done);
var state_32148__$1 = (function (){var statearr_32224 = state_32148;
(statearr_32224[(23)] = inst_32116__$1);

return statearr_32224;
})();
if(cljs.core.truth_(inst_32117)){
var statearr_32225_32287 = state_32148__$1;
(statearr_32225_32287[(1)] = (39));

} else {
var statearr_32226_32288 = state_32148__$1;
(statearr_32226_32288[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (8))){
var inst_32032 = (state_32148[(13)]);
var inst_32031 = (state_32148[(15)]);
var inst_32034 = (inst_32032 < inst_32031);
var inst_32035 = inst_32034;
var state_32148__$1 = state_32148;
if(cljs.core.truth_(inst_32035)){
var statearr_32227_32289 = state_32148__$1;
(statearr_32227_32289[(1)] = (10));

} else {
var statearr_32228_32290 = state_32148__$1;
(statearr_32228_32290[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23057__auto___32236,cs,m,dchan,dctr,done))
;
return ((function (switch__22992__auto__,c__23057__auto___32236,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22993__auto__ = null;
var cljs$core$async$mult_$_state_machine__22993__auto____0 = (function (){
var statearr_32232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32232[(0)] = cljs$core$async$mult_$_state_machine__22993__auto__);

(statearr_32232[(1)] = (1));

return statearr_32232;
});
var cljs$core$async$mult_$_state_machine__22993__auto____1 = (function (state_32148){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_32148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e32233){if((e32233 instanceof Object)){
var ex__22996__auto__ = e32233;
var statearr_32234_32291 = state_32148;
(statearr_32234_32291[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32292 = state_32148;
state_32148 = G__32292;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22993__auto__ = function(state_32148){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22993__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22993__auto____1.call(this,state_32148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22993__auto____0;
cljs$core$async$mult_$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22993__auto____1;
return cljs$core$async$mult_$_state_machine__22993__auto__;
})()
;})(switch__22992__auto__,c__23057__auto___32236,cs,m,dchan,dctr,done))
})();
var state__23059__auto__ = (function (){var statearr_32235 = f__23058__auto__.call(null);
(statearr_32235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto___32236);

return statearr_32235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(c__23057__auto___32236,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args32293 = [];
var len__17132__auto___32296 = arguments.length;
var i__17133__auto___32297 = (0);
while(true){
if((i__17133__auto___32297 < len__17132__auto___32296)){
args32293.push((arguments[i__17133__auto___32297]));

var G__32298 = (i__17133__auto___32297 + (1));
i__17133__auto___32297 = G__32298;
continue;
} else {
}
break;
}

var G__32295 = args32293.length;
switch (G__32295) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32293.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16729__auto__ = (((m == null))?null:m);
var m__16730__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16729__auto__)]);
if(!((m__16730__auto__ == null))){
return m__16730__auto__.call(null,m,ch);
} else {
var m__16730__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__16730__auto____$1 == null))){
return m__16730__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16729__auto__ = (((m == null))?null:m);
var m__16730__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16729__auto__)]);
if(!((m__16730__auto__ == null))){
return m__16730__auto__.call(null,m,ch);
} else {
var m__16730__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__16730__auto____$1 == null))){
return m__16730__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16729__auto__ = (((m == null))?null:m);
var m__16730__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16729__auto__)]);
if(!((m__16730__auto__ == null))){
return m__16730__auto__.call(null,m);
} else {
var m__16730__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__16730__auto____$1 == null))){
return m__16730__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16729__auto__ = (((m == null))?null:m);
var m__16730__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16729__auto__)]);
if(!((m__16730__auto__ == null))){
return m__16730__auto__.call(null,m,state_map);
} else {
var m__16730__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__16730__auto____$1 == null))){
return m__16730__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16729__auto__ = (((m == null))?null:m);
var m__16730__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16729__auto__)]);
if(!((m__16730__auto__ == null))){
return m__16730__auto__.call(null,m,mode);
} else {
var m__16730__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__16730__auto____$1 == null))){
return m__16730__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17139__auto__ = [];
var len__17132__auto___32310 = arguments.length;
var i__17133__auto___32311 = (0);
while(true){
if((i__17133__auto___32311 < len__17132__auto___32310)){
args__17139__auto__.push((arguments[i__17133__auto___32311]));

var G__32312 = (i__17133__auto___32311 + (1));
i__17133__auto___32311 = G__32312;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((3) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17140__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32304){
var map__32305 = p__32304;
var map__32305__$1 = ((((!((map__32305 == null)))?((((map__32305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32305):map__32305);
var opts = map__32305__$1;
var statearr_32307_32313 = state;
(statearr_32307_32313[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__32305,map__32305__$1,opts){
return (function (val){
var statearr_32308_32314 = state;
(statearr_32308_32314[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32305,map__32305__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_32309_32315 = state;
(statearr_32309_32315[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32300){
var G__32301 = cljs.core.first.call(null,seq32300);
var seq32300__$1 = cljs.core.next.call(null,seq32300);
var G__32302 = cljs.core.first.call(null,seq32300__$1);
var seq32300__$2 = cljs.core.next.call(null,seq32300__$1);
var G__32303 = cljs.core.first.call(null,seq32300__$2);
var seq32300__$3 = cljs.core.next.call(null,seq32300__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32301,G__32302,G__32303,seq32300__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32479 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32479 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32480){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32480 = meta32480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32481,meta32480__$1){
var self__ = this;
var _32481__$1 = this;
return (new cljs.core.async.t_cljs$core$async32479(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32480__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32479.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32481){
var self__ = this;
var _32481__$1 = this;
return self__.meta32480;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32479.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32479.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32479.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async32479.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32479.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32479.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32479.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32479.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32479.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32480","meta32480",-633868347,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32479.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32479";

cljs.core.async.t_cljs$core$async32479.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"cljs.core.async/t_cljs$core$async32479");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32479 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32479(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32480){
return (new cljs.core.async.t_cljs$core$async32479(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32480));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32479(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23057__auto___32642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23057__auto___32642,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (c__23057__auto___32642,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32579){
var state_val_32580 = (state_32579[(1)]);
if((state_val_32580 === (7))){
var inst_32497 = (state_32579[(2)]);
var state_32579__$1 = state_32579;
var statearr_32581_32643 = state_32579__$1;
(statearr_32581_32643[(2)] = inst_32497);

(statearr_32581_32643[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (20))){
var inst_32509 = (state_32579[(7)]);
var state_32579__$1 = state_32579;
var statearr_32582_32644 = state_32579__$1;
(statearr_32582_32644[(2)] = inst_32509);

(statearr_32582_32644[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (27))){
var state_32579__$1 = state_32579;
var statearr_32583_32645 = state_32579__$1;
(statearr_32583_32645[(2)] = null);

(statearr_32583_32645[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (1))){
var inst_32485 = (state_32579[(8)]);
var inst_32485__$1 = calc_state.call(null);
var inst_32487 = (inst_32485__$1 == null);
var inst_32488 = cljs.core.not.call(null,inst_32487);
var state_32579__$1 = (function (){var statearr_32584 = state_32579;
(statearr_32584[(8)] = inst_32485__$1);

return statearr_32584;
})();
if(inst_32488){
var statearr_32585_32646 = state_32579__$1;
(statearr_32585_32646[(1)] = (2));

} else {
var statearr_32586_32647 = state_32579__$1;
(statearr_32586_32647[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (24))){
var inst_32539 = (state_32579[(9)]);
var inst_32532 = (state_32579[(10)]);
var inst_32553 = (state_32579[(11)]);
var inst_32553__$1 = inst_32532.call(null,inst_32539);
var state_32579__$1 = (function (){var statearr_32587 = state_32579;
(statearr_32587[(11)] = inst_32553__$1);

return statearr_32587;
})();
if(cljs.core.truth_(inst_32553__$1)){
var statearr_32588_32648 = state_32579__$1;
(statearr_32588_32648[(1)] = (29));

} else {
var statearr_32589_32649 = state_32579__$1;
(statearr_32589_32649[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (4))){
var inst_32500 = (state_32579[(2)]);
var state_32579__$1 = state_32579;
if(cljs.core.truth_(inst_32500)){
var statearr_32590_32650 = state_32579__$1;
(statearr_32590_32650[(1)] = (8));

} else {
var statearr_32591_32651 = state_32579__$1;
(statearr_32591_32651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (15))){
var inst_32526 = (state_32579[(2)]);
var state_32579__$1 = state_32579;
if(cljs.core.truth_(inst_32526)){
var statearr_32592_32652 = state_32579__$1;
(statearr_32592_32652[(1)] = (19));

} else {
var statearr_32593_32653 = state_32579__$1;
(statearr_32593_32653[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (21))){
var inst_32531 = (state_32579[(12)]);
var inst_32531__$1 = (state_32579[(2)]);
var inst_32532 = cljs.core.get.call(null,inst_32531__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32533 = cljs.core.get.call(null,inst_32531__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32534 = cljs.core.get.call(null,inst_32531__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32579__$1 = (function (){var statearr_32594 = state_32579;
(statearr_32594[(13)] = inst_32533);

(statearr_32594[(10)] = inst_32532);

(statearr_32594[(12)] = inst_32531__$1);

return statearr_32594;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32579__$1,(22),inst_32534);
} else {
if((state_val_32580 === (31))){
var inst_32561 = (state_32579[(2)]);
var state_32579__$1 = state_32579;
if(cljs.core.truth_(inst_32561)){
var statearr_32595_32654 = state_32579__$1;
(statearr_32595_32654[(1)] = (32));

} else {
var statearr_32596_32655 = state_32579__$1;
(statearr_32596_32655[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (32))){
var inst_32538 = (state_32579[(14)]);
var state_32579__$1 = state_32579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32579__$1,(35),out,inst_32538);
} else {
if((state_val_32580 === (33))){
var inst_32531 = (state_32579[(12)]);
var inst_32509 = inst_32531;
var state_32579__$1 = (function (){var statearr_32597 = state_32579;
(statearr_32597[(7)] = inst_32509);

return statearr_32597;
})();
var statearr_32598_32656 = state_32579__$1;
(statearr_32598_32656[(2)] = null);

(statearr_32598_32656[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (13))){
var inst_32509 = (state_32579[(7)]);
var inst_32516 = inst_32509.cljs$lang$protocol_mask$partition0$;
var inst_32517 = (inst_32516 & (64));
var inst_32518 = inst_32509.cljs$core$ISeq$;
var inst_32519 = (inst_32517) || (inst_32518);
var state_32579__$1 = state_32579;
if(cljs.core.truth_(inst_32519)){
var statearr_32599_32657 = state_32579__$1;
(statearr_32599_32657[(1)] = (16));

} else {
var statearr_32600_32658 = state_32579__$1;
(statearr_32600_32658[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (22))){
var inst_32539 = (state_32579[(9)]);
var inst_32538 = (state_32579[(14)]);
var inst_32537 = (state_32579[(2)]);
var inst_32538__$1 = cljs.core.nth.call(null,inst_32537,(0),null);
var inst_32539__$1 = cljs.core.nth.call(null,inst_32537,(1),null);
var inst_32540 = (inst_32538__$1 == null);
var inst_32541 = cljs.core._EQ_.call(null,inst_32539__$1,change);
var inst_32542 = (inst_32540) || (inst_32541);
var state_32579__$1 = (function (){var statearr_32601 = state_32579;
(statearr_32601[(9)] = inst_32539__$1);

(statearr_32601[(14)] = inst_32538__$1);

return statearr_32601;
})();
if(cljs.core.truth_(inst_32542)){
var statearr_32602_32659 = state_32579__$1;
(statearr_32602_32659[(1)] = (23));

} else {
var statearr_32603_32660 = state_32579__$1;
(statearr_32603_32660[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (36))){
var inst_32531 = (state_32579[(12)]);
var inst_32509 = inst_32531;
var state_32579__$1 = (function (){var statearr_32604 = state_32579;
(statearr_32604[(7)] = inst_32509);

return statearr_32604;
})();
var statearr_32605_32661 = state_32579__$1;
(statearr_32605_32661[(2)] = null);

(statearr_32605_32661[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (29))){
var inst_32553 = (state_32579[(11)]);
var state_32579__$1 = state_32579;
var statearr_32606_32662 = state_32579__$1;
(statearr_32606_32662[(2)] = inst_32553);

(statearr_32606_32662[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (6))){
var state_32579__$1 = state_32579;
var statearr_32607_32663 = state_32579__$1;
(statearr_32607_32663[(2)] = false);

(statearr_32607_32663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (28))){
var inst_32549 = (state_32579[(2)]);
var inst_32550 = calc_state.call(null);
var inst_32509 = inst_32550;
var state_32579__$1 = (function (){var statearr_32608 = state_32579;
(statearr_32608[(15)] = inst_32549);

(statearr_32608[(7)] = inst_32509);

return statearr_32608;
})();
var statearr_32609_32664 = state_32579__$1;
(statearr_32609_32664[(2)] = null);

(statearr_32609_32664[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (25))){
var inst_32575 = (state_32579[(2)]);
var state_32579__$1 = state_32579;
var statearr_32610_32665 = state_32579__$1;
(statearr_32610_32665[(2)] = inst_32575);

(statearr_32610_32665[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (34))){
var inst_32573 = (state_32579[(2)]);
var state_32579__$1 = state_32579;
var statearr_32611_32666 = state_32579__$1;
(statearr_32611_32666[(2)] = inst_32573);

(statearr_32611_32666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (17))){
var state_32579__$1 = state_32579;
var statearr_32612_32667 = state_32579__$1;
(statearr_32612_32667[(2)] = false);

(statearr_32612_32667[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (3))){
var state_32579__$1 = state_32579;
var statearr_32613_32668 = state_32579__$1;
(statearr_32613_32668[(2)] = false);

(statearr_32613_32668[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (12))){
var inst_32577 = (state_32579[(2)]);
var state_32579__$1 = state_32579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32579__$1,inst_32577);
} else {
if((state_val_32580 === (2))){
var inst_32485 = (state_32579[(8)]);
var inst_32490 = inst_32485.cljs$lang$protocol_mask$partition0$;
var inst_32491 = (inst_32490 & (64));
var inst_32492 = inst_32485.cljs$core$ISeq$;
var inst_32493 = (inst_32491) || (inst_32492);
var state_32579__$1 = state_32579;
if(cljs.core.truth_(inst_32493)){
var statearr_32614_32669 = state_32579__$1;
(statearr_32614_32669[(1)] = (5));

} else {
var statearr_32615_32670 = state_32579__$1;
(statearr_32615_32670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (23))){
var inst_32538 = (state_32579[(14)]);
var inst_32544 = (inst_32538 == null);
var state_32579__$1 = state_32579;
if(cljs.core.truth_(inst_32544)){
var statearr_32616_32671 = state_32579__$1;
(statearr_32616_32671[(1)] = (26));

} else {
var statearr_32617_32672 = state_32579__$1;
(statearr_32617_32672[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (35))){
var inst_32564 = (state_32579[(2)]);
var state_32579__$1 = state_32579;
if(cljs.core.truth_(inst_32564)){
var statearr_32618_32673 = state_32579__$1;
(statearr_32618_32673[(1)] = (36));

} else {
var statearr_32619_32674 = state_32579__$1;
(statearr_32619_32674[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (19))){
var inst_32509 = (state_32579[(7)]);
var inst_32528 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32509);
var state_32579__$1 = state_32579;
var statearr_32620_32675 = state_32579__$1;
(statearr_32620_32675[(2)] = inst_32528);

(statearr_32620_32675[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (11))){
var inst_32509 = (state_32579[(7)]);
var inst_32513 = (inst_32509 == null);
var inst_32514 = cljs.core.not.call(null,inst_32513);
var state_32579__$1 = state_32579;
if(inst_32514){
var statearr_32621_32676 = state_32579__$1;
(statearr_32621_32676[(1)] = (13));

} else {
var statearr_32622_32677 = state_32579__$1;
(statearr_32622_32677[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (9))){
var inst_32485 = (state_32579[(8)]);
var state_32579__$1 = state_32579;
var statearr_32623_32678 = state_32579__$1;
(statearr_32623_32678[(2)] = inst_32485);

(statearr_32623_32678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (5))){
var state_32579__$1 = state_32579;
var statearr_32624_32679 = state_32579__$1;
(statearr_32624_32679[(2)] = true);

(statearr_32624_32679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (14))){
var state_32579__$1 = state_32579;
var statearr_32625_32680 = state_32579__$1;
(statearr_32625_32680[(2)] = false);

(statearr_32625_32680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (26))){
var inst_32539 = (state_32579[(9)]);
var inst_32546 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32539);
var state_32579__$1 = state_32579;
var statearr_32626_32681 = state_32579__$1;
(statearr_32626_32681[(2)] = inst_32546);

(statearr_32626_32681[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (16))){
var state_32579__$1 = state_32579;
var statearr_32627_32682 = state_32579__$1;
(statearr_32627_32682[(2)] = true);

(statearr_32627_32682[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (38))){
var inst_32569 = (state_32579[(2)]);
var state_32579__$1 = state_32579;
var statearr_32628_32683 = state_32579__$1;
(statearr_32628_32683[(2)] = inst_32569);

(statearr_32628_32683[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (30))){
var inst_32539 = (state_32579[(9)]);
var inst_32533 = (state_32579[(13)]);
var inst_32532 = (state_32579[(10)]);
var inst_32556 = cljs.core.empty_QMARK_.call(null,inst_32532);
var inst_32557 = inst_32533.call(null,inst_32539);
var inst_32558 = cljs.core.not.call(null,inst_32557);
var inst_32559 = (inst_32556) && (inst_32558);
var state_32579__$1 = state_32579;
var statearr_32629_32684 = state_32579__$1;
(statearr_32629_32684[(2)] = inst_32559);

(statearr_32629_32684[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (10))){
var inst_32485 = (state_32579[(8)]);
var inst_32505 = (state_32579[(2)]);
var inst_32506 = cljs.core.get.call(null,inst_32505,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32507 = cljs.core.get.call(null,inst_32505,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32508 = cljs.core.get.call(null,inst_32505,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32509 = inst_32485;
var state_32579__$1 = (function (){var statearr_32630 = state_32579;
(statearr_32630[(16)] = inst_32506);

(statearr_32630[(7)] = inst_32509);

(statearr_32630[(17)] = inst_32508);

(statearr_32630[(18)] = inst_32507);

return statearr_32630;
})();
var statearr_32631_32685 = state_32579__$1;
(statearr_32631_32685[(2)] = null);

(statearr_32631_32685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (18))){
var inst_32523 = (state_32579[(2)]);
var state_32579__$1 = state_32579;
var statearr_32632_32686 = state_32579__$1;
(statearr_32632_32686[(2)] = inst_32523);

(statearr_32632_32686[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (37))){
var state_32579__$1 = state_32579;
var statearr_32633_32687 = state_32579__$1;
(statearr_32633_32687[(2)] = null);

(statearr_32633_32687[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (8))){
var inst_32485 = (state_32579[(8)]);
var inst_32502 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32485);
var state_32579__$1 = state_32579;
var statearr_32634_32688 = state_32579__$1;
(statearr_32634_32688[(2)] = inst_32502);

(statearr_32634_32688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23057__auto___32642,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22992__auto__,c__23057__auto___32642,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22993__auto__ = null;
var cljs$core$async$mix_$_state_machine__22993__auto____0 = (function (){
var statearr_32638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32638[(0)] = cljs$core$async$mix_$_state_machine__22993__auto__);

(statearr_32638[(1)] = (1));

return statearr_32638;
});
var cljs$core$async$mix_$_state_machine__22993__auto____1 = (function (state_32579){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_32579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e32639){if((e32639 instanceof Object)){
var ex__22996__auto__ = e32639;
var statearr_32640_32689 = state_32579;
(statearr_32640_32689[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32690 = state_32579;
state_32579 = G__32690;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22993__auto__ = function(state_32579){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22993__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22993__auto____1.call(this,state_32579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22993__auto____0;
cljs$core$async$mix_$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22993__auto____1;
return cljs$core$async$mix_$_state_machine__22993__auto__;
})()
;})(switch__22992__auto__,c__23057__auto___32642,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23059__auto__ = (function (){var statearr_32641 = f__23058__auto__.call(null);
(statearr_32641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto___32642);

return statearr_32641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(c__23057__auto___32642,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16729__auto__ = (((p == null))?null:p);
var m__16730__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16729__auto__)]);
if(!((m__16730__auto__ == null))){
return m__16730__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__16730__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__16730__auto____$1 == null))){
return m__16730__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16729__auto__ = (((p == null))?null:p);
var m__16730__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16729__auto__)]);
if(!((m__16730__auto__ == null))){
return m__16730__auto__.call(null,p,v,ch);
} else {
var m__16730__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__16730__auto____$1 == null))){
return m__16730__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args32691 = [];
var len__17132__auto___32694 = arguments.length;
var i__17133__auto___32695 = (0);
while(true){
if((i__17133__auto___32695 < len__17132__auto___32694)){
args32691.push((arguments[i__17133__auto___32695]));

var G__32696 = (i__17133__auto___32695 + (1));
i__17133__auto___32695 = G__32696;
continue;
} else {
}
break;
}

var G__32693 = args32691.length;
switch (G__32693) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32691.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16729__auto__ = (((p == null))?null:p);
var m__16730__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16729__auto__)]);
if(!((m__16730__auto__ == null))){
return m__16730__auto__.call(null,p);
} else {
var m__16730__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16730__auto____$1 == null))){
return m__16730__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16729__auto__ = (((p == null))?null:p);
var m__16730__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16729__auto__)]);
if(!((m__16730__auto__ == null))){
return m__16730__auto__.call(null,p,v);
} else {
var m__16730__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16730__auto____$1 == null))){
return m__16730__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args32699 = [];
var len__17132__auto___32824 = arguments.length;
var i__17133__auto___32825 = (0);
while(true){
if((i__17133__auto___32825 < len__17132__auto___32824)){
args32699.push((arguments[i__17133__auto___32825]));

var G__32826 = (i__17133__auto___32825 + (1));
i__17133__auto___32825 = G__32826;
continue;
} else {
}
break;
}

var G__32701 = args32699.length;
switch (G__32701) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32699.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16074__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16074__auto__)){
return or__16074__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16074__auto__,mults){
return (function (p1__32698_SHARP_){
if(cljs.core.truth_(p1__32698_SHARP_.call(null,topic))){
return p1__32698_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32698_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16074__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32702 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32702 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32703){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32703 = meta32703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32704,meta32703__$1){
var self__ = this;
var _32704__$1 = this;
return (new cljs.core.async.t_cljs$core$async32702(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32703__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32704){
var self__ = this;
var _32704__$1 = this;
return self__.meta32703;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32702.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32703","meta32703",-79976456,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32702.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32702";

cljs.core.async.t_cljs$core$async32702.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"cljs.core.async/t_cljs$core$async32702");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32702 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32702(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32703){
return (new cljs.core.async.t_cljs$core$async32702(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32703));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32702(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23057__auto___32828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23057__auto___32828,mults,ensure_mult,p){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (c__23057__auto___32828,mults,ensure_mult,p){
return (function (state_32776){
var state_val_32777 = (state_32776[(1)]);
if((state_val_32777 === (7))){
var inst_32772 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32778_32829 = state_32776__$1;
(statearr_32778_32829[(2)] = inst_32772);

(statearr_32778_32829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (20))){
var state_32776__$1 = state_32776;
var statearr_32779_32830 = state_32776__$1;
(statearr_32779_32830[(2)] = null);

(statearr_32779_32830[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (1))){
var state_32776__$1 = state_32776;
var statearr_32780_32831 = state_32776__$1;
(statearr_32780_32831[(2)] = null);

(statearr_32780_32831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (24))){
var inst_32755 = (state_32776[(7)]);
var inst_32764 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32755);
var state_32776__$1 = state_32776;
var statearr_32781_32832 = state_32776__$1;
(statearr_32781_32832[(2)] = inst_32764);

(statearr_32781_32832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (4))){
var inst_32707 = (state_32776[(8)]);
var inst_32707__$1 = (state_32776[(2)]);
var inst_32708 = (inst_32707__$1 == null);
var state_32776__$1 = (function (){var statearr_32782 = state_32776;
(statearr_32782[(8)] = inst_32707__$1);

return statearr_32782;
})();
if(cljs.core.truth_(inst_32708)){
var statearr_32783_32833 = state_32776__$1;
(statearr_32783_32833[(1)] = (5));

} else {
var statearr_32784_32834 = state_32776__$1;
(statearr_32784_32834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (15))){
var inst_32749 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32785_32835 = state_32776__$1;
(statearr_32785_32835[(2)] = inst_32749);

(statearr_32785_32835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (21))){
var inst_32769 = (state_32776[(2)]);
var state_32776__$1 = (function (){var statearr_32786 = state_32776;
(statearr_32786[(9)] = inst_32769);

return statearr_32786;
})();
var statearr_32787_32836 = state_32776__$1;
(statearr_32787_32836[(2)] = null);

(statearr_32787_32836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (13))){
var inst_32731 = (state_32776[(10)]);
var inst_32733 = cljs.core.chunked_seq_QMARK_.call(null,inst_32731);
var state_32776__$1 = state_32776;
if(inst_32733){
var statearr_32788_32837 = state_32776__$1;
(statearr_32788_32837[(1)] = (16));

} else {
var statearr_32789_32838 = state_32776__$1;
(statearr_32789_32838[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (22))){
var inst_32761 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
if(cljs.core.truth_(inst_32761)){
var statearr_32790_32839 = state_32776__$1;
(statearr_32790_32839[(1)] = (23));

} else {
var statearr_32791_32840 = state_32776__$1;
(statearr_32791_32840[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (6))){
var inst_32755 = (state_32776[(7)]);
var inst_32707 = (state_32776[(8)]);
var inst_32757 = (state_32776[(11)]);
var inst_32755__$1 = topic_fn.call(null,inst_32707);
var inst_32756 = cljs.core.deref.call(null,mults);
var inst_32757__$1 = cljs.core.get.call(null,inst_32756,inst_32755__$1);
var state_32776__$1 = (function (){var statearr_32792 = state_32776;
(statearr_32792[(7)] = inst_32755__$1);

(statearr_32792[(11)] = inst_32757__$1);

return statearr_32792;
})();
if(cljs.core.truth_(inst_32757__$1)){
var statearr_32793_32841 = state_32776__$1;
(statearr_32793_32841[(1)] = (19));

} else {
var statearr_32794_32842 = state_32776__$1;
(statearr_32794_32842[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (25))){
var inst_32766 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32795_32843 = state_32776__$1;
(statearr_32795_32843[(2)] = inst_32766);

(statearr_32795_32843[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (17))){
var inst_32731 = (state_32776[(10)]);
var inst_32740 = cljs.core.first.call(null,inst_32731);
var inst_32741 = cljs.core.async.muxch_STAR_.call(null,inst_32740);
var inst_32742 = cljs.core.async.close_BANG_.call(null,inst_32741);
var inst_32743 = cljs.core.next.call(null,inst_32731);
var inst_32717 = inst_32743;
var inst_32718 = null;
var inst_32719 = (0);
var inst_32720 = (0);
var state_32776__$1 = (function (){var statearr_32796 = state_32776;
(statearr_32796[(12)] = inst_32719);

(statearr_32796[(13)] = inst_32720);

(statearr_32796[(14)] = inst_32742);

(statearr_32796[(15)] = inst_32718);

(statearr_32796[(16)] = inst_32717);

return statearr_32796;
})();
var statearr_32797_32844 = state_32776__$1;
(statearr_32797_32844[(2)] = null);

(statearr_32797_32844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (3))){
var inst_32774 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32776__$1,inst_32774);
} else {
if((state_val_32777 === (12))){
var inst_32751 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32798_32845 = state_32776__$1;
(statearr_32798_32845[(2)] = inst_32751);

(statearr_32798_32845[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (2))){
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32776__$1,(4),ch);
} else {
if((state_val_32777 === (23))){
var state_32776__$1 = state_32776;
var statearr_32799_32846 = state_32776__$1;
(statearr_32799_32846[(2)] = null);

(statearr_32799_32846[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (19))){
var inst_32707 = (state_32776[(8)]);
var inst_32757 = (state_32776[(11)]);
var inst_32759 = cljs.core.async.muxch_STAR_.call(null,inst_32757);
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32776__$1,(22),inst_32759,inst_32707);
} else {
if((state_val_32777 === (11))){
var inst_32731 = (state_32776[(10)]);
var inst_32717 = (state_32776[(16)]);
var inst_32731__$1 = cljs.core.seq.call(null,inst_32717);
var state_32776__$1 = (function (){var statearr_32800 = state_32776;
(statearr_32800[(10)] = inst_32731__$1);

return statearr_32800;
})();
if(inst_32731__$1){
var statearr_32801_32847 = state_32776__$1;
(statearr_32801_32847[(1)] = (13));

} else {
var statearr_32802_32848 = state_32776__$1;
(statearr_32802_32848[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (9))){
var inst_32753 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32803_32849 = state_32776__$1;
(statearr_32803_32849[(2)] = inst_32753);

(statearr_32803_32849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (5))){
var inst_32714 = cljs.core.deref.call(null,mults);
var inst_32715 = cljs.core.vals.call(null,inst_32714);
var inst_32716 = cljs.core.seq.call(null,inst_32715);
var inst_32717 = inst_32716;
var inst_32718 = null;
var inst_32719 = (0);
var inst_32720 = (0);
var state_32776__$1 = (function (){var statearr_32804 = state_32776;
(statearr_32804[(12)] = inst_32719);

(statearr_32804[(13)] = inst_32720);

(statearr_32804[(15)] = inst_32718);

(statearr_32804[(16)] = inst_32717);

return statearr_32804;
})();
var statearr_32805_32850 = state_32776__$1;
(statearr_32805_32850[(2)] = null);

(statearr_32805_32850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (14))){
var state_32776__$1 = state_32776;
var statearr_32809_32851 = state_32776__$1;
(statearr_32809_32851[(2)] = null);

(statearr_32809_32851[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (16))){
var inst_32731 = (state_32776[(10)]);
var inst_32735 = cljs.core.chunk_first.call(null,inst_32731);
var inst_32736 = cljs.core.chunk_rest.call(null,inst_32731);
var inst_32737 = cljs.core.count.call(null,inst_32735);
var inst_32717 = inst_32736;
var inst_32718 = inst_32735;
var inst_32719 = inst_32737;
var inst_32720 = (0);
var state_32776__$1 = (function (){var statearr_32810 = state_32776;
(statearr_32810[(12)] = inst_32719);

(statearr_32810[(13)] = inst_32720);

(statearr_32810[(15)] = inst_32718);

(statearr_32810[(16)] = inst_32717);

return statearr_32810;
})();
var statearr_32811_32852 = state_32776__$1;
(statearr_32811_32852[(2)] = null);

(statearr_32811_32852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (10))){
var inst_32719 = (state_32776[(12)]);
var inst_32720 = (state_32776[(13)]);
var inst_32718 = (state_32776[(15)]);
var inst_32717 = (state_32776[(16)]);
var inst_32725 = cljs.core._nth.call(null,inst_32718,inst_32720);
var inst_32726 = cljs.core.async.muxch_STAR_.call(null,inst_32725);
var inst_32727 = cljs.core.async.close_BANG_.call(null,inst_32726);
var inst_32728 = (inst_32720 + (1));
var tmp32806 = inst_32719;
var tmp32807 = inst_32718;
var tmp32808 = inst_32717;
var inst_32717__$1 = tmp32808;
var inst_32718__$1 = tmp32807;
var inst_32719__$1 = tmp32806;
var inst_32720__$1 = inst_32728;
var state_32776__$1 = (function (){var statearr_32812 = state_32776;
(statearr_32812[(12)] = inst_32719__$1);

(statearr_32812[(13)] = inst_32720__$1);

(statearr_32812[(15)] = inst_32718__$1);

(statearr_32812[(17)] = inst_32727);

(statearr_32812[(16)] = inst_32717__$1);

return statearr_32812;
})();
var statearr_32813_32853 = state_32776__$1;
(statearr_32813_32853[(2)] = null);

(statearr_32813_32853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (18))){
var inst_32746 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32814_32854 = state_32776__$1;
(statearr_32814_32854[(2)] = inst_32746);

(statearr_32814_32854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (8))){
var inst_32719 = (state_32776[(12)]);
var inst_32720 = (state_32776[(13)]);
var inst_32722 = (inst_32720 < inst_32719);
var inst_32723 = inst_32722;
var state_32776__$1 = state_32776;
if(cljs.core.truth_(inst_32723)){
var statearr_32815_32855 = state_32776__$1;
(statearr_32815_32855[(1)] = (10));

} else {
var statearr_32816_32856 = state_32776__$1;
(statearr_32816_32856[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23057__auto___32828,mults,ensure_mult,p))
;
return ((function (switch__22992__auto__,c__23057__auto___32828,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22993__auto__ = null;
var cljs$core$async$state_machine__22993__auto____0 = (function (){
var statearr_32820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32820[(0)] = cljs$core$async$state_machine__22993__auto__);

(statearr_32820[(1)] = (1));

return statearr_32820;
});
var cljs$core$async$state_machine__22993__auto____1 = (function (state_32776){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_32776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e32821){if((e32821 instanceof Object)){
var ex__22996__auto__ = e32821;
var statearr_32822_32857 = state_32776;
(statearr_32822_32857[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32858 = state_32776;
state_32776 = G__32858;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
cljs$core$async$state_machine__22993__auto__ = function(state_32776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22993__auto____1.call(this,state_32776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22993__auto____0;
cljs$core$async$state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22993__auto____1;
return cljs$core$async$state_machine__22993__auto__;
})()
;})(switch__22992__auto__,c__23057__auto___32828,mults,ensure_mult,p))
})();
var state__23059__auto__ = (function (){var statearr_32823 = f__23058__auto__.call(null);
(statearr_32823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto___32828);

return statearr_32823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(c__23057__auto___32828,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args32859 = [];
var len__17132__auto___32862 = arguments.length;
var i__17133__auto___32863 = (0);
while(true){
if((i__17133__auto___32863 < len__17132__auto___32862)){
args32859.push((arguments[i__17133__auto___32863]));

var G__32864 = (i__17133__auto___32863 + (1));
i__17133__auto___32863 = G__32864;
continue;
} else {
}
break;
}

var G__32861 = args32859.length;
switch (G__32861) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32859.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args32866 = [];
var len__17132__auto___32869 = arguments.length;
var i__17133__auto___32870 = (0);
while(true){
if((i__17133__auto___32870 < len__17132__auto___32869)){
args32866.push((arguments[i__17133__auto___32870]));

var G__32871 = (i__17133__auto___32870 + (1));
i__17133__auto___32870 = G__32871;
continue;
} else {
}
break;
}

var G__32868 = args32866.length;
switch (G__32868) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32866.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args32873 = [];
var len__17132__auto___32944 = arguments.length;
var i__17133__auto___32945 = (0);
while(true){
if((i__17133__auto___32945 < len__17132__auto___32944)){
args32873.push((arguments[i__17133__auto___32945]));

var G__32946 = (i__17133__auto___32945 + (1));
i__17133__auto___32945 = G__32946;
continue;
} else {
}
break;
}

var G__32875 = args32873.length;
switch (G__32875) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32873.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23057__auto___32948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23057__auto___32948,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (c__23057__auto___32948,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32914){
var state_val_32915 = (state_32914[(1)]);
if((state_val_32915 === (7))){
var state_32914__$1 = state_32914;
var statearr_32916_32949 = state_32914__$1;
(statearr_32916_32949[(2)] = null);

(statearr_32916_32949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (1))){
var state_32914__$1 = state_32914;
var statearr_32917_32950 = state_32914__$1;
(statearr_32917_32950[(2)] = null);

(statearr_32917_32950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (4))){
var inst_32878 = (state_32914[(7)]);
var inst_32880 = (inst_32878 < cnt);
var state_32914__$1 = state_32914;
if(cljs.core.truth_(inst_32880)){
var statearr_32918_32951 = state_32914__$1;
(statearr_32918_32951[(1)] = (6));

} else {
var statearr_32919_32952 = state_32914__$1;
(statearr_32919_32952[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (15))){
var inst_32910 = (state_32914[(2)]);
var state_32914__$1 = state_32914;
var statearr_32920_32953 = state_32914__$1;
(statearr_32920_32953[(2)] = inst_32910);

(statearr_32920_32953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (13))){
var inst_32903 = cljs.core.async.close_BANG_.call(null,out);
var state_32914__$1 = state_32914;
var statearr_32921_32954 = state_32914__$1;
(statearr_32921_32954[(2)] = inst_32903);

(statearr_32921_32954[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (6))){
var state_32914__$1 = state_32914;
var statearr_32922_32955 = state_32914__$1;
(statearr_32922_32955[(2)] = null);

(statearr_32922_32955[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (3))){
var inst_32912 = (state_32914[(2)]);
var state_32914__$1 = state_32914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32914__$1,inst_32912);
} else {
if((state_val_32915 === (12))){
var inst_32900 = (state_32914[(8)]);
var inst_32900__$1 = (state_32914[(2)]);
var inst_32901 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32900__$1);
var state_32914__$1 = (function (){var statearr_32923 = state_32914;
(statearr_32923[(8)] = inst_32900__$1);

return statearr_32923;
})();
if(cljs.core.truth_(inst_32901)){
var statearr_32924_32956 = state_32914__$1;
(statearr_32924_32956[(1)] = (13));

} else {
var statearr_32925_32957 = state_32914__$1;
(statearr_32925_32957[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (2))){
var inst_32877 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32878 = (0);
var state_32914__$1 = (function (){var statearr_32926 = state_32914;
(statearr_32926[(7)] = inst_32878);

(statearr_32926[(9)] = inst_32877);

return statearr_32926;
})();
var statearr_32927_32958 = state_32914__$1;
(statearr_32927_32958[(2)] = null);

(statearr_32927_32958[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (11))){
var inst_32878 = (state_32914[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32914,(10),Object,null,(9));
var inst_32887 = chs__$1.call(null,inst_32878);
var inst_32888 = done.call(null,inst_32878);
var inst_32889 = cljs.core.async.take_BANG_.call(null,inst_32887,inst_32888);
var state_32914__$1 = state_32914;
var statearr_32928_32959 = state_32914__$1;
(statearr_32928_32959[(2)] = inst_32889);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32914__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (9))){
var inst_32878 = (state_32914[(7)]);
var inst_32891 = (state_32914[(2)]);
var inst_32892 = (inst_32878 + (1));
var inst_32878__$1 = inst_32892;
var state_32914__$1 = (function (){var statearr_32929 = state_32914;
(statearr_32929[(7)] = inst_32878__$1);

(statearr_32929[(10)] = inst_32891);

return statearr_32929;
})();
var statearr_32930_32960 = state_32914__$1;
(statearr_32930_32960[(2)] = null);

(statearr_32930_32960[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (5))){
var inst_32898 = (state_32914[(2)]);
var state_32914__$1 = (function (){var statearr_32931 = state_32914;
(statearr_32931[(11)] = inst_32898);

return statearr_32931;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32914__$1,(12),dchan);
} else {
if((state_val_32915 === (14))){
var inst_32900 = (state_32914[(8)]);
var inst_32905 = cljs.core.apply.call(null,f,inst_32900);
var state_32914__$1 = state_32914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32914__$1,(16),out,inst_32905);
} else {
if((state_val_32915 === (16))){
var inst_32907 = (state_32914[(2)]);
var state_32914__$1 = (function (){var statearr_32932 = state_32914;
(statearr_32932[(12)] = inst_32907);

return statearr_32932;
})();
var statearr_32933_32961 = state_32914__$1;
(statearr_32933_32961[(2)] = null);

(statearr_32933_32961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (10))){
var inst_32882 = (state_32914[(2)]);
var inst_32883 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32914__$1 = (function (){var statearr_32934 = state_32914;
(statearr_32934[(13)] = inst_32882);

return statearr_32934;
})();
var statearr_32935_32962 = state_32914__$1;
(statearr_32935_32962[(2)] = inst_32883);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32914__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (8))){
var inst_32896 = (state_32914[(2)]);
var state_32914__$1 = state_32914;
var statearr_32936_32963 = state_32914__$1;
(statearr_32936_32963[(2)] = inst_32896);

(statearr_32936_32963[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23057__auto___32948,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22992__auto__,c__23057__auto___32948,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22993__auto__ = null;
var cljs$core$async$state_machine__22993__auto____0 = (function (){
var statearr_32940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32940[(0)] = cljs$core$async$state_machine__22993__auto__);

(statearr_32940[(1)] = (1));

return statearr_32940;
});
var cljs$core$async$state_machine__22993__auto____1 = (function (state_32914){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_32914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e32941){if((e32941 instanceof Object)){
var ex__22996__auto__ = e32941;
var statearr_32942_32964 = state_32914;
(statearr_32942_32964[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32965 = state_32914;
state_32914 = G__32965;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
cljs$core$async$state_machine__22993__auto__ = function(state_32914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22993__auto____1.call(this,state_32914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22993__auto____0;
cljs$core$async$state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22993__auto____1;
return cljs$core$async$state_machine__22993__auto__;
})()
;})(switch__22992__auto__,c__23057__auto___32948,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23059__auto__ = (function (){var statearr_32943 = f__23058__auto__.call(null);
(statearr_32943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto___32948);

return statearr_32943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(c__23057__auto___32948,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args32967 = [];
var len__17132__auto___33023 = arguments.length;
var i__17133__auto___33024 = (0);
while(true){
if((i__17133__auto___33024 < len__17132__auto___33023)){
args32967.push((arguments[i__17133__auto___33024]));

var G__33025 = (i__17133__auto___33024 + (1));
i__17133__auto___33024 = G__33025;
continue;
} else {
}
break;
}

var G__32969 = args32967.length;
switch (G__32969) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32967.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23057__auto___33027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23057__auto___33027,out){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (c__23057__auto___33027,out){
return (function (state_32999){
var state_val_33000 = (state_32999[(1)]);
if((state_val_33000 === (7))){
var inst_32978 = (state_32999[(7)]);
var inst_32979 = (state_32999[(8)]);
var inst_32978__$1 = (state_32999[(2)]);
var inst_32979__$1 = cljs.core.nth.call(null,inst_32978__$1,(0),null);
var inst_32980 = cljs.core.nth.call(null,inst_32978__$1,(1),null);
var inst_32981 = (inst_32979__$1 == null);
var state_32999__$1 = (function (){var statearr_33001 = state_32999;
(statearr_33001[(7)] = inst_32978__$1);

(statearr_33001[(8)] = inst_32979__$1);

(statearr_33001[(9)] = inst_32980);

return statearr_33001;
})();
if(cljs.core.truth_(inst_32981)){
var statearr_33002_33028 = state_32999__$1;
(statearr_33002_33028[(1)] = (8));

} else {
var statearr_33003_33029 = state_32999__$1;
(statearr_33003_33029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (1))){
var inst_32970 = cljs.core.vec.call(null,chs);
var inst_32971 = inst_32970;
var state_32999__$1 = (function (){var statearr_33004 = state_32999;
(statearr_33004[(10)] = inst_32971);

return statearr_33004;
})();
var statearr_33005_33030 = state_32999__$1;
(statearr_33005_33030[(2)] = null);

(statearr_33005_33030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (4))){
var inst_32971 = (state_32999[(10)]);
var state_32999__$1 = state_32999;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32999__$1,(7),inst_32971);
} else {
if((state_val_33000 === (6))){
var inst_32995 = (state_32999[(2)]);
var state_32999__$1 = state_32999;
var statearr_33006_33031 = state_32999__$1;
(statearr_33006_33031[(2)] = inst_32995);

(statearr_33006_33031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (3))){
var inst_32997 = (state_32999[(2)]);
var state_32999__$1 = state_32999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32999__$1,inst_32997);
} else {
if((state_val_33000 === (2))){
var inst_32971 = (state_32999[(10)]);
var inst_32973 = cljs.core.count.call(null,inst_32971);
var inst_32974 = (inst_32973 > (0));
var state_32999__$1 = state_32999;
if(cljs.core.truth_(inst_32974)){
var statearr_33008_33032 = state_32999__$1;
(statearr_33008_33032[(1)] = (4));

} else {
var statearr_33009_33033 = state_32999__$1;
(statearr_33009_33033[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (11))){
var inst_32971 = (state_32999[(10)]);
var inst_32988 = (state_32999[(2)]);
var tmp33007 = inst_32971;
var inst_32971__$1 = tmp33007;
var state_32999__$1 = (function (){var statearr_33010 = state_32999;
(statearr_33010[(10)] = inst_32971__$1);

(statearr_33010[(11)] = inst_32988);

return statearr_33010;
})();
var statearr_33011_33034 = state_32999__$1;
(statearr_33011_33034[(2)] = null);

(statearr_33011_33034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (9))){
var inst_32979 = (state_32999[(8)]);
var state_32999__$1 = state_32999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32999__$1,(11),out,inst_32979);
} else {
if((state_val_33000 === (5))){
var inst_32993 = cljs.core.async.close_BANG_.call(null,out);
var state_32999__$1 = state_32999;
var statearr_33012_33035 = state_32999__$1;
(statearr_33012_33035[(2)] = inst_32993);

(statearr_33012_33035[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (10))){
var inst_32991 = (state_32999[(2)]);
var state_32999__$1 = state_32999;
var statearr_33013_33036 = state_32999__$1;
(statearr_33013_33036[(2)] = inst_32991);

(statearr_33013_33036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (8))){
var inst_32978 = (state_32999[(7)]);
var inst_32979 = (state_32999[(8)]);
var inst_32980 = (state_32999[(9)]);
var inst_32971 = (state_32999[(10)]);
var inst_32983 = (function (){var cs = inst_32971;
var vec__32976 = inst_32978;
var v = inst_32979;
var c = inst_32980;
return ((function (cs,vec__32976,v,c,inst_32978,inst_32979,inst_32980,inst_32971,state_val_33000,c__23057__auto___33027,out){
return (function (p1__32966_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32966_SHARP_);
});
;})(cs,vec__32976,v,c,inst_32978,inst_32979,inst_32980,inst_32971,state_val_33000,c__23057__auto___33027,out))
})();
var inst_32984 = cljs.core.filterv.call(null,inst_32983,inst_32971);
var inst_32971__$1 = inst_32984;
var state_32999__$1 = (function (){var statearr_33014 = state_32999;
(statearr_33014[(10)] = inst_32971__$1);

return statearr_33014;
})();
var statearr_33015_33037 = state_32999__$1;
(statearr_33015_33037[(2)] = null);

(statearr_33015_33037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23057__auto___33027,out))
;
return ((function (switch__22992__auto__,c__23057__auto___33027,out){
return (function() {
var cljs$core$async$state_machine__22993__auto__ = null;
var cljs$core$async$state_machine__22993__auto____0 = (function (){
var statearr_33019 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33019[(0)] = cljs$core$async$state_machine__22993__auto__);

(statearr_33019[(1)] = (1));

return statearr_33019;
});
var cljs$core$async$state_machine__22993__auto____1 = (function (state_32999){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_32999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e33020){if((e33020 instanceof Object)){
var ex__22996__auto__ = e33020;
var statearr_33021_33038 = state_32999;
(statearr_33021_33038[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33039 = state_32999;
state_32999 = G__33039;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
cljs$core$async$state_machine__22993__auto__ = function(state_32999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22993__auto____1.call(this,state_32999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22993__auto____0;
cljs$core$async$state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22993__auto____1;
return cljs$core$async$state_machine__22993__auto__;
})()
;})(switch__22992__auto__,c__23057__auto___33027,out))
})();
var state__23059__auto__ = (function (){var statearr_33022 = f__23058__auto__.call(null);
(statearr_33022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto___33027);

return statearr_33022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(c__23057__auto___33027,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args33040 = [];
var len__17132__auto___33089 = arguments.length;
var i__17133__auto___33090 = (0);
while(true){
if((i__17133__auto___33090 < len__17132__auto___33089)){
args33040.push((arguments[i__17133__auto___33090]));

var G__33091 = (i__17133__auto___33090 + (1));
i__17133__auto___33090 = G__33091;
continue;
} else {
}
break;
}

var G__33042 = args33040.length;
switch (G__33042) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33040.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23057__auto___33093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23057__auto___33093,out){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (c__23057__auto___33093,out){
return (function (state_33066){
var state_val_33067 = (state_33066[(1)]);
if((state_val_33067 === (7))){
var inst_33048 = (state_33066[(7)]);
var inst_33048__$1 = (state_33066[(2)]);
var inst_33049 = (inst_33048__$1 == null);
var inst_33050 = cljs.core.not.call(null,inst_33049);
var state_33066__$1 = (function (){var statearr_33068 = state_33066;
(statearr_33068[(7)] = inst_33048__$1);

return statearr_33068;
})();
if(inst_33050){
var statearr_33069_33094 = state_33066__$1;
(statearr_33069_33094[(1)] = (8));

} else {
var statearr_33070_33095 = state_33066__$1;
(statearr_33070_33095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (1))){
var inst_33043 = (0);
var state_33066__$1 = (function (){var statearr_33071 = state_33066;
(statearr_33071[(8)] = inst_33043);

return statearr_33071;
})();
var statearr_33072_33096 = state_33066__$1;
(statearr_33072_33096[(2)] = null);

(statearr_33072_33096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (4))){
var state_33066__$1 = state_33066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33066__$1,(7),ch);
} else {
if((state_val_33067 === (6))){
var inst_33061 = (state_33066[(2)]);
var state_33066__$1 = state_33066;
var statearr_33073_33097 = state_33066__$1;
(statearr_33073_33097[(2)] = inst_33061);

(statearr_33073_33097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (3))){
var inst_33063 = (state_33066[(2)]);
var inst_33064 = cljs.core.async.close_BANG_.call(null,out);
var state_33066__$1 = (function (){var statearr_33074 = state_33066;
(statearr_33074[(9)] = inst_33063);

return statearr_33074;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33066__$1,inst_33064);
} else {
if((state_val_33067 === (2))){
var inst_33043 = (state_33066[(8)]);
var inst_33045 = (inst_33043 < n);
var state_33066__$1 = state_33066;
if(cljs.core.truth_(inst_33045)){
var statearr_33075_33098 = state_33066__$1;
(statearr_33075_33098[(1)] = (4));

} else {
var statearr_33076_33099 = state_33066__$1;
(statearr_33076_33099[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (11))){
var inst_33043 = (state_33066[(8)]);
var inst_33053 = (state_33066[(2)]);
var inst_33054 = (inst_33043 + (1));
var inst_33043__$1 = inst_33054;
var state_33066__$1 = (function (){var statearr_33077 = state_33066;
(statearr_33077[(8)] = inst_33043__$1);

(statearr_33077[(10)] = inst_33053);

return statearr_33077;
})();
var statearr_33078_33100 = state_33066__$1;
(statearr_33078_33100[(2)] = null);

(statearr_33078_33100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (9))){
var state_33066__$1 = state_33066;
var statearr_33079_33101 = state_33066__$1;
(statearr_33079_33101[(2)] = null);

(statearr_33079_33101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (5))){
var state_33066__$1 = state_33066;
var statearr_33080_33102 = state_33066__$1;
(statearr_33080_33102[(2)] = null);

(statearr_33080_33102[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (10))){
var inst_33058 = (state_33066[(2)]);
var state_33066__$1 = state_33066;
var statearr_33081_33103 = state_33066__$1;
(statearr_33081_33103[(2)] = inst_33058);

(statearr_33081_33103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (8))){
var inst_33048 = (state_33066[(7)]);
var state_33066__$1 = state_33066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33066__$1,(11),out,inst_33048);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23057__auto___33093,out))
;
return ((function (switch__22992__auto__,c__23057__auto___33093,out){
return (function() {
var cljs$core$async$state_machine__22993__auto__ = null;
var cljs$core$async$state_machine__22993__auto____0 = (function (){
var statearr_33085 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33085[(0)] = cljs$core$async$state_machine__22993__auto__);

(statearr_33085[(1)] = (1));

return statearr_33085;
});
var cljs$core$async$state_machine__22993__auto____1 = (function (state_33066){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_33066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e33086){if((e33086 instanceof Object)){
var ex__22996__auto__ = e33086;
var statearr_33087_33104 = state_33066;
(statearr_33087_33104[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33105 = state_33066;
state_33066 = G__33105;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
cljs$core$async$state_machine__22993__auto__ = function(state_33066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22993__auto____1.call(this,state_33066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22993__auto____0;
cljs$core$async$state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22993__auto____1;
return cljs$core$async$state_machine__22993__auto__;
})()
;})(switch__22992__auto__,c__23057__auto___33093,out))
})();
var state__23059__auto__ = (function (){var statearr_33088 = f__23058__auto__.call(null);
(statearr_33088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto___33093);

return statearr_33088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(c__23057__auto___33093,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33113 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33113 = (function (map_LT_,f,ch,meta33114){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33114 = meta33114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33115,meta33114__$1){
var self__ = this;
var _33115__$1 = this;
return (new cljs.core.async.t_cljs$core$async33113(self__.map_LT_,self__.f,self__.ch,meta33114__$1));
});

cljs.core.async.t_cljs$core$async33113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33115){
var self__ = this;
var _33115__$1 = this;
return self__.meta33114;
});

cljs.core.async.t_cljs$core$async33113.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33113.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33113.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33113.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33113.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33116 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33116 = (function (map_LT_,f,ch,meta33114,_,fn1,meta33117){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33114 = meta33114;
this._ = _;
this.fn1 = fn1;
this.meta33117 = meta33117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33118,meta33117__$1){
var self__ = this;
var _33118__$1 = this;
return (new cljs.core.async.t_cljs$core$async33116(self__.map_LT_,self__.f,self__.ch,self__.meta33114,self__._,self__.fn1,meta33117__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33116.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33118){
var self__ = this;
var _33118__$1 = this;
return self__.meta33117;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33116.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33106_SHARP_){
return f1.call(null,(((p1__33106_SHARP_ == null))?null:self__.f.call(null,p1__33106_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33116.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33114","meta33114",-472242126,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33113","cljs.core.async/t_cljs$core$async33113",1195857482,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33117","meta33117",2128210804,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33116.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33116";

cljs.core.async.t_cljs$core$async33116.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"cljs.core.async/t_cljs$core$async33116");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33116 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33116(map_LT___$1,f__$1,ch__$1,meta33114__$1,___$2,fn1__$1,meta33117){
return (new cljs.core.async.t_cljs$core$async33116(map_LT___$1,f__$1,ch__$1,meta33114__$1,___$2,fn1__$1,meta33117));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33116(self__.map_LT_,self__.f,self__.ch,self__.meta33114,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16062__auto__ = ret;
if(cljs.core.truth_(and__16062__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16062__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33113.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33113.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33114","meta33114",-472242126,null)], null);
});

cljs.core.async.t_cljs$core$async33113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33113";

cljs.core.async.t_cljs$core$async33113.cljs$lang$ctorPrWriter = (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"cljs.core.async/t_cljs$core$async33113");
});

cljs.core.async.__GT_t_cljs$core$async33113 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33113(map_LT___$1,f__$1,ch__$1,meta33114){
return (new cljs.core.async.t_cljs$core$async33113(map_LT___$1,f__$1,ch__$1,meta33114));
});

}

return (new cljs.core.async.t_cljs$core$async33113(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33122 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33122 = (function (map_GT_,f,ch,meta33123){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta33123 = meta33123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33124,meta33123__$1){
var self__ = this;
var _33124__$1 = this;
return (new cljs.core.async.t_cljs$core$async33122(self__.map_GT_,self__.f,self__.ch,meta33123__$1));
});

cljs.core.async.t_cljs$core$async33122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33124){
var self__ = this;
var _33124__$1 = this;
return self__.meta33123;
});

cljs.core.async.t_cljs$core$async33122.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33122.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33122.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33122.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33122.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33122.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33123","meta33123",1044716050,null)], null);
});

cljs.core.async.t_cljs$core$async33122.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33122";

cljs.core.async.t_cljs$core$async33122.cljs$lang$ctorPrWriter = (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"cljs.core.async/t_cljs$core$async33122");
});

cljs.core.async.__GT_t_cljs$core$async33122 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33122(map_GT___$1,f__$1,ch__$1,meta33123){
return (new cljs.core.async.t_cljs$core$async33122(map_GT___$1,f__$1,ch__$1,meta33123));
});

}

return (new cljs.core.async.t_cljs$core$async33122(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33128 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33128 = (function (filter_GT_,p,ch,meta33129){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta33129 = meta33129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33130,meta33129__$1){
var self__ = this;
var _33130__$1 = this;
return (new cljs.core.async.t_cljs$core$async33128(self__.filter_GT_,self__.p,self__.ch,meta33129__$1));
});

cljs.core.async.t_cljs$core$async33128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33130){
var self__ = this;
var _33130__$1 = this;
return self__.meta33129;
});

cljs.core.async.t_cljs$core$async33128.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33128.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33128.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33128.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33128.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33128.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33128.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33129","meta33129",768710256,null)], null);
});

cljs.core.async.t_cljs$core$async33128.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33128";

cljs.core.async.t_cljs$core$async33128.cljs$lang$ctorPrWriter = (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"cljs.core.async/t_cljs$core$async33128");
});

cljs.core.async.__GT_t_cljs$core$async33128 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33128(filter_GT___$1,p__$1,ch__$1,meta33129){
return (new cljs.core.async.t_cljs$core$async33128(filter_GT___$1,p__$1,ch__$1,meta33129));
});

}

return (new cljs.core.async.t_cljs$core$async33128(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args33131 = [];
var len__17132__auto___33175 = arguments.length;
var i__17133__auto___33176 = (0);
while(true){
if((i__17133__auto___33176 < len__17132__auto___33175)){
args33131.push((arguments[i__17133__auto___33176]));

var G__33177 = (i__17133__auto___33176 + (1));
i__17133__auto___33176 = G__33177;
continue;
} else {
}
break;
}

var G__33133 = args33131.length;
switch (G__33133) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33131.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23057__auto___33179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23057__auto___33179,out){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (c__23057__auto___33179,out){
return (function (state_33154){
var state_val_33155 = (state_33154[(1)]);
if((state_val_33155 === (7))){
var inst_33150 = (state_33154[(2)]);
var state_33154__$1 = state_33154;
var statearr_33156_33180 = state_33154__$1;
(statearr_33156_33180[(2)] = inst_33150);

(statearr_33156_33180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33155 === (1))){
var state_33154__$1 = state_33154;
var statearr_33157_33181 = state_33154__$1;
(statearr_33157_33181[(2)] = null);

(statearr_33157_33181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33155 === (4))){
var inst_33136 = (state_33154[(7)]);
var inst_33136__$1 = (state_33154[(2)]);
var inst_33137 = (inst_33136__$1 == null);
var state_33154__$1 = (function (){var statearr_33158 = state_33154;
(statearr_33158[(7)] = inst_33136__$1);

return statearr_33158;
})();
if(cljs.core.truth_(inst_33137)){
var statearr_33159_33182 = state_33154__$1;
(statearr_33159_33182[(1)] = (5));

} else {
var statearr_33160_33183 = state_33154__$1;
(statearr_33160_33183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33155 === (6))){
var inst_33136 = (state_33154[(7)]);
var inst_33141 = p.call(null,inst_33136);
var state_33154__$1 = state_33154;
if(cljs.core.truth_(inst_33141)){
var statearr_33161_33184 = state_33154__$1;
(statearr_33161_33184[(1)] = (8));

} else {
var statearr_33162_33185 = state_33154__$1;
(statearr_33162_33185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33155 === (3))){
var inst_33152 = (state_33154[(2)]);
var state_33154__$1 = state_33154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33154__$1,inst_33152);
} else {
if((state_val_33155 === (2))){
var state_33154__$1 = state_33154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33154__$1,(4),ch);
} else {
if((state_val_33155 === (11))){
var inst_33144 = (state_33154[(2)]);
var state_33154__$1 = state_33154;
var statearr_33163_33186 = state_33154__$1;
(statearr_33163_33186[(2)] = inst_33144);

(statearr_33163_33186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33155 === (9))){
var state_33154__$1 = state_33154;
var statearr_33164_33187 = state_33154__$1;
(statearr_33164_33187[(2)] = null);

(statearr_33164_33187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33155 === (5))){
var inst_33139 = cljs.core.async.close_BANG_.call(null,out);
var state_33154__$1 = state_33154;
var statearr_33165_33188 = state_33154__$1;
(statearr_33165_33188[(2)] = inst_33139);

(statearr_33165_33188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33155 === (10))){
var inst_33147 = (state_33154[(2)]);
var state_33154__$1 = (function (){var statearr_33166 = state_33154;
(statearr_33166[(8)] = inst_33147);

return statearr_33166;
})();
var statearr_33167_33189 = state_33154__$1;
(statearr_33167_33189[(2)] = null);

(statearr_33167_33189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33155 === (8))){
var inst_33136 = (state_33154[(7)]);
var state_33154__$1 = state_33154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33154__$1,(11),out,inst_33136);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23057__auto___33179,out))
;
return ((function (switch__22992__auto__,c__23057__auto___33179,out){
return (function() {
var cljs$core$async$state_machine__22993__auto__ = null;
var cljs$core$async$state_machine__22993__auto____0 = (function (){
var statearr_33171 = [null,null,null,null,null,null,null,null,null];
(statearr_33171[(0)] = cljs$core$async$state_machine__22993__auto__);

(statearr_33171[(1)] = (1));

return statearr_33171;
});
var cljs$core$async$state_machine__22993__auto____1 = (function (state_33154){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_33154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e33172){if((e33172 instanceof Object)){
var ex__22996__auto__ = e33172;
var statearr_33173_33190 = state_33154;
(statearr_33173_33190[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33191 = state_33154;
state_33154 = G__33191;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
cljs$core$async$state_machine__22993__auto__ = function(state_33154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22993__auto____1.call(this,state_33154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22993__auto____0;
cljs$core$async$state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22993__auto____1;
return cljs$core$async$state_machine__22993__auto__;
})()
;})(switch__22992__auto__,c__23057__auto___33179,out))
})();
var state__23059__auto__ = (function (){var statearr_33174 = f__23058__auto__.call(null);
(statearr_33174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto___33179);

return statearr_33174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(c__23057__auto___33179,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args33192 = [];
var len__17132__auto___33195 = arguments.length;
var i__17133__auto___33196 = (0);
while(true){
if((i__17133__auto___33196 < len__17132__auto___33195)){
args33192.push((arguments[i__17133__auto___33196]));

var G__33197 = (i__17133__auto___33196 + (1));
i__17133__auto___33196 = G__33197;
continue;
} else {
}
break;
}

var G__33194 = args33192.length;
switch (G__33194) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33192.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23057__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23057__auto__){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (c__23057__auto__){
return (function (state_33364){
var state_val_33365 = (state_33364[(1)]);
if((state_val_33365 === (7))){
var inst_33360 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
var statearr_33366_33407 = state_33364__$1;
(statearr_33366_33407[(2)] = inst_33360);

(statearr_33366_33407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (20))){
var inst_33330 = (state_33364[(7)]);
var inst_33341 = (state_33364[(2)]);
var inst_33342 = cljs.core.next.call(null,inst_33330);
var inst_33316 = inst_33342;
var inst_33317 = null;
var inst_33318 = (0);
var inst_33319 = (0);
var state_33364__$1 = (function (){var statearr_33367 = state_33364;
(statearr_33367[(8)] = inst_33317);

(statearr_33367[(9)] = inst_33318);

(statearr_33367[(10)] = inst_33319);

(statearr_33367[(11)] = inst_33341);

(statearr_33367[(12)] = inst_33316);

return statearr_33367;
})();
var statearr_33368_33408 = state_33364__$1;
(statearr_33368_33408[(2)] = null);

(statearr_33368_33408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (1))){
var state_33364__$1 = state_33364;
var statearr_33369_33409 = state_33364__$1;
(statearr_33369_33409[(2)] = null);

(statearr_33369_33409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (4))){
var inst_33305 = (state_33364[(13)]);
var inst_33305__$1 = (state_33364[(2)]);
var inst_33306 = (inst_33305__$1 == null);
var state_33364__$1 = (function (){var statearr_33370 = state_33364;
(statearr_33370[(13)] = inst_33305__$1);

return statearr_33370;
})();
if(cljs.core.truth_(inst_33306)){
var statearr_33371_33410 = state_33364__$1;
(statearr_33371_33410[(1)] = (5));

} else {
var statearr_33372_33411 = state_33364__$1;
(statearr_33372_33411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (15))){
var state_33364__$1 = state_33364;
var statearr_33376_33412 = state_33364__$1;
(statearr_33376_33412[(2)] = null);

(statearr_33376_33412[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (21))){
var state_33364__$1 = state_33364;
var statearr_33377_33413 = state_33364__$1;
(statearr_33377_33413[(2)] = null);

(statearr_33377_33413[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (13))){
var inst_33317 = (state_33364[(8)]);
var inst_33318 = (state_33364[(9)]);
var inst_33319 = (state_33364[(10)]);
var inst_33316 = (state_33364[(12)]);
var inst_33326 = (state_33364[(2)]);
var inst_33327 = (inst_33319 + (1));
var tmp33373 = inst_33317;
var tmp33374 = inst_33318;
var tmp33375 = inst_33316;
var inst_33316__$1 = tmp33375;
var inst_33317__$1 = tmp33373;
var inst_33318__$1 = tmp33374;
var inst_33319__$1 = inst_33327;
var state_33364__$1 = (function (){var statearr_33378 = state_33364;
(statearr_33378[(8)] = inst_33317__$1);

(statearr_33378[(9)] = inst_33318__$1);

(statearr_33378[(10)] = inst_33319__$1);

(statearr_33378[(12)] = inst_33316__$1);

(statearr_33378[(14)] = inst_33326);

return statearr_33378;
})();
var statearr_33379_33414 = state_33364__$1;
(statearr_33379_33414[(2)] = null);

(statearr_33379_33414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (22))){
var state_33364__$1 = state_33364;
var statearr_33380_33415 = state_33364__$1;
(statearr_33380_33415[(2)] = null);

(statearr_33380_33415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (6))){
var inst_33305 = (state_33364[(13)]);
var inst_33314 = f.call(null,inst_33305);
var inst_33315 = cljs.core.seq.call(null,inst_33314);
var inst_33316 = inst_33315;
var inst_33317 = null;
var inst_33318 = (0);
var inst_33319 = (0);
var state_33364__$1 = (function (){var statearr_33381 = state_33364;
(statearr_33381[(8)] = inst_33317);

(statearr_33381[(9)] = inst_33318);

(statearr_33381[(10)] = inst_33319);

(statearr_33381[(12)] = inst_33316);

return statearr_33381;
})();
var statearr_33382_33416 = state_33364__$1;
(statearr_33382_33416[(2)] = null);

(statearr_33382_33416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (17))){
var inst_33330 = (state_33364[(7)]);
var inst_33334 = cljs.core.chunk_first.call(null,inst_33330);
var inst_33335 = cljs.core.chunk_rest.call(null,inst_33330);
var inst_33336 = cljs.core.count.call(null,inst_33334);
var inst_33316 = inst_33335;
var inst_33317 = inst_33334;
var inst_33318 = inst_33336;
var inst_33319 = (0);
var state_33364__$1 = (function (){var statearr_33383 = state_33364;
(statearr_33383[(8)] = inst_33317);

(statearr_33383[(9)] = inst_33318);

(statearr_33383[(10)] = inst_33319);

(statearr_33383[(12)] = inst_33316);

return statearr_33383;
})();
var statearr_33384_33417 = state_33364__$1;
(statearr_33384_33417[(2)] = null);

(statearr_33384_33417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (3))){
var inst_33362 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33364__$1,inst_33362);
} else {
if((state_val_33365 === (12))){
var inst_33350 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
var statearr_33385_33418 = state_33364__$1;
(statearr_33385_33418[(2)] = inst_33350);

(statearr_33385_33418[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (2))){
var state_33364__$1 = state_33364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33364__$1,(4),in$);
} else {
if((state_val_33365 === (23))){
var inst_33358 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
var statearr_33386_33419 = state_33364__$1;
(statearr_33386_33419[(2)] = inst_33358);

(statearr_33386_33419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (19))){
var inst_33345 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
var statearr_33387_33420 = state_33364__$1;
(statearr_33387_33420[(2)] = inst_33345);

(statearr_33387_33420[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (11))){
var inst_33330 = (state_33364[(7)]);
var inst_33316 = (state_33364[(12)]);
var inst_33330__$1 = cljs.core.seq.call(null,inst_33316);
var state_33364__$1 = (function (){var statearr_33388 = state_33364;
(statearr_33388[(7)] = inst_33330__$1);

return statearr_33388;
})();
if(inst_33330__$1){
var statearr_33389_33421 = state_33364__$1;
(statearr_33389_33421[(1)] = (14));

} else {
var statearr_33390_33422 = state_33364__$1;
(statearr_33390_33422[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (9))){
var inst_33352 = (state_33364[(2)]);
var inst_33353 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33364__$1 = (function (){var statearr_33391 = state_33364;
(statearr_33391[(15)] = inst_33352);

return statearr_33391;
})();
if(cljs.core.truth_(inst_33353)){
var statearr_33392_33423 = state_33364__$1;
(statearr_33392_33423[(1)] = (21));

} else {
var statearr_33393_33424 = state_33364__$1;
(statearr_33393_33424[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (5))){
var inst_33308 = cljs.core.async.close_BANG_.call(null,out);
var state_33364__$1 = state_33364;
var statearr_33394_33425 = state_33364__$1;
(statearr_33394_33425[(2)] = inst_33308);

(statearr_33394_33425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (14))){
var inst_33330 = (state_33364[(7)]);
var inst_33332 = cljs.core.chunked_seq_QMARK_.call(null,inst_33330);
var state_33364__$1 = state_33364;
if(inst_33332){
var statearr_33395_33426 = state_33364__$1;
(statearr_33395_33426[(1)] = (17));

} else {
var statearr_33396_33427 = state_33364__$1;
(statearr_33396_33427[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (16))){
var inst_33348 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
var statearr_33397_33428 = state_33364__$1;
(statearr_33397_33428[(2)] = inst_33348);

(statearr_33397_33428[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (10))){
var inst_33317 = (state_33364[(8)]);
var inst_33319 = (state_33364[(10)]);
var inst_33324 = cljs.core._nth.call(null,inst_33317,inst_33319);
var state_33364__$1 = state_33364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33364__$1,(13),out,inst_33324);
} else {
if((state_val_33365 === (18))){
var inst_33330 = (state_33364[(7)]);
var inst_33339 = cljs.core.first.call(null,inst_33330);
var state_33364__$1 = state_33364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33364__$1,(20),out,inst_33339);
} else {
if((state_val_33365 === (8))){
var inst_33318 = (state_33364[(9)]);
var inst_33319 = (state_33364[(10)]);
var inst_33321 = (inst_33319 < inst_33318);
var inst_33322 = inst_33321;
var state_33364__$1 = state_33364;
if(cljs.core.truth_(inst_33322)){
var statearr_33398_33429 = state_33364__$1;
(statearr_33398_33429[(1)] = (10));

} else {
var statearr_33399_33430 = state_33364__$1;
(statearr_33399_33430[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23057__auto__))
;
return ((function (switch__22992__auto__,c__23057__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22993__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22993__auto____0 = (function (){
var statearr_33403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33403[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22993__auto__);

(statearr_33403[(1)] = (1));

return statearr_33403;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22993__auto____1 = (function (state_33364){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_33364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e33404){if((e33404 instanceof Object)){
var ex__22996__auto__ = e33404;
var statearr_33405_33431 = state_33364;
(statearr_33405_33431[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33432 = state_33364;
state_33364 = G__33432;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22993__auto__ = function(state_33364){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22993__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22993__auto____1.call(this,state_33364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22993__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22993__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22993__auto__;
})()
;})(switch__22992__auto__,c__23057__auto__))
})();
var state__23059__auto__ = (function (){var statearr_33406 = f__23058__auto__.call(null);
(statearr_33406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto__);

return statearr_33406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(c__23057__auto__))
);

return c__23057__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args33433 = [];
var len__17132__auto___33436 = arguments.length;
var i__17133__auto___33437 = (0);
while(true){
if((i__17133__auto___33437 < len__17132__auto___33436)){
args33433.push((arguments[i__17133__auto___33437]));

var G__33438 = (i__17133__auto___33437 + (1));
i__17133__auto___33437 = G__33438;
continue;
} else {
}
break;
}

var G__33435 = args33433.length;
switch (G__33435) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33433.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args33440 = [];
var len__17132__auto___33443 = arguments.length;
var i__17133__auto___33444 = (0);
while(true){
if((i__17133__auto___33444 < len__17132__auto___33443)){
args33440.push((arguments[i__17133__auto___33444]));

var G__33445 = (i__17133__auto___33444 + (1));
i__17133__auto___33444 = G__33445;
continue;
} else {
}
break;
}

var G__33442 = args33440.length;
switch (G__33442) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33440.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args33447 = [];
var len__17132__auto___33498 = arguments.length;
var i__17133__auto___33499 = (0);
while(true){
if((i__17133__auto___33499 < len__17132__auto___33498)){
args33447.push((arguments[i__17133__auto___33499]));

var G__33500 = (i__17133__auto___33499 + (1));
i__17133__auto___33499 = G__33500;
continue;
} else {
}
break;
}

var G__33449 = args33447.length;
switch (G__33449) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33447.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23057__auto___33502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23057__auto___33502,out){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (c__23057__auto___33502,out){
return (function (state_33473){
var state_val_33474 = (state_33473[(1)]);
if((state_val_33474 === (7))){
var inst_33468 = (state_33473[(2)]);
var state_33473__$1 = state_33473;
var statearr_33475_33503 = state_33473__$1;
(statearr_33475_33503[(2)] = inst_33468);

(statearr_33475_33503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (1))){
var inst_33450 = null;
var state_33473__$1 = (function (){var statearr_33476 = state_33473;
(statearr_33476[(7)] = inst_33450);

return statearr_33476;
})();
var statearr_33477_33504 = state_33473__$1;
(statearr_33477_33504[(2)] = null);

(statearr_33477_33504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (4))){
var inst_33453 = (state_33473[(8)]);
var inst_33453__$1 = (state_33473[(2)]);
var inst_33454 = (inst_33453__$1 == null);
var inst_33455 = cljs.core.not.call(null,inst_33454);
var state_33473__$1 = (function (){var statearr_33478 = state_33473;
(statearr_33478[(8)] = inst_33453__$1);

return statearr_33478;
})();
if(inst_33455){
var statearr_33479_33505 = state_33473__$1;
(statearr_33479_33505[(1)] = (5));

} else {
var statearr_33480_33506 = state_33473__$1;
(statearr_33480_33506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (6))){
var state_33473__$1 = state_33473;
var statearr_33481_33507 = state_33473__$1;
(statearr_33481_33507[(2)] = null);

(statearr_33481_33507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (3))){
var inst_33470 = (state_33473[(2)]);
var inst_33471 = cljs.core.async.close_BANG_.call(null,out);
var state_33473__$1 = (function (){var statearr_33482 = state_33473;
(statearr_33482[(9)] = inst_33470);

return statearr_33482;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33473__$1,inst_33471);
} else {
if((state_val_33474 === (2))){
var state_33473__$1 = state_33473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33473__$1,(4),ch);
} else {
if((state_val_33474 === (11))){
var inst_33453 = (state_33473[(8)]);
var inst_33462 = (state_33473[(2)]);
var inst_33450 = inst_33453;
var state_33473__$1 = (function (){var statearr_33483 = state_33473;
(statearr_33483[(7)] = inst_33450);

(statearr_33483[(10)] = inst_33462);

return statearr_33483;
})();
var statearr_33484_33508 = state_33473__$1;
(statearr_33484_33508[(2)] = null);

(statearr_33484_33508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (9))){
var inst_33453 = (state_33473[(8)]);
var state_33473__$1 = state_33473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33473__$1,(11),out,inst_33453);
} else {
if((state_val_33474 === (5))){
var inst_33450 = (state_33473[(7)]);
var inst_33453 = (state_33473[(8)]);
var inst_33457 = cljs.core._EQ_.call(null,inst_33453,inst_33450);
var state_33473__$1 = state_33473;
if(inst_33457){
var statearr_33486_33509 = state_33473__$1;
(statearr_33486_33509[(1)] = (8));

} else {
var statearr_33487_33510 = state_33473__$1;
(statearr_33487_33510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (10))){
var inst_33465 = (state_33473[(2)]);
var state_33473__$1 = state_33473;
var statearr_33488_33511 = state_33473__$1;
(statearr_33488_33511[(2)] = inst_33465);

(statearr_33488_33511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (8))){
var inst_33450 = (state_33473[(7)]);
var tmp33485 = inst_33450;
var inst_33450__$1 = tmp33485;
var state_33473__$1 = (function (){var statearr_33489 = state_33473;
(statearr_33489[(7)] = inst_33450__$1);

return statearr_33489;
})();
var statearr_33490_33512 = state_33473__$1;
(statearr_33490_33512[(2)] = null);

(statearr_33490_33512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23057__auto___33502,out))
;
return ((function (switch__22992__auto__,c__23057__auto___33502,out){
return (function() {
var cljs$core$async$state_machine__22993__auto__ = null;
var cljs$core$async$state_machine__22993__auto____0 = (function (){
var statearr_33494 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33494[(0)] = cljs$core$async$state_machine__22993__auto__);

(statearr_33494[(1)] = (1));

return statearr_33494;
});
var cljs$core$async$state_machine__22993__auto____1 = (function (state_33473){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_33473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e33495){if((e33495 instanceof Object)){
var ex__22996__auto__ = e33495;
var statearr_33496_33513 = state_33473;
(statearr_33496_33513[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33514 = state_33473;
state_33473 = G__33514;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
cljs$core$async$state_machine__22993__auto__ = function(state_33473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22993__auto____1.call(this,state_33473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22993__auto____0;
cljs$core$async$state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22993__auto____1;
return cljs$core$async$state_machine__22993__auto__;
})()
;})(switch__22992__auto__,c__23057__auto___33502,out))
})();
var state__23059__auto__ = (function (){var statearr_33497 = f__23058__auto__.call(null);
(statearr_33497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto___33502);

return statearr_33497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(c__23057__auto___33502,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args33515 = [];
var len__17132__auto___33585 = arguments.length;
var i__17133__auto___33586 = (0);
while(true){
if((i__17133__auto___33586 < len__17132__auto___33585)){
args33515.push((arguments[i__17133__auto___33586]));

var G__33587 = (i__17133__auto___33586 + (1));
i__17133__auto___33586 = G__33587;
continue;
} else {
}
break;
}

var G__33517 = args33515.length;
switch (G__33517) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33515.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23057__auto___33589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23057__auto___33589,out){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (c__23057__auto___33589,out){
return (function (state_33555){
var state_val_33556 = (state_33555[(1)]);
if((state_val_33556 === (7))){
var inst_33551 = (state_33555[(2)]);
var state_33555__$1 = state_33555;
var statearr_33557_33590 = state_33555__$1;
(statearr_33557_33590[(2)] = inst_33551);

(statearr_33557_33590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33556 === (1))){
var inst_33518 = (new Array(n));
var inst_33519 = inst_33518;
var inst_33520 = (0);
var state_33555__$1 = (function (){var statearr_33558 = state_33555;
(statearr_33558[(7)] = inst_33519);

(statearr_33558[(8)] = inst_33520);

return statearr_33558;
})();
var statearr_33559_33591 = state_33555__$1;
(statearr_33559_33591[(2)] = null);

(statearr_33559_33591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33556 === (4))){
var inst_33523 = (state_33555[(9)]);
var inst_33523__$1 = (state_33555[(2)]);
var inst_33524 = (inst_33523__$1 == null);
var inst_33525 = cljs.core.not.call(null,inst_33524);
var state_33555__$1 = (function (){var statearr_33560 = state_33555;
(statearr_33560[(9)] = inst_33523__$1);

return statearr_33560;
})();
if(inst_33525){
var statearr_33561_33592 = state_33555__$1;
(statearr_33561_33592[(1)] = (5));

} else {
var statearr_33562_33593 = state_33555__$1;
(statearr_33562_33593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33556 === (15))){
var inst_33545 = (state_33555[(2)]);
var state_33555__$1 = state_33555;
var statearr_33563_33594 = state_33555__$1;
(statearr_33563_33594[(2)] = inst_33545);

(statearr_33563_33594[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33556 === (13))){
var state_33555__$1 = state_33555;
var statearr_33564_33595 = state_33555__$1;
(statearr_33564_33595[(2)] = null);

(statearr_33564_33595[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33556 === (6))){
var inst_33520 = (state_33555[(8)]);
var inst_33541 = (inst_33520 > (0));
var state_33555__$1 = state_33555;
if(cljs.core.truth_(inst_33541)){
var statearr_33565_33596 = state_33555__$1;
(statearr_33565_33596[(1)] = (12));

} else {
var statearr_33566_33597 = state_33555__$1;
(statearr_33566_33597[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33556 === (3))){
var inst_33553 = (state_33555[(2)]);
var state_33555__$1 = state_33555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33555__$1,inst_33553);
} else {
if((state_val_33556 === (12))){
var inst_33519 = (state_33555[(7)]);
var inst_33543 = cljs.core.vec.call(null,inst_33519);
var state_33555__$1 = state_33555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33555__$1,(15),out,inst_33543);
} else {
if((state_val_33556 === (2))){
var state_33555__$1 = state_33555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33555__$1,(4),ch);
} else {
if((state_val_33556 === (11))){
var inst_33535 = (state_33555[(2)]);
var inst_33536 = (new Array(n));
var inst_33519 = inst_33536;
var inst_33520 = (0);
var state_33555__$1 = (function (){var statearr_33567 = state_33555;
(statearr_33567[(7)] = inst_33519);

(statearr_33567[(10)] = inst_33535);

(statearr_33567[(8)] = inst_33520);

return statearr_33567;
})();
var statearr_33568_33598 = state_33555__$1;
(statearr_33568_33598[(2)] = null);

(statearr_33568_33598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33556 === (9))){
var inst_33519 = (state_33555[(7)]);
var inst_33533 = cljs.core.vec.call(null,inst_33519);
var state_33555__$1 = state_33555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33555__$1,(11),out,inst_33533);
} else {
if((state_val_33556 === (5))){
var inst_33519 = (state_33555[(7)]);
var inst_33523 = (state_33555[(9)]);
var inst_33528 = (state_33555[(11)]);
var inst_33520 = (state_33555[(8)]);
var inst_33527 = (inst_33519[inst_33520] = inst_33523);
var inst_33528__$1 = (inst_33520 + (1));
var inst_33529 = (inst_33528__$1 < n);
var state_33555__$1 = (function (){var statearr_33569 = state_33555;
(statearr_33569[(12)] = inst_33527);

(statearr_33569[(11)] = inst_33528__$1);

return statearr_33569;
})();
if(cljs.core.truth_(inst_33529)){
var statearr_33570_33599 = state_33555__$1;
(statearr_33570_33599[(1)] = (8));

} else {
var statearr_33571_33600 = state_33555__$1;
(statearr_33571_33600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33556 === (14))){
var inst_33548 = (state_33555[(2)]);
var inst_33549 = cljs.core.async.close_BANG_.call(null,out);
var state_33555__$1 = (function (){var statearr_33573 = state_33555;
(statearr_33573[(13)] = inst_33548);

return statearr_33573;
})();
var statearr_33574_33601 = state_33555__$1;
(statearr_33574_33601[(2)] = inst_33549);

(statearr_33574_33601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33556 === (10))){
var inst_33539 = (state_33555[(2)]);
var state_33555__$1 = state_33555;
var statearr_33575_33602 = state_33555__$1;
(statearr_33575_33602[(2)] = inst_33539);

(statearr_33575_33602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33556 === (8))){
var inst_33519 = (state_33555[(7)]);
var inst_33528 = (state_33555[(11)]);
var tmp33572 = inst_33519;
var inst_33519__$1 = tmp33572;
var inst_33520 = inst_33528;
var state_33555__$1 = (function (){var statearr_33576 = state_33555;
(statearr_33576[(7)] = inst_33519__$1);

(statearr_33576[(8)] = inst_33520);

return statearr_33576;
})();
var statearr_33577_33603 = state_33555__$1;
(statearr_33577_33603[(2)] = null);

(statearr_33577_33603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23057__auto___33589,out))
;
return ((function (switch__22992__auto__,c__23057__auto___33589,out){
return (function() {
var cljs$core$async$state_machine__22993__auto__ = null;
var cljs$core$async$state_machine__22993__auto____0 = (function (){
var statearr_33581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33581[(0)] = cljs$core$async$state_machine__22993__auto__);

(statearr_33581[(1)] = (1));

return statearr_33581;
});
var cljs$core$async$state_machine__22993__auto____1 = (function (state_33555){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_33555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e33582){if((e33582 instanceof Object)){
var ex__22996__auto__ = e33582;
var statearr_33583_33604 = state_33555;
(statearr_33583_33604[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33605 = state_33555;
state_33555 = G__33605;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
cljs$core$async$state_machine__22993__auto__ = function(state_33555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22993__auto____1.call(this,state_33555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22993__auto____0;
cljs$core$async$state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22993__auto____1;
return cljs$core$async$state_machine__22993__auto__;
})()
;})(switch__22992__auto__,c__23057__auto___33589,out))
})();
var state__23059__auto__ = (function (){var statearr_33584 = f__23058__auto__.call(null);
(statearr_33584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto___33589);

return statearr_33584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(c__23057__auto___33589,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33606 = [];
var len__17132__auto___33680 = arguments.length;
var i__17133__auto___33681 = (0);
while(true){
if((i__17133__auto___33681 < len__17132__auto___33680)){
args33606.push((arguments[i__17133__auto___33681]));

var G__33682 = (i__17133__auto___33681 + (1));
i__17133__auto___33681 = G__33682;
continue;
} else {
}
break;
}

var G__33608 = args33606.length;
switch (G__33608) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33606.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23057__auto___33684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23057__auto___33684,out){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (c__23057__auto___33684,out){
return (function (state_33650){
var state_val_33651 = (state_33650[(1)]);
if((state_val_33651 === (7))){
var inst_33646 = (state_33650[(2)]);
var state_33650__$1 = state_33650;
var statearr_33652_33685 = state_33650__$1;
(statearr_33652_33685[(2)] = inst_33646);

(statearr_33652_33685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (1))){
var inst_33609 = [];
var inst_33610 = inst_33609;
var inst_33611 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33650__$1 = (function (){var statearr_33653 = state_33650;
(statearr_33653[(7)] = inst_33610);

(statearr_33653[(8)] = inst_33611);

return statearr_33653;
})();
var statearr_33654_33686 = state_33650__$1;
(statearr_33654_33686[(2)] = null);

(statearr_33654_33686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (4))){
var inst_33614 = (state_33650[(9)]);
var inst_33614__$1 = (state_33650[(2)]);
var inst_33615 = (inst_33614__$1 == null);
var inst_33616 = cljs.core.not.call(null,inst_33615);
var state_33650__$1 = (function (){var statearr_33655 = state_33650;
(statearr_33655[(9)] = inst_33614__$1);

return statearr_33655;
})();
if(inst_33616){
var statearr_33656_33687 = state_33650__$1;
(statearr_33656_33687[(1)] = (5));

} else {
var statearr_33657_33688 = state_33650__$1;
(statearr_33657_33688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (15))){
var inst_33640 = (state_33650[(2)]);
var state_33650__$1 = state_33650;
var statearr_33658_33689 = state_33650__$1;
(statearr_33658_33689[(2)] = inst_33640);

(statearr_33658_33689[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (13))){
var state_33650__$1 = state_33650;
var statearr_33659_33690 = state_33650__$1;
(statearr_33659_33690[(2)] = null);

(statearr_33659_33690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (6))){
var inst_33610 = (state_33650[(7)]);
var inst_33635 = inst_33610.length;
var inst_33636 = (inst_33635 > (0));
var state_33650__$1 = state_33650;
if(cljs.core.truth_(inst_33636)){
var statearr_33660_33691 = state_33650__$1;
(statearr_33660_33691[(1)] = (12));

} else {
var statearr_33661_33692 = state_33650__$1;
(statearr_33661_33692[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (3))){
var inst_33648 = (state_33650[(2)]);
var state_33650__$1 = state_33650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33650__$1,inst_33648);
} else {
if((state_val_33651 === (12))){
var inst_33610 = (state_33650[(7)]);
var inst_33638 = cljs.core.vec.call(null,inst_33610);
var state_33650__$1 = state_33650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33650__$1,(15),out,inst_33638);
} else {
if((state_val_33651 === (2))){
var state_33650__$1 = state_33650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33650__$1,(4),ch);
} else {
if((state_val_33651 === (11))){
var inst_33614 = (state_33650[(9)]);
var inst_33618 = (state_33650[(10)]);
var inst_33628 = (state_33650[(2)]);
var inst_33629 = [];
var inst_33630 = inst_33629.push(inst_33614);
var inst_33610 = inst_33629;
var inst_33611 = inst_33618;
var state_33650__$1 = (function (){var statearr_33662 = state_33650;
(statearr_33662[(7)] = inst_33610);

(statearr_33662[(8)] = inst_33611);

(statearr_33662[(11)] = inst_33628);

(statearr_33662[(12)] = inst_33630);

return statearr_33662;
})();
var statearr_33663_33693 = state_33650__$1;
(statearr_33663_33693[(2)] = null);

(statearr_33663_33693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (9))){
var inst_33610 = (state_33650[(7)]);
var inst_33626 = cljs.core.vec.call(null,inst_33610);
var state_33650__$1 = state_33650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33650__$1,(11),out,inst_33626);
} else {
if((state_val_33651 === (5))){
var inst_33611 = (state_33650[(8)]);
var inst_33614 = (state_33650[(9)]);
var inst_33618 = (state_33650[(10)]);
var inst_33618__$1 = f.call(null,inst_33614);
var inst_33619 = cljs.core._EQ_.call(null,inst_33618__$1,inst_33611);
var inst_33620 = cljs.core.keyword_identical_QMARK_.call(null,inst_33611,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33621 = (inst_33619) || (inst_33620);
var state_33650__$1 = (function (){var statearr_33664 = state_33650;
(statearr_33664[(10)] = inst_33618__$1);

return statearr_33664;
})();
if(cljs.core.truth_(inst_33621)){
var statearr_33665_33694 = state_33650__$1;
(statearr_33665_33694[(1)] = (8));

} else {
var statearr_33666_33695 = state_33650__$1;
(statearr_33666_33695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (14))){
var inst_33643 = (state_33650[(2)]);
var inst_33644 = cljs.core.async.close_BANG_.call(null,out);
var state_33650__$1 = (function (){var statearr_33668 = state_33650;
(statearr_33668[(13)] = inst_33643);

return statearr_33668;
})();
var statearr_33669_33696 = state_33650__$1;
(statearr_33669_33696[(2)] = inst_33644);

(statearr_33669_33696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (10))){
var inst_33633 = (state_33650[(2)]);
var state_33650__$1 = state_33650;
var statearr_33670_33697 = state_33650__$1;
(statearr_33670_33697[(2)] = inst_33633);

(statearr_33670_33697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33651 === (8))){
var inst_33610 = (state_33650[(7)]);
var inst_33614 = (state_33650[(9)]);
var inst_33618 = (state_33650[(10)]);
var inst_33623 = inst_33610.push(inst_33614);
var tmp33667 = inst_33610;
var inst_33610__$1 = tmp33667;
var inst_33611 = inst_33618;
var state_33650__$1 = (function (){var statearr_33671 = state_33650;
(statearr_33671[(7)] = inst_33610__$1);

(statearr_33671[(8)] = inst_33611);

(statearr_33671[(14)] = inst_33623);

return statearr_33671;
})();
var statearr_33672_33698 = state_33650__$1;
(statearr_33672_33698[(2)] = null);

(statearr_33672_33698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23057__auto___33684,out))
;
return ((function (switch__22992__auto__,c__23057__auto___33684,out){
return (function() {
var cljs$core$async$state_machine__22993__auto__ = null;
var cljs$core$async$state_machine__22993__auto____0 = (function (){
var statearr_33676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33676[(0)] = cljs$core$async$state_machine__22993__auto__);

(statearr_33676[(1)] = (1));

return statearr_33676;
});
var cljs$core$async$state_machine__22993__auto____1 = (function (state_33650){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_33650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e33677){if((e33677 instanceof Object)){
var ex__22996__auto__ = e33677;
var statearr_33678_33699 = state_33650;
(statearr_33678_33699[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33700 = state_33650;
state_33650 = G__33700;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
cljs$core$async$state_machine__22993__auto__ = function(state_33650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22993__auto____1.call(this,state_33650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22993__auto____0;
cljs$core$async$state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22993__auto____1;
return cljs$core$async$state_machine__22993__auto__;
})()
;})(switch__22992__auto__,c__23057__auto___33684,out))
})();
var state__23059__auto__ = (function (){var statearr_33679 = f__23058__auto__.call(null);
(statearr_33679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto___33684);

return statearr_33679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(c__23057__auto___33684,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1447113464730