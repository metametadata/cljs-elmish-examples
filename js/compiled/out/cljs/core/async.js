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
if(typeof cljs.core.async.t_cljs$core$async31150 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31150 = (function (fn_handler,f,meta31151){
this.fn_handler = fn_handler;
this.f = f;
this.meta31151 = meta31151;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31152,meta31151__$1){
var self__ = this;
var _31152__$1 = this;
return (new cljs.core.async.t_cljs$core$async31150(self__.fn_handler,self__.f,meta31151__$1));
});

cljs.core.async.t_cljs$core$async31150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31152){
var self__ = this;
var _31152__$1 = this;
return self__.meta31151;
});

cljs.core.async.t_cljs$core$async31150.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31150.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31150.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31150.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta31151","meta31151",1168511302,null)], null);
});

cljs.core.async.t_cljs$core$async31150.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31150.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31150";

cljs.core.async.t_cljs$core$async31150.cljs$lang$ctorPrWriter = (function (this__16711__auto__,writer__16712__auto__,opt__16713__auto__){
return cljs.core._write.call(null,writer__16712__auto__,"cljs.core.async/t_cljs$core$async31150");
});

cljs.core.async.__GT_t_cljs$core$async31150 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async31150(fn_handler__$1,f__$1,meta31151){
return (new cljs.core.async.t_cljs$core$async31150(fn_handler__$1,f__$1,meta31151));
});

}

return (new cljs.core.async.t_cljs$core$async31150(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args31155 = [];
var len__17171__auto___31158 = arguments.length;
var i__17172__auto___31159 = (0);
while(true){
if((i__17172__auto___31159 < len__17171__auto___31158)){
args31155.push((arguments[i__17172__auto___31159]));

var G__31160 = (i__17172__auto___31159 + (1));
i__17172__auto___31159 = G__31160;
continue;
} else {
}
break;
}

var G__31157 = args31155.length;
switch (G__31157) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31155.length)].join('')));

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
var args31162 = [];
var len__17171__auto___31165 = arguments.length;
var i__17172__auto___31166 = (0);
while(true){
if((i__17172__auto___31166 < len__17171__auto___31165)){
args31162.push((arguments[i__17172__auto___31166]));

var G__31167 = (i__17172__auto___31166 + (1));
i__17172__auto___31166 = G__31167;
continue;
} else {
}
break;
}

var G__31164 = args31162.length;
switch (G__31164) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31162.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31169 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31169);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31169,ret){
return (function (){
return fn1.call(null,val_31169);
});})(val_31169,ret))
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
var args31170 = [];
var len__17171__auto___31173 = arguments.length;
var i__17172__auto___31174 = (0);
while(true){
if((i__17172__auto___31174 < len__17171__auto___31173)){
args31170.push((arguments[i__17172__auto___31174]));

var G__31175 = (i__17172__auto___31174 + (1));
i__17172__auto___31174 = G__31175;
continue;
} else {
}
break;
}

var G__31172 = args31170.length;
switch (G__31172) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31170.length)].join('')));

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
var n__17016__auto___31177 = n;
var x_31178 = (0);
while(true){
if((x_31178 < n__17016__auto___31177)){
(a[x_31178] = (0));

var G__31179 = (x_31178 + (1));
x_31178 = G__31179;
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

var G__31180 = (i + (1));
i = G__31180;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31184 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31184 = (function (alt_flag,flag,meta31185){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta31185 = meta31185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31186,meta31185__$1){
var self__ = this;
var _31186__$1 = this;
return (new cljs.core.async.t_cljs$core$async31184(self__.alt_flag,self__.flag,meta31185__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31184.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31186){
var self__ = this;
var _31186__$1 = this;
return self__.meta31185;
});})(flag))
;

cljs.core.async.t_cljs$core$async31184.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31184.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31184.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31184.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31185","meta31185",-1115900231,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31184.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31184";

cljs.core.async.t_cljs$core$async31184.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16711__auto__,writer__16712__auto__,opt__16713__auto__){
return cljs.core._write.call(null,writer__16712__auto__,"cljs.core.async/t_cljs$core$async31184");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31184 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31184(alt_flag__$1,flag__$1,meta31185){
return (new cljs.core.async.t_cljs$core$async31184(alt_flag__$1,flag__$1,meta31185));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31184(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31190 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31190 = (function (alt_handler,flag,cb,meta31191){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta31191 = meta31191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31192,meta31191__$1){
var self__ = this;
var _31192__$1 = this;
return (new cljs.core.async.t_cljs$core$async31190(self__.alt_handler,self__.flag,self__.cb,meta31191__$1));
});

cljs.core.async.t_cljs$core$async31190.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31192){
var self__ = this;
var _31192__$1 = this;
return self__.meta31191;
});

cljs.core.async.t_cljs$core$async31190.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31190.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31190.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31190.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31191","meta31191",-317361458,null)], null);
});

cljs.core.async.t_cljs$core$async31190.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31190.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31190";

cljs.core.async.t_cljs$core$async31190.cljs$lang$ctorPrWriter = (function (this__16711__auto__,writer__16712__auto__,opt__16713__auto__){
return cljs.core._write.call(null,writer__16712__auto__,"cljs.core.async/t_cljs$core$async31190");
});

cljs.core.async.__GT_t_cljs$core$async31190 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31190(alt_handler__$1,flag__$1,cb__$1,meta31191){
return (new cljs.core.async.t_cljs$core$async31190(alt_handler__$1,flag__$1,cb__$1,meta31191));
});

}

return (new cljs.core.async.t_cljs$core$async31190(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31193_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31193_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31194_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31194_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16113__auto__ = wport;
if(cljs.core.truth_(or__16113__auto__)){
return or__16113__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31195 = (i + (1));
i = G__31195;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16113__auto__ = ret;
if(cljs.core.truth_(or__16113__auto__)){
return or__16113__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16101__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16101__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16101__auto__;
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
var args__17178__auto__ = [];
var len__17171__auto___31201 = arguments.length;
var i__17172__auto___31202 = (0);
while(true){
if((i__17172__auto___31202 < len__17171__auto___31201)){
args__17178__auto__.push((arguments[i__17172__auto___31202]));

var G__31203 = (i__17172__auto___31202 + (1));
i__17172__auto___31202 = G__31203;
continue;
} else {
}
break;
}

var argseq__17179__auto__ = ((((1) < args__17178__auto__.length))?(new cljs.core.IndexedSeq(args__17178__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17179__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31198){
var map__31199 = p__31198;
var map__31199__$1 = ((((!((map__31199 == null)))?((((map__31199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31199):map__31199);
var opts = map__31199__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31196){
var G__31197 = cljs.core.first.call(null,seq31196);
var seq31196__$1 = cljs.core.next.call(null,seq31196);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31197,seq31196__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args31204 = [];
var len__17171__auto___31254 = arguments.length;
var i__17172__auto___31255 = (0);
while(true){
if((i__17172__auto___31255 < len__17171__auto___31254)){
args31204.push((arguments[i__17172__auto___31255]));

var G__31256 = (i__17172__auto___31255 + (1));
i__17172__auto___31255 = G__31256;
continue;
} else {
}
break;
}

var G__31206 = args31204.length;
switch (G__31206) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31204.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23143__auto___31258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___31258){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto___31258){
return (function (state_31230){
var state_val_31231 = (state_31230[(1)]);
if((state_val_31231 === (7))){
var inst_31226 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31232_31259 = state_31230__$1;
(statearr_31232_31259[(2)] = inst_31226);

(statearr_31232_31259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (1))){
var state_31230__$1 = state_31230;
var statearr_31233_31260 = state_31230__$1;
(statearr_31233_31260[(2)] = null);

(statearr_31233_31260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (4))){
var inst_31209 = (state_31230[(7)]);
var inst_31209__$1 = (state_31230[(2)]);
var inst_31210 = (inst_31209__$1 == null);
var state_31230__$1 = (function (){var statearr_31234 = state_31230;
(statearr_31234[(7)] = inst_31209__$1);

return statearr_31234;
})();
if(cljs.core.truth_(inst_31210)){
var statearr_31235_31261 = state_31230__$1;
(statearr_31235_31261[(1)] = (5));

} else {
var statearr_31236_31262 = state_31230__$1;
(statearr_31236_31262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (13))){
var state_31230__$1 = state_31230;
var statearr_31237_31263 = state_31230__$1;
(statearr_31237_31263[(2)] = null);

(statearr_31237_31263[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (6))){
var inst_31209 = (state_31230[(7)]);
var state_31230__$1 = state_31230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31230__$1,(11),to,inst_31209);
} else {
if((state_val_31231 === (3))){
var inst_31228 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31230__$1,inst_31228);
} else {
if((state_val_31231 === (12))){
var state_31230__$1 = state_31230;
var statearr_31238_31264 = state_31230__$1;
(statearr_31238_31264[(2)] = null);

(statearr_31238_31264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (2))){
var state_31230__$1 = state_31230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31230__$1,(4),from);
} else {
if((state_val_31231 === (11))){
var inst_31219 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
if(cljs.core.truth_(inst_31219)){
var statearr_31239_31265 = state_31230__$1;
(statearr_31239_31265[(1)] = (12));

} else {
var statearr_31240_31266 = state_31230__$1;
(statearr_31240_31266[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (9))){
var state_31230__$1 = state_31230;
var statearr_31241_31267 = state_31230__$1;
(statearr_31241_31267[(2)] = null);

(statearr_31241_31267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (5))){
var state_31230__$1 = state_31230;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31242_31268 = state_31230__$1;
(statearr_31242_31268[(1)] = (8));

} else {
var statearr_31243_31269 = state_31230__$1;
(statearr_31243_31269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (14))){
var inst_31224 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31244_31270 = state_31230__$1;
(statearr_31244_31270[(2)] = inst_31224);

(statearr_31244_31270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (10))){
var inst_31216 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31245_31271 = state_31230__$1;
(statearr_31245_31271[(2)] = inst_31216);

(statearr_31245_31271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (8))){
var inst_31213 = cljs.core.async.close_BANG_.call(null,to);
var state_31230__$1 = state_31230;
var statearr_31246_31272 = state_31230__$1;
(statearr_31246_31272[(2)] = inst_31213);

(statearr_31246_31272[(1)] = (10));


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
});})(c__23143__auto___31258))
;
return ((function (switch__23078__auto__,c__23143__auto___31258){
return (function() {
var cljs$core$async$state_machine__23079__auto__ = null;
var cljs$core$async$state_machine__23079__auto____0 = (function (){
var statearr_31250 = [null,null,null,null,null,null,null,null];
(statearr_31250[(0)] = cljs$core$async$state_machine__23079__auto__);

(statearr_31250[(1)] = (1));

return statearr_31250;
});
var cljs$core$async$state_machine__23079__auto____1 = (function (state_31230){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_31230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e31251){if((e31251 instanceof Object)){
var ex__23082__auto__ = e31251;
var statearr_31252_31273 = state_31230;
(statearr_31252_31273[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31274 = state_31230;
state_31230 = G__31274;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
cljs$core$async$state_machine__23079__auto__ = function(state_31230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23079__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23079__auto____1.call(this,state_31230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23079__auto____0;
cljs$core$async$state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23079__auto____1;
return cljs$core$async$state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto___31258))
})();
var state__23145__auto__ = (function (){var statearr_31253 = f__23144__auto__.call(null);
(statearr_31253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto___31258);

return statearr_31253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___31258))
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
return (function (p__31458){
var vec__31459 = p__31458;
var v = cljs.core.nth.call(null,vec__31459,(0),null);
var p = cljs.core.nth.call(null,vec__31459,(1),null);
var job = vec__31459;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23143__auto___31641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___31641,res,vec__31459,v,p,job,jobs,results){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto___31641,res,vec__31459,v,p,job,jobs,results){
return (function (state_31464){
var state_val_31465 = (state_31464[(1)]);
if((state_val_31465 === (1))){
var state_31464__$1 = state_31464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31464__$1,(2),res,v);
} else {
if((state_val_31465 === (2))){
var inst_31461 = (state_31464[(2)]);
var inst_31462 = cljs.core.async.close_BANG_.call(null,res);
var state_31464__$1 = (function (){var statearr_31466 = state_31464;
(statearr_31466[(7)] = inst_31461);

return statearr_31466;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31464__$1,inst_31462);
} else {
return null;
}
}
});})(c__23143__auto___31641,res,vec__31459,v,p,job,jobs,results))
;
return ((function (switch__23078__auto__,c__23143__auto___31641,res,vec__31459,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____0 = (function (){
var statearr_31470 = [null,null,null,null,null,null,null,null];
(statearr_31470[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__);

(statearr_31470[(1)] = (1));

return statearr_31470;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____1 = (function (state_31464){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_31464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e31471){if((e31471 instanceof Object)){
var ex__23082__auto__ = e31471;
var statearr_31472_31642 = state_31464;
(statearr_31472_31642[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31643 = state_31464;
state_31464 = G__31643;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__ = function(state_31464){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____1.call(this,state_31464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto___31641,res,vec__31459,v,p,job,jobs,results))
})();
var state__23145__auto__ = (function (){var statearr_31473 = f__23144__auto__.call(null);
(statearr_31473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto___31641);

return statearr_31473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___31641,res,vec__31459,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31474){
var vec__31475 = p__31474;
var v = cljs.core.nth.call(null,vec__31475,(0),null);
var p = cljs.core.nth.call(null,vec__31475,(1),null);
var job = vec__31475;
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
var n__17016__auto___31644 = n;
var __31645 = (0);
while(true){
if((__31645 < n__17016__auto___31644)){
var G__31476_31646 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31476_31646) {
case "compute":
var c__23143__auto___31648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31645,c__23143__auto___31648,G__31476_31646,n__17016__auto___31644,jobs,results,process,async){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (__31645,c__23143__auto___31648,G__31476_31646,n__17016__auto___31644,jobs,results,process,async){
return (function (state_31489){
var state_val_31490 = (state_31489[(1)]);
if((state_val_31490 === (1))){
var state_31489__$1 = state_31489;
var statearr_31491_31649 = state_31489__$1;
(statearr_31491_31649[(2)] = null);

(statearr_31491_31649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (2))){
var state_31489__$1 = state_31489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31489__$1,(4),jobs);
} else {
if((state_val_31490 === (3))){
var inst_31487 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31489__$1,inst_31487);
} else {
if((state_val_31490 === (4))){
var inst_31479 = (state_31489[(2)]);
var inst_31480 = process.call(null,inst_31479);
var state_31489__$1 = state_31489;
if(cljs.core.truth_(inst_31480)){
var statearr_31492_31650 = state_31489__$1;
(statearr_31492_31650[(1)] = (5));

} else {
var statearr_31493_31651 = state_31489__$1;
(statearr_31493_31651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (5))){
var state_31489__$1 = state_31489;
var statearr_31494_31652 = state_31489__$1;
(statearr_31494_31652[(2)] = null);

(statearr_31494_31652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (6))){
var state_31489__$1 = state_31489;
var statearr_31495_31653 = state_31489__$1;
(statearr_31495_31653[(2)] = null);

(statearr_31495_31653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (7))){
var inst_31485 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
var statearr_31496_31654 = state_31489__$1;
(statearr_31496_31654[(2)] = inst_31485);

(statearr_31496_31654[(1)] = (3));


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
});})(__31645,c__23143__auto___31648,G__31476_31646,n__17016__auto___31644,jobs,results,process,async))
;
return ((function (__31645,switch__23078__auto__,c__23143__auto___31648,G__31476_31646,n__17016__auto___31644,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____0 = (function (){
var statearr_31500 = [null,null,null,null,null,null,null];
(statearr_31500[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__);

(statearr_31500[(1)] = (1));

return statearr_31500;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____1 = (function (state_31489){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_31489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e31501){if((e31501 instanceof Object)){
var ex__23082__auto__ = e31501;
var statearr_31502_31655 = state_31489;
(statearr_31502_31655[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31656 = state_31489;
state_31489 = G__31656;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__ = function(state_31489){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____1.call(this,state_31489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__;
})()
;})(__31645,switch__23078__auto__,c__23143__auto___31648,G__31476_31646,n__17016__auto___31644,jobs,results,process,async))
})();
var state__23145__auto__ = (function (){var statearr_31503 = f__23144__auto__.call(null);
(statearr_31503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto___31648);

return statearr_31503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(__31645,c__23143__auto___31648,G__31476_31646,n__17016__auto___31644,jobs,results,process,async))
);


break;
case "async":
var c__23143__auto___31657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31645,c__23143__auto___31657,G__31476_31646,n__17016__auto___31644,jobs,results,process,async){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (__31645,c__23143__auto___31657,G__31476_31646,n__17016__auto___31644,jobs,results,process,async){
return (function (state_31516){
var state_val_31517 = (state_31516[(1)]);
if((state_val_31517 === (1))){
var state_31516__$1 = state_31516;
var statearr_31518_31658 = state_31516__$1;
(statearr_31518_31658[(2)] = null);

(statearr_31518_31658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (2))){
var state_31516__$1 = state_31516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31516__$1,(4),jobs);
} else {
if((state_val_31517 === (3))){
var inst_31514 = (state_31516[(2)]);
var state_31516__$1 = state_31516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31516__$1,inst_31514);
} else {
if((state_val_31517 === (4))){
var inst_31506 = (state_31516[(2)]);
var inst_31507 = async.call(null,inst_31506);
var state_31516__$1 = state_31516;
if(cljs.core.truth_(inst_31507)){
var statearr_31519_31659 = state_31516__$1;
(statearr_31519_31659[(1)] = (5));

} else {
var statearr_31520_31660 = state_31516__$1;
(statearr_31520_31660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (5))){
var state_31516__$1 = state_31516;
var statearr_31521_31661 = state_31516__$1;
(statearr_31521_31661[(2)] = null);

(statearr_31521_31661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (6))){
var state_31516__$1 = state_31516;
var statearr_31522_31662 = state_31516__$1;
(statearr_31522_31662[(2)] = null);

(statearr_31522_31662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (7))){
var inst_31512 = (state_31516[(2)]);
var state_31516__$1 = state_31516;
var statearr_31523_31663 = state_31516__$1;
(statearr_31523_31663[(2)] = inst_31512);

(statearr_31523_31663[(1)] = (3));


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
});})(__31645,c__23143__auto___31657,G__31476_31646,n__17016__auto___31644,jobs,results,process,async))
;
return ((function (__31645,switch__23078__auto__,c__23143__auto___31657,G__31476_31646,n__17016__auto___31644,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____0 = (function (){
var statearr_31527 = [null,null,null,null,null,null,null];
(statearr_31527[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__);

(statearr_31527[(1)] = (1));

return statearr_31527;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____1 = (function (state_31516){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_31516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e31528){if((e31528 instanceof Object)){
var ex__23082__auto__ = e31528;
var statearr_31529_31664 = state_31516;
(statearr_31529_31664[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31665 = state_31516;
state_31516 = G__31665;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__ = function(state_31516){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____1.call(this,state_31516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__;
})()
;})(__31645,switch__23078__auto__,c__23143__auto___31657,G__31476_31646,n__17016__auto___31644,jobs,results,process,async))
})();
var state__23145__auto__ = (function (){var statearr_31530 = f__23144__auto__.call(null);
(statearr_31530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto___31657);

return statearr_31530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(__31645,c__23143__auto___31657,G__31476_31646,n__17016__auto___31644,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31666 = (__31645 + (1));
__31645 = G__31666;
continue;
} else {
}
break;
}

var c__23143__auto___31667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___31667,jobs,results,process,async){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto___31667,jobs,results,process,async){
return (function (state_31552){
var state_val_31553 = (state_31552[(1)]);
if((state_val_31553 === (1))){
var state_31552__$1 = state_31552;
var statearr_31554_31668 = state_31552__$1;
(statearr_31554_31668[(2)] = null);

(statearr_31554_31668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31553 === (2))){
var state_31552__$1 = state_31552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31552__$1,(4),from);
} else {
if((state_val_31553 === (3))){
var inst_31550 = (state_31552[(2)]);
var state_31552__$1 = state_31552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31552__$1,inst_31550);
} else {
if((state_val_31553 === (4))){
var inst_31533 = (state_31552[(7)]);
var inst_31533__$1 = (state_31552[(2)]);
var inst_31534 = (inst_31533__$1 == null);
var state_31552__$1 = (function (){var statearr_31555 = state_31552;
(statearr_31555[(7)] = inst_31533__$1);

return statearr_31555;
})();
if(cljs.core.truth_(inst_31534)){
var statearr_31556_31669 = state_31552__$1;
(statearr_31556_31669[(1)] = (5));

} else {
var statearr_31557_31670 = state_31552__$1;
(statearr_31557_31670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31553 === (5))){
var inst_31536 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31552__$1 = state_31552;
var statearr_31558_31671 = state_31552__$1;
(statearr_31558_31671[(2)] = inst_31536);

(statearr_31558_31671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31553 === (6))){
var inst_31533 = (state_31552[(7)]);
var inst_31538 = (state_31552[(8)]);
var inst_31538__$1 = cljs.core.async.chan.call(null,(1));
var inst_31539 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31540 = [inst_31533,inst_31538__$1];
var inst_31541 = (new cljs.core.PersistentVector(null,2,(5),inst_31539,inst_31540,null));
var state_31552__$1 = (function (){var statearr_31559 = state_31552;
(statearr_31559[(8)] = inst_31538__$1);

return statearr_31559;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31552__$1,(8),jobs,inst_31541);
} else {
if((state_val_31553 === (7))){
var inst_31548 = (state_31552[(2)]);
var state_31552__$1 = state_31552;
var statearr_31560_31672 = state_31552__$1;
(statearr_31560_31672[(2)] = inst_31548);

(statearr_31560_31672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31553 === (8))){
var inst_31538 = (state_31552[(8)]);
var inst_31543 = (state_31552[(2)]);
var state_31552__$1 = (function (){var statearr_31561 = state_31552;
(statearr_31561[(9)] = inst_31543);

return statearr_31561;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31552__$1,(9),results,inst_31538);
} else {
if((state_val_31553 === (9))){
var inst_31545 = (state_31552[(2)]);
var state_31552__$1 = (function (){var statearr_31562 = state_31552;
(statearr_31562[(10)] = inst_31545);

return statearr_31562;
})();
var statearr_31563_31673 = state_31552__$1;
(statearr_31563_31673[(2)] = null);

(statearr_31563_31673[(1)] = (2));


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
});})(c__23143__auto___31667,jobs,results,process,async))
;
return ((function (switch__23078__auto__,c__23143__auto___31667,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____0 = (function (){
var statearr_31567 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31567[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__);

(statearr_31567[(1)] = (1));

return statearr_31567;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____1 = (function (state_31552){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_31552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e31568){if((e31568 instanceof Object)){
var ex__23082__auto__ = e31568;
var statearr_31569_31674 = state_31552;
(statearr_31569_31674[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31675 = state_31552;
state_31552 = G__31675;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__ = function(state_31552){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____1.call(this,state_31552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto___31667,jobs,results,process,async))
})();
var state__23145__auto__ = (function (){var statearr_31570 = f__23144__auto__.call(null);
(statearr_31570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto___31667);

return statearr_31570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___31667,jobs,results,process,async))
);


var c__23143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto__,jobs,results,process,async){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto__,jobs,results,process,async){
return (function (state_31608){
var state_val_31609 = (state_31608[(1)]);
if((state_val_31609 === (7))){
var inst_31604 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
var statearr_31610_31676 = state_31608__$1;
(statearr_31610_31676[(2)] = inst_31604);

(statearr_31610_31676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (20))){
var state_31608__$1 = state_31608;
var statearr_31611_31677 = state_31608__$1;
(statearr_31611_31677[(2)] = null);

(statearr_31611_31677[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (1))){
var state_31608__$1 = state_31608;
var statearr_31612_31678 = state_31608__$1;
(statearr_31612_31678[(2)] = null);

(statearr_31612_31678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (4))){
var inst_31573 = (state_31608[(7)]);
var inst_31573__$1 = (state_31608[(2)]);
var inst_31574 = (inst_31573__$1 == null);
var state_31608__$1 = (function (){var statearr_31613 = state_31608;
(statearr_31613[(7)] = inst_31573__$1);

return statearr_31613;
})();
if(cljs.core.truth_(inst_31574)){
var statearr_31614_31679 = state_31608__$1;
(statearr_31614_31679[(1)] = (5));

} else {
var statearr_31615_31680 = state_31608__$1;
(statearr_31615_31680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (15))){
var inst_31586 = (state_31608[(8)]);
var state_31608__$1 = state_31608;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31608__$1,(18),to,inst_31586);
} else {
if((state_val_31609 === (21))){
var inst_31599 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
var statearr_31616_31681 = state_31608__$1;
(statearr_31616_31681[(2)] = inst_31599);

(statearr_31616_31681[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (13))){
var inst_31601 = (state_31608[(2)]);
var state_31608__$1 = (function (){var statearr_31617 = state_31608;
(statearr_31617[(9)] = inst_31601);

return statearr_31617;
})();
var statearr_31618_31682 = state_31608__$1;
(statearr_31618_31682[(2)] = null);

(statearr_31618_31682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (6))){
var inst_31573 = (state_31608[(7)]);
var state_31608__$1 = state_31608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31608__$1,(11),inst_31573);
} else {
if((state_val_31609 === (17))){
var inst_31594 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
if(cljs.core.truth_(inst_31594)){
var statearr_31619_31683 = state_31608__$1;
(statearr_31619_31683[(1)] = (19));

} else {
var statearr_31620_31684 = state_31608__$1;
(statearr_31620_31684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (3))){
var inst_31606 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31608__$1,inst_31606);
} else {
if((state_val_31609 === (12))){
var inst_31583 = (state_31608[(10)]);
var state_31608__$1 = state_31608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31608__$1,(14),inst_31583);
} else {
if((state_val_31609 === (2))){
var state_31608__$1 = state_31608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31608__$1,(4),results);
} else {
if((state_val_31609 === (19))){
var state_31608__$1 = state_31608;
var statearr_31621_31685 = state_31608__$1;
(statearr_31621_31685[(2)] = null);

(statearr_31621_31685[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (11))){
var inst_31583 = (state_31608[(2)]);
var state_31608__$1 = (function (){var statearr_31622 = state_31608;
(statearr_31622[(10)] = inst_31583);

return statearr_31622;
})();
var statearr_31623_31686 = state_31608__$1;
(statearr_31623_31686[(2)] = null);

(statearr_31623_31686[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (9))){
var state_31608__$1 = state_31608;
var statearr_31624_31687 = state_31608__$1;
(statearr_31624_31687[(2)] = null);

(statearr_31624_31687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (5))){
var state_31608__$1 = state_31608;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31625_31688 = state_31608__$1;
(statearr_31625_31688[(1)] = (8));

} else {
var statearr_31626_31689 = state_31608__$1;
(statearr_31626_31689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (14))){
var inst_31586 = (state_31608[(8)]);
var inst_31588 = (state_31608[(11)]);
var inst_31586__$1 = (state_31608[(2)]);
var inst_31587 = (inst_31586__$1 == null);
var inst_31588__$1 = cljs.core.not.call(null,inst_31587);
var state_31608__$1 = (function (){var statearr_31627 = state_31608;
(statearr_31627[(8)] = inst_31586__$1);

(statearr_31627[(11)] = inst_31588__$1);

return statearr_31627;
})();
if(inst_31588__$1){
var statearr_31628_31690 = state_31608__$1;
(statearr_31628_31690[(1)] = (15));

} else {
var statearr_31629_31691 = state_31608__$1;
(statearr_31629_31691[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (16))){
var inst_31588 = (state_31608[(11)]);
var state_31608__$1 = state_31608;
var statearr_31630_31692 = state_31608__$1;
(statearr_31630_31692[(2)] = inst_31588);

(statearr_31630_31692[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (10))){
var inst_31580 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
var statearr_31631_31693 = state_31608__$1;
(statearr_31631_31693[(2)] = inst_31580);

(statearr_31631_31693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (18))){
var inst_31591 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
var statearr_31632_31694 = state_31608__$1;
(statearr_31632_31694[(2)] = inst_31591);

(statearr_31632_31694[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (8))){
var inst_31577 = cljs.core.async.close_BANG_.call(null,to);
var state_31608__$1 = state_31608;
var statearr_31633_31695 = state_31608__$1;
(statearr_31633_31695[(2)] = inst_31577);

(statearr_31633_31695[(1)] = (10));


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
});})(c__23143__auto__,jobs,results,process,async))
;
return ((function (switch__23078__auto__,c__23143__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____0 = (function (){
var statearr_31637 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31637[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__);

(statearr_31637[(1)] = (1));

return statearr_31637;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____1 = (function (state_31608){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_31608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e31638){if((e31638 instanceof Object)){
var ex__23082__auto__ = e31638;
var statearr_31639_31696 = state_31608;
(statearr_31639_31696[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31697 = state_31608;
state_31608 = G__31697;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__ = function(state_31608){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____1.call(this,state_31608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23079__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto__,jobs,results,process,async))
})();
var state__23145__auto__ = (function (){var statearr_31640 = f__23144__auto__.call(null);
(statearr_31640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto__);

return statearr_31640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto__,jobs,results,process,async))
);

return c__23143__auto__;
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
var args31698 = [];
var len__17171__auto___31701 = arguments.length;
var i__17172__auto___31702 = (0);
while(true){
if((i__17172__auto___31702 < len__17171__auto___31701)){
args31698.push((arguments[i__17172__auto___31702]));

var G__31703 = (i__17172__auto___31702 + (1));
i__17172__auto___31702 = G__31703;
continue;
} else {
}
break;
}

var G__31700 = args31698.length;
switch (G__31700) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31698.length)].join('')));

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
var args31705 = [];
var len__17171__auto___31708 = arguments.length;
var i__17172__auto___31709 = (0);
while(true){
if((i__17172__auto___31709 < len__17171__auto___31708)){
args31705.push((arguments[i__17172__auto___31709]));

var G__31710 = (i__17172__auto___31709 + (1));
i__17172__auto___31709 = G__31710;
continue;
} else {
}
break;
}

var G__31707 = args31705.length;
switch (G__31707) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31705.length)].join('')));

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
var args31712 = [];
var len__17171__auto___31765 = arguments.length;
var i__17172__auto___31766 = (0);
while(true){
if((i__17172__auto___31766 < len__17171__auto___31765)){
args31712.push((arguments[i__17172__auto___31766]));

var G__31767 = (i__17172__auto___31766 + (1));
i__17172__auto___31766 = G__31767;
continue;
} else {
}
break;
}

var G__31714 = args31712.length;
switch (G__31714) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31712.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23143__auto___31769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___31769,tc,fc){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto___31769,tc,fc){
return (function (state_31740){
var state_val_31741 = (state_31740[(1)]);
if((state_val_31741 === (7))){
var inst_31736 = (state_31740[(2)]);
var state_31740__$1 = state_31740;
var statearr_31742_31770 = state_31740__$1;
(statearr_31742_31770[(2)] = inst_31736);

(statearr_31742_31770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (1))){
var state_31740__$1 = state_31740;
var statearr_31743_31771 = state_31740__$1;
(statearr_31743_31771[(2)] = null);

(statearr_31743_31771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (4))){
var inst_31717 = (state_31740[(7)]);
var inst_31717__$1 = (state_31740[(2)]);
var inst_31718 = (inst_31717__$1 == null);
var state_31740__$1 = (function (){var statearr_31744 = state_31740;
(statearr_31744[(7)] = inst_31717__$1);

return statearr_31744;
})();
if(cljs.core.truth_(inst_31718)){
var statearr_31745_31772 = state_31740__$1;
(statearr_31745_31772[(1)] = (5));

} else {
var statearr_31746_31773 = state_31740__$1;
(statearr_31746_31773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (13))){
var state_31740__$1 = state_31740;
var statearr_31747_31774 = state_31740__$1;
(statearr_31747_31774[(2)] = null);

(statearr_31747_31774[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (6))){
var inst_31717 = (state_31740[(7)]);
var inst_31723 = p.call(null,inst_31717);
var state_31740__$1 = state_31740;
if(cljs.core.truth_(inst_31723)){
var statearr_31748_31775 = state_31740__$1;
(statearr_31748_31775[(1)] = (9));

} else {
var statearr_31749_31776 = state_31740__$1;
(statearr_31749_31776[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (3))){
var inst_31738 = (state_31740[(2)]);
var state_31740__$1 = state_31740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31740__$1,inst_31738);
} else {
if((state_val_31741 === (12))){
var state_31740__$1 = state_31740;
var statearr_31750_31777 = state_31740__$1;
(statearr_31750_31777[(2)] = null);

(statearr_31750_31777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (2))){
var state_31740__$1 = state_31740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31740__$1,(4),ch);
} else {
if((state_val_31741 === (11))){
var inst_31717 = (state_31740[(7)]);
var inst_31727 = (state_31740[(2)]);
var state_31740__$1 = state_31740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31740__$1,(8),inst_31727,inst_31717);
} else {
if((state_val_31741 === (9))){
var state_31740__$1 = state_31740;
var statearr_31751_31778 = state_31740__$1;
(statearr_31751_31778[(2)] = tc);

(statearr_31751_31778[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (5))){
var inst_31720 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31721 = cljs.core.async.close_BANG_.call(null,fc);
var state_31740__$1 = (function (){var statearr_31752 = state_31740;
(statearr_31752[(8)] = inst_31720);

return statearr_31752;
})();
var statearr_31753_31779 = state_31740__$1;
(statearr_31753_31779[(2)] = inst_31721);

(statearr_31753_31779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (14))){
var inst_31734 = (state_31740[(2)]);
var state_31740__$1 = state_31740;
var statearr_31754_31780 = state_31740__$1;
(statearr_31754_31780[(2)] = inst_31734);

(statearr_31754_31780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (10))){
var state_31740__$1 = state_31740;
var statearr_31755_31781 = state_31740__$1;
(statearr_31755_31781[(2)] = fc);

(statearr_31755_31781[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (8))){
var inst_31729 = (state_31740[(2)]);
var state_31740__$1 = state_31740;
if(cljs.core.truth_(inst_31729)){
var statearr_31756_31782 = state_31740__$1;
(statearr_31756_31782[(1)] = (12));

} else {
var statearr_31757_31783 = state_31740__$1;
(statearr_31757_31783[(1)] = (13));

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
});})(c__23143__auto___31769,tc,fc))
;
return ((function (switch__23078__auto__,c__23143__auto___31769,tc,fc){
return (function() {
var cljs$core$async$state_machine__23079__auto__ = null;
var cljs$core$async$state_machine__23079__auto____0 = (function (){
var statearr_31761 = [null,null,null,null,null,null,null,null,null];
(statearr_31761[(0)] = cljs$core$async$state_machine__23079__auto__);

(statearr_31761[(1)] = (1));

return statearr_31761;
});
var cljs$core$async$state_machine__23079__auto____1 = (function (state_31740){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_31740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e31762){if((e31762 instanceof Object)){
var ex__23082__auto__ = e31762;
var statearr_31763_31784 = state_31740;
(statearr_31763_31784[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31785 = state_31740;
state_31740 = G__31785;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
cljs$core$async$state_machine__23079__auto__ = function(state_31740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23079__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23079__auto____1.call(this,state_31740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23079__auto____0;
cljs$core$async$state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23079__auto____1;
return cljs$core$async$state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto___31769,tc,fc))
})();
var state__23145__auto__ = (function (){var statearr_31764 = f__23144__auto__.call(null);
(statearr_31764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto___31769);

return statearr_31764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___31769,tc,fc))
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
var c__23143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto__){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto__){
return (function (state_31832){
var state_val_31833 = (state_31832[(1)]);
if((state_val_31833 === (1))){
var inst_31818 = init;
var state_31832__$1 = (function (){var statearr_31834 = state_31832;
(statearr_31834[(7)] = inst_31818);

return statearr_31834;
})();
var statearr_31835_31850 = state_31832__$1;
(statearr_31835_31850[(2)] = null);

(statearr_31835_31850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31833 === (2))){
var state_31832__$1 = state_31832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31832__$1,(4),ch);
} else {
if((state_val_31833 === (3))){
var inst_31830 = (state_31832[(2)]);
var state_31832__$1 = state_31832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31832__$1,inst_31830);
} else {
if((state_val_31833 === (4))){
var inst_31821 = (state_31832[(8)]);
var inst_31821__$1 = (state_31832[(2)]);
var inst_31822 = (inst_31821__$1 == null);
var state_31832__$1 = (function (){var statearr_31836 = state_31832;
(statearr_31836[(8)] = inst_31821__$1);

return statearr_31836;
})();
if(cljs.core.truth_(inst_31822)){
var statearr_31837_31851 = state_31832__$1;
(statearr_31837_31851[(1)] = (5));

} else {
var statearr_31838_31852 = state_31832__$1;
(statearr_31838_31852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31833 === (5))){
var inst_31818 = (state_31832[(7)]);
var state_31832__$1 = state_31832;
var statearr_31839_31853 = state_31832__$1;
(statearr_31839_31853[(2)] = inst_31818);

(statearr_31839_31853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31833 === (6))){
var inst_31818 = (state_31832[(7)]);
var inst_31821 = (state_31832[(8)]);
var inst_31825 = f.call(null,inst_31818,inst_31821);
var inst_31818__$1 = inst_31825;
var state_31832__$1 = (function (){var statearr_31840 = state_31832;
(statearr_31840[(7)] = inst_31818__$1);

return statearr_31840;
})();
var statearr_31841_31854 = state_31832__$1;
(statearr_31841_31854[(2)] = null);

(statearr_31841_31854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31833 === (7))){
var inst_31828 = (state_31832[(2)]);
var state_31832__$1 = state_31832;
var statearr_31842_31855 = state_31832__$1;
(statearr_31842_31855[(2)] = inst_31828);

(statearr_31842_31855[(1)] = (3));


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
});})(c__23143__auto__))
;
return ((function (switch__23078__auto__,c__23143__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23079__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23079__auto____0 = (function (){
var statearr_31846 = [null,null,null,null,null,null,null,null,null];
(statearr_31846[(0)] = cljs$core$async$reduce_$_state_machine__23079__auto__);

(statearr_31846[(1)] = (1));

return statearr_31846;
});
var cljs$core$async$reduce_$_state_machine__23079__auto____1 = (function (state_31832){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_31832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e31847){if((e31847 instanceof Object)){
var ex__23082__auto__ = e31847;
var statearr_31848_31856 = state_31832;
(statearr_31848_31856[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31857 = state_31832;
state_31832 = G__31857;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23079__auto__ = function(state_31832){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23079__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23079__auto____1.call(this,state_31832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23079__auto____0;
cljs$core$async$reduce_$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23079__auto____1;
return cljs$core$async$reduce_$_state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto__))
})();
var state__23145__auto__ = (function (){var statearr_31849 = f__23144__auto__.call(null);
(statearr_31849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto__);

return statearr_31849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto__))
);

return c__23143__auto__;
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
var args31858 = [];
var len__17171__auto___31910 = arguments.length;
var i__17172__auto___31911 = (0);
while(true){
if((i__17172__auto___31911 < len__17171__auto___31910)){
args31858.push((arguments[i__17172__auto___31911]));

var G__31912 = (i__17172__auto___31911 + (1));
i__17172__auto___31911 = G__31912;
continue;
} else {
}
break;
}

var G__31860 = args31858.length;
switch (G__31860) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31858.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto__){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto__){
return (function (state_31885){
var state_val_31886 = (state_31885[(1)]);
if((state_val_31886 === (7))){
var inst_31867 = (state_31885[(2)]);
var state_31885__$1 = state_31885;
var statearr_31887_31914 = state_31885__$1;
(statearr_31887_31914[(2)] = inst_31867);

(statearr_31887_31914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (1))){
var inst_31861 = cljs.core.seq.call(null,coll);
var inst_31862 = inst_31861;
var state_31885__$1 = (function (){var statearr_31888 = state_31885;
(statearr_31888[(7)] = inst_31862);

return statearr_31888;
})();
var statearr_31889_31915 = state_31885__$1;
(statearr_31889_31915[(2)] = null);

(statearr_31889_31915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (4))){
var inst_31862 = (state_31885[(7)]);
var inst_31865 = cljs.core.first.call(null,inst_31862);
var state_31885__$1 = state_31885;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31885__$1,(7),ch,inst_31865);
} else {
if((state_val_31886 === (13))){
var inst_31879 = (state_31885[(2)]);
var state_31885__$1 = state_31885;
var statearr_31890_31916 = state_31885__$1;
(statearr_31890_31916[(2)] = inst_31879);

(statearr_31890_31916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (6))){
var inst_31870 = (state_31885[(2)]);
var state_31885__$1 = state_31885;
if(cljs.core.truth_(inst_31870)){
var statearr_31891_31917 = state_31885__$1;
(statearr_31891_31917[(1)] = (8));

} else {
var statearr_31892_31918 = state_31885__$1;
(statearr_31892_31918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (3))){
var inst_31883 = (state_31885[(2)]);
var state_31885__$1 = state_31885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31885__$1,inst_31883);
} else {
if((state_val_31886 === (12))){
var state_31885__$1 = state_31885;
var statearr_31893_31919 = state_31885__$1;
(statearr_31893_31919[(2)] = null);

(statearr_31893_31919[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (2))){
var inst_31862 = (state_31885[(7)]);
var state_31885__$1 = state_31885;
if(cljs.core.truth_(inst_31862)){
var statearr_31894_31920 = state_31885__$1;
(statearr_31894_31920[(1)] = (4));

} else {
var statearr_31895_31921 = state_31885__$1;
(statearr_31895_31921[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (11))){
var inst_31876 = cljs.core.async.close_BANG_.call(null,ch);
var state_31885__$1 = state_31885;
var statearr_31896_31922 = state_31885__$1;
(statearr_31896_31922[(2)] = inst_31876);

(statearr_31896_31922[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (9))){
var state_31885__$1 = state_31885;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31897_31923 = state_31885__$1;
(statearr_31897_31923[(1)] = (11));

} else {
var statearr_31898_31924 = state_31885__$1;
(statearr_31898_31924[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (5))){
var inst_31862 = (state_31885[(7)]);
var state_31885__$1 = state_31885;
var statearr_31899_31925 = state_31885__$1;
(statearr_31899_31925[(2)] = inst_31862);

(statearr_31899_31925[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (10))){
var inst_31881 = (state_31885[(2)]);
var state_31885__$1 = state_31885;
var statearr_31900_31926 = state_31885__$1;
(statearr_31900_31926[(2)] = inst_31881);

(statearr_31900_31926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (8))){
var inst_31862 = (state_31885[(7)]);
var inst_31872 = cljs.core.next.call(null,inst_31862);
var inst_31862__$1 = inst_31872;
var state_31885__$1 = (function (){var statearr_31901 = state_31885;
(statearr_31901[(7)] = inst_31862__$1);

return statearr_31901;
})();
var statearr_31902_31927 = state_31885__$1;
(statearr_31902_31927[(2)] = null);

(statearr_31902_31927[(1)] = (2));


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
});})(c__23143__auto__))
;
return ((function (switch__23078__auto__,c__23143__auto__){
return (function() {
var cljs$core$async$state_machine__23079__auto__ = null;
var cljs$core$async$state_machine__23079__auto____0 = (function (){
var statearr_31906 = [null,null,null,null,null,null,null,null];
(statearr_31906[(0)] = cljs$core$async$state_machine__23079__auto__);

(statearr_31906[(1)] = (1));

return statearr_31906;
});
var cljs$core$async$state_machine__23079__auto____1 = (function (state_31885){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_31885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e31907){if((e31907 instanceof Object)){
var ex__23082__auto__ = e31907;
var statearr_31908_31928 = state_31885;
(statearr_31908_31928[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31929 = state_31885;
state_31885 = G__31929;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
cljs$core$async$state_machine__23079__auto__ = function(state_31885){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23079__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23079__auto____1.call(this,state_31885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23079__auto____0;
cljs$core$async$state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23079__auto____1;
return cljs$core$async$state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto__))
})();
var state__23145__auto__ = (function (){var statearr_31909 = f__23144__auto__.call(null);
(statearr_31909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto__);

return statearr_31909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto__))
);

return c__23143__auto__;
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
var x__16768__auto__ = (((_ == null))?null:_);
var m__16769__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16768__auto__)]);
if(!((m__16769__auto__ == null))){
return m__16769__auto__.call(null,_);
} else {
var m__16769__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__16769__auto____$1 == null))){
return m__16769__auto____$1.call(null,_);
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
var x__16768__auto__ = (((m == null))?null:m);
var m__16769__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16768__auto__)]);
if(!((m__16769__auto__ == null))){
return m__16769__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__16769__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__16769__auto____$1 == null))){
return m__16769__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__16768__auto__ = (((m == null))?null:m);
var m__16769__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16768__auto__)]);
if(!((m__16769__auto__ == null))){
return m__16769__auto__.call(null,m,ch);
} else {
var m__16769__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__16769__auto____$1 == null))){
return m__16769__auto____$1.call(null,m,ch);
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
var x__16768__auto__ = (((m == null))?null:m);
var m__16769__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16768__auto__)]);
if(!((m__16769__auto__ == null))){
return m__16769__auto__.call(null,m);
} else {
var m__16769__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__16769__auto____$1 == null))){
return m__16769__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async32151 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32151 = (function (mult,ch,cs,meta32152){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta32152 = meta32152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32153,meta32152__$1){
var self__ = this;
var _32153__$1 = this;
return (new cljs.core.async.t_cljs$core$async32151(self__.mult,self__.ch,self__.cs,meta32152__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32151.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32153){
var self__ = this;
var _32153__$1 = this;
return self__.meta32152;
});})(cs))
;

cljs.core.async.t_cljs$core$async32151.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32151.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32151.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async32151.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32151.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32151.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32151.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32152","meta32152",759764438,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32151.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32151.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32151";

cljs.core.async.t_cljs$core$async32151.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16711__auto__,writer__16712__auto__,opt__16713__auto__){
return cljs.core._write.call(null,writer__16712__auto__,"cljs.core.async/t_cljs$core$async32151");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32151 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32151(mult__$1,ch__$1,cs__$1,meta32152){
return (new cljs.core.async.t_cljs$core$async32151(mult__$1,ch__$1,cs__$1,meta32152));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32151(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23143__auto___32372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___32372,cs,m,dchan,dctr,done){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto___32372,cs,m,dchan,dctr,done){
return (function (state_32284){
var state_val_32285 = (state_32284[(1)]);
if((state_val_32285 === (7))){
var inst_32280 = (state_32284[(2)]);
var state_32284__$1 = state_32284;
var statearr_32286_32373 = state_32284__$1;
(statearr_32286_32373[(2)] = inst_32280);

(statearr_32286_32373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (20))){
var inst_32185 = (state_32284[(7)]);
var inst_32195 = cljs.core.first.call(null,inst_32185);
var inst_32196 = cljs.core.nth.call(null,inst_32195,(0),null);
var inst_32197 = cljs.core.nth.call(null,inst_32195,(1),null);
var state_32284__$1 = (function (){var statearr_32287 = state_32284;
(statearr_32287[(8)] = inst_32196);

return statearr_32287;
})();
if(cljs.core.truth_(inst_32197)){
var statearr_32288_32374 = state_32284__$1;
(statearr_32288_32374[(1)] = (22));

} else {
var statearr_32289_32375 = state_32284__$1;
(statearr_32289_32375[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (27))){
var inst_32227 = (state_32284[(9)]);
var inst_32156 = (state_32284[(10)]);
var inst_32232 = (state_32284[(11)]);
var inst_32225 = (state_32284[(12)]);
var inst_32232__$1 = cljs.core._nth.call(null,inst_32225,inst_32227);
var inst_32233 = cljs.core.async.put_BANG_.call(null,inst_32232__$1,inst_32156,done);
var state_32284__$1 = (function (){var statearr_32290 = state_32284;
(statearr_32290[(11)] = inst_32232__$1);

return statearr_32290;
})();
if(cljs.core.truth_(inst_32233)){
var statearr_32291_32376 = state_32284__$1;
(statearr_32291_32376[(1)] = (30));

} else {
var statearr_32292_32377 = state_32284__$1;
(statearr_32292_32377[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (1))){
var state_32284__$1 = state_32284;
var statearr_32293_32378 = state_32284__$1;
(statearr_32293_32378[(2)] = null);

(statearr_32293_32378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (24))){
var inst_32185 = (state_32284[(7)]);
var inst_32202 = (state_32284[(2)]);
var inst_32203 = cljs.core.next.call(null,inst_32185);
var inst_32165 = inst_32203;
var inst_32166 = null;
var inst_32167 = (0);
var inst_32168 = (0);
var state_32284__$1 = (function (){var statearr_32294 = state_32284;
(statearr_32294[(13)] = inst_32166);

(statearr_32294[(14)] = inst_32202);

(statearr_32294[(15)] = inst_32167);

(statearr_32294[(16)] = inst_32168);

(statearr_32294[(17)] = inst_32165);

return statearr_32294;
})();
var statearr_32295_32379 = state_32284__$1;
(statearr_32295_32379[(2)] = null);

(statearr_32295_32379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (39))){
var state_32284__$1 = state_32284;
var statearr_32299_32380 = state_32284__$1;
(statearr_32299_32380[(2)] = null);

(statearr_32299_32380[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (4))){
var inst_32156 = (state_32284[(10)]);
var inst_32156__$1 = (state_32284[(2)]);
var inst_32157 = (inst_32156__$1 == null);
var state_32284__$1 = (function (){var statearr_32300 = state_32284;
(statearr_32300[(10)] = inst_32156__$1);

return statearr_32300;
})();
if(cljs.core.truth_(inst_32157)){
var statearr_32301_32381 = state_32284__$1;
(statearr_32301_32381[(1)] = (5));

} else {
var statearr_32302_32382 = state_32284__$1;
(statearr_32302_32382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (15))){
var inst_32166 = (state_32284[(13)]);
var inst_32167 = (state_32284[(15)]);
var inst_32168 = (state_32284[(16)]);
var inst_32165 = (state_32284[(17)]);
var inst_32181 = (state_32284[(2)]);
var inst_32182 = (inst_32168 + (1));
var tmp32296 = inst_32166;
var tmp32297 = inst_32167;
var tmp32298 = inst_32165;
var inst_32165__$1 = tmp32298;
var inst_32166__$1 = tmp32296;
var inst_32167__$1 = tmp32297;
var inst_32168__$1 = inst_32182;
var state_32284__$1 = (function (){var statearr_32303 = state_32284;
(statearr_32303[(18)] = inst_32181);

(statearr_32303[(13)] = inst_32166__$1);

(statearr_32303[(15)] = inst_32167__$1);

(statearr_32303[(16)] = inst_32168__$1);

(statearr_32303[(17)] = inst_32165__$1);

return statearr_32303;
})();
var statearr_32304_32383 = state_32284__$1;
(statearr_32304_32383[(2)] = null);

(statearr_32304_32383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (21))){
var inst_32206 = (state_32284[(2)]);
var state_32284__$1 = state_32284;
var statearr_32308_32384 = state_32284__$1;
(statearr_32308_32384[(2)] = inst_32206);

(statearr_32308_32384[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (31))){
var inst_32232 = (state_32284[(11)]);
var inst_32236 = done.call(null,null);
var inst_32237 = cljs.core.async.untap_STAR_.call(null,m,inst_32232);
var state_32284__$1 = (function (){var statearr_32309 = state_32284;
(statearr_32309[(19)] = inst_32236);

return statearr_32309;
})();
var statearr_32310_32385 = state_32284__$1;
(statearr_32310_32385[(2)] = inst_32237);

(statearr_32310_32385[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (32))){
var inst_32224 = (state_32284[(20)]);
var inst_32226 = (state_32284[(21)]);
var inst_32227 = (state_32284[(9)]);
var inst_32225 = (state_32284[(12)]);
var inst_32239 = (state_32284[(2)]);
var inst_32240 = (inst_32227 + (1));
var tmp32305 = inst_32224;
var tmp32306 = inst_32226;
var tmp32307 = inst_32225;
var inst_32224__$1 = tmp32305;
var inst_32225__$1 = tmp32307;
var inst_32226__$1 = tmp32306;
var inst_32227__$1 = inst_32240;
var state_32284__$1 = (function (){var statearr_32311 = state_32284;
(statearr_32311[(20)] = inst_32224__$1);

(statearr_32311[(21)] = inst_32226__$1);

(statearr_32311[(9)] = inst_32227__$1);

(statearr_32311[(22)] = inst_32239);

(statearr_32311[(12)] = inst_32225__$1);

return statearr_32311;
})();
var statearr_32312_32386 = state_32284__$1;
(statearr_32312_32386[(2)] = null);

(statearr_32312_32386[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (40))){
var inst_32252 = (state_32284[(23)]);
var inst_32256 = done.call(null,null);
var inst_32257 = cljs.core.async.untap_STAR_.call(null,m,inst_32252);
var state_32284__$1 = (function (){var statearr_32313 = state_32284;
(statearr_32313[(24)] = inst_32256);

return statearr_32313;
})();
var statearr_32314_32387 = state_32284__$1;
(statearr_32314_32387[(2)] = inst_32257);

(statearr_32314_32387[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (33))){
var inst_32243 = (state_32284[(25)]);
var inst_32245 = cljs.core.chunked_seq_QMARK_.call(null,inst_32243);
var state_32284__$1 = state_32284;
if(inst_32245){
var statearr_32315_32388 = state_32284__$1;
(statearr_32315_32388[(1)] = (36));

} else {
var statearr_32316_32389 = state_32284__$1;
(statearr_32316_32389[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (13))){
var inst_32175 = (state_32284[(26)]);
var inst_32178 = cljs.core.async.close_BANG_.call(null,inst_32175);
var state_32284__$1 = state_32284;
var statearr_32317_32390 = state_32284__$1;
(statearr_32317_32390[(2)] = inst_32178);

(statearr_32317_32390[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (22))){
var inst_32196 = (state_32284[(8)]);
var inst_32199 = cljs.core.async.close_BANG_.call(null,inst_32196);
var state_32284__$1 = state_32284;
var statearr_32318_32391 = state_32284__$1;
(statearr_32318_32391[(2)] = inst_32199);

(statearr_32318_32391[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (36))){
var inst_32243 = (state_32284[(25)]);
var inst_32247 = cljs.core.chunk_first.call(null,inst_32243);
var inst_32248 = cljs.core.chunk_rest.call(null,inst_32243);
var inst_32249 = cljs.core.count.call(null,inst_32247);
var inst_32224 = inst_32248;
var inst_32225 = inst_32247;
var inst_32226 = inst_32249;
var inst_32227 = (0);
var state_32284__$1 = (function (){var statearr_32319 = state_32284;
(statearr_32319[(20)] = inst_32224);

(statearr_32319[(21)] = inst_32226);

(statearr_32319[(9)] = inst_32227);

(statearr_32319[(12)] = inst_32225);

return statearr_32319;
})();
var statearr_32320_32392 = state_32284__$1;
(statearr_32320_32392[(2)] = null);

(statearr_32320_32392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (41))){
var inst_32243 = (state_32284[(25)]);
var inst_32259 = (state_32284[(2)]);
var inst_32260 = cljs.core.next.call(null,inst_32243);
var inst_32224 = inst_32260;
var inst_32225 = null;
var inst_32226 = (0);
var inst_32227 = (0);
var state_32284__$1 = (function (){var statearr_32321 = state_32284;
(statearr_32321[(20)] = inst_32224);

(statearr_32321[(21)] = inst_32226);

(statearr_32321[(9)] = inst_32227);

(statearr_32321[(27)] = inst_32259);

(statearr_32321[(12)] = inst_32225);

return statearr_32321;
})();
var statearr_32322_32393 = state_32284__$1;
(statearr_32322_32393[(2)] = null);

(statearr_32322_32393[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (43))){
var state_32284__$1 = state_32284;
var statearr_32323_32394 = state_32284__$1;
(statearr_32323_32394[(2)] = null);

(statearr_32323_32394[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (29))){
var inst_32268 = (state_32284[(2)]);
var state_32284__$1 = state_32284;
var statearr_32324_32395 = state_32284__$1;
(statearr_32324_32395[(2)] = inst_32268);

(statearr_32324_32395[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (44))){
var inst_32277 = (state_32284[(2)]);
var state_32284__$1 = (function (){var statearr_32325 = state_32284;
(statearr_32325[(28)] = inst_32277);

return statearr_32325;
})();
var statearr_32326_32396 = state_32284__$1;
(statearr_32326_32396[(2)] = null);

(statearr_32326_32396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (6))){
var inst_32216 = (state_32284[(29)]);
var inst_32215 = cljs.core.deref.call(null,cs);
var inst_32216__$1 = cljs.core.keys.call(null,inst_32215);
var inst_32217 = cljs.core.count.call(null,inst_32216__$1);
var inst_32218 = cljs.core.reset_BANG_.call(null,dctr,inst_32217);
var inst_32223 = cljs.core.seq.call(null,inst_32216__$1);
var inst_32224 = inst_32223;
var inst_32225 = null;
var inst_32226 = (0);
var inst_32227 = (0);
var state_32284__$1 = (function (){var statearr_32327 = state_32284;
(statearr_32327[(20)] = inst_32224);

(statearr_32327[(29)] = inst_32216__$1);

(statearr_32327[(21)] = inst_32226);

(statearr_32327[(30)] = inst_32218);

(statearr_32327[(9)] = inst_32227);

(statearr_32327[(12)] = inst_32225);

return statearr_32327;
})();
var statearr_32328_32397 = state_32284__$1;
(statearr_32328_32397[(2)] = null);

(statearr_32328_32397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (28))){
var inst_32224 = (state_32284[(20)]);
var inst_32243 = (state_32284[(25)]);
var inst_32243__$1 = cljs.core.seq.call(null,inst_32224);
var state_32284__$1 = (function (){var statearr_32329 = state_32284;
(statearr_32329[(25)] = inst_32243__$1);

return statearr_32329;
})();
if(inst_32243__$1){
var statearr_32330_32398 = state_32284__$1;
(statearr_32330_32398[(1)] = (33));

} else {
var statearr_32331_32399 = state_32284__$1;
(statearr_32331_32399[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (25))){
var inst_32226 = (state_32284[(21)]);
var inst_32227 = (state_32284[(9)]);
var inst_32229 = (inst_32227 < inst_32226);
var inst_32230 = inst_32229;
var state_32284__$1 = state_32284;
if(cljs.core.truth_(inst_32230)){
var statearr_32332_32400 = state_32284__$1;
(statearr_32332_32400[(1)] = (27));

} else {
var statearr_32333_32401 = state_32284__$1;
(statearr_32333_32401[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (34))){
var state_32284__$1 = state_32284;
var statearr_32334_32402 = state_32284__$1;
(statearr_32334_32402[(2)] = null);

(statearr_32334_32402[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (17))){
var state_32284__$1 = state_32284;
var statearr_32335_32403 = state_32284__$1;
(statearr_32335_32403[(2)] = null);

(statearr_32335_32403[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (3))){
var inst_32282 = (state_32284[(2)]);
var state_32284__$1 = state_32284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32284__$1,inst_32282);
} else {
if((state_val_32285 === (12))){
var inst_32211 = (state_32284[(2)]);
var state_32284__$1 = state_32284;
var statearr_32336_32404 = state_32284__$1;
(statearr_32336_32404[(2)] = inst_32211);

(statearr_32336_32404[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (2))){
var state_32284__$1 = state_32284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32284__$1,(4),ch);
} else {
if((state_val_32285 === (23))){
var state_32284__$1 = state_32284;
var statearr_32337_32405 = state_32284__$1;
(statearr_32337_32405[(2)] = null);

(statearr_32337_32405[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (35))){
var inst_32266 = (state_32284[(2)]);
var state_32284__$1 = state_32284;
var statearr_32338_32406 = state_32284__$1;
(statearr_32338_32406[(2)] = inst_32266);

(statearr_32338_32406[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (19))){
var inst_32185 = (state_32284[(7)]);
var inst_32189 = cljs.core.chunk_first.call(null,inst_32185);
var inst_32190 = cljs.core.chunk_rest.call(null,inst_32185);
var inst_32191 = cljs.core.count.call(null,inst_32189);
var inst_32165 = inst_32190;
var inst_32166 = inst_32189;
var inst_32167 = inst_32191;
var inst_32168 = (0);
var state_32284__$1 = (function (){var statearr_32339 = state_32284;
(statearr_32339[(13)] = inst_32166);

(statearr_32339[(15)] = inst_32167);

(statearr_32339[(16)] = inst_32168);

(statearr_32339[(17)] = inst_32165);

return statearr_32339;
})();
var statearr_32340_32407 = state_32284__$1;
(statearr_32340_32407[(2)] = null);

(statearr_32340_32407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (11))){
var inst_32185 = (state_32284[(7)]);
var inst_32165 = (state_32284[(17)]);
var inst_32185__$1 = cljs.core.seq.call(null,inst_32165);
var state_32284__$1 = (function (){var statearr_32341 = state_32284;
(statearr_32341[(7)] = inst_32185__$1);

return statearr_32341;
})();
if(inst_32185__$1){
var statearr_32342_32408 = state_32284__$1;
(statearr_32342_32408[(1)] = (16));

} else {
var statearr_32343_32409 = state_32284__$1;
(statearr_32343_32409[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (9))){
var inst_32213 = (state_32284[(2)]);
var state_32284__$1 = state_32284;
var statearr_32344_32410 = state_32284__$1;
(statearr_32344_32410[(2)] = inst_32213);

(statearr_32344_32410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (5))){
var inst_32163 = cljs.core.deref.call(null,cs);
var inst_32164 = cljs.core.seq.call(null,inst_32163);
var inst_32165 = inst_32164;
var inst_32166 = null;
var inst_32167 = (0);
var inst_32168 = (0);
var state_32284__$1 = (function (){var statearr_32345 = state_32284;
(statearr_32345[(13)] = inst_32166);

(statearr_32345[(15)] = inst_32167);

(statearr_32345[(16)] = inst_32168);

(statearr_32345[(17)] = inst_32165);

return statearr_32345;
})();
var statearr_32346_32411 = state_32284__$1;
(statearr_32346_32411[(2)] = null);

(statearr_32346_32411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (14))){
var state_32284__$1 = state_32284;
var statearr_32347_32412 = state_32284__$1;
(statearr_32347_32412[(2)] = null);

(statearr_32347_32412[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (45))){
var inst_32274 = (state_32284[(2)]);
var state_32284__$1 = state_32284;
var statearr_32348_32413 = state_32284__$1;
(statearr_32348_32413[(2)] = inst_32274);

(statearr_32348_32413[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (26))){
var inst_32216 = (state_32284[(29)]);
var inst_32270 = (state_32284[(2)]);
var inst_32271 = cljs.core.seq.call(null,inst_32216);
var state_32284__$1 = (function (){var statearr_32349 = state_32284;
(statearr_32349[(31)] = inst_32270);

return statearr_32349;
})();
if(inst_32271){
var statearr_32350_32414 = state_32284__$1;
(statearr_32350_32414[(1)] = (42));

} else {
var statearr_32351_32415 = state_32284__$1;
(statearr_32351_32415[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (16))){
var inst_32185 = (state_32284[(7)]);
var inst_32187 = cljs.core.chunked_seq_QMARK_.call(null,inst_32185);
var state_32284__$1 = state_32284;
if(inst_32187){
var statearr_32352_32416 = state_32284__$1;
(statearr_32352_32416[(1)] = (19));

} else {
var statearr_32353_32417 = state_32284__$1;
(statearr_32353_32417[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (38))){
var inst_32263 = (state_32284[(2)]);
var state_32284__$1 = state_32284;
var statearr_32354_32418 = state_32284__$1;
(statearr_32354_32418[(2)] = inst_32263);

(statearr_32354_32418[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (30))){
var state_32284__$1 = state_32284;
var statearr_32355_32419 = state_32284__$1;
(statearr_32355_32419[(2)] = null);

(statearr_32355_32419[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (10))){
var inst_32166 = (state_32284[(13)]);
var inst_32168 = (state_32284[(16)]);
var inst_32174 = cljs.core._nth.call(null,inst_32166,inst_32168);
var inst_32175 = cljs.core.nth.call(null,inst_32174,(0),null);
var inst_32176 = cljs.core.nth.call(null,inst_32174,(1),null);
var state_32284__$1 = (function (){var statearr_32356 = state_32284;
(statearr_32356[(26)] = inst_32175);

return statearr_32356;
})();
if(cljs.core.truth_(inst_32176)){
var statearr_32357_32420 = state_32284__$1;
(statearr_32357_32420[(1)] = (13));

} else {
var statearr_32358_32421 = state_32284__$1;
(statearr_32358_32421[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (18))){
var inst_32209 = (state_32284[(2)]);
var state_32284__$1 = state_32284;
var statearr_32359_32422 = state_32284__$1;
(statearr_32359_32422[(2)] = inst_32209);

(statearr_32359_32422[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (42))){
var state_32284__$1 = state_32284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32284__$1,(45),dchan);
} else {
if((state_val_32285 === (37))){
var inst_32156 = (state_32284[(10)]);
var inst_32252 = (state_32284[(23)]);
var inst_32243 = (state_32284[(25)]);
var inst_32252__$1 = cljs.core.first.call(null,inst_32243);
var inst_32253 = cljs.core.async.put_BANG_.call(null,inst_32252__$1,inst_32156,done);
var state_32284__$1 = (function (){var statearr_32360 = state_32284;
(statearr_32360[(23)] = inst_32252__$1);

return statearr_32360;
})();
if(cljs.core.truth_(inst_32253)){
var statearr_32361_32423 = state_32284__$1;
(statearr_32361_32423[(1)] = (39));

} else {
var statearr_32362_32424 = state_32284__$1;
(statearr_32362_32424[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32285 === (8))){
var inst_32167 = (state_32284[(15)]);
var inst_32168 = (state_32284[(16)]);
var inst_32170 = (inst_32168 < inst_32167);
var inst_32171 = inst_32170;
var state_32284__$1 = state_32284;
if(cljs.core.truth_(inst_32171)){
var statearr_32363_32425 = state_32284__$1;
(statearr_32363_32425[(1)] = (10));

} else {
var statearr_32364_32426 = state_32284__$1;
(statearr_32364_32426[(1)] = (11));

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
});})(c__23143__auto___32372,cs,m,dchan,dctr,done))
;
return ((function (switch__23078__auto__,c__23143__auto___32372,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23079__auto__ = null;
var cljs$core$async$mult_$_state_machine__23079__auto____0 = (function (){
var statearr_32368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32368[(0)] = cljs$core$async$mult_$_state_machine__23079__auto__);

(statearr_32368[(1)] = (1));

return statearr_32368;
});
var cljs$core$async$mult_$_state_machine__23079__auto____1 = (function (state_32284){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_32284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e32369){if((e32369 instanceof Object)){
var ex__23082__auto__ = e32369;
var statearr_32370_32427 = state_32284;
(statearr_32370_32427[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32428 = state_32284;
state_32284 = G__32428;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23079__auto__ = function(state_32284){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23079__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23079__auto____1.call(this,state_32284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23079__auto____0;
cljs$core$async$mult_$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23079__auto____1;
return cljs$core$async$mult_$_state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto___32372,cs,m,dchan,dctr,done))
})();
var state__23145__auto__ = (function (){var statearr_32371 = f__23144__auto__.call(null);
(statearr_32371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto___32372);

return statearr_32371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___32372,cs,m,dchan,dctr,done))
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
var args32429 = [];
var len__17171__auto___32432 = arguments.length;
var i__17172__auto___32433 = (0);
while(true){
if((i__17172__auto___32433 < len__17171__auto___32432)){
args32429.push((arguments[i__17172__auto___32433]));

var G__32434 = (i__17172__auto___32433 + (1));
i__17172__auto___32433 = G__32434;
continue;
} else {
}
break;
}

var G__32431 = args32429.length;
switch (G__32431) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32429.length)].join('')));

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
var x__16768__auto__ = (((m == null))?null:m);
var m__16769__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16768__auto__)]);
if(!((m__16769__auto__ == null))){
return m__16769__auto__.call(null,m,ch);
} else {
var m__16769__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__16769__auto____$1 == null))){
return m__16769__auto____$1.call(null,m,ch);
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
var x__16768__auto__ = (((m == null))?null:m);
var m__16769__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16768__auto__)]);
if(!((m__16769__auto__ == null))){
return m__16769__auto__.call(null,m,ch);
} else {
var m__16769__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__16769__auto____$1 == null))){
return m__16769__auto____$1.call(null,m,ch);
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
var x__16768__auto__ = (((m == null))?null:m);
var m__16769__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16768__auto__)]);
if(!((m__16769__auto__ == null))){
return m__16769__auto__.call(null,m);
} else {
var m__16769__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__16769__auto____$1 == null))){
return m__16769__auto____$1.call(null,m);
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
var x__16768__auto__ = (((m == null))?null:m);
var m__16769__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16768__auto__)]);
if(!((m__16769__auto__ == null))){
return m__16769__auto__.call(null,m,state_map);
} else {
var m__16769__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__16769__auto____$1 == null))){
return m__16769__auto____$1.call(null,m,state_map);
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
var x__16768__auto__ = (((m == null))?null:m);
var m__16769__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16768__auto__)]);
if(!((m__16769__auto__ == null))){
return m__16769__auto__.call(null,m,mode);
} else {
var m__16769__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__16769__auto____$1 == null))){
return m__16769__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17178__auto__ = [];
var len__17171__auto___32446 = arguments.length;
var i__17172__auto___32447 = (0);
while(true){
if((i__17172__auto___32447 < len__17171__auto___32446)){
args__17178__auto__.push((arguments[i__17172__auto___32447]));

var G__32448 = (i__17172__auto___32447 + (1));
i__17172__auto___32447 = G__32448;
continue;
} else {
}
break;
}

var argseq__17179__auto__ = ((((3) < args__17178__auto__.length))?(new cljs.core.IndexedSeq(args__17178__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17179__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32440){
var map__32441 = p__32440;
var map__32441__$1 = ((((!((map__32441 == null)))?((((map__32441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32441):map__32441);
var opts = map__32441__$1;
var statearr_32443_32449 = state;
(statearr_32443_32449[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__32441,map__32441__$1,opts){
return (function (val){
var statearr_32444_32450 = state;
(statearr_32444_32450[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32441,map__32441__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_32445_32451 = state;
(statearr_32445_32451[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32436){
var G__32437 = cljs.core.first.call(null,seq32436);
var seq32436__$1 = cljs.core.next.call(null,seq32436);
var G__32438 = cljs.core.first.call(null,seq32436__$1);
var seq32436__$2 = cljs.core.next.call(null,seq32436__$1);
var G__32439 = cljs.core.first.call(null,seq32436__$2);
var seq32436__$3 = cljs.core.next.call(null,seq32436__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32437,G__32438,G__32439,seq32436__$3);
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
if(typeof cljs.core.async.t_cljs$core$async32615 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32615 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32616){
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
this.meta32616 = meta32616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32617,meta32616__$1){
var self__ = this;
var _32617__$1 = this;
return (new cljs.core.async.t_cljs$core$async32615(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32616__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32615.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32617){
var self__ = this;
var _32617__$1 = this;
return self__.meta32616;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32615.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32615.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32615.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async32615.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32615.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32615.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32615.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32615.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async32615.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32616","meta32616",1078555521,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32615.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32615";

cljs.core.async.t_cljs$core$async32615.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16711__auto__,writer__16712__auto__,opt__16713__auto__){
return cljs.core._write.call(null,writer__16712__auto__,"cljs.core.async/t_cljs$core$async32615");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32615 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32615(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32616){
return (new cljs.core.async.t_cljs$core$async32615(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32616));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32615(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23143__auto___32778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___32778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto___32778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32715){
var state_val_32716 = (state_32715[(1)]);
if((state_val_32716 === (7))){
var inst_32633 = (state_32715[(2)]);
var state_32715__$1 = state_32715;
var statearr_32717_32779 = state_32715__$1;
(statearr_32717_32779[(2)] = inst_32633);

(statearr_32717_32779[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (20))){
var inst_32645 = (state_32715[(7)]);
var state_32715__$1 = state_32715;
var statearr_32718_32780 = state_32715__$1;
(statearr_32718_32780[(2)] = inst_32645);

(statearr_32718_32780[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (27))){
var state_32715__$1 = state_32715;
var statearr_32719_32781 = state_32715__$1;
(statearr_32719_32781[(2)] = null);

(statearr_32719_32781[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (1))){
var inst_32621 = (state_32715[(8)]);
var inst_32621__$1 = calc_state.call(null);
var inst_32623 = (inst_32621__$1 == null);
var inst_32624 = cljs.core.not.call(null,inst_32623);
var state_32715__$1 = (function (){var statearr_32720 = state_32715;
(statearr_32720[(8)] = inst_32621__$1);

return statearr_32720;
})();
if(inst_32624){
var statearr_32721_32782 = state_32715__$1;
(statearr_32721_32782[(1)] = (2));

} else {
var statearr_32722_32783 = state_32715__$1;
(statearr_32722_32783[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (24))){
var inst_32668 = (state_32715[(9)]);
var inst_32675 = (state_32715[(10)]);
var inst_32689 = (state_32715[(11)]);
var inst_32689__$1 = inst_32668.call(null,inst_32675);
var state_32715__$1 = (function (){var statearr_32723 = state_32715;
(statearr_32723[(11)] = inst_32689__$1);

return statearr_32723;
})();
if(cljs.core.truth_(inst_32689__$1)){
var statearr_32724_32784 = state_32715__$1;
(statearr_32724_32784[(1)] = (29));

} else {
var statearr_32725_32785 = state_32715__$1;
(statearr_32725_32785[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (4))){
var inst_32636 = (state_32715[(2)]);
var state_32715__$1 = state_32715;
if(cljs.core.truth_(inst_32636)){
var statearr_32726_32786 = state_32715__$1;
(statearr_32726_32786[(1)] = (8));

} else {
var statearr_32727_32787 = state_32715__$1;
(statearr_32727_32787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (15))){
var inst_32662 = (state_32715[(2)]);
var state_32715__$1 = state_32715;
if(cljs.core.truth_(inst_32662)){
var statearr_32728_32788 = state_32715__$1;
(statearr_32728_32788[(1)] = (19));

} else {
var statearr_32729_32789 = state_32715__$1;
(statearr_32729_32789[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (21))){
var inst_32667 = (state_32715[(12)]);
var inst_32667__$1 = (state_32715[(2)]);
var inst_32668 = cljs.core.get.call(null,inst_32667__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32669 = cljs.core.get.call(null,inst_32667__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32670 = cljs.core.get.call(null,inst_32667__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32715__$1 = (function (){var statearr_32730 = state_32715;
(statearr_32730[(12)] = inst_32667__$1);

(statearr_32730[(9)] = inst_32668);

(statearr_32730[(13)] = inst_32669);

return statearr_32730;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32715__$1,(22),inst_32670);
} else {
if((state_val_32716 === (31))){
var inst_32697 = (state_32715[(2)]);
var state_32715__$1 = state_32715;
if(cljs.core.truth_(inst_32697)){
var statearr_32731_32790 = state_32715__$1;
(statearr_32731_32790[(1)] = (32));

} else {
var statearr_32732_32791 = state_32715__$1;
(statearr_32732_32791[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (32))){
var inst_32674 = (state_32715[(14)]);
var state_32715__$1 = state_32715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32715__$1,(35),out,inst_32674);
} else {
if((state_val_32716 === (33))){
var inst_32667 = (state_32715[(12)]);
var inst_32645 = inst_32667;
var state_32715__$1 = (function (){var statearr_32733 = state_32715;
(statearr_32733[(7)] = inst_32645);

return statearr_32733;
})();
var statearr_32734_32792 = state_32715__$1;
(statearr_32734_32792[(2)] = null);

(statearr_32734_32792[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (13))){
var inst_32645 = (state_32715[(7)]);
var inst_32652 = inst_32645.cljs$lang$protocol_mask$partition0$;
var inst_32653 = (inst_32652 & (64));
var inst_32654 = inst_32645.cljs$core$ISeq$;
var inst_32655 = (inst_32653) || (inst_32654);
var state_32715__$1 = state_32715;
if(cljs.core.truth_(inst_32655)){
var statearr_32735_32793 = state_32715__$1;
(statearr_32735_32793[(1)] = (16));

} else {
var statearr_32736_32794 = state_32715__$1;
(statearr_32736_32794[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (22))){
var inst_32674 = (state_32715[(14)]);
var inst_32675 = (state_32715[(10)]);
var inst_32673 = (state_32715[(2)]);
var inst_32674__$1 = cljs.core.nth.call(null,inst_32673,(0),null);
var inst_32675__$1 = cljs.core.nth.call(null,inst_32673,(1),null);
var inst_32676 = (inst_32674__$1 == null);
var inst_32677 = cljs.core._EQ_.call(null,inst_32675__$1,change);
var inst_32678 = (inst_32676) || (inst_32677);
var state_32715__$1 = (function (){var statearr_32737 = state_32715;
(statearr_32737[(14)] = inst_32674__$1);

(statearr_32737[(10)] = inst_32675__$1);

return statearr_32737;
})();
if(cljs.core.truth_(inst_32678)){
var statearr_32738_32795 = state_32715__$1;
(statearr_32738_32795[(1)] = (23));

} else {
var statearr_32739_32796 = state_32715__$1;
(statearr_32739_32796[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (36))){
var inst_32667 = (state_32715[(12)]);
var inst_32645 = inst_32667;
var state_32715__$1 = (function (){var statearr_32740 = state_32715;
(statearr_32740[(7)] = inst_32645);

return statearr_32740;
})();
var statearr_32741_32797 = state_32715__$1;
(statearr_32741_32797[(2)] = null);

(statearr_32741_32797[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (29))){
var inst_32689 = (state_32715[(11)]);
var state_32715__$1 = state_32715;
var statearr_32742_32798 = state_32715__$1;
(statearr_32742_32798[(2)] = inst_32689);

(statearr_32742_32798[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (6))){
var state_32715__$1 = state_32715;
var statearr_32743_32799 = state_32715__$1;
(statearr_32743_32799[(2)] = false);

(statearr_32743_32799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (28))){
var inst_32685 = (state_32715[(2)]);
var inst_32686 = calc_state.call(null);
var inst_32645 = inst_32686;
var state_32715__$1 = (function (){var statearr_32744 = state_32715;
(statearr_32744[(7)] = inst_32645);

(statearr_32744[(15)] = inst_32685);

return statearr_32744;
})();
var statearr_32745_32800 = state_32715__$1;
(statearr_32745_32800[(2)] = null);

(statearr_32745_32800[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (25))){
var inst_32711 = (state_32715[(2)]);
var state_32715__$1 = state_32715;
var statearr_32746_32801 = state_32715__$1;
(statearr_32746_32801[(2)] = inst_32711);

(statearr_32746_32801[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (34))){
var inst_32709 = (state_32715[(2)]);
var state_32715__$1 = state_32715;
var statearr_32747_32802 = state_32715__$1;
(statearr_32747_32802[(2)] = inst_32709);

(statearr_32747_32802[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (17))){
var state_32715__$1 = state_32715;
var statearr_32748_32803 = state_32715__$1;
(statearr_32748_32803[(2)] = false);

(statearr_32748_32803[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (3))){
var state_32715__$1 = state_32715;
var statearr_32749_32804 = state_32715__$1;
(statearr_32749_32804[(2)] = false);

(statearr_32749_32804[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (12))){
var inst_32713 = (state_32715[(2)]);
var state_32715__$1 = state_32715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32715__$1,inst_32713);
} else {
if((state_val_32716 === (2))){
var inst_32621 = (state_32715[(8)]);
var inst_32626 = inst_32621.cljs$lang$protocol_mask$partition0$;
var inst_32627 = (inst_32626 & (64));
var inst_32628 = inst_32621.cljs$core$ISeq$;
var inst_32629 = (inst_32627) || (inst_32628);
var state_32715__$1 = state_32715;
if(cljs.core.truth_(inst_32629)){
var statearr_32750_32805 = state_32715__$1;
(statearr_32750_32805[(1)] = (5));

} else {
var statearr_32751_32806 = state_32715__$1;
(statearr_32751_32806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (23))){
var inst_32674 = (state_32715[(14)]);
var inst_32680 = (inst_32674 == null);
var state_32715__$1 = state_32715;
if(cljs.core.truth_(inst_32680)){
var statearr_32752_32807 = state_32715__$1;
(statearr_32752_32807[(1)] = (26));

} else {
var statearr_32753_32808 = state_32715__$1;
(statearr_32753_32808[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (35))){
var inst_32700 = (state_32715[(2)]);
var state_32715__$1 = state_32715;
if(cljs.core.truth_(inst_32700)){
var statearr_32754_32809 = state_32715__$1;
(statearr_32754_32809[(1)] = (36));

} else {
var statearr_32755_32810 = state_32715__$1;
(statearr_32755_32810[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (19))){
var inst_32645 = (state_32715[(7)]);
var inst_32664 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32645);
var state_32715__$1 = state_32715;
var statearr_32756_32811 = state_32715__$1;
(statearr_32756_32811[(2)] = inst_32664);

(statearr_32756_32811[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (11))){
var inst_32645 = (state_32715[(7)]);
var inst_32649 = (inst_32645 == null);
var inst_32650 = cljs.core.not.call(null,inst_32649);
var state_32715__$1 = state_32715;
if(inst_32650){
var statearr_32757_32812 = state_32715__$1;
(statearr_32757_32812[(1)] = (13));

} else {
var statearr_32758_32813 = state_32715__$1;
(statearr_32758_32813[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (9))){
var inst_32621 = (state_32715[(8)]);
var state_32715__$1 = state_32715;
var statearr_32759_32814 = state_32715__$1;
(statearr_32759_32814[(2)] = inst_32621);

(statearr_32759_32814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (5))){
var state_32715__$1 = state_32715;
var statearr_32760_32815 = state_32715__$1;
(statearr_32760_32815[(2)] = true);

(statearr_32760_32815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (14))){
var state_32715__$1 = state_32715;
var statearr_32761_32816 = state_32715__$1;
(statearr_32761_32816[(2)] = false);

(statearr_32761_32816[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (26))){
var inst_32675 = (state_32715[(10)]);
var inst_32682 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32675);
var state_32715__$1 = state_32715;
var statearr_32762_32817 = state_32715__$1;
(statearr_32762_32817[(2)] = inst_32682);

(statearr_32762_32817[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (16))){
var state_32715__$1 = state_32715;
var statearr_32763_32818 = state_32715__$1;
(statearr_32763_32818[(2)] = true);

(statearr_32763_32818[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (38))){
var inst_32705 = (state_32715[(2)]);
var state_32715__$1 = state_32715;
var statearr_32764_32819 = state_32715__$1;
(statearr_32764_32819[(2)] = inst_32705);

(statearr_32764_32819[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (30))){
var inst_32668 = (state_32715[(9)]);
var inst_32675 = (state_32715[(10)]);
var inst_32669 = (state_32715[(13)]);
var inst_32692 = cljs.core.empty_QMARK_.call(null,inst_32668);
var inst_32693 = inst_32669.call(null,inst_32675);
var inst_32694 = cljs.core.not.call(null,inst_32693);
var inst_32695 = (inst_32692) && (inst_32694);
var state_32715__$1 = state_32715;
var statearr_32765_32820 = state_32715__$1;
(statearr_32765_32820[(2)] = inst_32695);

(statearr_32765_32820[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (10))){
var inst_32621 = (state_32715[(8)]);
var inst_32641 = (state_32715[(2)]);
var inst_32642 = cljs.core.get.call(null,inst_32641,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32643 = cljs.core.get.call(null,inst_32641,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32644 = cljs.core.get.call(null,inst_32641,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32645 = inst_32621;
var state_32715__$1 = (function (){var statearr_32766 = state_32715;
(statearr_32766[(16)] = inst_32644);

(statearr_32766[(17)] = inst_32642);

(statearr_32766[(7)] = inst_32645);

(statearr_32766[(18)] = inst_32643);

return statearr_32766;
})();
var statearr_32767_32821 = state_32715__$1;
(statearr_32767_32821[(2)] = null);

(statearr_32767_32821[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (18))){
var inst_32659 = (state_32715[(2)]);
var state_32715__$1 = state_32715;
var statearr_32768_32822 = state_32715__$1;
(statearr_32768_32822[(2)] = inst_32659);

(statearr_32768_32822[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (37))){
var state_32715__$1 = state_32715;
var statearr_32769_32823 = state_32715__$1;
(statearr_32769_32823[(2)] = null);

(statearr_32769_32823[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (8))){
var inst_32621 = (state_32715[(8)]);
var inst_32638 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32621);
var state_32715__$1 = state_32715;
var statearr_32770_32824 = state_32715__$1;
(statearr_32770_32824[(2)] = inst_32638);

(statearr_32770_32824[(1)] = (10));


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
});})(c__23143__auto___32778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23078__auto__,c__23143__auto___32778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23079__auto__ = null;
var cljs$core$async$mix_$_state_machine__23079__auto____0 = (function (){
var statearr_32774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32774[(0)] = cljs$core$async$mix_$_state_machine__23079__auto__);

(statearr_32774[(1)] = (1));

return statearr_32774;
});
var cljs$core$async$mix_$_state_machine__23079__auto____1 = (function (state_32715){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_32715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e32775){if((e32775 instanceof Object)){
var ex__23082__auto__ = e32775;
var statearr_32776_32825 = state_32715;
(statearr_32776_32825[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32826 = state_32715;
state_32715 = G__32826;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23079__auto__ = function(state_32715){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23079__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23079__auto____1.call(this,state_32715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23079__auto____0;
cljs$core$async$mix_$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23079__auto____1;
return cljs$core$async$mix_$_state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto___32778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23145__auto__ = (function (){var statearr_32777 = f__23144__auto__.call(null);
(statearr_32777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto___32778);

return statearr_32777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___32778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__16768__auto__ = (((p == null))?null:p);
var m__16769__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16768__auto__)]);
if(!((m__16769__auto__ == null))){
return m__16769__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__16769__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__16769__auto____$1 == null))){
return m__16769__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__16768__auto__ = (((p == null))?null:p);
var m__16769__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16768__auto__)]);
if(!((m__16769__auto__ == null))){
return m__16769__auto__.call(null,p,v,ch);
} else {
var m__16769__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__16769__auto____$1 == null))){
return m__16769__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args32827 = [];
var len__17171__auto___32830 = arguments.length;
var i__17172__auto___32831 = (0);
while(true){
if((i__17172__auto___32831 < len__17171__auto___32830)){
args32827.push((arguments[i__17172__auto___32831]));

var G__32832 = (i__17172__auto___32831 + (1));
i__17172__auto___32831 = G__32832;
continue;
} else {
}
break;
}

var G__32829 = args32827.length;
switch (G__32829) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32827.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16768__auto__ = (((p == null))?null:p);
var m__16769__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16768__auto__)]);
if(!((m__16769__auto__ == null))){
return m__16769__auto__.call(null,p);
} else {
var m__16769__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16769__auto____$1 == null))){
return m__16769__auto____$1.call(null,p);
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
var x__16768__auto__ = (((p == null))?null:p);
var m__16769__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16768__auto__)]);
if(!((m__16769__auto__ == null))){
return m__16769__auto__.call(null,p,v);
} else {
var m__16769__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16769__auto____$1 == null))){
return m__16769__auto____$1.call(null,p,v);
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
var args32835 = [];
var len__17171__auto___32960 = arguments.length;
var i__17172__auto___32961 = (0);
while(true){
if((i__17172__auto___32961 < len__17171__auto___32960)){
args32835.push((arguments[i__17172__auto___32961]));

var G__32962 = (i__17172__auto___32961 + (1));
i__17172__auto___32961 = G__32962;
continue;
} else {
}
break;
}

var G__32837 = args32835.length;
switch (G__32837) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32835.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16113__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16113__auto__)){
return or__16113__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16113__auto__,mults){
return (function (p1__32834_SHARP_){
if(cljs.core.truth_(p1__32834_SHARP_.call(null,topic))){
return p1__32834_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32834_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16113__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32838 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32838 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32839){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32839 = meta32839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32840,meta32839__$1){
var self__ = this;
var _32840__$1 = this;
return (new cljs.core.async.t_cljs$core$async32838(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32839__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32838.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32840){
var self__ = this;
var _32840__$1 = this;
return self__.meta32839;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32838.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32838.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32838.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async32838.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32838.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async32838.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32838.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32838.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32839","meta32839",1901742144,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32838.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32838";

cljs.core.async.t_cljs$core$async32838.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16711__auto__,writer__16712__auto__,opt__16713__auto__){
return cljs.core._write.call(null,writer__16712__auto__,"cljs.core.async/t_cljs$core$async32838");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32838 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32838(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32839){
return (new cljs.core.async.t_cljs$core$async32838(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32839));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32838(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23143__auto___32964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___32964,mults,ensure_mult,p){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto___32964,mults,ensure_mult,p){
return (function (state_32912){
var state_val_32913 = (state_32912[(1)]);
if((state_val_32913 === (7))){
var inst_32908 = (state_32912[(2)]);
var state_32912__$1 = state_32912;
var statearr_32914_32965 = state_32912__$1;
(statearr_32914_32965[(2)] = inst_32908);

(statearr_32914_32965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (20))){
var state_32912__$1 = state_32912;
var statearr_32915_32966 = state_32912__$1;
(statearr_32915_32966[(2)] = null);

(statearr_32915_32966[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (1))){
var state_32912__$1 = state_32912;
var statearr_32916_32967 = state_32912__$1;
(statearr_32916_32967[(2)] = null);

(statearr_32916_32967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (24))){
var inst_32891 = (state_32912[(7)]);
var inst_32900 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32891);
var state_32912__$1 = state_32912;
var statearr_32917_32968 = state_32912__$1;
(statearr_32917_32968[(2)] = inst_32900);

(statearr_32917_32968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (4))){
var inst_32843 = (state_32912[(8)]);
var inst_32843__$1 = (state_32912[(2)]);
var inst_32844 = (inst_32843__$1 == null);
var state_32912__$1 = (function (){var statearr_32918 = state_32912;
(statearr_32918[(8)] = inst_32843__$1);

return statearr_32918;
})();
if(cljs.core.truth_(inst_32844)){
var statearr_32919_32969 = state_32912__$1;
(statearr_32919_32969[(1)] = (5));

} else {
var statearr_32920_32970 = state_32912__$1;
(statearr_32920_32970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (15))){
var inst_32885 = (state_32912[(2)]);
var state_32912__$1 = state_32912;
var statearr_32921_32971 = state_32912__$1;
(statearr_32921_32971[(2)] = inst_32885);

(statearr_32921_32971[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (21))){
var inst_32905 = (state_32912[(2)]);
var state_32912__$1 = (function (){var statearr_32922 = state_32912;
(statearr_32922[(9)] = inst_32905);

return statearr_32922;
})();
var statearr_32923_32972 = state_32912__$1;
(statearr_32923_32972[(2)] = null);

(statearr_32923_32972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (13))){
var inst_32867 = (state_32912[(10)]);
var inst_32869 = cljs.core.chunked_seq_QMARK_.call(null,inst_32867);
var state_32912__$1 = state_32912;
if(inst_32869){
var statearr_32924_32973 = state_32912__$1;
(statearr_32924_32973[(1)] = (16));

} else {
var statearr_32925_32974 = state_32912__$1;
(statearr_32925_32974[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (22))){
var inst_32897 = (state_32912[(2)]);
var state_32912__$1 = state_32912;
if(cljs.core.truth_(inst_32897)){
var statearr_32926_32975 = state_32912__$1;
(statearr_32926_32975[(1)] = (23));

} else {
var statearr_32927_32976 = state_32912__$1;
(statearr_32927_32976[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (6))){
var inst_32843 = (state_32912[(8)]);
var inst_32893 = (state_32912[(11)]);
var inst_32891 = (state_32912[(7)]);
var inst_32891__$1 = topic_fn.call(null,inst_32843);
var inst_32892 = cljs.core.deref.call(null,mults);
var inst_32893__$1 = cljs.core.get.call(null,inst_32892,inst_32891__$1);
var state_32912__$1 = (function (){var statearr_32928 = state_32912;
(statearr_32928[(11)] = inst_32893__$1);

(statearr_32928[(7)] = inst_32891__$1);

return statearr_32928;
})();
if(cljs.core.truth_(inst_32893__$1)){
var statearr_32929_32977 = state_32912__$1;
(statearr_32929_32977[(1)] = (19));

} else {
var statearr_32930_32978 = state_32912__$1;
(statearr_32930_32978[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (25))){
var inst_32902 = (state_32912[(2)]);
var state_32912__$1 = state_32912;
var statearr_32931_32979 = state_32912__$1;
(statearr_32931_32979[(2)] = inst_32902);

(statearr_32931_32979[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (17))){
var inst_32867 = (state_32912[(10)]);
var inst_32876 = cljs.core.first.call(null,inst_32867);
var inst_32877 = cljs.core.async.muxch_STAR_.call(null,inst_32876);
var inst_32878 = cljs.core.async.close_BANG_.call(null,inst_32877);
var inst_32879 = cljs.core.next.call(null,inst_32867);
var inst_32853 = inst_32879;
var inst_32854 = null;
var inst_32855 = (0);
var inst_32856 = (0);
var state_32912__$1 = (function (){var statearr_32932 = state_32912;
(statearr_32932[(12)] = inst_32854);

(statearr_32932[(13)] = inst_32878);

(statearr_32932[(14)] = inst_32856);

(statearr_32932[(15)] = inst_32853);

(statearr_32932[(16)] = inst_32855);

return statearr_32932;
})();
var statearr_32933_32980 = state_32912__$1;
(statearr_32933_32980[(2)] = null);

(statearr_32933_32980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (3))){
var inst_32910 = (state_32912[(2)]);
var state_32912__$1 = state_32912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32912__$1,inst_32910);
} else {
if((state_val_32913 === (12))){
var inst_32887 = (state_32912[(2)]);
var state_32912__$1 = state_32912;
var statearr_32934_32981 = state_32912__$1;
(statearr_32934_32981[(2)] = inst_32887);

(statearr_32934_32981[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (2))){
var state_32912__$1 = state_32912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32912__$1,(4),ch);
} else {
if((state_val_32913 === (23))){
var state_32912__$1 = state_32912;
var statearr_32935_32982 = state_32912__$1;
(statearr_32935_32982[(2)] = null);

(statearr_32935_32982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (19))){
var inst_32843 = (state_32912[(8)]);
var inst_32893 = (state_32912[(11)]);
var inst_32895 = cljs.core.async.muxch_STAR_.call(null,inst_32893);
var state_32912__$1 = state_32912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32912__$1,(22),inst_32895,inst_32843);
} else {
if((state_val_32913 === (11))){
var inst_32867 = (state_32912[(10)]);
var inst_32853 = (state_32912[(15)]);
var inst_32867__$1 = cljs.core.seq.call(null,inst_32853);
var state_32912__$1 = (function (){var statearr_32936 = state_32912;
(statearr_32936[(10)] = inst_32867__$1);

return statearr_32936;
})();
if(inst_32867__$1){
var statearr_32937_32983 = state_32912__$1;
(statearr_32937_32983[(1)] = (13));

} else {
var statearr_32938_32984 = state_32912__$1;
(statearr_32938_32984[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (9))){
var inst_32889 = (state_32912[(2)]);
var state_32912__$1 = state_32912;
var statearr_32939_32985 = state_32912__$1;
(statearr_32939_32985[(2)] = inst_32889);

(statearr_32939_32985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (5))){
var inst_32850 = cljs.core.deref.call(null,mults);
var inst_32851 = cljs.core.vals.call(null,inst_32850);
var inst_32852 = cljs.core.seq.call(null,inst_32851);
var inst_32853 = inst_32852;
var inst_32854 = null;
var inst_32855 = (0);
var inst_32856 = (0);
var state_32912__$1 = (function (){var statearr_32940 = state_32912;
(statearr_32940[(12)] = inst_32854);

(statearr_32940[(14)] = inst_32856);

(statearr_32940[(15)] = inst_32853);

(statearr_32940[(16)] = inst_32855);

return statearr_32940;
})();
var statearr_32941_32986 = state_32912__$1;
(statearr_32941_32986[(2)] = null);

(statearr_32941_32986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (14))){
var state_32912__$1 = state_32912;
var statearr_32945_32987 = state_32912__$1;
(statearr_32945_32987[(2)] = null);

(statearr_32945_32987[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (16))){
var inst_32867 = (state_32912[(10)]);
var inst_32871 = cljs.core.chunk_first.call(null,inst_32867);
var inst_32872 = cljs.core.chunk_rest.call(null,inst_32867);
var inst_32873 = cljs.core.count.call(null,inst_32871);
var inst_32853 = inst_32872;
var inst_32854 = inst_32871;
var inst_32855 = inst_32873;
var inst_32856 = (0);
var state_32912__$1 = (function (){var statearr_32946 = state_32912;
(statearr_32946[(12)] = inst_32854);

(statearr_32946[(14)] = inst_32856);

(statearr_32946[(15)] = inst_32853);

(statearr_32946[(16)] = inst_32855);

return statearr_32946;
})();
var statearr_32947_32988 = state_32912__$1;
(statearr_32947_32988[(2)] = null);

(statearr_32947_32988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (10))){
var inst_32854 = (state_32912[(12)]);
var inst_32856 = (state_32912[(14)]);
var inst_32853 = (state_32912[(15)]);
var inst_32855 = (state_32912[(16)]);
var inst_32861 = cljs.core._nth.call(null,inst_32854,inst_32856);
var inst_32862 = cljs.core.async.muxch_STAR_.call(null,inst_32861);
var inst_32863 = cljs.core.async.close_BANG_.call(null,inst_32862);
var inst_32864 = (inst_32856 + (1));
var tmp32942 = inst_32854;
var tmp32943 = inst_32853;
var tmp32944 = inst_32855;
var inst_32853__$1 = tmp32943;
var inst_32854__$1 = tmp32942;
var inst_32855__$1 = tmp32944;
var inst_32856__$1 = inst_32864;
var state_32912__$1 = (function (){var statearr_32948 = state_32912;
(statearr_32948[(12)] = inst_32854__$1);

(statearr_32948[(14)] = inst_32856__$1);

(statearr_32948[(15)] = inst_32853__$1);

(statearr_32948[(17)] = inst_32863);

(statearr_32948[(16)] = inst_32855__$1);

return statearr_32948;
})();
var statearr_32949_32989 = state_32912__$1;
(statearr_32949_32989[(2)] = null);

(statearr_32949_32989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (18))){
var inst_32882 = (state_32912[(2)]);
var state_32912__$1 = state_32912;
var statearr_32950_32990 = state_32912__$1;
(statearr_32950_32990[(2)] = inst_32882);

(statearr_32950_32990[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (8))){
var inst_32856 = (state_32912[(14)]);
var inst_32855 = (state_32912[(16)]);
var inst_32858 = (inst_32856 < inst_32855);
var inst_32859 = inst_32858;
var state_32912__$1 = state_32912;
if(cljs.core.truth_(inst_32859)){
var statearr_32951_32991 = state_32912__$1;
(statearr_32951_32991[(1)] = (10));

} else {
var statearr_32952_32992 = state_32912__$1;
(statearr_32952_32992[(1)] = (11));

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
});})(c__23143__auto___32964,mults,ensure_mult,p))
;
return ((function (switch__23078__auto__,c__23143__auto___32964,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23079__auto__ = null;
var cljs$core$async$state_machine__23079__auto____0 = (function (){
var statearr_32956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32956[(0)] = cljs$core$async$state_machine__23079__auto__);

(statearr_32956[(1)] = (1));

return statearr_32956;
});
var cljs$core$async$state_machine__23079__auto____1 = (function (state_32912){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_32912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e32957){if((e32957 instanceof Object)){
var ex__23082__auto__ = e32957;
var statearr_32958_32993 = state_32912;
(statearr_32958_32993[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32994 = state_32912;
state_32912 = G__32994;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
cljs$core$async$state_machine__23079__auto__ = function(state_32912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23079__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23079__auto____1.call(this,state_32912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23079__auto____0;
cljs$core$async$state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23079__auto____1;
return cljs$core$async$state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto___32964,mults,ensure_mult,p))
})();
var state__23145__auto__ = (function (){var statearr_32959 = f__23144__auto__.call(null);
(statearr_32959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto___32964);

return statearr_32959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___32964,mults,ensure_mult,p))
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
var args32995 = [];
var len__17171__auto___32998 = arguments.length;
var i__17172__auto___32999 = (0);
while(true){
if((i__17172__auto___32999 < len__17171__auto___32998)){
args32995.push((arguments[i__17172__auto___32999]));

var G__33000 = (i__17172__auto___32999 + (1));
i__17172__auto___32999 = G__33000;
continue;
} else {
}
break;
}

var G__32997 = args32995.length;
switch (G__32997) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32995.length)].join('')));

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
var args33002 = [];
var len__17171__auto___33005 = arguments.length;
var i__17172__auto___33006 = (0);
while(true){
if((i__17172__auto___33006 < len__17171__auto___33005)){
args33002.push((arguments[i__17172__auto___33006]));

var G__33007 = (i__17172__auto___33006 + (1));
i__17172__auto___33006 = G__33007;
continue;
} else {
}
break;
}

var G__33004 = args33002.length;
switch (G__33004) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33002.length)].join('')));

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
var args33009 = [];
var len__17171__auto___33080 = arguments.length;
var i__17172__auto___33081 = (0);
while(true){
if((i__17172__auto___33081 < len__17171__auto___33080)){
args33009.push((arguments[i__17172__auto___33081]));

var G__33082 = (i__17172__auto___33081 + (1));
i__17172__auto___33081 = G__33082;
continue;
} else {
}
break;
}

var G__33011 = args33009.length;
switch (G__33011) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33009.length)].join('')));

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
var c__23143__auto___33084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___33084,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto___33084,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33050){
var state_val_33051 = (state_33050[(1)]);
if((state_val_33051 === (7))){
var state_33050__$1 = state_33050;
var statearr_33052_33085 = state_33050__$1;
(statearr_33052_33085[(2)] = null);

(statearr_33052_33085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (1))){
var state_33050__$1 = state_33050;
var statearr_33053_33086 = state_33050__$1;
(statearr_33053_33086[(2)] = null);

(statearr_33053_33086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (4))){
var inst_33014 = (state_33050[(7)]);
var inst_33016 = (inst_33014 < cnt);
var state_33050__$1 = state_33050;
if(cljs.core.truth_(inst_33016)){
var statearr_33054_33087 = state_33050__$1;
(statearr_33054_33087[(1)] = (6));

} else {
var statearr_33055_33088 = state_33050__$1;
(statearr_33055_33088[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (15))){
var inst_33046 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
var statearr_33056_33089 = state_33050__$1;
(statearr_33056_33089[(2)] = inst_33046);

(statearr_33056_33089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (13))){
var inst_33039 = cljs.core.async.close_BANG_.call(null,out);
var state_33050__$1 = state_33050;
var statearr_33057_33090 = state_33050__$1;
(statearr_33057_33090[(2)] = inst_33039);

(statearr_33057_33090[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (6))){
var state_33050__$1 = state_33050;
var statearr_33058_33091 = state_33050__$1;
(statearr_33058_33091[(2)] = null);

(statearr_33058_33091[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (3))){
var inst_33048 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33050__$1,inst_33048);
} else {
if((state_val_33051 === (12))){
var inst_33036 = (state_33050[(8)]);
var inst_33036__$1 = (state_33050[(2)]);
var inst_33037 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33036__$1);
var state_33050__$1 = (function (){var statearr_33059 = state_33050;
(statearr_33059[(8)] = inst_33036__$1);

return statearr_33059;
})();
if(cljs.core.truth_(inst_33037)){
var statearr_33060_33092 = state_33050__$1;
(statearr_33060_33092[(1)] = (13));

} else {
var statearr_33061_33093 = state_33050__$1;
(statearr_33061_33093[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (2))){
var inst_33013 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33014 = (0);
var state_33050__$1 = (function (){var statearr_33062 = state_33050;
(statearr_33062[(9)] = inst_33013);

(statearr_33062[(7)] = inst_33014);

return statearr_33062;
})();
var statearr_33063_33094 = state_33050__$1;
(statearr_33063_33094[(2)] = null);

(statearr_33063_33094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (11))){
var inst_33014 = (state_33050[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33050,(10),Object,null,(9));
var inst_33023 = chs__$1.call(null,inst_33014);
var inst_33024 = done.call(null,inst_33014);
var inst_33025 = cljs.core.async.take_BANG_.call(null,inst_33023,inst_33024);
var state_33050__$1 = state_33050;
var statearr_33064_33095 = state_33050__$1;
(statearr_33064_33095[(2)] = inst_33025);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33050__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (9))){
var inst_33014 = (state_33050[(7)]);
var inst_33027 = (state_33050[(2)]);
var inst_33028 = (inst_33014 + (1));
var inst_33014__$1 = inst_33028;
var state_33050__$1 = (function (){var statearr_33065 = state_33050;
(statearr_33065[(7)] = inst_33014__$1);

(statearr_33065[(10)] = inst_33027);

return statearr_33065;
})();
var statearr_33066_33096 = state_33050__$1;
(statearr_33066_33096[(2)] = null);

(statearr_33066_33096[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (5))){
var inst_33034 = (state_33050[(2)]);
var state_33050__$1 = (function (){var statearr_33067 = state_33050;
(statearr_33067[(11)] = inst_33034);

return statearr_33067;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33050__$1,(12),dchan);
} else {
if((state_val_33051 === (14))){
var inst_33036 = (state_33050[(8)]);
var inst_33041 = cljs.core.apply.call(null,f,inst_33036);
var state_33050__$1 = state_33050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33050__$1,(16),out,inst_33041);
} else {
if((state_val_33051 === (16))){
var inst_33043 = (state_33050[(2)]);
var state_33050__$1 = (function (){var statearr_33068 = state_33050;
(statearr_33068[(12)] = inst_33043);

return statearr_33068;
})();
var statearr_33069_33097 = state_33050__$1;
(statearr_33069_33097[(2)] = null);

(statearr_33069_33097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (10))){
var inst_33018 = (state_33050[(2)]);
var inst_33019 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33050__$1 = (function (){var statearr_33070 = state_33050;
(statearr_33070[(13)] = inst_33018);

return statearr_33070;
})();
var statearr_33071_33098 = state_33050__$1;
(statearr_33071_33098[(2)] = inst_33019);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33050__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (8))){
var inst_33032 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
var statearr_33072_33099 = state_33050__$1;
(statearr_33072_33099[(2)] = inst_33032);

(statearr_33072_33099[(1)] = (5));


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
});})(c__23143__auto___33084,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23078__auto__,c__23143__auto___33084,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23079__auto__ = null;
var cljs$core$async$state_machine__23079__auto____0 = (function (){
var statearr_33076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33076[(0)] = cljs$core$async$state_machine__23079__auto__);

(statearr_33076[(1)] = (1));

return statearr_33076;
});
var cljs$core$async$state_machine__23079__auto____1 = (function (state_33050){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_33050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e33077){if((e33077 instanceof Object)){
var ex__23082__auto__ = e33077;
var statearr_33078_33100 = state_33050;
(statearr_33078_33100[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33101 = state_33050;
state_33050 = G__33101;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
cljs$core$async$state_machine__23079__auto__ = function(state_33050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23079__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23079__auto____1.call(this,state_33050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23079__auto____0;
cljs$core$async$state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23079__auto____1;
return cljs$core$async$state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto___33084,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23145__auto__ = (function (){var statearr_33079 = f__23144__auto__.call(null);
(statearr_33079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto___33084);

return statearr_33079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___33084,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args33103 = [];
var len__17171__auto___33159 = arguments.length;
var i__17172__auto___33160 = (0);
while(true){
if((i__17172__auto___33160 < len__17171__auto___33159)){
args33103.push((arguments[i__17172__auto___33160]));

var G__33161 = (i__17172__auto___33160 + (1));
i__17172__auto___33160 = G__33161;
continue;
} else {
}
break;
}

var G__33105 = args33103.length;
switch (G__33105) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33103.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23143__auto___33163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___33163,out){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto___33163,out){
return (function (state_33135){
var state_val_33136 = (state_33135[(1)]);
if((state_val_33136 === (7))){
var inst_33114 = (state_33135[(7)]);
var inst_33115 = (state_33135[(8)]);
var inst_33114__$1 = (state_33135[(2)]);
var inst_33115__$1 = cljs.core.nth.call(null,inst_33114__$1,(0),null);
var inst_33116 = cljs.core.nth.call(null,inst_33114__$1,(1),null);
var inst_33117 = (inst_33115__$1 == null);
var state_33135__$1 = (function (){var statearr_33137 = state_33135;
(statearr_33137[(7)] = inst_33114__$1);

(statearr_33137[(8)] = inst_33115__$1);

(statearr_33137[(9)] = inst_33116);

return statearr_33137;
})();
if(cljs.core.truth_(inst_33117)){
var statearr_33138_33164 = state_33135__$1;
(statearr_33138_33164[(1)] = (8));

} else {
var statearr_33139_33165 = state_33135__$1;
(statearr_33139_33165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (1))){
var inst_33106 = cljs.core.vec.call(null,chs);
var inst_33107 = inst_33106;
var state_33135__$1 = (function (){var statearr_33140 = state_33135;
(statearr_33140[(10)] = inst_33107);

return statearr_33140;
})();
var statearr_33141_33166 = state_33135__$1;
(statearr_33141_33166[(2)] = null);

(statearr_33141_33166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (4))){
var inst_33107 = (state_33135[(10)]);
var state_33135__$1 = state_33135;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33135__$1,(7),inst_33107);
} else {
if((state_val_33136 === (6))){
var inst_33131 = (state_33135[(2)]);
var state_33135__$1 = state_33135;
var statearr_33142_33167 = state_33135__$1;
(statearr_33142_33167[(2)] = inst_33131);

(statearr_33142_33167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (3))){
var inst_33133 = (state_33135[(2)]);
var state_33135__$1 = state_33135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33135__$1,inst_33133);
} else {
if((state_val_33136 === (2))){
var inst_33107 = (state_33135[(10)]);
var inst_33109 = cljs.core.count.call(null,inst_33107);
var inst_33110 = (inst_33109 > (0));
var state_33135__$1 = state_33135;
if(cljs.core.truth_(inst_33110)){
var statearr_33144_33168 = state_33135__$1;
(statearr_33144_33168[(1)] = (4));

} else {
var statearr_33145_33169 = state_33135__$1;
(statearr_33145_33169[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (11))){
var inst_33107 = (state_33135[(10)]);
var inst_33124 = (state_33135[(2)]);
var tmp33143 = inst_33107;
var inst_33107__$1 = tmp33143;
var state_33135__$1 = (function (){var statearr_33146 = state_33135;
(statearr_33146[(11)] = inst_33124);

(statearr_33146[(10)] = inst_33107__$1);

return statearr_33146;
})();
var statearr_33147_33170 = state_33135__$1;
(statearr_33147_33170[(2)] = null);

(statearr_33147_33170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (9))){
var inst_33115 = (state_33135[(8)]);
var state_33135__$1 = state_33135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33135__$1,(11),out,inst_33115);
} else {
if((state_val_33136 === (5))){
var inst_33129 = cljs.core.async.close_BANG_.call(null,out);
var state_33135__$1 = state_33135;
var statearr_33148_33171 = state_33135__$1;
(statearr_33148_33171[(2)] = inst_33129);

(statearr_33148_33171[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (10))){
var inst_33127 = (state_33135[(2)]);
var state_33135__$1 = state_33135;
var statearr_33149_33172 = state_33135__$1;
(statearr_33149_33172[(2)] = inst_33127);

(statearr_33149_33172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (8))){
var inst_33114 = (state_33135[(7)]);
var inst_33115 = (state_33135[(8)]);
var inst_33107 = (state_33135[(10)]);
var inst_33116 = (state_33135[(9)]);
var inst_33119 = (function (){var cs = inst_33107;
var vec__33112 = inst_33114;
var v = inst_33115;
var c = inst_33116;
return ((function (cs,vec__33112,v,c,inst_33114,inst_33115,inst_33107,inst_33116,state_val_33136,c__23143__auto___33163,out){
return (function (p1__33102_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33102_SHARP_);
});
;})(cs,vec__33112,v,c,inst_33114,inst_33115,inst_33107,inst_33116,state_val_33136,c__23143__auto___33163,out))
})();
var inst_33120 = cljs.core.filterv.call(null,inst_33119,inst_33107);
var inst_33107__$1 = inst_33120;
var state_33135__$1 = (function (){var statearr_33150 = state_33135;
(statearr_33150[(10)] = inst_33107__$1);

return statearr_33150;
})();
var statearr_33151_33173 = state_33135__$1;
(statearr_33151_33173[(2)] = null);

(statearr_33151_33173[(1)] = (2));


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
});})(c__23143__auto___33163,out))
;
return ((function (switch__23078__auto__,c__23143__auto___33163,out){
return (function() {
var cljs$core$async$state_machine__23079__auto__ = null;
var cljs$core$async$state_machine__23079__auto____0 = (function (){
var statearr_33155 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33155[(0)] = cljs$core$async$state_machine__23079__auto__);

(statearr_33155[(1)] = (1));

return statearr_33155;
});
var cljs$core$async$state_machine__23079__auto____1 = (function (state_33135){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_33135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e33156){if((e33156 instanceof Object)){
var ex__23082__auto__ = e33156;
var statearr_33157_33174 = state_33135;
(statearr_33157_33174[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33175 = state_33135;
state_33135 = G__33175;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
cljs$core$async$state_machine__23079__auto__ = function(state_33135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23079__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23079__auto____1.call(this,state_33135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23079__auto____0;
cljs$core$async$state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23079__auto____1;
return cljs$core$async$state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto___33163,out))
})();
var state__23145__auto__ = (function (){var statearr_33158 = f__23144__auto__.call(null);
(statearr_33158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto___33163);

return statearr_33158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___33163,out))
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
var args33176 = [];
var len__17171__auto___33225 = arguments.length;
var i__17172__auto___33226 = (0);
while(true){
if((i__17172__auto___33226 < len__17171__auto___33225)){
args33176.push((arguments[i__17172__auto___33226]));

var G__33227 = (i__17172__auto___33226 + (1));
i__17172__auto___33226 = G__33227;
continue;
} else {
}
break;
}

var G__33178 = args33176.length;
switch (G__33178) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33176.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23143__auto___33229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___33229,out){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto___33229,out){
return (function (state_33202){
var state_val_33203 = (state_33202[(1)]);
if((state_val_33203 === (7))){
var inst_33184 = (state_33202[(7)]);
var inst_33184__$1 = (state_33202[(2)]);
var inst_33185 = (inst_33184__$1 == null);
var inst_33186 = cljs.core.not.call(null,inst_33185);
var state_33202__$1 = (function (){var statearr_33204 = state_33202;
(statearr_33204[(7)] = inst_33184__$1);

return statearr_33204;
})();
if(inst_33186){
var statearr_33205_33230 = state_33202__$1;
(statearr_33205_33230[(1)] = (8));

} else {
var statearr_33206_33231 = state_33202__$1;
(statearr_33206_33231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (1))){
var inst_33179 = (0);
var state_33202__$1 = (function (){var statearr_33207 = state_33202;
(statearr_33207[(8)] = inst_33179);

return statearr_33207;
})();
var statearr_33208_33232 = state_33202__$1;
(statearr_33208_33232[(2)] = null);

(statearr_33208_33232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (4))){
var state_33202__$1 = state_33202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33202__$1,(7),ch);
} else {
if((state_val_33203 === (6))){
var inst_33197 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33209_33233 = state_33202__$1;
(statearr_33209_33233[(2)] = inst_33197);

(statearr_33209_33233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (3))){
var inst_33199 = (state_33202[(2)]);
var inst_33200 = cljs.core.async.close_BANG_.call(null,out);
var state_33202__$1 = (function (){var statearr_33210 = state_33202;
(statearr_33210[(9)] = inst_33199);

return statearr_33210;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33202__$1,inst_33200);
} else {
if((state_val_33203 === (2))){
var inst_33179 = (state_33202[(8)]);
var inst_33181 = (inst_33179 < n);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_33181)){
var statearr_33211_33234 = state_33202__$1;
(statearr_33211_33234[(1)] = (4));

} else {
var statearr_33212_33235 = state_33202__$1;
(statearr_33212_33235[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (11))){
var inst_33179 = (state_33202[(8)]);
var inst_33189 = (state_33202[(2)]);
var inst_33190 = (inst_33179 + (1));
var inst_33179__$1 = inst_33190;
var state_33202__$1 = (function (){var statearr_33213 = state_33202;
(statearr_33213[(8)] = inst_33179__$1);

(statearr_33213[(10)] = inst_33189);

return statearr_33213;
})();
var statearr_33214_33236 = state_33202__$1;
(statearr_33214_33236[(2)] = null);

(statearr_33214_33236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (9))){
var state_33202__$1 = state_33202;
var statearr_33215_33237 = state_33202__$1;
(statearr_33215_33237[(2)] = null);

(statearr_33215_33237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (5))){
var state_33202__$1 = state_33202;
var statearr_33216_33238 = state_33202__$1;
(statearr_33216_33238[(2)] = null);

(statearr_33216_33238[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (10))){
var inst_33194 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33217_33239 = state_33202__$1;
(statearr_33217_33239[(2)] = inst_33194);

(statearr_33217_33239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (8))){
var inst_33184 = (state_33202[(7)]);
var state_33202__$1 = state_33202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33202__$1,(11),out,inst_33184);
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
});})(c__23143__auto___33229,out))
;
return ((function (switch__23078__auto__,c__23143__auto___33229,out){
return (function() {
var cljs$core$async$state_machine__23079__auto__ = null;
var cljs$core$async$state_machine__23079__auto____0 = (function (){
var statearr_33221 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33221[(0)] = cljs$core$async$state_machine__23079__auto__);

(statearr_33221[(1)] = (1));

return statearr_33221;
});
var cljs$core$async$state_machine__23079__auto____1 = (function (state_33202){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_33202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e33222){if((e33222 instanceof Object)){
var ex__23082__auto__ = e33222;
var statearr_33223_33240 = state_33202;
(statearr_33223_33240[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33241 = state_33202;
state_33202 = G__33241;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
cljs$core$async$state_machine__23079__auto__ = function(state_33202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23079__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23079__auto____1.call(this,state_33202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23079__auto____0;
cljs$core$async$state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23079__auto____1;
return cljs$core$async$state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto___33229,out))
})();
var state__23145__auto__ = (function (){var statearr_33224 = f__23144__auto__.call(null);
(statearr_33224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto___33229);

return statearr_33224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___33229,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33249 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33249 = (function (map_LT_,f,ch,meta33250){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33250 = meta33250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33251,meta33250__$1){
var self__ = this;
var _33251__$1 = this;
return (new cljs.core.async.t_cljs$core$async33249(self__.map_LT_,self__.f,self__.ch,meta33250__$1));
});

cljs.core.async.t_cljs$core$async33249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33251){
var self__ = this;
var _33251__$1 = this;
return self__.meta33250;
});

cljs.core.async.t_cljs$core$async33249.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33249.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33249.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33249.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33249.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33252 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33252 = (function (map_LT_,f,ch,meta33250,_,fn1,meta33253){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33250 = meta33250;
this._ = _;
this.fn1 = fn1;
this.meta33253 = meta33253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33254,meta33253__$1){
var self__ = this;
var _33254__$1 = this;
return (new cljs.core.async.t_cljs$core$async33252(self__.map_LT_,self__.f,self__.ch,self__.meta33250,self__._,self__.fn1,meta33253__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33252.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33254){
var self__ = this;
var _33254__$1 = this;
return self__.meta33253;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33252.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33252.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33252.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33242_SHARP_){
return f1.call(null,(((p1__33242_SHARP_ == null))?null:self__.f.call(null,p1__33242_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33252.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33250","meta33250",915950513,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33249","cljs.core.async/t_cljs$core$async33249",-1157505959,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33253","meta33253",-527353191,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33252.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33252";

cljs.core.async.t_cljs$core$async33252.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16711__auto__,writer__16712__auto__,opt__16713__auto__){
return cljs.core._write.call(null,writer__16712__auto__,"cljs.core.async/t_cljs$core$async33252");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33252 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33252(map_LT___$1,f__$1,ch__$1,meta33250__$1,___$2,fn1__$1,meta33253){
return (new cljs.core.async.t_cljs$core$async33252(map_LT___$1,f__$1,ch__$1,meta33250__$1,___$2,fn1__$1,meta33253));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33252(self__.map_LT_,self__.f,self__.ch,self__.meta33250,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16101__auto__ = ret;
if(cljs.core.truth_(and__16101__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16101__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33249.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33249.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33250","meta33250",915950513,null)], null);
});

cljs.core.async.t_cljs$core$async33249.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33249";

cljs.core.async.t_cljs$core$async33249.cljs$lang$ctorPrWriter = (function (this__16711__auto__,writer__16712__auto__,opt__16713__auto__){
return cljs.core._write.call(null,writer__16712__auto__,"cljs.core.async/t_cljs$core$async33249");
});

cljs.core.async.__GT_t_cljs$core$async33249 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33249(map_LT___$1,f__$1,ch__$1,meta33250){
return (new cljs.core.async.t_cljs$core$async33249(map_LT___$1,f__$1,ch__$1,meta33250));
});

}

return (new cljs.core.async.t_cljs$core$async33249(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33258 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33258 = (function (map_GT_,f,ch,meta33259){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta33259 = meta33259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33260,meta33259__$1){
var self__ = this;
var _33260__$1 = this;
return (new cljs.core.async.t_cljs$core$async33258(self__.map_GT_,self__.f,self__.ch,meta33259__$1));
});

cljs.core.async.t_cljs$core$async33258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33260){
var self__ = this;
var _33260__$1 = this;
return self__.meta33259;
});

cljs.core.async.t_cljs$core$async33258.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33258.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33258.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33258.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33258.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33258.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33259","meta33259",-363644092,null)], null);
});

cljs.core.async.t_cljs$core$async33258.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33258";

cljs.core.async.t_cljs$core$async33258.cljs$lang$ctorPrWriter = (function (this__16711__auto__,writer__16712__auto__,opt__16713__auto__){
return cljs.core._write.call(null,writer__16712__auto__,"cljs.core.async/t_cljs$core$async33258");
});

cljs.core.async.__GT_t_cljs$core$async33258 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33258(map_GT___$1,f__$1,ch__$1,meta33259){
return (new cljs.core.async.t_cljs$core$async33258(map_GT___$1,f__$1,ch__$1,meta33259));
});

}

return (new cljs.core.async.t_cljs$core$async33258(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33264 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33264 = (function (filter_GT_,p,ch,meta33265){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta33265 = meta33265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33266,meta33265__$1){
var self__ = this;
var _33266__$1 = this;
return (new cljs.core.async.t_cljs$core$async33264(self__.filter_GT_,self__.p,self__.ch,meta33265__$1));
});

cljs.core.async.t_cljs$core$async33264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33266){
var self__ = this;
var _33266__$1 = this;
return self__.meta33265;
});

cljs.core.async.t_cljs$core$async33264.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33264.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33264.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33264.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33264.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33264.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33264.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33265","meta33265",228657199,null)], null);
});

cljs.core.async.t_cljs$core$async33264.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33264";

cljs.core.async.t_cljs$core$async33264.cljs$lang$ctorPrWriter = (function (this__16711__auto__,writer__16712__auto__,opt__16713__auto__){
return cljs.core._write.call(null,writer__16712__auto__,"cljs.core.async/t_cljs$core$async33264");
});

cljs.core.async.__GT_t_cljs$core$async33264 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33264(filter_GT___$1,p__$1,ch__$1,meta33265){
return (new cljs.core.async.t_cljs$core$async33264(filter_GT___$1,p__$1,ch__$1,meta33265));
});

}

return (new cljs.core.async.t_cljs$core$async33264(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args33267 = [];
var len__17171__auto___33311 = arguments.length;
var i__17172__auto___33312 = (0);
while(true){
if((i__17172__auto___33312 < len__17171__auto___33311)){
args33267.push((arguments[i__17172__auto___33312]));

var G__33313 = (i__17172__auto___33312 + (1));
i__17172__auto___33312 = G__33313;
continue;
} else {
}
break;
}

var G__33269 = args33267.length;
switch (G__33269) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33267.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23143__auto___33315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___33315,out){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto___33315,out){
return (function (state_33290){
var state_val_33291 = (state_33290[(1)]);
if((state_val_33291 === (7))){
var inst_33286 = (state_33290[(2)]);
var state_33290__$1 = state_33290;
var statearr_33292_33316 = state_33290__$1;
(statearr_33292_33316[(2)] = inst_33286);

(statearr_33292_33316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (1))){
var state_33290__$1 = state_33290;
var statearr_33293_33317 = state_33290__$1;
(statearr_33293_33317[(2)] = null);

(statearr_33293_33317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (4))){
var inst_33272 = (state_33290[(7)]);
var inst_33272__$1 = (state_33290[(2)]);
var inst_33273 = (inst_33272__$1 == null);
var state_33290__$1 = (function (){var statearr_33294 = state_33290;
(statearr_33294[(7)] = inst_33272__$1);

return statearr_33294;
})();
if(cljs.core.truth_(inst_33273)){
var statearr_33295_33318 = state_33290__$1;
(statearr_33295_33318[(1)] = (5));

} else {
var statearr_33296_33319 = state_33290__$1;
(statearr_33296_33319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (6))){
var inst_33272 = (state_33290[(7)]);
var inst_33277 = p.call(null,inst_33272);
var state_33290__$1 = state_33290;
if(cljs.core.truth_(inst_33277)){
var statearr_33297_33320 = state_33290__$1;
(statearr_33297_33320[(1)] = (8));

} else {
var statearr_33298_33321 = state_33290__$1;
(statearr_33298_33321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (3))){
var inst_33288 = (state_33290[(2)]);
var state_33290__$1 = state_33290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33290__$1,inst_33288);
} else {
if((state_val_33291 === (2))){
var state_33290__$1 = state_33290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33290__$1,(4),ch);
} else {
if((state_val_33291 === (11))){
var inst_33280 = (state_33290[(2)]);
var state_33290__$1 = state_33290;
var statearr_33299_33322 = state_33290__$1;
(statearr_33299_33322[(2)] = inst_33280);

(statearr_33299_33322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (9))){
var state_33290__$1 = state_33290;
var statearr_33300_33323 = state_33290__$1;
(statearr_33300_33323[(2)] = null);

(statearr_33300_33323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (5))){
var inst_33275 = cljs.core.async.close_BANG_.call(null,out);
var state_33290__$1 = state_33290;
var statearr_33301_33324 = state_33290__$1;
(statearr_33301_33324[(2)] = inst_33275);

(statearr_33301_33324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (10))){
var inst_33283 = (state_33290[(2)]);
var state_33290__$1 = (function (){var statearr_33302 = state_33290;
(statearr_33302[(8)] = inst_33283);

return statearr_33302;
})();
var statearr_33303_33325 = state_33290__$1;
(statearr_33303_33325[(2)] = null);

(statearr_33303_33325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (8))){
var inst_33272 = (state_33290[(7)]);
var state_33290__$1 = state_33290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33290__$1,(11),out,inst_33272);
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
});})(c__23143__auto___33315,out))
;
return ((function (switch__23078__auto__,c__23143__auto___33315,out){
return (function() {
var cljs$core$async$state_machine__23079__auto__ = null;
var cljs$core$async$state_machine__23079__auto____0 = (function (){
var statearr_33307 = [null,null,null,null,null,null,null,null,null];
(statearr_33307[(0)] = cljs$core$async$state_machine__23079__auto__);

(statearr_33307[(1)] = (1));

return statearr_33307;
});
var cljs$core$async$state_machine__23079__auto____1 = (function (state_33290){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_33290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e33308){if((e33308 instanceof Object)){
var ex__23082__auto__ = e33308;
var statearr_33309_33326 = state_33290;
(statearr_33309_33326[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33327 = state_33290;
state_33290 = G__33327;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
cljs$core$async$state_machine__23079__auto__ = function(state_33290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23079__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23079__auto____1.call(this,state_33290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23079__auto____0;
cljs$core$async$state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23079__auto____1;
return cljs$core$async$state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto___33315,out))
})();
var state__23145__auto__ = (function (){var statearr_33310 = f__23144__auto__.call(null);
(statearr_33310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto___33315);

return statearr_33310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___33315,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args33328 = [];
var len__17171__auto___33331 = arguments.length;
var i__17172__auto___33332 = (0);
while(true){
if((i__17172__auto___33332 < len__17171__auto___33331)){
args33328.push((arguments[i__17172__auto___33332]));

var G__33333 = (i__17172__auto___33332 + (1));
i__17172__auto___33332 = G__33333;
continue;
} else {
}
break;
}

var G__33330 = args33328.length;
switch (G__33330) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33328.length)].join('')));

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
var c__23143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto__){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto__){
return (function (state_33500){
var state_val_33501 = (state_33500[(1)]);
if((state_val_33501 === (7))){
var inst_33496 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
var statearr_33502_33543 = state_33500__$1;
(statearr_33502_33543[(2)] = inst_33496);

(statearr_33502_33543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (20))){
var inst_33466 = (state_33500[(7)]);
var inst_33477 = (state_33500[(2)]);
var inst_33478 = cljs.core.next.call(null,inst_33466);
var inst_33452 = inst_33478;
var inst_33453 = null;
var inst_33454 = (0);
var inst_33455 = (0);
var state_33500__$1 = (function (){var statearr_33503 = state_33500;
(statearr_33503[(8)] = inst_33454);

(statearr_33503[(9)] = inst_33455);

(statearr_33503[(10)] = inst_33477);

(statearr_33503[(11)] = inst_33453);

(statearr_33503[(12)] = inst_33452);

return statearr_33503;
})();
var statearr_33504_33544 = state_33500__$1;
(statearr_33504_33544[(2)] = null);

(statearr_33504_33544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (1))){
var state_33500__$1 = state_33500;
var statearr_33505_33545 = state_33500__$1;
(statearr_33505_33545[(2)] = null);

(statearr_33505_33545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (4))){
var inst_33441 = (state_33500[(13)]);
var inst_33441__$1 = (state_33500[(2)]);
var inst_33442 = (inst_33441__$1 == null);
var state_33500__$1 = (function (){var statearr_33506 = state_33500;
(statearr_33506[(13)] = inst_33441__$1);

return statearr_33506;
})();
if(cljs.core.truth_(inst_33442)){
var statearr_33507_33546 = state_33500__$1;
(statearr_33507_33546[(1)] = (5));

} else {
var statearr_33508_33547 = state_33500__$1;
(statearr_33508_33547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (15))){
var state_33500__$1 = state_33500;
var statearr_33512_33548 = state_33500__$1;
(statearr_33512_33548[(2)] = null);

(statearr_33512_33548[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (21))){
var state_33500__$1 = state_33500;
var statearr_33513_33549 = state_33500__$1;
(statearr_33513_33549[(2)] = null);

(statearr_33513_33549[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (13))){
var inst_33454 = (state_33500[(8)]);
var inst_33455 = (state_33500[(9)]);
var inst_33453 = (state_33500[(11)]);
var inst_33452 = (state_33500[(12)]);
var inst_33462 = (state_33500[(2)]);
var inst_33463 = (inst_33455 + (1));
var tmp33509 = inst_33454;
var tmp33510 = inst_33453;
var tmp33511 = inst_33452;
var inst_33452__$1 = tmp33511;
var inst_33453__$1 = tmp33510;
var inst_33454__$1 = tmp33509;
var inst_33455__$1 = inst_33463;
var state_33500__$1 = (function (){var statearr_33514 = state_33500;
(statearr_33514[(8)] = inst_33454__$1);

(statearr_33514[(9)] = inst_33455__$1);

(statearr_33514[(14)] = inst_33462);

(statearr_33514[(11)] = inst_33453__$1);

(statearr_33514[(12)] = inst_33452__$1);

return statearr_33514;
})();
var statearr_33515_33550 = state_33500__$1;
(statearr_33515_33550[(2)] = null);

(statearr_33515_33550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (22))){
var state_33500__$1 = state_33500;
var statearr_33516_33551 = state_33500__$1;
(statearr_33516_33551[(2)] = null);

(statearr_33516_33551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (6))){
var inst_33441 = (state_33500[(13)]);
var inst_33450 = f.call(null,inst_33441);
var inst_33451 = cljs.core.seq.call(null,inst_33450);
var inst_33452 = inst_33451;
var inst_33453 = null;
var inst_33454 = (0);
var inst_33455 = (0);
var state_33500__$1 = (function (){var statearr_33517 = state_33500;
(statearr_33517[(8)] = inst_33454);

(statearr_33517[(9)] = inst_33455);

(statearr_33517[(11)] = inst_33453);

(statearr_33517[(12)] = inst_33452);

return statearr_33517;
})();
var statearr_33518_33552 = state_33500__$1;
(statearr_33518_33552[(2)] = null);

(statearr_33518_33552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (17))){
var inst_33466 = (state_33500[(7)]);
var inst_33470 = cljs.core.chunk_first.call(null,inst_33466);
var inst_33471 = cljs.core.chunk_rest.call(null,inst_33466);
var inst_33472 = cljs.core.count.call(null,inst_33470);
var inst_33452 = inst_33471;
var inst_33453 = inst_33470;
var inst_33454 = inst_33472;
var inst_33455 = (0);
var state_33500__$1 = (function (){var statearr_33519 = state_33500;
(statearr_33519[(8)] = inst_33454);

(statearr_33519[(9)] = inst_33455);

(statearr_33519[(11)] = inst_33453);

(statearr_33519[(12)] = inst_33452);

return statearr_33519;
})();
var statearr_33520_33553 = state_33500__$1;
(statearr_33520_33553[(2)] = null);

(statearr_33520_33553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (3))){
var inst_33498 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33500__$1,inst_33498);
} else {
if((state_val_33501 === (12))){
var inst_33486 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
var statearr_33521_33554 = state_33500__$1;
(statearr_33521_33554[(2)] = inst_33486);

(statearr_33521_33554[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (2))){
var state_33500__$1 = state_33500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33500__$1,(4),in$);
} else {
if((state_val_33501 === (23))){
var inst_33494 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
var statearr_33522_33555 = state_33500__$1;
(statearr_33522_33555[(2)] = inst_33494);

(statearr_33522_33555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (19))){
var inst_33481 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
var statearr_33523_33556 = state_33500__$1;
(statearr_33523_33556[(2)] = inst_33481);

(statearr_33523_33556[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (11))){
var inst_33466 = (state_33500[(7)]);
var inst_33452 = (state_33500[(12)]);
var inst_33466__$1 = cljs.core.seq.call(null,inst_33452);
var state_33500__$1 = (function (){var statearr_33524 = state_33500;
(statearr_33524[(7)] = inst_33466__$1);

return statearr_33524;
})();
if(inst_33466__$1){
var statearr_33525_33557 = state_33500__$1;
(statearr_33525_33557[(1)] = (14));

} else {
var statearr_33526_33558 = state_33500__$1;
(statearr_33526_33558[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (9))){
var inst_33488 = (state_33500[(2)]);
var inst_33489 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33500__$1 = (function (){var statearr_33527 = state_33500;
(statearr_33527[(15)] = inst_33488);

return statearr_33527;
})();
if(cljs.core.truth_(inst_33489)){
var statearr_33528_33559 = state_33500__$1;
(statearr_33528_33559[(1)] = (21));

} else {
var statearr_33529_33560 = state_33500__$1;
(statearr_33529_33560[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (5))){
var inst_33444 = cljs.core.async.close_BANG_.call(null,out);
var state_33500__$1 = state_33500;
var statearr_33530_33561 = state_33500__$1;
(statearr_33530_33561[(2)] = inst_33444);

(statearr_33530_33561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (14))){
var inst_33466 = (state_33500[(7)]);
var inst_33468 = cljs.core.chunked_seq_QMARK_.call(null,inst_33466);
var state_33500__$1 = state_33500;
if(inst_33468){
var statearr_33531_33562 = state_33500__$1;
(statearr_33531_33562[(1)] = (17));

} else {
var statearr_33532_33563 = state_33500__$1;
(statearr_33532_33563[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (16))){
var inst_33484 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
var statearr_33533_33564 = state_33500__$1;
(statearr_33533_33564[(2)] = inst_33484);

(statearr_33533_33564[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (10))){
var inst_33455 = (state_33500[(9)]);
var inst_33453 = (state_33500[(11)]);
var inst_33460 = cljs.core._nth.call(null,inst_33453,inst_33455);
var state_33500__$1 = state_33500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33500__$1,(13),out,inst_33460);
} else {
if((state_val_33501 === (18))){
var inst_33466 = (state_33500[(7)]);
var inst_33475 = cljs.core.first.call(null,inst_33466);
var state_33500__$1 = state_33500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33500__$1,(20),out,inst_33475);
} else {
if((state_val_33501 === (8))){
var inst_33454 = (state_33500[(8)]);
var inst_33455 = (state_33500[(9)]);
var inst_33457 = (inst_33455 < inst_33454);
var inst_33458 = inst_33457;
var state_33500__$1 = state_33500;
if(cljs.core.truth_(inst_33458)){
var statearr_33534_33565 = state_33500__$1;
(statearr_33534_33565[(1)] = (10));

} else {
var statearr_33535_33566 = state_33500__$1;
(statearr_33535_33566[(1)] = (11));

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
});})(c__23143__auto__))
;
return ((function (switch__23078__auto__,c__23143__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23079__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23079__auto____0 = (function (){
var statearr_33539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33539[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23079__auto__);

(statearr_33539[(1)] = (1));

return statearr_33539;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23079__auto____1 = (function (state_33500){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_33500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e33540){if((e33540 instanceof Object)){
var ex__23082__auto__ = e33540;
var statearr_33541_33567 = state_33500;
(statearr_33541_33567[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33568 = state_33500;
state_33500 = G__33568;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23079__auto__ = function(state_33500){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23079__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23079__auto____1.call(this,state_33500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23079__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23079__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto__))
})();
var state__23145__auto__ = (function (){var statearr_33542 = f__23144__auto__.call(null);
(statearr_33542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto__);

return statearr_33542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto__))
);

return c__23143__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args33569 = [];
var len__17171__auto___33572 = arguments.length;
var i__17172__auto___33573 = (0);
while(true){
if((i__17172__auto___33573 < len__17171__auto___33572)){
args33569.push((arguments[i__17172__auto___33573]));

var G__33574 = (i__17172__auto___33573 + (1));
i__17172__auto___33573 = G__33574;
continue;
} else {
}
break;
}

var G__33571 = args33569.length;
switch (G__33571) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33569.length)].join('')));

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
var args33576 = [];
var len__17171__auto___33579 = arguments.length;
var i__17172__auto___33580 = (0);
while(true){
if((i__17172__auto___33580 < len__17171__auto___33579)){
args33576.push((arguments[i__17172__auto___33580]));

var G__33581 = (i__17172__auto___33580 + (1));
i__17172__auto___33580 = G__33581;
continue;
} else {
}
break;
}

var G__33578 = args33576.length;
switch (G__33578) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33576.length)].join('')));

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
var args33583 = [];
var len__17171__auto___33634 = arguments.length;
var i__17172__auto___33635 = (0);
while(true){
if((i__17172__auto___33635 < len__17171__auto___33634)){
args33583.push((arguments[i__17172__auto___33635]));

var G__33636 = (i__17172__auto___33635 + (1));
i__17172__auto___33635 = G__33636;
continue;
} else {
}
break;
}

var G__33585 = args33583.length;
switch (G__33585) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33583.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23143__auto___33638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___33638,out){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto___33638,out){
return (function (state_33609){
var state_val_33610 = (state_33609[(1)]);
if((state_val_33610 === (7))){
var inst_33604 = (state_33609[(2)]);
var state_33609__$1 = state_33609;
var statearr_33611_33639 = state_33609__$1;
(statearr_33611_33639[(2)] = inst_33604);

(statearr_33611_33639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (1))){
var inst_33586 = null;
var state_33609__$1 = (function (){var statearr_33612 = state_33609;
(statearr_33612[(7)] = inst_33586);

return statearr_33612;
})();
var statearr_33613_33640 = state_33609__$1;
(statearr_33613_33640[(2)] = null);

(statearr_33613_33640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (4))){
var inst_33589 = (state_33609[(8)]);
var inst_33589__$1 = (state_33609[(2)]);
var inst_33590 = (inst_33589__$1 == null);
var inst_33591 = cljs.core.not.call(null,inst_33590);
var state_33609__$1 = (function (){var statearr_33614 = state_33609;
(statearr_33614[(8)] = inst_33589__$1);

return statearr_33614;
})();
if(inst_33591){
var statearr_33615_33641 = state_33609__$1;
(statearr_33615_33641[(1)] = (5));

} else {
var statearr_33616_33642 = state_33609__$1;
(statearr_33616_33642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (6))){
var state_33609__$1 = state_33609;
var statearr_33617_33643 = state_33609__$1;
(statearr_33617_33643[(2)] = null);

(statearr_33617_33643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (3))){
var inst_33606 = (state_33609[(2)]);
var inst_33607 = cljs.core.async.close_BANG_.call(null,out);
var state_33609__$1 = (function (){var statearr_33618 = state_33609;
(statearr_33618[(9)] = inst_33606);

return statearr_33618;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33609__$1,inst_33607);
} else {
if((state_val_33610 === (2))){
var state_33609__$1 = state_33609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33609__$1,(4),ch);
} else {
if((state_val_33610 === (11))){
var inst_33589 = (state_33609[(8)]);
var inst_33598 = (state_33609[(2)]);
var inst_33586 = inst_33589;
var state_33609__$1 = (function (){var statearr_33619 = state_33609;
(statearr_33619[(10)] = inst_33598);

(statearr_33619[(7)] = inst_33586);

return statearr_33619;
})();
var statearr_33620_33644 = state_33609__$1;
(statearr_33620_33644[(2)] = null);

(statearr_33620_33644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (9))){
var inst_33589 = (state_33609[(8)]);
var state_33609__$1 = state_33609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33609__$1,(11),out,inst_33589);
} else {
if((state_val_33610 === (5))){
var inst_33589 = (state_33609[(8)]);
var inst_33586 = (state_33609[(7)]);
var inst_33593 = cljs.core._EQ_.call(null,inst_33589,inst_33586);
var state_33609__$1 = state_33609;
if(inst_33593){
var statearr_33622_33645 = state_33609__$1;
(statearr_33622_33645[(1)] = (8));

} else {
var statearr_33623_33646 = state_33609__$1;
(statearr_33623_33646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (10))){
var inst_33601 = (state_33609[(2)]);
var state_33609__$1 = state_33609;
var statearr_33624_33647 = state_33609__$1;
(statearr_33624_33647[(2)] = inst_33601);

(statearr_33624_33647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (8))){
var inst_33586 = (state_33609[(7)]);
var tmp33621 = inst_33586;
var inst_33586__$1 = tmp33621;
var state_33609__$1 = (function (){var statearr_33625 = state_33609;
(statearr_33625[(7)] = inst_33586__$1);

return statearr_33625;
})();
var statearr_33626_33648 = state_33609__$1;
(statearr_33626_33648[(2)] = null);

(statearr_33626_33648[(1)] = (2));


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
});})(c__23143__auto___33638,out))
;
return ((function (switch__23078__auto__,c__23143__auto___33638,out){
return (function() {
var cljs$core$async$state_machine__23079__auto__ = null;
var cljs$core$async$state_machine__23079__auto____0 = (function (){
var statearr_33630 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33630[(0)] = cljs$core$async$state_machine__23079__auto__);

(statearr_33630[(1)] = (1));

return statearr_33630;
});
var cljs$core$async$state_machine__23079__auto____1 = (function (state_33609){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_33609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e33631){if((e33631 instanceof Object)){
var ex__23082__auto__ = e33631;
var statearr_33632_33649 = state_33609;
(statearr_33632_33649[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33650 = state_33609;
state_33609 = G__33650;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
cljs$core$async$state_machine__23079__auto__ = function(state_33609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23079__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23079__auto____1.call(this,state_33609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23079__auto____0;
cljs$core$async$state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23079__auto____1;
return cljs$core$async$state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto___33638,out))
})();
var state__23145__auto__ = (function (){var statearr_33633 = f__23144__auto__.call(null);
(statearr_33633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto___33638);

return statearr_33633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___33638,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args33651 = [];
var len__17171__auto___33721 = arguments.length;
var i__17172__auto___33722 = (0);
while(true){
if((i__17172__auto___33722 < len__17171__auto___33721)){
args33651.push((arguments[i__17172__auto___33722]));

var G__33723 = (i__17172__auto___33722 + (1));
i__17172__auto___33722 = G__33723;
continue;
} else {
}
break;
}

var G__33653 = args33651.length;
switch (G__33653) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33651.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23143__auto___33725 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___33725,out){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto___33725,out){
return (function (state_33691){
var state_val_33692 = (state_33691[(1)]);
if((state_val_33692 === (7))){
var inst_33687 = (state_33691[(2)]);
var state_33691__$1 = state_33691;
var statearr_33693_33726 = state_33691__$1;
(statearr_33693_33726[(2)] = inst_33687);

(statearr_33693_33726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33692 === (1))){
var inst_33654 = (new Array(n));
var inst_33655 = inst_33654;
var inst_33656 = (0);
var state_33691__$1 = (function (){var statearr_33694 = state_33691;
(statearr_33694[(7)] = inst_33656);

(statearr_33694[(8)] = inst_33655);

return statearr_33694;
})();
var statearr_33695_33727 = state_33691__$1;
(statearr_33695_33727[(2)] = null);

(statearr_33695_33727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33692 === (4))){
var inst_33659 = (state_33691[(9)]);
var inst_33659__$1 = (state_33691[(2)]);
var inst_33660 = (inst_33659__$1 == null);
var inst_33661 = cljs.core.not.call(null,inst_33660);
var state_33691__$1 = (function (){var statearr_33696 = state_33691;
(statearr_33696[(9)] = inst_33659__$1);

return statearr_33696;
})();
if(inst_33661){
var statearr_33697_33728 = state_33691__$1;
(statearr_33697_33728[(1)] = (5));

} else {
var statearr_33698_33729 = state_33691__$1;
(statearr_33698_33729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33692 === (15))){
var inst_33681 = (state_33691[(2)]);
var state_33691__$1 = state_33691;
var statearr_33699_33730 = state_33691__$1;
(statearr_33699_33730[(2)] = inst_33681);

(statearr_33699_33730[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33692 === (13))){
var state_33691__$1 = state_33691;
var statearr_33700_33731 = state_33691__$1;
(statearr_33700_33731[(2)] = null);

(statearr_33700_33731[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33692 === (6))){
var inst_33656 = (state_33691[(7)]);
var inst_33677 = (inst_33656 > (0));
var state_33691__$1 = state_33691;
if(cljs.core.truth_(inst_33677)){
var statearr_33701_33732 = state_33691__$1;
(statearr_33701_33732[(1)] = (12));

} else {
var statearr_33702_33733 = state_33691__$1;
(statearr_33702_33733[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33692 === (3))){
var inst_33689 = (state_33691[(2)]);
var state_33691__$1 = state_33691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33691__$1,inst_33689);
} else {
if((state_val_33692 === (12))){
var inst_33655 = (state_33691[(8)]);
var inst_33679 = cljs.core.vec.call(null,inst_33655);
var state_33691__$1 = state_33691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33691__$1,(15),out,inst_33679);
} else {
if((state_val_33692 === (2))){
var state_33691__$1 = state_33691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33691__$1,(4),ch);
} else {
if((state_val_33692 === (11))){
var inst_33671 = (state_33691[(2)]);
var inst_33672 = (new Array(n));
var inst_33655 = inst_33672;
var inst_33656 = (0);
var state_33691__$1 = (function (){var statearr_33703 = state_33691;
(statearr_33703[(7)] = inst_33656);

(statearr_33703[(8)] = inst_33655);

(statearr_33703[(10)] = inst_33671);

return statearr_33703;
})();
var statearr_33704_33734 = state_33691__$1;
(statearr_33704_33734[(2)] = null);

(statearr_33704_33734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33692 === (9))){
var inst_33655 = (state_33691[(8)]);
var inst_33669 = cljs.core.vec.call(null,inst_33655);
var state_33691__$1 = state_33691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33691__$1,(11),out,inst_33669);
} else {
if((state_val_33692 === (5))){
var inst_33656 = (state_33691[(7)]);
var inst_33664 = (state_33691[(11)]);
var inst_33655 = (state_33691[(8)]);
var inst_33659 = (state_33691[(9)]);
var inst_33663 = (inst_33655[inst_33656] = inst_33659);
var inst_33664__$1 = (inst_33656 + (1));
var inst_33665 = (inst_33664__$1 < n);
var state_33691__$1 = (function (){var statearr_33705 = state_33691;
(statearr_33705[(12)] = inst_33663);

(statearr_33705[(11)] = inst_33664__$1);

return statearr_33705;
})();
if(cljs.core.truth_(inst_33665)){
var statearr_33706_33735 = state_33691__$1;
(statearr_33706_33735[(1)] = (8));

} else {
var statearr_33707_33736 = state_33691__$1;
(statearr_33707_33736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33692 === (14))){
var inst_33684 = (state_33691[(2)]);
var inst_33685 = cljs.core.async.close_BANG_.call(null,out);
var state_33691__$1 = (function (){var statearr_33709 = state_33691;
(statearr_33709[(13)] = inst_33684);

return statearr_33709;
})();
var statearr_33710_33737 = state_33691__$1;
(statearr_33710_33737[(2)] = inst_33685);

(statearr_33710_33737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33692 === (10))){
var inst_33675 = (state_33691[(2)]);
var state_33691__$1 = state_33691;
var statearr_33711_33738 = state_33691__$1;
(statearr_33711_33738[(2)] = inst_33675);

(statearr_33711_33738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33692 === (8))){
var inst_33664 = (state_33691[(11)]);
var inst_33655 = (state_33691[(8)]);
var tmp33708 = inst_33655;
var inst_33655__$1 = tmp33708;
var inst_33656 = inst_33664;
var state_33691__$1 = (function (){var statearr_33712 = state_33691;
(statearr_33712[(7)] = inst_33656);

(statearr_33712[(8)] = inst_33655__$1);

return statearr_33712;
})();
var statearr_33713_33739 = state_33691__$1;
(statearr_33713_33739[(2)] = null);

(statearr_33713_33739[(1)] = (2));


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
});})(c__23143__auto___33725,out))
;
return ((function (switch__23078__auto__,c__23143__auto___33725,out){
return (function() {
var cljs$core$async$state_machine__23079__auto__ = null;
var cljs$core$async$state_machine__23079__auto____0 = (function (){
var statearr_33717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33717[(0)] = cljs$core$async$state_machine__23079__auto__);

(statearr_33717[(1)] = (1));

return statearr_33717;
});
var cljs$core$async$state_machine__23079__auto____1 = (function (state_33691){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_33691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e33718){if((e33718 instanceof Object)){
var ex__23082__auto__ = e33718;
var statearr_33719_33740 = state_33691;
(statearr_33719_33740[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33741 = state_33691;
state_33691 = G__33741;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
cljs$core$async$state_machine__23079__auto__ = function(state_33691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23079__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23079__auto____1.call(this,state_33691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23079__auto____0;
cljs$core$async$state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23079__auto____1;
return cljs$core$async$state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto___33725,out))
})();
var state__23145__auto__ = (function (){var statearr_33720 = f__23144__auto__.call(null);
(statearr_33720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto___33725);

return statearr_33720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___33725,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33742 = [];
var len__17171__auto___33816 = arguments.length;
var i__17172__auto___33817 = (0);
while(true){
if((i__17172__auto___33817 < len__17171__auto___33816)){
args33742.push((arguments[i__17172__auto___33817]));

var G__33818 = (i__17172__auto___33817 + (1));
i__17172__auto___33817 = G__33818;
continue;
} else {
}
break;
}

var G__33744 = args33742.length;
switch (G__33744) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33742.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23143__auto___33820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___33820,out){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto___33820,out){
return (function (state_33786){
var state_val_33787 = (state_33786[(1)]);
if((state_val_33787 === (7))){
var inst_33782 = (state_33786[(2)]);
var state_33786__$1 = state_33786;
var statearr_33788_33821 = state_33786__$1;
(statearr_33788_33821[(2)] = inst_33782);

(statearr_33788_33821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (1))){
var inst_33745 = [];
var inst_33746 = inst_33745;
var inst_33747 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33786__$1 = (function (){var statearr_33789 = state_33786;
(statearr_33789[(7)] = inst_33746);

(statearr_33789[(8)] = inst_33747);

return statearr_33789;
})();
var statearr_33790_33822 = state_33786__$1;
(statearr_33790_33822[(2)] = null);

(statearr_33790_33822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (4))){
var inst_33750 = (state_33786[(9)]);
var inst_33750__$1 = (state_33786[(2)]);
var inst_33751 = (inst_33750__$1 == null);
var inst_33752 = cljs.core.not.call(null,inst_33751);
var state_33786__$1 = (function (){var statearr_33791 = state_33786;
(statearr_33791[(9)] = inst_33750__$1);

return statearr_33791;
})();
if(inst_33752){
var statearr_33792_33823 = state_33786__$1;
(statearr_33792_33823[(1)] = (5));

} else {
var statearr_33793_33824 = state_33786__$1;
(statearr_33793_33824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (15))){
var inst_33776 = (state_33786[(2)]);
var state_33786__$1 = state_33786;
var statearr_33794_33825 = state_33786__$1;
(statearr_33794_33825[(2)] = inst_33776);

(statearr_33794_33825[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (13))){
var state_33786__$1 = state_33786;
var statearr_33795_33826 = state_33786__$1;
(statearr_33795_33826[(2)] = null);

(statearr_33795_33826[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (6))){
var inst_33746 = (state_33786[(7)]);
var inst_33771 = inst_33746.length;
var inst_33772 = (inst_33771 > (0));
var state_33786__$1 = state_33786;
if(cljs.core.truth_(inst_33772)){
var statearr_33796_33827 = state_33786__$1;
(statearr_33796_33827[(1)] = (12));

} else {
var statearr_33797_33828 = state_33786__$1;
(statearr_33797_33828[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (3))){
var inst_33784 = (state_33786[(2)]);
var state_33786__$1 = state_33786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33786__$1,inst_33784);
} else {
if((state_val_33787 === (12))){
var inst_33746 = (state_33786[(7)]);
var inst_33774 = cljs.core.vec.call(null,inst_33746);
var state_33786__$1 = state_33786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33786__$1,(15),out,inst_33774);
} else {
if((state_val_33787 === (2))){
var state_33786__$1 = state_33786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33786__$1,(4),ch);
} else {
if((state_val_33787 === (11))){
var inst_33754 = (state_33786[(10)]);
var inst_33750 = (state_33786[(9)]);
var inst_33764 = (state_33786[(2)]);
var inst_33765 = [];
var inst_33766 = inst_33765.push(inst_33750);
var inst_33746 = inst_33765;
var inst_33747 = inst_33754;
var state_33786__$1 = (function (){var statearr_33798 = state_33786;
(statearr_33798[(7)] = inst_33746);

(statearr_33798[(11)] = inst_33764);

(statearr_33798[(12)] = inst_33766);

(statearr_33798[(8)] = inst_33747);

return statearr_33798;
})();
var statearr_33799_33829 = state_33786__$1;
(statearr_33799_33829[(2)] = null);

(statearr_33799_33829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (9))){
var inst_33746 = (state_33786[(7)]);
var inst_33762 = cljs.core.vec.call(null,inst_33746);
var state_33786__$1 = state_33786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33786__$1,(11),out,inst_33762);
} else {
if((state_val_33787 === (5))){
var inst_33754 = (state_33786[(10)]);
var inst_33750 = (state_33786[(9)]);
var inst_33747 = (state_33786[(8)]);
var inst_33754__$1 = f.call(null,inst_33750);
var inst_33755 = cljs.core._EQ_.call(null,inst_33754__$1,inst_33747);
var inst_33756 = cljs.core.keyword_identical_QMARK_.call(null,inst_33747,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33757 = (inst_33755) || (inst_33756);
var state_33786__$1 = (function (){var statearr_33800 = state_33786;
(statearr_33800[(10)] = inst_33754__$1);

return statearr_33800;
})();
if(cljs.core.truth_(inst_33757)){
var statearr_33801_33830 = state_33786__$1;
(statearr_33801_33830[(1)] = (8));

} else {
var statearr_33802_33831 = state_33786__$1;
(statearr_33802_33831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (14))){
var inst_33779 = (state_33786[(2)]);
var inst_33780 = cljs.core.async.close_BANG_.call(null,out);
var state_33786__$1 = (function (){var statearr_33804 = state_33786;
(statearr_33804[(13)] = inst_33779);

return statearr_33804;
})();
var statearr_33805_33832 = state_33786__$1;
(statearr_33805_33832[(2)] = inst_33780);

(statearr_33805_33832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (10))){
var inst_33769 = (state_33786[(2)]);
var state_33786__$1 = state_33786;
var statearr_33806_33833 = state_33786__$1;
(statearr_33806_33833[(2)] = inst_33769);

(statearr_33806_33833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (8))){
var inst_33754 = (state_33786[(10)]);
var inst_33750 = (state_33786[(9)]);
var inst_33746 = (state_33786[(7)]);
var inst_33759 = inst_33746.push(inst_33750);
var tmp33803 = inst_33746;
var inst_33746__$1 = tmp33803;
var inst_33747 = inst_33754;
var state_33786__$1 = (function (){var statearr_33807 = state_33786;
(statearr_33807[(7)] = inst_33746__$1);

(statearr_33807[(14)] = inst_33759);

(statearr_33807[(8)] = inst_33747);

return statearr_33807;
})();
var statearr_33808_33834 = state_33786__$1;
(statearr_33808_33834[(2)] = null);

(statearr_33808_33834[(1)] = (2));


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
});})(c__23143__auto___33820,out))
;
return ((function (switch__23078__auto__,c__23143__auto___33820,out){
return (function() {
var cljs$core$async$state_machine__23079__auto__ = null;
var cljs$core$async$state_machine__23079__auto____0 = (function (){
var statearr_33812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33812[(0)] = cljs$core$async$state_machine__23079__auto__);

(statearr_33812[(1)] = (1));

return statearr_33812;
});
var cljs$core$async$state_machine__23079__auto____1 = (function (state_33786){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_33786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e33813){if((e33813 instanceof Object)){
var ex__23082__auto__ = e33813;
var statearr_33814_33835 = state_33786;
(statearr_33814_33835[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33836 = state_33786;
state_33786 = G__33836;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
cljs$core$async$state_machine__23079__auto__ = function(state_33786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23079__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23079__auto____1.call(this,state_33786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23079__auto____0;
cljs$core$async$state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23079__auto____1;
return cljs$core$async$state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto___33820,out))
})();
var state__23145__auto__ = (function (){var statearr_33815 = f__23144__auto__.call(null);
(statearr_33815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto___33820);

return statearr_33815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___33820,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1448902879757