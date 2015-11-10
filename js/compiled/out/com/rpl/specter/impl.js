// Compiled by ClojureScript 1.7.122 {}
goog.provide('com.rpl.specter.impl');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('clojure.walk');
goog.require('clojure.core.reducers');
goog.require('clojure.string');
com.rpl.specter.impl.spy = (function com$rpl$specter$impl$spy(e){
cljs.core.println.call(null,e);

return e;
});

/**
 * @interface
 */
com.rpl.specter.impl.PathComposer = function(){};

com.rpl.specter.impl.comp_paths_STAR_ = (function com$rpl$specter$impl$comp_paths_STAR_(paths){
if((!((paths == null))) && (!((paths.com$rpl$specter$impl$PathComposer$comp_paths_STAR_$arity$1 == null)))){
return paths.com$rpl$specter$impl$PathComposer$comp_paths_STAR_$arity$1(paths);
} else {
var x__16729__auto__ = (((paths == null))?null:paths);
var m__16730__auto__ = (com.rpl.specter.impl.comp_paths_STAR_[goog.typeOf(x__16729__auto__)]);
if(!((m__16730__auto__ == null))){
return m__16730__auto__.call(null,paths);
} else {
var m__16730__auto____$1 = (com.rpl.specter.impl.comp_paths_STAR_["_"]);
if(!((m__16730__auto____$1 == null))){
return m__16730__auto____$1.call(null,paths);
} else {
throw cljs.core.missing_protocol.call(null,"PathComposer.comp-paths*",paths);
}
}
}
});

com.rpl.specter.impl.throw_illegal = (function com$rpl$specter$impl$throw_illegal(var_args){
var args__17139__auto__ = [];
var len__17132__auto___28030 = arguments.length;
var i__17133__auto___28031 = (0);
while(true){
if((i__17133__auto___28031 < len__17132__auto___28030)){
args__17139__auto__.push((arguments[i__17133__auto___28031]));

var G__28032 = (i__17133__auto___28031 + (1));
i__17133__auto___28031 = G__28032;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((0) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((0)),(0))):null);
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(argseq__17140__auto__);
});

com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,args)));
});

com.rpl.specter.impl.throw_illegal.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.throw_illegal.cljs$lang$applyTo = (function (seq28029){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28029));
});
com.rpl.specter.impl.benchmark = (function com$rpl$specter$impl$benchmark(iters,afn){
var start__17002__auto__ = (new Date()).getTime();
var ret__17003__auto__ = (function (){var n__16977__auto__ = iters;
var _ = (0);
while(true){
if((_ < n__16977__auto__)){
afn.call(null);

var G__28033 = (_ + (1));
_ = G__28033;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.call(null,[cljs.core.str("Elapsed time: "),cljs.core.str(((new Date()).getTime() - start__17002__auto__)),cljs.core.str(" msecs")].join(''));

return ret__17003__auto__;
});

/**
* @constructor
*/
com.rpl.specter.impl.ExecutorFunctions = (function (type,select_executor,transform_executor){
this.type = type;
this.select_executor = select_executor;
this.transform_executor = transform_executor;
})

com.rpl.specter.impl.ExecutorFunctions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"select-executor","select-executor",140452237,null),new cljs.core.Symbol(null,"transform-executor","transform-executor",-31221519,null)], null);
});

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$type = true;

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$ctorStr = "com.rpl.specter.impl/ExecutorFunctions";

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$ctorPrWriter = (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"com.rpl.specter.impl/ExecutorFunctions");
});

com.rpl.specter.impl.__GT_ExecutorFunctions = (function com$rpl$specter$impl$__GT_ExecutorFunctions(type,select_executor,transform_executor){
return (new com.rpl.specter.impl.ExecutorFunctions(type,select_executor,transform_executor));
});

com.rpl.specter.impl.RichPathExecutor = com.rpl.specter.impl.__GT_ExecutorFunctions.call(null,new cljs.core.Keyword(null,"richpath","richpath",-150197948),(function (params,params_idx,selector,structure){
return selector.call(null,params,params_idx,cljs.core.PersistentVector.EMPTY,structure,(function (_,___$1,vals,structure__$1){
if(!(cljs.core.empty_QMARK_.call(null,vals))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,vals,structure__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [structure__$1], null);
}
}));
}),(function (params,params_idx,transformer,transform_fn,structure){
return transformer.call(null,params,params_idx,cljs.core.PersistentVector.EMPTY,structure,(function (_,___$1,vals,structure__$1){
if(cljs.core.empty_QMARK_.call(null,vals)){
return transform_fn.call(null,structure__$1);
} else {
return cljs.core.apply.call(null,transform_fn,cljs.core.conj.call(null,vals,structure__$1));
}
}));
}));
com.rpl.specter.impl.StructurePathExecutor = com.rpl.specter.impl.__GT_ExecutorFunctions.call(null,new cljs.core.Keyword(null,"spath","spath",-1857758005),(function (params,params_idx,selector,structure){
return selector.call(null,structure,(function (structure__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [structure__$1], null);
}));
}),(function (params,params_idx,transformer,transform_fn,structure){
return transformer.call(null,structure,transform_fn);
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.TransformFunctions = (function (executors,selector,transformer,__meta,__extmap,__hash){
this.executors = executors;
this.selector = selector;
this.transformer = transformer;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16688__auto__,k__16689__auto__){
var self__ = this;
var this__16688__auto____$1 = this;
return cljs.core._lookup.call(null,this__16688__auto____$1,k__16689__auto__,null);
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16690__auto__,k28035,else__16691__auto__){
var self__ = this;
var this__16690__auto____$1 = this;
var G__28037 = (((k28035 instanceof cljs.core.Keyword))?k28035.fqn:null);
switch (G__28037) {
case "executors":
return self__.executors;

break;
case "selector":
return self__.selector;

break;
case "transformer":
return self__.transformer;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28035,else__16691__auto__);

}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16702__auto__,writer__16703__auto__,opts__16704__auto__){
var self__ = this;
var this__16702__auto____$1 = this;
var pr_pair__16705__auto__ = ((function (this__16702__auto____$1){
return (function (keyval__16706__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16703__auto__,cljs.core.pr_writer,""," ","",opts__16704__auto__,keyval__16706__auto__);
});})(this__16702__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16703__auto__,pr_pair__16705__auto__,"#com.rpl.specter.impl.TransformFunctions{",", ","}",opts__16704__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"executors","executors",-331073403),self__.executors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null))], null),self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28034){
var self__ = this;
var G__28034__$1 = this;
return (new cljs.core.RecordIter((0),G__28034__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16686__auto__){
var self__ = this;
var this__16686__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16682__auto__){
var self__ = this;
var this__16682__auto____$1 = this;
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16692__auto__){
var self__ = this;
var this__16692__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16683__auto__){
var self__ = this;
var this__16683__auto____$1 = this;
var h__16509__auto__ = self__.__hash;
if(!((h__16509__auto__ == null))){
return h__16509__auto__;
} else {
var h__16509__auto____$1 = cljs.core.hash_imap.call(null,this__16683__auto____$1);
self__.__hash = h__16509__auto____$1;

return h__16509__auto____$1;
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16684__auto__,other__16685__auto__){
var self__ = this;
var this__16684__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16062__auto__ = other__16685__auto__;
if(cljs.core.truth_(and__16062__auto__)){
var and__16062__auto____$1 = (this__16684__auto____$1.constructor === other__16685__auto__.constructor);
if(and__16062__auto____$1){
return cljs.core.equiv_map.call(null,this__16684__auto____$1,other__16685__auto__);
} else {
return and__16062__auto____$1;
}
} else {
return and__16062__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16697__auto__,k__16698__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),null,new cljs.core.Keyword(null,"executors","executors",-331073403),null], null), null),k__16698__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16697__auto____$1),self__.__meta),k__16698__auto__);
} else {
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16698__auto__)),null));
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16695__auto__,k__16696__auto__,G__28034){
var self__ = this;
var this__16695__auto____$1 = this;
var pred__28038 = cljs.core.keyword_identical_QMARK_;
var expr__28039 = k__16696__auto__;
if(cljs.core.truth_(pred__28038.call(null,new cljs.core.Keyword(null,"executors","executors",-331073403),expr__28039))){
return (new com.rpl.specter.impl.TransformFunctions(G__28034,self__.selector,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28038.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),expr__28039))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,G__28034,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28038.call(null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),expr__28039))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,G__28034,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16696__auto__,G__28034),null));
}
}
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16700__auto__){
var self__ = this;
var this__16700__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"executors","executors",-331073403),self__.executors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null))], null),self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16687__auto__,G__28034){
var self__ = this;
var this__16687__auto____$1 = this;
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,G__28034,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16693__auto__,entry__16694__auto__){
var self__ = this;
var this__16693__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16694__auto__)){
return cljs.core._assoc.call(null,this__16693__auto____$1,cljs.core._nth.call(null,entry__16694__auto__,(0)),cljs.core._nth.call(null,entry__16694__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16693__auto____$1,entry__16694__auto__);
}
});

com.rpl.specter.impl.TransformFunctions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executors","executors",1309458124,null),new cljs.core.Symbol(null,"selector","selector",-1891906903,null),new cljs.core.Symbol(null,"transformer","transformer",147060907,null)], null);
});

com.rpl.specter.impl.TransformFunctions.cljs$lang$type = true;

com.rpl.specter.impl.TransformFunctions.cljs$lang$ctorPrSeq = (function (this__16722__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/TransformFunctions");
});

com.rpl.specter.impl.TransformFunctions.cljs$lang$ctorPrWriter = (function (this__16722__auto__,writer__16723__auto__){
return cljs.core._write.call(null,writer__16723__auto__,"com.rpl.specter.impl/TransformFunctions");
});

com.rpl.specter.impl.__GT_TransformFunctions = (function com$rpl$specter$impl$__GT_TransformFunctions(executors,selector,transformer){
return (new com.rpl.specter.impl.TransformFunctions(executors,selector,transformer,null,null,null));
});

com.rpl.specter.impl.map__GT_TransformFunctions = (function com$rpl$specter$impl$map__GT_TransformFunctions(G__28036){
return (new com.rpl.specter.impl.TransformFunctions(new cljs.core.Keyword(null,"executors","executors",-331073403).cljs$core$IFn$_invoke$arity$1(G__28036),new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(G__28036),new cljs.core.Keyword(null,"transformer","transformer",-1493470620).cljs$core$IFn$_invoke$arity$1(G__28036),null,cljs.core.dissoc.call(null,G__28036,new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.CompiledPath = (function (transform_fns,params,params_idx,__meta,__extmap,__hash){
this.transform_fns = transform_fns;
this.params = params;
this.params_idx = params_idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16688__auto__,k__16689__auto__){
var self__ = this;
var this__16688__auto____$1 = this;
return cljs.core._lookup.call(null,this__16688__auto____$1,k__16689__auto__,null);
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16690__auto__,k28043,else__16691__auto__){
var self__ = this;
var this__16690__auto____$1 = this;
var G__28045 = (((k28043 instanceof cljs.core.Keyword))?k28043.fqn:null);
switch (G__28045) {
case "transform-fns":
return self__.transform_fns;

break;
case "params":
return self__.params;

break;
case "params-idx":
return self__.params_idx;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28043,else__16691__auto__);

}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16702__auto__,writer__16703__auto__,opts__16704__auto__){
var self__ = this;
var this__16702__auto____$1 = this;
var pr_pair__16705__auto__ = ((function (this__16702__auto____$1){
return (function (keyval__16706__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16703__auto__,cljs.core.pr_writer,""," ","",opts__16704__auto__,keyval__16706__auto__);
});})(this__16702__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16703__auto__,pr_pair__16705__auto__,"#com.rpl.specter.impl.CompiledPath{",", ","}",opts__16704__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-idx","params-idx",340984624),self__.params_idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28042){
var self__ = this;
var G__28042__$1 = this;
return (new cljs.core.RecordIter((0),G__28042__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16686__auto__){
var self__ = this;
var this__16686__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16682__auto__){
var self__ = this;
var this__16682__auto____$1 = this;
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16692__auto__){
var self__ = this;
var this__16692__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16683__auto__){
var self__ = this;
var this__16683__auto____$1 = this;
var h__16509__auto__ = self__.__hash;
if(!((h__16509__auto__ == null))){
return h__16509__auto__;
} else {
var h__16509__auto____$1 = cljs.core.hash_imap.call(null,this__16683__auto____$1);
self__.__hash = h__16509__auto____$1;

return h__16509__auto____$1;
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16684__auto__,other__16685__auto__){
var self__ = this;
var this__16684__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16062__auto__ = other__16685__auto__;
if(cljs.core.truth_(and__16062__auto__)){
var and__16062__auto____$1 = (this__16684__auto____$1.constructor === other__16685__auto__.constructor);
if(and__16062__auto____$1){
return cljs.core.equiv_map.call(null,this__16684__auto____$1,other__16685__auto__);
} else {
return and__16062__auto____$1;
}
} else {
return and__16062__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16697__auto__,k__16698__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"params-idx","params-idx",340984624),null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),null], null), null),k__16698__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16697__auto____$1),self__.__meta),k__16698__auto__);
} else {
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16698__auto__)),null));
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16695__auto__,k__16696__auto__,G__28042){
var self__ = this;
var this__16695__auto____$1 = this;
var pred__28046 = cljs.core.keyword_identical_QMARK_;
var expr__28047 = k__16696__auto__;
if(cljs.core.truth_(pred__28046.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__28047))){
return (new com.rpl.specter.impl.CompiledPath(G__28042,self__.params,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28046.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__28047))){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,G__28042,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28046.call(null,new cljs.core.Keyword(null,"params-idx","params-idx",340984624),expr__28047))){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,G__28042,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16696__auto__,G__28042),null));
}
}
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16700__auto__){
var self__ = this;
var this__16700__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-idx","params-idx",340984624),self__.params_idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16687__auto__,G__28042){
var self__ = this;
var this__16687__auto____$1 = this;
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,G__28042,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16693__auto__,entry__16694__auto__){
var self__ = this;
var this__16693__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16694__auto__)){
return cljs.core._assoc.call(null,this__16693__auto____$1,cljs.core._nth.call(null,entry__16694__auto__,(0)),cljs.core._nth.call(null,entry__16694__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16693__auto____$1,entry__16694__auto__);
}
});

com.rpl.specter.impl.CompiledPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transform-fns","transform-fns",-1985393120,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"params-idx","params-idx",1981516151,null)], null);
});

com.rpl.specter.impl.CompiledPath.cljs$lang$type = true;

com.rpl.specter.impl.CompiledPath.cljs$lang$ctorPrSeq = (function (this__16722__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/CompiledPath");
});

com.rpl.specter.impl.CompiledPath.cljs$lang$ctorPrWriter = (function (this__16722__auto__,writer__16723__auto__){
return cljs.core._write.call(null,writer__16723__auto__,"com.rpl.specter.impl/CompiledPath");
});

com.rpl.specter.impl.__GT_CompiledPath = (function com$rpl$specter$impl$__GT_CompiledPath(transform_fns,params,params_idx){
return (new com.rpl.specter.impl.CompiledPath(transform_fns,params,params_idx,null,null,null));
});

com.rpl.specter.impl.map__GT_CompiledPath = (function com$rpl$specter$impl$map__GT_CompiledPath(G__28044){
return (new com.rpl.specter.impl.CompiledPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__28044),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__28044),new cljs.core.Keyword(null,"params-idx","params-idx",340984624).cljs$core$IFn$_invoke$arity$1(G__28044),null,cljs.core.dissoc.call(null,G__28044,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)),null));
});

com.rpl.specter.impl.compiled_path_QMARK_ = (function com$rpl$specter$impl$compiled_path_QMARK_(o){
return (o instanceof com.rpl.specter.impl.CompiledPath);
});
com.rpl.specter.impl.no_params_compiled_path = (function com$rpl$specter$impl$no_params_compiled_path(transform_fns){
return com.rpl.specter.impl.__GT_CompiledPath.call(null,transform_fns,null,(0));
});
com.rpl.specter.impl.bind_params_STAR_;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.ParamsNeededPath = (function (transform_fns,num_needed_params,__meta,__extmap,__hash){
this.transform_fns = transform_fns;
this.num_needed_params = num_needed_params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16688__auto__,k__16689__auto__){
var self__ = this;
var this__16688__auto____$1 = this;
return cljs.core._lookup.call(null,this__16688__auto____$1,k__16689__auto__,null);
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16690__auto__,k28262,else__16691__auto__){
var self__ = this;
var this__16690__auto____$1 = this;
var G__28265 = (((k28262 instanceof cljs.core.Keyword))?k28262.fqn:null);
switch (G__28265) {
case "transform-fns":
return self__.transform_fns;

break;
case "num-needed-params":
return self__.num_needed_params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28262,else__16691__auto__);

}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16702__auto__,writer__16703__auto__,opts__16704__auto__){
var self__ = this;
var this__16702__auto____$1 = this;
var pr_pair__16705__auto__ = ((function (this__16702__auto____$1){
return (function (keyval__16706__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16703__auto__,cljs.core.pr_writer,""," ","",opts__16704__auto__,keyval__16706__auto__);
});})(this__16702__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16703__auto__,pr_pair__16705__auto__,"#com.rpl.specter.impl.ParamsNeededPath{",", ","}",opts__16704__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),self__.num_needed_params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28261){
var self__ = this;
var G__28261__$1 = this;
return (new cljs.core.RecordIter((0),G__28261__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.call = (function() {
var G__28270 = null;
var G__28270__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this__20066__auto__ = self____$1;
var array28050 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});
var G__28270__2 = (function (self__,G__28051){
var self__ = this;
var self____$1 = this;
var this__20066__auto__ = self____$1;
var array28050 = cljs.core.object_array.call(null,(1));
(array28050[(0)] = G__28051);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});
var G__28270__3 = (function (self__,G__28052,G__28053){
var self__ = this;
var self____$1 = this;
var this__20066__auto__ = self____$1;
var array28050 = cljs.core.object_array.call(null,(2));
(array28050[(0)] = G__28052);

(array28050[(1)] = G__28053);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});
var G__28270__4 = (function (self__,G__28054,G__28055,G__28056){
var self__ = this;
var self____$1 = this;
var this__20066__auto__ = self____$1;
var array28050 = cljs.core.object_array.call(null,(3));
(array28050[(0)] = G__28054);

(array28050[(1)] = G__28055);

(array28050[(2)] = G__28056);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});
var G__28270__5 = (function (self__,G__28057,G__28058,G__28059,G__28060){
var self__ = this;
var self____$1 = this;
var this__20066__auto__ = self____$1;
var array28050 = cljs.core.object_array.call(null,(4));
(array28050[(0)] = G__28057);

(array28050[(1)] = G__28058);

(array28050[(2)] = G__28059);

(array28050[(3)] = G__28060);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});
var G__28270__6 = (function (self__,G__28061,G__28062,G__28063,G__28064,G__28065){
var self__ = this;
var self____$1 = this;
var this__20066__auto__ = self____$1;
var array28050 = cljs.core.object_array.call(null,(5));
(array28050[(0)] = G__28061);

(array28050[(1)] = G__28062);

(array28050[(2)] = G__28063);

(array28050[(3)] = G__28064);

(array28050[(4)] = G__28065);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});
var G__28270__7 = (function (self__,G__28066,G__28067,G__28068,G__28069,G__28070,G__28071){
var self__ = this;
var self____$1 = this;
var this__20066__auto__ = self____$1;
var array28050 = cljs.core.object_array.call(null,(6));
(array28050[(0)] = G__28066);

(array28050[(1)] = G__28067);

(array28050[(2)] = G__28068);

(array28050[(3)] = G__28069);

(array28050[(4)] = G__28070);

(array28050[(5)] = G__28071);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});
var G__28270__8 = (function (self__,G__28072,G__28073,G__28074,G__28075,G__28076,G__28077,G__28078){
var self__ = this;
var self____$1 = this;
var this__20066__auto__ = self____$1;
var array28050 = cljs.core.object_array.call(null,(7));
(array28050[(0)] = G__28072);

(array28050[(1)] = G__28073);

(array28050[(2)] = G__28074);

(array28050[(3)] = G__28075);

(array28050[(4)] = G__28076);

(array28050[(5)] = G__28077);

(array28050[(6)] = G__28078);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});
var G__28270__9 = (function (self__,G__28079,G__28080,G__28081,G__28082,G__28083,G__28084,G__28085,G__28086){
var self__ = this;
var self____$1 = this;
var this__20066__auto__ = self____$1;
var array28050 = cljs.core.object_array.call(null,(8));
(array28050[(0)] = G__28079);

(array28050[(1)] = G__28080);

(array28050[(2)] = G__28081);

(array28050[(3)] = G__28082);

(array28050[(4)] = G__28083);

(array28050[(5)] = G__28084);

(array28050[(6)] = G__28085);

(array28050[(7)] = G__28086);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});
var G__28270__10 = (function (self__,G__28087,G__28088,G__28089,G__28090,G__28091,G__28092,G__28093,G__28094,G__28095){
var self__ = this;
var self____$1 = this;
var this__20066__auto__ = self____$1;
var array28050 = cljs.core.object_array.call(null,(9));
(array28050[(0)] = G__28087);

(array28050[(1)] = G__28088);

(array28050[(2)] = G__28089);

(array28050[(3)] = G__28090);

(array28050[(4)] = G__28091);

(array28050[(5)] = G__28092);

(array28050[(6)] = G__28093);

(array28050[(7)] = G__28094);

(array28050[(8)] = G__28095);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});
var G__28270__11 = (function (self__,G__28096,G__28097,G__28098,G__28099,G__28100,G__28101,G__28102,G__28103,G__28104,G__28105){
var self__ = this;
var self____$1 = this;
var this__20066__auto__ = self____$1;
var array28050 = cljs.core.object_array.call(null,(10));
(array28050[(0)] = G__28096);

(array28050[(1)] = G__28097);

(array28050[(2)] = G__28098);

(array28050[(3)] = G__28099);

(array28050[(4)] = G__28100);

(array28050[(5)] = G__28101);

(array28050[(6)] = G__28102);

(array28050[(7)] = G__28103);

(array28050[(8)] = G__28104);

(array28050[(9)] = G__28105);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});
var G__28270__12 = (function (self__,G__28106,G__28107,G__28108,G__28109,G__28110,G__28111,G__28112,G__28113,G__28114,G__28115,G__28116){
var self__ = this;
var self____$1 = this;
var this__20066__auto__ = self____$1;
var array28050 = cljs.core.object_array.call(null,(11));
(array28050[(0)] = G__28106);

(array28050[(1)] = G__28107);

(array28050[(2)] = G__28108);

(array28050[(3)] = G__28109);

(array28050[(4)] = G__28110);

(array28050[(5)] = G__28111);

(array28050[(6)] = G__28112);

(array28050[(7)] = G__28113);

(array28050[(8)] = G__28114);

(array28050[(9)] = G__28115);

(array28050[(10)] = G__28116);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});
var G__28270__13 = (function (self__,G__28117,G__28118,G__28119,G__28120,G__28121,G__28122,G__28123,G__28124,G__28125,G__28126,G__28127,G__28128){
var self__ = this;
var self____$1 = this;
var this__20066__auto__ = self____$1;
var array28050 = cljs.core.object_array.call(null,(12));
(array28050[(0)] = G__28117);

(array28050[(1)] = G__28118);

(array28050[(2)] = G__28119);

(array28050[(3)] = G__28120);

(array28050[(4)] = G__28121);

(array28050[(5)] = G__28122);

(array28050[(6)] = G__28123);

(array28050[(7)] = G__28124);

(array28050[(8)] = G__28125);

(array28050[(9)] = G__28126);

(array28050[(10)] = G__28127);

(array28050[(11)] = G__28128);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});
var G__28270__14 = (function (self__,G__28129,G__28130,G__28131,G__28132,G__28133,G__28134,G__28135,G__28136,G__28137,G__28138,G__28139,G__28140,G__28141){
var self__ = this;
var self____$1 = this;
var this__20066__auto__ = self____$1;
var array28050 = cljs.core.object_array.call(null,(13));
(array28050[(0)] = G__28129);

(array28050[(1)] = G__28130);

(array28050[(2)] = G__28131);

(array28050[(3)] = G__28132);

(array28050[(4)] = G__28133);

(array28050[(5)] = G__28134);

(array28050[(6)] = G__28135);

(array28050[(7)] = G__28136);

(array28050[(8)] = G__28137);

(array28050[(9)] = G__28138);

(array28050[(10)] = G__28139);

(array28050[(11)] = G__28140);

(array28050[(12)] = G__28141);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});
var G__28270__15 = (function (self__,G__28142,G__28143,G__28144,G__28145,G__28146,G__28147,G__28148,G__28149,G__28150,G__28151,G__28152,G__28153,G__28154,G__28155){
var self__ = this;
var self____$1 = this;
var this__20066__auto__ = self____$1;
var array28050 = cljs.core.object_array.call(null,(14));
(array28050[(0)] = G__28142);

(array28050[(1)] = G__28143);

(array28050[(2)] = G__28144);

(array28050[(3)] = G__28145);

(array28050[(4)] = G__28146);

(array28050[(5)] = G__28147);

(array28050[(6)] = G__28148);

(array28050[(7)] = G__28149);

(array28050[(8)] = G__28150);

(array28050[(9)] = G__28151);

(array28050[(10)] = G__28152);

(array28050[(11)] = G__28153);

(array28050[(12)] = G__28154);

(array28050[(13)] = G__28155);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});
var G__28270__16 = (function (self__,G__28156,G__28157,G__28158,G__28159,G__28160,G__28161,G__28162,G__28163,G__28164,G__28165,G__28166,G__28167,G__28168,G__28169,G__28170){
var self__ = this;
var self____$1 = this;
var this__20066__auto__ = self____$1;
var array28050 = cljs.core.object_array.call(null,(15));
(array28050[(0)] = G__28156);

(array28050[(1)] = G__28157);

(array28050[(2)] = G__28158);

(array28050[(3)] = G__28159);

(array28050[(4)] = G__28160);

(array28050[(5)] = G__28161);

(array28050[(6)] = G__28162);

(array28050[(7)] = G__28163);

(array28050[(8)] = G__28164);

(array28050[(9)] = G__28165);

(array28050[(10)] = G__28166);

(array28050[(11)] = G__28167);

(array28050[(12)] = G__28168);

(array28050[(13)] = G__28169);

(array28050[(14)] = G__28170);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});
var G__28270__17 = (function (self__,G__28171,G__28172,G__28173,G__28174,G__28175,G__28176,G__28177,G__28178,G__28179,G__28180,G__28181,G__28182,G__28183,G__28184,G__28185,G__28186){
var self__ = this;
var self____$1 = this;
var this__20066__auto__ = self____$1;
var array28050 = cljs.core.object_array.call(null,(16));
(array28050[(0)] = G__28171);

(array28050[(1)] = G__28172);

(array28050[(2)] = G__28173);

(array28050[(3)] = G__28174);

(array28050[(4)] = G__28175);

(array28050[(5)] = G__28176);

(array28050[(6)] = G__28177);

(array28050[(7)] = G__28178);

(array28050[(8)] = G__28179);

(array28050[(9)] = G__28180);

(array28050[(10)] = G__28181);

(array28050[(11)] = G__28182);

(array28050[(12)] = G__28183);

(array28050[(13)] = G__28184);

(array28050[(14)] = G__28185);

(array28050[(15)] = G__28186);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});
var G__28270__18 = (function (self__,G__28187,G__28188,G__28189,G__28190,G__28191,G__28192,G__28193,G__28194,G__28195,G__28196,G__28197,G__28198,G__28199,G__28200,G__28201,G__28202,G__28203){
var self__ = this;
var self____$1 = this;
var this__20066__auto__ = self____$1;
var array28050 = cljs.core.object_array.call(null,(17));
(array28050[(0)] = G__28187);

(array28050[(1)] = G__28188);

(array28050[(2)] = G__28189);

(array28050[(3)] = G__28190);

(array28050[(4)] = G__28191);

(array28050[(5)] = G__28192);

(array28050[(6)] = G__28193);

(array28050[(7)] = G__28194);

(array28050[(8)] = G__28195);

(array28050[(9)] = G__28196);

(array28050[(10)] = G__28197);

(array28050[(11)] = G__28198);

(array28050[(12)] = G__28199);

(array28050[(13)] = G__28200);

(array28050[(14)] = G__28201);

(array28050[(15)] = G__28202);

(array28050[(16)] = G__28203);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});
var G__28270__19 = (function (self__,G__28204,G__28205,G__28206,G__28207,G__28208,G__28209,G__28210,G__28211,G__28212,G__28213,G__28214,G__28215,G__28216,G__28217,G__28218,G__28219,G__28220,G__28221){
var self__ = this;
var self____$1 = this;
var this__20066__auto__ = self____$1;
var array28050 = cljs.core.object_array.call(null,(18));
(array28050[(0)] = G__28204);

(array28050[(1)] = G__28205);

(array28050[(2)] = G__28206);

(array28050[(3)] = G__28207);

(array28050[(4)] = G__28208);

(array28050[(5)] = G__28209);

(array28050[(6)] = G__28210);

(array28050[(7)] = G__28211);

(array28050[(8)] = G__28212);

(array28050[(9)] = G__28213);

(array28050[(10)] = G__28214);

(array28050[(11)] = G__28215);

(array28050[(12)] = G__28216);

(array28050[(13)] = G__28217);

(array28050[(14)] = G__28218);

(array28050[(15)] = G__28219);

(array28050[(16)] = G__28220);

(array28050[(17)] = G__28221);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});
var G__28270__20 = (function (self__,G__28222,G__28223,G__28224,G__28225,G__28226,G__28227,G__28228,G__28229,G__28230,G__28231,G__28232,G__28233,G__28234,G__28235,G__28236,G__28237,G__28238,G__28239,G__28240){
var self__ = this;
var self____$1 = this;
var this__20066__auto__ = self____$1;
var array28050 = cljs.core.object_array.call(null,(19));
(array28050[(0)] = G__28222);

(array28050[(1)] = G__28223);

(array28050[(2)] = G__28224);

(array28050[(3)] = G__28225);

(array28050[(4)] = G__28226);

(array28050[(5)] = G__28227);

(array28050[(6)] = G__28228);

(array28050[(7)] = G__28229);

(array28050[(8)] = G__28230);

(array28050[(9)] = G__28231);

(array28050[(10)] = G__28232);

(array28050[(11)] = G__28233);

(array28050[(12)] = G__28234);

(array28050[(13)] = G__28235);

(array28050[(14)] = G__28236);

(array28050[(15)] = G__28237);

(array28050[(16)] = G__28238);

(array28050[(17)] = G__28239);

(array28050[(18)] = G__28240);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});
var G__28270__21 = (function (self__,G__28241,G__28242,G__28243,G__28244,G__28245,G__28246,G__28247,G__28248,G__28249,G__28250,G__28251,G__28252,G__28253,G__28254,G__28255,G__28256,G__28257,G__28258,G__28259,G__28260){
var self__ = this;
var self____$1 = this;
var this__20066__auto__ = self____$1;
var array28050 = cljs.core.object_array.call(null,(20));
(array28050[(0)] = G__28241);

(array28050[(1)] = G__28242);

(array28050[(2)] = G__28243);

(array28050[(3)] = G__28244);

(array28050[(4)] = G__28245);

(array28050[(5)] = G__28246);

(array28050[(6)] = G__28247);

(array28050[(7)] = G__28248);

(array28050[(8)] = G__28249);

(array28050[(9)] = G__28250);

(array28050[(10)] = G__28251);

(array28050[(11)] = G__28252);

(array28050[(12)] = G__28253);

(array28050[(13)] = G__28254);

(array28050[(14)] = G__28255);

(array28050[(15)] = G__28256);

(array28050[(16)] = G__28257);

(array28050[(17)] = G__28258);

(array28050[(18)] = G__28259);

(array28050[(19)] = G__28260);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});
var G__28270__22 = (function (self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var a = cljs.core.object_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20], null),rest));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this$,a,(0));
});
G__28270 = function(self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
switch(arguments.length){
case 1:
return G__28270__1.call(this,self__);
case 2:
return G__28270__2.call(this,self__,p01);
case 3:
return G__28270__3.call(this,self__,p01,p02);
case 4:
return G__28270__4.call(this,self__,p01,p02,p03);
case 5:
return G__28270__5.call(this,self__,p01,p02,p03,p04);
case 6:
return G__28270__6.call(this,self__,p01,p02,p03,p04,p05);
case 7:
return G__28270__7.call(this,self__,p01,p02,p03,p04,p05,p06);
case 8:
return G__28270__8.call(this,self__,p01,p02,p03,p04,p05,p06,p07);
case 9:
return G__28270__9.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08);
case 10:
return G__28270__10.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09);
case 11:
return G__28270__11.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10);
case 12:
return G__28270__12.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11);
case 13:
return G__28270__13.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12);
case 14:
return G__28270__14.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13);
case 15:
return G__28270__15.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14);
case 16:
return G__28270__16.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15);
case 17:
return G__28270__17.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16);
case 18:
return G__28270__18.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17);
case 19:
return G__28270__19.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18);
case 20:
return G__28270__20.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19);
case 21:
return G__28270__21.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20);
case 22:
return G__28270__22.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28270.cljs$core$IFn$_invoke$arity$1 = G__28270__1;
G__28270.cljs$core$IFn$_invoke$arity$2 = G__28270__2;
G__28270.cljs$core$IFn$_invoke$arity$3 = G__28270__3;
G__28270.cljs$core$IFn$_invoke$arity$4 = G__28270__4;
G__28270.cljs$core$IFn$_invoke$arity$5 = G__28270__5;
G__28270.cljs$core$IFn$_invoke$arity$6 = G__28270__6;
G__28270.cljs$core$IFn$_invoke$arity$7 = G__28270__7;
G__28270.cljs$core$IFn$_invoke$arity$8 = G__28270__8;
G__28270.cljs$core$IFn$_invoke$arity$9 = G__28270__9;
G__28270.cljs$core$IFn$_invoke$arity$10 = G__28270__10;
G__28270.cljs$core$IFn$_invoke$arity$11 = G__28270__11;
G__28270.cljs$core$IFn$_invoke$arity$12 = G__28270__12;
G__28270.cljs$core$IFn$_invoke$arity$13 = G__28270__13;
G__28270.cljs$core$IFn$_invoke$arity$14 = G__28270__14;
G__28270.cljs$core$IFn$_invoke$arity$15 = G__28270__15;
G__28270.cljs$core$IFn$_invoke$arity$16 = G__28270__16;
G__28270.cljs$core$IFn$_invoke$arity$17 = G__28270__17;
G__28270.cljs$core$IFn$_invoke$arity$18 = G__28270__18;
G__28270.cljs$core$IFn$_invoke$arity$19 = G__28270__19;
G__28270.cljs$core$IFn$_invoke$arity$20 = G__28270__20;
G__28270.cljs$core$IFn$_invoke$arity$21 = G__28270__21;
G__28270.cljs$core$IFn$_invoke$arity$22 = G__28270__22;
return G__28270;
})()
;

com.rpl.specter.impl.ParamsNeededPath.prototype.apply = (function (self__,args28264){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args28264)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this__20066__auto__ = this;
var array28050 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$1 = (function (G__28051){
var self__ = this;
var this__20066__auto__ = this;
var array28050 = cljs.core.object_array.call(null,(1));
(array28050[(0)] = G__28051);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$2 = (function (G__28052,G__28053){
var self__ = this;
var this__20066__auto__ = this;
var array28050 = cljs.core.object_array.call(null,(2));
(array28050[(0)] = G__28052);

(array28050[(1)] = G__28053);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$3 = (function (G__28054,G__28055,G__28056){
var self__ = this;
var this__20066__auto__ = this;
var array28050 = cljs.core.object_array.call(null,(3));
(array28050[(0)] = G__28054);

(array28050[(1)] = G__28055);

(array28050[(2)] = G__28056);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$4 = (function (G__28057,G__28058,G__28059,G__28060){
var self__ = this;
var this__20066__auto__ = this;
var array28050 = cljs.core.object_array.call(null,(4));
(array28050[(0)] = G__28057);

(array28050[(1)] = G__28058);

(array28050[(2)] = G__28059);

(array28050[(3)] = G__28060);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$5 = (function (G__28061,G__28062,G__28063,G__28064,G__28065){
var self__ = this;
var this__20066__auto__ = this;
var array28050 = cljs.core.object_array.call(null,(5));
(array28050[(0)] = G__28061);

(array28050[(1)] = G__28062);

(array28050[(2)] = G__28063);

(array28050[(3)] = G__28064);

(array28050[(4)] = G__28065);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$6 = (function (G__28066,G__28067,G__28068,G__28069,G__28070,G__28071){
var self__ = this;
var this__20066__auto__ = this;
var array28050 = cljs.core.object_array.call(null,(6));
(array28050[(0)] = G__28066);

(array28050[(1)] = G__28067);

(array28050[(2)] = G__28068);

(array28050[(3)] = G__28069);

(array28050[(4)] = G__28070);

(array28050[(5)] = G__28071);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$7 = (function (G__28072,G__28073,G__28074,G__28075,G__28076,G__28077,G__28078){
var self__ = this;
var this__20066__auto__ = this;
var array28050 = cljs.core.object_array.call(null,(7));
(array28050[(0)] = G__28072);

(array28050[(1)] = G__28073);

(array28050[(2)] = G__28074);

(array28050[(3)] = G__28075);

(array28050[(4)] = G__28076);

(array28050[(5)] = G__28077);

(array28050[(6)] = G__28078);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$8 = (function (G__28079,G__28080,G__28081,G__28082,G__28083,G__28084,G__28085,G__28086){
var self__ = this;
var this__20066__auto__ = this;
var array28050 = cljs.core.object_array.call(null,(8));
(array28050[(0)] = G__28079);

(array28050[(1)] = G__28080);

(array28050[(2)] = G__28081);

(array28050[(3)] = G__28082);

(array28050[(4)] = G__28083);

(array28050[(5)] = G__28084);

(array28050[(6)] = G__28085);

(array28050[(7)] = G__28086);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$9 = (function (G__28087,G__28088,G__28089,G__28090,G__28091,G__28092,G__28093,G__28094,G__28095){
var self__ = this;
var this__20066__auto__ = this;
var array28050 = cljs.core.object_array.call(null,(9));
(array28050[(0)] = G__28087);

(array28050[(1)] = G__28088);

(array28050[(2)] = G__28089);

(array28050[(3)] = G__28090);

(array28050[(4)] = G__28091);

(array28050[(5)] = G__28092);

(array28050[(6)] = G__28093);

(array28050[(7)] = G__28094);

(array28050[(8)] = G__28095);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$10 = (function (G__28096,G__28097,G__28098,G__28099,G__28100,G__28101,G__28102,G__28103,G__28104,G__28105){
var self__ = this;
var this__20066__auto__ = this;
var array28050 = cljs.core.object_array.call(null,(10));
(array28050[(0)] = G__28096);

(array28050[(1)] = G__28097);

(array28050[(2)] = G__28098);

(array28050[(3)] = G__28099);

(array28050[(4)] = G__28100);

(array28050[(5)] = G__28101);

(array28050[(6)] = G__28102);

(array28050[(7)] = G__28103);

(array28050[(8)] = G__28104);

(array28050[(9)] = G__28105);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$11 = (function (G__28106,G__28107,G__28108,G__28109,G__28110,G__28111,G__28112,G__28113,G__28114,G__28115,G__28116){
var self__ = this;
var this__20066__auto__ = this;
var array28050 = cljs.core.object_array.call(null,(11));
(array28050[(0)] = G__28106);

(array28050[(1)] = G__28107);

(array28050[(2)] = G__28108);

(array28050[(3)] = G__28109);

(array28050[(4)] = G__28110);

(array28050[(5)] = G__28111);

(array28050[(6)] = G__28112);

(array28050[(7)] = G__28113);

(array28050[(8)] = G__28114);

(array28050[(9)] = G__28115);

(array28050[(10)] = G__28116);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$12 = (function (G__28117,G__28118,G__28119,G__28120,G__28121,G__28122,G__28123,G__28124,G__28125,G__28126,G__28127,G__28128){
var self__ = this;
var this__20066__auto__ = this;
var array28050 = cljs.core.object_array.call(null,(12));
(array28050[(0)] = G__28117);

(array28050[(1)] = G__28118);

(array28050[(2)] = G__28119);

(array28050[(3)] = G__28120);

(array28050[(4)] = G__28121);

(array28050[(5)] = G__28122);

(array28050[(6)] = G__28123);

(array28050[(7)] = G__28124);

(array28050[(8)] = G__28125);

(array28050[(9)] = G__28126);

(array28050[(10)] = G__28127);

(array28050[(11)] = G__28128);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$13 = (function (G__28129,G__28130,G__28131,G__28132,G__28133,G__28134,G__28135,G__28136,G__28137,G__28138,G__28139,G__28140,G__28141){
var self__ = this;
var this__20066__auto__ = this;
var array28050 = cljs.core.object_array.call(null,(13));
(array28050[(0)] = G__28129);

(array28050[(1)] = G__28130);

(array28050[(2)] = G__28131);

(array28050[(3)] = G__28132);

(array28050[(4)] = G__28133);

(array28050[(5)] = G__28134);

(array28050[(6)] = G__28135);

(array28050[(7)] = G__28136);

(array28050[(8)] = G__28137);

(array28050[(9)] = G__28138);

(array28050[(10)] = G__28139);

(array28050[(11)] = G__28140);

(array28050[(12)] = G__28141);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$14 = (function (G__28142,G__28143,G__28144,G__28145,G__28146,G__28147,G__28148,G__28149,G__28150,G__28151,G__28152,G__28153,G__28154,G__28155){
var self__ = this;
var this__20066__auto__ = this;
var array28050 = cljs.core.object_array.call(null,(14));
(array28050[(0)] = G__28142);

(array28050[(1)] = G__28143);

(array28050[(2)] = G__28144);

(array28050[(3)] = G__28145);

(array28050[(4)] = G__28146);

(array28050[(5)] = G__28147);

(array28050[(6)] = G__28148);

(array28050[(7)] = G__28149);

(array28050[(8)] = G__28150);

(array28050[(9)] = G__28151);

(array28050[(10)] = G__28152);

(array28050[(11)] = G__28153);

(array28050[(12)] = G__28154);

(array28050[(13)] = G__28155);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$15 = (function (G__28156,G__28157,G__28158,G__28159,G__28160,G__28161,G__28162,G__28163,G__28164,G__28165,G__28166,G__28167,G__28168,G__28169,G__28170){
var self__ = this;
var this__20066__auto__ = this;
var array28050 = cljs.core.object_array.call(null,(15));
(array28050[(0)] = G__28156);

(array28050[(1)] = G__28157);

(array28050[(2)] = G__28158);

(array28050[(3)] = G__28159);

(array28050[(4)] = G__28160);

(array28050[(5)] = G__28161);

(array28050[(6)] = G__28162);

(array28050[(7)] = G__28163);

(array28050[(8)] = G__28164);

(array28050[(9)] = G__28165);

(array28050[(10)] = G__28166);

(array28050[(11)] = G__28167);

(array28050[(12)] = G__28168);

(array28050[(13)] = G__28169);

(array28050[(14)] = G__28170);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$16 = (function (G__28171,G__28172,G__28173,G__28174,G__28175,G__28176,G__28177,G__28178,G__28179,G__28180,G__28181,G__28182,G__28183,G__28184,G__28185,G__28186){
var self__ = this;
var this__20066__auto__ = this;
var array28050 = cljs.core.object_array.call(null,(16));
(array28050[(0)] = G__28171);

(array28050[(1)] = G__28172);

(array28050[(2)] = G__28173);

(array28050[(3)] = G__28174);

(array28050[(4)] = G__28175);

(array28050[(5)] = G__28176);

(array28050[(6)] = G__28177);

(array28050[(7)] = G__28178);

(array28050[(8)] = G__28179);

(array28050[(9)] = G__28180);

(array28050[(10)] = G__28181);

(array28050[(11)] = G__28182);

(array28050[(12)] = G__28183);

(array28050[(13)] = G__28184);

(array28050[(14)] = G__28185);

(array28050[(15)] = G__28186);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$17 = (function (G__28187,G__28188,G__28189,G__28190,G__28191,G__28192,G__28193,G__28194,G__28195,G__28196,G__28197,G__28198,G__28199,G__28200,G__28201,G__28202,G__28203){
var self__ = this;
var this__20066__auto__ = this;
var array28050 = cljs.core.object_array.call(null,(17));
(array28050[(0)] = G__28187);

(array28050[(1)] = G__28188);

(array28050[(2)] = G__28189);

(array28050[(3)] = G__28190);

(array28050[(4)] = G__28191);

(array28050[(5)] = G__28192);

(array28050[(6)] = G__28193);

(array28050[(7)] = G__28194);

(array28050[(8)] = G__28195);

(array28050[(9)] = G__28196);

(array28050[(10)] = G__28197);

(array28050[(11)] = G__28198);

(array28050[(12)] = G__28199);

(array28050[(13)] = G__28200);

(array28050[(14)] = G__28201);

(array28050[(15)] = G__28202);

(array28050[(16)] = G__28203);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$18 = (function (G__28204,G__28205,G__28206,G__28207,G__28208,G__28209,G__28210,G__28211,G__28212,G__28213,G__28214,G__28215,G__28216,G__28217,G__28218,G__28219,G__28220,G__28221){
var self__ = this;
var this__20066__auto__ = this;
var array28050 = cljs.core.object_array.call(null,(18));
(array28050[(0)] = G__28204);

(array28050[(1)] = G__28205);

(array28050[(2)] = G__28206);

(array28050[(3)] = G__28207);

(array28050[(4)] = G__28208);

(array28050[(5)] = G__28209);

(array28050[(6)] = G__28210);

(array28050[(7)] = G__28211);

(array28050[(8)] = G__28212);

(array28050[(9)] = G__28213);

(array28050[(10)] = G__28214);

(array28050[(11)] = G__28215);

(array28050[(12)] = G__28216);

(array28050[(13)] = G__28217);

(array28050[(14)] = G__28218);

(array28050[(15)] = G__28219);

(array28050[(16)] = G__28220);

(array28050[(17)] = G__28221);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$19 = (function (G__28222,G__28223,G__28224,G__28225,G__28226,G__28227,G__28228,G__28229,G__28230,G__28231,G__28232,G__28233,G__28234,G__28235,G__28236,G__28237,G__28238,G__28239,G__28240){
var self__ = this;
var this__20066__auto__ = this;
var array28050 = cljs.core.object_array.call(null,(19));
(array28050[(0)] = G__28222);

(array28050[(1)] = G__28223);

(array28050[(2)] = G__28224);

(array28050[(3)] = G__28225);

(array28050[(4)] = G__28226);

(array28050[(5)] = G__28227);

(array28050[(6)] = G__28228);

(array28050[(7)] = G__28229);

(array28050[(8)] = G__28230);

(array28050[(9)] = G__28231);

(array28050[(10)] = G__28232);

(array28050[(11)] = G__28233);

(array28050[(12)] = G__28234);

(array28050[(13)] = G__28235);

(array28050[(14)] = G__28236);

(array28050[(15)] = G__28237);

(array28050[(16)] = G__28238);

(array28050[(17)] = G__28239);

(array28050[(18)] = G__28240);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$20 = (function (G__28241,G__28242,G__28243,G__28244,G__28245,G__28246,G__28247,G__28248,G__28249,G__28250,G__28251,G__28252,G__28253,G__28254,G__28255,G__28256,G__28257,G__28258,G__28259,G__28260){
var self__ = this;
var this__20066__auto__ = this;
var array28050 = cljs.core.object_array.call(null,(20));
(array28050[(0)] = G__28241);

(array28050[(1)] = G__28242);

(array28050[(2)] = G__28243);

(array28050[(3)] = G__28244);

(array28050[(4)] = G__28245);

(array28050[(5)] = G__28246);

(array28050[(6)] = G__28247);

(array28050[(7)] = G__28248);

(array28050[(8)] = G__28249);

(array28050[(9)] = G__28250);

(array28050[(10)] = G__28251);

(array28050[(11)] = G__28252);

(array28050[(12)] = G__28253);

(array28050[(13)] = G__28254);

(array28050[(14)] = G__28255);

(array28050[(15)] = G__28256);

(array28050[(16)] = G__28257);

(array28050[(17)] = G__28258);

(array28050[(18)] = G__28259);

(array28050[(19)] = G__28260);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20066__auto__,array28050,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$21 = (function (p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
var self__ = this;
var this$ = this;
var a = cljs.core.object_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20], null),rest));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this$,a,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16686__auto__){
var self__ = this;
var this__16686__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16682__auto__){
var self__ = this;
var this__16682__auto____$1 = this;
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16692__auto__){
var self__ = this;
var this__16692__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16683__auto__){
var self__ = this;
var this__16683__auto____$1 = this;
var h__16509__auto__ = self__.__hash;
if(!((h__16509__auto__ == null))){
return h__16509__auto__;
} else {
var h__16509__auto____$1 = cljs.core.hash_imap.call(null,this__16683__auto____$1);
self__.__hash = h__16509__auto____$1;

return h__16509__auto____$1;
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16684__auto__,other__16685__auto__){
var self__ = this;
var this__16684__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16062__auto__ = other__16685__auto__;
if(cljs.core.truth_(and__16062__auto__)){
var and__16062__auto____$1 = (this__16684__auto____$1.constructor === other__16685__auto__.constructor);
if(and__16062__auto____$1){
return cljs.core.equiv_map.call(null,this__16684__auto____$1,other__16685__auto__);
} else {
return and__16062__auto____$1;
}
} else {
return and__16062__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16697__auto__,k__16698__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),null], null), null),k__16698__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16697__auto____$1),self__.__meta),k__16698__auto__);
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16698__auto__)),null));
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16695__auto__,k__16696__auto__,G__28261){
var self__ = this;
var this__16695__auto____$1 = this;
var pred__28266 = cljs.core.keyword_identical_QMARK_;
var expr__28267 = k__16696__auto__;
if(cljs.core.truth_(pred__28266.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__28267))){
return (new com.rpl.specter.impl.ParamsNeededPath(G__28261,self__.num_needed_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28266.call(null,new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),expr__28267))){
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,G__28261,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16696__auto__,G__28261),null));
}
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16700__auto__){
var self__ = this;
var this__16700__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),self__.num_needed_params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16687__auto__,G__28261){
var self__ = this;
var this__16687__auto____$1 = this;
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,G__28261,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16693__auto__,entry__16694__auto__){
var self__ = this;
var this__16693__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16694__auto__)){
return cljs.core._assoc.call(null,this__16693__auto____$1,cljs.core._nth.call(null,entry__16694__auto__,(0)),cljs.core._nth.call(null,entry__16694__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16693__auto____$1,entry__16694__auto__);
}
});

com.rpl.specter.impl.ParamsNeededPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transform-fns","transform-fns",-1985393120,null),new cljs.core.Symbol(null,"num-needed-params","num-needed-params",421205430,null)], null);
});

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$type = true;

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$ctorPrSeq = (function (this__16722__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/ParamsNeededPath");
});

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$ctorPrWriter = (function (this__16722__auto__,writer__16723__auto__){
return cljs.core._write.call(null,writer__16723__auto__,"com.rpl.specter.impl/ParamsNeededPath");
});

com.rpl.specter.impl.__GT_ParamsNeededPath = (function com$rpl$specter$impl$__GT_ParamsNeededPath(transform_fns,num_needed_params){
return (new com.rpl.specter.impl.ParamsNeededPath(transform_fns,num_needed_params,null,null,null));
});

com.rpl.specter.impl.map__GT_ParamsNeededPath = (function com$rpl$specter$impl$map__GT_ParamsNeededPath(G__28263){
return (new com.rpl.specter.impl.ParamsNeededPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__28263),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097).cljs$core$IFn$_invoke$arity$1(G__28263),null,cljs.core.dissoc.call(null,G__28263,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)),null));
});

com.rpl.specter.impl.bind_params_STAR_ = (function com$rpl$specter$impl$bind_params_STAR_(params_needed_path,params,idx){
return com.rpl.specter.impl.__GT_CompiledPath.call(null,params_needed_path.transform_fns,params,idx);
});
com.rpl.specter.impl.seq_contains_QMARK_ = (function com$rpl$specter$impl$seq_contains_QMARK_(aseq,val){
return !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core._EQ_,val),aseq)));
});
com.rpl.specter.impl.no_prot_error_str = (function com$rpl$specter$impl$no_prot_error_str(obj){
return [cljs.core.str("Protocol implementation cannot be found for object.\n        Extending Specter protocols should not be done inline in a deftype definition\n        because that prevents Specter from finding the protocol implementations for\n        optimized performance. Instead, you should extend the protocols via an\n        explicit extend-protocol call. \n"),cljs.core.str(obj)].join('');
});
com.rpl.specter.impl.structure_path_impl = (function com$rpl$specter$impl$structure_path_impl(obj){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"select*","select*",-1829914060),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$StructurePath$))?true:false):false))?(function (G__28279,G__28280,G__28281){
return com.rpl.specter.protocols.select_STAR_.call(null,G__28279,G__28280,G__28281);
}):com.rpl.specter.protocols.select_STAR_),new cljs.core.Keyword(null,"transform*","transform*",-1613794522),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$StructurePath$))?true:false):false))?(function (G__28283,G__28284,G__28285){
return com.rpl.specter.protocols.transform_STAR_.call(null,G__28283,G__28284,G__28285);
}):com.rpl.specter.protocols.transform_STAR_)], null);
});
com.rpl.specter.impl.collector_impl = (function com$rpl$specter$impl$collector_impl(obj){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collect-val","collect-val",801894069),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$Collector$))?true:false):false))?(function (G__28290,G__28291){
return com.rpl.specter.protocols.collect_val.call(null,G__28290,G__28291);
}):com.rpl.specter.protocols.collect_val)], null);
});
com.rpl.specter.impl.coerce_collector = (function com$rpl$specter$impl$coerce_collector(this$){
var cfn = new cljs.core.Keyword(null,"collect-val","collect-val",801894069).cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.collector_impl.call(null,this$));
var afn = ((function (cfn){
return (function (params,params_idx,vals,structure,next_fn){
return next_fn.call(null,params,params_idx,cljs.core.conj.call(null,vals,cfn.call(null,this$,structure)),structure);
});})(cfn))
;
return com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,afn,afn));
});
com.rpl.specter.impl.coerce_structure_path = (function com$rpl$specter$impl$coerce_structure_path(this$){
var pimpl = com.rpl.specter.impl.structure_path_impl.call(null,this$);
var selector = new cljs.core.Keyword(null,"select*","select*",-1829914060).cljs$core$IFn$_invoke$arity$1(pimpl);
var transformer = new cljs.core.Keyword(null,"transform*","transform*",-1613794522).cljs$core$IFn$_invoke$arity$1(pimpl);
return com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.StructurePathExecutor,((function (pimpl,selector,transformer){
return (function (structure,next_fn){
return selector.call(null,this$,structure,next_fn);
});})(pimpl,selector,transformer))
,((function (pimpl,selector,transformer){
return (function (structure,next_fn){
return transformer.call(null,this$,structure,next_fn);
});})(pimpl,selector,transformer))
));
});
com.rpl.specter.impl.coerce_structure_path_rich = (function com$rpl$specter$impl$coerce_structure_path_rich(this$){
var pimpl = com.rpl.specter.impl.structure_path_impl.call(null,this$);
var selector = new cljs.core.Keyword(null,"select*","select*",-1829914060).cljs$core$IFn$_invoke$arity$1(pimpl);
var transformer = new cljs.core.Keyword(null,"transform*","transform*",-1613794522).cljs$core$IFn$_invoke$arity$1(pimpl);
return com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (pimpl,selector,transformer){
return (function (params,params_idx,vals,structure,next_fn){
return selector.call(null,this$,structure,((function (pimpl,selector,transformer){
return (function (structure__$1){
return next_fn.call(null,params,params_idx,vals,structure__$1);
});})(pimpl,selector,transformer))
);
});})(pimpl,selector,transformer))
,((function (pimpl,selector,transformer){
return (function (params,params_idx,vals,structure,next_fn){
return transformer.call(null,this$,structure,((function (pimpl,selector,transformer){
return (function (structure__$1){
return next_fn.call(null,params,params_idx,vals,structure__$1);
});})(pimpl,selector,transformer))
);
});})(pimpl,selector,transformer))
));
});
com.rpl.specter.impl.structure_path_QMARK_ = (function com$rpl$specter$impl$structure_path_QMARK_(obj){
var or__16074__auto__ = cljs.core.fn_QMARK_.call(null,obj);
if(or__16074__auto__){
return or__16074__auto__;
} else {
if(!((obj == null))){
if((false) || (obj.com$rpl$specter$protocols$StructurePath$)){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.StructurePath,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.StructurePath,obj);
}
}
});

/**
 * @interface
 */
com.rpl.specter.impl.CoercePath = function(){};

com.rpl.specter.impl.coerce_path = (function com$rpl$specter$impl$coerce_path(this$){
if((!((this$ == null))) && (!((this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 == null)))){
return this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1(this$);
} else {
var x__16729__auto__ = (((this$ == null))?null:this$);
var m__16730__auto__ = (com.rpl.specter.impl.coerce_path[goog.typeOf(x__16729__auto__)]);
if(!((m__16730__auto__ == null))){
return m__16730__auto__.call(null,this$);
} else {
var m__16730__auto____$1 = (com.rpl.specter.impl.coerce_path["_"]);
if(!((m__16730__auto____$1 == null))){
return m__16730__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"CoercePath.coerce-path",this$);
}
}
}
});

(com.rpl.specter.impl.CoercePath["null"] = true);

(com.rpl.specter.impl.coerce_path["null"] = (function (this$){
return com.rpl.specter.impl.coerce_structure_path.call(null,null);
}));

com.rpl.specter.impl.CompiledPath.prototype.com$rpl$specter$impl$CoercePath$ = true;

com.rpl.specter.impl.CompiledPath.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

com.rpl.specter.impl.ParamsNeededPath.prototype.com$rpl$specter$impl$CoercePath$ = true;

com.rpl.specter.impl.ParamsNeededPath.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.comp_paths_STAR_.call(null,this$__$1);
});

cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

(com.rpl.specter.impl.CoercePath["_"] = true);

(com.rpl.specter.impl.coerce_path["_"] = (function (this$){
if(cljs.core.truth_(com.rpl.specter.impl.structure_path_QMARK_.call(null,this$))){
return com.rpl.specter.impl.coerce_structure_path.call(null,this$);
} else {
if(((!((this$ == null)))?(((false) || (this$.com$rpl$specter$protocols$Collector$))?true:(((!this$.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.Collector,this$):false)):cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.Collector,this$))){
return com.rpl.specter.impl.coerce_collector.call(null,this$);
} else {
return com.rpl.specter.impl.throw_illegal.call(null,com.rpl.specter.impl.no_prot_error_str.call(null,this$));

}
}
}));
com.rpl.specter.impl.extype = (function com$rpl$specter$impl$extype(f){
var exs = f.executors;
return exs.type;
});
com.rpl.specter.impl.combine_same_types = (function com$rpl$specter$impl$combine_same_types(p__28298){
var vec__28300 = p__28298;
var f = cljs.core.nth.call(null,vec__28300,(0),null);
var _ = cljs.core.nthnext.call(null,vec__28300,(1));
var all = vec__28300;
var exs = f.executors;
var t = exs.type;
var combiner = ((cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"richpath","richpath",-150197948)))?((function (exs,t,vec__28300,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__28300,f,_,all){
return (function (params,params_idx,vals,structure,next_fn){
return curr.call(null,params,params_idx,vals,structure,((function (exs,t,vec__28300,f,_,all){
return (function (params_next,params_idx_next,vals_next,structure_next){
return next.call(null,params_next,params_idx_next,vals_next,structure_next,next_fn);
});})(exs,t,vec__28300,f,_,all))
);
});
;})(exs,t,vec__28300,f,_,all))
});})(exs,t,vec__28300,f,_,all))
:((function (exs,t,vec__28300,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__28300,f,_,all){
return (function (structure,next_fn){
return curr.call(null,structure,((function (exs,t,vec__28300,f,_,all){
return (function (structure__$1){
return next.call(null,structure__$1,next_fn);
});})(exs,t,vec__28300,f,_,all))
);
});
;})(exs,t,vec__28300,f,_,all))
});})(exs,t,vec__28300,f,_,all))
);
return cljs.core.reduce.call(null,((function (exs,t,combiner,vec__28300,f,_,all){
return (function (curr,next){
return com.rpl.specter.impl.__GT_TransformFunctions.call(null,exs,combiner.call(null,curr.selector,next.selector),combiner.call(null,curr.transformer,next.transformer));
});})(exs,t,combiner,vec__28300,f,_,all))
,all);
});
com.rpl.specter.impl.coerce_tfns_rich = (function com$rpl$specter$impl$coerce_tfns_rich(tfns){
if(cljs.core._EQ_.call(null,com.rpl.specter.impl.extype.call(null,tfns),new cljs.core.Keyword(null,"richpath","richpath",-150197948))){
return tfns;
} else {
var selector = tfns.selector;
var transformer = tfns.transformer;
return com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (selector,transformer){
return (function (params,params_idx,vals,structure,next_fn){
return selector.call(null,structure,((function (selector,transformer){
return (function (structure__$1){
return next_fn.call(null,params,params_idx,vals,structure__$1);
});})(selector,transformer))
);
});})(selector,transformer))
,((function (selector,transformer){
return (function (params,params_idx,vals,structure,next_fn){
return transformer.call(null,structure,((function (selector,transformer){
return (function (structure__$1){
return next_fn.call(null,params,params_idx,vals,structure__$1);
});})(selector,transformer))
);
});})(selector,transformer))
);
}
});
com.rpl.specter.impl.capture_params_internally = (function com$rpl$specter$impl$capture_params_internally(path){
if(!((path instanceof com.rpl.specter.impl.CompiledPath))){
return path;
} else {
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(path);
var params_idx = new cljs.core.Keyword(null,"params-idx","params-idx",340984624).cljs$core$IFn$_invoke$arity$1(path);
var selector = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(path));
var transformer = new cljs.core.Keyword(null,"transformer","transformer",-1493470620).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(path));
if(cljs.core.empty_QMARK_.call(null,params)){
return path;
} else {
return com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (params,params_idx,selector,transformer){
return (function (x_params,x_params_idx,vals,structure,next_fn){
return selector.call(null,params,params_idx,vals,structure,((function (params,params_idx,selector,transformer){
return (function (_,___$1,vals_next,structure_next){
return next_fn.call(null,x_params,x_params_idx,vals_next,structure_next);
});})(params,params_idx,selector,transformer))
);
});})(params,params_idx,selector,transformer))
,((function (params,params_idx,selector,transformer){
return (function (x_params,x_params_idx,vals,structure,next_fn){
return transformer.call(null,params,params_idx,vals,structure,((function (params,params_idx,selector,transformer){
return (function (_,___$1,vals_next,structure_next){
return next_fn.call(null,x_params,x_params_idx,vals_next,structure_next);
});})(params,params_idx,selector,transformer))
);
});})(params,params_idx,selector,transformer))
));
}
}
});
(com.rpl.specter.impl.PathComposer["null"] = true);

(com.rpl.specter.impl.comp_paths_STAR_["null"] = (function (sp){
return com.rpl.specter.impl.coerce_path.call(null,sp);
}));

(com.rpl.specter.impl.PathComposer["_"] = true);

(com.rpl.specter.impl.comp_paths_STAR_["_"] = (function (sp){
return com.rpl.specter.impl.coerce_path.call(null,sp);
}));

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$ = true;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$comp_paths_STAR_$arity$1 = (function (structure_paths){
var structure_paths__$1 = this;
if(cljs.core.empty_QMARK_.call(null,structure_paths__$1)){
return com.rpl.specter.impl.coerce_path.call(null,null);
} else {
var coerced = cljs.core.map.call(null,com.rpl.specter.impl.capture_params_internally,cljs.core.map.call(null,com.rpl.specter.impl.coerce_path,structure_paths__$1));
var combined = cljs.core.map.call(null,com.rpl.specter.impl.combine_same_types,cljs.core.partition_by.call(null,com.rpl.specter.impl.extype,cljs.core.map.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),coerced)));
var result_tfn = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,combined)))?cljs.core.first.call(null,combined):com.rpl.specter.impl.combine_same_types.call(null,cljs.core.map.call(null,com.rpl.specter.impl.coerce_tfns_rich,combined)));
var needs_params_paths = cljs.core.filter.call(null,((function (coerced,combined,result_tfn,structure_paths__$1){
return (function (p1__28301_SHARP_){
return (p1__28301_SHARP_ instanceof com.rpl.specter.impl.ParamsNeededPath);
});})(coerced,combined,result_tfn,structure_paths__$1))
,coerced);
if(cljs.core.empty_QMARK_.call(null,needs_params_paths)){
return com.rpl.specter.impl.no_params_compiled_path.call(null,result_tfn);
} else {
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.coerce_tfns_rich.call(null,result_tfn),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),needs_params_paths)));
}
}
});
com.rpl.specter.impl.num_needed_params = (function com$rpl$specter$impl$num_needed_params(path){
if((path instanceof com.rpl.specter.impl.CompiledPath)){
return (0);
} else {
return new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097).cljs$core$IFn$_invoke$arity$1(path);
}
});

/**
 * @interface
 */
com.rpl.specter.impl.PMutableCell = function(){};

com.rpl.specter.impl.set_cell = (function com$rpl$specter$impl$set_cell(cell,x){
if((!((cell == null))) && (!((cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 == null)))){
return cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2(cell,x);
} else {
var x__16729__auto__ = (((cell == null))?null:cell);
var m__16730__auto__ = (com.rpl.specter.impl.set_cell[goog.typeOf(x__16729__auto__)]);
if(!((m__16730__auto__ == null))){
return m__16730__auto__.call(null,cell,x);
} else {
var m__16730__auto____$1 = (com.rpl.specter.impl.set_cell["_"]);
if(!((m__16730__auto____$1 == null))){
return m__16730__auto____$1.call(null,cell,x);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableCell.set_cell",cell);
}
}
}
});


/**
* @constructor
 * @implements {com.rpl.specter.impl.PMutableCell}
*/
com.rpl.specter.impl.MutableCell = (function (q){
this.q = q;
})
com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$ = true;

com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return self__.q = x;
});

com.rpl.specter.impl.MutableCell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"q","q",-1965434072,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null))], null);
});

com.rpl.specter.impl.MutableCell.cljs$lang$type = true;

com.rpl.specter.impl.MutableCell.cljs$lang$ctorStr = "com.rpl.specter.impl/MutableCell";

com.rpl.specter.impl.MutableCell.cljs$lang$ctorPrWriter = (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"com.rpl.specter.impl/MutableCell");
});

com.rpl.specter.impl.__GT_MutableCell = (function com$rpl$specter$impl$__GT_MutableCell(q){
return (new com.rpl.specter.impl.MutableCell(q));
});

com.rpl.specter.impl.mutable_cell = (function com$rpl$specter$impl$mutable_cell(var_args){
var args28302 = [];
var len__17132__auto___28305 = arguments.length;
var i__17133__auto___28306 = (0);
while(true){
if((i__17133__auto___28306 < len__17132__auto___28305)){
args28302.push((arguments[i__17133__auto___28306]));

var G__28307 = (i__17133__auto___28306 + (1));
i__17133__auto___28306 = G__28307;
continue;
} else {
}
break;
}

var G__28304 = args28302.length;
switch (G__28304) {
case 0:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28302.length)].join('')));

}
});

com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.mutable_cell.call(null,null);
});

com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1 = (function (init){
return (new com.rpl.specter.impl.MutableCell(init));
});

com.rpl.specter.impl.mutable_cell.cljs$lang$maxFixedArity = 1;
com.rpl.specter.impl.set_cell_BANG_ = (function com$rpl$specter$impl$set_cell_BANG_(cell,val){
return com.rpl.specter.impl.set_cell.call(null,cell,val);
});
com.rpl.specter.impl.get_cell = (function com$rpl$specter$impl$get_cell(cell){
return cell.q;
});
com.rpl.specter.impl.update_cell_BANG_ = (function com$rpl$specter$impl$update_cell_BANG_(cell,afn){
var ret = afn.call(null,com.rpl.specter.impl.get_cell.call(null,cell));
com.rpl.specter.impl.set_cell_BANG_.call(null,cell,ret);

return ret;
});
com.rpl.specter.impl.append = (function com$rpl$specter$impl$append(coll,elem){
return cljs.core.conj.call(null,cljs.core.vec.call(null,coll),elem);
});

/**
 * @interface
 */
com.rpl.specter.impl.SetExtremes = function(){};

com.rpl.specter.impl.set_first = (function com$rpl$specter$impl$set_first(s,val){
if((!((s == null))) && (!((s.com$rpl$specter$impl$SetExtremes$set_first$arity$2 == null)))){
return s.com$rpl$specter$impl$SetExtremes$set_first$arity$2(s,val);
} else {
var x__16729__auto__ = (((s == null))?null:s);
var m__16730__auto__ = (com.rpl.specter.impl.set_first[goog.typeOf(x__16729__auto__)]);
if(!((m__16730__auto__ == null))){
return m__16730__auto__.call(null,s,val);
} else {
var m__16730__auto____$1 = (com.rpl.specter.impl.set_first["_"]);
if(!((m__16730__auto____$1 == null))){
return m__16730__auto____$1.call(null,s,val);
} else {
throw cljs.core.missing_protocol.call(null,"SetExtremes.set-first",s);
}
}
}
});

com.rpl.specter.impl.set_last = (function com$rpl$specter$impl$set_last(s,val){
if((!((s == null))) && (!((s.com$rpl$specter$impl$SetExtremes$set_last$arity$2 == null)))){
return s.com$rpl$specter$impl$SetExtremes$set_last$arity$2(s,val);
} else {
var x__16729__auto__ = (((s == null))?null:s);
var m__16730__auto__ = (com.rpl.specter.impl.set_last[goog.typeOf(x__16729__auto__)]);
if(!((m__16730__auto__ == null))){
return m__16730__auto__.call(null,s,val);
} else {
var m__16730__auto____$1 = (com.rpl.specter.impl.set_last["_"]);
if(!((m__16730__auto____$1 == null))){
return m__16730__auto____$1.call(null,s,val);
} else {
throw cljs.core.missing_protocol.call(null,"SetExtremes.set-last",s);
}
}
}
});

com.rpl.specter.impl.set_first_list = (function com$rpl$specter$impl$set_first_list(l,v){
return cljs.core.cons.call(null,v,cljs.core.rest.call(null,l));
});
com.rpl.specter.impl.set_last_list = (function com$rpl$specter$impl$set_last_list(l,v){
return com.rpl.specter.impl.append.call(null,cljs.core.butlast.call(null,l),v);
});
cljs.core.PersistentVector.prototype.com$rpl$specter$impl$SetExtremes$ = true;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$SetExtremes$set_first$arity$2 = (function (v,val){
var v__$1 = this;
return cljs.core.assoc.call(null,v__$1,(0),val);
});

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$SetExtremes$set_last$arity$2 = (function (v,val){
var v__$1 = this;
return cljs.core.assoc.call(null,v__$1,(cljs.core.count.call(null,v__$1) - (1)),val);
});

(com.rpl.specter.impl.SetExtremes["_"] = true);

(com.rpl.specter.impl.set_first["_"] = (function (l,val){
return com.rpl.specter.impl.set_first_list.call(null,l,val);
}));

(com.rpl.specter.impl.set_last["_"] = (function (l,val){
return com.rpl.specter.impl.set_last_list.call(null,l,val);
}));
com.rpl.specter.impl.walk_until = (function com$rpl$specter$impl$walk_until(pred,on_match_fn,structure){
if(cljs.core.truth_(pred.call(null,structure))){
return on_match_fn.call(null,structure);
} else {
return clojure.walk.walk.call(null,cljs.core.partial.call(null,com$rpl$specter$impl$walk_until,pred,on_match_fn),cljs.core.identity,structure);
}
});
com.rpl.specter.impl.fn_invocation_QMARK_ = (function com$rpl$specter$impl$fn_invocation_QMARK_(f){
return ((f instanceof clojure.lang.Cons)) || ((f instanceof clojure.lang.LazySeq)) || (cljs.core.list_QMARK_.call(null,f));
});
com.rpl.specter.impl.codewalk_until = (function com$rpl$specter$impl$codewalk_until(pred,on_match_fn,structure){
if(cljs.core.truth_(pred.call(null,structure))){
return on_match_fn.call(null,structure);
} else {
var ret = clojure.walk.walk.call(null,cljs.core.partial.call(null,com$rpl$specter$impl$codewalk_until,pred,on_match_fn),cljs.core.identity,structure);
if(cljs.core.truth_((function (){var and__16062__auto__ = com.rpl.specter.impl.fn_invocation_QMARK_.call(null,structure);
if(cljs.core.truth_(and__16062__auto__)){
return com.rpl.specter.impl.fn_invocation_QMARK_.call(null,ret);
} else {
return and__16062__auto__;
}
})())){
return cljs.core.with_meta.call(null,ret,cljs.core.meta.call(null,structure));
} else {
return ret;
}
}
});
com.rpl.specter.impl.conj_all_BANG_ = (function com$rpl$specter$impl$conj_all_BANG_(cell,elems){
return com.rpl.specter.impl.set_cell_BANG_.call(null,cell,cljs.core.concat.call(null,com.rpl.specter.impl.get_cell.call(null,cell),elems));
});
com.rpl.specter.impl.compiled_select_STAR_ = (function com$rpl$specter$impl$compiled_select_STAR_(path,structure){
var tfns = path.transform_fns;
var ex = tfns.executors;
return ex.select_executor.call(null,path.params,path.params_idx,tfns.selector,structure);
});
com.rpl.specter.impl.compiled_transform_STAR_ = (function com$rpl$specter$impl$compiled_transform_STAR_(path,transform_fn,structure){
var tfns = path.transform_fns;
var ex = tfns.executors;
return ex.transform_executor.call(null,path.params,path.params_idx,tfns.transformer,transform_fn,structure);
});
com.rpl.specter.impl.not_selected_QMARK__STAR_ = (function com$rpl$specter$impl$not_selected_QMARK__STAR_(compiled_path,structure){
return cljs.core.empty_QMARK_.call(null,com.rpl.specter.impl.compiled_select_STAR_.call(null,compiled_path,structure));
});
com.rpl.specter.impl.selected_QMARK__STAR_ = (function com$rpl$specter$impl$selected_QMARK__STAR_(compiled_path,structure){
return cljs.core.not.call(null,com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,compiled_path,structure));
});
com.rpl.specter.impl.walk_select = (function com$rpl$specter$impl$walk_select(pred,continue_fn,structure){
var ret = com.rpl.specter.impl.mutable_cell.call(null,cljs.core.PersistentVector.EMPTY);
var walker = ((function (ret){
return (function com$rpl$specter$impl$walk_select_$_this(structure__$1){
if(cljs.core.truth_(pred.call(null,structure__$1))){
return com.rpl.specter.impl.conj_all_BANG_.call(null,ret,continue_fn.call(null,structure__$1));
} else {
return clojure.walk.walk.call(null,com$rpl$specter$impl$walk_select_$_this,cljs.core.identity,structure__$1);
}
});})(ret))
;
walker.call(null,structure);

return com.rpl.specter.impl.get_cell.call(null,ret);
});
com.rpl.specter.impl.filter_PLUS_ancestry = (function com$rpl$specter$impl$filter_PLUS_ancestry(path,aseq){
var aseq__$1 = cljs.core.vec.call(null,aseq);
return cljs.core.reduce.call(null,((function (aseq__$1){
return (function (p__28311,i){
var vec__28312 = p__28311;
var s = cljs.core.nth.call(null,vec__28312,(0),null);
var m = cljs.core.nth.call(null,vec__28312,(1),null);
var orig = vec__28312;
var e = cljs.core.get.call(null,aseq__$1,i);
var pos = cljs.core.count.call(null,s);
if(cljs.core.truth_(com.rpl.specter.impl.selected_QMARK__STAR_.call(null,path,e))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,s,e),cljs.core.assoc.call(null,m,pos,i)], null);
} else {
return orig;
}
});})(aseq__$1))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.range.call(null,cljs.core.count.call(null,aseq__$1)));
});
com.rpl.specter.impl.key_select = (function com$rpl$specter$impl$key_select(akey,structure,next_fn){
return next_fn.call(null,cljs.core.get.call(null,structure,akey));
});
com.rpl.specter.impl.key_transform = (function com$rpl$specter$impl$key_transform(akey,structure,next_fn){
return cljs.core.assoc.call(null,structure,akey,next_fn.call(null,cljs.core.get.call(null,structure,akey)));
});

/**
* @constructor
*/
com.rpl.specter.impl.AllStructurePath = (function (){
})

com.rpl.specter.impl.AllStructurePath.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

com.rpl.specter.impl.AllStructurePath.cljs$lang$type = true;

com.rpl.specter.impl.AllStructurePath.cljs$lang$ctorStr = "com.rpl.specter.impl/AllStructurePath";

com.rpl.specter.impl.AllStructurePath.cljs$lang$ctorPrWriter = (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"com.rpl.specter.impl/AllStructurePath");
});

com.rpl.specter.impl.__GT_AllStructurePath = (function com$rpl$specter$impl$__GT_AllStructurePath(){
return (new com.rpl.specter.impl.AllStructurePath());
});

com.rpl.specter.impl.AllStructurePath.prototype.com$rpl$specter$protocols$StructurePath$ = true;

com.rpl.specter.impl.AllStructurePath.prototype.com$rpl$specter$protocols$StructurePath$select_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,clojure.core.reducers.mapcat.call(null,next_fn,structure));
});

com.rpl.specter.impl.AllStructurePath.prototype.com$rpl$specter$protocols$StructurePath$transform_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
var empty_structure = cljs.core.empty.call(null,structure);
if(cljs.core.list_QMARK_.call(null,empty_structure)){
return cljs.core.doall.call(null,cljs.core.map.call(null,next_fn,structure));
} else {
return cljs.core.into.call(null,empty_structure,clojure.core.reducers.map.call(null,next_fn,structure));
}
});

/**
* @constructor
*/
com.rpl.specter.impl.ValCollect = (function (){
})

com.rpl.specter.impl.ValCollect.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

com.rpl.specter.impl.ValCollect.cljs$lang$type = true;

com.rpl.specter.impl.ValCollect.cljs$lang$ctorStr = "com.rpl.specter.impl/ValCollect";

com.rpl.specter.impl.ValCollect.cljs$lang$ctorPrWriter = (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"com.rpl.specter.impl/ValCollect");
});

com.rpl.specter.impl.__GT_ValCollect = (function com$rpl$specter$impl$__GT_ValCollect(){
return (new com.rpl.specter.impl.ValCollect());
});

com.rpl.specter.impl.ValCollect.prototype.com$rpl$specter$protocols$Collector$ = true;

com.rpl.specter.impl.ValCollect.prototype.com$rpl$specter$protocols$Collector$collect_val$arity$2 = (function (this$,structure){
var this$__$1 = this;
return structure;
});

/**
* @constructor
*/
com.rpl.specter.impl.PosStructurePath = (function (getter,setter){
this.getter = getter;
this.setter = setter;
})

com.rpl.specter.impl.PosStructurePath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"setter","setter",-706080843,null)], null);
});

com.rpl.specter.impl.PosStructurePath.cljs$lang$type = true;

com.rpl.specter.impl.PosStructurePath.cljs$lang$ctorStr = "com.rpl.specter.impl/PosStructurePath";

com.rpl.specter.impl.PosStructurePath.cljs$lang$ctorPrWriter = (function (this__16672__auto__,writer__16673__auto__,opt__16674__auto__){
return cljs.core._write.call(null,writer__16673__auto__,"com.rpl.specter.impl/PosStructurePath");
});

com.rpl.specter.impl.__GT_PosStructurePath = (function com$rpl$specter$impl$__GT_PosStructurePath(getter,setter){
return (new com.rpl.specter.impl.PosStructurePath(getter,setter));
});

com.rpl.specter.impl.PosStructurePath.prototype.com$rpl$specter$protocols$StructurePath$ = true;

com.rpl.specter.impl.PosStructurePath.prototype.com$rpl$specter$protocols$StructurePath$select_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
if(!(cljs.core.empty_QMARK_.call(null,structure))){
return next_fn.call(null,this$__$1.getter.call(null,structure));
} else {
return null;
}
});

com.rpl.specter.impl.PosStructurePath.prototype.com$rpl$specter$protocols$StructurePath$transform_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
if(cljs.core.empty_QMARK_.call(null,structure)){
return structure;
} else {
return this$__$1.setter.call(null,structure,next_fn.call(null,this$__$1.getter.call(null,structure)));
}
});
com.rpl.specter.impl.srange_select = (function com$rpl$specter$impl$srange_select(structure,start,end,next_fn){
return next_fn.call(null,cljs.core.subvec.call(null,cljs.core.vec.call(null,structure),start,end));
});
com.rpl.specter.impl.srange_transform = (function com$rpl$specter$impl$srange_transform(structure,start,end,next_fn){
var structurev = cljs.core.vec.call(null,structure);
var newpart = next_fn.call(null,cljs.core.subvec.call(null,structurev,start,end));
var res = cljs.core.concat.call(null,cljs.core.subvec.call(null,structurev,(0),start),newpart,cljs.core.subvec.call(null,structurev,end,cljs.core.count.call(null,structure)));
if(cljs.core.vector_QMARK_.call(null,structure)){
return cljs.core.vec.call(null,res);
} else {
return res;
}
});
(com.rpl.specter.protocols.StructurePath["null"] = true);

(com.rpl.specter.protocols.select_STAR_["null"] = (function (this$,structure,next_fn){
return next_fn.call(null,structure);
}));

(com.rpl.specter.protocols.transform_STAR_["null"] = (function (this$,structure,next_fn){
return next_fn.call(null,structure);
}));
com.rpl.specter.impl.retrieve_cond_selector = (function com$rpl$specter$impl$retrieve_cond_selector(cond_paths,structure){
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.drop_while.call(null,(function (p__28315){
var vec__28316 = p__28315;
var c_selector = cljs.core.nth.call(null,vec__28316,(0),null);
var _ = cljs.core.nth.call(null,vec__28316,(1),null);
return cljs.core.empty_QMARK_.call(null,com.rpl.specter.impl.compiled_select_STAR_.call(null,c_selector,structure));
}),cljs.core.partition.call(null,(2),cond_paths))));
});
com.rpl.specter.impl.filter_select = (function com$rpl$specter$impl$filter_select(afn,structure,next_fn){
if(cljs.core.truth_(afn.call(null,structure))){
return next_fn.call(null,structure);
} else {
return null;
}
});
com.rpl.specter.impl.filter_transform = (function com$rpl$specter$impl$filter_transform(afn,structure,next_fn){
if(cljs.core.truth_(afn.call(null,structure))){
return next_fn.call(null,structure);
} else {
return structure;
}
});

//# sourceMappingURL=impl.js.map?rel=1447113460209