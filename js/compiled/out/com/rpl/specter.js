// Compiled by ClojureScript 1.7.170 {}
goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('clojure.set');
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__17816__auto__ = [];
var len__17809__auto___19887 = arguments.length;
var i__17810__auto___19888 = (0);
while(true){
if((i__17810__auto___19888 < len__17809__auto___19887)){
args__17816__auto__.push((arguments[i__17810__auto___19888]));

var G__19889 = (i__17810__auto___19888 + (1));
i__17810__auto___19888 = G__19889;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,cljs.core.vec.call(null,paths));
});

com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0);

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq19886){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19886));
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
var args__17816__auto__ = [];
var len__17809__auto___19898 = arguments.length;
var i__17810__auto___19899 = (0);
while(true){
if((i__17810__auto___19899 < len__17809__auto___19898)){
args__17816__auto__.push((arguments[i__17810__auto___19899]));

var G__19900 = (i__17810__auto___19899 + (1));
i__17810__auto___19899 = G__19900;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (selector,transform_fn,structure,p__19894){
var map__19895 = p__19894;
var map__19895__$1 = ((((!((map__19895 == null)))?((((map__19895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19895):map__19895);
var merge_fn = cljs.core.get.call(null,map__19895__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.call(null,null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.compiled_transform.call(null,selector,((function (state,map__19895,map__19895__$1,merge_fn){
return (function (e){
var res = transform_fn.call(null,e);
if(cljs.core.truth_(res)){
var vec__19897 = res;
var ret = cljs.core.nth.call(null,vec__19897,(0),null);
var user_ret = cljs.core.nth.call(null,vec__19897,(1),null);
com.rpl.specter.impl.set_cell_BANG_.call(null,state,merge_fn.call(null,com.rpl.specter.impl.get_cell.call(null,state),user_ret));

return ret;
} else {
return e;
}
});})(state,map__19895,map__19895__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell.call(null,state)], null);
});

com.rpl.specter.compiled_replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.compiled_replace_in.cljs$lang$applyTo = (function (seq19890){
var G__19891 = cljs.core.first.call(null,seq19890);
var seq19890__$1 = cljs.core.next.call(null,seq19890);
var G__19892 = cljs.core.first.call(null,seq19890__$1);
var seq19890__$2 = cljs.core.next.call(null,seq19890__$1);
var G__19893 = cljs.core.first.call(null,seq19890__$2);
var seq19890__$3 = cljs.core.next.call(null,seq19890__$2);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic(G__19891,G__19892,G__19893,seq19890__$3);
});
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 *   The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformd in the data structure.
 */
com.rpl.specter.replace_in = (function com$rpl$specter$replace_in(var_args){
var args__17816__auto__ = [];
var len__17809__auto___19908 = arguments.length;
var i__17810__auto___19909 = (0);
while(true){
if((i__17810__auto___19909 < len__17809__auto___19908)){
args__17816__auto__.push((arguments[i__17810__auto___19909]));

var G__19910 = (i__17810__auto___19909 + (1));
i__17810__auto___19909 = G__19910;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((3) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((3)),(0))):null);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17817__auto__);
});

com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (selector,transform_fn,structure,p__19905){
var map__19906 = p__19905;
var map__19906__$1 = ((((!((map__19906 == null)))?((((map__19906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19906):map__19906);
var merge_fn = cljs.core.get.call(null,map__19906__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in.cljs$lang$applyTo = (function (seq19901){
var G__19902 = cljs.core.first.call(null,seq19901);
var seq19901__$1 = cljs.core.next.call(null,seq19901);
var G__19903 = cljs.core.first.call(null,seq19901__$1);
var seq19901__$2 = cljs.core.next.call(null,seq19901__$1);
var G__19904 = cljs.core.first.call(null,seq19901__$2);
var seq19901__$3 = cljs.core.next.call(null,seq19901__$2);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__19902,G__19903,G__19904,seq19901__$3);
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
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + 2),vals__19800__auto__,structure__19802__auto__);
});
var start_fn = (params19798[(params_idx19799 + (0))]);
var end_fn = (params19798[(params_idx19799 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
}),(function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + 2),vals__19800__auto__,structure__19802__auto__);
});
var start_fn = (params19798[(params_idx19799 + (0))]);
var end_fn = (params19798[(params_idx19799 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
})),2);
/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + 2),vals__19800__auto__,structure__19802__auto__);
});
var start = (params19798[(params_idx19799 + (0))]);
var end = (params19798[(params_idx19799 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start,end,next_fn);
}),(function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + 2),vals__19800__auto__,structure__19802__auto__);
});
var start = (params19798[(params_idx19799 + (0))]);
var end = (params19798[(params_idx19799 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start,end,next_fn);
})),2);
com.rpl.specter.BEGINNING = com.rpl.specter.srange.call(null,(0),(0));
com.rpl.specter.END = com.rpl.specter.srange_dynamic.call(null,cljs.core.count,cljs.core.count);
/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + 1),vals__19800__auto__,structure__19802__auto__);
});
var aset = (params19798[(params_idx19799 + (0))]);
return next_fn.call(null,clojure.set.intersection.call(null,structure,aset));
}),(function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + 1),vals__19800__auto__,structure__19802__auto__);
});
var aset = (params19798[(params_idx19799 + (0))]);
var subset = clojure.set.intersection.call(null,structure,aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
})),1);
com.rpl.specter.walker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + 1),vals__19800__auto__,structure__19802__auto__);
});
var afn = (params19798[(params_idx19799 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + 1),vals__19800__auto__,structure__19802__auto__);
});
var afn = (params19798[(params_idx19799 + (0))]);
return com.rpl.specter.impl.walk_until.call(null,afn,next_fn,structure);
})),1);
com.rpl.specter.codewalker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + 1),vals__19800__auto__,structure__19802__auto__);
});
var afn = (params19798[(params_idx19799 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + 1),vals__19800__auto__,structure__19802__auto__);
});
var afn = (params19798[(params_idx19799 + (0))]);
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
var args__17816__auto__ = [];
var len__17809__auto___19920 = arguments.length;
var i__17810__auto___19921 = (0);
while(true){
if((i__17810__auto___19921 < len__17809__auto___19920)){
args__17816__auto__.push((arguments[i__17810__auto___19921]));

var G__19922 = (i__17810__auto___19921 + (1));
i__17810__auto___19921 = G__19922;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__19819__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__19820__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19819__auto__);
var offsets__19821__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19820__auto__));
var num_params19915 = cljs.core.last.call(null,offsets__19821__auto__);
var latefns19913 = cljs.core.map.call(null,((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19915){
return (function (o__19822__auto__,p__19823__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19823__auto__))){
return ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19915){
return (function (params__19824__auto__,params_idx__19825__auto__){
return p__19823__auto__;
});
;})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19915))
} else {
return ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19915){
return (function (params__19824__auto__,params_idx__19825__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19823__auto__,params__19824__auto__,(params_idx__19825__auto__ + o__19822__auto__));
});
;})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19915))
}
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19915))
,offsets__19821__auto__,paths__19819__auto__);
var vec__19916 = latefns19913;
var G__19914 = cljs.core.nth.call(null,vec__19916,(0),null);
var ret__19826__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19915,latefns19913,vec__19916,G__19914){
return (function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19915,latefns19913,vec__19916,G__19914){
return (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + num_params19915),vals__19800__auto__,structure__19802__auto__);
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19915,latefns19913,vec__19916,G__19914))
;
var late = G__19914.call(null,params19798,params_idx19799);
return next_fn.call(null,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (next_fn,late,paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19915,latefns19913,vec__19916,G__19914){
return (function (p1__19911_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__19911_SHARP_);
});})(next_fn,late,paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19915,latefns19913,vec__19916,G__19914))
,structure)));
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19915,latefns19913,vec__19916,G__19914))
,((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19915,latefns19913,vec__19916,G__19914){
return (function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19915,latefns19913,vec__19916,G__19914){
return (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + num_params19915),vals__19800__auto__,structure__19802__auto__);
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19915,latefns19913,vec__19916,G__19914))
;
var late = G__19914.call(null,params19798,params_idx19799);
var vec__19917 = com.rpl.specter.impl.filter_PLUS_ancestry.call(null,late,structure);
var filtered = cljs.core.nth.call(null,vec__19917,(0),null);
var ancestry = cljs.core.nth.call(null,vec__19917,(1),null);
var next = cljs.core.vec.call(null,next_fn.call(null,filtered));
return cljs.core.reduce.call(null,((function (vec__19917,filtered,ancestry,next,next_fn,late,paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19915,latefns19913,vec__19916,G__19914){
return (function (curr,p__19918){
var vec__19919 = p__19918;
var newi = cljs.core.nth.call(null,vec__19919,(0),null);
var oldi = cljs.core.nth.call(null,vec__19919,(1),null);
return cljs.core.assoc.call(null,curr,oldi,cljs.core.get.call(null,next,newi));
});})(vec__19917,filtered,ancestry,next,next_fn,late,paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19915,latefns19913,vec__19916,G__19914))
,cljs.core.vec.call(null,structure),ancestry);
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19915,latefns19913,vec__19916,G__19914))
),num_params19915);
if(cljs.core._EQ_.call(null,(0),num_params19915)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19826__auto__,null,(0));
} else {
return ret__19826__auto__;
}
});

com.rpl.specter.filterer.cljs$lang$maxFixedArity = (0);

com.rpl.specter.filterer.cljs$lang$applyTo = (function (seq19912){
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19912));
});
com.rpl.specter.keypath = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + 1),vals__19800__auto__,structure__19802__auto__);
});
var key = (params19798[(params_idx19799 + (0))]);
return next_fn.call(null,cljs.core.get.call(null,structure,key));
}),(function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + 1),vals__19800__auto__,structure__19802__auto__);
});
var key = (params19798[(params_idx19799 + (0))]);
return cljs.core.assoc.call(null,structure,key,next_fn.call(null,cljs.core.get.call(null,structure,key)));
})),1);
com.rpl.specter.view = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + 1),vals__19800__auto__,structure__19802__auto__);
});
var afn = (params19798[(params_idx19799 + (0))]);
return next_fn.call(null,afn.call(null,structure));
}),(function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + 1),vals__19800__auto__,structure__19802__auto__);
});
var afn = (params19798[(params_idx19799 + (0))]);
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
var args__17816__auto__ = [];
var len__17809__auto___19930 = arguments.length;
var i__17810__auto___19931 = (0);
while(true){
if((i__17810__auto___19931 < len__17809__auto___19930)){
args__17816__auto__.push((arguments[i__17810__auto___19931]));

var G__19932 = (i__17810__auto___19931 + (1));
i__17810__auto___19931 = G__19932;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__19819__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__19820__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19819__auto__);
var offsets__19821__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19820__auto__));
var num_params19928 = cljs.core.last.call(null,offsets__19821__auto__);
var latefns19926 = cljs.core.map.call(null,((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19928){
return (function (o__19822__auto__,p__19823__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19823__auto__))){
return ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19928){
return (function (params__19824__auto__,params_idx__19825__auto__){
return p__19823__auto__;
});
;})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19928))
} else {
return ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19928){
return (function (params__19824__auto__,params_idx__19825__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19823__auto__,params__19824__auto__,(params_idx__19825__auto__ + o__19822__auto__));
});
;})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19928))
}
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19928))
,offsets__19821__auto__,paths__19819__auto__);
var vec__19929 = latefns19926;
var G__19927 = cljs.core.nth.call(null,vec__19929,(0),null);
var ret__19826__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19928,latefns19926,vec__19929,G__19927){
return (function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19928,latefns19926,vec__19929,G__19927){
return (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + num_params19928),vals__19800__auto__,structure__19802__auto__);
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19928,latefns19926,vec__19929,G__19927))
;
var late = G__19927.call(null,params19798,params_idx19799);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19928,latefns19926,vec__19929,G__19927){
return (function (p1__19923_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__19923_SHARP_);
});})(next_fn,late,paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19928,latefns19926,vec__19929,G__19927))
,structure,next_fn);
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19928,latefns19926,vec__19929,G__19927))
,((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19928,latefns19926,vec__19929,G__19927){
return (function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19928,latefns19926,vec__19929,G__19927){
return (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + num_params19928),vals__19800__auto__,structure__19802__auto__);
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19928,latefns19926,vec__19929,G__19927))
;
var late = G__19927.call(null,params19798,params_idx19799);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19928,latefns19926,vec__19929,G__19927){
return (function (p1__19924_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__19924_SHARP_);
});})(next_fn,late,paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19928,latefns19926,vec__19929,G__19927))
,structure,next_fn);
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19928,latefns19926,vec__19929,G__19927))
),num_params19928);
if(cljs.core._EQ_.call(null,(0),num_params19928)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19826__auto__,null,(0));
} else {
return ret__19826__auto__;
}
});

com.rpl.specter.selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.selected_QMARK_.cljs$lang$applyTo = (function (seq19925){
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19925));
});
com.rpl.specter.not_selected_QMARK_ = (function com$rpl$specter$not_selected_QMARK_(var_args){
var args__17816__auto__ = [];
var len__17809__auto___19940 = arguments.length;
var i__17810__auto___19941 = (0);
while(true){
if((i__17810__auto___19941 < len__17809__auto___19940)){
args__17816__auto__.push((arguments[i__17810__auto___19941]));

var G__19942 = (i__17810__auto___19941 + (1));
i__17810__auto___19941 = G__19942;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__19819__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__19820__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19819__auto__);
var offsets__19821__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19820__auto__));
var num_params19938 = cljs.core.last.call(null,offsets__19821__auto__);
var latefns19936 = cljs.core.map.call(null,((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19938){
return (function (o__19822__auto__,p__19823__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19823__auto__))){
return ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19938){
return (function (params__19824__auto__,params_idx__19825__auto__){
return p__19823__auto__;
});
;})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19938))
} else {
return ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19938){
return (function (params__19824__auto__,params_idx__19825__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19823__auto__,params__19824__auto__,(params_idx__19825__auto__ + o__19822__auto__));
});
;})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19938))
}
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19938))
,offsets__19821__auto__,paths__19819__auto__);
var vec__19939 = latefns19936;
var G__19937 = cljs.core.nth.call(null,vec__19939,(0),null);
var ret__19826__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19938,latefns19936,vec__19939,G__19937){
return (function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19938,latefns19936,vec__19939,G__19937){
return (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + num_params19938),vals__19800__auto__,structure__19802__auto__);
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19938,latefns19936,vec__19939,G__19937))
;
var late = G__19937.call(null,params19798,params_idx19799);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19938,latefns19936,vec__19939,G__19937){
return (function (p1__19933_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__19933_SHARP_);
});})(next_fn,late,paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19938,latefns19936,vec__19939,G__19937))
,structure,next_fn);
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19938,latefns19936,vec__19939,G__19937))
,((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19938,latefns19936,vec__19939,G__19937){
return (function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19938,latefns19936,vec__19939,G__19937){
return (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + num_params19938),vals__19800__auto__,structure__19802__auto__);
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19938,latefns19936,vec__19939,G__19937))
;
var late = G__19937.call(null,params19798,params_idx19799);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19938,latefns19936,vec__19939,G__19937){
return (function (p1__19934_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__19934_SHARP_);
});})(next_fn,late,paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19938,latefns19936,vec__19939,G__19937))
,structure,next_fn);
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19938,latefns19936,vec__19939,G__19937))
),num_params19938);
if(cljs.core._EQ_.call(null,(0),num_params19938)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19826__auto__,null,(0));
} else {
return ret__19826__auto__;
}
});

com.rpl.specter.not_selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.not_selected_QMARK_.cljs$lang$applyTo = (function (seq19935){
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19935));
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
var paths__19819__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__19820__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19819__auto__);
var offsets__19821__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19820__auto__));
var num_params19949 = cljs.core.last.call(null,offsets__19821__auto__);
var latefns19947 = cljs.core.map.call(null,((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19949){
return (function (o__19822__auto__,p__19823__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19823__auto__))){
return ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19949){
return (function (params__19824__auto__,params_idx__19825__auto__){
return p__19823__auto__;
});
;})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19949))
} else {
return ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19949){
return (function (params__19824__auto__,params_idx__19825__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19823__auto__,params__19824__auto__,(params_idx__19825__auto__ + o__19822__auto__));
});
;})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19949))
}
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19949))
,offsets__19821__auto__,paths__19819__auto__);
var vec__19950 = latefns19947;
var G__19948 = cljs.core.nth.call(null,vec__19950,(0),null);
var ret__19826__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19949,latefns19947,vec__19950,G__19948){
return (function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19949,latefns19947,vec__19950,G__19948){
return (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + num_params19949),vals__19800__auto__,structure__19802__auto__);
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19949,latefns19947,vec__19950,G__19948))
;
var late = G__19948.call(null,params19798,params_idx19799);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19949,latefns19947,vec__19950,G__19948))
,((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19949,latefns19947,vec__19950,G__19948){
return (function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19949,latefns19947,vec__19950,G__19948){
return (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + num_params19949),vals__19800__auto__,structure__19802__auto__);
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19949,latefns19947,vec__19950,G__19948))
;
var late = G__19948.call(null,params19798,params_idx19799);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19949,latefns19947,vec__19950,G__19948))
),num_params19949);
if(cljs.core._EQ_.call(null,(0),num_params19949)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19826__auto__,null,(0));
} else {
return ret__19826__auto__;
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
com.rpl.specter.pred = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + 1),vals__19800__auto__,structure__19802__auto__);
});
var afn = (params19798[(params_idx19799 + (0))]);
return com.rpl.specter.impl.filter_select.call(null,afn,structure,next_fn);
}),(function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + 1),vals__19800__auto__,structure__19802__auto__);
});
var afn = (params19798[(params_idx19799 + (0))]);
return com.rpl.specter.impl.filter_transform.call(null,afn,structure,next_fn);
})),1);
/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + 1),vals__19800__auto__,structure__19802__auto__);
});
var v = (params19798[(params_idx19799 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
}),(function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + 1),vals__19800__auto__,structure__19802__auto__);
});
var v = (params19798[(params_idx19799 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
})),1);
com.rpl.specter.NIL__GT_SET = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentHashSet.EMPTY);
com.rpl.specter.NIL__GT_LIST = com.rpl.specter.nil__GT_val.call(null,cljs.core.List.EMPTY);
com.rpl.specter.NIL__GT_VECTOR = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentVector.EMPTY);
com.rpl.specter.collect = (function com$rpl$specter$collect(var_args){
var args__17816__auto__ = [];
var len__17809__auto___19956 = arguments.length;
var i__17810__auto___19957 = (0);
while(true){
if((i__17810__auto___19957 < len__17809__auto___19956)){
args__17816__auto__.push((arguments[i__17810__auto___19957]));

var G__19958 = (i__17810__auto___19957 + (1));
i__17810__auto___19957 = G__19958;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__19819__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__19820__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19819__auto__);
var offsets__19821__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19820__auto__));
var num_params19954 = cljs.core.last.call(null,offsets__19821__auto__);
var latefns19952 = cljs.core.map.call(null,((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19954){
return (function (o__19822__auto__,p__19823__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19823__auto__))){
return ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19954){
return (function (params__19824__auto__,params_idx__19825__auto__){
return p__19823__auto__;
});
;})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19954))
} else {
return ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19954){
return (function (params__19824__auto__,params_idx__19825__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19823__auto__,params__19824__auto__,(params_idx__19825__auto__ + o__19822__auto__));
});
;})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19954))
}
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19954))
,offsets__19821__auto__,paths__19819__auto__);
var vec__19955 = latefns19952;
var latefn19953 = cljs.core.nth.call(null,vec__19955,(0),null);
var ret__19826__auto__ = (function (){var collector__19811__auto__ = ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19954,latefns19952,vec__19955,latefn19953){
return (function (params19798,params_idx19799,vals__19812__auto__,structure,next_fn__19813__auto__){
var late = latefn19953.call(null,params19798,params_idx19799);
var c__19814__auto__ = com.rpl.specter.compiled_select.call(null,late,structure);
return next_fn__19813__auto__.call(null,params19798,(params_idx19799 + num_params19954),cljs.core.conj.call(null,vals__19812__auto__,c__19814__auto__),structure);
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19954,latefns19952,vec__19955,latefn19953))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__19811__auto__,collector__19811__auto__),num_params19954);
})();
if(cljs.core._EQ_.call(null,(0),num_params19954)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19826__auto__,null,(0));
} else {
return ret__19826__auto__;
}
});

com.rpl.specter.collect.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect.cljs$lang$applyTo = (function (seq19951){
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19951));
});
com.rpl.specter.collect_one = (function com$rpl$specter$collect_one(var_args){
var args__17816__auto__ = [];
var len__17809__auto___19964 = arguments.length;
var i__17810__auto___19965 = (0);
while(true){
if((i__17810__auto___19965 < len__17809__auto___19964)){
args__17816__auto__.push((arguments[i__17810__auto___19965]));

var G__19966 = (i__17810__auto___19965 + (1));
i__17810__auto___19965 = G__19966;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__19819__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__19820__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19819__auto__);
var offsets__19821__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19820__auto__));
var num_params19962 = cljs.core.last.call(null,offsets__19821__auto__);
var latefns19960 = cljs.core.map.call(null,((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19962){
return (function (o__19822__auto__,p__19823__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19823__auto__))){
return ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19962){
return (function (params__19824__auto__,params_idx__19825__auto__){
return p__19823__auto__;
});
;})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19962))
} else {
return ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19962){
return (function (params__19824__auto__,params_idx__19825__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19823__auto__,params__19824__auto__,(params_idx__19825__auto__ + o__19822__auto__));
});
;})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19962))
}
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19962))
,offsets__19821__auto__,paths__19819__auto__);
var vec__19963 = latefns19960;
var latefn19961 = cljs.core.nth.call(null,vec__19963,(0),null);
var ret__19826__auto__ = (function (){var collector__19811__auto__ = ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19962,latefns19960,vec__19963,latefn19961){
return (function (params19798,params_idx19799,vals__19812__auto__,structure,next_fn__19813__auto__){
var late = latefn19961.call(null,params19798,params_idx19799);
var c__19814__auto__ = com.rpl.specter.compiled_select_one.call(null,late,structure);
return next_fn__19813__auto__.call(null,params19798,(params_idx19799 + num_params19962),cljs.core.conj.call(null,vals__19812__auto__,c__19814__auto__),structure);
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19962,latefns19960,vec__19963,latefn19961))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__19811__auto__,collector__19811__auto__),num_params19962);
})();
if(cljs.core._EQ_.call(null,(0),num_params19962)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19826__auto__,null,(0));
} else {
return ret__19826__auto__;
}
});

com.rpl.specter.collect_one.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect_one.cljs$lang$applyTo = (function (seq19959){
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19959));
});
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = (function (){var collector__19811__auto__ = (function (params19798,params_idx19799,vals__19812__auto__,structure,next_fn__19813__auto__){
var val = (params19798[(params_idx19799 + (0))]);
var c__19814__auto__ = val;
return next_fn__19813__auto__.call(null,params19798,(params_idx19799 + 1),cljs.core.conj.call(null,vals__19812__auto__,c__19814__auto__),structure);
});
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__19811__auto__,collector__19811__auto__),1);
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
var args__17816__auto__ = [];
var len__17809__auto___19970 = arguments.length;
var i__17810__auto___19971 = (0);
while(true){
if((i__17810__auto___19971 < len__17809__auto___19970)){
args__17816__auto__.push((arguments[i__17810__auto___19971]));

var G__19972 = (i__17810__auto___19971 + (1));
i__17810__auto___19971 = G__19972;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic = (function (conds){
var paths__19819__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,conds);
var needed_params__19820__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19819__auto__);
var offsets__19821__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19820__auto__));
var num_params19969 = cljs.core.last.call(null,offsets__19821__auto__);
var latefns19968 = cljs.core.map.call(null,((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19969){
return (function (o__19822__auto__,p__19823__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19823__auto__))){
return ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19969){
return (function (params__19824__auto__,params_idx__19825__auto__){
return p__19823__auto__;
});
;})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19969))
} else {
return ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19969){
return (function (params__19824__auto__,params_idx__19825__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19823__auto__,params__19824__auto__,(params_idx__19825__auto__ + o__19822__auto__));
});
;})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19969))
}
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19969))
,offsets__19821__auto__,paths__19819__auto__);
var ret__19826__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19969,latefns19968){
return (function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19969,latefns19968){
return (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + num_params19969),vals__19800__auto__,structure__19802__auto__);
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19969,latefns19968))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19969,latefns19968){
return (function (l__19869__auto__){
return l__19869__auto__.call(null,params19798,params_idx19799);
});})(next_fn,paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19969,latefns19968))
,latefns19968);
var temp__4423__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(cljs.core.truth_(temp__4423__auto__)){
var selector = temp__4423__auto__;
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,com.rpl.specter.compiled_select.call(null,selector,structure)));
} else {
return null;
}
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19969,latefns19968))
,((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19969,latefns19968){
return (function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19969,latefns19968){
return (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + num_params19969),vals__19800__auto__,structure__19802__auto__);
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19969,latefns19968))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19969,latefns19968){
return (function (l__19869__auto__){
return l__19869__auto__.call(null,params19798,params_idx19799);
});})(next_fn,paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19969,latefns19968))
,latefns19968);
var temp__4423__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(cljs.core.truth_(temp__4423__auto__)){
var selector = temp__4423__auto__;
return com.rpl.specter.compiled_transform.call(null,selector,next_fn,structure);
} else {
return structure;
}
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19969,latefns19968))
),num_params19969);
if(cljs.core._EQ_.call(null,(0),num_params19969)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19826__auto__,null,(0));
} else {
return ret__19826__auto__;
}
});

com.rpl.specter.cond_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.cond_path.cljs$lang$applyTo = (function (seq19967){
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19967));
});
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = (function com$rpl$specter$if_path(var_args){
var args19973 = [];
var len__17809__auto___19976 = arguments.length;
var i__17810__auto___19977 = (0);
while(true){
if((i__17810__auto___19977 < len__17809__auto___19976)){
args19973.push((arguments[i__17810__auto___19977]));

var G__19978 = (i__17810__auto___19977 + (1));
i__17810__auto___19977 = G__19978;
continue;
} else {
}
break;
}

var G__19975 = args19973.length;
switch (G__19975) {
case 2:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19973.length)].join('')));

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
var args__17816__auto__ = [];
var len__17809__auto___19984 = arguments.length;
var i__17810__auto___19985 = (0);
while(true){
if((i__17810__auto___19985 < len__17809__auto___19984)){
args__17816__auto__.push((arguments[i__17810__auto___19985]));

var G__19986 = (i__17810__auto___19985 + (1));
i__17810__auto___19985 = G__19986;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
var paths__19819__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,paths);
var needed_params__19820__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__19819__auto__);
var offsets__19821__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__19820__auto__));
var num_params19983 = cljs.core.last.call(null,offsets__19821__auto__);
var latefns19982 = cljs.core.map.call(null,((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19983){
return (function (o__19822__auto__,p__19823__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__19823__auto__))){
return ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19983){
return (function (params__19824__auto__,params_idx__19825__auto__){
return p__19823__auto__;
});
;})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19983))
} else {
return ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19983){
return (function (params__19824__auto__,params_idx__19825__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__19823__auto__,params__19824__auto__,(params_idx__19825__auto__ + o__19822__auto__));
});
;})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19983))
}
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19983))
,offsets__19821__auto__,paths__19819__auto__);
var ret__19826__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19983,latefns19982){
return (function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19983,latefns19982){
return (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + num_params19983),vals__19800__auto__,structure__19802__auto__);
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19983,latefns19982))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19983,latefns19982){
return (function (l__19869__auto__){
return l__19869__auto__.call(null,params19798,params_idx19799);
});})(next_fn,paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19983,latefns19982))
,latefns19982);
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,cljs.core.mapcat.call(null,((function (next_fn,compiled_paths,paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19983,latefns19982){
return (function (p1__19980_SHARP_){
return com.rpl.specter.compiled_select.call(null,p1__19980_SHARP_,structure);
});})(next_fn,compiled_paths,paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19983,latefns19982))
,compiled_paths)));
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19983,latefns19982))
,((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19983,latefns19982){
return (function (params19798,params_idx19799,vals__19800__auto__,structure,next_fn__19801__auto__){
var next_fn = ((function (paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19983,latefns19982){
return (function (structure__19802__auto__){
return next_fn__19801__auto__.call(null,params19798,(params_idx19799 + num_params19983),vals__19800__auto__,structure__19802__auto__);
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19983,latefns19982))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19983,latefns19982){
return (function (l__19869__auto__){
return l__19869__auto__.call(null,params19798,params_idx19799);
});})(next_fn,paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19983,latefns19982))
,latefns19982);
return cljs.core.reduce.call(null,((function (next_fn,compiled_paths,paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19983,latefns19982){
return (function (structure__$1,selector){
return com.rpl.specter.compiled_transform.call(null,selector,next_fn,structure__$1);
});})(next_fn,compiled_paths,paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19983,latefns19982))
,structure,compiled_paths);
});})(paths__19819__auto__,needed_params__19820__auto__,offsets__19821__auto__,num_params19983,latefns19982))
),num_params19983);
if(cljs.core._EQ_.call(null,(0),num_params19983)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__19826__auto__,null,(0));
} else {
return ret__19826__auto__;
}
});

com.rpl.specter.multi_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.multi_path.cljs$lang$applyTo = (function (seq19981){
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19981));
});

//# sourceMappingURL=specter.js.map?rel=1449083081229