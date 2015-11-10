// Compiled by ClojureScript 1.7.122 {}
goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('clojure.set');
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__17139__auto__ = [];
var len__17132__auto___27925 = arguments.length;
var i__17133__auto___27926 = (0);
while(true){
if((i__17133__auto___27926 < len__17132__auto___27925)){
args__17139__auto__.push((arguments[i__17133__auto___27926]));

var G__27927 = (i__17133__auto___27926 + (1));
i__17133__auto___27926 = G__27927;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((0) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((0)),(0))):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__17140__auto__);
});

com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,cljs.core.vec.call(null,paths));
});

com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0);

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq27924){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27924));
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
var args__17139__auto__ = [];
var len__17132__auto___27936 = arguments.length;
var i__17133__auto___27937 = (0);
while(true){
if((i__17133__auto___27937 < len__17132__auto___27936)){
args__17139__auto__.push((arguments[i__17133__auto___27937]));

var G__27938 = (i__17133__auto___27937 + (1));
i__17133__auto___27937 = G__27938;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((3) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((3)),(0))):null);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17140__auto__);
});

com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (selector,transform_fn,structure,p__27932){
var map__27933 = p__27932;
var map__27933__$1 = ((((!((map__27933 == null)))?((((map__27933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27933):map__27933);
var merge_fn = cljs.core.get.call(null,map__27933__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.call(null,null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.compiled_transform.call(null,selector,((function (state,map__27933,map__27933__$1,merge_fn){
return (function (e){
var res = transform_fn.call(null,e);
if(cljs.core.truth_(res)){
var vec__27935 = res;
var ret = cljs.core.nth.call(null,vec__27935,(0),null);
var user_ret = cljs.core.nth.call(null,vec__27935,(1),null);
com.rpl.specter.impl.set_cell_BANG_.call(null,state,merge_fn.call(null,com.rpl.specter.impl.get_cell.call(null,state),user_ret));

return ret;
} else {
return e;
}
});})(state,map__27933,map__27933__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell.call(null,state)], null);
});

com.rpl.specter.compiled_replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.compiled_replace_in.cljs$lang$applyTo = (function (seq27928){
var G__27929 = cljs.core.first.call(null,seq27928);
var seq27928__$1 = cljs.core.next.call(null,seq27928);
var G__27930 = cljs.core.first.call(null,seq27928__$1);
var seq27928__$2 = cljs.core.next.call(null,seq27928__$1);
var G__27931 = cljs.core.first.call(null,seq27928__$2);
var seq27928__$3 = cljs.core.next.call(null,seq27928__$2);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic(G__27929,G__27930,G__27931,seq27928__$3);
});
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 *   The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformd in the data structure.
 */
com.rpl.specter.replace_in = (function com$rpl$specter$replace_in(var_args){
var args__17139__auto__ = [];
var len__17132__auto___27946 = arguments.length;
var i__17133__auto___27947 = (0);
while(true){
if((i__17133__auto___27947 < len__17132__auto___27946)){
args__17139__auto__.push((arguments[i__17133__auto___27947]));

var G__27948 = (i__17133__auto___27947 + (1));
i__17133__auto___27947 = G__27948;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((3) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((3)),(0))):null);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17140__auto__);
});

com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (selector,transform_fn,structure,p__27943){
var map__27944 = p__27943;
var map__27944__$1 = ((((!((map__27944 == null)))?((((map__27944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27944):map__27944);
var merge_fn = cljs.core.get.call(null,map__27944__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in.cljs$lang$applyTo = (function (seq27939){
var G__27940 = cljs.core.first.call(null,seq27939);
var seq27939__$1 = cljs.core.next.call(null,seq27939);
var G__27941 = cljs.core.first.call(null,seq27939__$1);
var seq27939__$2 = cljs.core.next.call(null,seq27939__$1);
var G__27942 = cljs.core.first.call(null,seq27939__$2);
var seq27939__$3 = cljs.core.next.call(null,seq27939__$2);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__27940,G__27941,G__27942,seq27939__$3);
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
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + 2),vals__21327__auto__,structure__21329__auto__);
});
var start_fn = (params21325[(params_idx21326 + (0))]);
var end_fn = (params21325[(params_idx21326 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
}),(function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + 2),vals__21327__auto__,structure__21329__auto__);
});
var start_fn = (params21325[(params_idx21326 + (0))]);
var end_fn = (params21325[(params_idx21326 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
})),2);
/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + 2),vals__21327__auto__,structure__21329__auto__);
});
var start = (params21325[(params_idx21326 + (0))]);
var end = (params21325[(params_idx21326 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start,end,next_fn);
}),(function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + 2),vals__21327__auto__,structure__21329__auto__);
});
var start = (params21325[(params_idx21326 + (0))]);
var end = (params21325[(params_idx21326 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start,end,next_fn);
})),2);
com.rpl.specter.BEGINNING = com.rpl.specter.srange.call(null,(0),(0));
com.rpl.specter.END = com.rpl.specter.srange_dynamic.call(null,cljs.core.count,cljs.core.count);
/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + 1),vals__21327__auto__,structure__21329__auto__);
});
var aset = (params21325[(params_idx21326 + (0))]);
return next_fn.call(null,clojure.set.intersection.call(null,structure,aset));
}),(function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + 1),vals__21327__auto__,structure__21329__auto__);
});
var aset = (params21325[(params_idx21326 + (0))]);
var subset = clojure.set.intersection.call(null,structure,aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
})),1);
com.rpl.specter.walker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + 1),vals__21327__auto__,structure__21329__auto__);
});
var afn = (params21325[(params_idx21326 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + 1),vals__21327__auto__,structure__21329__auto__);
});
var afn = (params21325[(params_idx21326 + (0))]);
return com.rpl.specter.impl.walk_until.call(null,afn,next_fn,structure);
})),1);
com.rpl.specter.codewalker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + 1),vals__21327__auto__,structure__21329__auto__);
});
var afn = (params21325[(params_idx21326 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + 1),vals__21327__auto__,structure__21329__auto__);
});
var afn = (params21325[(params_idx21326 + (0))]);
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
var args__17139__auto__ = [];
var len__17132__auto___27958 = arguments.length;
var i__17133__auto___27959 = (0);
while(true){
if((i__17133__auto___27959 < len__17132__auto___27958)){
args__17139__auto__.push((arguments[i__17133__auto___27959]));

var G__27960 = (i__17133__auto___27959 + (1));
i__17133__auto___27959 = G__27960;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((0) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((0)),(0))):null);
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(argseq__17140__auto__);
});

com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21346__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21347__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21346__auto__);
var offsets__21348__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21347__auto__));
var num_params27953 = cljs.core.last.call(null,offsets__21348__auto__);
var latefns27951 = cljs.core.map.call(null,((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27953){
return (function (o__21349__auto__,p__21350__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21350__auto__))){
return ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27953){
return (function (params__21351__auto__,params_idx__21352__auto__){
return p__21350__auto__;
});
;})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27953))
} else {
return ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27953){
return (function (params__21351__auto__,params_idx__21352__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21350__auto__,params__21351__auto__,(params_idx__21352__auto__ + o__21349__auto__));
});
;})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27953))
}
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27953))
,offsets__21348__auto__,paths__21346__auto__);
var vec__27954 = latefns27951;
var G__27952 = cljs.core.nth.call(null,vec__27954,(0),null);
var ret__21353__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27953,latefns27951,vec__27954,G__27952){
return (function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27953,latefns27951,vec__27954,G__27952){
return (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + num_params27953),vals__21327__auto__,structure__21329__auto__);
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27953,latefns27951,vec__27954,G__27952))
;
var late = G__27952.call(null,params21325,params_idx21326);
return next_fn.call(null,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (next_fn,late,paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27953,latefns27951,vec__27954,G__27952){
return (function (p1__27949_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__27949_SHARP_);
});})(next_fn,late,paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27953,latefns27951,vec__27954,G__27952))
,structure)));
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27953,latefns27951,vec__27954,G__27952))
,((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27953,latefns27951,vec__27954,G__27952){
return (function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27953,latefns27951,vec__27954,G__27952){
return (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + num_params27953),vals__21327__auto__,structure__21329__auto__);
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27953,latefns27951,vec__27954,G__27952))
;
var late = G__27952.call(null,params21325,params_idx21326);
var vec__27955 = com.rpl.specter.impl.filter_PLUS_ancestry.call(null,late,structure);
var filtered = cljs.core.nth.call(null,vec__27955,(0),null);
var ancestry = cljs.core.nth.call(null,vec__27955,(1),null);
var next = cljs.core.vec.call(null,next_fn.call(null,filtered));
return cljs.core.reduce.call(null,((function (vec__27955,filtered,ancestry,next,next_fn,late,paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27953,latefns27951,vec__27954,G__27952){
return (function (curr,p__27956){
var vec__27957 = p__27956;
var newi = cljs.core.nth.call(null,vec__27957,(0),null);
var oldi = cljs.core.nth.call(null,vec__27957,(1),null);
return cljs.core.assoc.call(null,curr,oldi,cljs.core.get.call(null,next,newi));
});})(vec__27955,filtered,ancestry,next,next_fn,late,paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27953,latefns27951,vec__27954,G__27952))
,cljs.core.vec.call(null,structure),ancestry);
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27953,latefns27951,vec__27954,G__27952))
),num_params27953);
if(cljs.core._EQ_.call(null,(0),num_params27953)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21353__auto__,null,(0));
} else {
return ret__21353__auto__;
}
});

com.rpl.specter.filterer.cljs$lang$maxFixedArity = (0);

com.rpl.specter.filterer.cljs$lang$applyTo = (function (seq27950){
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27950));
});
com.rpl.specter.keypath = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + 1),vals__21327__auto__,structure__21329__auto__);
});
var key = (params21325[(params_idx21326 + (0))]);
return next_fn.call(null,cljs.core.get.call(null,structure,key));
}),(function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + 1),vals__21327__auto__,structure__21329__auto__);
});
var key = (params21325[(params_idx21326 + (0))]);
return cljs.core.assoc.call(null,structure,key,next_fn.call(null,cljs.core.get.call(null,structure,key)));
})),1);
com.rpl.specter.view = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + 1),vals__21327__auto__,structure__21329__auto__);
});
var afn = (params21325[(params_idx21326 + (0))]);
return next_fn.call(null,afn.call(null,structure));
}),(function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + 1),vals__21327__auto__,structure__21329__auto__);
});
var afn = (params21325[(params_idx21326 + (0))]);
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
var args__17139__auto__ = [];
var len__17132__auto___27968 = arguments.length;
var i__17133__auto___27969 = (0);
while(true){
if((i__17133__auto___27969 < len__17132__auto___27968)){
args__17139__auto__.push((arguments[i__17133__auto___27969]));

var G__27970 = (i__17133__auto___27969 + (1));
i__17133__auto___27969 = G__27970;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((0) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((0)),(0))):null);
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__17140__auto__);
});

com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21346__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21347__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21346__auto__);
var offsets__21348__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21347__auto__));
var num_params27966 = cljs.core.last.call(null,offsets__21348__auto__);
var latefns27964 = cljs.core.map.call(null,((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27966){
return (function (o__21349__auto__,p__21350__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21350__auto__))){
return ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27966){
return (function (params__21351__auto__,params_idx__21352__auto__){
return p__21350__auto__;
});
;})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27966))
} else {
return ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27966){
return (function (params__21351__auto__,params_idx__21352__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21350__auto__,params__21351__auto__,(params_idx__21352__auto__ + o__21349__auto__));
});
;})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27966))
}
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27966))
,offsets__21348__auto__,paths__21346__auto__);
var vec__27967 = latefns27964;
var G__27965 = cljs.core.nth.call(null,vec__27967,(0),null);
var ret__21353__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27966,latefns27964,vec__27967,G__27965){
return (function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27966,latefns27964,vec__27967,G__27965){
return (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + num_params27966),vals__21327__auto__,structure__21329__auto__);
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27966,latefns27964,vec__27967,G__27965))
;
var late = G__27965.call(null,params21325,params_idx21326);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27966,latefns27964,vec__27967,G__27965){
return (function (p1__27961_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__27961_SHARP_);
});})(next_fn,late,paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27966,latefns27964,vec__27967,G__27965))
,structure,next_fn);
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27966,latefns27964,vec__27967,G__27965))
,((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27966,latefns27964,vec__27967,G__27965){
return (function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27966,latefns27964,vec__27967,G__27965){
return (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + num_params27966),vals__21327__auto__,structure__21329__auto__);
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27966,latefns27964,vec__27967,G__27965))
;
var late = G__27965.call(null,params21325,params_idx21326);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27966,latefns27964,vec__27967,G__27965){
return (function (p1__27962_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__27962_SHARP_);
});})(next_fn,late,paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27966,latefns27964,vec__27967,G__27965))
,structure,next_fn);
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27966,latefns27964,vec__27967,G__27965))
),num_params27966);
if(cljs.core._EQ_.call(null,(0),num_params27966)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21353__auto__,null,(0));
} else {
return ret__21353__auto__;
}
});

com.rpl.specter.selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.selected_QMARK_.cljs$lang$applyTo = (function (seq27963){
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27963));
});
com.rpl.specter.not_selected_QMARK_ = (function com$rpl$specter$not_selected_QMARK_(var_args){
var args__17139__auto__ = [];
var len__17132__auto___27978 = arguments.length;
var i__17133__auto___27979 = (0);
while(true){
if((i__17133__auto___27979 < len__17132__auto___27978)){
args__17139__auto__.push((arguments[i__17133__auto___27979]));

var G__27980 = (i__17133__auto___27979 + (1));
i__17133__auto___27979 = G__27980;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((0) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((0)),(0))):null);
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__17140__auto__);
});

com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21346__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21347__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21346__auto__);
var offsets__21348__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21347__auto__));
var num_params27976 = cljs.core.last.call(null,offsets__21348__auto__);
var latefns27974 = cljs.core.map.call(null,((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27976){
return (function (o__21349__auto__,p__21350__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21350__auto__))){
return ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27976){
return (function (params__21351__auto__,params_idx__21352__auto__){
return p__21350__auto__;
});
;})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27976))
} else {
return ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27976){
return (function (params__21351__auto__,params_idx__21352__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21350__auto__,params__21351__auto__,(params_idx__21352__auto__ + o__21349__auto__));
});
;})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27976))
}
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27976))
,offsets__21348__auto__,paths__21346__auto__);
var vec__27977 = latefns27974;
var G__27975 = cljs.core.nth.call(null,vec__27977,(0),null);
var ret__21353__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27976,latefns27974,vec__27977,G__27975){
return (function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27976,latefns27974,vec__27977,G__27975){
return (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + num_params27976),vals__21327__auto__,structure__21329__auto__);
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27976,latefns27974,vec__27977,G__27975))
;
var late = G__27975.call(null,params21325,params_idx21326);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27976,latefns27974,vec__27977,G__27975){
return (function (p1__27971_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__27971_SHARP_);
});})(next_fn,late,paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27976,latefns27974,vec__27977,G__27975))
,structure,next_fn);
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27976,latefns27974,vec__27977,G__27975))
,((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27976,latefns27974,vec__27977,G__27975){
return (function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27976,latefns27974,vec__27977,G__27975){
return (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + num_params27976),vals__21327__auto__,structure__21329__auto__);
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27976,latefns27974,vec__27977,G__27975))
;
var late = G__27975.call(null,params21325,params_idx21326);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27976,latefns27974,vec__27977,G__27975){
return (function (p1__27972_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__27972_SHARP_);
});})(next_fn,late,paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27976,latefns27974,vec__27977,G__27975))
,structure,next_fn);
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27976,latefns27974,vec__27977,G__27975))
),num_params27976);
if(cljs.core._EQ_.call(null,(0),num_params27976)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21353__auto__,null,(0));
} else {
return ret__21353__auto__;
}
});

com.rpl.specter.not_selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.not_selected_QMARK_.cljs$lang$applyTo = (function (seq27973){
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27973));
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
var paths__21346__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21347__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21346__auto__);
var offsets__21348__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21347__auto__));
var num_params27987 = cljs.core.last.call(null,offsets__21348__auto__);
var latefns27985 = cljs.core.map.call(null,((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27987){
return (function (o__21349__auto__,p__21350__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21350__auto__))){
return ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27987){
return (function (params__21351__auto__,params_idx__21352__auto__){
return p__21350__auto__;
});
;})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27987))
} else {
return ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27987){
return (function (params__21351__auto__,params_idx__21352__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21350__auto__,params__21351__auto__,(params_idx__21352__auto__ + o__21349__auto__));
});
;})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27987))
}
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27987))
,offsets__21348__auto__,paths__21346__auto__);
var vec__27988 = latefns27985;
var G__27986 = cljs.core.nth.call(null,vec__27988,(0),null);
var ret__21353__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27987,latefns27985,vec__27988,G__27986){
return (function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27987,latefns27985,vec__27988,G__27986){
return (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + num_params27987),vals__21327__auto__,structure__21329__auto__);
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27987,latefns27985,vec__27988,G__27986))
;
var late = G__27986.call(null,params21325,params_idx21326);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27987,latefns27985,vec__27988,G__27986))
,((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27987,latefns27985,vec__27988,G__27986){
return (function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27987,latefns27985,vec__27988,G__27986){
return (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + num_params27987),vals__21327__auto__,structure__21329__auto__);
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27987,latefns27985,vec__27988,G__27986))
;
var late = G__27986.call(null,params21325,params_idx21326);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27987,latefns27985,vec__27988,G__27986))
),num_params27987);
if(cljs.core._EQ_.call(null,(0),num_params27987)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21353__auto__,null,(0));
} else {
return ret__21353__auto__;
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
com.rpl.specter.pred = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + 1),vals__21327__auto__,structure__21329__auto__);
});
var afn = (params21325[(params_idx21326 + (0))]);
return com.rpl.specter.impl.filter_select.call(null,afn,structure,next_fn);
}),(function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + 1),vals__21327__auto__,structure__21329__auto__);
});
var afn = (params21325[(params_idx21326 + (0))]);
return com.rpl.specter.impl.filter_transform.call(null,afn,structure,next_fn);
})),1);
/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + 1),vals__21327__auto__,structure__21329__auto__);
});
var v = (params21325[(params_idx21326 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
}),(function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + 1),vals__21327__auto__,structure__21329__auto__);
});
var v = (params21325[(params_idx21326 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
})),1);
com.rpl.specter.NIL__GT_SET = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentHashSet.EMPTY);
com.rpl.specter.NIL__GT_LIST = com.rpl.specter.nil__GT_val.call(null,cljs.core.List.EMPTY);
com.rpl.specter.NIL__GT_VECTOR = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentVector.EMPTY);
com.rpl.specter.collect = (function com$rpl$specter$collect(var_args){
var args__17139__auto__ = [];
var len__17132__auto___27994 = arguments.length;
var i__17133__auto___27995 = (0);
while(true){
if((i__17133__auto___27995 < len__17132__auto___27994)){
args__17139__auto__.push((arguments[i__17133__auto___27995]));

var G__27996 = (i__17133__auto___27995 + (1));
i__17133__auto___27995 = G__27996;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((0) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(argseq__17140__auto__);
});

com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21346__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21347__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21346__auto__);
var offsets__21348__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21347__auto__));
var num_params27992 = cljs.core.last.call(null,offsets__21348__auto__);
var latefns27990 = cljs.core.map.call(null,((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27992){
return (function (o__21349__auto__,p__21350__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21350__auto__))){
return ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27992){
return (function (params__21351__auto__,params_idx__21352__auto__){
return p__21350__auto__;
});
;})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27992))
} else {
return ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27992){
return (function (params__21351__auto__,params_idx__21352__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21350__auto__,params__21351__auto__,(params_idx__21352__auto__ + o__21349__auto__));
});
;})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27992))
}
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27992))
,offsets__21348__auto__,paths__21346__auto__);
var vec__27993 = latefns27990;
var latefn27991 = cljs.core.nth.call(null,vec__27993,(0),null);
var ret__21353__auto__ = (function (){var collector__21338__auto__ = ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27992,latefns27990,vec__27993,latefn27991){
return (function (params21325,params_idx21326,vals__21339__auto__,structure,next_fn__21340__auto__){
var late = latefn27991.call(null,params21325,params_idx21326);
var c__21341__auto__ = com.rpl.specter.compiled_select.call(null,late,structure);
return next_fn__21340__auto__.call(null,params21325,(params_idx21326 + num_params27992),cljs.core.conj.call(null,vals__21339__auto__,c__21341__auto__),structure);
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params27992,latefns27990,vec__27993,latefn27991))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__21338__auto__,collector__21338__auto__),num_params27992);
})();
if(cljs.core._EQ_.call(null,(0),num_params27992)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21353__auto__,null,(0));
} else {
return ret__21353__auto__;
}
});

com.rpl.specter.collect.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect.cljs$lang$applyTo = (function (seq27989){
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27989));
});
com.rpl.specter.collect_one = (function com$rpl$specter$collect_one(var_args){
var args__17139__auto__ = [];
var len__17132__auto___28002 = arguments.length;
var i__17133__auto___28003 = (0);
while(true){
if((i__17133__auto___28003 < len__17132__auto___28002)){
args__17139__auto__.push((arguments[i__17133__auto___28003]));

var G__28004 = (i__17133__auto___28003 + (1));
i__17133__auto___28003 = G__28004;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((0) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(argseq__17140__auto__);
});

com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21346__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21347__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21346__auto__);
var offsets__21348__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21347__auto__));
var num_params28000 = cljs.core.last.call(null,offsets__21348__auto__);
var latefns27998 = cljs.core.map.call(null,((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28000){
return (function (o__21349__auto__,p__21350__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21350__auto__))){
return ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28000){
return (function (params__21351__auto__,params_idx__21352__auto__){
return p__21350__auto__;
});
;})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28000))
} else {
return ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28000){
return (function (params__21351__auto__,params_idx__21352__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21350__auto__,params__21351__auto__,(params_idx__21352__auto__ + o__21349__auto__));
});
;})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28000))
}
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28000))
,offsets__21348__auto__,paths__21346__auto__);
var vec__28001 = latefns27998;
var latefn27999 = cljs.core.nth.call(null,vec__28001,(0),null);
var ret__21353__auto__ = (function (){var collector__21338__auto__ = ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28000,latefns27998,vec__28001,latefn27999){
return (function (params21325,params_idx21326,vals__21339__auto__,structure,next_fn__21340__auto__){
var late = latefn27999.call(null,params21325,params_idx21326);
var c__21341__auto__ = com.rpl.specter.compiled_select_one.call(null,late,structure);
return next_fn__21340__auto__.call(null,params21325,(params_idx21326 + num_params28000),cljs.core.conj.call(null,vals__21339__auto__,c__21341__auto__),structure);
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28000,latefns27998,vec__28001,latefn27999))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__21338__auto__,collector__21338__auto__),num_params28000);
})();
if(cljs.core._EQ_.call(null,(0),num_params28000)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21353__auto__,null,(0));
} else {
return ret__21353__auto__;
}
});

com.rpl.specter.collect_one.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect_one.cljs$lang$applyTo = (function (seq27997){
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27997));
});
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = (function (){var collector__21338__auto__ = (function (params21325,params_idx21326,vals__21339__auto__,structure,next_fn__21340__auto__){
var val = (params21325[(params_idx21326 + (0))]);
var c__21341__auto__ = val;
return next_fn__21340__auto__.call(null,params21325,(params_idx21326 + 1),cljs.core.conj.call(null,vals__21339__auto__,c__21341__auto__),structure);
});
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__21338__auto__,collector__21338__auto__),1);
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
var args__17139__auto__ = [];
var len__17132__auto___28008 = arguments.length;
var i__17133__auto___28009 = (0);
while(true){
if((i__17133__auto___28009 < len__17132__auto___28008)){
args__17139__auto__.push((arguments[i__17133__auto___28009]));

var G__28010 = (i__17133__auto___28009 + (1));
i__17133__auto___28009 = G__28010;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((0) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((0)),(0))):null);
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(argseq__17140__auto__);
});

com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic = (function (conds){
var paths__21346__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,conds);
var needed_params__21347__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21346__auto__);
var offsets__21348__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21347__auto__));
var num_params28007 = cljs.core.last.call(null,offsets__21348__auto__);
var latefns28006 = cljs.core.map.call(null,((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28007){
return (function (o__21349__auto__,p__21350__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21350__auto__))){
return ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28007){
return (function (params__21351__auto__,params_idx__21352__auto__){
return p__21350__auto__;
});
;})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28007))
} else {
return ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28007){
return (function (params__21351__auto__,params_idx__21352__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21350__auto__,params__21351__auto__,(params_idx__21352__auto__ + o__21349__auto__));
});
;})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28007))
}
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28007))
,offsets__21348__auto__,paths__21346__auto__);
var ret__21353__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28007,latefns28006){
return (function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28007,latefns28006){
return (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + num_params28007),vals__21327__auto__,structure__21329__auto__);
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28007,latefns28006))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28007,latefns28006){
return (function (l__21396__auto__){
return l__21396__auto__.call(null,params21325,params_idx21326);
});})(next_fn,paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28007,latefns28006))
,latefns28006);
var temp__4423__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(cljs.core.truth_(temp__4423__auto__)){
var selector = temp__4423__auto__;
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,com.rpl.specter.compiled_select.call(null,selector,structure)));
} else {
return null;
}
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28007,latefns28006))
,((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28007,latefns28006){
return (function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28007,latefns28006){
return (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + num_params28007),vals__21327__auto__,structure__21329__auto__);
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28007,latefns28006))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28007,latefns28006){
return (function (l__21396__auto__){
return l__21396__auto__.call(null,params21325,params_idx21326);
});})(next_fn,paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28007,latefns28006))
,latefns28006);
var temp__4423__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(cljs.core.truth_(temp__4423__auto__)){
var selector = temp__4423__auto__;
return com.rpl.specter.compiled_transform.call(null,selector,next_fn,structure);
} else {
return structure;
}
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28007,latefns28006))
),num_params28007);
if(cljs.core._EQ_.call(null,(0),num_params28007)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21353__auto__,null,(0));
} else {
return ret__21353__auto__;
}
});

com.rpl.specter.cond_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.cond_path.cljs$lang$applyTo = (function (seq28005){
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28005));
});
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = (function com$rpl$specter$if_path(var_args){
var args28011 = [];
var len__17132__auto___28014 = arguments.length;
var i__17133__auto___28015 = (0);
while(true){
if((i__17133__auto___28015 < len__17132__auto___28014)){
args28011.push((arguments[i__17133__auto___28015]));

var G__28016 = (i__17133__auto___28015 + (1));
i__17133__auto___28015 = G__28016;
continue;
} else {
}
break;
}

var G__28013 = args28011.length;
switch (G__28013) {
case 2:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28011.length)].join('')));

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
var args__17139__auto__ = [];
var len__17132__auto___28022 = arguments.length;
var i__17133__auto___28023 = (0);
while(true){
if((i__17133__auto___28023 < len__17132__auto___28022)){
args__17139__auto__.push((arguments[i__17133__auto___28023]));

var G__28024 = (i__17133__auto___28023 + (1));
i__17133__auto___28023 = G__28024;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((0) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((0)),(0))):null);
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(argseq__17140__auto__);
});

com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
var paths__21346__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,paths);
var needed_params__21347__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21346__auto__);
var offsets__21348__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21347__auto__));
var num_params28021 = cljs.core.last.call(null,offsets__21348__auto__);
var latefns28020 = cljs.core.map.call(null,((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28021){
return (function (o__21349__auto__,p__21350__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21350__auto__))){
return ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28021){
return (function (params__21351__auto__,params_idx__21352__auto__){
return p__21350__auto__;
});
;})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28021))
} else {
return ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28021){
return (function (params__21351__auto__,params_idx__21352__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21350__auto__,params__21351__auto__,(params_idx__21352__auto__ + o__21349__auto__));
});
;})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28021))
}
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28021))
,offsets__21348__auto__,paths__21346__auto__);
var ret__21353__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28021,latefns28020){
return (function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28021,latefns28020){
return (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + num_params28021),vals__21327__auto__,structure__21329__auto__);
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28021,latefns28020))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28021,latefns28020){
return (function (l__21396__auto__){
return l__21396__auto__.call(null,params21325,params_idx21326);
});})(next_fn,paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28021,latefns28020))
,latefns28020);
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,cljs.core.mapcat.call(null,((function (next_fn,compiled_paths,paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28021,latefns28020){
return (function (p1__28018_SHARP_){
return com.rpl.specter.compiled_select.call(null,p1__28018_SHARP_,structure);
});})(next_fn,compiled_paths,paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28021,latefns28020))
,compiled_paths)));
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28021,latefns28020))
,((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28021,latefns28020){
return (function (params21325,params_idx21326,vals__21327__auto__,structure,next_fn__21328__auto__){
var next_fn = ((function (paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28021,latefns28020){
return (function (structure__21329__auto__){
return next_fn__21328__auto__.call(null,params21325,(params_idx21326 + num_params28021),vals__21327__auto__,structure__21329__auto__);
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28021,latefns28020))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28021,latefns28020){
return (function (l__21396__auto__){
return l__21396__auto__.call(null,params21325,params_idx21326);
});})(next_fn,paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28021,latefns28020))
,latefns28020);
return cljs.core.reduce.call(null,((function (next_fn,compiled_paths,paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28021,latefns28020){
return (function (structure__$1,selector){
return com.rpl.specter.compiled_transform.call(null,selector,next_fn,structure__$1);
});})(next_fn,compiled_paths,paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28021,latefns28020))
,structure,compiled_paths);
});})(paths__21346__auto__,needed_params__21347__auto__,offsets__21348__auto__,num_params28021,latefns28020))
),num_params28021);
if(cljs.core._EQ_.call(null,(0),num_params28021)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21353__auto__,null,(0));
} else {
return ret__21353__auto__;
}
});

com.rpl.specter.multi_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.multi_path.cljs$lang$applyTo = (function (seq28019){
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28019));
});

//# sourceMappingURL=specter.js.map?rel=1447113459599