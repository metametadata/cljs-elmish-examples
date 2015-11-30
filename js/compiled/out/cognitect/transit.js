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
var seq__27869_27873 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__27870_27874 = null;
var count__27871_27875 = (0);
var i__27872_27876 = (0);
while(true){
if((i__27872_27876 < count__27871_27875)){
var k_27877 = cljs.core._nth.call(null,chunk__27870_27874,i__27872_27876);
var v_27878 = (b[k_27877]);
(a[k_27877] = v_27878);

var G__27879 = seq__27869_27873;
var G__27880 = chunk__27870_27874;
var G__27881 = count__27871_27875;
var G__27882 = (i__27872_27876 + (1));
seq__27869_27873 = G__27879;
chunk__27870_27874 = G__27880;
count__27871_27875 = G__27881;
i__27872_27876 = G__27882;
continue;
} else {
var temp__4425__auto___27883 = cljs.core.seq.call(null,seq__27869_27873);
if(temp__4425__auto___27883){
var seq__27869_27884__$1 = temp__4425__auto___27883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27869_27884__$1)){
var c__16916__auto___27885 = cljs.core.chunk_first.call(null,seq__27869_27884__$1);
var G__27886 = cljs.core.chunk_rest.call(null,seq__27869_27884__$1);
var G__27887 = c__16916__auto___27885;
var G__27888 = cljs.core.count.call(null,c__16916__auto___27885);
var G__27889 = (0);
seq__27869_27873 = G__27886;
chunk__27870_27874 = G__27887;
count__27871_27875 = G__27888;
i__27872_27876 = G__27889;
continue;
} else {
var k_27890 = cljs.core.first.call(null,seq__27869_27884__$1);
var v_27891 = (b[k_27890]);
(a[k_27890] = v_27891);

var G__27892 = cljs.core.next.call(null,seq__27869_27884__$1);
var G__27893 = null;
var G__27894 = (0);
var G__27895 = (0);
seq__27869_27873 = G__27892;
chunk__27870_27874 = G__27893;
count__27871_27875 = G__27894;
i__27872_27876 = G__27895;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__16711__auto__,writer__16712__auto__,opt__16713__auto__){
return cljs.core._write.call(null,writer__16712__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__16711__auto__,writer__16712__auto__,opt__16713__auto__){
return cljs.core._write.call(null,writer__16712__auto__,"cognitect.transit/VectorBuilder");
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
var args27896 = [];
var len__17171__auto___27899 = arguments.length;
var i__17172__auto___27900 = (0);
while(true){
if((i__17172__auto___27900 < len__17171__auto___27899)){
args27896.push((arguments[i__17172__auto___27900]));

var G__27901 = (i__17172__auto___27900 + (1));
i__17172__auto___27900 = G__27901;
continue;
} else {
}
break;
}

var G__27898 = args27896.length;
switch (G__27898) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27896.length)].join('')));

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
var G__27903 = (i + (2));
var G__27904 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__27903;
ret = G__27904;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__16711__auto__,writer__16712__auto__,opt__16713__auto__){
return cljs.core._write.call(null,writer__16712__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__16711__auto__,writer__16712__auto__,opt__16713__auto__){
return cljs.core._write.call(null,writer__16712__auto__,"cognitect.transit/SymbolHandler");
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
var seq__27905_27909 = cljs.core.seq.call(null,v);
var chunk__27906_27910 = null;
var count__27907_27911 = (0);
var i__27908_27912 = (0);
while(true){
if((i__27908_27912 < count__27907_27911)){
var x_27913 = cljs.core._nth.call(null,chunk__27906_27910,i__27908_27912);
ret.push(x_27913);

var G__27914 = seq__27905_27909;
var G__27915 = chunk__27906_27910;
var G__27916 = count__27907_27911;
var G__27917 = (i__27908_27912 + (1));
seq__27905_27909 = G__27914;
chunk__27906_27910 = G__27915;
count__27907_27911 = G__27916;
i__27908_27912 = G__27917;
continue;
} else {
var temp__4425__auto___27918 = cljs.core.seq.call(null,seq__27905_27909);
if(temp__4425__auto___27918){
var seq__27905_27919__$1 = temp__4425__auto___27918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27905_27919__$1)){
var c__16916__auto___27920 = cljs.core.chunk_first.call(null,seq__27905_27919__$1);
var G__27921 = cljs.core.chunk_rest.call(null,seq__27905_27919__$1);
var G__27922 = c__16916__auto___27920;
var G__27923 = cljs.core.count.call(null,c__16916__auto___27920);
var G__27924 = (0);
seq__27905_27909 = G__27921;
chunk__27906_27910 = G__27922;
count__27907_27911 = G__27923;
i__27908_27912 = G__27924;
continue;
} else {
var x_27925 = cljs.core.first.call(null,seq__27905_27919__$1);
ret.push(x_27925);

var G__27926 = cljs.core.next.call(null,seq__27905_27919__$1);
var G__27927 = null;
var G__27928 = (0);
var G__27929 = (0);
seq__27905_27909 = G__27926;
chunk__27906_27910 = G__27927;
count__27907_27911 = G__27928;
i__27908_27912 = G__27929;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__16711__auto__,writer__16712__auto__,opt__16713__auto__){
return cljs.core._write.call(null,writer__16712__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__16711__auto__,writer__16712__auto__,opt__16713__auto__){
return cljs.core._write.call(null,writer__16712__auto__,"cognitect.transit/MapHandler");
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
var seq__27930_27934 = cljs.core.seq.call(null,v);
var chunk__27931_27935 = null;
var count__27932_27936 = (0);
var i__27933_27937 = (0);
while(true){
if((i__27933_27937 < count__27932_27936)){
var x_27938 = cljs.core._nth.call(null,chunk__27931_27935,i__27933_27937);
ret.push(x_27938);

var G__27939 = seq__27930_27934;
var G__27940 = chunk__27931_27935;
var G__27941 = count__27932_27936;
var G__27942 = (i__27933_27937 + (1));
seq__27930_27934 = G__27939;
chunk__27931_27935 = G__27940;
count__27932_27936 = G__27941;
i__27933_27937 = G__27942;
continue;
} else {
var temp__4425__auto___27943 = cljs.core.seq.call(null,seq__27930_27934);
if(temp__4425__auto___27943){
var seq__27930_27944__$1 = temp__4425__auto___27943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27930_27944__$1)){
var c__16916__auto___27945 = cljs.core.chunk_first.call(null,seq__27930_27944__$1);
var G__27946 = cljs.core.chunk_rest.call(null,seq__27930_27944__$1);
var G__27947 = c__16916__auto___27945;
var G__27948 = cljs.core.count.call(null,c__16916__auto___27945);
var G__27949 = (0);
seq__27930_27934 = G__27946;
chunk__27931_27935 = G__27947;
count__27932_27936 = G__27948;
i__27933_27937 = G__27949;
continue;
} else {
var x_27950 = cljs.core.first.call(null,seq__27930_27944__$1);
ret.push(x_27950);

var G__27951 = cljs.core.next.call(null,seq__27930_27944__$1);
var G__27952 = null;
var G__27953 = (0);
var G__27954 = (0);
seq__27930_27934 = G__27951;
chunk__27931_27935 = G__27952;
count__27932_27936 = G__27953;
i__27933_27937 = G__27954;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__16711__auto__,writer__16712__auto__,opt__16713__auto__){
return cljs.core._write.call(null,writer__16712__auto__,"cognitect.transit/SetHandler");
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
var seq__27955_27959 = cljs.core.seq.call(null,v);
var chunk__27956_27960 = null;
var count__27957_27961 = (0);
var i__27958_27962 = (0);
while(true){
if((i__27958_27962 < count__27957_27961)){
var x_27963 = cljs.core._nth.call(null,chunk__27956_27960,i__27958_27962);
ret.push(x_27963);

var G__27964 = seq__27955_27959;
var G__27965 = chunk__27956_27960;
var G__27966 = count__27957_27961;
var G__27967 = (i__27958_27962 + (1));
seq__27955_27959 = G__27964;
chunk__27956_27960 = G__27965;
count__27957_27961 = G__27966;
i__27958_27962 = G__27967;
continue;
} else {
var temp__4425__auto___27968 = cljs.core.seq.call(null,seq__27955_27959);
if(temp__4425__auto___27968){
var seq__27955_27969__$1 = temp__4425__auto___27968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27955_27969__$1)){
var c__16916__auto___27970 = cljs.core.chunk_first.call(null,seq__27955_27969__$1);
var G__27971 = cljs.core.chunk_rest.call(null,seq__27955_27969__$1);
var G__27972 = c__16916__auto___27970;
var G__27973 = cljs.core.count.call(null,c__16916__auto___27970);
var G__27974 = (0);
seq__27955_27959 = G__27971;
chunk__27956_27960 = G__27972;
count__27957_27961 = G__27973;
i__27958_27962 = G__27974;
continue;
} else {
var x_27975 = cljs.core.first.call(null,seq__27955_27969__$1);
ret.push(x_27975);

var G__27976 = cljs.core.next.call(null,seq__27955_27969__$1);
var G__27977 = null;
var G__27978 = (0);
var G__27979 = (0);
seq__27955_27959 = G__27976;
chunk__27956_27960 = G__27977;
count__27957_27961 = G__27978;
i__27958_27962 = G__27979;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__16711__auto__,writer__16712__auto__,opt__16713__auto__){
return cljs.core._write.call(null,writer__16712__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__16711__auto__,writer__16712__auto__,opt__16713__auto__){
return cljs.core._write.call(null,writer__16712__auto__,"cognitect.transit/UUIDHandler");
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
var args27980 = [];
var len__17171__auto___27991 = arguments.length;
var i__17172__auto___27992 = (0);
while(true){
if((i__17172__auto___27992 < len__17171__auto___27991)){
args27980.push((arguments[i__17172__auto___27992]));

var G__27993 = (i__17172__auto___27992 + (1));
i__17172__auto___27992 = G__27993;
continue;
} else {
}
break;
}

var G__27982 = args27980.length;
switch (G__27982) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27980.length)].join('')));

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
var G__27983 = obj;
G__27983.push(kfn.call(null,k),vfn.call(null,v));

return G__27983;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x27984 = cljs.core.clone.call(null,handlers);
x27984.forEach = ((function (x27984,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__27985 = cljs.core.seq.call(null,coll);
var chunk__27986 = null;
var count__27987 = (0);
var i__27988 = (0);
while(true){
if((i__27988 < count__27987)){
var vec__27989 = cljs.core._nth.call(null,chunk__27986,i__27988);
var k = cljs.core.nth.call(null,vec__27989,(0),null);
var v = cljs.core.nth.call(null,vec__27989,(1),null);
f.call(null,v,k);

var G__27995 = seq__27985;
var G__27996 = chunk__27986;
var G__27997 = count__27987;
var G__27998 = (i__27988 + (1));
seq__27985 = G__27995;
chunk__27986 = G__27996;
count__27987 = G__27997;
i__27988 = G__27998;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27985);
if(temp__4425__auto__){
var seq__27985__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27985__$1)){
var c__16916__auto__ = cljs.core.chunk_first.call(null,seq__27985__$1);
var G__27999 = cljs.core.chunk_rest.call(null,seq__27985__$1);
var G__28000 = c__16916__auto__;
var G__28001 = cljs.core.count.call(null,c__16916__auto__);
var G__28002 = (0);
seq__27985 = G__27999;
chunk__27986 = G__28000;
count__27987 = G__28001;
i__27988 = G__28002;
continue;
} else {
var vec__27990 = cljs.core.first.call(null,seq__27985__$1);
var k = cljs.core.nth.call(null,vec__27990,(0),null);
var v = cljs.core.nth.call(null,vec__27990,(1),null);
f.call(null,v,k);

var G__28003 = cljs.core.next.call(null,seq__27985__$1);
var G__28004 = null;
var G__28005 = (0);
var G__28006 = (0);
seq__27985 = G__28003;
chunk__27986 = G__28004;
count__27987 = G__28005;
i__27988 = G__28006;
continue;
}
} else {
return null;
}
}
break;
}
});})(x27984,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x27984;
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
var args28007 = [];
var len__17171__auto___28013 = arguments.length;
var i__17172__auto___28014 = (0);
while(true){
if((i__17172__auto___28014 < len__17171__auto___28013)){
args28007.push((arguments[i__17172__auto___28014]));

var G__28015 = (i__17172__auto___28014 + (1));
i__17172__auto___28014 = G__28015;
continue;
} else {
}
break;
}

var G__28009 = args28007.length;
switch (G__28009) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28007.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit28010 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit28010 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta28011){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta28011 = meta28011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit28010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28012,meta28011__$1){
var self__ = this;
var _28012__$1 = this;
return (new cognitect.transit.t_cognitect$transit28010(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta28011__$1));
});

cognitect.transit.t_cognitect$transit28010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28012){
var self__ = this;
var _28012__$1 = this;
return self__.meta28011;
});

cognitect.transit.t_cognitect$transit28010.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit28010.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit28010.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit28010.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit28010.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta28011","meta28011",-1525952474,null)], null);
});

cognitect.transit.t_cognitect$transit28010.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit28010.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit28010";

cognitect.transit.t_cognitect$transit28010.cljs$lang$ctorPrWriter = (function (this__16711__auto__,writer__16712__auto__,opt__16713__auto__){
return cljs.core._write.call(null,writer__16712__auto__,"cognitect.transit/t_cognitect$transit28010");
});

cognitect.transit.__GT_t_cognitect$transit28010 = (function cognitect$transit$__GT_t_cognitect$transit28010(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta28011){
return (new cognitect.transit.t_cognitect$transit28010(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta28011));
});

}

return (new cognitect.transit.t_cognitect$transit28010(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__16113__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__16113__auto__)){
return or__16113__auto__;
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

//# sourceMappingURL=transit.js.map?rel=1448902874052