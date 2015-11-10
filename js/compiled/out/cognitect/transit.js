// Compiled by ClojureScript 1.7.122 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__27733_27737 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__27734_27738 = null;
var count__27735_27739 = (0);
var i__27736_27740 = (0);
while(true){
if((i__27736_27740 < count__27735_27739)){
var k_27741 = cljs.core._nth.call(null,chunk__27734_27738,i__27736_27740);
var v_27742 = (b[k_27741]);
(a[k_27741] = v_27742);

var G__27743 = seq__27733_27737;
var G__27744 = chunk__27734_27738;
var G__27745 = count__27735_27739;
var G__27746 = (i__27736_27740 + (1));
seq__27733_27737 = G__27743;
chunk__27734_27738 = G__27744;
count__27735_27739 = G__27745;
i__27736_27740 = G__27746;
continue;
} else {
var temp__4425__auto___27747 = cljs.core.seq.call(null,seq__27733_27737);
if(temp__4425__auto___27747){
var seq__27733_27748__$1 = temp__4425__auto___27747;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27733_27748__$1)){
var c__16877__auto___27749 = cljs.core.chunk_first.call(null,seq__27733_27748__$1);
var G__27750 = cljs.core.chunk_rest.call(null,seq__27733_27748__$1);
var G__27751 = c__16877__auto___27749;
var G__27752 = cljs.core.count.call(null,c__16877__auto___27749);
var G__27753 = (0);
seq__27733_27737 = G__27750;
chunk__27734_27738 = G__27751;
count__27735_27739 = G__27752;
i__27736_27740 = G__27753;
continue;
} else {
var k_27754 = cljs.core.first.call(null,seq__27733_27748__$1);
var v_27755 = (b[k_27754]);
(a[k_27754] = v_27755);

var G__27756 = cljs.core.next.call(null,seq__27733_27748__$1);
var G__27757 = null;
var G__27758 = (0);
var G__27759 = (0);
seq__27733_27737 = G__27756;
chunk__27734_27738 = G__27757;
count__27735_27739 = G__27758;
i__27736_27740 = G__27759;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args27760 = [];
var len__17132__auto___27763 = arguments.length;
var i__17133__auto___27764 = (0);
while(true){
if((i__17133__auto___27764 < len__17132__auto___27763)){
args27760.push((arguments[i__17133__auto___27764]));

var G__27765 = (i__17133__auto___27764 + (1));
i__17133__auto___27764 = G__27765;
continue;
} else {
}
break;
}

var G__27762 = args27760.length;
switch (G__27762) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27760.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__27767 = (i + (2));
var G__27768 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__27767;
ret = G__27768;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__27769_27773 = cljs.core.seq.call(null,v);
var chunk__27770_27774 = null;
var count__27771_27775 = (0);
var i__27772_27776 = (0);
while(true){
if((i__27772_27776 < count__27771_27775)){
var x_27777 = cljs.core._nth.call(null,chunk__27770_27774,i__27772_27776);
ret.push(x_27777);

var G__27778 = seq__27769_27773;
var G__27779 = chunk__27770_27774;
var G__27780 = count__27771_27775;
var G__27781 = (i__27772_27776 + (1));
seq__27769_27773 = G__27778;
chunk__27770_27774 = G__27779;
count__27771_27775 = G__27780;
i__27772_27776 = G__27781;
continue;
} else {
var temp__4425__auto___27782 = cljs.core.seq.call(null,seq__27769_27773);
if(temp__4425__auto___27782){
var seq__27769_27783__$1 = temp__4425__auto___27782;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27769_27783__$1)){
var c__16877__auto___27784 = cljs.core.chunk_first.call(null,seq__27769_27783__$1);
var G__27785 = cljs.core.chunk_rest.call(null,seq__27769_27783__$1);
var G__27786 = c__16877__auto___27784;
var G__27787 = cljs.core.count.call(null,c__16877__auto___27784);
var G__27788 = (0);
seq__27769_27773 = G__27785;
chunk__27770_27774 = G__27786;
count__27771_27775 = G__27787;
i__27772_27776 = G__27788;
continue;
} else {
var x_27789 = cljs.core.first.call(null,seq__27769_27783__$1);
ret.push(x_27789);

var G__27790 = cljs.core.next.call(null,seq__27769_27783__$1);
var G__27791 = null;
var G__27792 = (0);
var G__27793 = (0);
seq__27769_27773 = G__27790;
chunk__27770_27774 = G__27791;
count__27771_27775 = G__27792;
i__27772_27776 = G__27793;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__27794_27798 = cljs.core.seq.call(null,v);
var chunk__27795_27799 = null;
var count__27796_27800 = (0);
var i__27797_27801 = (0);
while(true){
if((i__27797_27801 < count__27796_27800)){
var x_27802 = cljs.core._nth.call(null,chunk__27795_27799,i__27797_27801);
ret.push(x_27802);

var G__27803 = seq__27794_27798;
var G__27804 = chunk__27795_27799;
var G__27805 = count__27796_27800;
var G__27806 = (i__27797_27801 + (1));
seq__27794_27798 = G__27803;
chunk__27795_27799 = G__27804;
count__27796_27800 = G__27805;
i__27797_27801 = G__27806;
continue;
} else {
var temp__4425__auto___27807 = cljs.core.seq.call(null,seq__27794_27798);
if(temp__4425__auto___27807){
var seq__27794_27808__$1 = temp__4425__auto___27807;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27794_27808__$1)){
var c__16877__auto___27809 = cljs.core.chunk_first.call(null,seq__27794_27808__$1);
var G__27810 = cljs.core.chunk_rest.call(null,seq__27794_27808__$1);
var G__27811 = c__16877__auto___27809;
var G__27812 = cljs.core.count.call(null,c__16877__auto___27809);
var G__27813 = (0);
seq__27794_27798 = G__27810;
chunk__27795_27799 = G__27811;
count__27796_27800 = G__27812;
i__27797_27801 = G__27813;
continue;
} else {
var x_27814 = cljs.core.first.call(null,seq__27794_27808__$1);
ret.push(x_27814);

var G__27815 = cljs.core.next.call(null,seq__27794_27808__$1);
var G__27816 = null;
var G__27817 = (0);
var G__27818 = (0);
seq__27794_27798 = G__27815;
chunk__27795_27799 = G__27816;
count__27796_27800 = G__27817;
i__27797_27801 = G__27818;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__27819_27823 = cljs.core.seq.call(null,v);
var chunk__27820_27824 = null;
var count__27821_27825 = (0);
var i__27822_27826 = (0);
while(true){
if((i__27822_27826 < count__27821_27825)){
var x_27827 = cljs.core._nth.call(null,chunk__27820_27824,i__27822_27826);
ret.push(x_27827);

var G__27828 = seq__27819_27823;
var G__27829 = chunk__27820_27824;
var G__27830 = count__27821_27825;
var G__27831 = (i__27822_27826 + (1));
seq__27819_27823 = G__27828;
chunk__27820_27824 = G__27829;
count__27821_27825 = G__27830;
i__27822_27826 = G__27831;
continue;
} else {
var temp__4425__auto___27832 = cljs.core.seq.call(null,seq__27819_27823);
if(temp__4425__auto___27832){
var seq__27819_27833__$1 = temp__4425__auto___27832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27819_27833__$1)){
var c__16877__auto___27834 = cljs.core.chunk_first.call(null,seq__27819_27833__$1);
var G__27835 = cljs.core.chunk_rest.call(null,seq__27819_27833__$1);
var G__27836 = c__16877__auto___27834;
var G__27837 = cljs.core.count.call(null,c__16877__auto___27834);
var G__27838 = (0);
seq__27819_27823 = G__27835;
chunk__27820_27824 = G__27836;
count__27821_27825 = G__27837;
i__27822_27826 = G__27838;
continue;
} else {
var x_27839 = cljs.core.first.call(null,seq__27819_27833__$1);
ret.push(x_27839);

var G__27840 = cljs.core.next.call(null,seq__27819_27833__$1);
var G__27841 = null;
var G__27842 = (0);
var G__27843 = (0);
seq__27819_27823 = G__27840;
chunk__27820_27824 = G__27841;
count__27821_27825 = G__27842;
i__27822_27826 = G__27843;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args27844 = [];
var len__17132__auto___27855 = arguments.length;
var i__17133__auto___27856 = (0);
while(true){
if((i__17133__auto___27856 < len__17132__auto___27855)){
args27844.push((arguments[i__17133__auto___27856]));

var G__27857 = (i__17133__auto___27856 + (1));
i__17133__auto___27856 = G__27857;
continue;
} else {
}
break;
}

var G__27846 = args27844.length;
switch (G__27846) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27844.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__27847 = obj;
G__27847.push(kfn.call(null,k),vfn.call(null,v));

return G__27847;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x27848 = cljs.core.clone.call(null,handlers);
x27848.forEach = ((function (x27848,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__27849 = cljs.core.seq.call(null,coll);
var chunk__27850 = null;
var count__27851 = (0);
var i__27852 = (0);
while(true){
if((i__27852 < count__27851)){
var vec__27853 = cljs.core._nth.call(null,chunk__27850,i__27852);
var k = cljs.core.nth.call(null,vec__27853,(0),null);
var v = cljs.core.nth.call(null,vec__27853,(1),null);
f.call(null,v,k);

var G__27859 = seq__27849;
var G__27860 = chunk__27850;
var G__27861 = count__27851;
var G__27862 = (i__27852 + (1));
seq__27849 = G__27859;
chunk__27850 = G__27860;
count__27851 = G__27861;
i__27852 = G__27862;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27849);
if(temp__4425__auto__){
var seq__27849__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27849__$1)){
var c__16877__auto__ = cljs.core.chunk_first.call(null,seq__27849__$1);
var G__27863 = cljs.core.chunk_rest.call(null,seq__27849__$1);
var G__27864 = c__16877__auto__;
var G__27865 = cljs.core.count.call(null,c__16877__auto__);
var G__27866 = (0);
seq__27849 = G__27863;
chunk__27850 = G__27864;
count__27851 = G__27865;
i__27852 = G__27866;
continue;
} else {
var vec__27854 = cljs.core.first.call(null,seq__27849__$1);
var k = cljs.core.nth.call(null,vec__27854,(0),null);
var v = cljs.core.nth.call(null,vec__27854,(1),null);
f.call(null,v,k);

var G__27867 = cljs.core.next.call(null,seq__27849__$1);
var G__27868 = null;
var G__27869 = (0);
var G__27870 = (0);
seq__27849 = G__27867;
chunk__27850 = G__27868;
count__27851 = G__27869;
i__27852 = G__27870;
continue;
}
} else {
return null;
}
}
break;
}
});})(x27848,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x27848;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args27871 = [];
var len__17132__auto___27877 = arguments.length;
var i__17133__auto___27878 = (0);
while(true){
if((i__17133__auto___27878 < len__17132__auto___27877)){
args27871.push((arguments[i__17133__auto___27878]));

var G__27879 = (i__17133__auto___27878 + (1));
i__17133__auto___27878 = G__27879;
continue;
} else {
}
break;
}

var G__27873 = args27871.length;
switch (G__27873) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27871.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit27874 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit27874 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta27875){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta27875 = meta27875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit27874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27876,meta27875__$1){
var self__ = this;
var _27876__$1 = this;
return (new cognitect.transit.t_cognitect$transit27874(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta27875__$1));
});

cognitect.transit.t_cognitect$transit27874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27876){
var self__ = this;
var _27876__$1 = this;
return self__.meta27875;
});

cognitect.transit.t_cognitect$transit27874.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit27874.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit27874.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit27874.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit27874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta27875","meta27875",-982114735,null)], null);
});

cognitect.transit.t_cognitect$transit27874.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit27874.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit27874";

cognitect.transit.t_cognitect$transit27874.cljs$lang$ctorPrWriter = (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"cognitect.transit/t_cognitect$transit27874");
});

cognitect.transit.__GT_t_cognitect$transit27874 = (function cognitect$transit$__GT_t_cognitect$transit27874(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta27875){
return (new cognitect.transit.t_cognitect$transit27874(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta27875));
});

}

return (new cognitect.transit.t_cognitect$transit27874(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__16074__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__16074__auto__)){
return or__16074__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1447113459222