// Compiled by ClojureScript 1.7.122 {}
goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('clojure.set');
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__17178__auto__ = [];
var len__17171__auto___28061 = arguments.length;
var i__17172__auto___28062 = (0);
while(true){
if((i__17172__auto___28062 < len__17171__auto___28061)){
args__17178__auto__.push((arguments[i__17172__auto___28062]));

var G__28063 = (i__17172__auto___28062 + (1));
i__17172__auto___28062 = G__28063;
continue;
} else {
}
break;
}

var argseq__17179__auto__ = ((((0) < args__17178__auto__.length))?(new cljs.core.IndexedSeq(args__17178__auto__.slice((0)),(0))):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__17179__auto__);
});

com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,cljs.core.vec.call(null,paths));
});

com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0);

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq28060){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28060));
});
/**
 * Version of select that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the selector.
 */
com.rpl.specter.select = (function com$rpl$specter$select(selector,structure){
return com.rpl.specter.compiled_select.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),structure);
});
/**
 * Version of select-one that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select_one = (function com$rpl$specter$compiled_select_one(selector,structure){
var res = com.rpl.specter.compiled_select.call(null,selector,structure);
if((cljs.core.count.call(null,res) > (1))){
com.rpl.specter.impl.throw_illegal.call(null,"More than one element found for params: ",selector,structure);
} else {
}

return cljs.core.first.call(null,res);
});
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one = (function com$rpl$specter$select_one(selector,structure){
return com.rpl.specter.compiled_select_one.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),structure);
});
/**
 * Version of select-one! that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = (function com$rpl$specter$compiled_select_one_BANG_(selector,structure){
var res = com.rpl.specter.compiled_select.call(null,selector,structure);
if(cljs.core.not_EQ_.call(null,(1),cljs.core.count.call(null,res))){
com.rpl.specter.impl.throw_illegal.call(null,"Expected exactly one element for params: ",selector,structure);
} else {
}

return cljs.core.first.call(null,res);
});
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG_ = (function com$rpl$specter$select_one_BANG_(selector,structure){
return com.rpl.specter.compiled_select_one_BANG_.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),structure);
});
/**
 * Version of select-first that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select_first = (function com$rpl$specter$compiled_select_first(selector,structure){
return cljs.core.first.call(null,com.rpl.specter.compiled_select.call(null,selector,structure));
});
/**
 * Returns first element found. Not any more efficient than select, just a convenience
 */
com.rpl.specter.select_first = (function com$rpl$specter$select_first(selector,structure){
return com.rpl.specter.compiled_select_first.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),structure);
});
/**
 * Version of transform that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Navigates to each value specified by the selector and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform = (function com$rpl$specter$transform(selector,transform_fn,structure){
return com.rpl.specter.compiled_transform.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),transform_fn,structure);
});
/**
 * Version of setval that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_setval = (function com$rpl$specter$compiled_setval(selector,val,structure){
return com.rpl.specter.compiled_transform.call(null,selector,(function (_){
return val;
}),structure);
});
/**
 * Navigates to each value specified by the selector and replaces it by val
 */
com.rpl.specter.setval = (function com$rpl$specter$setval(selector,val,structure){
return com.rpl.specter.compiled_setval.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),val,structure);
});
/**
 * Version of replace-in that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = (function com$rpl$specter$compiled_replace_in(var_args){
var args__17178__auto__ = [];
var len__17171__auto___28072 = arguments.length;
var i__17172__auto___28073 = (0);
while(true){
if((i__17172__auto___28073 < len__17171__auto___28072)){
args__17178__auto__.push((arguments[i__17172__auto___28073]));

var G__28074 = (i__17172__auto___28073 + (1));
i__17172__auto___28073 = G__28074;
continue;
} else {
}
break;
}

var argseq__17179__auto__ = ((((3) < args__17178__auto__.length))?(new cljs.core.IndexedSeq(args__17178__auto__.slice((3)),(0))):null);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17179__auto__);
});

com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (selector,transform_fn,structure,p__28068){
var map__28069 = p__28068;
var map__28069__$1 = ((((!((map__28069 == null)))?((((map__28069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28069):map__28069);
var merge_fn = cljs.core.get.call(null,map__28069__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.call(null,null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.compiled_transform.call(null,selector,((function (state,map__28069,map__28069__$1,merge_fn){
return (function (e){
var res = transform_fn.call(null,e);
if(cljs.core.truth_(res)){
var vec__28071 = res;
var ret = cljs.core.nth.call(null,vec__28071,(0),null);
var user_ret = cljs.core.nth.call(null,vec__28071,(1),null);
com.rpl.specter.impl.set_cell_BANG_.call(null,state,merge_fn.call(null,com.rpl.specter.impl.get_cell.call(null,state),user_ret));

return ret;
} else {
return e;
}
});})(state,map__28069,map__28069__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell.call(null,state)], null);
});

com.rpl.specter.compiled_replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.compiled_replace_in.cljs$lang$applyTo = (function (seq28064){
var G__28065 = cljs.core.first.call(null,seq28064);
var seq28064__$1 = cljs.core.next.call(null,seq28064);
var G__28066 = cljs.core.first.call(null,seq28064__$1);
var seq28064__$2 = cljs.core.next.call(null,seq28064__$1);
var G__28067 = cljs.core.first.call(null,seq28064__$2);
var seq28064__$3 = cljs.core.next.call(null,seq28064__$2);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic(G__28065,G__28066,G__28067,seq28064__$3);
});
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 *   The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformd in the data structure.
 */
com.rpl.specter.replace_in = (function com$rpl$specter$replace_in(var_args){
var args__17178__auto__ = [];
var len__17171__auto___28082 = arguments.length;
var i__17172__auto___28083 = (0);
while(true){
if((i__17172__auto___28083 < len__17171__auto___28082)){
args__17178__auto__.push((arguments[i__17172__auto___28083]));

var G__28084 = (i__17172__auto___28083 + (1));
i__17172__auto___28083 = G__28084;
continue;
} else {
}
break;
}

var argseq__17179__auto__ = ((((3) < args__17178__auto__.length))?(new cljs.core.IndexedSeq(args__17178__auto__.slice((3)),(0))):null);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17179__auto__);
});

com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (selector,transform_fn,structure,p__28079){
var map__28080 = p__28079;
var map__28080__$1 = ((((!((map__28080 == null)))?((((map__28080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28080):map__28080);
var merge_fn = cljs.core.get.call(null,map__28080__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in.cljs$lang$applyTo = (function (seq28075){
var G__28076 = cljs.core.first.call(null,seq28075);
var seq28075__$1 = cljs.core.next.call(null,seq28075);
var G__28077 = cljs.core.first.call(null,seq28075__$1);
var seq28075__$2 = cljs.core.next.call(null,seq28075__$1);
var G__28078 = cljs.core.first.call(null,seq28075__$2);
var seq28075__$3 = cljs.core.next.call(null,seq28075__$2);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__28076,G__28077,G__28078,seq28075__$3);
});
/**
 * Takes a compiled selector that needs late-bound params and supplies it with
 *           an array of params and a position in the array from which to begin reading
 *           params. The return value is an executable selector.
 */
com.rpl.specter.bind_params_STAR_ = com.rpl.specter.impl.bind_params_STAR_;
com.rpl.specter.ALL = com.rpl.specter.comp_paths.call(null,com.rpl.specter.impl.__GT_AllStructurePath.call(null));
com.rpl.specter.VAL = com.rpl.specter.impl.__GT_ValCollect.call(null);
com.rpl.specter.LAST = com.rpl.specter.comp_paths.call(null,com.rpl.specter.impl.__GT_PosStructurePath.call(null,cljs.core.last,com.rpl.specter.impl.set_last));
com.rpl.specter.FIRST = com.rpl.specter.comp_paths.call(null,com.rpl.specter.impl.__GT_PosStructurePath.call(null,cljs.core.first,com.rpl.specter.impl.set_first));
/**
 * Uses start-fn and end-fn to determine the bounds of the subsequence
 *        to select when navigating. Each function takes in the structure as input.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + 2),vals__21365__auto__,structure__21367__auto__);
});
var start_fn = (params21363[(params_idx21364 + (0))]);
var end_fn = (params21363[(params_idx21364 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
}),(function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + 2),vals__21365__auto__,structure__21367__auto__);
});
var start_fn = (params21363[(params_idx21364 + (0))]);
var end_fn = (params21363[(params_idx21364 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
})),2);
/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + 2),vals__21365__auto__,structure__21367__auto__);
});
var start = (params21363[(params_idx21364 + (0))]);
var end = (params21363[(params_idx21364 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start,end,next_fn);
}),(function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + 2),vals__21365__auto__,structure__21367__auto__);
});
var start = (params21363[(params_idx21364 + (0))]);
var end = (params21363[(params_idx21364 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start,end,next_fn);
})),2);
com.rpl.specter.BEGINNING = com.rpl.specter.srange.call(null,(0),(0));
com.rpl.specter.END = com.rpl.specter.srange_dynamic.call(null,cljs.core.count,cljs.core.count);
/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + 1),vals__21365__auto__,structure__21367__auto__);
});
var aset = (params21363[(params_idx21364 + (0))]);
return next_fn.call(null,clojure.set.intersection.call(null,structure,aset));
}),(function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + 1),vals__21365__auto__,structure__21367__auto__);
});
var aset = (params21363[(params_idx21364 + (0))]);
var subset = clojure.set.intersection.call(null,structure,aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
})),1);
com.rpl.specter.walker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + 1),vals__21365__auto__,structure__21367__auto__);
});
var afn = (params21363[(params_idx21364 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + 1),vals__21365__auto__,structure__21367__auto__);
});
var afn = (params21363[(params_idx21364 + (0))]);
return com.rpl.specter.impl.walk_until.call(null,afn,next_fn,structure);
})),1);
com.rpl.specter.codewalker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + 1),vals__21365__auto__,structure__21367__auto__);
});
var afn = (params21363[(params_idx21364 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + 1),vals__21365__auto__,structure__21367__auto__);
});
var afn = (params21363[(params_idx21364 + (0))]);
return com.rpl.specter.impl.codewalk_until.call(null,afn,next_fn,structure);
})),1);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given selector path. An element matches the selector path if calling select
 *   on that element with the selector path yields anything other than an empty sequence.
 * 
 * The input path may be parameterized, in which case the result of filterer
 * will be parameterized in the order of which the parameterized selectors
 * were declared.
 */
com.rpl.specter.filterer = (function com$rpl$specter$filterer(var_args){
var args__17178__auto__ = [];
var len__17171__auto___28094 = arguments.length;
var i__17172__auto___28095 = (0);
while(true){
if((i__17172__auto___28095 < len__17171__auto___28094)){
args__17178__auto__.push((arguments[i__17172__auto___28095]));

var G__28096 = (i__17172__auto___28095 + (1));
i__17172__auto___28095 = G__28096;
continue;
} else {
}
break;
}

var argseq__17179__auto__ = ((((0) < args__17178__auto__.length))?(new cljs.core.IndexedSeq(args__17178__auto__.slice((0)),(0))):null);
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(argseq__17179__auto__);
});

com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21384__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21385__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21384__auto__);
var offsets__21386__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21385__auto__));
var num_params28089 = cljs.core.last.call(null,offsets__21386__auto__);
var latefns28087 = cljs.core.map.call(null,((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28089){
return (function (o__21387__auto__,p__21388__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21388__auto__))){
return ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28089){
return (function (params__21389__auto__,params_idx__21390__auto__){
return p__21388__auto__;
});
;})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28089))
} else {
return ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28089){
return (function (params__21389__auto__,params_idx__21390__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21388__auto__,params__21389__auto__,(params_idx__21390__auto__ + o__21387__auto__));
});
;})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28089))
}
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28089))
,offsets__21386__auto__,paths__21384__auto__);
var vec__28090 = latefns28087;
var G__28088 = cljs.core.nth.call(null,vec__28090,(0),null);
var ret__21391__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28089,latefns28087,vec__28090,G__28088){
return (function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28089,latefns28087,vec__28090,G__28088){
return (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + num_params28089),vals__21365__auto__,structure__21367__auto__);
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28089,latefns28087,vec__28090,G__28088))
;
var late = G__28088.call(null,params21363,params_idx21364);
return next_fn.call(null,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (next_fn,late,paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28089,latefns28087,vec__28090,G__28088){
return (function (p1__28085_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__28085_SHARP_);
});})(next_fn,late,paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28089,latefns28087,vec__28090,G__28088))
,structure)));
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28089,latefns28087,vec__28090,G__28088))
,((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28089,latefns28087,vec__28090,G__28088){
return (function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28089,latefns28087,vec__28090,G__28088){
return (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + num_params28089),vals__21365__auto__,structure__21367__auto__);
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28089,latefns28087,vec__28090,G__28088))
;
var late = G__28088.call(null,params21363,params_idx21364);
var vec__28091 = com.rpl.specter.impl.filter_PLUS_ancestry.call(null,late,structure);
var filtered = cljs.core.nth.call(null,vec__28091,(0),null);
var ancestry = cljs.core.nth.call(null,vec__28091,(1),null);
var next = cljs.core.vec.call(null,next_fn.call(null,filtered));
return cljs.core.reduce.call(null,((function (vec__28091,filtered,ancestry,next,next_fn,late,paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28089,latefns28087,vec__28090,G__28088){
return (function (curr,p__28092){
var vec__28093 = p__28092;
var newi = cljs.core.nth.call(null,vec__28093,(0),null);
var oldi = cljs.core.nth.call(null,vec__28093,(1),null);
return cljs.core.assoc.call(null,curr,oldi,cljs.core.get.call(null,next,newi));
});})(vec__28091,filtered,ancestry,next,next_fn,late,paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28089,latefns28087,vec__28090,G__28088))
,cljs.core.vec.call(null,structure),ancestry);
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28089,latefns28087,vec__28090,G__28088))
),num_params28089);
if(cljs.core._EQ_.call(null,(0),num_params28089)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21391__auto__,null,(0));
} else {
return ret__21391__auto__;
}
});

com.rpl.specter.filterer.cljs$lang$maxFixedArity = (0);

com.rpl.specter.filterer.cljs$lang$applyTo = (function (seq28086){
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28086));
});
com.rpl.specter.keypath = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + 1),vals__21365__auto__,structure__21367__auto__);
});
var key = (params21363[(params_idx21364 + (0))]);
return next_fn.call(null,cljs.core.get.call(null,structure,key));
}),(function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + 1),vals__21365__auto__,structure__21367__auto__);
});
var key = (params21363[(params_idx21364 + (0))]);
return cljs.core.assoc.call(null,structure,key,next_fn.call(null,cljs.core.get.call(null,structure,key)));
})),1);
com.rpl.specter.view = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + 1),vals__21365__auto__,structure__21367__auto__);
});
var afn = (params21363[(params_idx21364 + (0))]);
return next_fn.call(null,afn.call(null,structure));
}),(function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + 1),vals__21365__auto__,structure__21367__auto__);
});
var afn = (params21363[(params_idx21364 + (0))]);
return next_fn.call(null,afn.call(null,structure));
})),1);
/**
 * Filters the current value based on whether a selector finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 * 
 *   The input path may be parameterized, in which case the result of selected?
 *   will be parameterized in the order of which the parameterized selectors
 *   were declared.
 */
com.rpl.specter.selected_QMARK_ = (function com$rpl$specter$selected_QMARK_(var_args){
var args__17178__auto__ = [];
var len__17171__auto___28104 = arguments.length;
var i__17172__auto___28105 = (0);
while(true){
if((i__17172__auto___28105 < len__17171__auto___28104)){
args__17178__auto__.push((arguments[i__17172__auto___28105]));

var G__28106 = (i__17172__auto___28105 + (1));
i__17172__auto___28105 = G__28106;
continue;
} else {
}
break;
}

var argseq__17179__auto__ = ((((0) < args__17178__auto__.length))?(new cljs.core.IndexedSeq(args__17178__auto__.slice((0)),(0))):null);
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__17179__auto__);
});

com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21384__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21385__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21384__auto__);
var offsets__21386__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21385__auto__));
var num_params28102 = cljs.core.last.call(null,offsets__21386__auto__);
var latefns28100 = cljs.core.map.call(null,((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28102){
return (function (o__21387__auto__,p__21388__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21388__auto__))){
return ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28102){
return (function (params__21389__auto__,params_idx__21390__auto__){
return p__21388__auto__;
});
;})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28102))
} else {
return ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28102){
return (function (params__21389__auto__,params_idx__21390__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21388__auto__,params__21389__auto__,(params_idx__21390__auto__ + o__21387__auto__));
});
;})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28102))
}
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28102))
,offsets__21386__auto__,paths__21384__auto__);
var vec__28103 = latefns28100;
var G__28101 = cljs.core.nth.call(null,vec__28103,(0),null);
var ret__21391__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28102,latefns28100,vec__28103,G__28101){
return (function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28102,latefns28100,vec__28103,G__28101){
return (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + num_params28102),vals__21365__auto__,structure__21367__auto__);
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28102,latefns28100,vec__28103,G__28101))
;
var late = G__28101.call(null,params21363,params_idx21364);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28102,latefns28100,vec__28103,G__28101){
return (function (p1__28097_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__28097_SHARP_);
});})(next_fn,late,paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28102,latefns28100,vec__28103,G__28101))
,structure,next_fn);
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28102,latefns28100,vec__28103,G__28101))
,((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28102,latefns28100,vec__28103,G__28101){
return (function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28102,latefns28100,vec__28103,G__28101){
return (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + num_params28102),vals__21365__auto__,structure__21367__auto__);
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28102,latefns28100,vec__28103,G__28101))
;
var late = G__28101.call(null,params21363,params_idx21364);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28102,latefns28100,vec__28103,G__28101){
return (function (p1__28098_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__28098_SHARP_);
});})(next_fn,late,paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28102,latefns28100,vec__28103,G__28101))
,structure,next_fn);
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28102,latefns28100,vec__28103,G__28101))
),num_params28102);
if(cljs.core._EQ_.call(null,(0),num_params28102)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21391__auto__,null,(0));
} else {
return ret__21391__auto__;
}
});

com.rpl.specter.selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.selected_QMARK_.cljs$lang$applyTo = (function (seq28099){
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28099));
});
com.rpl.specter.not_selected_QMARK_ = (function com$rpl$specter$not_selected_QMARK_(var_args){
var args__17178__auto__ = [];
var len__17171__auto___28114 = arguments.length;
var i__17172__auto___28115 = (0);
while(true){
if((i__17172__auto___28115 < len__17171__auto___28114)){
args__17178__auto__.push((arguments[i__17172__auto___28115]));

var G__28116 = (i__17172__auto___28115 + (1));
i__17172__auto___28115 = G__28116;
continue;
} else {
}
break;
}

var argseq__17179__auto__ = ((((0) < args__17178__auto__.length))?(new cljs.core.IndexedSeq(args__17178__auto__.slice((0)),(0))):null);
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__17179__auto__);
});

com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21384__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21385__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21384__auto__);
var offsets__21386__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21385__auto__));
var num_params28112 = cljs.core.last.call(null,offsets__21386__auto__);
var latefns28110 = cljs.core.map.call(null,((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28112){
return (function (o__21387__auto__,p__21388__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21388__auto__))){
return ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28112){
return (function (params__21389__auto__,params_idx__21390__auto__){
return p__21388__auto__;
});
;})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28112))
} else {
return ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28112){
return (function (params__21389__auto__,params_idx__21390__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21388__auto__,params__21389__auto__,(params_idx__21390__auto__ + o__21387__auto__));
});
;})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28112))
}
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28112))
,offsets__21386__auto__,paths__21384__auto__);
var vec__28113 = latefns28110;
var G__28111 = cljs.core.nth.call(null,vec__28113,(0),null);
var ret__21391__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28112,latefns28110,vec__28113,G__28111){
return (function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28112,latefns28110,vec__28113,G__28111){
return (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + num_params28112),vals__21365__auto__,structure__21367__auto__);
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28112,latefns28110,vec__28113,G__28111))
;
var late = G__28111.call(null,params21363,params_idx21364);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28112,latefns28110,vec__28113,G__28111){
return (function (p1__28107_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__28107_SHARP_);
});})(next_fn,late,paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28112,latefns28110,vec__28113,G__28111))
,structure,next_fn);
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28112,latefns28110,vec__28113,G__28111))
,((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28112,latefns28110,vec__28113,G__28111){
return (function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28112,latefns28110,vec__28113,G__28111){
return (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + num_params28112),vals__21365__auto__,structure__21367__auto__);
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28112,latefns28110,vec__28113,G__28111))
;
var late = G__28111.call(null,params21363,params_idx21364);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28112,latefns28110,vec__28113,G__28111){
return (function (p1__28108_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__28108_SHARP_);
});})(next_fn,late,paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28112,latefns28110,vec__28113,G__28111))
,structure,next_fn);
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28112,latefns28110,vec__28113,G__28111))
),num_params28112);
if(cljs.core._EQ_.call(null,(0),num_params28112)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21391__auto__,null,(0));
} else {
return ret__21391__auto__;
}
});

com.rpl.specter.not_selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.not_selected_QMARK_.cljs$lang$applyTo = (function (seq28109){
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28109));
});
/**
 * Navigates to a view of the current value by transforming it with the
 * specified selector and update-fn.
 * 
 * The input path may be parameterized, in which case the result of transformed
 * will be parameterized in the order of which the parameterized selectors
 * were declared.
 */
com.rpl.specter.transformed = (function com$rpl$specter$transformed(path,update_fn){
var paths__21384__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21385__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21384__auto__);
var offsets__21386__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21385__auto__));
var num_params28123 = cljs.core.last.call(null,offsets__21386__auto__);
var latefns28121 = cljs.core.map.call(null,((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28123){
return (function (o__21387__auto__,p__21388__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21388__auto__))){
return ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28123){
return (function (params__21389__auto__,params_idx__21390__auto__){
return p__21388__auto__;
});
;})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28123))
} else {
return ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28123){
return (function (params__21389__auto__,params_idx__21390__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21388__auto__,params__21389__auto__,(params_idx__21390__auto__ + o__21387__auto__));
});
;})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28123))
}
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28123))
,offsets__21386__auto__,paths__21384__auto__);
var vec__28124 = latefns28121;
var G__28122 = cljs.core.nth.call(null,vec__28124,(0),null);
var ret__21391__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28123,latefns28121,vec__28124,G__28122){
return (function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28123,latefns28121,vec__28124,G__28122){
return (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + num_params28123),vals__21365__auto__,structure__21367__auto__);
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28123,latefns28121,vec__28124,G__28122))
;
var late = G__28122.call(null,params21363,params_idx21364);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28123,latefns28121,vec__28124,G__28122))
,((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28123,latefns28121,vec__28124,G__28122){
return (function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28123,latefns28121,vec__28124,G__28122){
return (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + num_params28123),vals__21365__auto__,structure__21367__auto__);
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28123,latefns28121,vec__28124,G__28122))
;
var late = G__28122.call(null,params21363,params_idx21364);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28123,latefns28121,vec__28124,G__28122))
),num_params28123);
if(cljs.core._EQ_.call(null,(0),num_params28123)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21391__auto__,null,(0));
} else {
return ret__21391__auto__;
}
});
cljs.core.Keyword.prototype.com$rpl$specter$protocols$StructurePath$ = true;

cljs.core.Keyword.prototype.com$rpl$specter$protocols$StructurePath$select_STAR_$arity$3 = (function (kw,structure,next_fn){
var kw__$1 = this;
return next_fn.call(null,cljs.core.get.call(null,structure,kw__$1));
});

cljs.core.Keyword.prototype.com$rpl$specter$protocols$StructurePath$transform_STAR_$arity$3 = (function (kw,structure,next_fn){
var kw__$1 = this;
return cljs.core.assoc.call(null,structure,kw__$1,next_fn.call(null,cljs.core.get.call(null,structure,kw__$1)));
});
(com.rpl.specter.protocols.StructurePath["function"] = true);

(com.rpl.specter.protocols.select_STAR_["function"] = (function (afn,structure,next_fn){
return com.rpl.specter.impl.filter_select.call(null,afn,structure,next_fn);
}));

(com.rpl.specter.protocols.transform_STAR_["function"] = (function (afn,structure,next_fn){
return com.rpl.specter.impl.filter_transform.call(null,afn,structure,next_fn);
}));
cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$StructurePath$ = true;

cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$StructurePath$select_STAR_$arity$3 = (function (aset,structure,next_fn){
var aset__$1 = this;
return com.rpl.specter.impl.filter_select.call(null,aset__$1,structure,next_fn);
});

cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$StructurePath$transform_STAR_$arity$3 = (function (aset,structure,next_fn){
var aset__$1 = this;
return com.rpl.specter.impl.filter_transform.call(null,aset__$1,structure,next_fn);
});
/**
 * Keeps the element only if it matches the supplied predicate. This is the
 *        late-bound parameterized version of using a function directly in a path.
 */
com.rpl.specter.pred = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + 1),vals__21365__auto__,structure__21367__auto__);
});
var afn = (params21363[(params_idx21364 + (0))]);
return com.rpl.specter.impl.filter_select.call(null,afn,structure,next_fn);
}),(function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + 1),vals__21365__auto__,structure__21367__auto__);
});
var afn = (params21363[(params_idx21364 + (0))]);
return com.rpl.specter.impl.filter_transform.call(null,afn,structure,next_fn);
})),1);
/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + 1),vals__21365__auto__,structure__21367__auto__);
});
var v = (params21363[(params_idx21364 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
}),(function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + 1),vals__21365__auto__,structure__21367__auto__);
});
var v = (params21363[(params_idx21364 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
})),1);
com.rpl.specter.NIL__GT_SET = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentHashSet.EMPTY);
com.rpl.specter.NIL__GT_LIST = com.rpl.specter.nil__GT_val.call(null,cljs.core.List.EMPTY);
com.rpl.specter.NIL__GT_VECTOR = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentVector.EMPTY);
com.rpl.specter.collect = (function com$rpl$specter$collect(var_args){
var args__17178__auto__ = [];
var len__17171__auto___28130 = arguments.length;
var i__17172__auto___28131 = (0);
while(true){
if((i__17172__auto___28131 < len__17171__auto___28130)){
args__17178__auto__.push((arguments[i__17172__auto___28131]));

var G__28132 = (i__17172__auto___28131 + (1));
i__17172__auto___28131 = G__28132;
continue;
} else {
}
break;
}

var argseq__17179__auto__ = ((((0) < args__17178__auto__.length))?(new cljs.core.IndexedSeq(args__17178__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(argseq__17179__auto__);
});

com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21384__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21385__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21384__auto__);
var offsets__21386__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21385__auto__));
var num_params28128 = cljs.core.last.call(null,offsets__21386__auto__);
var latefns28126 = cljs.core.map.call(null,((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28128){
return (function (o__21387__auto__,p__21388__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21388__auto__))){
return ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28128){
return (function (params__21389__auto__,params_idx__21390__auto__){
return p__21388__auto__;
});
;})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28128))
} else {
return ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28128){
return (function (params__21389__auto__,params_idx__21390__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21388__auto__,params__21389__auto__,(params_idx__21390__auto__ + o__21387__auto__));
});
;})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28128))
}
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28128))
,offsets__21386__auto__,paths__21384__auto__);
var vec__28129 = latefns28126;
var latefn28127 = cljs.core.nth.call(null,vec__28129,(0),null);
var ret__21391__auto__ = (function (){var collector__21376__auto__ = ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28128,latefns28126,vec__28129,latefn28127){
return (function (params21363,params_idx21364,vals__21377__auto__,structure,next_fn__21378__auto__){
var late = latefn28127.call(null,params21363,params_idx21364);
var c__21379__auto__ = com.rpl.specter.compiled_select.call(null,late,structure);
return next_fn__21378__auto__.call(null,params21363,(params_idx21364 + num_params28128),cljs.core.conj.call(null,vals__21377__auto__,c__21379__auto__),structure);
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28128,latefns28126,vec__28129,latefn28127))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__21376__auto__,collector__21376__auto__),num_params28128);
})();
if(cljs.core._EQ_.call(null,(0),num_params28128)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21391__auto__,null,(0));
} else {
return ret__21391__auto__;
}
});

com.rpl.specter.collect.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect.cljs$lang$applyTo = (function (seq28125){
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28125));
});
com.rpl.specter.collect_one = (function com$rpl$specter$collect_one(var_args){
var args__17178__auto__ = [];
var len__17171__auto___28138 = arguments.length;
var i__17172__auto___28139 = (0);
while(true){
if((i__17172__auto___28139 < len__17171__auto___28138)){
args__17178__auto__.push((arguments[i__17172__auto___28139]));

var G__28140 = (i__17172__auto___28139 + (1));
i__17172__auto___28139 = G__28140;
continue;
} else {
}
break;
}

var argseq__17179__auto__ = ((((0) < args__17178__auto__.length))?(new cljs.core.IndexedSeq(args__17178__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(argseq__17179__auto__);
});

com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21384__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21385__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21384__auto__);
var offsets__21386__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21385__auto__));
var num_params28136 = cljs.core.last.call(null,offsets__21386__auto__);
var latefns28134 = cljs.core.map.call(null,((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28136){
return (function (o__21387__auto__,p__21388__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21388__auto__))){
return ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28136){
return (function (params__21389__auto__,params_idx__21390__auto__){
return p__21388__auto__;
});
;})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28136))
} else {
return ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28136){
return (function (params__21389__auto__,params_idx__21390__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21388__auto__,params__21389__auto__,(params_idx__21390__auto__ + o__21387__auto__));
});
;})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28136))
}
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28136))
,offsets__21386__auto__,paths__21384__auto__);
var vec__28137 = latefns28134;
var latefn28135 = cljs.core.nth.call(null,vec__28137,(0),null);
var ret__21391__auto__ = (function (){var collector__21376__auto__ = ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28136,latefns28134,vec__28137,latefn28135){
return (function (params21363,params_idx21364,vals__21377__auto__,structure,next_fn__21378__auto__){
var late = latefn28135.call(null,params21363,params_idx21364);
var c__21379__auto__ = com.rpl.specter.compiled_select_one.call(null,late,structure);
return next_fn__21378__auto__.call(null,params21363,(params_idx21364 + num_params28136),cljs.core.conj.call(null,vals__21377__auto__,c__21379__auto__),structure);
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28136,latefns28134,vec__28137,latefn28135))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__21376__auto__,collector__21376__auto__),num_params28136);
})();
if(cljs.core._EQ_.call(null,(0),num_params28136)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21391__auto__,null,(0));
} else {
return ret__21391__auto__;
}
});

com.rpl.specter.collect_one.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect_one.cljs$lang$applyTo = (function (seq28133){
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28133));
});
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = (function (){var collector__21376__auto__ = (function (params21363,params_idx21364,vals__21377__auto__,structure,next_fn__21378__auto__){
var val = (params21363[(params_idx21364 + (0))]);
var c__21379__auto__ = val;
return next_fn__21378__auto__.call(null,params21363,(params_idx21364 + 1),cljs.core.conj.call(null,vals__21377__auto__,c__21379__auto__),structure);
});
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__21376__auto__,collector__21376__auto__),1);
})();
/**
 * Takes in alternating cond-path selector cond-path selector...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following selector for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 * 
 * The input paths may be parameterized, in which case the result of cond-path
 * will be parameterized in the order of which the parameterized selectors
 * were declared.
 */
com.rpl.specter.cond_path = (function com$rpl$specter$cond_path(var_args){
var args__17178__auto__ = [];
var len__17171__auto___28144 = arguments.length;
var i__17172__auto___28145 = (0);
while(true){
if((i__17172__auto___28145 < len__17171__auto___28144)){
args__17178__auto__.push((arguments[i__17172__auto___28145]));

var G__28146 = (i__17172__auto___28145 + (1));
i__17172__auto___28145 = G__28146;
continue;
} else {
}
break;
}

var argseq__17179__auto__ = ((((0) < args__17178__auto__.length))?(new cljs.core.IndexedSeq(args__17178__auto__.slice((0)),(0))):null);
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(argseq__17179__auto__);
});

com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic = (function (conds){
var paths__21384__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,conds);
var needed_params__21385__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21384__auto__);
var offsets__21386__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21385__auto__));
var num_params28143 = cljs.core.last.call(null,offsets__21386__auto__);
var latefns28142 = cljs.core.map.call(null,((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28143){
return (function (o__21387__auto__,p__21388__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21388__auto__))){
return ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28143){
return (function (params__21389__auto__,params_idx__21390__auto__){
return p__21388__auto__;
});
;})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28143))
} else {
return ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28143){
return (function (params__21389__auto__,params_idx__21390__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21388__auto__,params__21389__auto__,(params_idx__21390__auto__ + o__21387__auto__));
});
;})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28143))
}
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28143))
,offsets__21386__auto__,paths__21384__auto__);
var ret__21391__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28143,latefns28142){
return (function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28143,latefns28142){
return (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + num_params28143),vals__21365__auto__,structure__21367__auto__);
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28143,latefns28142))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28143,latefns28142){
return (function (l__21434__auto__){
return l__21434__auto__.call(null,params21363,params_idx21364);
});})(next_fn,paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28143,latefns28142))
,latefns28142);
var temp__4423__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(cljs.core.truth_(temp__4423__auto__)){
var selector = temp__4423__auto__;
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,com.rpl.specter.compiled_select.call(null,selector,structure)));
} else {
return null;
}
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28143,latefns28142))
,((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28143,latefns28142){
return (function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28143,latefns28142){
return (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + num_params28143),vals__21365__auto__,structure__21367__auto__);
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28143,latefns28142))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28143,latefns28142){
return (function (l__21434__auto__){
return l__21434__auto__.call(null,params21363,params_idx21364);
});})(next_fn,paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28143,latefns28142))
,latefns28142);
var temp__4423__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(cljs.core.truth_(temp__4423__auto__)){
var selector = temp__4423__auto__;
return com.rpl.specter.compiled_transform.call(null,selector,next_fn,structure);
} else {
return structure;
}
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28143,latefns28142))
),num_params28143);
if(cljs.core._EQ_.call(null,(0),num_params28143)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21391__auto__,null,(0));
} else {
return ret__21391__auto__;
}
});

com.rpl.specter.cond_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.cond_path.cljs$lang$applyTo = (function (seq28141){
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28141));
});
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = (function com$rpl$specter$if_path(var_args){
var args28147 = [];
var len__17171__auto___28150 = arguments.length;
var i__17172__auto___28151 = (0);
while(true){
if((i__17172__auto___28151 < len__17171__auto___28150)){
args28147.push((arguments[i__17172__auto___28151]));

var G__28152 = (i__17172__auto___28151 + (1));
i__17172__auto___28151 = G__28152;
continue;
} else {
}
break;
}

var G__28149 = args28147.length;
switch (G__28149) {
case 2:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28147.length)].join('')));

}
});

com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 = (function (cond_p,if_path){
return com.rpl.specter.cond_path.call(null,cond_p,if_path);
});

com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 = (function (cond_p,if_path,else_path){
return com.rpl.specter.cond_path.call(null,cond_p,if_path,null,else_path);
});

com.rpl.specter.if_path.cljs$lang$maxFixedArity = 3;
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = (function com$rpl$specter$multi_path(var_args){
var args__17178__auto__ = [];
var len__17171__auto___28158 = arguments.length;
var i__17172__auto___28159 = (0);
while(true){
if((i__17172__auto___28159 < len__17171__auto___28158)){
args__17178__auto__.push((arguments[i__17172__auto___28159]));

var G__28160 = (i__17172__auto___28159 + (1));
i__17172__auto___28159 = G__28160;
continue;
} else {
}
break;
}

var argseq__17179__auto__ = ((((0) < args__17178__auto__.length))?(new cljs.core.IndexedSeq(args__17178__auto__.slice((0)),(0))):null);
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(argseq__17179__auto__);
});

com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
var paths__21384__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,paths);
var needed_params__21385__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21384__auto__);
var offsets__21386__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21385__auto__));
var num_params28157 = cljs.core.last.call(null,offsets__21386__auto__);
var latefns28156 = cljs.core.map.call(null,((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28157){
return (function (o__21387__auto__,p__21388__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21388__auto__))){
return ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28157){
return (function (params__21389__auto__,params_idx__21390__auto__){
return p__21388__auto__;
});
;})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28157))
} else {
return ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28157){
return (function (params__21389__auto__,params_idx__21390__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21388__auto__,params__21389__auto__,(params_idx__21390__auto__ + o__21387__auto__));
});
;})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28157))
}
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28157))
,offsets__21386__auto__,paths__21384__auto__);
var ret__21391__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28157,latefns28156){
return (function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28157,latefns28156){
return (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + num_params28157),vals__21365__auto__,structure__21367__auto__);
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28157,latefns28156))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28157,latefns28156){
return (function (l__21434__auto__){
return l__21434__auto__.call(null,params21363,params_idx21364);
});})(next_fn,paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28157,latefns28156))
,latefns28156);
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,cljs.core.mapcat.call(null,((function (next_fn,compiled_paths,paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28157,latefns28156){
return (function (p1__28154_SHARP_){
return com.rpl.specter.compiled_select.call(null,p1__28154_SHARP_,structure);
});})(next_fn,compiled_paths,paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28157,latefns28156))
,compiled_paths)));
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28157,latefns28156))
,((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28157,latefns28156){
return (function (params21363,params_idx21364,vals__21365__auto__,structure,next_fn__21366__auto__){
var next_fn = ((function (paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28157,latefns28156){
return (function (structure__21367__auto__){
return next_fn__21366__auto__.call(null,params21363,(params_idx21364 + num_params28157),vals__21365__auto__,structure__21367__auto__);
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28157,latefns28156))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28157,latefns28156){
return (function (l__21434__auto__){
return l__21434__auto__.call(null,params21363,params_idx21364);
});})(next_fn,paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28157,latefns28156))
,latefns28156);
return cljs.core.reduce.call(null,((function (next_fn,compiled_paths,paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28157,latefns28156){
return (function (structure__$1,selector){
return com.rpl.specter.compiled_transform.call(null,selector,next_fn,structure__$1);
});})(next_fn,compiled_paths,paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28157,latefns28156))
,structure,compiled_paths);
});})(paths__21384__auto__,needed_params__21385__auto__,offsets__21386__auto__,num_params28157,latefns28156))
),num_params28157);
if(cljs.core._EQ_.call(null,(0),num_params28157)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21391__auto__,null,(0));
} else {
return ret__21391__auto__;
}
});

com.rpl.specter.multi_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.multi_path.cljs$lang$applyTo = (function (seq28155){
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28155));
});

//# sourceMappingURL=specter.js.map?rel=1448902874445