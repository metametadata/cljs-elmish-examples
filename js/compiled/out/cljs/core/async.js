// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args24760 = [];
var len__17809__auto___24766 = arguments.length;
var i__17810__auto___24767 = (0);
while(true){
if((i__17810__auto___24767 < len__17809__auto___24766)){
args24760.push((arguments[i__17810__auto___24767]));

var G__24768 = (i__17810__auto___24767 + (1));
i__17810__auto___24767 = G__24768;
continue;
} else {
}
break;
}

var G__24762 = args24760.length;
switch (G__24762) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24760.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24763 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24763 = (function (f,blockable,meta24764){
this.f = f;
this.blockable = blockable;
this.meta24764 = meta24764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24765,meta24764__$1){
var self__ = this;
var _24765__$1 = this;
return (new cljs.core.async.t_cljs$core$async24763(self__.f,self__.blockable,meta24764__$1));
});

cljs.core.async.t_cljs$core$async24763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24765){
var self__ = this;
var _24765__$1 = this;
return self__.meta24764;
});

cljs.core.async.t_cljs$core$async24763.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24763.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24763.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24763.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24764","meta24764",1397673599,null)], null);
});

cljs.core.async.t_cljs$core$async24763.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24763";

cljs.core.async.t_cljs$core$async24763.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24763");
});

cljs.core.async.__GT_t_cljs$core$async24763 = (function cljs$core$async$__GT_t_cljs$core$async24763(f__$1,blockable__$1,meta24764){
return (new cljs.core.async.t_cljs$core$async24763(f__$1,blockable__$1,meta24764));
});

}

return (new cljs.core.async.t_cljs$core$async24763(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
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
var args24772 = [];
var len__17809__auto___24775 = arguments.length;
var i__17810__auto___24776 = (0);
while(true){
if((i__17810__auto___24776 < len__17809__auto___24775)){
args24772.push((arguments[i__17810__auto___24776]));

var G__24777 = (i__17810__auto___24776 + (1));
i__17810__auto___24776 = G__24777;
continue;
} else {
}
break;
}

var G__24774 = args24772.length;
switch (G__24774) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24772.length)].join('')));

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
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args24779 = [];
var len__17809__auto___24782 = arguments.length;
var i__17810__auto___24783 = (0);
while(true){
if((i__17810__auto___24783 < len__17809__auto___24782)){
args24779.push((arguments[i__17810__auto___24783]));

var G__24784 = (i__17810__auto___24783 + (1));
i__17810__auto___24783 = G__24784;
continue;
} else {
}
break;
}

var G__24781 = args24779.length;
switch (G__24781) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24779.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
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
var args24786 = [];
var len__17809__auto___24789 = arguments.length;
var i__17810__auto___24790 = (0);
while(true){
if((i__17810__auto___24790 < len__17809__auto___24789)){
args24786.push((arguments[i__17810__auto___24790]));

var G__24791 = (i__17810__auto___24790 + (1));
i__17810__auto___24790 = G__24791;
continue;
} else {
}
break;
}

var G__24788 = args24786.length;
switch (G__24788) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24786.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24793 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24793);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24793,ret){
return (function (){
return fn1.call(null,val_24793);
});})(val_24793,ret))
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
var args24794 = [];
var len__17809__auto___24797 = arguments.length;
var i__17810__auto___24798 = (0);
while(true){
if((i__17810__auto___24798 < len__17809__auto___24797)){
args24794.push((arguments[i__17810__auto___24798]));

var G__24799 = (i__17810__auto___24798 + (1));
i__17810__auto___24798 = G__24799;
continue;
} else {
}
break;
}

var G__24796 = args24794.length;
switch (G__24796) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24794.length)].join('')));

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
var n__17654__auto___24801 = n;
var x_24802 = (0);
while(true){
if((x_24802 < n__17654__auto___24801)){
(a[x_24802] = (0));

var G__24803 = (x_24802 + (1));
x_24802 = G__24803;
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

var G__24804 = (i + (1));
i = G__24804;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24808 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24808 = (function (alt_flag,flag,meta24809){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24809 = meta24809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24810,meta24809__$1){
var self__ = this;
var _24810__$1 = this;
return (new cljs.core.async.t_cljs$core$async24808(self__.alt_flag,self__.flag,meta24809__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24808.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24810){
var self__ = this;
var _24810__$1 = this;
return self__.meta24809;
});})(flag))
;

cljs.core.async.t_cljs$core$async24808.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24808.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24808.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24808.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24808.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24809","meta24809",402730882,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24808.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24808";

cljs.core.async.t_cljs$core$async24808.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24808");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24808 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24808(alt_flag__$1,flag__$1,meta24809){
return (new cljs.core.async.t_cljs$core$async24808(alt_flag__$1,flag__$1,meta24809));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24808(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24814 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24814 = (function (alt_handler,flag,cb,meta24815){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24815 = meta24815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24816,meta24815__$1){
var self__ = this;
var _24816__$1 = this;
return (new cljs.core.async.t_cljs$core$async24814(self__.alt_handler,self__.flag,self__.cb,meta24815__$1));
});

cljs.core.async.t_cljs$core$async24814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24816){
var self__ = this;
var _24816__$1 = this;
return self__.meta24815;
});

cljs.core.async.t_cljs$core$async24814.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24814.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24814.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24814.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24814.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24815","meta24815",-17553834,null)], null);
});

cljs.core.async.t_cljs$core$async24814.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24814.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24814";

cljs.core.async.t_cljs$core$async24814.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async24814");
});

cljs.core.async.__GT_t_cljs$core$async24814 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24814(alt_handler__$1,flag__$1,cb__$1,meta24815){
return (new cljs.core.async.t_cljs$core$async24814(alt_handler__$1,flag__$1,cb__$1,meta24815));
});

}

return (new cljs.core.async.t_cljs$core$async24814(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24817_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24817_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24818_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24818_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16751__auto__ = wport;
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24819 = (i + (1));
i = G__24819;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16751__auto__ = ret;
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16739__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16739__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16739__auto__;
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
var args__17816__auto__ = [];
var len__17809__auto___24825 = arguments.length;
var i__17810__auto___24826 = (0);
while(true){
if((i__17810__auto___24826 < len__17809__auto___24825)){
args__17816__auto__.push((arguments[i__17810__auto___24826]));

var G__24827 = (i__17810__auto___24826 + (1));
i__17810__auto___24826 = G__24827;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((1) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17817__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24822){
var map__24823 = p__24822;
var map__24823__$1 = ((((!((map__24823 == null)))?((((map__24823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24823):map__24823);
var opts = map__24823__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24820){
var G__24821 = cljs.core.first.call(null,seq24820);
var seq24820__$1 = cljs.core.next.call(null,seq24820);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24821,seq24820__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args24828 = [];
var len__17809__auto___24878 = arguments.length;
var i__17810__auto___24879 = (0);
while(true){
if((i__17810__auto___24879 < len__17809__auto___24878)){
args24828.push((arguments[i__17810__auto___24879]));

var G__24880 = (i__17810__auto___24879 + (1));
i__17810__auto___24879 = G__24880;
continue;
} else {
}
break;
}

var G__24830 = args24828.length;
switch (G__24830) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24828.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24715__auto___24882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto___24882){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto___24882){
return (function (state_24854){
var state_val_24855 = (state_24854[(1)]);
if((state_val_24855 === (7))){
var inst_24850 = (state_24854[(2)]);
var state_24854__$1 = state_24854;
var statearr_24856_24883 = state_24854__$1;
(statearr_24856_24883[(2)] = inst_24850);

(statearr_24856_24883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (1))){
var state_24854__$1 = state_24854;
var statearr_24857_24884 = state_24854__$1;
(statearr_24857_24884[(2)] = null);

(statearr_24857_24884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (4))){
var inst_24833 = (state_24854[(7)]);
var inst_24833__$1 = (state_24854[(2)]);
var inst_24834 = (inst_24833__$1 == null);
var state_24854__$1 = (function (){var statearr_24858 = state_24854;
(statearr_24858[(7)] = inst_24833__$1);

return statearr_24858;
})();
if(cljs.core.truth_(inst_24834)){
var statearr_24859_24885 = state_24854__$1;
(statearr_24859_24885[(1)] = (5));

} else {
var statearr_24860_24886 = state_24854__$1;
(statearr_24860_24886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (13))){
var state_24854__$1 = state_24854;
var statearr_24861_24887 = state_24854__$1;
(statearr_24861_24887[(2)] = null);

(statearr_24861_24887[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (6))){
var inst_24833 = (state_24854[(7)]);
var state_24854__$1 = state_24854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24854__$1,(11),to,inst_24833);
} else {
if((state_val_24855 === (3))){
var inst_24852 = (state_24854[(2)]);
var state_24854__$1 = state_24854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24854__$1,inst_24852);
} else {
if((state_val_24855 === (12))){
var state_24854__$1 = state_24854;
var statearr_24862_24888 = state_24854__$1;
(statearr_24862_24888[(2)] = null);

(statearr_24862_24888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (2))){
var state_24854__$1 = state_24854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24854__$1,(4),from);
} else {
if((state_val_24855 === (11))){
var inst_24843 = (state_24854[(2)]);
var state_24854__$1 = state_24854;
if(cljs.core.truth_(inst_24843)){
var statearr_24863_24889 = state_24854__$1;
(statearr_24863_24889[(1)] = (12));

} else {
var statearr_24864_24890 = state_24854__$1;
(statearr_24864_24890[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (9))){
var state_24854__$1 = state_24854;
var statearr_24865_24891 = state_24854__$1;
(statearr_24865_24891[(2)] = null);

(statearr_24865_24891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (5))){
var state_24854__$1 = state_24854;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24866_24892 = state_24854__$1;
(statearr_24866_24892[(1)] = (8));

} else {
var statearr_24867_24893 = state_24854__$1;
(statearr_24867_24893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (14))){
var inst_24848 = (state_24854[(2)]);
var state_24854__$1 = state_24854;
var statearr_24868_24894 = state_24854__$1;
(statearr_24868_24894[(2)] = inst_24848);

(statearr_24868_24894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (10))){
var inst_24840 = (state_24854[(2)]);
var state_24854__$1 = state_24854;
var statearr_24869_24895 = state_24854__$1;
(statearr_24869_24895[(2)] = inst_24840);

(statearr_24869_24895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (8))){
var inst_24837 = cljs.core.async.close_BANG_.call(null,to);
var state_24854__$1 = state_24854;
var statearr_24870_24896 = state_24854__$1;
(statearr_24870_24896[(2)] = inst_24837);

(statearr_24870_24896[(1)] = (10));


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
});})(c__24715__auto___24882))
;
return ((function (switch__24603__auto__,c__24715__auto___24882){
return (function() {
var cljs$core$async$state_machine__24604__auto__ = null;
var cljs$core$async$state_machine__24604__auto____0 = (function (){
var statearr_24874 = [null,null,null,null,null,null,null,null];
(statearr_24874[(0)] = cljs$core$async$state_machine__24604__auto__);

(statearr_24874[(1)] = (1));

return statearr_24874;
});
var cljs$core$async$state_machine__24604__auto____1 = (function (state_24854){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_24854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e24875){if((e24875 instanceof Object)){
var ex__24607__auto__ = e24875;
var statearr_24876_24897 = state_24854;
(statearr_24876_24897[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24898 = state_24854;
state_24854 = G__24898;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
cljs$core$async$state_machine__24604__auto__ = function(state_24854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24604__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24604__auto____1.call(this,state_24854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24604__auto____0;
cljs$core$async$state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24604__auto____1;
return cljs$core$async$state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto___24882))
})();
var state__24717__auto__ = (function (){var statearr_24877 = f__24716__auto__.call(null);
(statearr_24877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto___24882);

return statearr_24877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto___24882))
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
return (function (p__25082){
var vec__25083 = p__25082;
var v = cljs.core.nth.call(null,vec__25083,(0),null);
var p = cljs.core.nth.call(null,vec__25083,(1),null);
var job = vec__25083;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24715__auto___25265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto___25265,res,vec__25083,v,p,job,jobs,results){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto___25265,res,vec__25083,v,p,job,jobs,results){
return (function (state_25088){
var state_val_25089 = (state_25088[(1)]);
if((state_val_25089 === (1))){
var state_25088__$1 = state_25088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25088__$1,(2),res,v);
} else {
if((state_val_25089 === (2))){
var inst_25085 = (state_25088[(2)]);
var inst_25086 = cljs.core.async.close_BANG_.call(null,res);
var state_25088__$1 = (function (){var statearr_25090 = state_25088;
(statearr_25090[(7)] = inst_25085);

return statearr_25090;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25088__$1,inst_25086);
} else {
return null;
}
}
});})(c__24715__auto___25265,res,vec__25083,v,p,job,jobs,results))
;
return ((function (switch__24603__auto__,c__24715__auto___25265,res,vec__25083,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____0 = (function (){
var statearr_25094 = [null,null,null,null,null,null,null,null];
(statearr_25094[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__);

(statearr_25094[(1)] = (1));

return statearr_25094;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____1 = (function (state_25088){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_25088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e25095){if((e25095 instanceof Object)){
var ex__24607__auto__ = e25095;
var statearr_25096_25266 = state_25088;
(statearr_25096_25266[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25267 = state_25088;
state_25088 = G__25267;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__ = function(state_25088){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____1.call(this,state_25088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto___25265,res,vec__25083,v,p,job,jobs,results))
})();
var state__24717__auto__ = (function (){var statearr_25097 = f__24716__auto__.call(null);
(statearr_25097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto___25265);

return statearr_25097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto___25265,res,vec__25083,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25098){
var vec__25099 = p__25098;
var v = cljs.core.nth.call(null,vec__25099,(0),null);
var p = cljs.core.nth.call(null,vec__25099,(1),null);
var job = vec__25099;
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
var n__17654__auto___25268 = n;
var __25269 = (0);
while(true){
if((__25269 < n__17654__auto___25268)){
var G__25100_25270 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25100_25270) {
case "compute":
var c__24715__auto___25272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25269,c__24715__auto___25272,G__25100_25270,n__17654__auto___25268,jobs,results,process,async){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (__25269,c__24715__auto___25272,G__25100_25270,n__17654__auto___25268,jobs,results,process,async){
return (function (state_25113){
var state_val_25114 = (state_25113[(1)]);
if((state_val_25114 === (1))){
var state_25113__$1 = state_25113;
var statearr_25115_25273 = state_25113__$1;
(statearr_25115_25273[(2)] = null);

(statearr_25115_25273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25114 === (2))){
var state_25113__$1 = state_25113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25113__$1,(4),jobs);
} else {
if((state_val_25114 === (3))){
var inst_25111 = (state_25113[(2)]);
var state_25113__$1 = state_25113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25113__$1,inst_25111);
} else {
if((state_val_25114 === (4))){
var inst_25103 = (state_25113[(2)]);
var inst_25104 = process.call(null,inst_25103);
var state_25113__$1 = state_25113;
if(cljs.core.truth_(inst_25104)){
var statearr_25116_25274 = state_25113__$1;
(statearr_25116_25274[(1)] = (5));

} else {
var statearr_25117_25275 = state_25113__$1;
(statearr_25117_25275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25114 === (5))){
var state_25113__$1 = state_25113;
var statearr_25118_25276 = state_25113__$1;
(statearr_25118_25276[(2)] = null);

(statearr_25118_25276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25114 === (6))){
var state_25113__$1 = state_25113;
var statearr_25119_25277 = state_25113__$1;
(statearr_25119_25277[(2)] = null);

(statearr_25119_25277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25114 === (7))){
var inst_25109 = (state_25113[(2)]);
var state_25113__$1 = state_25113;
var statearr_25120_25278 = state_25113__$1;
(statearr_25120_25278[(2)] = inst_25109);

(statearr_25120_25278[(1)] = (3));


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
});})(__25269,c__24715__auto___25272,G__25100_25270,n__17654__auto___25268,jobs,results,process,async))
;
return ((function (__25269,switch__24603__auto__,c__24715__auto___25272,G__25100_25270,n__17654__auto___25268,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____0 = (function (){
var statearr_25124 = [null,null,null,null,null,null,null];
(statearr_25124[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__);

(statearr_25124[(1)] = (1));

return statearr_25124;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____1 = (function (state_25113){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_25113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e25125){if((e25125 instanceof Object)){
var ex__24607__auto__ = e25125;
var statearr_25126_25279 = state_25113;
(statearr_25126_25279[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25280 = state_25113;
state_25113 = G__25280;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__ = function(state_25113){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____1.call(this,state_25113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__;
})()
;})(__25269,switch__24603__auto__,c__24715__auto___25272,G__25100_25270,n__17654__auto___25268,jobs,results,process,async))
})();
var state__24717__auto__ = (function (){var statearr_25127 = f__24716__auto__.call(null);
(statearr_25127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto___25272);

return statearr_25127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(__25269,c__24715__auto___25272,G__25100_25270,n__17654__auto___25268,jobs,results,process,async))
);


break;
case "async":
var c__24715__auto___25281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25269,c__24715__auto___25281,G__25100_25270,n__17654__auto___25268,jobs,results,process,async){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (__25269,c__24715__auto___25281,G__25100_25270,n__17654__auto___25268,jobs,results,process,async){
return (function (state_25140){
var state_val_25141 = (state_25140[(1)]);
if((state_val_25141 === (1))){
var state_25140__$1 = state_25140;
var statearr_25142_25282 = state_25140__$1;
(statearr_25142_25282[(2)] = null);

(statearr_25142_25282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25141 === (2))){
var state_25140__$1 = state_25140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25140__$1,(4),jobs);
} else {
if((state_val_25141 === (3))){
var inst_25138 = (state_25140[(2)]);
var state_25140__$1 = state_25140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25140__$1,inst_25138);
} else {
if((state_val_25141 === (4))){
var inst_25130 = (state_25140[(2)]);
var inst_25131 = async.call(null,inst_25130);
var state_25140__$1 = state_25140;
if(cljs.core.truth_(inst_25131)){
var statearr_25143_25283 = state_25140__$1;
(statearr_25143_25283[(1)] = (5));

} else {
var statearr_25144_25284 = state_25140__$1;
(statearr_25144_25284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25141 === (5))){
var state_25140__$1 = state_25140;
var statearr_25145_25285 = state_25140__$1;
(statearr_25145_25285[(2)] = null);

(statearr_25145_25285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25141 === (6))){
var state_25140__$1 = state_25140;
var statearr_25146_25286 = state_25140__$1;
(statearr_25146_25286[(2)] = null);

(statearr_25146_25286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25141 === (7))){
var inst_25136 = (state_25140[(2)]);
var state_25140__$1 = state_25140;
var statearr_25147_25287 = state_25140__$1;
(statearr_25147_25287[(2)] = inst_25136);

(statearr_25147_25287[(1)] = (3));


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
});})(__25269,c__24715__auto___25281,G__25100_25270,n__17654__auto___25268,jobs,results,process,async))
;
return ((function (__25269,switch__24603__auto__,c__24715__auto___25281,G__25100_25270,n__17654__auto___25268,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____0 = (function (){
var statearr_25151 = [null,null,null,null,null,null,null];
(statearr_25151[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__);

(statearr_25151[(1)] = (1));

return statearr_25151;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____1 = (function (state_25140){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_25140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e25152){if((e25152 instanceof Object)){
var ex__24607__auto__ = e25152;
var statearr_25153_25288 = state_25140;
(statearr_25153_25288[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25289 = state_25140;
state_25140 = G__25289;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__ = function(state_25140){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____1.call(this,state_25140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__;
})()
;})(__25269,switch__24603__auto__,c__24715__auto___25281,G__25100_25270,n__17654__auto___25268,jobs,results,process,async))
})();
var state__24717__auto__ = (function (){var statearr_25154 = f__24716__auto__.call(null);
(statearr_25154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto___25281);

return statearr_25154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(__25269,c__24715__auto___25281,G__25100_25270,n__17654__auto___25268,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25290 = (__25269 + (1));
__25269 = G__25290;
continue;
} else {
}
break;
}

var c__24715__auto___25291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto___25291,jobs,results,process,async){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto___25291,jobs,results,process,async){
return (function (state_25176){
var state_val_25177 = (state_25176[(1)]);
if((state_val_25177 === (1))){
var state_25176__$1 = state_25176;
var statearr_25178_25292 = state_25176__$1;
(statearr_25178_25292[(2)] = null);

(statearr_25178_25292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (2))){
var state_25176__$1 = state_25176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25176__$1,(4),from);
} else {
if((state_val_25177 === (3))){
var inst_25174 = (state_25176[(2)]);
var state_25176__$1 = state_25176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25176__$1,inst_25174);
} else {
if((state_val_25177 === (4))){
var inst_25157 = (state_25176[(7)]);
var inst_25157__$1 = (state_25176[(2)]);
var inst_25158 = (inst_25157__$1 == null);
var state_25176__$1 = (function (){var statearr_25179 = state_25176;
(statearr_25179[(7)] = inst_25157__$1);

return statearr_25179;
})();
if(cljs.core.truth_(inst_25158)){
var statearr_25180_25293 = state_25176__$1;
(statearr_25180_25293[(1)] = (5));

} else {
var statearr_25181_25294 = state_25176__$1;
(statearr_25181_25294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (5))){
var inst_25160 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25176__$1 = state_25176;
var statearr_25182_25295 = state_25176__$1;
(statearr_25182_25295[(2)] = inst_25160);

(statearr_25182_25295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (6))){
var inst_25162 = (state_25176[(8)]);
var inst_25157 = (state_25176[(7)]);
var inst_25162__$1 = cljs.core.async.chan.call(null,(1));
var inst_25163 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25164 = [inst_25157,inst_25162__$1];
var inst_25165 = (new cljs.core.PersistentVector(null,2,(5),inst_25163,inst_25164,null));
var state_25176__$1 = (function (){var statearr_25183 = state_25176;
(statearr_25183[(8)] = inst_25162__$1);

return statearr_25183;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25176__$1,(8),jobs,inst_25165);
} else {
if((state_val_25177 === (7))){
var inst_25172 = (state_25176[(2)]);
var state_25176__$1 = state_25176;
var statearr_25184_25296 = state_25176__$1;
(statearr_25184_25296[(2)] = inst_25172);

(statearr_25184_25296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25177 === (8))){
var inst_25162 = (state_25176[(8)]);
var inst_25167 = (state_25176[(2)]);
var state_25176__$1 = (function (){var statearr_25185 = state_25176;
(statearr_25185[(9)] = inst_25167);

return statearr_25185;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25176__$1,(9),results,inst_25162);
} else {
if((state_val_25177 === (9))){
var inst_25169 = (state_25176[(2)]);
var state_25176__$1 = (function (){var statearr_25186 = state_25176;
(statearr_25186[(10)] = inst_25169);

return statearr_25186;
})();
var statearr_25187_25297 = state_25176__$1;
(statearr_25187_25297[(2)] = null);

(statearr_25187_25297[(1)] = (2));


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
});})(c__24715__auto___25291,jobs,results,process,async))
;
return ((function (switch__24603__auto__,c__24715__auto___25291,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____0 = (function (){
var statearr_25191 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25191[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__);

(statearr_25191[(1)] = (1));

return statearr_25191;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____1 = (function (state_25176){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_25176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e25192){if((e25192 instanceof Object)){
var ex__24607__auto__ = e25192;
var statearr_25193_25298 = state_25176;
(statearr_25193_25298[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25299 = state_25176;
state_25176 = G__25299;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__ = function(state_25176){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____1.call(this,state_25176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto___25291,jobs,results,process,async))
})();
var state__24717__auto__ = (function (){var statearr_25194 = f__24716__auto__.call(null);
(statearr_25194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto___25291);

return statearr_25194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto___25291,jobs,results,process,async))
);


var c__24715__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto__,jobs,results,process,async){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto__,jobs,results,process,async){
return (function (state_25232){
var state_val_25233 = (state_25232[(1)]);
if((state_val_25233 === (7))){
var inst_25228 = (state_25232[(2)]);
var state_25232__$1 = state_25232;
var statearr_25234_25300 = state_25232__$1;
(statearr_25234_25300[(2)] = inst_25228);

(statearr_25234_25300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (20))){
var state_25232__$1 = state_25232;
var statearr_25235_25301 = state_25232__$1;
(statearr_25235_25301[(2)] = null);

(statearr_25235_25301[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (1))){
var state_25232__$1 = state_25232;
var statearr_25236_25302 = state_25232__$1;
(statearr_25236_25302[(2)] = null);

(statearr_25236_25302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (4))){
var inst_25197 = (state_25232[(7)]);
var inst_25197__$1 = (state_25232[(2)]);
var inst_25198 = (inst_25197__$1 == null);
var state_25232__$1 = (function (){var statearr_25237 = state_25232;
(statearr_25237[(7)] = inst_25197__$1);

return statearr_25237;
})();
if(cljs.core.truth_(inst_25198)){
var statearr_25238_25303 = state_25232__$1;
(statearr_25238_25303[(1)] = (5));

} else {
var statearr_25239_25304 = state_25232__$1;
(statearr_25239_25304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (15))){
var inst_25210 = (state_25232[(8)]);
var state_25232__$1 = state_25232;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25232__$1,(18),to,inst_25210);
} else {
if((state_val_25233 === (21))){
var inst_25223 = (state_25232[(2)]);
var state_25232__$1 = state_25232;
var statearr_25240_25305 = state_25232__$1;
(statearr_25240_25305[(2)] = inst_25223);

(statearr_25240_25305[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (13))){
var inst_25225 = (state_25232[(2)]);
var state_25232__$1 = (function (){var statearr_25241 = state_25232;
(statearr_25241[(9)] = inst_25225);

return statearr_25241;
})();
var statearr_25242_25306 = state_25232__$1;
(statearr_25242_25306[(2)] = null);

(statearr_25242_25306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (6))){
var inst_25197 = (state_25232[(7)]);
var state_25232__$1 = state_25232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25232__$1,(11),inst_25197);
} else {
if((state_val_25233 === (17))){
var inst_25218 = (state_25232[(2)]);
var state_25232__$1 = state_25232;
if(cljs.core.truth_(inst_25218)){
var statearr_25243_25307 = state_25232__$1;
(statearr_25243_25307[(1)] = (19));

} else {
var statearr_25244_25308 = state_25232__$1;
(statearr_25244_25308[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (3))){
var inst_25230 = (state_25232[(2)]);
var state_25232__$1 = state_25232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25232__$1,inst_25230);
} else {
if((state_val_25233 === (12))){
var inst_25207 = (state_25232[(10)]);
var state_25232__$1 = state_25232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25232__$1,(14),inst_25207);
} else {
if((state_val_25233 === (2))){
var state_25232__$1 = state_25232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25232__$1,(4),results);
} else {
if((state_val_25233 === (19))){
var state_25232__$1 = state_25232;
var statearr_25245_25309 = state_25232__$1;
(statearr_25245_25309[(2)] = null);

(statearr_25245_25309[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (11))){
var inst_25207 = (state_25232[(2)]);
var state_25232__$1 = (function (){var statearr_25246 = state_25232;
(statearr_25246[(10)] = inst_25207);

return statearr_25246;
})();
var statearr_25247_25310 = state_25232__$1;
(statearr_25247_25310[(2)] = null);

(statearr_25247_25310[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (9))){
var state_25232__$1 = state_25232;
var statearr_25248_25311 = state_25232__$1;
(statearr_25248_25311[(2)] = null);

(statearr_25248_25311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (5))){
var state_25232__$1 = state_25232;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25249_25312 = state_25232__$1;
(statearr_25249_25312[(1)] = (8));

} else {
var statearr_25250_25313 = state_25232__$1;
(statearr_25250_25313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (14))){
var inst_25210 = (state_25232[(8)]);
var inst_25212 = (state_25232[(11)]);
var inst_25210__$1 = (state_25232[(2)]);
var inst_25211 = (inst_25210__$1 == null);
var inst_25212__$1 = cljs.core.not.call(null,inst_25211);
var state_25232__$1 = (function (){var statearr_25251 = state_25232;
(statearr_25251[(8)] = inst_25210__$1);

(statearr_25251[(11)] = inst_25212__$1);

return statearr_25251;
})();
if(inst_25212__$1){
var statearr_25252_25314 = state_25232__$1;
(statearr_25252_25314[(1)] = (15));

} else {
var statearr_25253_25315 = state_25232__$1;
(statearr_25253_25315[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (16))){
var inst_25212 = (state_25232[(11)]);
var state_25232__$1 = state_25232;
var statearr_25254_25316 = state_25232__$1;
(statearr_25254_25316[(2)] = inst_25212);

(statearr_25254_25316[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (10))){
var inst_25204 = (state_25232[(2)]);
var state_25232__$1 = state_25232;
var statearr_25255_25317 = state_25232__$1;
(statearr_25255_25317[(2)] = inst_25204);

(statearr_25255_25317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (18))){
var inst_25215 = (state_25232[(2)]);
var state_25232__$1 = state_25232;
var statearr_25256_25318 = state_25232__$1;
(statearr_25256_25318[(2)] = inst_25215);

(statearr_25256_25318[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (8))){
var inst_25201 = cljs.core.async.close_BANG_.call(null,to);
var state_25232__$1 = state_25232;
var statearr_25257_25319 = state_25232__$1;
(statearr_25257_25319[(2)] = inst_25201);

(statearr_25257_25319[(1)] = (10));


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
});})(c__24715__auto__,jobs,results,process,async))
;
return ((function (switch__24603__auto__,c__24715__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____0 = (function (){
var statearr_25261 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25261[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__);

(statearr_25261[(1)] = (1));

return statearr_25261;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____1 = (function (state_25232){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_25232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e25262){if((e25262 instanceof Object)){
var ex__24607__auto__ = e25262;
var statearr_25263_25320 = state_25232;
(statearr_25263_25320[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25321 = state_25232;
state_25232 = G__25321;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__ = function(state_25232){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____1.call(this,state_25232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24604__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto__,jobs,results,process,async))
})();
var state__24717__auto__ = (function (){var statearr_25264 = f__24716__auto__.call(null);
(statearr_25264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto__);

return statearr_25264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto__,jobs,results,process,async))
);

return c__24715__auto__;
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
var args25322 = [];
var len__17809__auto___25325 = arguments.length;
var i__17810__auto___25326 = (0);
while(true){
if((i__17810__auto___25326 < len__17809__auto___25325)){
args25322.push((arguments[i__17810__auto___25326]));

var G__25327 = (i__17810__auto___25326 + (1));
i__17810__auto___25326 = G__25327;
continue;
} else {
}
break;
}

var G__25324 = args25322.length;
switch (G__25324) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25322.length)].join('')));

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
var args25329 = [];
var len__17809__auto___25332 = arguments.length;
var i__17810__auto___25333 = (0);
while(true){
if((i__17810__auto___25333 < len__17809__auto___25332)){
args25329.push((arguments[i__17810__auto___25333]));

var G__25334 = (i__17810__auto___25333 + (1));
i__17810__auto___25333 = G__25334;
continue;
} else {
}
break;
}

var G__25331 = args25329.length;
switch (G__25331) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25329.length)].join('')));

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
var args25336 = [];
var len__17809__auto___25389 = arguments.length;
var i__17810__auto___25390 = (0);
while(true){
if((i__17810__auto___25390 < len__17809__auto___25389)){
args25336.push((arguments[i__17810__auto___25390]));

var G__25391 = (i__17810__auto___25390 + (1));
i__17810__auto___25390 = G__25391;
continue;
} else {
}
break;
}

var G__25338 = args25336.length;
switch (G__25338) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25336.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24715__auto___25393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto___25393,tc,fc){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto___25393,tc,fc){
return (function (state_25364){
var state_val_25365 = (state_25364[(1)]);
if((state_val_25365 === (7))){
var inst_25360 = (state_25364[(2)]);
var state_25364__$1 = state_25364;
var statearr_25366_25394 = state_25364__$1;
(statearr_25366_25394[(2)] = inst_25360);

(statearr_25366_25394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (1))){
var state_25364__$1 = state_25364;
var statearr_25367_25395 = state_25364__$1;
(statearr_25367_25395[(2)] = null);

(statearr_25367_25395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (4))){
var inst_25341 = (state_25364[(7)]);
var inst_25341__$1 = (state_25364[(2)]);
var inst_25342 = (inst_25341__$1 == null);
var state_25364__$1 = (function (){var statearr_25368 = state_25364;
(statearr_25368[(7)] = inst_25341__$1);

return statearr_25368;
})();
if(cljs.core.truth_(inst_25342)){
var statearr_25369_25396 = state_25364__$1;
(statearr_25369_25396[(1)] = (5));

} else {
var statearr_25370_25397 = state_25364__$1;
(statearr_25370_25397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (13))){
var state_25364__$1 = state_25364;
var statearr_25371_25398 = state_25364__$1;
(statearr_25371_25398[(2)] = null);

(statearr_25371_25398[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (6))){
var inst_25341 = (state_25364[(7)]);
var inst_25347 = p.call(null,inst_25341);
var state_25364__$1 = state_25364;
if(cljs.core.truth_(inst_25347)){
var statearr_25372_25399 = state_25364__$1;
(statearr_25372_25399[(1)] = (9));

} else {
var statearr_25373_25400 = state_25364__$1;
(statearr_25373_25400[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (3))){
var inst_25362 = (state_25364[(2)]);
var state_25364__$1 = state_25364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25364__$1,inst_25362);
} else {
if((state_val_25365 === (12))){
var state_25364__$1 = state_25364;
var statearr_25374_25401 = state_25364__$1;
(statearr_25374_25401[(2)] = null);

(statearr_25374_25401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (2))){
var state_25364__$1 = state_25364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25364__$1,(4),ch);
} else {
if((state_val_25365 === (11))){
var inst_25341 = (state_25364[(7)]);
var inst_25351 = (state_25364[(2)]);
var state_25364__$1 = state_25364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25364__$1,(8),inst_25351,inst_25341);
} else {
if((state_val_25365 === (9))){
var state_25364__$1 = state_25364;
var statearr_25375_25402 = state_25364__$1;
(statearr_25375_25402[(2)] = tc);

(statearr_25375_25402[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (5))){
var inst_25344 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25345 = cljs.core.async.close_BANG_.call(null,fc);
var state_25364__$1 = (function (){var statearr_25376 = state_25364;
(statearr_25376[(8)] = inst_25344);

return statearr_25376;
})();
var statearr_25377_25403 = state_25364__$1;
(statearr_25377_25403[(2)] = inst_25345);

(statearr_25377_25403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (14))){
var inst_25358 = (state_25364[(2)]);
var state_25364__$1 = state_25364;
var statearr_25378_25404 = state_25364__$1;
(statearr_25378_25404[(2)] = inst_25358);

(statearr_25378_25404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (10))){
var state_25364__$1 = state_25364;
var statearr_25379_25405 = state_25364__$1;
(statearr_25379_25405[(2)] = fc);

(statearr_25379_25405[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (8))){
var inst_25353 = (state_25364[(2)]);
var state_25364__$1 = state_25364;
if(cljs.core.truth_(inst_25353)){
var statearr_25380_25406 = state_25364__$1;
(statearr_25380_25406[(1)] = (12));

} else {
var statearr_25381_25407 = state_25364__$1;
(statearr_25381_25407[(1)] = (13));

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
});})(c__24715__auto___25393,tc,fc))
;
return ((function (switch__24603__auto__,c__24715__auto___25393,tc,fc){
return (function() {
var cljs$core$async$state_machine__24604__auto__ = null;
var cljs$core$async$state_machine__24604__auto____0 = (function (){
var statearr_25385 = [null,null,null,null,null,null,null,null,null];
(statearr_25385[(0)] = cljs$core$async$state_machine__24604__auto__);

(statearr_25385[(1)] = (1));

return statearr_25385;
});
var cljs$core$async$state_machine__24604__auto____1 = (function (state_25364){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_25364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e25386){if((e25386 instanceof Object)){
var ex__24607__auto__ = e25386;
var statearr_25387_25408 = state_25364;
(statearr_25387_25408[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25409 = state_25364;
state_25364 = G__25409;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
cljs$core$async$state_machine__24604__auto__ = function(state_25364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24604__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24604__auto____1.call(this,state_25364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24604__auto____0;
cljs$core$async$state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24604__auto____1;
return cljs$core$async$state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto___25393,tc,fc))
})();
var state__24717__auto__ = (function (){var statearr_25388 = f__24716__auto__.call(null);
(statearr_25388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto___25393);

return statearr_25388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto___25393,tc,fc))
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
var c__24715__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto__){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto__){
return (function (state_25473){
var state_val_25474 = (state_25473[(1)]);
if((state_val_25474 === (7))){
var inst_25469 = (state_25473[(2)]);
var state_25473__$1 = state_25473;
var statearr_25475_25496 = state_25473__$1;
(statearr_25475_25496[(2)] = inst_25469);

(statearr_25475_25496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (1))){
var inst_25453 = init;
var state_25473__$1 = (function (){var statearr_25476 = state_25473;
(statearr_25476[(7)] = inst_25453);

return statearr_25476;
})();
var statearr_25477_25497 = state_25473__$1;
(statearr_25477_25497[(2)] = null);

(statearr_25477_25497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (4))){
var inst_25456 = (state_25473[(8)]);
var inst_25456__$1 = (state_25473[(2)]);
var inst_25457 = (inst_25456__$1 == null);
var state_25473__$1 = (function (){var statearr_25478 = state_25473;
(statearr_25478[(8)] = inst_25456__$1);

return statearr_25478;
})();
if(cljs.core.truth_(inst_25457)){
var statearr_25479_25498 = state_25473__$1;
(statearr_25479_25498[(1)] = (5));

} else {
var statearr_25480_25499 = state_25473__$1;
(statearr_25480_25499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (6))){
var inst_25456 = (state_25473[(8)]);
var inst_25460 = (state_25473[(9)]);
var inst_25453 = (state_25473[(7)]);
var inst_25460__$1 = f.call(null,inst_25453,inst_25456);
var inst_25461 = cljs.core.reduced_QMARK_.call(null,inst_25460__$1);
var state_25473__$1 = (function (){var statearr_25481 = state_25473;
(statearr_25481[(9)] = inst_25460__$1);

return statearr_25481;
})();
if(inst_25461){
var statearr_25482_25500 = state_25473__$1;
(statearr_25482_25500[(1)] = (8));

} else {
var statearr_25483_25501 = state_25473__$1;
(statearr_25483_25501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (3))){
var inst_25471 = (state_25473[(2)]);
var state_25473__$1 = state_25473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25473__$1,inst_25471);
} else {
if((state_val_25474 === (2))){
var state_25473__$1 = state_25473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25473__$1,(4),ch);
} else {
if((state_val_25474 === (9))){
var inst_25460 = (state_25473[(9)]);
var inst_25453 = inst_25460;
var state_25473__$1 = (function (){var statearr_25484 = state_25473;
(statearr_25484[(7)] = inst_25453);

return statearr_25484;
})();
var statearr_25485_25502 = state_25473__$1;
(statearr_25485_25502[(2)] = null);

(statearr_25485_25502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (5))){
var inst_25453 = (state_25473[(7)]);
var state_25473__$1 = state_25473;
var statearr_25486_25503 = state_25473__$1;
(statearr_25486_25503[(2)] = inst_25453);

(statearr_25486_25503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (10))){
var inst_25467 = (state_25473[(2)]);
var state_25473__$1 = state_25473;
var statearr_25487_25504 = state_25473__$1;
(statearr_25487_25504[(2)] = inst_25467);

(statearr_25487_25504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (8))){
var inst_25460 = (state_25473[(9)]);
var inst_25463 = cljs.core.deref.call(null,inst_25460);
var state_25473__$1 = state_25473;
var statearr_25488_25505 = state_25473__$1;
(statearr_25488_25505[(2)] = inst_25463);

(statearr_25488_25505[(1)] = (10));


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
});})(c__24715__auto__))
;
return ((function (switch__24603__auto__,c__24715__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24604__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24604__auto____0 = (function (){
var statearr_25492 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25492[(0)] = cljs$core$async$reduce_$_state_machine__24604__auto__);

(statearr_25492[(1)] = (1));

return statearr_25492;
});
var cljs$core$async$reduce_$_state_machine__24604__auto____1 = (function (state_25473){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_25473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e25493){if((e25493 instanceof Object)){
var ex__24607__auto__ = e25493;
var statearr_25494_25506 = state_25473;
(statearr_25494_25506[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25507 = state_25473;
state_25473 = G__25507;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24604__auto__ = function(state_25473){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24604__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24604__auto____1.call(this,state_25473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24604__auto____0;
cljs$core$async$reduce_$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24604__auto____1;
return cljs$core$async$reduce_$_state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto__))
})();
var state__24717__auto__ = (function (){var statearr_25495 = f__24716__auto__.call(null);
(statearr_25495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto__);

return statearr_25495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto__))
);

return c__24715__auto__;
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
var args25508 = [];
var len__17809__auto___25560 = arguments.length;
var i__17810__auto___25561 = (0);
while(true){
if((i__17810__auto___25561 < len__17809__auto___25560)){
args25508.push((arguments[i__17810__auto___25561]));

var G__25562 = (i__17810__auto___25561 + (1));
i__17810__auto___25561 = G__25562;
continue;
} else {
}
break;
}

var G__25510 = args25508.length;
switch (G__25510) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25508.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24715__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto__){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto__){
return (function (state_25535){
var state_val_25536 = (state_25535[(1)]);
if((state_val_25536 === (7))){
var inst_25517 = (state_25535[(2)]);
var state_25535__$1 = state_25535;
var statearr_25537_25564 = state_25535__$1;
(statearr_25537_25564[(2)] = inst_25517);

(statearr_25537_25564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25536 === (1))){
var inst_25511 = cljs.core.seq.call(null,coll);
var inst_25512 = inst_25511;
var state_25535__$1 = (function (){var statearr_25538 = state_25535;
(statearr_25538[(7)] = inst_25512);

return statearr_25538;
})();
var statearr_25539_25565 = state_25535__$1;
(statearr_25539_25565[(2)] = null);

(statearr_25539_25565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25536 === (4))){
var inst_25512 = (state_25535[(7)]);
var inst_25515 = cljs.core.first.call(null,inst_25512);
var state_25535__$1 = state_25535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25535__$1,(7),ch,inst_25515);
} else {
if((state_val_25536 === (13))){
var inst_25529 = (state_25535[(2)]);
var state_25535__$1 = state_25535;
var statearr_25540_25566 = state_25535__$1;
(statearr_25540_25566[(2)] = inst_25529);

(statearr_25540_25566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25536 === (6))){
var inst_25520 = (state_25535[(2)]);
var state_25535__$1 = state_25535;
if(cljs.core.truth_(inst_25520)){
var statearr_25541_25567 = state_25535__$1;
(statearr_25541_25567[(1)] = (8));

} else {
var statearr_25542_25568 = state_25535__$1;
(statearr_25542_25568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25536 === (3))){
var inst_25533 = (state_25535[(2)]);
var state_25535__$1 = state_25535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25535__$1,inst_25533);
} else {
if((state_val_25536 === (12))){
var state_25535__$1 = state_25535;
var statearr_25543_25569 = state_25535__$1;
(statearr_25543_25569[(2)] = null);

(statearr_25543_25569[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25536 === (2))){
var inst_25512 = (state_25535[(7)]);
var state_25535__$1 = state_25535;
if(cljs.core.truth_(inst_25512)){
var statearr_25544_25570 = state_25535__$1;
(statearr_25544_25570[(1)] = (4));

} else {
var statearr_25545_25571 = state_25535__$1;
(statearr_25545_25571[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25536 === (11))){
var inst_25526 = cljs.core.async.close_BANG_.call(null,ch);
var state_25535__$1 = state_25535;
var statearr_25546_25572 = state_25535__$1;
(statearr_25546_25572[(2)] = inst_25526);

(statearr_25546_25572[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25536 === (9))){
var state_25535__$1 = state_25535;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25547_25573 = state_25535__$1;
(statearr_25547_25573[(1)] = (11));

} else {
var statearr_25548_25574 = state_25535__$1;
(statearr_25548_25574[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25536 === (5))){
var inst_25512 = (state_25535[(7)]);
var state_25535__$1 = state_25535;
var statearr_25549_25575 = state_25535__$1;
(statearr_25549_25575[(2)] = inst_25512);

(statearr_25549_25575[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25536 === (10))){
var inst_25531 = (state_25535[(2)]);
var state_25535__$1 = state_25535;
var statearr_25550_25576 = state_25535__$1;
(statearr_25550_25576[(2)] = inst_25531);

(statearr_25550_25576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25536 === (8))){
var inst_25512 = (state_25535[(7)]);
var inst_25522 = cljs.core.next.call(null,inst_25512);
var inst_25512__$1 = inst_25522;
var state_25535__$1 = (function (){var statearr_25551 = state_25535;
(statearr_25551[(7)] = inst_25512__$1);

return statearr_25551;
})();
var statearr_25552_25577 = state_25535__$1;
(statearr_25552_25577[(2)] = null);

(statearr_25552_25577[(1)] = (2));


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
});})(c__24715__auto__))
;
return ((function (switch__24603__auto__,c__24715__auto__){
return (function() {
var cljs$core$async$state_machine__24604__auto__ = null;
var cljs$core$async$state_machine__24604__auto____0 = (function (){
var statearr_25556 = [null,null,null,null,null,null,null,null];
(statearr_25556[(0)] = cljs$core$async$state_machine__24604__auto__);

(statearr_25556[(1)] = (1));

return statearr_25556;
});
var cljs$core$async$state_machine__24604__auto____1 = (function (state_25535){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_25535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e25557){if((e25557 instanceof Object)){
var ex__24607__auto__ = e25557;
var statearr_25558_25578 = state_25535;
(statearr_25558_25578[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25579 = state_25535;
state_25535 = G__25579;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
cljs$core$async$state_machine__24604__auto__ = function(state_25535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24604__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24604__auto____1.call(this,state_25535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24604__auto____0;
cljs$core$async$state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24604__auto____1;
return cljs$core$async$state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto__))
})();
var state__24717__auto__ = (function (){var statearr_25559 = f__24716__auto__.call(null);
(statearr_25559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto__);

return statearr_25559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto__))
);

return c__24715__auto__;
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
var x__17406__auto__ = (((_ == null))?null:_);
var m__17407__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,_);
} else {
var m__17407__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,_);
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
var x__17406__auto__ = (((m == null))?null:m);
var m__17407__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17407__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17406__auto__ = (((m == null))?null:m);
var m__17407__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,m,ch);
} else {
var m__17407__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,m,ch);
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
var x__17406__auto__ = (((m == null))?null:m);
var m__17407__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,m);
} else {
var m__17407__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async25801 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25801 = (function (mult,ch,cs,meta25802){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25802 = meta25802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25803,meta25802__$1){
var self__ = this;
var _25803__$1 = this;
return (new cljs.core.async.t_cljs$core$async25801(self__.mult,self__.ch,self__.cs,meta25802__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25801.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25803){
var self__ = this;
var _25803__$1 = this;
return self__.meta25802;
});})(cs))
;

cljs.core.async.t_cljs$core$async25801.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25801.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25801.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25801.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25801.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25801.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25801.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25802","meta25802",-67955774,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25801.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25801";

cljs.core.async.t_cljs$core$async25801.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async25801");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25801 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25801(mult__$1,ch__$1,cs__$1,meta25802){
return (new cljs.core.async.t_cljs$core$async25801(mult__$1,ch__$1,cs__$1,meta25802));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25801(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24715__auto___26022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto___26022,cs,m,dchan,dctr,done){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto___26022,cs,m,dchan,dctr,done){
return (function (state_25934){
var state_val_25935 = (state_25934[(1)]);
if((state_val_25935 === (7))){
var inst_25930 = (state_25934[(2)]);
var state_25934__$1 = state_25934;
var statearr_25936_26023 = state_25934__$1;
(statearr_25936_26023[(2)] = inst_25930);

(statearr_25936_26023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (20))){
var inst_25835 = (state_25934[(7)]);
var inst_25845 = cljs.core.first.call(null,inst_25835);
var inst_25846 = cljs.core.nth.call(null,inst_25845,(0),null);
var inst_25847 = cljs.core.nth.call(null,inst_25845,(1),null);
var state_25934__$1 = (function (){var statearr_25937 = state_25934;
(statearr_25937[(8)] = inst_25846);

return statearr_25937;
})();
if(cljs.core.truth_(inst_25847)){
var statearr_25938_26024 = state_25934__$1;
(statearr_25938_26024[(1)] = (22));

} else {
var statearr_25939_26025 = state_25934__$1;
(statearr_25939_26025[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (27))){
var inst_25875 = (state_25934[(9)]);
var inst_25806 = (state_25934[(10)]);
var inst_25877 = (state_25934[(11)]);
var inst_25882 = (state_25934[(12)]);
var inst_25882__$1 = cljs.core._nth.call(null,inst_25875,inst_25877);
var inst_25883 = cljs.core.async.put_BANG_.call(null,inst_25882__$1,inst_25806,done);
var state_25934__$1 = (function (){var statearr_25940 = state_25934;
(statearr_25940[(12)] = inst_25882__$1);

return statearr_25940;
})();
if(cljs.core.truth_(inst_25883)){
var statearr_25941_26026 = state_25934__$1;
(statearr_25941_26026[(1)] = (30));

} else {
var statearr_25942_26027 = state_25934__$1;
(statearr_25942_26027[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (1))){
var state_25934__$1 = state_25934;
var statearr_25943_26028 = state_25934__$1;
(statearr_25943_26028[(2)] = null);

(statearr_25943_26028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (24))){
var inst_25835 = (state_25934[(7)]);
var inst_25852 = (state_25934[(2)]);
var inst_25853 = cljs.core.next.call(null,inst_25835);
var inst_25815 = inst_25853;
var inst_25816 = null;
var inst_25817 = (0);
var inst_25818 = (0);
var state_25934__$1 = (function (){var statearr_25944 = state_25934;
(statearr_25944[(13)] = inst_25852);

(statearr_25944[(14)] = inst_25818);

(statearr_25944[(15)] = inst_25815);

(statearr_25944[(16)] = inst_25817);

(statearr_25944[(17)] = inst_25816);

return statearr_25944;
})();
var statearr_25945_26029 = state_25934__$1;
(statearr_25945_26029[(2)] = null);

(statearr_25945_26029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (39))){
var state_25934__$1 = state_25934;
var statearr_25949_26030 = state_25934__$1;
(statearr_25949_26030[(2)] = null);

(statearr_25949_26030[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (4))){
var inst_25806 = (state_25934[(10)]);
var inst_25806__$1 = (state_25934[(2)]);
var inst_25807 = (inst_25806__$1 == null);
var state_25934__$1 = (function (){var statearr_25950 = state_25934;
(statearr_25950[(10)] = inst_25806__$1);

return statearr_25950;
})();
if(cljs.core.truth_(inst_25807)){
var statearr_25951_26031 = state_25934__$1;
(statearr_25951_26031[(1)] = (5));

} else {
var statearr_25952_26032 = state_25934__$1;
(statearr_25952_26032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (15))){
var inst_25818 = (state_25934[(14)]);
var inst_25815 = (state_25934[(15)]);
var inst_25817 = (state_25934[(16)]);
var inst_25816 = (state_25934[(17)]);
var inst_25831 = (state_25934[(2)]);
var inst_25832 = (inst_25818 + (1));
var tmp25946 = inst_25815;
var tmp25947 = inst_25817;
var tmp25948 = inst_25816;
var inst_25815__$1 = tmp25946;
var inst_25816__$1 = tmp25948;
var inst_25817__$1 = tmp25947;
var inst_25818__$1 = inst_25832;
var state_25934__$1 = (function (){var statearr_25953 = state_25934;
(statearr_25953[(14)] = inst_25818__$1);

(statearr_25953[(18)] = inst_25831);

(statearr_25953[(15)] = inst_25815__$1);

(statearr_25953[(16)] = inst_25817__$1);

(statearr_25953[(17)] = inst_25816__$1);

return statearr_25953;
})();
var statearr_25954_26033 = state_25934__$1;
(statearr_25954_26033[(2)] = null);

(statearr_25954_26033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (21))){
var inst_25856 = (state_25934[(2)]);
var state_25934__$1 = state_25934;
var statearr_25958_26034 = state_25934__$1;
(statearr_25958_26034[(2)] = inst_25856);

(statearr_25958_26034[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (31))){
var inst_25882 = (state_25934[(12)]);
var inst_25886 = done.call(null,null);
var inst_25887 = cljs.core.async.untap_STAR_.call(null,m,inst_25882);
var state_25934__$1 = (function (){var statearr_25959 = state_25934;
(statearr_25959[(19)] = inst_25886);

return statearr_25959;
})();
var statearr_25960_26035 = state_25934__$1;
(statearr_25960_26035[(2)] = inst_25887);

(statearr_25960_26035[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (32))){
var inst_25874 = (state_25934[(20)]);
var inst_25875 = (state_25934[(9)]);
var inst_25876 = (state_25934[(21)]);
var inst_25877 = (state_25934[(11)]);
var inst_25889 = (state_25934[(2)]);
var inst_25890 = (inst_25877 + (1));
var tmp25955 = inst_25874;
var tmp25956 = inst_25875;
var tmp25957 = inst_25876;
var inst_25874__$1 = tmp25955;
var inst_25875__$1 = tmp25956;
var inst_25876__$1 = tmp25957;
var inst_25877__$1 = inst_25890;
var state_25934__$1 = (function (){var statearr_25961 = state_25934;
(statearr_25961[(20)] = inst_25874__$1);

(statearr_25961[(9)] = inst_25875__$1);

(statearr_25961[(22)] = inst_25889);

(statearr_25961[(21)] = inst_25876__$1);

(statearr_25961[(11)] = inst_25877__$1);

return statearr_25961;
})();
var statearr_25962_26036 = state_25934__$1;
(statearr_25962_26036[(2)] = null);

(statearr_25962_26036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (40))){
var inst_25902 = (state_25934[(23)]);
var inst_25906 = done.call(null,null);
var inst_25907 = cljs.core.async.untap_STAR_.call(null,m,inst_25902);
var state_25934__$1 = (function (){var statearr_25963 = state_25934;
(statearr_25963[(24)] = inst_25906);

return statearr_25963;
})();
var statearr_25964_26037 = state_25934__$1;
(statearr_25964_26037[(2)] = inst_25907);

(statearr_25964_26037[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (33))){
var inst_25893 = (state_25934[(25)]);
var inst_25895 = cljs.core.chunked_seq_QMARK_.call(null,inst_25893);
var state_25934__$1 = state_25934;
if(inst_25895){
var statearr_25965_26038 = state_25934__$1;
(statearr_25965_26038[(1)] = (36));

} else {
var statearr_25966_26039 = state_25934__$1;
(statearr_25966_26039[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (13))){
var inst_25825 = (state_25934[(26)]);
var inst_25828 = cljs.core.async.close_BANG_.call(null,inst_25825);
var state_25934__$1 = state_25934;
var statearr_25967_26040 = state_25934__$1;
(statearr_25967_26040[(2)] = inst_25828);

(statearr_25967_26040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (22))){
var inst_25846 = (state_25934[(8)]);
var inst_25849 = cljs.core.async.close_BANG_.call(null,inst_25846);
var state_25934__$1 = state_25934;
var statearr_25968_26041 = state_25934__$1;
(statearr_25968_26041[(2)] = inst_25849);

(statearr_25968_26041[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (36))){
var inst_25893 = (state_25934[(25)]);
var inst_25897 = cljs.core.chunk_first.call(null,inst_25893);
var inst_25898 = cljs.core.chunk_rest.call(null,inst_25893);
var inst_25899 = cljs.core.count.call(null,inst_25897);
var inst_25874 = inst_25898;
var inst_25875 = inst_25897;
var inst_25876 = inst_25899;
var inst_25877 = (0);
var state_25934__$1 = (function (){var statearr_25969 = state_25934;
(statearr_25969[(20)] = inst_25874);

(statearr_25969[(9)] = inst_25875);

(statearr_25969[(21)] = inst_25876);

(statearr_25969[(11)] = inst_25877);

return statearr_25969;
})();
var statearr_25970_26042 = state_25934__$1;
(statearr_25970_26042[(2)] = null);

(statearr_25970_26042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (41))){
var inst_25893 = (state_25934[(25)]);
var inst_25909 = (state_25934[(2)]);
var inst_25910 = cljs.core.next.call(null,inst_25893);
var inst_25874 = inst_25910;
var inst_25875 = null;
var inst_25876 = (0);
var inst_25877 = (0);
var state_25934__$1 = (function (){var statearr_25971 = state_25934;
(statearr_25971[(20)] = inst_25874);

(statearr_25971[(9)] = inst_25875);

(statearr_25971[(27)] = inst_25909);

(statearr_25971[(21)] = inst_25876);

(statearr_25971[(11)] = inst_25877);

return statearr_25971;
})();
var statearr_25972_26043 = state_25934__$1;
(statearr_25972_26043[(2)] = null);

(statearr_25972_26043[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (43))){
var state_25934__$1 = state_25934;
var statearr_25973_26044 = state_25934__$1;
(statearr_25973_26044[(2)] = null);

(statearr_25973_26044[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (29))){
var inst_25918 = (state_25934[(2)]);
var state_25934__$1 = state_25934;
var statearr_25974_26045 = state_25934__$1;
(statearr_25974_26045[(2)] = inst_25918);

(statearr_25974_26045[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (44))){
var inst_25927 = (state_25934[(2)]);
var state_25934__$1 = (function (){var statearr_25975 = state_25934;
(statearr_25975[(28)] = inst_25927);

return statearr_25975;
})();
var statearr_25976_26046 = state_25934__$1;
(statearr_25976_26046[(2)] = null);

(statearr_25976_26046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (6))){
var inst_25866 = (state_25934[(29)]);
var inst_25865 = cljs.core.deref.call(null,cs);
var inst_25866__$1 = cljs.core.keys.call(null,inst_25865);
var inst_25867 = cljs.core.count.call(null,inst_25866__$1);
var inst_25868 = cljs.core.reset_BANG_.call(null,dctr,inst_25867);
var inst_25873 = cljs.core.seq.call(null,inst_25866__$1);
var inst_25874 = inst_25873;
var inst_25875 = null;
var inst_25876 = (0);
var inst_25877 = (0);
var state_25934__$1 = (function (){var statearr_25977 = state_25934;
(statearr_25977[(20)] = inst_25874);

(statearr_25977[(9)] = inst_25875);

(statearr_25977[(30)] = inst_25868);

(statearr_25977[(29)] = inst_25866__$1);

(statearr_25977[(21)] = inst_25876);

(statearr_25977[(11)] = inst_25877);

return statearr_25977;
})();
var statearr_25978_26047 = state_25934__$1;
(statearr_25978_26047[(2)] = null);

(statearr_25978_26047[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (28))){
var inst_25874 = (state_25934[(20)]);
var inst_25893 = (state_25934[(25)]);
var inst_25893__$1 = cljs.core.seq.call(null,inst_25874);
var state_25934__$1 = (function (){var statearr_25979 = state_25934;
(statearr_25979[(25)] = inst_25893__$1);

return statearr_25979;
})();
if(inst_25893__$1){
var statearr_25980_26048 = state_25934__$1;
(statearr_25980_26048[(1)] = (33));

} else {
var statearr_25981_26049 = state_25934__$1;
(statearr_25981_26049[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (25))){
var inst_25876 = (state_25934[(21)]);
var inst_25877 = (state_25934[(11)]);
var inst_25879 = (inst_25877 < inst_25876);
var inst_25880 = inst_25879;
var state_25934__$1 = state_25934;
if(cljs.core.truth_(inst_25880)){
var statearr_25982_26050 = state_25934__$1;
(statearr_25982_26050[(1)] = (27));

} else {
var statearr_25983_26051 = state_25934__$1;
(statearr_25983_26051[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (34))){
var state_25934__$1 = state_25934;
var statearr_25984_26052 = state_25934__$1;
(statearr_25984_26052[(2)] = null);

(statearr_25984_26052[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (17))){
var state_25934__$1 = state_25934;
var statearr_25985_26053 = state_25934__$1;
(statearr_25985_26053[(2)] = null);

(statearr_25985_26053[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (3))){
var inst_25932 = (state_25934[(2)]);
var state_25934__$1 = state_25934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25934__$1,inst_25932);
} else {
if((state_val_25935 === (12))){
var inst_25861 = (state_25934[(2)]);
var state_25934__$1 = state_25934;
var statearr_25986_26054 = state_25934__$1;
(statearr_25986_26054[(2)] = inst_25861);

(statearr_25986_26054[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (2))){
var state_25934__$1 = state_25934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25934__$1,(4),ch);
} else {
if((state_val_25935 === (23))){
var state_25934__$1 = state_25934;
var statearr_25987_26055 = state_25934__$1;
(statearr_25987_26055[(2)] = null);

(statearr_25987_26055[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (35))){
var inst_25916 = (state_25934[(2)]);
var state_25934__$1 = state_25934;
var statearr_25988_26056 = state_25934__$1;
(statearr_25988_26056[(2)] = inst_25916);

(statearr_25988_26056[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (19))){
var inst_25835 = (state_25934[(7)]);
var inst_25839 = cljs.core.chunk_first.call(null,inst_25835);
var inst_25840 = cljs.core.chunk_rest.call(null,inst_25835);
var inst_25841 = cljs.core.count.call(null,inst_25839);
var inst_25815 = inst_25840;
var inst_25816 = inst_25839;
var inst_25817 = inst_25841;
var inst_25818 = (0);
var state_25934__$1 = (function (){var statearr_25989 = state_25934;
(statearr_25989[(14)] = inst_25818);

(statearr_25989[(15)] = inst_25815);

(statearr_25989[(16)] = inst_25817);

(statearr_25989[(17)] = inst_25816);

return statearr_25989;
})();
var statearr_25990_26057 = state_25934__$1;
(statearr_25990_26057[(2)] = null);

(statearr_25990_26057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (11))){
var inst_25835 = (state_25934[(7)]);
var inst_25815 = (state_25934[(15)]);
var inst_25835__$1 = cljs.core.seq.call(null,inst_25815);
var state_25934__$1 = (function (){var statearr_25991 = state_25934;
(statearr_25991[(7)] = inst_25835__$1);

return statearr_25991;
})();
if(inst_25835__$1){
var statearr_25992_26058 = state_25934__$1;
(statearr_25992_26058[(1)] = (16));

} else {
var statearr_25993_26059 = state_25934__$1;
(statearr_25993_26059[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (9))){
var inst_25863 = (state_25934[(2)]);
var state_25934__$1 = state_25934;
var statearr_25994_26060 = state_25934__$1;
(statearr_25994_26060[(2)] = inst_25863);

(statearr_25994_26060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (5))){
var inst_25813 = cljs.core.deref.call(null,cs);
var inst_25814 = cljs.core.seq.call(null,inst_25813);
var inst_25815 = inst_25814;
var inst_25816 = null;
var inst_25817 = (0);
var inst_25818 = (0);
var state_25934__$1 = (function (){var statearr_25995 = state_25934;
(statearr_25995[(14)] = inst_25818);

(statearr_25995[(15)] = inst_25815);

(statearr_25995[(16)] = inst_25817);

(statearr_25995[(17)] = inst_25816);

return statearr_25995;
})();
var statearr_25996_26061 = state_25934__$1;
(statearr_25996_26061[(2)] = null);

(statearr_25996_26061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (14))){
var state_25934__$1 = state_25934;
var statearr_25997_26062 = state_25934__$1;
(statearr_25997_26062[(2)] = null);

(statearr_25997_26062[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (45))){
var inst_25924 = (state_25934[(2)]);
var state_25934__$1 = state_25934;
var statearr_25998_26063 = state_25934__$1;
(statearr_25998_26063[(2)] = inst_25924);

(statearr_25998_26063[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (26))){
var inst_25866 = (state_25934[(29)]);
var inst_25920 = (state_25934[(2)]);
var inst_25921 = cljs.core.seq.call(null,inst_25866);
var state_25934__$1 = (function (){var statearr_25999 = state_25934;
(statearr_25999[(31)] = inst_25920);

return statearr_25999;
})();
if(inst_25921){
var statearr_26000_26064 = state_25934__$1;
(statearr_26000_26064[(1)] = (42));

} else {
var statearr_26001_26065 = state_25934__$1;
(statearr_26001_26065[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (16))){
var inst_25835 = (state_25934[(7)]);
var inst_25837 = cljs.core.chunked_seq_QMARK_.call(null,inst_25835);
var state_25934__$1 = state_25934;
if(inst_25837){
var statearr_26002_26066 = state_25934__$1;
(statearr_26002_26066[(1)] = (19));

} else {
var statearr_26003_26067 = state_25934__$1;
(statearr_26003_26067[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (38))){
var inst_25913 = (state_25934[(2)]);
var state_25934__$1 = state_25934;
var statearr_26004_26068 = state_25934__$1;
(statearr_26004_26068[(2)] = inst_25913);

(statearr_26004_26068[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (30))){
var state_25934__$1 = state_25934;
var statearr_26005_26069 = state_25934__$1;
(statearr_26005_26069[(2)] = null);

(statearr_26005_26069[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (10))){
var inst_25818 = (state_25934[(14)]);
var inst_25816 = (state_25934[(17)]);
var inst_25824 = cljs.core._nth.call(null,inst_25816,inst_25818);
var inst_25825 = cljs.core.nth.call(null,inst_25824,(0),null);
var inst_25826 = cljs.core.nth.call(null,inst_25824,(1),null);
var state_25934__$1 = (function (){var statearr_26006 = state_25934;
(statearr_26006[(26)] = inst_25825);

return statearr_26006;
})();
if(cljs.core.truth_(inst_25826)){
var statearr_26007_26070 = state_25934__$1;
(statearr_26007_26070[(1)] = (13));

} else {
var statearr_26008_26071 = state_25934__$1;
(statearr_26008_26071[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (18))){
var inst_25859 = (state_25934[(2)]);
var state_25934__$1 = state_25934;
var statearr_26009_26072 = state_25934__$1;
(statearr_26009_26072[(2)] = inst_25859);

(statearr_26009_26072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (42))){
var state_25934__$1 = state_25934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25934__$1,(45),dchan);
} else {
if((state_val_25935 === (37))){
var inst_25902 = (state_25934[(23)]);
var inst_25893 = (state_25934[(25)]);
var inst_25806 = (state_25934[(10)]);
var inst_25902__$1 = cljs.core.first.call(null,inst_25893);
var inst_25903 = cljs.core.async.put_BANG_.call(null,inst_25902__$1,inst_25806,done);
var state_25934__$1 = (function (){var statearr_26010 = state_25934;
(statearr_26010[(23)] = inst_25902__$1);

return statearr_26010;
})();
if(cljs.core.truth_(inst_25903)){
var statearr_26011_26073 = state_25934__$1;
(statearr_26011_26073[(1)] = (39));

} else {
var statearr_26012_26074 = state_25934__$1;
(statearr_26012_26074[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25935 === (8))){
var inst_25818 = (state_25934[(14)]);
var inst_25817 = (state_25934[(16)]);
var inst_25820 = (inst_25818 < inst_25817);
var inst_25821 = inst_25820;
var state_25934__$1 = state_25934;
if(cljs.core.truth_(inst_25821)){
var statearr_26013_26075 = state_25934__$1;
(statearr_26013_26075[(1)] = (10));

} else {
var statearr_26014_26076 = state_25934__$1;
(statearr_26014_26076[(1)] = (11));

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
});})(c__24715__auto___26022,cs,m,dchan,dctr,done))
;
return ((function (switch__24603__auto__,c__24715__auto___26022,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24604__auto__ = null;
var cljs$core$async$mult_$_state_machine__24604__auto____0 = (function (){
var statearr_26018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26018[(0)] = cljs$core$async$mult_$_state_machine__24604__auto__);

(statearr_26018[(1)] = (1));

return statearr_26018;
});
var cljs$core$async$mult_$_state_machine__24604__auto____1 = (function (state_25934){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_25934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e26019){if((e26019 instanceof Object)){
var ex__24607__auto__ = e26019;
var statearr_26020_26077 = state_25934;
(statearr_26020_26077[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26078 = state_25934;
state_25934 = G__26078;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24604__auto__ = function(state_25934){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24604__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24604__auto____1.call(this,state_25934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24604__auto____0;
cljs$core$async$mult_$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24604__auto____1;
return cljs$core$async$mult_$_state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto___26022,cs,m,dchan,dctr,done))
})();
var state__24717__auto__ = (function (){var statearr_26021 = f__24716__auto__.call(null);
(statearr_26021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto___26022);

return statearr_26021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto___26022,cs,m,dchan,dctr,done))
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
var args26079 = [];
var len__17809__auto___26082 = arguments.length;
var i__17810__auto___26083 = (0);
while(true){
if((i__17810__auto___26083 < len__17809__auto___26082)){
args26079.push((arguments[i__17810__auto___26083]));

var G__26084 = (i__17810__auto___26083 + (1));
i__17810__auto___26083 = G__26084;
continue;
} else {
}
break;
}

var G__26081 = args26079.length;
switch (G__26081) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26079.length)].join('')));

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
var x__17406__auto__ = (((m == null))?null:m);
var m__17407__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,m,ch);
} else {
var m__17407__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,m,ch);
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
var x__17406__auto__ = (((m == null))?null:m);
var m__17407__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,m,ch);
} else {
var m__17407__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,m,ch);
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
var x__17406__auto__ = (((m == null))?null:m);
var m__17407__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,m);
} else {
var m__17407__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,m);
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
var x__17406__auto__ = (((m == null))?null:m);
var m__17407__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,m,state_map);
} else {
var m__17407__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,m,state_map);
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
var x__17406__auto__ = (((m == null))?null:m);
var m__17407__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,m,mode);
} else {
var m__17407__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___26096 = arguments.length;
var i__17810__auto___26097 = (0);
while(true){
if((i__17810__auto___26097 < len__17809__auto___26096)){
args__17816__auto__.push((arguments[i__17810__auto___26097]));

var G__26098 = (i__17810__auto___26097 + (1));
i__17810__auto___26097 = G__26098;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26090){
var map__26091 = p__26090;
var map__26091__$1 = ((((!((map__26091 == null)))?((((map__26091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26091):map__26091);
var opts = map__26091__$1;
var statearr_26093_26099 = state;
(statearr_26093_26099[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__26091,map__26091__$1,opts){
return (function (val){
var statearr_26094_26100 = state;
(statearr_26094_26100[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26091,map__26091__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_26095_26101 = state;
(statearr_26095_26101[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26086){
var G__26087 = cljs.core.first.call(null,seq26086);
var seq26086__$1 = cljs.core.next.call(null,seq26086);
var G__26088 = cljs.core.first.call(null,seq26086__$1);
var seq26086__$2 = cljs.core.next.call(null,seq26086__$1);
var G__26089 = cljs.core.first.call(null,seq26086__$2);
var seq26086__$3 = cljs.core.next.call(null,seq26086__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26087,G__26088,G__26089,seq26086__$3);
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
if(typeof cljs.core.async.t_cljs$core$async26265 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26265 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26266){
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
this.meta26266 = meta26266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26267,meta26266__$1){
var self__ = this;
var _26267__$1 = this;
return (new cljs.core.async.t_cljs$core$async26265(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26266__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26265.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26267){
var self__ = this;
var _26267__$1 = this;
return self__.meta26266;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26265.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26265.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26265.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26265.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26265.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26265.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26265.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26265.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async26265.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26266","meta26266",1930836987,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26265.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26265.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26265";

cljs.core.async.t_cljs$core$async26265.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26265");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26265 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26265(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26266){
return (new cljs.core.async.t_cljs$core$async26265(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26266));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26265(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24715__auto___26428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto___26428,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto___26428,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26365){
var state_val_26366 = (state_26365[(1)]);
if((state_val_26366 === (7))){
var inst_26283 = (state_26365[(2)]);
var state_26365__$1 = state_26365;
var statearr_26367_26429 = state_26365__$1;
(statearr_26367_26429[(2)] = inst_26283);

(statearr_26367_26429[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (20))){
var inst_26295 = (state_26365[(7)]);
var state_26365__$1 = state_26365;
var statearr_26368_26430 = state_26365__$1;
(statearr_26368_26430[(2)] = inst_26295);

(statearr_26368_26430[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (27))){
var state_26365__$1 = state_26365;
var statearr_26369_26431 = state_26365__$1;
(statearr_26369_26431[(2)] = null);

(statearr_26369_26431[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (1))){
var inst_26271 = (state_26365[(8)]);
var inst_26271__$1 = calc_state.call(null);
var inst_26273 = (inst_26271__$1 == null);
var inst_26274 = cljs.core.not.call(null,inst_26273);
var state_26365__$1 = (function (){var statearr_26370 = state_26365;
(statearr_26370[(8)] = inst_26271__$1);

return statearr_26370;
})();
if(inst_26274){
var statearr_26371_26432 = state_26365__$1;
(statearr_26371_26432[(1)] = (2));

} else {
var statearr_26372_26433 = state_26365__$1;
(statearr_26372_26433[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (24))){
var inst_26318 = (state_26365[(9)]);
var inst_26339 = (state_26365[(10)]);
var inst_26325 = (state_26365[(11)]);
var inst_26339__$1 = inst_26318.call(null,inst_26325);
var state_26365__$1 = (function (){var statearr_26373 = state_26365;
(statearr_26373[(10)] = inst_26339__$1);

return statearr_26373;
})();
if(cljs.core.truth_(inst_26339__$1)){
var statearr_26374_26434 = state_26365__$1;
(statearr_26374_26434[(1)] = (29));

} else {
var statearr_26375_26435 = state_26365__$1;
(statearr_26375_26435[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (4))){
var inst_26286 = (state_26365[(2)]);
var state_26365__$1 = state_26365;
if(cljs.core.truth_(inst_26286)){
var statearr_26376_26436 = state_26365__$1;
(statearr_26376_26436[(1)] = (8));

} else {
var statearr_26377_26437 = state_26365__$1;
(statearr_26377_26437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (15))){
var inst_26312 = (state_26365[(2)]);
var state_26365__$1 = state_26365;
if(cljs.core.truth_(inst_26312)){
var statearr_26378_26438 = state_26365__$1;
(statearr_26378_26438[(1)] = (19));

} else {
var statearr_26379_26439 = state_26365__$1;
(statearr_26379_26439[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (21))){
var inst_26317 = (state_26365[(12)]);
var inst_26317__$1 = (state_26365[(2)]);
var inst_26318 = cljs.core.get.call(null,inst_26317__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26319 = cljs.core.get.call(null,inst_26317__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26320 = cljs.core.get.call(null,inst_26317__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26365__$1 = (function (){var statearr_26380 = state_26365;
(statearr_26380[(9)] = inst_26318);

(statearr_26380[(13)] = inst_26319);

(statearr_26380[(12)] = inst_26317__$1);

return statearr_26380;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26365__$1,(22),inst_26320);
} else {
if((state_val_26366 === (31))){
var inst_26347 = (state_26365[(2)]);
var state_26365__$1 = state_26365;
if(cljs.core.truth_(inst_26347)){
var statearr_26381_26440 = state_26365__$1;
(statearr_26381_26440[(1)] = (32));

} else {
var statearr_26382_26441 = state_26365__$1;
(statearr_26382_26441[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (32))){
var inst_26324 = (state_26365[(14)]);
var state_26365__$1 = state_26365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26365__$1,(35),out,inst_26324);
} else {
if((state_val_26366 === (33))){
var inst_26317 = (state_26365[(12)]);
var inst_26295 = inst_26317;
var state_26365__$1 = (function (){var statearr_26383 = state_26365;
(statearr_26383[(7)] = inst_26295);

return statearr_26383;
})();
var statearr_26384_26442 = state_26365__$1;
(statearr_26384_26442[(2)] = null);

(statearr_26384_26442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (13))){
var inst_26295 = (state_26365[(7)]);
var inst_26302 = inst_26295.cljs$lang$protocol_mask$partition0$;
var inst_26303 = (inst_26302 & (64));
var inst_26304 = inst_26295.cljs$core$ISeq$;
var inst_26305 = (inst_26303) || (inst_26304);
var state_26365__$1 = state_26365;
if(cljs.core.truth_(inst_26305)){
var statearr_26385_26443 = state_26365__$1;
(statearr_26385_26443[(1)] = (16));

} else {
var statearr_26386_26444 = state_26365__$1;
(statearr_26386_26444[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (22))){
var inst_26324 = (state_26365[(14)]);
var inst_26325 = (state_26365[(11)]);
var inst_26323 = (state_26365[(2)]);
var inst_26324__$1 = cljs.core.nth.call(null,inst_26323,(0),null);
var inst_26325__$1 = cljs.core.nth.call(null,inst_26323,(1),null);
var inst_26326 = (inst_26324__$1 == null);
var inst_26327 = cljs.core._EQ_.call(null,inst_26325__$1,change);
var inst_26328 = (inst_26326) || (inst_26327);
var state_26365__$1 = (function (){var statearr_26387 = state_26365;
(statearr_26387[(14)] = inst_26324__$1);

(statearr_26387[(11)] = inst_26325__$1);

return statearr_26387;
})();
if(cljs.core.truth_(inst_26328)){
var statearr_26388_26445 = state_26365__$1;
(statearr_26388_26445[(1)] = (23));

} else {
var statearr_26389_26446 = state_26365__$1;
(statearr_26389_26446[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (36))){
var inst_26317 = (state_26365[(12)]);
var inst_26295 = inst_26317;
var state_26365__$1 = (function (){var statearr_26390 = state_26365;
(statearr_26390[(7)] = inst_26295);

return statearr_26390;
})();
var statearr_26391_26447 = state_26365__$1;
(statearr_26391_26447[(2)] = null);

(statearr_26391_26447[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (29))){
var inst_26339 = (state_26365[(10)]);
var state_26365__$1 = state_26365;
var statearr_26392_26448 = state_26365__$1;
(statearr_26392_26448[(2)] = inst_26339);

(statearr_26392_26448[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (6))){
var state_26365__$1 = state_26365;
var statearr_26393_26449 = state_26365__$1;
(statearr_26393_26449[(2)] = false);

(statearr_26393_26449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (28))){
var inst_26335 = (state_26365[(2)]);
var inst_26336 = calc_state.call(null);
var inst_26295 = inst_26336;
var state_26365__$1 = (function (){var statearr_26394 = state_26365;
(statearr_26394[(15)] = inst_26335);

(statearr_26394[(7)] = inst_26295);

return statearr_26394;
})();
var statearr_26395_26450 = state_26365__$1;
(statearr_26395_26450[(2)] = null);

(statearr_26395_26450[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (25))){
var inst_26361 = (state_26365[(2)]);
var state_26365__$1 = state_26365;
var statearr_26396_26451 = state_26365__$1;
(statearr_26396_26451[(2)] = inst_26361);

(statearr_26396_26451[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (34))){
var inst_26359 = (state_26365[(2)]);
var state_26365__$1 = state_26365;
var statearr_26397_26452 = state_26365__$1;
(statearr_26397_26452[(2)] = inst_26359);

(statearr_26397_26452[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (17))){
var state_26365__$1 = state_26365;
var statearr_26398_26453 = state_26365__$1;
(statearr_26398_26453[(2)] = false);

(statearr_26398_26453[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (3))){
var state_26365__$1 = state_26365;
var statearr_26399_26454 = state_26365__$1;
(statearr_26399_26454[(2)] = false);

(statearr_26399_26454[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (12))){
var inst_26363 = (state_26365[(2)]);
var state_26365__$1 = state_26365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26365__$1,inst_26363);
} else {
if((state_val_26366 === (2))){
var inst_26271 = (state_26365[(8)]);
var inst_26276 = inst_26271.cljs$lang$protocol_mask$partition0$;
var inst_26277 = (inst_26276 & (64));
var inst_26278 = inst_26271.cljs$core$ISeq$;
var inst_26279 = (inst_26277) || (inst_26278);
var state_26365__$1 = state_26365;
if(cljs.core.truth_(inst_26279)){
var statearr_26400_26455 = state_26365__$1;
(statearr_26400_26455[(1)] = (5));

} else {
var statearr_26401_26456 = state_26365__$1;
(statearr_26401_26456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (23))){
var inst_26324 = (state_26365[(14)]);
var inst_26330 = (inst_26324 == null);
var state_26365__$1 = state_26365;
if(cljs.core.truth_(inst_26330)){
var statearr_26402_26457 = state_26365__$1;
(statearr_26402_26457[(1)] = (26));

} else {
var statearr_26403_26458 = state_26365__$1;
(statearr_26403_26458[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (35))){
var inst_26350 = (state_26365[(2)]);
var state_26365__$1 = state_26365;
if(cljs.core.truth_(inst_26350)){
var statearr_26404_26459 = state_26365__$1;
(statearr_26404_26459[(1)] = (36));

} else {
var statearr_26405_26460 = state_26365__$1;
(statearr_26405_26460[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (19))){
var inst_26295 = (state_26365[(7)]);
var inst_26314 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26295);
var state_26365__$1 = state_26365;
var statearr_26406_26461 = state_26365__$1;
(statearr_26406_26461[(2)] = inst_26314);

(statearr_26406_26461[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (11))){
var inst_26295 = (state_26365[(7)]);
var inst_26299 = (inst_26295 == null);
var inst_26300 = cljs.core.not.call(null,inst_26299);
var state_26365__$1 = state_26365;
if(inst_26300){
var statearr_26407_26462 = state_26365__$1;
(statearr_26407_26462[(1)] = (13));

} else {
var statearr_26408_26463 = state_26365__$1;
(statearr_26408_26463[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (9))){
var inst_26271 = (state_26365[(8)]);
var state_26365__$1 = state_26365;
var statearr_26409_26464 = state_26365__$1;
(statearr_26409_26464[(2)] = inst_26271);

(statearr_26409_26464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (5))){
var state_26365__$1 = state_26365;
var statearr_26410_26465 = state_26365__$1;
(statearr_26410_26465[(2)] = true);

(statearr_26410_26465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (14))){
var state_26365__$1 = state_26365;
var statearr_26411_26466 = state_26365__$1;
(statearr_26411_26466[(2)] = false);

(statearr_26411_26466[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (26))){
var inst_26325 = (state_26365[(11)]);
var inst_26332 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26325);
var state_26365__$1 = state_26365;
var statearr_26412_26467 = state_26365__$1;
(statearr_26412_26467[(2)] = inst_26332);

(statearr_26412_26467[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (16))){
var state_26365__$1 = state_26365;
var statearr_26413_26468 = state_26365__$1;
(statearr_26413_26468[(2)] = true);

(statearr_26413_26468[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (38))){
var inst_26355 = (state_26365[(2)]);
var state_26365__$1 = state_26365;
var statearr_26414_26469 = state_26365__$1;
(statearr_26414_26469[(2)] = inst_26355);

(statearr_26414_26469[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (30))){
var inst_26318 = (state_26365[(9)]);
var inst_26319 = (state_26365[(13)]);
var inst_26325 = (state_26365[(11)]);
var inst_26342 = cljs.core.empty_QMARK_.call(null,inst_26318);
var inst_26343 = inst_26319.call(null,inst_26325);
var inst_26344 = cljs.core.not.call(null,inst_26343);
var inst_26345 = (inst_26342) && (inst_26344);
var state_26365__$1 = state_26365;
var statearr_26415_26470 = state_26365__$1;
(statearr_26415_26470[(2)] = inst_26345);

(statearr_26415_26470[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (10))){
var inst_26271 = (state_26365[(8)]);
var inst_26291 = (state_26365[(2)]);
var inst_26292 = cljs.core.get.call(null,inst_26291,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26293 = cljs.core.get.call(null,inst_26291,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26294 = cljs.core.get.call(null,inst_26291,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26295 = inst_26271;
var state_26365__$1 = (function (){var statearr_26416 = state_26365;
(statearr_26416[(16)] = inst_26293);

(statearr_26416[(17)] = inst_26294);

(statearr_26416[(18)] = inst_26292);

(statearr_26416[(7)] = inst_26295);

return statearr_26416;
})();
var statearr_26417_26471 = state_26365__$1;
(statearr_26417_26471[(2)] = null);

(statearr_26417_26471[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (18))){
var inst_26309 = (state_26365[(2)]);
var state_26365__$1 = state_26365;
var statearr_26418_26472 = state_26365__$1;
(statearr_26418_26472[(2)] = inst_26309);

(statearr_26418_26472[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (37))){
var state_26365__$1 = state_26365;
var statearr_26419_26473 = state_26365__$1;
(statearr_26419_26473[(2)] = null);

(statearr_26419_26473[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26366 === (8))){
var inst_26271 = (state_26365[(8)]);
var inst_26288 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26271);
var state_26365__$1 = state_26365;
var statearr_26420_26474 = state_26365__$1;
(statearr_26420_26474[(2)] = inst_26288);

(statearr_26420_26474[(1)] = (10));


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
});})(c__24715__auto___26428,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24603__auto__,c__24715__auto___26428,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24604__auto__ = null;
var cljs$core$async$mix_$_state_machine__24604__auto____0 = (function (){
var statearr_26424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26424[(0)] = cljs$core$async$mix_$_state_machine__24604__auto__);

(statearr_26424[(1)] = (1));

return statearr_26424;
});
var cljs$core$async$mix_$_state_machine__24604__auto____1 = (function (state_26365){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_26365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e26425){if((e26425 instanceof Object)){
var ex__24607__auto__ = e26425;
var statearr_26426_26475 = state_26365;
(statearr_26426_26475[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26476 = state_26365;
state_26365 = G__26476;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24604__auto__ = function(state_26365){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24604__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24604__auto____1.call(this,state_26365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24604__auto____0;
cljs$core$async$mix_$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24604__auto____1;
return cljs$core$async$mix_$_state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto___26428,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24717__auto__ = (function (){var statearr_26427 = f__24716__auto__.call(null);
(statearr_26427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto___26428);

return statearr_26427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto___26428,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17406__auto__ = (((p == null))?null:p);
var m__17407__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17407__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17406__auto__ = (((p == null))?null:p);
var m__17407__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,p,v,ch);
} else {
var m__17407__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26477 = [];
var len__17809__auto___26480 = arguments.length;
var i__17810__auto___26481 = (0);
while(true){
if((i__17810__auto___26481 < len__17809__auto___26480)){
args26477.push((arguments[i__17810__auto___26481]));

var G__26482 = (i__17810__auto___26481 + (1));
i__17810__auto___26481 = G__26482;
continue;
} else {
}
break;
}

var G__26479 = args26477.length;
switch (G__26479) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26477.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17406__auto__ = (((p == null))?null:p);
var m__17407__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,p);
} else {
var m__17407__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,p);
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
var x__17406__auto__ = (((p == null))?null:p);
var m__17407__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,p,v);
} else {
var m__17407__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,p,v);
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
var args26485 = [];
var len__17809__auto___26610 = arguments.length;
var i__17810__auto___26611 = (0);
while(true){
if((i__17810__auto___26611 < len__17809__auto___26610)){
args26485.push((arguments[i__17810__auto___26611]));

var G__26612 = (i__17810__auto___26611 + (1));
i__17810__auto___26611 = G__26612;
continue;
} else {
}
break;
}

var G__26487 = args26485.length;
switch (G__26487) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26485.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16751__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16751__auto__,mults){
return (function (p1__26484_SHARP_){
if(cljs.core.truth_(p1__26484_SHARP_.call(null,topic))){
return p1__26484_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26484_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16751__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26488 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26488 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26489){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26489 = meta26489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26490,meta26489__$1){
var self__ = this;
var _26490__$1 = this;
return (new cljs.core.async.t_cljs$core$async26488(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26489__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26488.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26490){
var self__ = this;
var _26490__$1 = this;
return self__.meta26489;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26488.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26488.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26488.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26488.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26488.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26488.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26488.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26488.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26489","meta26489",-847964930,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26488.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26488";

cljs.core.async.t_cljs$core$async26488.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26488");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26488 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26488(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26489){
return (new cljs.core.async.t_cljs$core$async26488(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26489));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26488(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24715__auto___26614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto___26614,mults,ensure_mult,p){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto___26614,mults,ensure_mult,p){
return (function (state_26562){
var state_val_26563 = (state_26562[(1)]);
if((state_val_26563 === (7))){
var inst_26558 = (state_26562[(2)]);
var state_26562__$1 = state_26562;
var statearr_26564_26615 = state_26562__$1;
(statearr_26564_26615[(2)] = inst_26558);

(statearr_26564_26615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26563 === (20))){
var state_26562__$1 = state_26562;
var statearr_26565_26616 = state_26562__$1;
(statearr_26565_26616[(2)] = null);

(statearr_26565_26616[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26563 === (1))){
var state_26562__$1 = state_26562;
var statearr_26566_26617 = state_26562__$1;
(statearr_26566_26617[(2)] = null);

(statearr_26566_26617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26563 === (24))){
var inst_26541 = (state_26562[(7)]);
var inst_26550 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26541);
var state_26562__$1 = state_26562;
var statearr_26567_26618 = state_26562__$1;
(statearr_26567_26618[(2)] = inst_26550);

(statearr_26567_26618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26563 === (4))){
var inst_26493 = (state_26562[(8)]);
var inst_26493__$1 = (state_26562[(2)]);
var inst_26494 = (inst_26493__$1 == null);
var state_26562__$1 = (function (){var statearr_26568 = state_26562;
(statearr_26568[(8)] = inst_26493__$1);

return statearr_26568;
})();
if(cljs.core.truth_(inst_26494)){
var statearr_26569_26619 = state_26562__$1;
(statearr_26569_26619[(1)] = (5));

} else {
var statearr_26570_26620 = state_26562__$1;
(statearr_26570_26620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26563 === (15))){
var inst_26535 = (state_26562[(2)]);
var state_26562__$1 = state_26562;
var statearr_26571_26621 = state_26562__$1;
(statearr_26571_26621[(2)] = inst_26535);

(statearr_26571_26621[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26563 === (21))){
var inst_26555 = (state_26562[(2)]);
var state_26562__$1 = (function (){var statearr_26572 = state_26562;
(statearr_26572[(9)] = inst_26555);

return statearr_26572;
})();
var statearr_26573_26622 = state_26562__$1;
(statearr_26573_26622[(2)] = null);

(statearr_26573_26622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26563 === (13))){
var inst_26517 = (state_26562[(10)]);
var inst_26519 = cljs.core.chunked_seq_QMARK_.call(null,inst_26517);
var state_26562__$1 = state_26562;
if(inst_26519){
var statearr_26574_26623 = state_26562__$1;
(statearr_26574_26623[(1)] = (16));

} else {
var statearr_26575_26624 = state_26562__$1;
(statearr_26575_26624[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26563 === (22))){
var inst_26547 = (state_26562[(2)]);
var state_26562__$1 = state_26562;
if(cljs.core.truth_(inst_26547)){
var statearr_26576_26625 = state_26562__$1;
(statearr_26576_26625[(1)] = (23));

} else {
var statearr_26577_26626 = state_26562__$1;
(statearr_26577_26626[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26563 === (6))){
var inst_26493 = (state_26562[(8)]);
var inst_26543 = (state_26562[(11)]);
var inst_26541 = (state_26562[(7)]);
var inst_26541__$1 = topic_fn.call(null,inst_26493);
var inst_26542 = cljs.core.deref.call(null,mults);
var inst_26543__$1 = cljs.core.get.call(null,inst_26542,inst_26541__$1);
var state_26562__$1 = (function (){var statearr_26578 = state_26562;
(statearr_26578[(11)] = inst_26543__$1);

(statearr_26578[(7)] = inst_26541__$1);

return statearr_26578;
})();
if(cljs.core.truth_(inst_26543__$1)){
var statearr_26579_26627 = state_26562__$1;
(statearr_26579_26627[(1)] = (19));

} else {
var statearr_26580_26628 = state_26562__$1;
(statearr_26580_26628[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26563 === (25))){
var inst_26552 = (state_26562[(2)]);
var state_26562__$1 = state_26562;
var statearr_26581_26629 = state_26562__$1;
(statearr_26581_26629[(2)] = inst_26552);

(statearr_26581_26629[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26563 === (17))){
var inst_26517 = (state_26562[(10)]);
var inst_26526 = cljs.core.first.call(null,inst_26517);
var inst_26527 = cljs.core.async.muxch_STAR_.call(null,inst_26526);
var inst_26528 = cljs.core.async.close_BANG_.call(null,inst_26527);
var inst_26529 = cljs.core.next.call(null,inst_26517);
var inst_26503 = inst_26529;
var inst_26504 = null;
var inst_26505 = (0);
var inst_26506 = (0);
var state_26562__$1 = (function (){var statearr_26582 = state_26562;
(statearr_26582[(12)] = inst_26503);

(statearr_26582[(13)] = inst_26504);

(statearr_26582[(14)] = inst_26506);

(statearr_26582[(15)] = inst_26505);

(statearr_26582[(16)] = inst_26528);

return statearr_26582;
})();
var statearr_26583_26630 = state_26562__$1;
(statearr_26583_26630[(2)] = null);

(statearr_26583_26630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26563 === (3))){
var inst_26560 = (state_26562[(2)]);
var state_26562__$1 = state_26562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26562__$1,inst_26560);
} else {
if((state_val_26563 === (12))){
var inst_26537 = (state_26562[(2)]);
var state_26562__$1 = state_26562;
var statearr_26584_26631 = state_26562__$1;
(statearr_26584_26631[(2)] = inst_26537);

(statearr_26584_26631[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26563 === (2))){
var state_26562__$1 = state_26562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26562__$1,(4),ch);
} else {
if((state_val_26563 === (23))){
var state_26562__$1 = state_26562;
var statearr_26585_26632 = state_26562__$1;
(statearr_26585_26632[(2)] = null);

(statearr_26585_26632[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26563 === (19))){
var inst_26493 = (state_26562[(8)]);
var inst_26543 = (state_26562[(11)]);
var inst_26545 = cljs.core.async.muxch_STAR_.call(null,inst_26543);
var state_26562__$1 = state_26562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26562__$1,(22),inst_26545,inst_26493);
} else {
if((state_val_26563 === (11))){
var inst_26503 = (state_26562[(12)]);
var inst_26517 = (state_26562[(10)]);
var inst_26517__$1 = cljs.core.seq.call(null,inst_26503);
var state_26562__$1 = (function (){var statearr_26586 = state_26562;
(statearr_26586[(10)] = inst_26517__$1);

return statearr_26586;
})();
if(inst_26517__$1){
var statearr_26587_26633 = state_26562__$1;
(statearr_26587_26633[(1)] = (13));

} else {
var statearr_26588_26634 = state_26562__$1;
(statearr_26588_26634[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26563 === (9))){
var inst_26539 = (state_26562[(2)]);
var state_26562__$1 = state_26562;
var statearr_26589_26635 = state_26562__$1;
(statearr_26589_26635[(2)] = inst_26539);

(statearr_26589_26635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26563 === (5))){
var inst_26500 = cljs.core.deref.call(null,mults);
var inst_26501 = cljs.core.vals.call(null,inst_26500);
var inst_26502 = cljs.core.seq.call(null,inst_26501);
var inst_26503 = inst_26502;
var inst_26504 = null;
var inst_26505 = (0);
var inst_26506 = (0);
var state_26562__$1 = (function (){var statearr_26590 = state_26562;
(statearr_26590[(12)] = inst_26503);

(statearr_26590[(13)] = inst_26504);

(statearr_26590[(14)] = inst_26506);

(statearr_26590[(15)] = inst_26505);

return statearr_26590;
})();
var statearr_26591_26636 = state_26562__$1;
(statearr_26591_26636[(2)] = null);

(statearr_26591_26636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26563 === (14))){
var state_26562__$1 = state_26562;
var statearr_26595_26637 = state_26562__$1;
(statearr_26595_26637[(2)] = null);

(statearr_26595_26637[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26563 === (16))){
var inst_26517 = (state_26562[(10)]);
var inst_26521 = cljs.core.chunk_first.call(null,inst_26517);
var inst_26522 = cljs.core.chunk_rest.call(null,inst_26517);
var inst_26523 = cljs.core.count.call(null,inst_26521);
var inst_26503 = inst_26522;
var inst_26504 = inst_26521;
var inst_26505 = inst_26523;
var inst_26506 = (0);
var state_26562__$1 = (function (){var statearr_26596 = state_26562;
(statearr_26596[(12)] = inst_26503);

(statearr_26596[(13)] = inst_26504);

(statearr_26596[(14)] = inst_26506);

(statearr_26596[(15)] = inst_26505);

return statearr_26596;
})();
var statearr_26597_26638 = state_26562__$1;
(statearr_26597_26638[(2)] = null);

(statearr_26597_26638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26563 === (10))){
var inst_26503 = (state_26562[(12)]);
var inst_26504 = (state_26562[(13)]);
var inst_26506 = (state_26562[(14)]);
var inst_26505 = (state_26562[(15)]);
var inst_26511 = cljs.core._nth.call(null,inst_26504,inst_26506);
var inst_26512 = cljs.core.async.muxch_STAR_.call(null,inst_26511);
var inst_26513 = cljs.core.async.close_BANG_.call(null,inst_26512);
var inst_26514 = (inst_26506 + (1));
var tmp26592 = inst_26503;
var tmp26593 = inst_26504;
var tmp26594 = inst_26505;
var inst_26503__$1 = tmp26592;
var inst_26504__$1 = tmp26593;
var inst_26505__$1 = tmp26594;
var inst_26506__$1 = inst_26514;
var state_26562__$1 = (function (){var statearr_26598 = state_26562;
(statearr_26598[(12)] = inst_26503__$1);

(statearr_26598[(13)] = inst_26504__$1);

(statearr_26598[(14)] = inst_26506__$1);

(statearr_26598[(15)] = inst_26505__$1);

(statearr_26598[(17)] = inst_26513);

return statearr_26598;
})();
var statearr_26599_26639 = state_26562__$1;
(statearr_26599_26639[(2)] = null);

(statearr_26599_26639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26563 === (18))){
var inst_26532 = (state_26562[(2)]);
var state_26562__$1 = state_26562;
var statearr_26600_26640 = state_26562__$1;
(statearr_26600_26640[(2)] = inst_26532);

(statearr_26600_26640[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26563 === (8))){
var inst_26506 = (state_26562[(14)]);
var inst_26505 = (state_26562[(15)]);
var inst_26508 = (inst_26506 < inst_26505);
var inst_26509 = inst_26508;
var state_26562__$1 = state_26562;
if(cljs.core.truth_(inst_26509)){
var statearr_26601_26641 = state_26562__$1;
(statearr_26601_26641[(1)] = (10));

} else {
var statearr_26602_26642 = state_26562__$1;
(statearr_26602_26642[(1)] = (11));

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
});})(c__24715__auto___26614,mults,ensure_mult,p))
;
return ((function (switch__24603__auto__,c__24715__auto___26614,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24604__auto__ = null;
var cljs$core$async$state_machine__24604__auto____0 = (function (){
var statearr_26606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26606[(0)] = cljs$core$async$state_machine__24604__auto__);

(statearr_26606[(1)] = (1));

return statearr_26606;
});
var cljs$core$async$state_machine__24604__auto____1 = (function (state_26562){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_26562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e26607){if((e26607 instanceof Object)){
var ex__24607__auto__ = e26607;
var statearr_26608_26643 = state_26562;
(statearr_26608_26643[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26644 = state_26562;
state_26562 = G__26644;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
cljs$core$async$state_machine__24604__auto__ = function(state_26562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24604__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24604__auto____1.call(this,state_26562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24604__auto____0;
cljs$core$async$state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24604__auto____1;
return cljs$core$async$state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto___26614,mults,ensure_mult,p))
})();
var state__24717__auto__ = (function (){var statearr_26609 = f__24716__auto__.call(null);
(statearr_26609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto___26614);

return statearr_26609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto___26614,mults,ensure_mult,p))
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
var args26645 = [];
var len__17809__auto___26648 = arguments.length;
var i__17810__auto___26649 = (0);
while(true){
if((i__17810__auto___26649 < len__17809__auto___26648)){
args26645.push((arguments[i__17810__auto___26649]));

var G__26650 = (i__17810__auto___26649 + (1));
i__17810__auto___26649 = G__26650;
continue;
} else {
}
break;
}

var G__26647 = args26645.length;
switch (G__26647) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26645.length)].join('')));

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
var args26652 = [];
var len__17809__auto___26655 = arguments.length;
var i__17810__auto___26656 = (0);
while(true){
if((i__17810__auto___26656 < len__17809__auto___26655)){
args26652.push((arguments[i__17810__auto___26656]));

var G__26657 = (i__17810__auto___26656 + (1));
i__17810__auto___26656 = G__26657;
continue;
} else {
}
break;
}

var G__26654 = args26652.length;
switch (G__26654) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26652.length)].join('')));

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
var args26659 = [];
var len__17809__auto___26730 = arguments.length;
var i__17810__auto___26731 = (0);
while(true){
if((i__17810__auto___26731 < len__17809__auto___26730)){
args26659.push((arguments[i__17810__auto___26731]));

var G__26732 = (i__17810__auto___26731 + (1));
i__17810__auto___26731 = G__26732;
continue;
} else {
}
break;
}

var G__26661 = args26659.length;
switch (G__26661) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26659.length)].join('')));

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
var c__24715__auto___26734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto___26734,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto___26734,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26700){
var state_val_26701 = (state_26700[(1)]);
if((state_val_26701 === (7))){
var state_26700__$1 = state_26700;
var statearr_26702_26735 = state_26700__$1;
(statearr_26702_26735[(2)] = null);

(statearr_26702_26735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (1))){
var state_26700__$1 = state_26700;
var statearr_26703_26736 = state_26700__$1;
(statearr_26703_26736[(2)] = null);

(statearr_26703_26736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (4))){
var inst_26664 = (state_26700[(7)]);
var inst_26666 = (inst_26664 < cnt);
var state_26700__$1 = state_26700;
if(cljs.core.truth_(inst_26666)){
var statearr_26704_26737 = state_26700__$1;
(statearr_26704_26737[(1)] = (6));

} else {
var statearr_26705_26738 = state_26700__$1;
(statearr_26705_26738[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (15))){
var inst_26696 = (state_26700[(2)]);
var state_26700__$1 = state_26700;
var statearr_26706_26739 = state_26700__$1;
(statearr_26706_26739[(2)] = inst_26696);

(statearr_26706_26739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (13))){
var inst_26689 = cljs.core.async.close_BANG_.call(null,out);
var state_26700__$1 = state_26700;
var statearr_26707_26740 = state_26700__$1;
(statearr_26707_26740[(2)] = inst_26689);

(statearr_26707_26740[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (6))){
var state_26700__$1 = state_26700;
var statearr_26708_26741 = state_26700__$1;
(statearr_26708_26741[(2)] = null);

(statearr_26708_26741[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (3))){
var inst_26698 = (state_26700[(2)]);
var state_26700__$1 = state_26700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26700__$1,inst_26698);
} else {
if((state_val_26701 === (12))){
var inst_26686 = (state_26700[(8)]);
var inst_26686__$1 = (state_26700[(2)]);
var inst_26687 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26686__$1);
var state_26700__$1 = (function (){var statearr_26709 = state_26700;
(statearr_26709[(8)] = inst_26686__$1);

return statearr_26709;
})();
if(cljs.core.truth_(inst_26687)){
var statearr_26710_26742 = state_26700__$1;
(statearr_26710_26742[(1)] = (13));

} else {
var statearr_26711_26743 = state_26700__$1;
(statearr_26711_26743[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (2))){
var inst_26663 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26664 = (0);
var state_26700__$1 = (function (){var statearr_26712 = state_26700;
(statearr_26712[(7)] = inst_26664);

(statearr_26712[(9)] = inst_26663);

return statearr_26712;
})();
var statearr_26713_26744 = state_26700__$1;
(statearr_26713_26744[(2)] = null);

(statearr_26713_26744[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (11))){
var inst_26664 = (state_26700[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26700,(10),Object,null,(9));
var inst_26673 = chs__$1.call(null,inst_26664);
var inst_26674 = done.call(null,inst_26664);
var inst_26675 = cljs.core.async.take_BANG_.call(null,inst_26673,inst_26674);
var state_26700__$1 = state_26700;
var statearr_26714_26745 = state_26700__$1;
(statearr_26714_26745[(2)] = inst_26675);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26700__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (9))){
var inst_26664 = (state_26700[(7)]);
var inst_26677 = (state_26700[(2)]);
var inst_26678 = (inst_26664 + (1));
var inst_26664__$1 = inst_26678;
var state_26700__$1 = (function (){var statearr_26715 = state_26700;
(statearr_26715[(7)] = inst_26664__$1);

(statearr_26715[(10)] = inst_26677);

return statearr_26715;
})();
var statearr_26716_26746 = state_26700__$1;
(statearr_26716_26746[(2)] = null);

(statearr_26716_26746[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (5))){
var inst_26684 = (state_26700[(2)]);
var state_26700__$1 = (function (){var statearr_26717 = state_26700;
(statearr_26717[(11)] = inst_26684);

return statearr_26717;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26700__$1,(12),dchan);
} else {
if((state_val_26701 === (14))){
var inst_26686 = (state_26700[(8)]);
var inst_26691 = cljs.core.apply.call(null,f,inst_26686);
var state_26700__$1 = state_26700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26700__$1,(16),out,inst_26691);
} else {
if((state_val_26701 === (16))){
var inst_26693 = (state_26700[(2)]);
var state_26700__$1 = (function (){var statearr_26718 = state_26700;
(statearr_26718[(12)] = inst_26693);

return statearr_26718;
})();
var statearr_26719_26747 = state_26700__$1;
(statearr_26719_26747[(2)] = null);

(statearr_26719_26747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (10))){
var inst_26668 = (state_26700[(2)]);
var inst_26669 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26700__$1 = (function (){var statearr_26720 = state_26700;
(statearr_26720[(13)] = inst_26668);

return statearr_26720;
})();
var statearr_26721_26748 = state_26700__$1;
(statearr_26721_26748[(2)] = inst_26669);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26700__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26701 === (8))){
var inst_26682 = (state_26700[(2)]);
var state_26700__$1 = state_26700;
var statearr_26722_26749 = state_26700__$1;
(statearr_26722_26749[(2)] = inst_26682);

(statearr_26722_26749[(1)] = (5));


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
});})(c__24715__auto___26734,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24603__auto__,c__24715__auto___26734,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24604__auto__ = null;
var cljs$core$async$state_machine__24604__auto____0 = (function (){
var statearr_26726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26726[(0)] = cljs$core$async$state_machine__24604__auto__);

(statearr_26726[(1)] = (1));

return statearr_26726;
});
var cljs$core$async$state_machine__24604__auto____1 = (function (state_26700){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_26700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e26727){if((e26727 instanceof Object)){
var ex__24607__auto__ = e26727;
var statearr_26728_26750 = state_26700;
(statearr_26728_26750[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26751 = state_26700;
state_26700 = G__26751;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
cljs$core$async$state_machine__24604__auto__ = function(state_26700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24604__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24604__auto____1.call(this,state_26700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24604__auto____0;
cljs$core$async$state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24604__auto____1;
return cljs$core$async$state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto___26734,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24717__auto__ = (function (){var statearr_26729 = f__24716__auto__.call(null);
(statearr_26729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto___26734);

return statearr_26729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto___26734,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26753 = [];
var len__17809__auto___26809 = arguments.length;
var i__17810__auto___26810 = (0);
while(true){
if((i__17810__auto___26810 < len__17809__auto___26809)){
args26753.push((arguments[i__17810__auto___26810]));

var G__26811 = (i__17810__auto___26810 + (1));
i__17810__auto___26810 = G__26811;
continue;
} else {
}
break;
}

var G__26755 = args26753.length;
switch (G__26755) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26753.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24715__auto___26813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto___26813,out){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto___26813,out){
return (function (state_26785){
var state_val_26786 = (state_26785[(1)]);
if((state_val_26786 === (7))){
var inst_26764 = (state_26785[(7)]);
var inst_26765 = (state_26785[(8)]);
var inst_26764__$1 = (state_26785[(2)]);
var inst_26765__$1 = cljs.core.nth.call(null,inst_26764__$1,(0),null);
var inst_26766 = cljs.core.nth.call(null,inst_26764__$1,(1),null);
var inst_26767 = (inst_26765__$1 == null);
var state_26785__$1 = (function (){var statearr_26787 = state_26785;
(statearr_26787[(9)] = inst_26766);

(statearr_26787[(7)] = inst_26764__$1);

(statearr_26787[(8)] = inst_26765__$1);

return statearr_26787;
})();
if(cljs.core.truth_(inst_26767)){
var statearr_26788_26814 = state_26785__$1;
(statearr_26788_26814[(1)] = (8));

} else {
var statearr_26789_26815 = state_26785__$1;
(statearr_26789_26815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26786 === (1))){
var inst_26756 = cljs.core.vec.call(null,chs);
var inst_26757 = inst_26756;
var state_26785__$1 = (function (){var statearr_26790 = state_26785;
(statearr_26790[(10)] = inst_26757);

return statearr_26790;
})();
var statearr_26791_26816 = state_26785__$1;
(statearr_26791_26816[(2)] = null);

(statearr_26791_26816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26786 === (4))){
var inst_26757 = (state_26785[(10)]);
var state_26785__$1 = state_26785;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26785__$1,(7),inst_26757);
} else {
if((state_val_26786 === (6))){
var inst_26781 = (state_26785[(2)]);
var state_26785__$1 = state_26785;
var statearr_26792_26817 = state_26785__$1;
(statearr_26792_26817[(2)] = inst_26781);

(statearr_26792_26817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26786 === (3))){
var inst_26783 = (state_26785[(2)]);
var state_26785__$1 = state_26785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26785__$1,inst_26783);
} else {
if((state_val_26786 === (2))){
var inst_26757 = (state_26785[(10)]);
var inst_26759 = cljs.core.count.call(null,inst_26757);
var inst_26760 = (inst_26759 > (0));
var state_26785__$1 = state_26785;
if(cljs.core.truth_(inst_26760)){
var statearr_26794_26818 = state_26785__$1;
(statearr_26794_26818[(1)] = (4));

} else {
var statearr_26795_26819 = state_26785__$1;
(statearr_26795_26819[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26786 === (11))){
var inst_26757 = (state_26785[(10)]);
var inst_26774 = (state_26785[(2)]);
var tmp26793 = inst_26757;
var inst_26757__$1 = tmp26793;
var state_26785__$1 = (function (){var statearr_26796 = state_26785;
(statearr_26796[(11)] = inst_26774);

(statearr_26796[(10)] = inst_26757__$1);

return statearr_26796;
})();
var statearr_26797_26820 = state_26785__$1;
(statearr_26797_26820[(2)] = null);

(statearr_26797_26820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26786 === (9))){
var inst_26765 = (state_26785[(8)]);
var state_26785__$1 = state_26785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26785__$1,(11),out,inst_26765);
} else {
if((state_val_26786 === (5))){
var inst_26779 = cljs.core.async.close_BANG_.call(null,out);
var state_26785__$1 = state_26785;
var statearr_26798_26821 = state_26785__$1;
(statearr_26798_26821[(2)] = inst_26779);

(statearr_26798_26821[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26786 === (10))){
var inst_26777 = (state_26785[(2)]);
var state_26785__$1 = state_26785;
var statearr_26799_26822 = state_26785__$1;
(statearr_26799_26822[(2)] = inst_26777);

(statearr_26799_26822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26786 === (8))){
var inst_26766 = (state_26785[(9)]);
var inst_26764 = (state_26785[(7)]);
var inst_26757 = (state_26785[(10)]);
var inst_26765 = (state_26785[(8)]);
var inst_26769 = (function (){var cs = inst_26757;
var vec__26762 = inst_26764;
var v = inst_26765;
var c = inst_26766;
return ((function (cs,vec__26762,v,c,inst_26766,inst_26764,inst_26757,inst_26765,state_val_26786,c__24715__auto___26813,out){
return (function (p1__26752_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26752_SHARP_);
});
;})(cs,vec__26762,v,c,inst_26766,inst_26764,inst_26757,inst_26765,state_val_26786,c__24715__auto___26813,out))
})();
var inst_26770 = cljs.core.filterv.call(null,inst_26769,inst_26757);
var inst_26757__$1 = inst_26770;
var state_26785__$1 = (function (){var statearr_26800 = state_26785;
(statearr_26800[(10)] = inst_26757__$1);

return statearr_26800;
})();
var statearr_26801_26823 = state_26785__$1;
(statearr_26801_26823[(2)] = null);

(statearr_26801_26823[(1)] = (2));


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
});})(c__24715__auto___26813,out))
;
return ((function (switch__24603__auto__,c__24715__auto___26813,out){
return (function() {
var cljs$core$async$state_machine__24604__auto__ = null;
var cljs$core$async$state_machine__24604__auto____0 = (function (){
var statearr_26805 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26805[(0)] = cljs$core$async$state_machine__24604__auto__);

(statearr_26805[(1)] = (1));

return statearr_26805;
});
var cljs$core$async$state_machine__24604__auto____1 = (function (state_26785){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_26785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e26806){if((e26806 instanceof Object)){
var ex__24607__auto__ = e26806;
var statearr_26807_26824 = state_26785;
(statearr_26807_26824[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26825 = state_26785;
state_26785 = G__26825;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
cljs$core$async$state_machine__24604__auto__ = function(state_26785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24604__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24604__auto____1.call(this,state_26785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24604__auto____0;
cljs$core$async$state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24604__auto____1;
return cljs$core$async$state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto___26813,out))
})();
var state__24717__auto__ = (function (){var statearr_26808 = f__24716__auto__.call(null);
(statearr_26808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto___26813);

return statearr_26808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto___26813,out))
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
var args26826 = [];
var len__17809__auto___26875 = arguments.length;
var i__17810__auto___26876 = (0);
while(true){
if((i__17810__auto___26876 < len__17809__auto___26875)){
args26826.push((arguments[i__17810__auto___26876]));

var G__26877 = (i__17810__auto___26876 + (1));
i__17810__auto___26876 = G__26877;
continue;
} else {
}
break;
}

var G__26828 = args26826.length;
switch (G__26828) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26826.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24715__auto___26879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto___26879,out){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto___26879,out){
return (function (state_26852){
var state_val_26853 = (state_26852[(1)]);
if((state_val_26853 === (7))){
var inst_26834 = (state_26852[(7)]);
var inst_26834__$1 = (state_26852[(2)]);
var inst_26835 = (inst_26834__$1 == null);
var inst_26836 = cljs.core.not.call(null,inst_26835);
var state_26852__$1 = (function (){var statearr_26854 = state_26852;
(statearr_26854[(7)] = inst_26834__$1);

return statearr_26854;
})();
if(inst_26836){
var statearr_26855_26880 = state_26852__$1;
(statearr_26855_26880[(1)] = (8));

} else {
var statearr_26856_26881 = state_26852__$1;
(statearr_26856_26881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (1))){
var inst_26829 = (0);
var state_26852__$1 = (function (){var statearr_26857 = state_26852;
(statearr_26857[(8)] = inst_26829);

return statearr_26857;
})();
var statearr_26858_26882 = state_26852__$1;
(statearr_26858_26882[(2)] = null);

(statearr_26858_26882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (4))){
var state_26852__$1 = state_26852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26852__$1,(7),ch);
} else {
if((state_val_26853 === (6))){
var inst_26847 = (state_26852[(2)]);
var state_26852__$1 = state_26852;
var statearr_26859_26883 = state_26852__$1;
(statearr_26859_26883[(2)] = inst_26847);

(statearr_26859_26883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (3))){
var inst_26849 = (state_26852[(2)]);
var inst_26850 = cljs.core.async.close_BANG_.call(null,out);
var state_26852__$1 = (function (){var statearr_26860 = state_26852;
(statearr_26860[(9)] = inst_26849);

return statearr_26860;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26852__$1,inst_26850);
} else {
if((state_val_26853 === (2))){
var inst_26829 = (state_26852[(8)]);
var inst_26831 = (inst_26829 < n);
var state_26852__$1 = state_26852;
if(cljs.core.truth_(inst_26831)){
var statearr_26861_26884 = state_26852__$1;
(statearr_26861_26884[(1)] = (4));

} else {
var statearr_26862_26885 = state_26852__$1;
(statearr_26862_26885[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (11))){
var inst_26829 = (state_26852[(8)]);
var inst_26839 = (state_26852[(2)]);
var inst_26840 = (inst_26829 + (1));
var inst_26829__$1 = inst_26840;
var state_26852__$1 = (function (){var statearr_26863 = state_26852;
(statearr_26863[(8)] = inst_26829__$1);

(statearr_26863[(10)] = inst_26839);

return statearr_26863;
})();
var statearr_26864_26886 = state_26852__$1;
(statearr_26864_26886[(2)] = null);

(statearr_26864_26886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (9))){
var state_26852__$1 = state_26852;
var statearr_26865_26887 = state_26852__$1;
(statearr_26865_26887[(2)] = null);

(statearr_26865_26887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (5))){
var state_26852__$1 = state_26852;
var statearr_26866_26888 = state_26852__$1;
(statearr_26866_26888[(2)] = null);

(statearr_26866_26888[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (10))){
var inst_26844 = (state_26852[(2)]);
var state_26852__$1 = state_26852;
var statearr_26867_26889 = state_26852__$1;
(statearr_26867_26889[(2)] = inst_26844);

(statearr_26867_26889[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (8))){
var inst_26834 = (state_26852[(7)]);
var state_26852__$1 = state_26852;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26852__$1,(11),out,inst_26834);
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
});})(c__24715__auto___26879,out))
;
return ((function (switch__24603__auto__,c__24715__auto___26879,out){
return (function() {
var cljs$core$async$state_machine__24604__auto__ = null;
var cljs$core$async$state_machine__24604__auto____0 = (function (){
var statearr_26871 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26871[(0)] = cljs$core$async$state_machine__24604__auto__);

(statearr_26871[(1)] = (1));

return statearr_26871;
});
var cljs$core$async$state_machine__24604__auto____1 = (function (state_26852){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_26852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e26872){if((e26872 instanceof Object)){
var ex__24607__auto__ = e26872;
var statearr_26873_26890 = state_26852;
(statearr_26873_26890[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26891 = state_26852;
state_26852 = G__26891;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
cljs$core$async$state_machine__24604__auto__ = function(state_26852){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24604__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24604__auto____1.call(this,state_26852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24604__auto____0;
cljs$core$async$state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24604__auto____1;
return cljs$core$async$state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto___26879,out))
})();
var state__24717__auto__ = (function (){var statearr_26874 = f__24716__auto__.call(null);
(statearr_26874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto___26879);

return statearr_26874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto___26879,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26899 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26899 = (function (map_LT_,f,ch,meta26900){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26900 = meta26900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26901,meta26900__$1){
var self__ = this;
var _26901__$1 = this;
return (new cljs.core.async.t_cljs$core$async26899(self__.map_LT_,self__.f,self__.ch,meta26900__$1));
});

cljs.core.async.t_cljs$core$async26899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26901){
var self__ = this;
var _26901__$1 = this;
return self__.meta26900;
});

cljs.core.async.t_cljs$core$async26899.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26899.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26899.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26899.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26899.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26902 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26902 = (function (map_LT_,f,ch,meta26900,_,fn1,meta26903){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26900 = meta26900;
this._ = _;
this.fn1 = fn1;
this.meta26903 = meta26903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26904,meta26903__$1){
var self__ = this;
var _26904__$1 = this;
return (new cljs.core.async.t_cljs$core$async26902(self__.map_LT_,self__.f,self__.ch,self__.meta26900,self__._,self__.fn1,meta26903__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26902.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26904){
var self__ = this;
var _26904__$1 = this;
return self__.meta26903;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26902.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26902.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26902.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26902.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26892_SHARP_){
return f1.call(null,(((p1__26892_SHARP_ == null))?null:self__.f.call(null,p1__26892_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26902.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26900","meta26900",-1823896953,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26899","cljs.core.async/t_cljs$core$async26899",593753113,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26903","meta26903",443951481,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26902.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26902.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26902";

cljs.core.async.t_cljs$core$async26902.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26902");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26902 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26902(map_LT___$1,f__$1,ch__$1,meta26900__$1,___$2,fn1__$1,meta26903){
return (new cljs.core.async.t_cljs$core$async26902(map_LT___$1,f__$1,ch__$1,meta26900__$1,___$2,fn1__$1,meta26903));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26902(self__.map_LT_,self__.f,self__.ch,self__.meta26900,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16739__auto__ = ret;
if(cljs.core.truth_(and__16739__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16739__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26899.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26899.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26900","meta26900",-1823896953,null)], null);
});

cljs.core.async.t_cljs$core$async26899.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26899";

cljs.core.async.t_cljs$core$async26899.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26899");
});

cljs.core.async.__GT_t_cljs$core$async26899 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26899(map_LT___$1,f__$1,ch__$1,meta26900){
return (new cljs.core.async.t_cljs$core$async26899(map_LT___$1,f__$1,ch__$1,meta26900));
});

}

return (new cljs.core.async.t_cljs$core$async26899(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26908 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26908 = (function (map_GT_,f,ch,meta26909){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26909 = meta26909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26910,meta26909__$1){
var self__ = this;
var _26910__$1 = this;
return (new cljs.core.async.t_cljs$core$async26908(self__.map_GT_,self__.f,self__.ch,meta26909__$1));
});

cljs.core.async.t_cljs$core$async26908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26910){
var self__ = this;
var _26910__$1 = this;
return self__.meta26909;
});

cljs.core.async.t_cljs$core$async26908.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26908.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26908.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26908.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26908.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26908.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26908.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26909","meta26909",1563610895,null)], null);
});

cljs.core.async.t_cljs$core$async26908.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26908.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26908";

cljs.core.async.t_cljs$core$async26908.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26908");
});

cljs.core.async.__GT_t_cljs$core$async26908 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26908(map_GT___$1,f__$1,ch__$1,meta26909){
return (new cljs.core.async.t_cljs$core$async26908(map_GT___$1,f__$1,ch__$1,meta26909));
});

}

return (new cljs.core.async.t_cljs$core$async26908(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26914 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26914 = (function (filter_GT_,p,ch,meta26915){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26915 = meta26915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26916,meta26915__$1){
var self__ = this;
var _26916__$1 = this;
return (new cljs.core.async.t_cljs$core$async26914(self__.filter_GT_,self__.p,self__.ch,meta26915__$1));
});

cljs.core.async.t_cljs$core$async26914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26916){
var self__ = this;
var _26916__$1 = this;
return self__.meta26915;
});

cljs.core.async.t_cljs$core$async26914.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26914.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26914.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26914.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26914.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26914.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26914.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26914.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26915","meta26915",1217540167,null)], null);
});

cljs.core.async.t_cljs$core$async26914.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26914";

cljs.core.async.t_cljs$core$async26914.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"cljs.core.async/t_cljs$core$async26914");
});

cljs.core.async.__GT_t_cljs$core$async26914 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26914(filter_GT___$1,p__$1,ch__$1,meta26915){
return (new cljs.core.async.t_cljs$core$async26914(filter_GT___$1,p__$1,ch__$1,meta26915));
});

}

return (new cljs.core.async.t_cljs$core$async26914(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26917 = [];
var len__17809__auto___26961 = arguments.length;
var i__17810__auto___26962 = (0);
while(true){
if((i__17810__auto___26962 < len__17809__auto___26961)){
args26917.push((arguments[i__17810__auto___26962]));

var G__26963 = (i__17810__auto___26962 + (1));
i__17810__auto___26962 = G__26963;
continue;
} else {
}
break;
}

var G__26919 = args26917.length;
switch (G__26919) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26917.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24715__auto___26965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto___26965,out){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto___26965,out){
return (function (state_26940){
var state_val_26941 = (state_26940[(1)]);
if((state_val_26941 === (7))){
var inst_26936 = (state_26940[(2)]);
var state_26940__$1 = state_26940;
var statearr_26942_26966 = state_26940__$1;
(statearr_26942_26966[(2)] = inst_26936);

(statearr_26942_26966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (1))){
var state_26940__$1 = state_26940;
var statearr_26943_26967 = state_26940__$1;
(statearr_26943_26967[(2)] = null);

(statearr_26943_26967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (4))){
var inst_26922 = (state_26940[(7)]);
var inst_26922__$1 = (state_26940[(2)]);
var inst_26923 = (inst_26922__$1 == null);
var state_26940__$1 = (function (){var statearr_26944 = state_26940;
(statearr_26944[(7)] = inst_26922__$1);

return statearr_26944;
})();
if(cljs.core.truth_(inst_26923)){
var statearr_26945_26968 = state_26940__$1;
(statearr_26945_26968[(1)] = (5));

} else {
var statearr_26946_26969 = state_26940__$1;
(statearr_26946_26969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (6))){
var inst_26922 = (state_26940[(7)]);
var inst_26927 = p.call(null,inst_26922);
var state_26940__$1 = state_26940;
if(cljs.core.truth_(inst_26927)){
var statearr_26947_26970 = state_26940__$1;
(statearr_26947_26970[(1)] = (8));

} else {
var statearr_26948_26971 = state_26940__$1;
(statearr_26948_26971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (3))){
var inst_26938 = (state_26940[(2)]);
var state_26940__$1 = state_26940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26940__$1,inst_26938);
} else {
if((state_val_26941 === (2))){
var state_26940__$1 = state_26940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26940__$1,(4),ch);
} else {
if((state_val_26941 === (11))){
var inst_26930 = (state_26940[(2)]);
var state_26940__$1 = state_26940;
var statearr_26949_26972 = state_26940__$1;
(statearr_26949_26972[(2)] = inst_26930);

(statearr_26949_26972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (9))){
var state_26940__$1 = state_26940;
var statearr_26950_26973 = state_26940__$1;
(statearr_26950_26973[(2)] = null);

(statearr_26950_26973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (5))){
var inst_26925 = cljs.core.async.close_BANG_.call(null,out);
var state_26940__$1 = state_26940;
var statearr_26951_26974 = state_26940__$1;
(statearr_26951_26974[(2)] = inst_26925);

(statearr_26951_26974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (10))){
var inst_26933 = (state_26940[(2)]);
var state_26940__$1 = (function (){var statearr_26952 = state_26940;
(statearr_26952[(8)] = inst_26933);

return statearr_26952;
})();
var statearr_26953_26975 = state_26940__$1;
(statearr_26953_26975[(2)] = null);

(statearr_26953_26975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (8))){
var inst_26922 = (state_26940[(7)]);
var state_26940__$1 = state_26940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26940__$1,(11),out,inst_26922);
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
});})(c__24715__auto___26965,out))
;
return ((function (switch__24603__auto__,c__24715__auto___26965,out){
return (function() {
var cljs$core$async$state_machine__24604__auto__ = null;
var cljs$core$async$state_machine__24604__auto____0 = (function (){
var statearr_26957 = [null,null,null,null,null,null,null,null,null];
(statearr_26957[(0)] = cljs$core$async$state_machine__24604__auto__);

(statearr_26957[(1)] = (1));

return statearr_26957;
});
var cljs$core$async$state_machine__24604__auto____1 = (function (state_26940){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_26940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e26958){if((e26958 instanceof Object)){
var ex__24607__auto__ = e26958;
var statearr_26959_26976 = state_26940;
(statearr_26959_26976[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26977 = state_26940;
state_26940 = G__26977;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
cljs$core$async$state_machine__24604__auto__ = function(state_26940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24604__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24604__auto____1.call(this,state_26940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24604__auto____0;
cljs$core$async$state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24604__auto____1;
return cljs$core$async$state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto___26965,out))
})();
var state__24717__auto__ = (function (){var statearr_26960 = f__24716__auto__.call(null);
(statearr_26960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto___26965);

return statearr_26960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto___26965,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26978 = [];
var len__17809__auto___26981 = arguments.length;
var i__17810__auto___26982 = (0);
while(true){
if((i__17810__auto___26982 < len__17809__auto___26981)){
args26978.push((arguments[i__17810__auto___26982]));

var G__26983 = (i__17810__auto___26982 + (1));
i__17810__auto___26982 = G__26983;
continue;
} else {
}
break;
}

var G__26980 = args26978.length;
switch (G__26980) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26978.length)].join('')));

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
var c__24715__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto__){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto__){
return (function (state_27150){
var state_val_27151 = (state_27150[(1)]);
if((state_val_27151 === (7))){
var inst_27146 = (state_27150[(2)]);
var state_27150__$1 = state_27150;
var statearr_27152_27193 = state_27150__$1;
(statearr_27152_27193[(2)] = inst_27146);

(statearr_27152_27193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27151 === (20))){
var inst_27116 = (state_27150[(7)]);
var inst_27127 = (state_27150[(2)]);
var inst_27128 = cljs.core.next.call(null,inst_27116);
var inst_27102 = inst_27128;
var inst_27103 = null;
var inst_27104 = (0);
var inst_27105 = (0);
var state_27150__$1 = (function (){var statearr_27153 = state_27150;
(statearr_27153[(8)] = inst_27105);

(statearr_27153[(9)] = inst_27127);

(statearr_27153[(10)] = inst_27102);

(statearr_27153[(11)] = inst_27104);

(statearr_27153[(12)] = inst_27103);

return statearr_27153;
})();
var statearr_27154_27194 = state_27150__$1;
(statearr_27154_27194[(2)] = null);

(statearr_27154_27194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27151 === (1))){
var state_27150__$1 = state_27150;
var statearr_27155_27195 = state_27150__$1;
(statearr_27155_27195[(2)] = null);

(statearr_27155_27195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27151 === (4))){
var inst_27091 = (state_27150[(13)]);
var inst_27091__$1 = (state_27150[(2)]);
var inst_27092 = (inst_27091__$1 == null);
var state_27150__$1 = (function (){var statearr_27156 = state_27150;
(statearr_27156[(13)] = inst_27091__$1);

return statearr_27156;
})();
if(cljs.core.truth_(inst_27092)){
var statearr_27157_27196 = state_27150__$1;
(statearr_27157_27196[(1)] = (5));

} else {
var statearr_27158_27197 = state_27150__$1;
(statearr_27158_27197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27151 === (15))){
var state_27150__$1 = state_27150;
var statearr_27162_27198 = state_27150__$1;
(statearr_27162_27198[(2)] = null);

(statearr_27162_27198[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27151 === (21))){
var state_27150__$1 = state_27150;
var statearr_27163_27199 = state_27150__$1;
(statearr_27163_27199[(2)] = null);

(statearr_27163_27199[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27151 === (13))){
var inst_27105 = (state_27150[(8)]);
var inst_27102 = (state_27150[(10)]);
var inst_27104 = (state_27150[(11)]);
var inst_27103 = (state_27150[(12)]);
var inst_27112 = (state_27150[(2)]);
var inst_27113 = (inst_27105 + (1));
var tmp27159 = inst_27102;
var tmp27160 = inst_27104;
var tmp27161 = inst_27103;
var inst_27102__$1 = tmp27159;
var inst_27103__$1 = tmp27161;
var inst_27104__$1 = tmp27160;
var inst_27105__$1 = inst_27113;
var state_27150__$1 = (function (){var statearr_27164 = state_27150;
(statearr_27164[(8)] = inst_27105__$1);

(statearr_27164[(10)] = inst_27102__$1);

(statearr_27164[(11)] = inst_27104__$1);

(statearr_27164[(12)] = inst_27103__$1);

(statearr_27164[(14)] = inst_27112);

return statearr_27164;
})();
var statearr_27165_27200 = state_27150__$1;
(statearr_27165_27200[(2)] = null);

(statearr_27165_27200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27151 === (22))){
var state_27150__$1 = state_27150;
var statearr_27166_27201 = state_27150__$1;
(statearr_27166_27201[(2)] = null);

(statearr_27166_27201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27151 === (6))){
var inst_27091 = (state_27150[(13)]);
var inst_27100 = f.call(null,inst_27091);
var inst_27101 = cljs.core.seq.call(null,inst_27100);
var inst_27102 = inst_27101;
var inst_27103 = null;
var inst_27104 = (0);
var inst_27105 = (0);
var state_27150__$1 = (function (){var statearr_27167 = state_27150;
(statearr_27167[(8)] = inst_27105);

(statearr_27167[(10)] = inst_27102);

(statearr_27167[(11)] = inst_27104);

(statearr_27167[(12)] = inst_27103);

return statearr_27167;
})();
var statearr_27168_27202 = state_27150__$1;
(statearr_27168_27202[(2)] = null);

(statearr_27168_27202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27151 === (17))){
var inst_27116 = (state_27150[(7)]);
var inst_27120 = cljs.core.chunk_first.call(null,inst_27116);
var inst_27121 = cljs.core.chunk_rest.call(null,inst_27116);
var inst_27122 = cljs.core.count.call(null,inst_27120);
var inst_27102 = inst_27121;
var inst_27103 = inst_27120;
var inst_27104 = inst_27122;
var inst_27105 = (0);
var state_27150__$1 = (function (){var statearr_27169 = state_27150;
(statearr_27169[(8)] = inst_27105);

(statearr_27169[(10)] = inst_27102);

(statearr_27169[(11)] = inst_27104);

(statearr_27169[(12)] = inst_27103);

return statearr_27169;
})();
var statearr_27170_27203 = state_27150__$1;
(statearr_27170_27203[(2)] = null);

(statearr_27170_27203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27151 === (3))){
var inst_27148 = (state_27150[(2)]);
var state_27150__$1 = state_27150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27150__$1,inst_27148);
} else {
if((state_val_27151 === (12))){
var inst_27136 = (state_27150[(2)]);
var state_27150__$1 = state_27150;
var statearr_27171_27204 = state_27150__$1;
(statearr_27171_27204[(2)] = inst_27136);

(statearr_27171_27204[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27151 === (2))){
var state_27150__$1 = state_27150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27150__$1,(4),in$);
} else {
if((state_val_27151 === (23))){
var inst_27144 = (state_27150[(2)]);
var state_27150__$1 = state_27150;
var statearr_27172_27205 = state_27150__$1;
(statearr_27172_27205[(2)] = inst_27144);

(statearr_27172_27205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27151 === (19))){
var inst_27131 = (state_27150[(2)]);
var state_27150__$1 = state_27150;
var statearr_27173_27206 = state_27150__$1;
(statearr_27173_27206[(2)] = inst_27131);

(statearr_27173_27206[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27151 === (11))){
var inst_27102 = (state_27150[(10)]);
var inst_27116 = (state_27150[(7)]);
var inst_27116__$1 = cljs.core.seq.call(null,inst_27102);
var state_27150__$1 = (function (){var statearr_27174 = state_27150;
(statearr_27174[(7)] = inst_27116__$1);

return statearr_27174;
})();
if(inst_27116__$1){
var statearr_27175_27207 = state_27150__$1;
(statearr_27175_27207[(1)] = (14));

} else {
var statearr_27176_27208 = state_27150__$1;
(statearr_27176_27208[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27151 === (9))){
var inst_27138 = (state_27150[(2)]);
var inst_27139 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27150__$1 = (function (){var statearr_27177 = state_27150;
(statearr_27177[(15)] = inst_27138);

return statearr_27177;
})();
if(cljs.core.truth_(inst_27139)){
var statearr_27178_27209 = state_27150__$1;
(statearr_27178_27209[(1)] = (21));

} else {
var statearr_27179_27210 = state_27150__$1;
(statearr_27179_27210[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27151 === (5))){
var inst_27094 = cljs.core.async.close_BANG_.call(null,out);
var state_27150__$1 = state_27150;
var statearr_27180_27211 = state_27150__$1;
(statearr_27180_27211[(2)] = inst_27094);

(statearr_27180_27211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27151 === (14))){
var inst_27116 = (state_27150[(7)]);
var inst_27118 = cljs.core.chunked_seq_QMARK_.call(null,inst_27116);
var state_27150__$1 = state_27150;
if(inst_27118){
var statearr_27181_27212 = state_27150__$1;
(statearr_27181_27212[(1)] = (17));

} else {
var statearr_27182_27213 = state_27150__$1;
(statearr_27182_27213[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27151 === (16))){
var inst_27134 = (state_27150[(2)]);
var state_27150__$1 = state_27150;
var statearr_27183_27214 = state_27150__$1;
(statearr_27183_27214[(2)] = inst_27134);

(statearr_27183_27214[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27151 === (10))){
var inst_27105 = (state_27150[(8)]);
var inst_27103 = (state_27150[(12)]);
var inst_27110 = cljs.core._nth.call(null,inst_27103,inst_27105);
var state_27150__$1 = state_27150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27150__$1,(13),out,inst_27110);
} else {
if((state_val_27151 === (18))){
var inst_27116 = (state_27150[(7)]);
var inst_27125 = cljs.core.first.call(null,inst_27116);
var state_27150__$1 = state_27150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27150__$1,(20),out,inst_27125);
} else {
if((state_val_27151 === (8))){
var inst_27105 = (state_27150[(8)]);
var inst_27104 = (state_27150[(11)]);
var inst_27107 = (inst_27105 < inst_27104);
var inst_27108 = inst_27107;
var state_27150__$1 = state_27150;
if(cljs.core.truth_(inst_27108)){
var statearr_27184_27215 = state_27150__$1;
(statearr_27184_27215[(1)] = (10));

} else {
var statearr_27185_27216 = state_27150__$1;
(statearr_27185_27216[(1)] = (11));

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
});})(c__24715__auto__))
;
return ((function (switch__24603__auto__,c__24715__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24604__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24604__auto____0 = (function (){
var statearr_27189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27189[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24604__auto__);

(statearr_27189[(1)] = (1));

return statearr_27189;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24604__auto____1 = (function (state_27150){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_27150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e27190){if((e27190 instanceof Object)){
var ex__24607__auto__ = e27190;
var statearr_27191_27217 = state_27150;
(statearr_27191_27217[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27218 = state_27150;
state_27150 = G__27218;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24604__auto__ = function(state_27150){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24604__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24604__auto____1.call(this,state_27150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24604__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24604__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto__))
})();
var state__24717__auto__ = (function (){var statearr_27192 = f__24716__auto__.call(null);
(statearr_27192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto__);

return statearr_27192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto__))
);

return c__24715__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27219 = [];
var len__17809__auto___27222 = arguments.length;
var i__17810__auto___27223 = (0);
while(true){
if((i__17810__auto___27223 < len__17809__auto___27222)){
args27219.push((arguments[i__17810__auto___27223]));

var G__27224 = (i__17810__auto___27223 + (1));
i__17810__auto___27223 = G__27224;
continue;
} else {
}
break;
}

var G__27221 = args27219.length;
switch (G__27221) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27219.length)].join('')));

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
var args27226 = [];
var len__17809__auto___27229 = arguments.length;
var i__17810__auto___27230 = (0);
while(true){
if((i__17810__auto___27230 < len__17809__auto___27229)){
args27226.push((arguments[i__17810__auto___27230]));

var G__27231 = (i__17810__auto___27230 + (1));
i__17810__auto___27230 = G__27231;
continue;
} else {
}
break;
}

var G__27228 = args27226.length;
switch (G__27228) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27226.length)].join('')));

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
var args27233 = [];
var len__17809__auto___27284 = arguments.length;
var i__17810__auto___27285 = (0);
while(true){
if((i__17810__auto___27285 < len__17809__auto___27284)){
args27233.push((arguments[i__17810__auto___27285]));

var G__27286 = (i__17810__auto___27285 + (1));
i__17810__auto___27285 = G__27286;
continue;
} else {
}
break;
}

var G__27235 = args27233.length;
switch (G__27235) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27233.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24715__auto___27288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto___27288,out){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto___27288,out){
return (function (state_27259){
var state_val_27260 = (state_27259[(1)]);
if((state_val_27260 === (7))){
var inst_27254 = (state_27259[(2)]);
var state_27259__$1 = state_27259;
var statearr_27261_27289 = state_27259__$1;
(statearr_27261_27289[(2)] = inst_27254);

(statearr_27261_27289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27260 === (1))){
var inst_27236 = null;
var state_27259__$1 = (function (){var statearr_27262 = state_27259;
(statearr_27262[(7)] = inst_27236);

return statearr_27262;
})();
var statearr_27263_27290 = state_27259__$1;
(statearr_27263_27290[(2)] = null);

(statearr_27263_27290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27260 === (4))){
var inst_27239 = (state_27259[(8)]);
var inst_27239__$1 = (state_27259[(2)]);
var inst_27240 = (inst_27239__$1 == null);
var inst_27241 = cljs.core.not.call(null,inst_27240);
var state_27259__$1 = (function (){var statearr_27264 = state_27259;
(statearr_27264[(8)] = inst_27239__$1);

return statearr_27264;
})();
if(inst_27241){
var statearr_27265_27291 = state_27259__$1;
(statearr_27265_27291[(1)] = (5));

} else {
var statearr_27266_27292 = state_27259__$1;
(statearr_27266_27292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27260 === (6))){
var state_27259__$1 = state_27259;
var statearr_27267_27293 = state_27259__$1;
(statearr_27267_27293[(2)] = null);

(statearr_27267_27293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27260 === (3))){
var inst_27256 = (state_27259[(2)]);
var inst_27257 = cljs.core.async.close_BANG_.call(null,out);
var state_27259__$1 = (function (){var statearr_27268 = state_27259;
(statearr_27268[(9)] = inst_27256);

return statearr_27268;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27259__$1,inst_27257);
} else {
if((state_val_27260 === (2))){
var state_27259__$1 = state_27259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27259__$1,(4),ch);
} else {
if((state_val_27260 === (11))){
var inst_27239 = (state_27259[(8)]);
var inst_27248 = (state_27259[(2)]);
var inst_27236 = inst_27239;
var state_27259__$1 = (function (){var statearr_27269 = state_27259;
(statearr_27269[(7)] = inst_27236);

(statearr_27269[(10)] = inst_27248);

return statearr_27269;
})();
var statearr_27270_27294 = state_27259__$1;
(statearr_27270_27294[(2)] = null);

(statearr_27270_27294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27260 === (9))){
var inst_27239 = (state_27259[(8)]);
var state_27259__$1 = state_27259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27259__$1,(11),out,inst_27239);
} else {
if((state_val_27260 === (5))){
var inst_27236 = (state_27259[(7)]);
var inst_27239 = (state_27259[(8)]);
var inst_27243 = cljs.core._EQ_.call(null,inst_27239,inst_27236);
var state_27259__$1 = state_27259;
if(inst_27243){
var statearr_27272_27295 = state_27259__$1;
(statearr_27272_27295[(1)] = (8));

} else {
var statearr_27273_27296 = state_27259__$1;
(statearr_27273_27296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27260 === (10))){
var inst_27251 = (state_27259[(2)]);
var state_27259__$1 = state_27259;
var statearr_27274_27297 = state_27259__$1;
(statearr_27274_27297[(2)] = inst_27251);

(statearr_27274_27297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27260 === (8))){
var inst_27236 = (state_27259[(7)]);
var tmp27271 = inst_27236;
var inst_27236__$1 = tmp27271;
var state_27259__$1 = (function (){var statearr_27275 = state_27259;
(statearr_27275[(7)] = inst_27236__$1);

return statearr_27275;
})();
var statearr_27276_27298 = state_27259__$1;
(statearr_27276_27298[(2)] = null);

(statearr_27276_27298[(1)] = (2));


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
});})(c__24715__auto___27288,out))
;
return ((function (switch__24603__auto__,c__24715__auto___27288,out){
return (function() {
var cljs$core$async$state_machine__24604__auto__ = null;
var cljs$core$async$state_machine__24604__auto____0 = (function (){
var statearr_27280 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27280[(0)] = cljs$core$async$state_machine__24604__auto__);

(statearr_27280[(1)] = (1));

return statearr_27280;
});
var cljs$core$async$state_machine__24604__auto____1 = (function (state_27259){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_27259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e27281){if((e27281 instanceof Object)){
var ex__24607__auto__ = e27281;
var statearr_27282_27299 = state_27259;
(statearr_27282_27299[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27300 = state_27259;
state_27259 = G__27300;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
cljs$core$async$state_machine__24604__auto__ = function(state_27259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24604__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24604__auto____1.call(this,state_27259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24604__auto____0;
cljs$core$async$state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24604__auto____1;
return cljs$core$async$state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto___27288,out))
})();
var state__24717__auto__ = (function (){var statearr_27283 = f__24716__auto__.call(null);
(statearr_27283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto___27288);

return statearr_27283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto___27288,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27301 = [];
var len__17809__auto___27371 = arguments.length;
var i__17810__auto___27372 = (0);
while(true){
if((i__17810__auto___27372 < len__17809__auto___27371)){
args27301.push((arguments[i__17810__auto___27372]));

var G__27373 = (i__17810__auto___27372 + (1));
i__17810__auto___27372 = G__27373;
continue;
} else {
}
break;
}

var G__27303 = args27301.length;
switch (G__27303) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27301.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24715__auto___27375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto___27375,out){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto___27375,out){
return (function (state_27341){
var state_val_27342 = (state_27341[(1)]);
if((state_val_27342 === (7))){
var inst_27337 = (state_27341[(2)]);
var state_27341__$1 = state_27341;
var statearr_27343_27376 = state_27341__$1;
(statearr_27343_27376[(2)] = inst_27337);

(statearr_27343_27376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27342 === (1))){
var inst_27304 = (new Array(n));
var inst_27305 = inst_27304;
var inst_27306 = (0);
var state_27341__$1 = (function (){var statearr_27344 = state_27341;
(statearr_27344[(7)] = inst_27306);

(statearr_27344[(8)] = inst_27305);

return statearr_27344;
})();
var statearr_27345_27377 = state_27341__$1;
(statearr_27345_27377[(2)] = null);

(statearr_27345_27377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27342 === (4))){
var inst_27309 = (state_27341[(9)]);
var inst_27309__$1 = (state_27341[(2)]);
var inst_27310 = (inst_27309__$1 == null);
var inst_27311 = cljs.core.not.call(null,inst_27310);
var state_27341__$1 = (function (){var statearr_27346 = state_27341;
(statearr_27346[(9)] = inst_27309__$1);

return statearr_27346;
})();
if(inst_27311){
var statearr_27347_27378 = state_27341__$1;
(statearr_27347_27378[(1)] = (5));

} else {
var statearr_27348_27379 = state_27341__$1;
(statearr_27348_27379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27342 === (15))){
var inst_27331 = (state_27341[(2)]);
var state_27341__$1 = state_27341;
var statearr_27349_27380 = state_27341__$1;
(statearr_27349_27380[(2)] = inst_27331);

(statearr_27349_27380[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27342 === (13))){
var state_27341__$1 = state_27341;
var statearr_27350_27381 = state_27341__$1;
(statearr_27350_27381[(2)] = null);

(statearr_27350_27381[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27342 === (6))){
var inst_27306 = (state_27341[(7)]);
var inst_27327 = (inst_27306 > (0));
var state_27341__$1 = state_27341;
if(cljs.core.truth_(inst_27327)){
var statearr_27351_27382 = state_27341__$1;
(statearr_27351_27382[(1)] = (12));

} else {
var statearr_27352_27383 = state_27341__$1;
(statearr_27352_27383[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27342 === (3))){
var inst_27339 = (state_27341[(2)]);
var state_27341__$1 = state_27341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27341__$1,inst_27339);
} else {
if((state_val_27342 === (12))){
var inst_27305 = (state_27341[(8)]);
var inst_27329 = cljs.core.vec.call(null,inst_27305);
var state_27341__$1 = state_27341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27341__$1,(15),out,inst_27329);
} else {
if((state_val_27342 === (2))){
var state_27341__$1 = state_27341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27341__$1,(4),ch);
} else {
if((state_val_27342 === (11))){
var inst_27321 = (state_27341[(2)]);
var inst_27322 = (new Array(n));
var inst_27305 = inst_27322;
var inst_27306 = (0);
var state_27341__$1 = (function (){var statearr_27353 = state_27341;
(statearr_27353[(7)] = inst_27306);

(statearr_27353[(10)] = inst_27321);

(statearr_27353[(8)] = inst_27305);

return statearr_27353;
})();
var statearr_27354_27384 = state_27341__$1;
(statearr_27354_27384[(2)] = null);

(statearr_27354_27384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27342 === (9))){
var inst_27305 = (state_27341[(8)]);
var inst_27319 = cljs.core.vec.call(null,inst_27305);
var state_27341__$1 = state_27341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27341__$1,(11),out,inst_27319);
} else {
if((state_val_27342 === (5))){
var inst_27306 = (state_27341[(7)]);
var inst_27314 = (state_27341[(11)]);
var inst_27309 = (state_27341[(9)]);
var inst_27305 = (state_27341[(8)]);
var inst_27313 = (inst_27305[inst_27306] = inst_27309);
var inst_27314__$1 = (inst_27306 + (1));
var inst_27315 = (inst_27314__$1 < n);
var state_27341__$1 = (function (){var statearr_27355 = state_27341;
(statearr_27355[(12)] = inst_27313);

(statearr_27355[(11)] = inst_27314__$1);

return statearr_27355;
})();
if(cljs.core.truth_(inst_27315)){
var statearr_27356_27385 = state_27341__$1;
(statearr_27356_27385[(1)] = (8));

} else {
var statearr_27357_27386 = state_27341__$1;
(statearr_27357_27386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27342 === (14))){
var inst_27334 = (state_27341[(2)]);
var inst_27335 = cljs.core.async.close_BANG_.call(null,out);
var state_27341__$1 = (function (){var statearr_27359 = state_27341;
(statearr_27359[(13)] = inst_27334);

return statearr_27359;
})();
var statearr_27360_27387 = state_27341__$1;
(statearr_27360_27387[(2)] = inst_27335);

(statearr_27360_27387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27342 === (10))){
var inst_27325 = (state_27341[(2)]);
var state_27341__$1 = state_27341;
var statearr_27361_27388 = state_27341__$1;
(statearr_27361_27388[(2)] = inst_27325);

(statearr_27361_27388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27342 === (8))){
var inst_27314 = (state_27341[(11)]);
var inst_27305 = (state_27341[(8)]);
var tmp27358 = inst_27305;
var inst_27305__$1 = tmp27358;
var inst_27306 = inst_27314;
var state_27341__$1 = (function (){var statearr_27362 = state_27341;
(statearr_27362[(7)] = inst_27306);

(statearr_27362[(8)] = inst_27305__$1);

return statearr_27362;
})();
var statearr_27363_27389 = state_27341__$1;
(statearr_27363_27389[(2)] = null);

(statearr_27363_27389[(1)] = (2));


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
});})(c__24715__auto___27375,out))
;
return ((function (switch__24603__auto__,c__24715__auto___27375,out){
return (function() {
var cljs$core$async$state_machine__24604__auto__ = null;
var cljs$core$async$state_machine__24604__auto____0 = (function (){
var statearr_27367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27367[(0)] = cljs$core$async$state_machine__24604__auto__);

(statearr_27367[(1)] = (1));

return statearr_27367;
});
var cljs$core$async$state_machine__24604__auto____1 = (function (state_27341){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_27341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e27368){if((e27368 instanceof Object)){
var ex__24607__auto__ = e27368;
var statearr_27369_27390 = state_27341;
(statearr_27369_27390[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27391 = state_27341;
state_27341 = G__27391;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
cljs$core$async$state_machine__24604__auto__ = function(state_27341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24604__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24604__auto____1.call(this,state_27341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24604__auto____0;
cljs$core$async$state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24604__auto____1;
return cljs$core$async$state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto___27375,out))
})();
var state__24717__auto__ = (function (){var statearr_27370 = f__24716__auto__.call(null);
(statearr_27370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto___27375);

return statearr_27370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto___27375,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27392 = [];
var len__17809__auto___27466 = arguments.length;
var i__17810__auto___27467 = (0);
while(true){
if((i__17810__auto___27467 < len__17809__auto___27466)){
args27392.push((arguments[i__17810__auto___27467]));

var G__27468 = (i__17810__auto___27467 + (1));
i__17810__auto___27467 = G__27468;
continue;
} else {
}
break;
}

var G__27394 = args27392.length;
switch (G__27394) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27392.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24715__auto___27470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto___27470,out){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto___27470,out){
return (function (state_27436){
var state_val_27437 = (state_27436[(1)]);
if((state_val_27437 === (7))){
var inst_27432 = (state_27436[(2)]);
var state_27436__$1 = state_27436;
var statearr_27438_27471 = state_27436__$1;
(statearr_27438_27471[(2)] = inst_27432);

(statearr_27438_27471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27437 === (1))){
var inst_27395 = [];
var inst_27396 = inst_27395;
var inst_27397 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27436__$1 = (function (){var statearr_27439 = state_27436;
(statearr_27439[(7)] = inst_27397);

(statearr_27439[(8)] = inst_27396);

return statearr_27439;
})();
var statearr_27440_27472 = state_27436__$1;
(statearr_27440_27472[(2)] = null);

(statearr_27440_27472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27437 === (4))){
var inst_27400 = (state_27436[(9)]);
var inst_27400__$1 = (state_27436[(2)]);
var inst_27401 = (inst_27400__$1 == null);
var inst_27402 = cljs.core.not.call(null,inst_27401);
var state_27436__$1 = (function (){var statearr_27441 = state_27436;
(statearr_27441[(9)] = inst_27400__$1);

return statearr_27441;
})();
if(inst_27402){
var statearr_27442_27473 = state_27436__$1;
(statearr_27442_27473[(1)] = (5));

} else {
var statearr_27443_27474 = state_27436__$1;
(statearr_27443_27474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27437 === (15))){
var inst_27426 = (state_27436[(2)]);
var state_27436__$1 = state_27436;
var statearr_27444_27475 = state_27436__$1;
(statearr_27444_27475[(2)] = inst_27426);

(statearr_27444_27475[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27437 === (13))){
var state_27436__$1 = state_27436;
var statearr_27445_27476 = state_27436__$1;
(statearr_27445_27476[(2)] = null);

(statearr_27445_27476[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27437 === (6))){
var inst_27396 = (state_27436[(8)]);
var inst_27421 = inst_27396.length;
var inst_27422 = (inst_27421 > (0));
var state_27436__$1 = state_27436;
if(cljs.core.truth_(inst_27422)){
var statearr_27446_27477 = state_27436__$1;
(statearr_27446_27477[(1)] = (12));

} else {
var statearr_27447_27478 = state_27436__$1;
(statearr_27447_27478[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27437 === (3))){
var inst_27434 = (state_27436[(2)]);
var state_27436__$1 = state_27436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27436__$1,inst_27434);
} else {
if((state_val_27437 === (12))){
var inst_27396 = (state_27436[(8)]);
var inst_27424 = cljs.core.vec.call(null,inst_27396);
var state_27436__$1 = state_27436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27436__$1,(15),out,inst_27424);
} else {
if((state_val_27437 === (2))){
var state_27436__$1 = state_27436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27436__$1,(4),ch);
} else {
if((state_val_27437 === (11))){
var inst_27404 = (state_27436[(10)]);
var inst_27400 = (state_27436[(9)]);
var inst_27414 = (state_27436[(2)]);
var inst_27415 = [];
var inst_27416 = inst_27415.push(inst_27400);
var inst_27396 = inst_27415;
var inst_27397 = inst_27404;
var state_27436__$1 = (function (){var statearr_27448 = state_27436;
(statearr_27448[(7)] = inst_27397);

(statearr_27448[(11)] = inst_27414);

(statearr_27448[(8)] = inst_27396);

(statearr_27448[(12)] = inst_27416);

return statearr_27448;
})();
var statearr_27449_27479 = state_27436__$1;
(statearr_27449_27479[(2)] = null);

(statearr_27449_27479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27437 === (9))){
var inst_27396 = (state_27436[(8)]);
var inst_27412 = cljs.core.vec.call(null,inst_27396);
var state_27436__$1 = state_27436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27436__$1,(11),out,inst_27412);
} else {
if((state_val_27437 === (5))){
var inst_27397 = (state_27436[(7)]);
var inst_27404 = (state_27436[(10)]);
var inst_27400 = (state_27436[(9)]);
var inst_27404__$1 = f.call(null,inst_27400);
var inst_27405 = cljs.core._EQ_.call(null,inst_27404__$1,inst_27397);
var inst_27406 = cljs.core.keyword_identical_QMARK_.call(null,inst_27397,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27407 = (inst_27405) || (inst_27406);
var state_27436__$1 = (function (){var statearr_27450 = state_27436;
(statearr_27450[(10)] = inst_27404__$1);

return statearr_27450;
})();
if(cljs.core.truth_(inst_27407)){
var statearr_27451_27480 = state_27436__$1;
(statearr_27451_27480[(1)] = (8));

} else {
var statearr_27452_27481 = state_27436__$1;
(statearr_27452_27481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27437 === (14))){
var inst_27429 = (state_27436[(2)]);
var inst_27430 = cljs.core.async.close_BANG_.call(null,out);
var state_27436__$1 = (function (){var statearr_27454 = state_27436;
(statearr_27454[(13)] = inst_27429);

return statearr_27454;
})();
var statearr_27455_27482 = state_27436__$1;
(statearr_27455_27482[(2)] = inst_27430);

(statearr_27455_27482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27437 === (10))){
var inst_27419 = (state_27436[(2)]);
var state_27436__$1 = state_27436;
var statearr_27456_27483 = state_27436__$1;
(statearr_27456_27483[(2)] = inst_27419);

(statearr_27456_27483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27437 === (8))){
var inst_27404 = (state_27436[(10)]);
var inst_27396 = (state_27436[(8)]);
var inst_27400 = (state_27436[(9)]);
var inst_27409 = inst_27396.push(inst_27400);
var tmp27453 = inst_27396;
var inst_27396__$1 = tmp27453;
var inst_27397 = inst_27404;
var state_27436__$1 = (function (){var statearr_27457 = state_27436;
(statearr_27457[(7)] = inst_27397);

(statearr_27457[(8)] = inst_27396__$1);

(statearr_27457[(14)] = inst_27409);

return statearr_27457;
})();
var statearr_27458_27484 = state_27436__$1;
(statearr_27458_27484[(2)] = null);

(statearr_27458_27484[(1)] = (2));


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
});})(c__24715__auto___27470,out))
;
return ((function (switch__24603__auto__,c__24715__auto___27470,out){
return (function() {
var cljs$core$async$state_machine__24604__auto__ = null;
var cljs$core$async$state_machine__24604__auto____0 = (function (){
var statearr_27462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27462[(0)] = cljs$core$async$state_machine__24604__auto__);

(statearr_27462[(1)] = (1));

return statearr_27462;
});
var cljs$core$async$state_machine__24604__auto____1 = (function (state_27436){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_27436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e27463){if((e27463 instanceof Object)){
var ex__24607__auto__ = e27463;
var statearr_27464_27485 = state_27436;
(statearr_27464_27485[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27486 = state_27436;
state_27436 = G__27486;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
cljs$core$async$state_machine__24604__auto__ = function(state_27436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24604__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24604__auto____1.call(this,state_27436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24604__auto____0;
cljs$core$async$state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24604__auto____1;
return cljs$core$async$state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto___27470,out))
})();
var state__24717__auto__ = (function (){var statearr_27465 = f__24716__auto__.call(null);
(statearr_27465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto___27470);

return statearr_27465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto___27470,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1449083088287