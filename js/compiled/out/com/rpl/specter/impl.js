// Compiled by ClojureScript 1.7.170 {}
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
var x__17406__auto__ = (((paths == null))?null:paths);
var m__17407__auto__ = (com.rpl.specter.impl.comp_paths_STAR_[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,paths);
} else {
var m__17407__auto____$1 = (com.rpl.specter.impl.comp_paths_STAR_["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,paths);
} else {
throw cljs.core.missing_protocol.call(null,"PathComposer.comp-paths*",paths);
}
}
}
});

com.rpl.specter.impl.throw_illegal = (function com$rpl$specter$impl$throw_illegal(var_args){
var args__17816__auto__ = [];
var len__17809__auto___18576 = arguments.length;
var i__17810__auto___18577 = (0);
while(true){
if((i__17810__auto___18577 < len__17809__auto___18576)){
args__17816__auto__.push((arguments[i__17810__auto___18577]));

var G__18578 = (i__17810__auto___18577 + (1));
i__17810__auto___18577 = G__18578;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,args)));
});

com.rpl.specter.impl.throw_illegal.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.throw_illegal.cljs$lang$applyTo = (function (seq18575){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18575));
});
com.rpl.specter.impl.benchmark = (function com$rpl$specter$impl$benchmark(iters,afn){
var start__17679__auto__ = cljs.core.system_time.call(null);
var ret__17680__auto__ = (function (){var n__17654__auto__ = iters;
var _ = (0);
while(true){
if((_ < n__17654__auto__)){
afn.call(null);

var G__18579 = (_ + (1));
_ = G__18579;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.call(null,[cljs.core.str("Elapsed time: "),cljs.core.str((cljs.core.system_time.call(null) - start__17679__auto__).toFixed((6))),cljs.core.str(" msecs")].join(''));

return ret__17680__auto__;
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

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"com.rpl.specter.impl/ExecutorFunctions");
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
com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17365__auto__,k__17366__auto__){
var self__ = this;
var this__17365__auto____$1 = this;
return cljs.core._lookup.call(null,this__17365__auto____$1,k__17366__auto__,null);
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17367__auto__,k18581,else__17368__auto__){
var self__ = this;
var this__17367__auto____$1 = this;
var G__18583 = (((k18581 instanceof cljs.core.Keyword))?k18581.fqn:null);
switch (G__18583) {
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
return cljs.core.get.call(null,self__.__extmap,k18581,else__17368__auto__);

}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17379__auto__,writer__17380__auto__,opts__17381__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
var pr_pair__17382__auto__ = ((function (this__17379__auto____$1){
return (function (keyval__17383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17380__auto__,cljs.core.pr_writer,""," ","",opts__17381__auto__,keyval__17383__auto__);
});})(this__17379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17380__auto__,pr_pair__17382__auto__,"#com.rpl.specter.impl.TransformFunctions{",", ","}",opts__17381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"executors","executors",-331073403),self__.executors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null))], null),self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18580){
var self__ = this;
var G__18580__$1 = this;
return (new cljs.core.RecordIter((0),G__18580__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17363__auto__){
var self__ = this;
var this__17363__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17359__auto__){
var self__ = this;
var this__17359__auto____$1 = this;
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17369__auto__){
var self__ = this;
var this__17369__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17360__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var h__17186__auto__ = self__.__hash;
if(!((h__17186__auto__ == null))){
return h__17186__auto__;
} else {
var h__17186__auto____$1 = cljs.core.hash_imap.call(null,this__17360__auto____$1);
self__.__hash = h__17186__auto____$1;

return h__17186__auto____$1;
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17361__auto__,other__17362__auto__){
var self__ = this;
var this__17361__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16739__auto__ = other__17362__auto__;
if(cljs.core.truth_(and__16739__auto__)){
var and__16739__auto____$1 = (this__17361__auto____$1.constructor === other__17362__auto__.constructor);
if(and__16739__auto____$1){
return cljs.core.equiv_map.call(null,this__17361__auto____$1,other__17362__auto__);
} else {
return and__16739__auto____$1;
}
} else {
return and__16739__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17374__auto__,k__17375__auto__){
var self__ = this;
var this__17374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),null,new cljs.core.Keyword(null,"executors","executors",-331073403),null], null), null),k__17375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17374__auto____$1),self__.__meta),k__17375__auto__);
} else {
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17375__auto__)),null));
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17372__auto__,k__17373__auto__,G__18580){
var self__ = this;
var this__17372__auto____$1 = this;
var pred__18584 = cljs.core.keyword_identical_QMARK_;
var expr__18585 = k__17373__auto__;
if(cljs.core.truth_(pred__18584.call(null,new cljs.core.Keyword(null,"executors","executors",-331073403),expr__18585))){
return (new com.rpl.specter.impl.TransformFunctions(G__18580,self__.selector,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18584.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),expr__18585))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,G__18580,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18584.call(null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),expr__18585))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,G__18580,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17373__auto__,G__18580),null));
}
}
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17377__auto__){
var self__ = this;
var this__17377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"executors","executors",-331073403),self__.executors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null))], null),self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17364__auto__,G__18580){
var self__ = this;
var this__17364__auto____$1 = this;
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,G__18580,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17370__auto__,entry__17371__auto__){
var self__ = this;
var this__17370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17371__auto__)){
return cljs.core._assoc.call(null,this__17370__auto____$1,cljs.core._nth.call(null,entry__17371__auto__,(0)),cljs.core._nth.call(null,entry__17371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17370__auto____$1,entry__17371__auto__);
}
});

com.rpl.specter.impl.TransformFunctions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executors","executors",1309458124,null),new cljs.core.Symbol(null,"selector","selector",-1891906903,null),new cljs.core.Symbol(null,"transformer","transformer",147060907,null)], null);
});

com.rpl.specter.impl.TransformFunctions.cljs$lang$type = true;

com.rpl.specter.impl.TransformFunctions.cljs$lang$ctorPrSeq = (function (this__17399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/TransformFunctions");
});

com.rpl.specter.impl.TransformFunctions.cljs$lang$ctorPrWriter = (function (this__17399__auto__,writer__17400__auto__){
return cljs.core._write.call(null,writer__17400__auto__,"com.rpl.specter.impl/TransformFunctions");
});

com.rpl.specter.impl.__GT_TransformFunctions = (function com$rpl$specter$impl$__GT_TransformFunctions(executors,selector,transformer){
return (new com.rpl.specter.impl.TransformFunctions(executors,selector,transformer,null,null,null));
});

com.rpl.specter.impl.map__GT_TransformFunctions = (function com$rpl$specter$impl$map__GT_TransformFunctions(G__18582){
return (new com.rpl.specter.impl.TransformFunctions(new cljs.core.Keyword(null,"executors","executors",-331073403).cljs$core$IFn$_invoke$arity$1(G__18582),new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(G__18582),new cljs.core.Keyword(null,"transformer","transformer",-1493470620).cljs$core$IFn$_invoke$arity$1(G__18582),null,cljs.core.dissoc.call(null,G__18582,new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)),null));
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
com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17365__auto__,k__17366__auto__){
var self__ = this;
var this__17365__auto____$1 = this;
return cljs.core._lookup.call(null,this__17365__auto____$1,k__17366__auto__,null);
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17367__auto__,k18589,else__17368__auto__){
var self__ = this;
var this__17367__auto____$1 = this;
var G__18591 = (((k18589 instanceof cljs.core.Keyword))?k18589.fqn:null);
switch (G__18591) {
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
return cljs.core.get.call(null,self__.__extmap,k18589,else__17368__auto__);

}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17379__auto__,writer__17380__auto__,opts__17381__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
var pr_pair__17382__auto__ = ((function (this__17379__auto____$1){
return (function (keyval__17383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17380__auto__,cljs.core.pr_writer,""," ","",opts__17381__auto__,keyval__17383__auto__);
});})(this__17379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17380__auto__,pr_pair__17382__auto__,"#com.rpl.specter.impl.CompiledPath{",", ","}",opts__17381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-idx","params-idx",340984624),self__.params_idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18588){
var self__ = this;
var G__18588__$1 = this;
return (new cljs.core.RecordIter((0),G__18588__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17363__auto__){
var self__ = this;
var this__17363__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17359__auto__){
var self__ = this;
var this__17359__auto____$1 = this;
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17369__auto__){
var self__ = this;
var this__17369__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17360__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var h__17186__auto__ = self__.__hash;
if(!((h__17186__auto__ == null))){
return h__17186__auto__;
} else {
var h__17186__auto____$1 = cljs.core.hash_imap.call(null,this__17360__auto____$1);
self__.__hash = h__17186__auto____$1;

return h__17186__auto____$1;
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17361__auto__,other__17362__auto__){
var self__ = this;
var this__17361__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16739__auto__ = other__17362__auto__;
if(cljs.core.truth_(and__16739__auto__)){
var and__16739__auto____$1 = (this__17361__auto____$1.constructor === other__17362__auto__.constructor);
if(and__16739__auto____$1){
return cljs.core.equiv_map.call(null,this__17361__auto____$1,other__17362__auto__);
} else {
return and__16739__auto____$1;
}
} else {
return and__16739__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17374__auto__,k__17375__auto__){
var self__ = this;
var this__17374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"params-idx","params-idx",340984624),null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),null], null), null),k__17375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17374__auto____$1),self__.__meta),k__17375__auto__);
} else {
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17375__auto__)),null));
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17372__auto__,k__17373__auto__,G__18588){
var self__ = this;
var this__17372__auto____$1 = this;
var pred__18592 = cljs.core.keyword_identical_QMARK_;
var expr__18593 = k__17373__auto__;
if(cljs.core.truth_(pred__18592.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__18593))){
return (new com.rpl.specter.impl.CompiledPath(G__18588,self__.params,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18592.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__18593))){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,G__18588,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18592.call(null,new cljs.core.Keyword(null,"params-idx","params-idx",340984624),expr__18593))){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,G__18588,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17373__auto__,G__18588),null));
}
}
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17377__auto__){
var self__ = this;
var this__17377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-idx","params-idx",340984624),self__.params_idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17364__auto__,G__18588){
var self__ = this;
var this__17364__auto____$1 = this;
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,G__18588,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17370__auto__,entry__17371__auto__){
var self__ = this;
var this__17370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17371__auto__)){
return cljs.core._assoc.call(null,this__17370__auto____$1,cljs.core._nth.call(null,entry__17371__auto__,(0)),cljs.core._nth.call(null,entry__17371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17370__auto____$1,entry__17371__auto__);
}
});

com.rpl.specter.impl.CompiledPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transform-fns","transform-fns",-1985393120,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"params-idx","params-idx",1981516151,null)], null);
});

com.rpl.specter.impl.CompiledPath.cljs$lang$type = true;

com.rpl.specter.impl.CompiledPath.cljs$lang$ctorPrSeq = (function (this__17399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/CompiledPath");
});

com.rpl.specter.impl.CompiledPath.cljs$lang$ctorPrWriter = (function (this__17399__auto__,writer__17400__auto__){
return cljs.core._write.call(null,writer__17400__auto__,"com.rpl.specter.impl/CompiledPath");
});

com.rpl.specter.impl.__GT_CompiledPath = (function com$rpl$specter$impl$__GT_CompiledPath(transform_fns,params,params_idx){
return (new com.rpl.specter.impl.CompiledPath(transform_fns,params,params_idx,null,null,null));
});

com.rpl.specter.impl.map__GT_CompiledPath = (function com$rpl$specter$impl$map__GT_CompiledPath(G__18590){
return (new com.rpl.specter.impl.CompiledPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__18590),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__18590),new cljs.core.Keyword(null,"params-idx","params-idx",340984624).cljs$core$IFn$_invoke$arity$1(G__18590),null,cljs.core.dissoc.call(null,G__18590,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)),null));
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
com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17365__auto__,k__17366__auto__){
var self__ = this;
var this__17365__auto____$1 = this;
return cljs.core._lookup.call(null,this__17365__auto____$1,k__17366__auto__,null);
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17367__auto__,k18808,else__17368__auto__){
var self__ = this;
var this__17367__auto____$1 = this;
var G__18811 = (((k18808 instanceof cljs.core.Keyword))?k18808.fqn:null);
switch (G__18811) {
case "transform-fns":
return self__.transform_fns;

break;
case "num-needed-params":
return self__.num_needed_params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18808,else__17368__auto__);

}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17379__auto__,writer__17380__auto__,opts__17381__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
var pr_pair__17382__auto__ = ((function (this__17379__auto____$1){
return (function (keyval__17383__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17380__auto__,cljs.core.pr_writer,""," ","",opts__17381__auto__,keyval__17383__auto__);
});})(this__17379__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17380__auto__,pr_pair__17382__auto__,"#com.rpl.specter.impl.ParamsNeededPath{",", ","}",opts__17381__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),self__.num_needed_params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18807){
var self__ = this;
var G__18807__$1 = this;
return (new cljs.core.RecordIter((0),G__18807__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.call = (function() {
var G__18816 = null;
var G__18816__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this__18525__auto__ = self____$1;
var array18596 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});
var G__18816__2 = (function (self__,G__18597){
var self__ = this;
var self____$1 = this;
var this__18525__auto__ = self____$1;
var array18596 = cljs.core.object_array.call(null,(1));
(array18596[(0)] = G__18597);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});
var G__18816__3 = (function (self__,G__18598,G__18599){
var self__ = this;
var self____$1 = this;
var this__18525__auto__ = self____$1;
var array18596 = cljs.core.object_array.call(null,(2));
(array18596[(0)] = G__18598);

(array18596[(1)] = G__18599);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});
var G__18816__4 = (function (self__,G__18600,G__18601,G__18602){
var self__ = this;
var self____$1 = this;
var this__18525__auto__ = self____$1;
var array18596 = cljs.core.object_array.call(null,(3));
(array18596[(0)] = G__18600);

(array18596[(1)] = G__18601);

(array18596[(2)] = G__18602);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});
var G__18816__5 = (function (self__,G__18603,G__18604,G__18605,G__18606){
var self__ = this;
var self____$1 = this;
var this__18525__auto__ = self____$1;
var array18596 = cljs.core.object_array.call(null,(4));
(array18596[(0)] = G__18603);

(array18596[(1)] = G__18604);

(array18596[(2)] = G__18605);

(array18596[(3)] = G__18606);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});
var G__18816__6 = (function (self__,G__18607,G__18608,G__18609,G__18610,G__18611){
var self__ = this;
var self____$1 = this;
var this__18525__auto__ = self____$1;
var array18596 = cljs.core.object_array.call(null,(5));
(array18596[(0)] = G__18607);

(array18596[(1)] = G__18608);

(array18596[(2)] = G__18609);

(array18596[(3)] = G__18610);

(array18596[(4)] = G__18611);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});
var G__18816__7 = (function (self__,G__18612,G__18613,G__18614,G__18615,G__18616,G__18617){
var self__ = this;
var self____$1 = this;
var this__18525__auto__ = self____$1;
var array18596 = cljs.core.object_array.call(null,(6));
(array18596[(0)] = G__18612);

(array18596[(1)] = G__18613);

(array18596[(2)] = G__18614);

(array18596[(3)] = G__18615);

(array18596[(4)] = G__18616);

(array18596[(5)] = G__18617);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});
var G__18816__8 = (function (self__,G__18618,G__18619,G__18620,G__18621,G__18622,G__18623,G__18624){
var self__ = this;
var self____$1 = this;
var this__18525__auto__ = self____$1;
var array18596 = cljs.core.object_array.call(null,(7));
(array18596[(0)] = G__18618);

(array18596[(1)] = G__18619);

(array18596[(2)] = G__18620);

(array18596[(3)] = G__18621);

(array18596[(4)] = G__18622);

(array18596[(5)] = G__18623);

(array18596[(6)] = G__18624);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});
var G__18816__9 = (function (self__,G__18625,G__18626,G__18627,G__18628,G__18629,G__18630,G__18631,G__18632){
var self__ = this;
var self____$1 = this;
var this__18525__auto__ = self____$1;
var array18596 = cljs.core.object_array.call(null,(8));
(array18596[(0)] = G__18625);

(array18596[(1)] = G__18626);

(array18596[(2)] = G__18627);

(array18596[(3)] = G__18628);

(array18596[(4)] = G__18629);

(array18596[(5)] = G__18630);

(array18596[(6)] = G__18631);

(array18596[(7)] = G__18632);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});
var G__18816__10 = (function (self__,G__18633,G__18634,G__18635,G__18636,G__18637,G__18638,G__18639,G__18640,G__18641){
var self__ = this;
var self____$1 = this;
var this__18525__auto__ = self____$1;
var array18596 = cljs.core.object_array.call(null,(9));
(array18596[(0)] = G__18633);

(array18596[(1)] = G__18634);

(array18596[(2)] = G__18635);

(array18596[(3)] = G__18636);

(array18596[(4)] = G__18637);

(array18596[(5)] = G__18638);

(array18596[(6)] = G__18639);

(array18596[(7)] = G__18640);

(array18596[(8)] = G__18641);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});
var G__18816__11 = (function (self__,G__18642,G__18643,G__18644,G__18645,G__18646,G__18647,G__18648,G__18649,G__18650,G__18651){
var self__ = this;
var self____$1 = this;
var this__18525__auto__ = self____$1;
var array18596 = cljs.core.object_array.call(null,(10));
(array18596[(0)] = G__18642);

(array18596[(1)] = G__18643);

(array18596[(2)] = G__18644);

(array18596[(3)] = G__18645);

(array18596[(4)] = G__18646);

(array18596[(5)] = G__18647);

(array18596[(6)] = G__18648);

(array18596[(7)] = G__18649);

(array18596[(8)] = G__18650);

(array18596[(9)] = G__18651);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});
var G__18816__12 = (function (self__,G__18652,G__18653,G__18654,G__18655,G__18656,G__18657,G__18658,G__18659,G__18660,G__18661,G__18662){
var self__ = this;
var self____$1 = this;
var this__18525__auto__ = self____$1;
var array18596 = cljs.core.object_array.call(null,(11));
(array18596[(0)] = G__18652);

(array18596[(1)] = G__18653);

(array18596[(2)] = G__18654);

(array18596[(3)] = G__18655);

(array18596[(4)] = G__18656);

(array18596[(5)] = G__18657);

(array18596[(6)] = G__18658);

(array18596[(7)] = G__18659);

(array18596[(8)] = G__18660);

(array18596[(9)] = G__18661);

(array18596[(10)] = G__18662);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});
var G__18816__13 = (function (self__,G__18663,G__18664,G__18665,G__18666,G__18667,G__18668,G__18669,G__18670,G__18671,G__18672,G__18673,G__18674){
var self__ = this;
var self____$1 = this;
var this__18525__auto__ = self____$1;
var array18596 = cljs.core.object_array.call(null,(12));
(array18596[(0)] = G__18663);

(array18596[(1)] = G__18664);

(array18596[(2)] = G__18665);

(array18596[(3)] = G__18666);

(array18596[(4)] = G__18667);

(array18596[(5)] = G__18668);

(array18596[(6)] = G__18669);

(array18596[(7)] = G__18670);

(array18596[(8)] = G__18671);

(array18596[(9)] = G__18672);

(array18596[(10)] = G__18673);

(array18596[(11)] = G__18674);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});
var G__18816__14 = (function (self__,G__18675,G__18676,G__18677,G__18678,G__18679,G__18680,G__18681,G__18682,G__18683,G__18684,G__18685,G__18686,G__18687){
var self__ = this;
var self____$1 = this;
var this__18525__auto__ = self____$1;
var array18596 = cljs.core.object_array.call(null,(13));
(array18596[(0)] = G__18675);

(array18596[(1)] = G__18676);

(array18596[(2)] = G__18677);

(array18596[(3)] = G__18678);

(array18596[(4)] = G__18679);

(array18596[(5)] = G__18680);

(array18596[(6)] = G__18681);

(array18596[(7)] = G__18682);

(array18596[(8)] = G__18683);

(array18596[(9)] = G__18684);

(array18596[(10)] = G__18685);

(array18596[(11)] = G__18686);

(array18596[(12)] = G__18687);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});
var G__18816__15 = (function (self__,G__18688,G__18689,G__18690,G__18691,G__18692,G__18693,G__18694,G__18695,G__18696,G__18697,G__18698,G__18699,G__18700,G__18701){
var self__ = this;
var self____$1 = this;
var this__18525__auto__ = self____$1;
var array18596 = cljs.core.object_array.call(null,(14));
(array18596[(0)] = G__18688);

(array18596[(1)] = G__18689);

(array18596[(2)] = G__18690);

(array18596[(3)] = G__18691);

(array18596[(4)] = G__18692);

(array18596[(5)] = G__18693);

(array18596[(6)] = G__18694);

(array18596[(7)] = G__18695);

(array18596[(8)] = G__18696);

(array18596[(9)] = G__18697);

(array18596[(10)] = G__18698);

(array18596[(11)] = G__18699);

(array18596[(12)] = G__18700);

(array18596[(13)] = G__18701);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});
var G__18816__16 = (function (self__,G__18702,G__18703,G__18704,G__18705,G__18706,G__18707,G__18708,G__18709,G__18710,G__18711,G__18712,G__18713,G__18714,G__18715,G__18716){
var self__ = this;
var self____$1 = this;
var this__18525__auto__ = self____$1;
var array18596 = cljs.core.object_array.call(null,(15));
(array18596[(0)] = G__18702);

(array18596[(1)] = G__18703);

(array18596[(2)] = G__18704);

(array18596[(3)] = G__18705);

(array18596[(4)] = G__18706);

(array18596[(5)] = G__18707);

(array18596[(6)] = G__18708);

(array18596[(7)] = G__18709);

(array18596[(8)] = G__18710);

(array18596[(9)] = G__18711);

(array18596[(10)] = G__18712);

(array18596[(11)] = G__18713);

(array18596[(12)] = G__18714);

(array18596[(13)] = G__18715);

(array18596[(14)] = G__18716);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});
var G__18816__17 = (function (self__,G__18717,G__18718,G__18719,G__18720,G__18721,G__18722,G__18723,G__18724,G__18725,G__18726,G__18727,G__18728,G__18729,G__18730,G__18731,G__18732){
var self__ = this;
var self____$1 = this;
var this__18525__auto__ = self____$1;
var array18596 = cljs.core.object_array.call(null,(16));
(array18596[(0)] = G__18717);

(array18596[(1)] = G__18718);

(array18596[(2)] = G__18719);

(array18596[(3)] = G__18720);

(array18596[(4)] = G__18721);

(array18596[(5)] = G__18722);

(array18596[(6)] = G__18723);

(array18596[(7)] = G__18724);

(array18596[(8)] = G__18725);

(array18596[(9)] = G__18726);

(array18596[(10)] = G__18727);

(array18596[(11)] = G__18728);

(array18596[(12)] = G__18729);

(array18596[(13)] = G__18730);

(array18596[(14)] = G__18731);

(array18596[(15)] = G__18732);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});
var G__18816__18 = (function (self__,G__18733,G__18734,G__18735,G__18736,G__18737,G__18738,G__18739,G__18740,G__18741,G__18742,G__18743,G__18744,G__18745,G__18746,G__18747,G__18748,G__18749){
var self__ = this;
var self____$1 = this;
var this__18525__auto__ = self____$1;
var array18596 = cljs.core.object_array.call(null,(17));
(array18596[(0)] = G__18733);

(array18596[(1)] = G__18734);

(array18596[(2)] = G__18735);

(array18596[(3)] = G__18736);

(array18596[(4)] = G__18737);

(array18596[(5)] = G__18738);

(array18596[(6)] = G__18739);

(array18596[(7)] = G__18740);

(array18596[(8)] = G__18741);

(array18596[(9)] = G__18742);

(array18596[(10)] = G__18743);

(array18596[(11)] = G__18744);

(array18596[(12)] = G__18745);

(array18596[(13)] = G__18746);

(array18596[(14)] = G__18747);

(array18596[(15)] = G__18748);

(array18596[(16)] = G__18749);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});
var G__18816__19 = (function (self__,G__18750,G__18751,G__18752,G__18753,G__18754,G__18755,G__18756,G__18757,G__18758,G__18759,G__18760,G__18761,G__18762,G__18763,G__18764,G__18765,G__18766,G__18767){
var self__ = this;
var self____$1 = this;
var this__18525__auto__ = self____$1;
var array18596 = cljs.core.object_array.call(null,(18));
(array18596[(0)] = G__18750);

(array18596[(1)] = G__18751);

(array18596[(2)] = G__18752);

(array18596[(3)] = G__18753);

(array18596[(4)] = G__18754);

(array18596[(5)] = G__18755);

(array18596[(6)] = G__18756);

(array18596[(7)] = G__18757);

(array18596[(8)] = G__18758);

(array18596[(9)] = G__18759);

(array18596[(10)] = G__18760);

(array18596[(11)] = G__18761);

(array18596[(12)] = G__18762);

(array18596[(13)] = G__18763);

(array18596[(14)] = G__18764);

(array18596[(15)] = G__18765);

(array18596[(16)] = G__18766);

(array18596[(17)] = G__18767);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});
var G__18816__20 = (function (self__,G__18768,G__18769,G__18770,G__18771,G__18772,G__18773,G__18774,G__18775,G__18776,G__18777,G__18778,G__18779,G__18780,G__18781,G__18782,G__18783,G__18784,G__18785,G__18786){
var self__ = this;
var self____$1 = this;
var this__18525__auto__ = self____$1;
var array18596 = cljs.core.object_array.call(null,(19));
(array18596[(0)] = G__18768);

(array18596[(1)] = G__18769);

(array18596[(2)] = G__18770);

(array18596[(3)] = G__18771);

(array18596[(4)] = G__18772);

(array18596[(5)] = G__18773);

(array18596[(6)] = G__18774);

(array18596[(7)] = G__18775);

(array18596[(8)] = G__18776);

(array18596[(9)] = G__18777);

(array18596[(10)] = G__18778);

(array18596[(11)] = G__18779);

(array18596[(12)] = G__18780);

(array18596[(13)] = G__18781);

(array18596[(14)] = G__18782);

(array18596[(15)] = G__18783);

(array18596[(16)] = G__18784);

(array18596[(17)] = G__18785);

(array18596[(18)] = G__18786);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});
var G__18816__21 = (function (self__,G__18787,G__18788,G__18789,G__18790,G__18791,G__18792,G__18793,G__18794,G__18795,G__18796,G__18797,G__18798,G__18799,G__18800,G__18801,G__18802,G__18803,G__18804,G__18805,G__18806){
var self__ = this;
var self____$1 = this;
var this__18525__auto__ = self____$1;
var array18596 = cljs.core.object_array.call(null,(20));
(array18596[(0)] = G__18787);

(array18596[(1)] = G__18788);

(array18596[(2)] = G__18789);

(array18596[(3)] = G__18790);

(array18596[(4)] = G__18791);

(array18596[(5)] = G__18792);

(array18596[(6)] = G__18793);

(array18596[(7)] = G__18794);

(array18596[(8)] = G__18795);

(array18596[(9)] = G__18796);

(array18596[(10)] = G__18797);

(array18596[(11)] = G__18798);

(array18596[(12)] = G__18799);

(array18596[(13)] = G__18800);

(array18596[(14)] = G__18801);

(array18596[(15)] = G__18802);

(array18596[(16)] = G__18803);

(array18596[(17)] = G__18804);

(array18596[(18)] = G__18805);

(array18596[(19)] = G__18806);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});
var G__18816__22 = (function (self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var a = cljs.core.object_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20], null),rest));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this$,a,(0));
});
G__18816 = function(self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
switch(arguments.length){
case 1:
return G__18816__1.call(this,self__);
case 2:
return G__18816__2.call(this,self__,p01);
case 3:
return G__18816__3.call(this,self__,p01,p02);
case 4:
return G__18816__4.call(this,self__,p01,p02,p03);
case 5:
return G__18816__5.call(this,self__,p01,p02,p03,p04);
case 6:
return G__18816__6.call(this,self__,p01,p02,p03,p04,p05);
case 7:
return G__18816__7.call(this,self__,p01,p02,p03,p04,p05,p06);
case 8:
return G__18816__8.call(this,self__,p01,p02,p03,p04,p05,p06,p07);
case 9:
return G__18816__9.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08);
case 10:
return G__18816__10.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09);
case 11:
return G__18816__11.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10);
case 12:
return G__18816__12.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11);
case 13:
return G__18816__13.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12);
case 14:
return G__18816__14.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13);
case 15:
return G__18816__15.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14);
case 16:
return G__18816__16.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15);
case 17:
return G__18816__17.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16);
case 18:
return G__18816__18.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17);
case 19:
return G__18816__19.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18);
case 20:
return G__18816__20.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19);
case 21:
return G__18816__21.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20);
case 22:
return G__18816__22.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18816.cljs$core$IFn$_invoke$arity$1 = G__18816__1;
G__18816.cljs$core$IFn$_invoke$arity$2 = G__18816__2;
G__18816.cljs$core$IFn$_invoke$arity$3 = G__18816__3;
G__18816.cljs$core$IFn$_invoke$arity$4 = G__18816__4;
G__18816.cljs$core$IFn$_invoke$arity$5 = G__18816__5;
G__18816.cljs$core$IFn$_invoke$arity$6 = G__18816__6;
G__18816.cljs$core$IFn$_invoke$arity$7 = G__18816__7;
G__18816.cljs$core$IFn$_invoke$arity$8 = G__18816__8;
G__18816.cljs$core$IFn$_invoke$arity$9 = G__18816__9;
G__18816.cljs$core$IFn$_invoke$arity$10 = G__18816__10;
G__18816.cljs$core$IFn$_invoke$arity$11 = G__18816__11;
G__18816.cljs$core$IFn$_invoke$arity$12 = G__18816__12;
G__18816.cljs$core$IFn$_invoke$arity$13 = G__18816__13;
G__18816.cljs$core$IFn$_invoke$arity$14 = G__18816__14;
G__18816.cljs$core$IFn$_invoke$arity$15 = G__18816__15;
G__18816.cljs$core$IFn$_invoke$arity$16 = G__18816__16;
G__18816.cljs$core$IFn$_invoke$arity$17 = G__18816__17;
G__18816.cljs$core$IFn$_invoke$arity$18 = G__18816__18;
G__18816.cljs$core$IFn$_invoke$arity$19 = G__18816__19;
G__18816.cljs$core$IFn$_invoke$arity$20 = G__18816__20;
G__18816.cljs$core$IFn$_invoke$arity$21 = G__18816__21;
G__18816.cljs$core$IFn$_invoke$arity$22 = G__18816__22;
return G__18816;
})()
;

com.rpl.specter.impl.ParamsNeededPath.prototype.apply = (function (self__,args18810){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args18810)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this__18525__auto__ = this;
var array18596 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$1 = (function (G__18597){
var self__ = this;
var this__18525__auto__ = this;
var array18596 = cljs.core.object_array.call(null,(1));
(array18596[(0)] = G__18597);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$2 = (function (G__18598,G__18599){
var self__ = this;
var this__18525__auto__ = this;
var array18596 = cljs.core.object_array.call(null,(2));
(array18596[(0)] = G__18598);

(array18596[(1)] = G__18599);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$3 = (function (G__18600,G__18601,G__18602){
var self__ = this;
var this__18525__auto__ = this;
var array18596 = cljs.core.object_array.call(null,(3));
(array18596[(0)] = G__18600);

(array18596[(1)] = G__18601);

(array18596[(2)] = G__18602);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$4 = (function (G__18603,G__18604,G__18605,G__18606){
var self__ = this;
var this__18525__auto__ = this;
var array18596 = cljs.core.object_array.call(null,(4));
(array18596[(0)] = G__18603);

(array18596[(1)] = G__18604);

(array18596[(2)] = G__18605);

(array18596[(3)] = G__18606);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$5 = (function (G__18607,G__18608,G__18609,G__18610,G__18611){
var self__ = this;
var this__18525__auto__ = this;
var array18596 = cljs.core.object_array.call(null,(5));
(array18596[(0)] = G__18607);

(array18596[(1)] = G__18608);

(array18596[(2)] = G__18609);

(array18596[(3)] = G__18610);

(array18596[(4)] = G__18611);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$6 = (function (G__18612,G__18613,G__18614,G__18615,G__18616,G__18617){
var self__ = this;
var this__18525__auto__ = this;
var array18596 = cljs.core.object_array.call(null,(6));
(array18596[(0)] = G__18612);

(array18596[(1)] = G__18613);

(array18596[(2)] = G__18614);

(array18596[(3)] = G__18615);

(array18596[(4)] = G__18616);

(array18596[(5)] = G__18617);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$7 = (function (G__18618,G__18619,G__18620,G__18621,G__18622,G__18623,G__18624){
var self__ = this;
var this__18525__auto__ = this;
var array18596 = cljs.core.object_array.call(null,(7));
(array18596[(0)] = G__18618);

(array18596[(1)] = G__18619);

(array18596[(2)] = G__18620);

(array18596[(3)] = G__18621);

(array18596[(4)] = G__18622);

(array18596[(5)] = G__18623);

(array18596[(6)] = G__18624);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$8 = (function (G__18625,G__18626,G__18627,G__18628,G__18629,G__18630,G__18631,G__18632){
var self__ = this;
var this__18525__auto__ = this;
var array18596 = cljs.core.object_array.call(null,(8));
(array18596[(0)] = G__18625);

(array18596[(1)] = G__18626);

(array18596[(2)] = G__18627);

(array18596[(3)] = G__18628);

(array18596[(4)] = G__18629);

(array18596[(5)] = G__18630);

(array18596[(6)] = G__18631);

(array18596[(7)] = G__18632);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$9 = (function (G__18633,G__18634,G__18635,G__18636,G__18637,G__18638,G__18639,G__18640,G__18641){
var self__ = this;
var this__18525__auto__ = this;
var array18596 = cljs.core.object_array.call(null,(9));
(array18596[(0)] = G__18633);

(array18596[(1)] = G__18634);

(array18596[(2)] = G__18635);

(array18596[(3)] = G__18636);

(array18596[(4)] = G__18637);

(array18596[(5)] = G__18638);

(array18596[(6)] = G__18639);

(array18596[(7)] = G__18640);

(array18596[(8)] = G__18641);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$10 = (function (G__18642,G__18643,G__18644,G__18645,G__18646,G__18647,G__18648,G__18649,G__18650,G__18651){
var self__ = this;
var this__18525__auto__ = this;
var array18596 = cljs.core.object_array.call(null,(10));
(array18596[(0)] = G__18642);

(array18596[(1)] = G__18643);

(array18596[(2)] = G__18644);

(array18596[(3)] = G__18645);

(array18596[(4)] = G__18646);

(array18596[(5)] = G__18647);

(array18596[(6)] = G__18648);

(array18596[(7)] = G__18649);

(array18596[(8)] = G__18650);

(array18596[(9)] = G__18651);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$11 = (function (G__18652,G__18653,G__18654,G__18655,G__18656,G__18657,G__18658,G__18659,G__18660,G__18661,G__18662){
var self__ = this;
var this__18525__auto__ = this;
var array18596 = cljs.core.object_array.call(null,(11));
(array18596[(0)] = G__18652);

(array18596[(1)] = G__18653);

(array18596[(2)] = G__18654);

(array18596[(3)] = G__18655);

(array18596[(4)] = G__18656);

(array18596[(5)] = G__18657);

(array18596[(6)] = G__18658);

(array18596[(7)] = G__18659);

(array18596[(8)] = G__18660);

(array18596[(9)] = G__18661);

(array18596[(10)] = G__18662);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$12 = (function (G__18663,G__18664,G__18665,G__18666,G__18667,G__18668,G__18669,G__18670,G__18671,G__18672,G__18673,G__18674){
var self__ = this;
var this__18525__auto__ = this;
var array18596 = cljs.core.object_array.call(null,(12));
(array18596[(0)] = G__18663);

(array18596[(1)] = G__18664);

(array18596[(2)] = G__18665);

(array18596[(3)] = G__18666);

(array18596[(4)] = G__18667);

(array18596[(5)] = G__18668);

(array18596[(6)] = G__18669);

(array18596[(7)] = G__18670);

(array18596[(8)] = G__18671);

(array18596[(9)] = G__18672);

(array18596[(10)] = G__18673);

(array18596[(11)] = G__18674);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$13 = (function (G__18675,G__18676,G__18677,G__18678,G__18679,G__18680,G__18681,G__18682,G__18683,G__18684,G__18685,G__18686,G__18687){
var self__ = this;
var this__18525__auto__ = this;
var array18596 = cljs.core.object_array.call(null,(13));
(array18596[(0)] = G__18675);

(array18596[(1)] = G__18676);

(array18596[(2)] = G__18677);

(array18596[(3)] = G__18678);

(array18596[(4)] = G__18679);

(array18596[(5)] = G__18680);

(array18596[(6)] = G__18681);

(array18596[(7)] = G__18682);

(array18596[(8)] = G__18683);

(array18596[(9)] = G__18684);

(array18596[(10)] = G__18685);

(array18596[(11)] = G__18686);

(array18596[(12)] = G__18687);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$14 = (function (G__18688,G__18689,G__18690,G__18691,G__18692,G__18693,G__18694,G__18695,G__18696,G__18697,G__18698,G__18699,G__18700,G__18701){
var self__ = this;
var this__18525__auto__ = this;
var array18596 = cljs.core.object_array.call(null,(14));
(array18596[(0)] = G__18688);

(array18596[(1)] = G__18689);

(array18596[(2)] = G__18690);

(array18596[(3)] = G__18691);

(array18596[(4)] = G__18692);

(array18596[(5)] = G__18693);

(array18596[(6)] = G__18694);

(array18596[(7)] = G__18695);

(array18596[(8)] = G__18696);

(array18596[(9)] = G__18697);

(array18596[(10)] = G__18698);

(array18596[(11)] = G__18699);

(array18596[(12)] = G__18700);

(array18596[(13)] = G__18701);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$15 = (function (G__18702,G__18703,G__18704,G__18705,G__18706,G__18707,G__18708,G__18709,G__18710,G__18711,G__18712,G__18713,G__18714,G__18715,G__18716){
var self__ = this;
var this__18525__auto__ = this;
var array18596 = cljs.core.object_array.call(null,(15));
(array18596[(0)] = G__18702);

(array18596[(1)] = G__18703);

(array18596[(2)] = G__18704);

(array18596[(3)] = G__18705);

(array18596[(4)] = G__18706);

(array18596[(5)] = G__18707);

(array18596[(6)] = G__18708);

(array18596[(7)] = G__18709);

(array18596[(8)] = G__18710);

(array18596[(9)] = G__18711);

(array18596[(10)] = G__18712);

(array18596[(11)] = G__18713);

(array18596[(12)] = G__18714);

(array18596[(13)] = G__18715);

(array18596[(14)] = G__18716);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$16 = (function (G__18717,G__18718,G__18719,G__18720,G__18721,G__18722,G__18723,G__18724,G__18725,G__18726,G__18727,G__18728,G__18729,G__18730,G__18731,G__18732){
var self__ = this;
var this__18525__auto__ = this;
var array18596 = cljs.core.object_array.call(null,(16));
(array18596[(0)] = G__18717);

(array18596[(1)] = G__18718);

(array18596[(2)] = G__18719);

(array18596[(3)] = G__18720);

(array18596[(4)] = G__18721);

(array18596[(5)] = G__18722);

(array18596[(6)] = G__18723);

(array18596[(7)] = G__18724);

(array18596[(8)] = G__18725);

(array18596[(9)] = G__18726);

(array18596[(10)] = G__18727);

(array18596[(11)] = G__18728);

(array18596[(12)] = G__18729);

(array18596[(13)] = G__18730);

(array18596[(14)] = G__18731);

(array18596[(15)] = G__18732);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$17 = (function (G__18733,G__18734,G__18735,G__18736,G__18737,G__18738,G__18739,G__18740,G__18741,G__18742,G__18743,G__18744,G__18745,G__18746,G__18747,G__18748,G__18749){
var self__ = this;
var this__18525__auto__ = this;
var array18596 = cljs.core.object_array.call(null,(17));
(array18596[(0)] = G__18733);

(array18596[(1)] = G__18734);

(array18596[(2)] = G__18735);

(array18596[(3)] = G__18736);

(array18596[(4)] = G__18737);

(array18596[(5)] = G__18738);

(array18596[(6)] = G__18739);

(array18596[(7)] = G__18740);

(array18596[(8)] = G__18741);

(array18596[(9)] = G__18742);

(array18596[(10)] = G__18743);

(array18596[(11)] = G__18744);

(array18596[(12)] = G__18745);

(array18596[(13)] = G__18746);

(array18596[(14)] = G__18747);

(array18596[(15)] = G__18748);

(array18596[(16)] = G__18749);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$18 = (function (G__18750,G__18751,G__18752,G__18753,G__18754,G__18755,G__18756,G__18757,G__18758,G__18759,G__18760,G__18761,G__18762,G__18763,G__18764,G__18765,G__18766,G__18767){
var self__ = this;
var this__18525__auto__ = this;
var array18596 = cljs.core.object_array.call(null,(18));
(array18596[(0)] = G__18750);

(array18596[(1)] = G__18751);

(array18596[(2)] = G__18752);

(array18596[(3)] = G__18753);

(array18596[(4)] = G__18754);

(array18596[(5)] = G__18755);

(array18596[(6)] = G__18756);

(array18596[(7)] = G__18757);

(array18596[(8)] = G__18758);

(array18596[(9)] = G__18759);

(array18596[(10)] = G__18760);

(array18596[(11)] = G__18761);

(array18596[(12)] = G__18762);

(array18596[(13)] = G__18763);

(array18596[(14)] = G__18764);

(array18596[(15)] = G__18765);

(array18596[(16)] = G__18766);

(array18596[(17)] = G__18767);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$19 = (function (G__18768,G__18769,G__18770,G__18771,G__18772,G__18773,G__18774,G__18775,G__18776,G__18777,G__18778,G__18779,G__18780,G__18781,G__18782,G__18783,G__18784,G__18785,G__18786){
var self__ = this;
var this__18525__auto__ = this;
var array18596 = cljs.core.object_array.call(null,(19));
(array18596[(0)] = G__18768);

(array18596[(1)] = G__18769);

(array18596[(2)] = G__18770);

(array18596[(3)] = G__18771);

(array18596[(4)] = G__18772);

(array18596[(5)] = G__18773);

(array18596[(6)] = G__18774);

(array18596[(7)] = G__18775);

(array18596[(8)] = G__18776);

(array18596[(9)] = G__18777);

(array18596[(10)] = G__18778);

(array18596[(11)] = G__18779);

(array18596[(12)] = G__18780);

(array18596[(13)] = G__18781);

(array18596[(14)] = G__18782);

(array18596[(15)] = G__18783);

(array18596[(16)] = G__18784);

(array18596[(17)] = G__18785);

(array18596[(18)] = G__18786);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$20 = (function (G__18787,G__18788,G__18789,G__18790,G__18791,G__18792,G__18793,G__18794,G__18795,G__18796,G__18797,G__18798,G__18799,G__18800,G__18801,G__18802,G__18803,G__18804,G__18805,G__18806){
var self__ = this;
var this__18525__auto__ = this;
var array18596 = cljs.core.object_array.call(null,(20));
(array18596[(0)] = G__18787);

(array18596[(1)] = G__18788);

(array18596[(2)] = G__18789);

(array18596[(3)] = G__18790);

(array18596[(4)] = G__18791);

(array18596[(5)] = G__18792);

(array18596[(6)] = G__18793);

(array18596[(7)] = G__18794);

(array18596[(8)] = G__18795);

(array18596[(9)] = G__18796);

(array18596[(10)] = G__18797);

(array18596[(11)] = G__18798);

(array18596[(12)] = G__18799);

(array18596[(13)] = G__18800);

(array18596[(14)] = G__18801);

(array18596[(15)] = G__18802);

(array18596[(16)] = G__18803);

(array18596[(17)] = G__18804);

(array18596[(18)] = G__18805);

(array18596[(19)] = G__18806);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__18525__auto__,array18596,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$21 = (function (p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
var self__ = this;
var this$ = this;
var a = cljs.core.object_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20], null),rest));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this$,a,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17363__auto__){
var self__ = this;
var this__17363__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17359__auto__){
var self__ = this;
var this__17359__auto____$1 = this;
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17369__auto__){
var self__ = this;
var this__17369__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17360__auto__){
var self__ = this;
var this__17360__auto____$1 = this;
var h__17186__auto__ = self__.__hash;
if(!((h__17186__auto__ == null))){
return h__17186__auto__;
} else {
var h__17186__auto____$1 = cljs.core.hash_imap.call(null,this__17360__auto____$1);
self__.__hash = h__17186__auto____$1;

return h__17186__auto____$1;
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17361__auto__,other__17362__auto__){
var self__ = this;
var this__17361__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16739__auto__ = other__17362__auto__;
if(cljs.core.truth_(and__16739__auto__)){
var and__16739__auto____$1 = (this__17361__auto____$1.constructor === other__17362__auto__.constructor);
if(and__16739__auto____$1){
return cljs.core.equiv_map.call(null,this__17361__auto____$1,other__17362__auto__);
} else {
return and__16739__auto____$1;
}
} else {
return and__16739__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17374__auto__,k__17375__auto__){
var self__ = this;
var this__17374__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),null], null), null),k__17375__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17374__auto____$1),self__.__meta),k__17375__auto__);
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17375__auto__)),null));
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17372__auto__,k__17373__auto__,G__18807){
var self__ = this;
var this__17372__auto____$1 = this;
var pred__18812 = cljs.core.keyword_identical_QMARK_;
var expr__18813 = k__17373__auto__;
if(cljs.core.truth_(pred__18812.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__18813))){
return (new com.rpl.specter.impl.ParamsNeededPath(G__18807,self__.num_needed_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18812.call(null,new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),expr__18813))){
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,G__18807,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17373__auto__,G__18807),null));
}
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17377__auto__){
var self__ = this;
var this__17377__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),self__.num_needed_params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17364__auto__,G__18807){
var self__ = this;
var this__17364__auto____$1 = this;
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,G__18807,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17370__auto__,entry__17371__auto__){
var self__ = this;
var this__17370__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17371__auto__)){
return cljs.core._assoc.call(null,this__17370__auto____$1,cljs.core._nth.call(null,entry__17371__auto__,(0)),cljs.core._nth.call(null,entry__17371__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17370__auto____$1,entry__17371__auto__);
}
});

com.rpl.specter.impl.ParamsNeededPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transform-fns","transform-fns",-1985393120,null),new cljs.core.Symbol(null,"num-needed-params","num-needed-params",421205430,null)], null);
});

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$type = true;

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$ctorPrSeq = (function (this__17399__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/ParamsNeededPath");
});

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$ctorPrWriter = (function (this__17399__auto__,writer__17400__auto__){
return cljs.core._write.call(null,writer__17400__auto__,"com.rpl.specter.impl/ParamsNeededPath");
});

com.rpl.specter.impl.__GT_ParamsNeededPath = (function com$rpl$specter$impl$__GT_ParamsNeededPath(transform_fns,num_needed_params){
return (new com.rpl.specter.impl.ParamsNeededPath(transform_fns,num_needed_params,null,null,null));
});

com.rpl.specter.impl.map__GT_ParamsNeededPath = (function com$rpl$specter$impl$map__GT_ParamsNeededPath(G__18809){
return (new com.rpl.specter.impl.ParamsNeededPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__18809),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097).cljs$core$IFn$_invoke$arity$1(G__18809),null,cljs.core.dissoc.call(null,G__18809,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)),null));
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"select*","select*",-1829914060),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$StructurePath$))?true:false):false))?(function (G__18825,G__18826,G__18827){
return com.rpl.specter.protocols.select_STAR_.call(null,G__18825,G__18826,G__18827);
}):com.rpl.specter.protocols.select_STAR_),new cljs.core.Keyword(null,"transform*","transform*",-1613794522),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$StructurePath$))?true:false):false))?(function (G__18829,G__18830,G__18831){
return com.rpl.specter.protocols.transform_STAR_.call(null,G__18829,G__18830,G__18831);
}):com.rpl.specter.protocols.transform_STAR_)], null);
});
com.rpl.specter.impl.collector_impl = (function com$rpl$specter$impl$collector_impl(obj){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collect-val","collect-val",801894069),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$Collector$))?true:false):false))?(function (G__18836,G__18837){
return com.rpl.specter.protocols.collect_val.call(null,G__18836,G__18837);
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
var or__16751__auto__ = cljs.core.fn_QMARK_.call(null,obj);
if(or__16751__auto__){
return or__16751__auto__;
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
var x__17406__auto__ = (((this$ == null))?null:this$);
var m__17407__auto__ = (com.rpl.specter.impl.coerce_path[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,this$);
} else {
var m__17407__auto____$1 = (com.rpl.specter.impl.coerce_path["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,this$);
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
com.rpl.specter.impl.combine_same_types = (function com$rpl$specter$impl$combine_same_types(p__18844){
var vec__18846 = p__18844;
var f = cljs.core.nth.call(null,vec__18846,(0),null);
var _ = cljs.core.nthnext.call(null,vec__18846,(1));
var all = vec__18846;
var exs = f.executors;
var t = exs.type;
var combiner = ((cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"richpath","richpath",-150197948)))?((function (exs,t,vec__18846,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__18846,f,_,all){
return (function (params,params_idx,vals,structure,next_fn){
return curr.call(null,params,params_idx,vals,structure,((function (exs,t,vec__18846,f,_,all){
return (function (params_next,params_idx_next,vals_next,structure_next){
return next.call(null,params_next,params_idx_next,vals_next,structure_next,next_fn);
});})(exs,t,vec__18846,f,_,all))
);
});
;})(exs,t,vec__18846,f,_,all))
});})(exs,t,vec__18846,f,_,all))
:((function (exs,t,vec__18846,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__18846,f,_,all){
return (function (structure,next_fn){
return curr.call(null,structure,((function (exs,t,vec__18846,f,_,all){
return (function (structure__$1){
return next.call(null,structure__$1,next_fn);
});})(exs,t,vec__18846,f,_,all))
);
});
;})(exs,t,vec__18846,f,_,all))
});})(exs,t,vec__18846,f,_,all))
);
return cljs.core.reduce.call(null,((function (exs,t,combiner,vec__18846,f,_,all){
return (function (curr,next){
return com.rpl.specter.impl.__GT_TransformFunctions.call(null,exs,combiner.call(null,curr.selector,next.selector),combiner.call(null,curr.transformer,next.transformer));
});})(exs,t,combiner,vec__18846,f,_,all))
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
return (function (p1__18847_SHARP_){
return (p1__18847_SHARP_ instanceof com.rpl.specter.impl.ParamsNeededPath);
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
var x__17406__auto__ = (((cell == null))?null:cell);
var m__17407__auto__ = (com.rpl.specter.impl.set_cell[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,cell,x);
} else {
var m__17407__auto____$1 = (com.rpl.specter.impl.set_cell["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,cell,x);
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

com.rpl.specter.impl.MutableCell.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"com.rpl.specter.impl/MutableCell");
});

com.rpl.specter.impl.__GT_MutableCell = (function com$rpl$specter$impl$__GT_MutableCell(q){
return (new com.rpl.specter.impl.MutableCell(q));
});

com.rpl.specter.impl.mutable_cell = (function com$rpl$specter$impl$mutable_cell(var_args){
var args18848 = [];
var len__17809__auto___18851 = arguments.length;
var i__17810__auto___18852 = (0);
while(true){
if((i__17810__auto___18852 < len__17809__auto___18851)){
args18848.push((arguments[i__17810__auto___18852]));

var G__18853 = (i__17810__auto___18852 + (1));
i__17810__auto___18852 = G__18853;
continue;
} else {
}
break;
}

var G__18850 = args18848.length;
switch (G__18850) {
case 0:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18848.length)].join('')));

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
var x__17406__auto__ = (((s == null))?null:s);
var m__17407__auto__ = (com.rpl.specter.impl.set_first[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,s,val);
} else {
var m__17407__auto____$1 = (com.rpl.specter.impl.set_first["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,s,val);
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
var x__17406__auto__ = (((s == null))?null:s);
var m__17407__auto__ = (com.rpl.specter.impl.set_last[goog.typeOf(x__17406__auto__)]);
if(!((m__17407__auto__ == null))){
return m__17407__auto__.call(null,s,val);
} else {
var m__17407__auto____$1 = (com.rpl.specter.impl.set_last["_"]);
if(!((m__17407__auto____$1 == null))){
return m__17407__auto____$1.call(null,s,val);
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
if(cljs.core.truth_((function (){var and__16739__auto__ = com.rpl.specter.impl.fn_invocation_QMARK_.call(null,structure);
if(cljs.core.truth_(and__16739__auto__)){
return com.rpl.specter.impl.fn_invocation_QMARK_.call(null,ret);
} else {
return and__16739__auto__;
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
return (function (p__18857,i){
var vec__18858 = p__18857;
var s = cljs.core.nth.call(null,vec__18858,(0),null);
var m = cljs.core.nth.call(null,vec__18858,(1),null);
var orig = vec__18858;
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

com.rpl.specter.impl.AllStructurePath.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"com.rpl.specter.impl/AllStructurePath");
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

com.rpl.specter.impl.ValCollect.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"com.rpl.specter.impl/ValCollect");
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

com.rpl.specter.impl.PosStructurePath.cljs$lang$ctorPrWriter = (function (this__17349__auto__,writer__17350__auto__,opt__17351__auto__){
return cljs.core._write.call(null,writer__17350__auto__,"com.rpl.specter.impl/PosStructurePath");
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
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.drop_while.call(null,(function (p__18861){
var vec__18862 = p__18861;
var c_selector = cljs.core.nth.call(null,vec__18862,(0),null);
var _ = cljs.core.nth.call(null,vec__18862,(1),null);
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

//# sourceMappingURL=impl.js.map?rel=1449083080692