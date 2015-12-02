// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16751__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16751__auto__){
return or__16751__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16751__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27548_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27548_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27553 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27554 = null;
var count__27555 = (0);
var i__27556 = (0);
while(true){
if((i__27556 < count__27555)){
var n = cljs.core._nth.call(null,chunk__27554,i__27556);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27557 = seq__27553;
var G__27558 = chunk__27554;
var G__27559 = count__27555;
var G__27560 = (i__27556 + (1));
seq__27553 = G__27557;
chunk__27554 = G__27558;
count__27555 = G__27559;
i__27556 = G__27560;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27553);
if(temp__4425__auto__){
var seq__27553__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27553__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__27553__$1);
var G__27561 = cljs.core.chunk_rest.call(null,seq__27553__$1);
var G__27562 = c__17554__auto__;
var G__27563 = cljs.core.count.call(null,c__17554__auto__);
var G__27564 = (0);
seq__27553 = G__27561;
chunk__27554 = G__27562;
count__27555 = G__27563;
i__27556 = G__27564;
continue;
} else {
var n = cljs.core.first.call(null,seq__27553__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27565 = cljs.core.next.call(null,seq__27553__$1);
var G__27566 = null;
var G__27567 = (0);
var G__27568 = (0);
seq__27553 = G__27565;
chunk__27554 = G__27566;
count__27555 = G__27567;
i__27556 = G__27568;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27607_27614 = cljs.core.seq.call(null,deps);
var chunk__27608_27615 = null;
var count__27609_27616 = (0);
var i__27610_27617 = (0);
while(true){
if((i__27610_27617 < count__27609_27616)){
var dep_27618 = cljs.core._nth.call(null,chunk__27608_27615,i__27610_27617);
topo_sort_helper_STAR_.call(null,dep_27618,(depth + (1)),state);

var G__27619 = seq__27607_27614;
var G__27620 = chunk__27608_27615;
var G__27621 = count__27609_27616;
var G__27622 = (i__27610_27617 + (1));
seq__27607_27614 = G__27619;
chunk__27608_27615 = G__27620;
count__27609_27616 = G__27621;
i__27610_27617 = G__27622;
continue;
} else {
var temp__4425__auto___27623 = cljs.core.seq.call(null,seq__27607_27614);
if(temp__4425__auto___27623){
var seq__27607_27624__$1 = temp__4425__auto___27623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27607_27624__$1)){
var c__17554__auto___27625 = cljs.core.chunk_first.call(null,seq__27607_27624__$1);
var G__27626 = cljs.core.chunk_rest.call(null,seq__27607_27624__$1);
var G__27627 = c__17554__auto___27625;
var G__27628 = cljs.core.count.call(null,c__17554__auto___27625);
var G__27629 = (0);
seq__27607_27614 = G__27626;
chunk__27608_27615 = G__27627;
count__27609_27616 = G__27628;
i__27610_27617 = G__27629;
continue;
} else {
var dep_27630 = cljs.core.first.call(null,seq__27607_27624__$1);
topo_sort_helper_STAR_.call(null,dep_27630,(depth + (1)),state);

var G__27631 = cljs.core.next.call(null,seq__27607_27624__$1);
var G__27632 = null;
var G__27633 = (0);
var G__27634 = (0);
seq__27607_27614 = G__27631;
chunk__27608_27615 = G__27632;
count__27609_27616 = G__27633;
i__27610_27617 = G__27634;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27611){
var vec__27613 = p__27611;
var x = cljs.core.nth.call(null,vec__27613,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27613,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27613,x,xs,get_deps__$1){
return (function (p1__27569_SHARP_){
return clojure.set.difference.call(null,p1__27569_SHARP_,x);
});})(vec__27613,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27647 = cljs.core.seq.call(null,provides);
var chunk__27648 = null;
var count__27649 = (0);
var i__27650 = (0);
while(true){
if((i__27650 < count__27649)){
var prov = cljs.core._nth.call(null,chunk__27648,i__27650);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27651_27659 = cljs.core.seq.call(null,requires);
var chunk__27652_27660 = null;
var count__27653_27661 = (0);
var i__27654_27662 = (0);
while(true){
if((i__27654_27662 < count__27653_27661)){
var req_27663 = cljs.core._nth.call(null,chunk__27652_27660,i__27654_27662);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27663,prov);

var G__27664 = seq__27651_27659;
var G__27665 = chunk__27652_27660;
var G__27666 = count__27653_27661;
var G__27667 = (i__27654_27662 + (1));
seq__27651_27659 = G__27664;
chunk__27652_27660 = G__27665;
count__27653_27661 = G__27666;
i__27654_27662 = G__27667;
continue;
} else {
var temp__4425__auto___27668 = cljs.core.seq.call(null,seq__27651_27659);
if(temp__4425__auto___27668){
var seq__27651_27669__$1 = temp__4425__auto___27668;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27651_27669__$1)){
var c__17554__auto___27670 = cljs.core.chunk_first.call(null,seq__27651_27669__$1);
var G__27671 = cljs.core.chunk_rest.call(null,seq__27651_27669__$1);
var G__27672 = c__17554__auto___27670;
var G__27673 = cljs.core.count.call(null,c__17554__auto___27670);
var G__27674 = (0);
seq__27651_27659 = G__27671;
chunk__27652_27660 = G__27672;
count__27653_27661 = G__27673;
i__27654_27662 = G__27674;
continue;
} else {
var req_27675 = cljs.core.first.call(null,seq__27651_27669__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27675,prov);

var G__27676 = cljs.core.next.call(null,seq__27651_27669__$1);
var G__27677 = null;
var G__27678 = (0);
var G__27679 = (0);
seq__27651_27659 = G__27676;
chunk__27652_27660 = G__27677;
count__27653_27661 = G__27678;
i__27654_27662 = G__27679;
continue;
}
} else {
}
}
break;
}

var G__27680 = seq__27647;
var G__27681 = chunk__27648;
var G__27682 = count__27649;
var G__27683 = (i__27650 + (1));
seq__27647 = G__27680;
chunk__27648 = G__27681;
count__27649 = G__27682;
i__27650 = G__27683;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27647);
if(temp__4425__auto__){
var seq__27647__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27647__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__27647__$1);
var G__27684 = cljs.core.chunk_rest.call(null,seq__27647__$1);
var G__27685 = c__17554__auto__;
var G__27686 = cljs.core.count.call(null,c__17554__auto__);
var G__27687 = (0);
seq__27647 = G__27684;
chunk__27648 = G__27685;
count__27649 = G__27686;
i__27650 = G__27687;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27647__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27655_27688 = cljs.core.seq.call(null,requires);
var chunk__27656_27689 = null;
var count__27657_27690 = (0);
var i__27658_27691 = (0);
while(true){
if((i__27658_27691 < count__27657_27690)){
var req_27692 = cljs.core._nth.call(null,chunk__27656_27689,i__27658_27691);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27692,prov);

var G__27693 = seq__27655_27688;
var G__27694 = chunk__27656_27689;
var G__27695 = count__27657_27690;
var G__27696 = (i__27658_27691 + (1));
seq__27655_27688 = G__27693;
chunk__27656_27689 = G__27694;
count__27657_27690 = G__27695;
i__27658_27691 = G__27696;
continue;
} else {
var temp__4425__auto___27697__$1 = cljs.core.seq.call(null,seq__27655_27688);
if(temp__4425__auto___27697__$1){
var seq__27655_27698__$1 = temp__4425__auto___27697__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27655_27698__$1)){
var c__17554__auto___27699 = cljs.core.chunk_first.call(null,seq__27655_27698__$1);
var G__27700 = cljs.core.chunk_rest.call(null,seq__27655_27698__$1);
var G__27701 = c__17554__auto___27699;
var G__27702 = cljs.core.count.call(null,c__17554__auto___27699);
var G__27703 = (0);
seq__27655_27688 = G__27700;
chunk__27656_27689 = G__27701;
count__27657_27690 = G__27702;
i__27658_27691 = G__27703;
continue;
} else {
var req_27704 = cljs.core.first.call(null,seq__27655_27698__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27704,prov);

var G__27705 = cljs.core.next.call(null,seq__27655_27698__$1);
var G__27706 = null;
var G__27707 = (0);
var G__27708 = (0);
seq__27655_27688 = G__27705;
chunk__27656_27689 = G__27706;
count__27657_27690 = G__27707;
i__27658_27691 = G__27708;
continue;
}
} else {
}
}
break;
}

var G__27709 = cljs.core.next.call(null,seq__27647__$1);
var G__27710 = null;
var G__27711 = (0);
var G__27712 = (0);
seq__27647 = G__27709;
chunk__27648 = G__27710;
count__27649 = G__27711;
i__27650 = G__27712;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27717_27721 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27718_27722 = null;
var count__27719_27723 = (0);
var i__27720_27724 = (0);
while(true){
if((i__27720_27724 < count__27719_27723)){
var ns_27725 = cljs.core._nth.call(null,chunk__27718_27722,i__27720_27724);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27725);

var G__27726 = seq__27717_27721;
var G__27727 = chunk__27718_27722;
var G__27728 = count__27719_27723;
var G__27729 = (i__27720_27724 + (1));
seq__27717_27721 = G__27726;
chunk__27718_27722 = G__27727;
count__27719_27723 = G__27728;
i__27720_27724 = G__27729;
continue;
} else {
var temp__4425__auto___27730 = cljs.core.seq.call(null,seq__27717_27721);
if(temp__4425__auto___27730){
var seq__27717_27731__$1 = temp__4425__auto___27730;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27717_27731__$1)){
var c__17554__auto___27732 = cljs.core.chunk_first.call(null,seq__27717_27731__$1);
var G__27733 = cljs.core.chunk_rest.call(null,seq__27717_27731__$1);
var G__27734 = c__17554__auto___27732;
var G__27735 = cljs.core.count.call(null,c__17554__auto___27732);
var G__27736 = (0);
seq__27717_27721 = G__27733;
chunk__27718_27722 = G__27734;
count__27719_27723 = G__27735;
i__27720_27724 = G__27736;
continue;
} else {
var ns_27737 = cljs.core.first.call(null,seq__27717_27731__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27737);

var G__27738 = cljs.core.next.call(null,seq__27717_27731__$1);
var G__27739 = null;
var G__27740 = (0);
var G__27741 = (0);
seq__27717_27721 = G__27738;
chunk__27718_27722 = G__27739;
count__27719_27723 = G__27740;
i__27720_27724 = G__27741;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16751__auto__ = goog.require__;
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27742__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27742 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27743__i = 0, G__27743__a = new Array(arguments.length -  0);
while (G__27743__i < G__27743__a.length) {G__27743__a[G__27743__i] = arguments[G__27743__i + 0]; ++G__27743__i;}
  args = new cljs.core.IndexedSeq(G__27743__a,0);
} 
return G__27742__delegate.call(this,args);};
G__27742.cljs$lang$maxFixedArity = 0;
G__27742.cljs$lang$applyTo = (function (arglist__27744){
var args = cljs.core.seq(arglist__27744);
return G__27742__delegate(args);
});
G__27742.cljs$core$IFn$_invoke$arity$variadic = G__27742__delegate;
return G__27742;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27746 = cljs.core._EQ_;
var expr__27747 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27746.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27747))){
var path_parts = ((function (pred__27746,expr__27747){
return (function (p1__27745_SHARP_){
return clojure.string.split.call(null,p1__27745_SHARP_,/[\/\\]/);
});})(pred__27746,expr__27747))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27746,expr__27747){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27749){if((e27749 instanceof Error)){
var e = e27749;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27749;

}
}})());
});
;})(path_parts,sep,root,pred__27746,expr__27747))
} else {
if(cljs.core.truth_(pred__27746.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27747))){
return ((function (pred__27746,expr__27747){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27746,expr__27747){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27746,expr__27747))
);

return deferred.addErrback(((function (deferred,pred__27746,expr__27747){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27746,expr__27747))
);
});
;})(pred__27746,expr__27747))
} else {
return ((function (pred__27746,expr__27747){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27746,expr__27747))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27750,callback){
var map__27753 = p__27750;
var map__27753__$1 = ((((!((map__27753 == null)))?((((map__27753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27753):map__27753);
var file_msg = map__27753__$1;
var request_url = cljs.core.get.call(null,map__27753__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27753,map__27753__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27753,map__27753__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24715__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto__){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto__){
return (function (state_27777){
var state_val_27778 = (state_27777[(1)]);
if((state_val_27778 === (7))){
var inst_27773 = (state_27777[(2)]);
var state_27777__$1 = state_27777;
var statearr_27779_27799 = state_27777__$1;
(statearr_27779_27799[(2)] = inst_27773);

(statearr_27779_27799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (1))){
var state_27777__$1 = state_27777;
var statearr_27780_27800 = state_27777__$1;
(statearr_27780_27800[(2)] = null);

(statearr_27780_27800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (4))){
var inst_27757 = (state_27777[(7)]);
var inst_27757__$1 = (state_27777[(2)]);
var state_27777__$1 = (function (){var statearr_27781 = state_27777;
(statearr_27781[(7)] = inst_27757__$1);

return statearr_27781;
})();
if(cljs.core.truth_(inst_27757__$1)){
var statearr_27782_27801 = state_27777__$1;
(statearr_27782_27801[(1)] = (5));

} else {
var statearr_27783_27802 = state_27777__$1;
(statearr_27783_27802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (6))){
var state_27777__$1 = state_27777;
var statearr_27784_27803 = state_27777__$1;
(statearr_27784_27803[(2)] = null);

(statearr_27784_27803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (3))){
var inst_27775 = (state_27777[(2)]);
var state_27777__$1 = state_27777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27777__$1,inst_27775);
} else {
if((state_val_27778 === (2))){
var state_27777__$1 = state_27777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27777__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27778 === (11))){
var inst_27769 = (state_27777[(2)]);
var state_27777__$1 = (function (){var statearr_27785 = state_27777;
(statearr_27785[(8)] = inst_27769);

return statearr_27785;
})();
var statearr_27786_27804 = state_27777__$1;
(statearr_27786_27804[(2)] = null);

(statearr_27786_27804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (9))){
var inst_27761 = (state_27777[(9)]);
var inst_27763 = (state_27777[(10)]);
var inst_27765 = inst_27763.call(null,inst_27761);
var state_27777__$1 = state_27777;
var statearr_27787_27805 = state_27777__$1;
(statearr_27787_27805[(2)] = inst_27765);

(statearr_27787_27805[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (5))){
var inst_27757 = (state_27777[(7)]);
var inst_27759 = figwheel.client.file_reloading.blocking_load.call(null,inst_27757);
var state_27777__$1 = state_27777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27777__$1,(8),inst_27759);
} else {
if((state_val_27778 === (10))){
var inst_27761 = (state_27777[(9)]);
var inst_27767 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27761);
var state_27777__$1 = state_27777;
var statearr_27788_27806 = state_27777__$1;
(statearr_27788_27806[(2)] = inst_27767);

(statearr_27788_27806[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (8))){
var inst_27757 = (state_27777[(7)]);
var inst_27763 = (state_27777[(10)]);
var inst_27761 = (state_27777[(2)]);
var inst_27762 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27763__$1 = cljs.core.get.call(null,inst_27762,inst_27757);
var state_27777__$1 = (function (){var statearr_27789 = state_27777;
(statearr_27789[(9)] = inst_27761);

(statearr_27789[(10)] = inst_27763__$1);

return statearr_27789;
})();
if(cljs.core.truth_(inst_27763__$1)){
var statearr_27790_27807 = state_27777__$1;
(statearr_27790_27807[(1)] = (9));

} else {
var statearr_27791_27808 = state_27777__$1;
(statearr_27791_27808[(1)] = (10));

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
});})(c__24715__auto__))
;
return ((function (switch__24603__auto__,c__24715__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24604__auto__ = null;
var figwheel$client$file_reloading$state_machine__24604__auto____0 = (function (){
var statearr_27795 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27795[(0)] = figwheel$client$file_reloading$state_machine__24604__auto__);

(statearr_27795[(1)] = (1));

return statearr_27795;
});
var figwheel$client$file_reloading$state_machine__24604__auto____1 = (function (state_27777){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_27777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e27796){if((e27796 instanceof Object)){
var ex__24607__auto__ = e27796;
var statearr_27797_27809 = state_27777;
(statearr_27797_27809[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27810 = state_27777;
state_27777 = G__27810;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24604__auto__ = function(state_27777){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24604__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24604__auto____1.call(this,state_27777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24604__auto____0;
figwheel$client$file_reloading$state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24604__auto____1;
return figwheel$client$file_reloading$state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto__))
})();
var state__24717__auto__ = (function (){var statearr_27798 = f__24716__auto__.call(null);
(statearr_27798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto__);

return statearr_27798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto__))
);

return c__24715__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27811,callback){
var map__27814 = p__27811;
var map__27814__$1 = ((((!((map__27814 == null)))?((((map__27814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27814):map__27814);
var file_msg = map__27814__$1;
var namespace = cljs.core.get.call(null,map__27814__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27814,map__27814__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27814,map__27814__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27816){
var map__27819 = p__27816;
var map__27819__$1 = ((((!((map__27819 == null)))?((((map__27819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27819):map__27819);
var file_msg = map__27819__$1;
var namespace = cljs.core.get.call(null,map__27819__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16739__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16739__auto__){
var or__16751__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
var or__16751__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16751__auto____$1)){
return or__16751__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16739__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27821,callback){
var map__27824 = p__27821;
var map__27824__$1 = ((((!((map__27824 == null)))?((((map__27824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27824):map__27824);
var file_msg = map__27824__$1;
var request_url = cljs.core.get.call(null,map__27824__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27824__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24715__auto___27912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto___27912,out){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto___27912,out){
return (function (state_27894){
var state_val_27895 = (state_27894[(1)]);
if((state_val_27895 === (1))){
var inst_27872 = cljs.core.nth.call(null,files,(0),null);
var inst_27873 = cljs.core.nthnext.call(null,files,(1));
var inst_27874 = files;
var state_27894__$1 = (function (){var statearr_27896 = state_27894;
(statearr_27896[(7)] = inst_27874);

(statearr_27896[(8)] = inst_27873);

(statearr_27896[(9)] = inst_27872);

return statearr_27896;
})();
var statearr_27897_27913 = state_27894__$1;
(statearr_27897_27913[(2)] = null);

(statearr_27897_27913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27895 === (2))){
var inst_27874 = (state_27894[(7)]);
var inst_27877 = (state_27894[(10)]);
var inst_27877__$1 = cljs.core.nth.call(null,inst_27874,(0),null);
var inst_27878 = cljs.core.nthnext.call(null,inst_27874,(1));
var inst_27879 = (inst_27877__$1 == null);
var inst_27880 = cljs.core.not.call(null,inst_27879);
var state_27894__$1 = (function (){var statearr_27898 = state_27894;
(statearr_27898[(10)] = inst_27877__$1);

(statearr_27898[(11)] = inst_27878);

return statearr_27898;
})();
if(inst_27880){
var statearr_27899_27914 = state_27894__$1;
(statearr_27899_27914[(1)] = (4));

} else {
var statearr_27900_27915 = state_27894__$1;
(statearr_27900_27915[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27895 === (3))){
var inst_27892 = (state_27894[(2)]);
var state_27894__$1 = state_27894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27894__$1,inst_27892);
} else {
if((state_val_27895 === (4))){
var inst_27877 = (state_27894[(10)]);
var inst_27882 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27877);
var state_27894__$1 = state_27894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27894__$1,(7),inst_27882);
} else {
if((state_val_27895 === (5))){
var inst_27888 = cljs.core.async.close_BANG_.call(null,out);
var state_27894__$1 = state_27894;
var statearr_27901_27916 = state_27894__$1;
(statearr_27901_27916[(2)] = inst_27888);

(statearr_27901_27916[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27895 === (6))){
var inst_27890 = (state_27894[(2)]);
var state_27894__$1 = state_27894;
var statearr_27902_27917 = state_27894__$1;
(statearr_27902_27917[(2)] = inst_27890);

(statearr_27902_27917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27895 === (7))){
var inst_27878 = (state_27894[(11)]);
var inst_27884 = (state_27894[(2)]);
var inst_27885 = cljs.core.async.put_BANG_.call(null,out,inst_27884);
var inst_27874 = inst_27878;
var state_27894__$1 = (function (){var statearr_27903 = state_27894;
(statearr_27903[(7)] = inst_27874);

(statearr_27903[(12)] = inst_27885);

return statearr_27903;
})();
var statearr_27904_27918 = state_27894__$1;
(statearr_27904_27918[(2)] = null);

(statearr_27904_27918[(1)] = (2));


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
});})(c__24715__auto___27912,out))
;
return ((function (switch__24603__auto__,c__24715__auto___27912,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24604__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24604__auto____0 = (function (){
var statearr_27908 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27908[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24604__auto__);

(statearr_27908[(1)] = (1));

return statearr_27908;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24604__auto____1 = (function (state_27894){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_27894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e27909){if((e27909 instanceof Object)){
var ex__24607__auto__ = e27909;
var statearr_27910_27919 = state_27894;
(statearr_27910_27919[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27920 = state_27894;
state_27894 = G__27920;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24604__auto__ = function(state_27894){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24604__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24604__auto____1.call(this,state_27894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24604__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24604__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto___27912,out))
})();
var state__24717__auto__ = (function (){var statearr_27911 = f__24716__auto__.call(null);
(statearr_27911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto___27912);

return statearr_27911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto___27912,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27921,opts){
var map__27925 = p__27921;
var map__27925__$1 = ((((!((map__27925 == null)))?((((map__27925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27925):map__27925);
var eval_body__$1 = cljs.core.get.call(null,map__27925__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27925__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16739__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16739__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16739__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27927){var e = e27927;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27928_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27928_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27933){
var vec__27934 = p__27933;
var k = cljs.core.nth.call(null,vec__27934,(0),null);
var v = cljs.core.nth.call(null,vec__27934,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27935){
var vec__27936 = p__27935;
var k = cljs.core.nth.call(null,vec__27936,(0),null);
var v = cljs.core.nth.call(null,vec__27936,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27940,p__27941){
var map__28188 = p__27940;
var map__28188__$1 = ((((!((map__28188 == null)))?((((map__28188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28188):map__28188);
var opts = map__28188__$1;
var before_jsload = cljs.core.get.call(null,map__28188__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28188__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28188__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28189 = p__27941;
var map__28189__$1 = ((((!((map__28189 == null)))?((((map__28189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28189):map__28189);
var msg = map__28189__$1;
var files = cljs.core.get.call(null,map__28189__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28189__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28189__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24715__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto__,map__28188,map__28188__$1,opts,before_jsload,on_jsload,reload_dependents,map__28189,map__28189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto__,map__28188,map__28188__$1,opts,before_jsload,on_jsload,reload_dependents,map__28189,map__28189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28342){
var state_val_28343 = (state_28342[(1)]);
if((state_val_28343 === (7))){
var inst_28206 = (state_28342[(7)]);
var inst_28205 = (state_28342[(8)]);
var inst_28204 = (state_28342[(9)]);
var inst_28203 = (state_28342[(10)]);
var inst_28211 = cljs.core._nth.call(null,inst_28204,inst_28206);
var inst_28212 = figwheel.client.file_reloading.eval_body.call(null,inst_28211,opts);
var inst_28213 = (inst_28206 + (1));
var tmp28344 = inst_28205;
var tmp28345 = inst_28204;
var tmp28346 = inst_28203;
var inst_28203__$1 = tmp28346;
var inst_28204__$1 = tmp28345;
var inst_28205__$1 = tmp28344;
var inst_28206__$1 = inst_28213;
var state_28342__$1 = (function (){var statearr_28347 = state_28342;
(statearr_28347[(11)] = inst_28212);

(statearr_28347[(7)] = inst_28206__$1);

(statearr_28347[(8)] = inst_28205__$1);

(statearr_28347[(9)] = inst_28204__$1);

(statearr_28347[(10)] = inst_28203__$1);

return statearr_28347;
})();
var statearr_28348_28434 = state_28342__$1;
(statearr_28348_28434[(2)] = null);

(statearr_28348_28434[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (20))){
var inst_28246 = (state_28342[(12)]);
var inst_28254 = figwheel.client.file_reloading.sort_files.call(null,inst_28246);
var state_28342__$1 = state_28342;
var statearr_28349_28435 = state_28342__$1;
(statearr_28349_28435[(2)] = inst_28254);

(statearr_28349_28435[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (27))){
var state_28342__$1 = state_28342;
var statearr_28350_28436 = state_28342__$1;
(statearr_28350_28436[(2)] = null);

(statearr_28350_28436[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (1))){
var inst_28195 = (state_28342[(13)]);
var inst_28192 = before_jsload.call(null,files);
var inst_28193 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28194 = (function (){return ((function (inst_28195,inst_28192,inst_28193,state_val_28343,c__24715__auto__,map__28188,map__28188__$1,opts,before_jsload,on_jsload,reload_dependents,map__28189,map__28189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27937_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27937_SHARP_);
});
;})(inst_28195,inst_28192,inst_28193,state_val_28343,c__24715__auto__,map__28188,map__28188__$1,opts,before_jsload,on_jsload,reload_dependents,map__28189,map__28189__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28195__$1 = cljs.core.filter.call(null,inst_28194,files);
var inst_28196 = cljs.core.not_empty.call(null,inst_28195__$1);
var state_28342__$1 = (function (){var statearr_28351 = state_28342;
(statearr_28351[(14)] = inst_28193);

(statearr_28351[(13)] = inst_28195__$1);

(statearr_28351[(15)] = inst_28192);

return statearr_28351;
})();
if(cljs.core.truth_(inst_28196)){
var statearr_28352_28437 = state_28342__$1;
(statearr_28352_28437[(1)] = (2));

} else {
var statearr_28353_28438 = state_28342__$1;
(statearr_28353_28438[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (24))){
var state_28342__$1 = state_28342;
var statearr_28354_28439 = state_28342__$1;
(statearr_28354_28439[(2)] = null);

(statearr_28354_28439[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (39))){
var inst_28296 = (state_28342[(16)]);
var state_28342__$1 = state_28342;
var statearr_28355_28440 = state_28342__$1;
(statearr_28355_28440[(2)] = inst_28296);

(statearr_28355_28440[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (46))){
var inst_28337 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28356_28441 = state_28342__$1;
(statearr_28356_28441[(2)] = inst_28337);

(statearr_28356_28441[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (4))){
var inst_28240 = (state_28342[(2)]);
var inst_28241 = cljs.core.List.EMPTY;
var inst_28242 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28241);
var inst_28243 = (function (){return ((function (inst_28240,inst_28241,inst_28242,state_val_28343,c__24715__auto__,map__28188,map__28188__$1,opts,before_jsload,on_jsload,reload_dependents,map__28189,map__28189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27938_SHARP_){
var and__16739__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27938_SHARP_);
if(cljs.core.truth_(and__16739__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27938_SHARP_));
} else {
return and__16739__auto__;
}
});
;})(inst_28240,inst_28241,inst_28242,state_val_28343,c__24715__auto__,map__28188,map__28188__$1,opts,before_jsload,on_jsload,reload_dependents,map__28189,map__28189__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28244 = cljs.core.filter.call(null,inst_28243,files);
var inst_28245 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28246 = cljs.core.concat.call(null,inst_28244,inst_28245);
var state_28342__$1 = (function (){var statearr_28357 = state_28342;
(statearr_28357[(12)] = inst_28246);

(statearr_28357[(17)] = inst_28240);

(statearr_28357[(18)] = inst_28242);

return statearr_28357;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28358_28442 = state_28342__$1;
(statearr_28358_28442[(1)] = (16));

} else {
var statearr_28359_28443 = state_28342__$1;
(statearr_28359_28443[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (15))){
var inst_28230 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28360_28444 = state_28342__$1;
(statearr_28360_28444[(2)] = inst_28230);

(statearr_28360_28444[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (21))){
var inst_28256 = (state_28342[(19)]);
var inst_28256__$1 = (state_28342[(2)]);
var inst_28257 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28256__$1);
var state_28342__$1 = (function (){var statearr_28361 = state_28342;
(statearr_28361[(19)] = inst_28256__$1);

return statearr_28361;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28342__$1,(22),inst_28257);
} else {
if((state_val_28343 === (31))){
var inst_28340 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28342__$1,inst_28340);
} else {
if((state_val_28343 === (32))){
var inst_28296 = (state_28342[(16)]);
var inst_28301 = inst_28296.cljs$lang$protocol_mask$partition0$;
var inst_28302 = (inst_28301 & (64));
var inst_28303 = inst_28296.cljs$core$ISeq$;
var inst_28304 = (inst_28302) || (inst_28303);
var state_28342__$1 = state_28342;
if(cljs.core.truth_(inst_28304)){
var statearr_28362_28445 = state_28342__$1;
(statearr_28362_28445[(1)] = (35));

} else {
var statearr_28363_28446 = state_28342__$1;
(statearr_28363_28446[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (40))){
var inst_28317 = (state_28342[(20)]);
var inst_28316 = (state_28342[(2)]);
var inst_28317__$1 = cljs.core.get.call(null,inst_28316,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28318 = cljs.core.get.call(null,inst_28316,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28319 = cljs.core.not_empty.call(null,inst_28317__$1);
var state_28342__$1 = (function (){var statearr_28364 = state_28342;
(statearr_28364[(20)] = inst_28317__$1);

(statearr_28364[(21)] = inst_28318);

return statearr_28364;
})();
if(cljs.core.truth_(inst_28319)){
var statearr_28365_28447 = state_28342__$1;
(statearr_28365_28447[(1)] = (41));

} else {
var statearr_28366_28448 = state_28342__$1;
(statearr_28366_28448[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (33))){
var state_28342__$1 = state_28342;
var statearr_28367_28449 = state_28342__$1;
(statearr_28367_28449[(2)] = false);

(statearr_28367_28449[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (13))){
var inst_28216 = (state_28342[(22)]);
var inst_28220 = cljs.core.chunk_first.call(null,inst_28216);
var inst_28221 = cljs.core.chunk_rest.call(null,inst_28216);
var inst_28222 = cljs.core.count.call(null,inst_28220);
var inst_28203 = inst_28221;
var inst_28204 = inst_28220;
var inst_28205 = inst_28222;
var inst_28206 = (0);
var state_28342__$1 = (function (){var statearr_28368 = state_28342;
(statearr_28368[(7)] = inst_28206);

(statearr_28368[(8)] = inst_28205);

(statearr_28368[(9)] = inst_28204);

(statearr_28368[(10)] = inst_28203);

return statearr_28368;
})();
var statearr_28369_28450 = state_28342__$1;
(statearr_28369_28450[(2)] = null);

(statearr_28369_28450[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (22))){
var inst_28259 = (state_28342[(23)]);
var inst_28256 = (state_28342[(19)]);
var inst_28260 = (state_28342[(24)]);
var inst_28264 = (state_28342[(25)]);
var inst_28259__$1 = (state_28342[(2)]);
var inst_28260__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28259__$1);
var inst_28261 = (function (){var all_files = inst_28256;
var res_SINGLEQUOTE_ = inst_28259__$1;
var res = inst_28260__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28259,inst_28256,inst_28260,inst_28264,inst_28259__$1,inst_28260__$1,state_val_28343,c__24715__auto__,map__28188,map__28188__$1,opts,before_jsload,on_jsload,reload_dependents,map__28189,map__28189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27939_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27939_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28259,inst_28256,inst_28260,inst_28264,inst_28259__$1,inst_28260__$1,state_val_28343,c__24715__auto__,map__28188,map__28188__$1,opts,before_jsload,on_jsload,reload_dependents,map__28189,map__28189__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28262 = cljs.core.filter.call(null,inst_28261,inst_28259__$1);
var inst_28263 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28264__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28263);
var inst_28265 = cljs.core.not_empty.call(null,inst_28264__$1);
var state_28342__$1 = (function (){var statearr_28370 = state_28342;
(statearr_28370[(23)] = inst_28259__$1);

(statearr_28370[(24)] = inst_28260__$1);

(statearr_28370[(26)] = inst_28262);

(statearr_28370[(25)] = inst_28264__$1);

return statearr_28370;
})();
if(cljs.core.truth_(inst_28265)){
var statearr_28371_28451 = state_28342__$1;
(statearr_28371_28451[(1)] = (23));

} else {
var statearr_28372_28452 = state_28342__$1;
(statearr_28372_28452[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (36))){
var state_28342__$1 = state_28342;
var statearr_28373_28453 = state_28342__$1;
(statearr_28373_28453[(2)] = false);

(statearr_28373_28453[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (41))){
var inst_28317 = (state_28342[(20)]);
var inst_28321 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28322 = cljs.core.map.call(null,inst_28321,inst_28317);
var inst_28323 = cljs.core.pr_str.call(null,inst_28322);
var inst_28324 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28323)].join('');
var inst_28325 = figwheel.client.utils.log.call(null,inst_28324);
var state_28342__$1 = state_28342;
var statearr_28374_28454 = state_28342__$1;
(statearr_28374_28454[(2)] = inst_28325);

(statearr_28374_28454[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (43))){
var inst_28318 = (state_28342[(21)]);
var inst_28328 = (state_28342[(2)]);
var inst_28329 = cljs.core.not_empty.call(null,inst_28318);
var state_28342__$1 = (function (){var statearr_28375 = state_28342;
(statearr_28375[(27)] = inst_28328);

return statearr_28375;
})();
if(cljs.core.truth_(inst_28329)){
var statearr_28376_28455 = state_28342__$1;
(statearr_28376_28455[(1)] = (44));

} else {
var statearr_28377_28456 = state_28342__$1;
(statearr_28377_28456[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (29))){
var inst_28296 = (state_28342[(16)]);
var inst_28259 = (state_28342[(23)]);
var inst_28256 = (state_28342[(19)]);
var inst_28260 = (state_28342[(24)]);
var inst_28262 = (state_28342[(26)]);
var inst_28264 = (state_28342[(25)]);
var inst_28292 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28295 = (function (){var all_files = inst_28256;
var res_SINGLEQUOTE_ = inst_28259;
var res = inst_28260;
var files_not_loaded = inst_28262;
var dependencies_that_loaded = inst_28264;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28296,inst_28259,inst_28256,inst_28260,inst_28262,inst_28264,inst_28292,state_val_28343,c__24715__auto__,map__28188,map__28188__$1,opts,before_jsload,on_jsload,reload_dependents,map__28189,map__28189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28294){
var map__28378 = p__28294;
var map__28378__$1 = ((((!((map__28378 == null)))?((((map__28378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28378):map__28378);
var namespace = cljs.core.get.call(null,map__28378__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28296,inst_28259,inst_28256,inst_28260,inst_28262,inst_28264,inst_28292,state_val_28343,c__24715__auto__,map__28188,map__28188__$1,opts,before_jsload,on_jsload,reload_dependents,map__28189,map__28189__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28296__$1 = cljs.core.group_by.call(null,inst_28295,inst_28262);
var inst_28298 = (inst_28296__$1 == null);
var inst_28299 = cljs.core.not.call(null,inst_28298);
var state_28342__$1 = (function (){var statearr_28380 = state_28342;
(statearr_28380[(16)] = inst_28296__$1);

(statearr_28380[(28)] = inst_28292);

return statearr_28380;
})();
if(inst_28299){
var statearr_28381_28457 = state_28342__$1;
(statearr_28381_28457[(1)] = (32));

} else {
var statearr_28382_28458 = state_28342__$1;
(statearr_28382_28458[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (44))){
var inst_28318 = (state_28342[(21)]);
var inst_28331 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28318);
var inst_28332 = cljs.core.pr_str.call(null,inst_28331);
var inst_28333 = [cljs.core.str("not required: "),cljs.core.str(inst_28332)].join('');
var inst_28334 = figwheel.client.utils.log.call(null,inst_28333);
var state_28342__$1 = state_28342;
var statearr_28383_28459 = state_28342__$1;
(statearr_28383_28459[(2)] = inst_28334);

(statearr_28383_28459[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (6))){
var inst_28237 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28384_28460 = state_28342__$1;
(statearr_28384_28460[(2)] = inst_28237);

(statearr_28384_28460[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (28))){
var inst_28262 = (state_28342[(26)]);
var inst_28289 = (state_28342[(2)]);
var inst_28290 = cljs.core.not_empty.call(null,inst_28262);
var state_28342__$1 = (function (){var statearr_28385 = state_28342;
(statearr_28385[(29)] = inst_28289);

return statearr_28385;
})();
if(cljs.core.truth_(inst_28290)){
var statearr_28386_28461 = state_28342__$1;
(statearr_28386_28461[(1)] = (29));

} else {
var statearr_28387_28462 = state_28342__$1;
(statearr_28387_28462[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (25))){
var inst_28260 = (state_28342[(24)]);
var inst_28276 = (state_28342[(2)]);
var inst_28277 = cljs.core.not_empty.call(null,inst_28260);
var state_28342__$1 = (function (){var statearr_28388 = state_28342;
(statearr_28388[(30)] = inst_28276);

return statearr_28388;
})();
if(cljs.core.truth_(inst_28277)){
var statearr_28389_28463 = state_28342__$1;
(statearr_28389_28463[(1)] = (26));

} else {
var statearr_28390_28464 = state_28342__$1;
(statearr_28390_28464[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (34))){
var inst_28311 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
if(cljs.core.truth_(inst_28311)){
var statearr_28391_28465 = state_28342__$1;
(statearr_28391_28465[(1)] = (38));

} else {
var statearr_28392_28466 = state_28342__$1;
(statearr_28392_28466[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (17))){
var state_28342__$1 = state_28342;
var statearr_28393_28467 = state_28342__$1;
(statearr_28393_28467[(2)] = recompile_dependents);

(statearr_28393_28467[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (3))){
var state_28342__$1 = state_28342;
var statearr_28394_28468 = state_28342__$1;
(statearr_28394_28468[(2)] = null);

(statearr_28394_28468[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (12))){
var inst_28233 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28395_28469 = state_28342__$1;
(statearr_28395_28469[(2)] = inst_28233);

(statearr_28395_28469[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (2))){
var inst_28195 = (state_28342[(13)]);
var inst_28202 = cljs.core.seq.call(null,inst_28195);
var inst_28203 = inst_28202;
var inst_28204 = null;
var inst_28205 = (0);
var inst_28206 = (0);
var state_28342__$1 = (function (){var statearr_28396 = state_28342;
(statearr_28396[(7)] = inst_28206);

(statearr_28396[(8)] = inst_28205);

(statearr_28396[(9)] = inst_28204);

(statearr_28396[(10)] = inst_28203);

return statearr_28396;
})();
var statearr_28397_28470 = state_28342__$1;
(statearr_28397_28470[(2)] = null);

(statearr_28397_28470[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (23))){
var inst_28259 = (state_28342[(23)]);
var inst_28256 = (state_28342[(19)]);
var inst_28260 = (state_28342[(24)]);
var inst_28262 = (state_28342[(26)]);
var inst_28264 = (state_28342[(25)]);
var inst_28267 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28269 = (function (){var all_files = inst_28256;
var res_SINGLEQUOTE_ = inst_28259;
var res = inst_28260;
var files_not_loaded = inst_28262;
var dependencies_that_loaded = inst_28264;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28259,inst_28256,inst_28260,inst_28262,inst_28264,inst_28267,state_val_28343,c__24715__auto__,map__28188,map__28188__$1,opts,before_jsload,on_jsload,reload_dependents,map__28189,map__28189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28268){
var map__28398 = p__28268;
var map__28398__$1 = ((((!((map__28398 == null)))?((((map__28398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28398):map__28398);
var request_url = cljs.core.get.call(null,map__28398__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28259,inst_28256,inst_28260,inst_28262,inst_28264,inst_28267,state_val_28343,c__24715__auto__,map__28188,map__28188__$1,opts,before_jsload,on_jsload,reload_dependents,map__28189,map__28189__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28270 = cljs.core.reverse.call(null,inst_28264);
var inst_28271 = cljs.core.map.call(null,inst_28269,inst_28270);
var inst_28272 = cljs.core.pr_str.call(null,inst_28271);
var inst_28273 = figwheel.client.utils.log.call(null,inst_28272);
var state_28342__$1 = (function (){var statearr_28400 = state_28342;
(statearr_28400[(31)] = inst_28267);

return statearr_28400;
})();
var statearr_28401_28471 = state_28342__$1;
(statearr_28401_28471[(2)] = inst_28273);

(statearr_28401_28471[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (35))){
var state_28342__$1 = state_28342;
var statearr_28402_28472 = state_28342__$1;
(statearr_28402_28472[(2)] = true);

(statearr_28402_28472[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (19))){
var inst_28246 = (state_28342[(12)]);
var inst_28252 = figwheel.client.file_reloading.expand_files.call(null,inst_28246);
var state_28342__$1 = state_28342;
var statearr_28403_28473 = state_28342__$1;
(statearr_28403_28473[(2)] = inst_28252);

(statearr_28403_28473[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (11))){
var state_28342__$1 = state_28342;
var statearr_28404_28474 = state_28342__$1;
(statearr_28404_28474[(2)] = null);

(statearr_28404_28474[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (9))){
var inst_28235 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28405_28475 = state_28342__$1;
(statearr_28405_28475[(2)] = inst_28235);

(statearr_28405_28475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (5))){
var inst_28206 = (state_28342[(7)]);
var inst_28205 = (state_28342[(8)]);
var inst_28208 = (inst_28206 < inst_28205);
var inst_28209 = inst_28208;
var state_28342__$1 = state_28342;
if(cljs.core.truth_(inst_28209)){
var statearr_28406_28476 = state_28342__$1;
(statearr_28406_28476[(1)] = (7));

} else {
var statearr_28407_28477 = state_28342__$1;
(statearr_28407_28477[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (14))){
var inst_28216 = (state_28342[(22)]);
var inst_28225 = cljs.core.first.call(null,inst_28216);
var inst_28226 = figwheel.client.file_reloading.eval_body.call(null,inst_28225,opts);
var inst_28227 = cljs.core.next.call(null,inst_28216);
var inst_28203 = inst_28227;
var inst_28204 = null;
var inst_28205 = (0);
var inst_28206 = (0);
var state_28342__$1 = (function (){var statearr_28408 = state_28342;
(statearr_28408[(7)] = inst_28206);

(statearr_28408[(8)] = inst_28205);

(statearr_28408[(9)] = inst_28204);

(statearr_28408[(10)] = inst_28203);

(statearr_28408[(32)] = inst_28226);

return statearr_28408;
})();
var statearr_28409_28478 = state_28342__$1;
(statearr_28409_28478[(2)] = null);

(statearr_28409_28478[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (45))){
var state_28342__$1 = state_28342;
var statearr_28410_28479 = state_28342__$1;
(statearr_28410_28479[(2)] = null);

(statearr_28410_28479[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (26))){
var inst_28259 = (state_28342[(23)]);
var inst_28256 = (state_28342[(19)]);
var inst_28260 = (state_28342[(24)]);
var inst_28262 = (state_28342[(26)]);
var inst_28264 = (state_28342[(25)]);
var inst_28279 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28281 = (function (){var all_files = inst_28256;
var res_SINGLEQUOTE_ = inst_28259;
var res = inst_28260;
var files_not_loaded = inst_28262;
var dependencies_that_loaded = inst_28264;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28259,inst_28256,inst_28260,inst_28262,inst_28264,inst_28279,state_val_28343,c__24715__auto__,map__28188,map__28188__$1,opts,before_jsload,on_jsload,reload_dependents,map__28189,map__28189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28280){
var map__28411 = p__28280;
var map__28411__$1 = ((((!((map__28411 == null)))?((((map__28411.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28411.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28411):map__28411);
var namespace = cljs.core.get.call(null,map__28411__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28411__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28259,inst_28256,inst_28260,inst_28262,inst_28264,inst_28279,state_val_28343,c__24715__auto__,map__28188,map__28188__$1,opts,before_jsload,on_jsload,reload_dependents,map__28189,map__28189__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28282 = cljs.core.map.call(null,inst_28281,inst_28260);
var inst_28283 = cljs.core.pr_str.call(null,inst_28282);
var inst_28284 = figwheel.client.utils.log.call(null,inst_28283);
var inst_28285 = (function (){var all_files = inst_28256;
var res_SINGLEQUOTE_ = inst_28259;
var res = inst_28260;
var files_not_loaded = inst_28262;
var dependencies_that_loaded = inst_28264;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28259,inst_28256,inst_28260,inst_28262,inst_28264,inst_28279,inst_28281,inst_28282,inst_28283,inst_28284,state_val_28343,c__24715__auto__,map__28188,map__28188__$1,opts,before_jsload,on_jsload,reload_dependents,map__28189,map__28189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28259,inst_28256,inst_28260,inst_28262,inst_28264,inst_28279,inst_28281,inst_28282,inst_28283,inst_28284,state_val_28343,c__24715__auto__,map__28188,map__28188__$1,opts,before_jsload,on_jsload,reload_dependents,map__28189,map__28189__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28286 = setTimeout(inst_28285,(10));
var state_28342__$1 = (function (){var statearr_28413 = state_28342;
(statearr_28413[(33)] = inst_28279);

(statearr_28413[(34)] = inst_28284);

return statearr_28413;
})();
var statearr_28414_28480 = state_28342__$1;
(statearr_28414_28480[(2)] = inst_28286);

(statearr_28414_28480[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (16))){
var state_28342__$1 = state_28342;
var statearr_28415_28481 = state_28342__$1;
(statearr_28415_28481[(2)] = reload_dependents);

(statearr_28415_28481[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (38))){
var inst_28296 = (state_28342[(16)]);
var inst_28313 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28296);
var state_28342__$1 = state_28342;
var statearr_28416_28482 = state_28342__$1;
(statearr_28416_28482[(2)] = inst_28313);

(statearr_28416_28482[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (30))){
var state_28342__$1 = state_28342;
var statearr_28417_28483 = state_28342__$1;
(statearr_28417_28483[(2)] = null);

(statearr_28417_28483[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (10))){
var inst_28216 = (state_28342[(22)]);
var inst_28218 = cljs.core.chunked_seq_QMARK_.call(null,inst_28216);
var state_28342__$1 = state_28342;
if(inst_28218){
var statearr_28418_28484 = state_28342__$1;
(statearr_28418_28484[(1)] = (13));

} else {
var statearr_28419_28485 = state_28342__$1;
(statearr_28419_28485[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (18))){
var inst_28250 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
if(cljs.core.truth_(inst_28250)){
var statearr_28420_28486 = state_28342__$1;
(statearr_28420_28486[(1)] = (19));

} else {
var statearr_28421_28487 = state_28342__$1;
(statearr_28421_28487[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (42))){
var state_28342__$1 = state_28342;
var statearr_28422_28488 = state_28342__$1;
(statearr_28422_28488[(2)] = null);

(statearr_28422_28488[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (37))){
var inst_28308 = (state_28342[(2)]);
var state_28342__$1 = state_28342;
var statearr_28423_28489 = state_28342__$1;
(statearr_28423_28489[(2)] = inst_28308);

(statearr_28423_28489[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28343 === (8))){
var inst_28216 = (state_28342[(22)]);
var inst_28203 = (state_28342[(10)]);
var inst_28216__$1 = cljs.core.seq.call(null,inst_28203);
var state_28342__$1 = (function (){var statearr_28424 = state_28342;
(statearr_28424[(22)] = inst_28216__$1);

return statearr_28424;
})();
if(inst_28216__$1){
var statearr_28425_28490 = state_28342__$1;
(statearr_28425_28490[(1)] = (10));

} else {
var statearr_28426_28491 = state_28342__$1;
(statearr_28426_28491[(1)] = (11));

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
}
});})(c__24715__auto__,map__28188,map__28188__$1,opts,before_jsload,on_jsload,reload_dependents,map__28189,map__28189__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24603__auto__,c__24715__auto__,map__28188,map__28188__$1,opts,before_jsload,on_jsload,reload_dependents,map__28189,map__28189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24604__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24604__auto____0 = (function (){
var statearr_28430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28430[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24604__auto__);

(statearr_28430[(1)] = (1));

return statearr_28430;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24604__auto____1 = (function (state_28342){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_28342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e28431){if((e28431 instanceof Object)){
var ex__24607__auto__ = e28431;
var statearr_28432_28492 = state_28342;
(statearr_28432_28492[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28493 = state_28342;
state_28342 = G__28493;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24604__auto__ = function(state_28342){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24604__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24604__auto____1.call(this,state_28342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24604__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24604__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto__,map__28188,map__28188__$1,opts,before_jsload,on_jsload,reload_dependents,map__28189,map__28189__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24717__auto__ = (function (){var statearr_28433 = f__24716__auto__.call(null);
(statearr_28433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto__);

return statearr_28433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto__,map__28188,map__28188__$1,opts,before_jsload,on_jsload,reload_dependents,map__28189,map__28189__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24715__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28496,link){
var map__28499 = p__28496;
var map__28499__$1 = ((((!((map__28499 == null)))?((((map__28499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28499):map__28499);
var file = cljs.core.get.call(null,map__28499__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__28499,map__28499__$1,file){
return (function (p1__28494_SHARP_,p2__28495_SHARP_){
if(cljs.core._EQ_.call(null,p1__28494_SHARP_,p2__28495_SHARP_)){
return p1__28494_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__28499,map__28499__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28505){
var map__28506 = p__28505;
var map__28506__$1 = ((((!((map__28506 == null)))?((((map__28506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28506):map__28506);
var match_length = cljs.core.get.call(null,map__28506__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28506__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28501_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28501_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args28508 = [];
var len__17809__auto___28511 = arguments.length;
var i__17810__auto___28512 = (0);
while(true){
if((i__17810__auto___28512 < len__17809__auto___28511)){
args28508.push((arguments[i__17810__auto___28512]));

var G__28513 = (i__17810__auto___28512 + (1));
i__17810__auto___28512 = G__28513;
continue;
} else {
}
break;
}

var G__28510 = args28508.length;
switch (G__28510) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28508.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28515_SHARP_,p2__28516_SHARP_){
return cljs.core.assoc.call(null,p1__28515_SHARP_,cljs.core.get.call(null,p2__28516_SHARP_,key),p2__28516_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28517){
var map__28520 = p__28517;
var map__28520__$1 = ((((!((map__28520 == null)))?((((map__28520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28520):map__28520);
var f_data = map__28520__$1;
var file = cljs.core.get.call(null,map__28520__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28522,files_msg){
var map__28529 = p__28522;
var map__28529__$1 = ((((!((map__28529 == null)))?((((map__28529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28529):map__28529);
var opts = map__28529__$1;
var on_cssload = cljs.core.get.call(null,map__28529__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28531_28535 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28532_28536 = null;
var count__28533_28537 = (0);
var i__28534_28538 = (0);
while(true){
if((i__28534_28538 < count__28533_28537)){
var f_28539 = cljs.core._nth.call(null,chunk__28532_28536,i__28534_28538);
figwheel.client.file_reloading.reload_css_file.call(null,f_28539);

var G__28540 = seq__28531_28535;
var G__28541 = chunk__28532_28536;
var G__28542 = count__28533_28537;
var G__28543 = (i__28534_28538 + (1));
seq__28531_28535 = G__28540;
chunk__28532_28536 = G__28541;
count__28533_28537 = G__28542;
i__28534_28538 = G__28543;
continue;
} else {
var temp__4425__auto___28544 = cljs.core.seq.call(null,seq__28531_28535);
if(temp__4425__auto___28544){
var seq__28531_28545__$1 = temp__4425__auto___28544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28531_28545__$1)){
var c__17554__auto___28546 = cljs.core.chunk_first.call(null,seq__28531_28545__$1);
var G__28547 = cljs.core.chunk_rest.call(null,seq__28531_28545__$1);
var G__28548 = c__17554__auto___28546;
var G__28549 = cljs.core.count.call(null,c__17554__auto___28546);
var G__28550 = (0);
seq__28531_28535 = G__28547;
chunk__28532_28536 = G__28548;
count__28533_28537 = G__28549;
i__28534_28538 = G__28550;
continue;
} else {
var f_28551 = cljs.core.first.call(null,seq__28531_28545__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28551);

var G__28552 = cljs.core.next.call(null,seq__28531_28545__$1);
var G__28553 = null;
var G__28554 = (0);
var G__28555 = (0);
seq__28531_28535 = G__28552;
chunk__28532_28536 = G__28553;
count__28533_28537 = G__28554;
i__28534_28538 = G__28555;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28529,map__28529__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28529,map__28529__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1449083089053