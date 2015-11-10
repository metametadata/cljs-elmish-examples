// Compiled by ClojureScript 1.7.122 {}
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
var or__16074__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16074__auto__){
return or__16074__auto__;
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
var or__16074__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16074__auto__)){
return or__16074__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30001_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30001_SHARP_));
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
var seq__30006 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30007 = null;
var count__30008 = (0);
var i__30009 = (0);
while(true){
if((i__30009 < count__30008)){
var n = cljs.core._nth.call(null,chunk__30007,i__30009);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30010 = seq__30006;
var G__30011 = chunk__30007;
var G__30012 = count__30008;
var G__30013 = (i__30009 + (1));
seq__30006 = G__30010;
chunk__30007 = G__30011;
count__30008 = G__30012;
i__30009 = G__30013;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30006);
if(temp__4425__auto__){
var seq__30006__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30006__$1)){
var c__16877__auto__ = cljs.core.chunk_first.call(null,seq__30006__$1);
var G__30014 = cljs.core.chunk_rest.call(null,seq__30006__$1);
var G__30015 = c__16877__auto__;
var G__30016 = cljs.core.count.call(null,c__16877__auto__);
var G__30017 = (0);
seq__30006 = G__30014;
chunk__30007 = G__30015;
count__30008 = G__30016;
i__30009 = G__30017;
continue;
} else {
var n = cljs.core.first.call(null,seq__30006__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30018 = cljs.core.next.call(null,seq__30006__$1);
var G__30019 = null;
var G__30020 = (0);
var G__30021 = (0);
seq__30006 = G__30018;
chunk__30007 = G__30019;
count__30008 = G__30020;
i__30009 = G__30021;
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

var seq__30060_30067 = cljs.core.seq.call(null,deps);
var chunk__30061_30068 = null;
var count__30062_30069 = (0);
var i__30063_30070 = (0);
while(true){
if((i__30063_30070 < count__30062_30069)){
var dep_30071 = cljs.core._nth.call(null,chunk__30061_30068,i__30063_30070);
topo_sort_helper_STAR_.call(null,dep_30071,(depth + (1)),state);

var G__30072 = seq__30060_30067;
var G__30073 = chunk__30061_30068;
var G__30074 = count__30062_30069;
var G__30075 = (i__30063_30070 + (1));
seq__30060_30067 = G__30072;
chunk__30061_30068 = G__30073;
count__30062_30069 = G__30074;
i__30063_30070 = G__30075;
continue;
} else {
var temp__4425__auto___30076 = cljs.core.seq.call(null,seq__30060_30067);
if(temp__4425__auto___30076){
var seq__30060_30077__$1 = temp__4425__auto___30076;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30060_30077__$1)){
var c__16877__auto___30078 = cljs.core.chunk_first.call(null,seq__30060_30077__$1);
var G__30079 = cljs.core.chunk_rest.call(null,seq__30060_30077__$1);
var G__30080 = c__16877__auto___30078;
var G__30081 = cljs.core.count.call(null,c__16877__auto___30078);
var G__30082 = (0);
seq__30060_30067 = G__30079;
chunk__30061_30068 = G__30080;
count__30062_30069 = G__30081;
i__30063_30070 = G__30082;
continue;
} else {
var dep_30083 = cljs.core.first.call(null,seq__30060_30077__$1);
topo_sort_helper_STAR_.call(null,dep_30083,(depth + (1)),state);

var G__30084 = cljs.core.next.call(null,seq__30060_30077__$1);
var G__30085 = null;
var G__30086 = (0);
var G__30087 = (0);
seq__30060_30067 = G__30084;
chunk__30061_30068 = G__30085;
count__30062_30069 = G__30086;
i__30063_30070 = G__30087;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30064){
var vec__30066 = p__30064;
var x = cljs.core.nth.call(null,vec__30066,(0),null);
var xs = cljs.core.nthnext.call(null,vec__30066,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30066,x,xs,get_deps__$1){
return (function (p1__30022_SHARP_){
return clojure.set.difference.call(null,p1__30022_SHARP_,x);
});})(vec__30066,x,xs,get_deps__$1))
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
var seq__30100 = cljs.core.seq.call(null,provides);
var chunk__30101 = null;
var count__30102 = (0);
var i__30103 = (0);
while(true){
if((i__30103 < count__30102)){
var prov = cljs.core._nth.call(null,chunk__30101,i__30103);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30104_30112 = cljs.core.seq.call(null,requires);
var chunk__30105_30113 = null;
var count__30106_30114 = (0);
var i__30107_30115 = (0);
while(true){
if((i__30107_30115 < count__30106_30114)){
var req_30116 = cljs.core._nth.call(null,chunk__30105_30113,i__30107_30115);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30116,prov);

var G__30117 = seq__30104_30112;
var G__30118 = chunk__30105_30113;
var G__30119 = count__30106_30114;
var G__30120 = (i__30107_30115 + (1));
seq__30104_30112 = G__30117;
chunk__30105_30113 = G__30118;
count__30106_30114 = G__30119;
i__30107_30115 = G__30120;
continue;
} else {
var temp__4425__auto___30121 = cljs.core.seq.call(null,seq__30104_30112);
if(temp__4425__auto___30121){
var seq__30104_30122__$1 = temp__4425__auto___30121;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30104_30122__$1)){
var c__16877__auto___30123 = cljs.core.chunk_first.call(null,seq__30104_30122__$1);
var G__30124 = cljs.core.chunk_rest.call(null,seq__30104_30122__$1);
var G__30125 = c__16877__auto___30123;
var G__30126 = cljs.core.count.call(null,c__16877__auto___30123);
var G__30127 = (0);
seq__30104_30112 = G__30124;
chunk__30105_30113 = G__30125;
count__30106_30114 = G__30126;
i__30107_30115 = G__30127;
continue;
} else {
var req_30128 = cljs.core.first.call(null,seq__30104_30122__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30128,prov);

var G__30129 = cljs.core.next.call(null,seq__30104_30122__$1);
var G__30130 = null;
var G__30131 = (0);
var G__30132 = (0);
seq__30104_30112 = G__30129;
chunk__30105_30113 = G__30130;
count__30106_30114 = G__30131;
i__30107_30115 = G__30132;
continue;
}
} else {
}
}
break;
}

var G__30133 = seq__30100;
var G__30134 = chunk__30101;
var G__30135 = count__30102;
var G__30136 = (i__30103 + (1));
seq__30100 = G__30133;
chunk__30101 = G__30134;
count__30102 = G__30135;
i__30103 = G__30136;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30100);
if(temp__4425__auto__){
var seq__30100__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30100__$1)){
var c__16877__auto__ = cljs.core.chunk_first.call(null,seq__30100__$1);
var G__30137 = cljs.core.chunk_rest.call(null,seq__30100__$1);
var G__30138 = c__16877__auto__;
var G__30139 = cljs.core.count.call(null,c__16877__auto__);
var G__30140 = (0);
seq__30100 = G__30137;
chunk__30101 = G__30138;
count__30102 = G__30139;
i__30103 = G__30140;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30100__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30108_30141 = cljs.core.seq.call(null,requires);
var chunk__30109_30142 = null;
var count__30110_30143 = (0);
var i__30111_30144 = (0);
while(true){
if((i__30111_30144 < count__30110_30143)){
var req_30145 = cljs.core._nth.call(null,chunk__30109_30142,i__30111_30144);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30145,prov);

var G__30146 = seq__30108_30141;
var G__30147 = chunk__30109_30142;
var G__30148 = count__30110_30143;
var G__30149 = (i__30111_30144 + (1));
seq__30108_30141 = G__30146;
chunk__30109_30142 = G__30147;
count__30110_30143 = G__30148;
i__30111_30144 = G__30149;
continue;
} else {
var temp__4425__auto___30150__$1 = cljs.core.seq.call(null,seq__30108_30141);
if(temp__4425__auto___30150__$1){
var seq__30108_30151__$1 = temp__4425__auto___30150__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30108_30151__$1)){
var c__16877__auto___30152 = cljs.core.chunk_first.call(null,seq__30108_30151__$1);
var G__30153 = cljs.core.chunk_rest.call(null,seq__30108_30151__$1);
var G__30154 = c__16877__auto___30152;
var G__30155 = cljs.core.count.call(null,c__16877__auto___30152);
var G__30156 = (0);
seq__30108_30141 = G__30153;
chunk__30109_30142 = G__30154;
count__30110_30143 = G__30155;
i__30111_30144 = G__30156;
continue;
} else {
var req_30157 = cljs.core.first.call(null,seq__30108_30151__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30157,prov);

var G__30158 = cljs.core.next.call(null,seq__30108_30151__$1);
var G__30159 = null;
var G__30160 = (0);
var G__30161 = (0);
seq__30108_30141 = G__30158;
chunk__30109_30142 = G__30159;
count__30110_30143 = G__30160;
i__30111_30144 = G__30161;
continue;
}
} else {
}
}
break;
}

var G__30162 = cljs.core.next.call(null,seq__30100__$1);
var G__30163 = null;
var G__30164 = (0);
var G__30165 = (0);
seq__30100 = G__30162;
chunk__30101 = G__30163;
count__30102 = G__30164;
i__30103 = G__30165;
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
var seq__30170_30174 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30171_30175 = null;
var count__30172_30176 = (0);
var i__30173_30177 = (0);
while(true){
if((i__30173_30177 < count__30172_30176)){
var ns_30178 = cljs.core._nth.call(null,chunk__30171_30175,i__30173_30177);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30178);

var G__30179 = seq__30170_30174;
var G__30180 = chunk__30171_30175;
var G__30181 = count__30172_30176;
var G__30182 = (i__30173_30177 + (1));
seq__30170_30174 = G__30179;
chunk__30171_30175 = G__30180;
count__30172_30176 = G__30181;
i__30173_30177 = G__30182;
continue;
} else {
var temp__4425__auto___30183 = cljs.core.seq.call(null,seq__30170_30174);
if(temp__4425__auto___30183){
var seq__30170_30184__$1 = temp__4425__auto___30183;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30170_30184__$1)){
var c__16877__auto___30185 = cljs.core.chunk_first.call(null,seq__30170_30184__$1);
var G__30186 = cljs.core.chunk_rest.call(null,seq__30170_30184__$1);
var G__30187 = c__16877__auto___30185;
var G__30188 = cljs.core.count.call(null,c__16877__auto___30185);
var G__30189 = (0);
seq__30170_30174 = G__30186;
chunk__30171_30175 = G__30187;
count__30172_30176 = G__30188;
i__30173_30177 = G__30189;
continue;
} else {
var ns_30190 = cljs.core.first.call(null,seq__30170_30184__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30190);

var G__30191 = cljs.core.next.call(null,seq__30170_30184__$1);
var G__30192 = null;
var G__30193 = (0);
var G__30194 = (0);
seq__30170_30174 = G__30191;
chunk__30171_30175 = G__30192;
count__30172_30176 = G__30193;
i__30173_30177 = G__30194;
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
goog.require_figwheel_backup_ = (function (){var or__16074__auto__ = goog.require__;
if(cljs.core.truth_(or__16074__auto__)){
return or__16074__auto__;
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
var G__30195__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30195 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30196__i = 0, G__30196__a = new Array(arguments.length -  0);
while (G__30196__i < G__30196__a.length) {G__30196__a[G__30196__i] = arguments[G__30196__i + 0]; ++G__30196__i;}
  args = new cljs.core.IndexedSeq(G__30196__a,0);
} 
return G__30195__delegate.call(this,args);};
G__30195.cljs$lang$maxFixedArity = 0;
G__30195.cljs$lang$applyTo = (function (arglist__30197){
var args = cljs.core.seq(arglist__30197);
return G__30195__delegate(args);
});
G__30195.cljs$core$IFn$_invoke$arity$variadic = G__30195__delegate;
return G__30195;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30199 = cljs.core._EQ_;
var expr__30200 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30199.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30200))){
var path_parts = ((function (pred__30199,expr__30200){
return (function (p1__30198_SHARP_){
return clojure.string.split.call(null,p1__30198_SHARP_,/[\/\\]/);
});})(pred__30199,expr__30200))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30199,expr__30200){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e30202){if((e30202 instanceof Error)){
var e = e30202;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30202;

}
}})());
});
;})(path_parts,sep,root,pred__30199,expr__30200))
} else {
if(cljs.core.truth_(pred__30199.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30200))){
return ((function (pred__30199,expr__30200){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__30199,expr__30200){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30199,expr__30200))
);

return deferred.addErrback(((function (deferred,pred__30199,expr__30200){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30199,expr__30200))
);
});
;})(pred__30199,expr__30200))
} else {
return ((function (pred__30199,expr__30200){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30199,expr__30200))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30203,callback){
var map__30206 = p__30203;
var map__30206__$1 = ((((!((map__30206 == null)))?((((map__30206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30206):map__30206);
var file_msg = map__30206__$1;
var request_url = cljs.core.get.call(null,map__30206__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30206,map__30206__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30206,map__30206__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__23057__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23057__auto__){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (c__23057__auto__){
return (function (state_30230){
var state_val_30231 = (state_30230[(1)]);
if((state_val_30231 === (7))){
var inst_30226 = (state_30230[(2)]);
var state_30230__$1 = state_30230;
var statearr_30232_30252 = state_30230__$1;
(statearr_30232_30252[(2)] = inst_30226);

(statearr_30232_30252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (1))){
var state_30230__$1 = state_30230;
var statearr_30233_30253 = state_30230__$1;
(statearr_30233_30253[(2)] = null);

(statearr_30233_30253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (4))){
var inst_30210 = (state_30230[(7)]);
var inst_30210__$1 = (state_30230[(2)]);
var state_30230__$1 = (function (){var statearr_30234 = state_30230;
(statearr_30234[(7)] = inst_30210__$1);

return statearr_30234;
})();
if(cljs.core.truth_(inst_30210__$1)){
var statearr_30235_30254 = state_30230__$1;
(statearr_30235_30254[(1)] = (5));

} else {
var statearr_30236_30255 = state_30230__$1;
(statearr_30236_30255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (6))){
var state_30230__$1 = state_30230;
var statearr_30237_30256 = state_30230__$1;
(statearr_30237_30256[(2)] = null);

(statearr_30237_30256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (3))){
var inst_30228 = (state_30230[(2)]);
var state_30230__$1 = state_30230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30230__$1,inst_30228);
} else {
if((state_val_30231 === (2))){
var state_30230__$1 = state_30230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30230__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30231 === (11))){
var inst_30222 = (state_30230[(2)]);
var state_30230__$1 = (function (){var statearr_30238 = state_30230;
(statearr_30238[(8)] = inst_30222);

return statearr_30238;
})();
var statearr_30239_30257 = state_30230__$1;
(statearr_30239_30257[(2)] = null);

(statearr_30239_30257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (9))){
var inst_30214 = (state_30230[(9)]);
var inst_30216 = (state_30230[(10)]);
var inst_30218 = inst_30216.call(null,inst_30214);
var state_30230__$1 = state_30230;
var statearr_30240_30258 = state_30230__$1;
(statearr_30240_30258[(2)] = inst_30218);

(statearr_30240_30258[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (5))){
var inst_30210 = (state_30230[(7)]);
var inst_30212 = figwheel.client.file_reloading.blocking_load.call(null,inst_30210);
var state_30230__$1 = state_30230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30230__$1,(8),inst_30212);
} else {
if((state_val_30231 === (10))){
var inst_30214 = (state_30230[(9)]);
var inst_30220 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30214);
var state_30230__$1 = state_30230;
var statearr_30241_30259 = state_30230__$1;
(statearr_30241_30259[(2)] = inst_30220);

(statearr_30241_30259[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (8))){
var inst_30210 = (state_30230[(7)]);
var inst_30216 = (state_30230[(10)]);
var inst_30214 = (state_30230[(2)]);
var inst_30215 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30216__$1 = cljs.core.get.call(null,inst_30215,inst_30210);
var state_30230__$1 = (function (){var statearr_30242 = state_30230;
(statearr_30242[(9)] = inst_30214);

(statearr_30242[(10)] = inst_30216__$1);

return statearr_30242;
})();
if(cljs.core.truth_(inst_30216__$1)){
var statearr_30243_30260 = state_30230__$1;
(statearr_30243_30260[(1)] = (9));

} else {
var statearr_30244_30261 = state_30230__$1;
(statearr_30244_30261[(1)] = (10));

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
});})(c__23057__auto__))
;
return ((function (switch__22992__auto__,c__23057__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22993__auto__ = null;
var figwheel$client$file_reloading$state_machine__22993__auto____0 = (function (){
var statearr_30248 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30248[(0)] = figwheel$client$file_reloading$state_machine__22993__auto__);

(statearr_30248[(1)] = (1));

return statearr_30248;
});
var figwheel$client$file_reloading$state_machine__22993__auto____1 = (function (state_30230){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_30230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e30249){if((e30249 instanceof Object)){
var ex__22996__auto__ = e30249;
var statearr_30250_30262 = state_30230;
(statearr_30250_30262[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30263 = state_30230;
state_30230 = G__30263;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22993__auto__ = function(state_30230){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22993__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22993__auto____1.call(this,state_30230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22993__auto____0;
figwheel$client$file_reloading$state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22993__auto____1;
return figwheel$client$file_reloading$state_machine__22993__auto__;
})()
;})(switch__22992__auto__,c__23057__auto__))
})();
var state__23059__auto__ = (function (){var statearr_30251 = f__23058__auto__.call(null);
(statearr_30251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto__);

return statearr_30251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(c__23057__auto__))
);

return c__23057__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30264,callback){
var map__30267 = p__30264;
var map__30267__$1 = ((((!((map__30267 == null)))?((((map__30267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30267):map__30267);
var file_msg = map__30267__$1;
var namespace = cljs.core.get.call(null,map__30267__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30267,map__30267__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30267,map__30267__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30269){
var map__30272 = p__30269;
var map__30272__$1 = ((((!((map__30272 == null)))?((((map__30272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30272):map__30272);
var file_msg = map__30272__$1;
var namespace = cljs.core.get.call(null,map__30272__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16062__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16062__auto__){
var or__16074__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16074__auto__)){
return or__16074__auto__;
} else {
var or__16074__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16074__auto____$1)){
return or__16074__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16062__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30274,callback){
var map__30277 = p__30274;
var map__30277__$1 = ((((!((map__30277 == null)))?((((map__30277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30277):map__30277);
var file_msg = map__30277__$1;
var request_url = cljs.core.get.call(null,map__30277__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30277__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__23057__auto___30365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23057__auto___30365,out){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (c__23057__auto___30365,out){
return (function (state_30347){
var state_val_30348 = (state_30347[(1)]);
if((state_val_30348 === (1))){
var inst_30325 = cljs.core.nth.call(null,files,(0),null);
var inst_30326 = cljs.core.nthnext.call(null,files,(1));
var inst_30327 = files;
var state_30347__$1 = (function (){var statearr_30349 = state_30347;
(statearr_30349[(7)] = inst_30326);

(statearr_30349[(8)] = inst_30327);

(statearr_30349[(9)] = inst_30325);

return statearr_30349;
})();
var statearr_30350_30366 = state_30347__$1;
(statearr_30350_30366[(2)] = null);

(statearr_30350_30366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30348 === (2))){
var inst_30327 = (state_30347[(8)]);
var inst_30330 = (state_30347[(10)]);
var inst_30330__$1 = cljs.core.nth.call(null,inst_30327,(0),null);
var inst_30331 = cljs.core.nthnext.call(null,inst_30327,(1));
var inst_30332 = (inst_30330__$1 == null);
var inst_30333 = cljs.core.not.call(null,inst_30332);
var state_30347__$1 = (function (){var statearr_30351 = state_30347;
(statearr_30351[(10)] = inst_30330__$1);

(statearr_30351[(11)] = inst_30331);

return statearr_30351;
})();
if(inst_30333){
var statearr_30352_30367 = state_30347__$1;
(statearr_30352_30367[(1)] = (4));

} else {
var statearr_30353_30368 = state_30347__$1;
(statearr_30353_30368[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30348 === (3))){
var inst_30345 = (state_30347[(2)]);
var state_30347__$1 = state_30347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30347__$1,inst_30345);
} else {
if((state_val_30348 === (4))){
var inst_30330 = (state_30347[(10)]);
var inst_30335 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30330);
var state_30347__$1 = state_30347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30347__$1,(7),inst_30335);
} else {
if((state_val_30348 === (5))){
var inst_30341 = cljs.core.async.close_BANG_.call(null,out);
var state_30347__$1 = state_30347;
var statearr_30354_30369 = state_30347__$1;
(statearr_30354_30369[(2)] = inst_30341);

(statearr_30354_30369[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30348 === (6))){
var inst_30343 = (state_30347[(2)]);
var state_30347__$1 = state_30347;
var statearr_30355_30370 = state_30347__$1;
(statearr_30355_30370[(2)] = inst_30343);

(statearr_30355_30370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30348 === (7))){
var inst_30331 = (state_30347[(11)]);
var inst_30337 = (state_30347[(2)]);
var inst_30338 = cljs.core.async.put_BANG_.call(null,out,inst_30337);
var inst_30327 = inst_30331;
var state_30347__$1 = (function (){var statearr_30356 = state_30347;
(statearr_30356[(8)] = inst_30327);

(statearr_30356[(12)] = inst_30338);

return statearr_30356;
})();
var statearr_30357_30371 = state_30347__$1;
(statearr_30357_30371[(2)] = null);

(statearr_30357_30371[(1)] = (2));


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
});})(c__23057__auto___30365,out))
;
return ((function (switch__22992__auto__,c__23057__auto___30365,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22993__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22993__auto____0 = (function (){
var statearr_30361 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30361[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22993__auto__);

(statearr_30361[(1)] = (1));

return statearr_30361;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22993__auto____1 = (function (state_30347){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_30347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e30362){if((e30362 instanceof Object)){
var ex__22996__auto__ = e30362;
var statearr_30363_30372 = state_30347;
(statearr_30363_30372[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30373 = state_30347;
state_30347 = G__30373;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22993__auto__ = function(state_30347){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22993__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22993__auto____1.call(this,state_30347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22993__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22993__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22993__auto__;
})()
;})(switch__22992__auto__,c__23057__auto___30365,out))
})();
var state__23059__auto__ = (function (){var statearr_30364 = f__23058__auto__.call(null);
(statearr_30364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto___30365);

return statearr_30364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(c__23057__auto___30365,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30374,opts){
var map__30378 = p__30374;
var map__30378__$1 = ((((!((map__30378 == null)))?((((map__30378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30378):map__30378);
var eval_body__$1 = cljs.core.get.call(null,map__30378__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30378__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16062__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16062__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16062__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30380){var e = e30380;
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
return (function (p1__30381_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30381_SHARP_),n);
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
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30386){
var vec__30387 = p__30386;
var k = cljs.core.nth.call(null,vec__30387,(0),null);
var v = cljs.core.nth.call(null,vec__30387,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30388){
var vec__30389 = p__30388;
var k = cljs.core.nth.call(null,vec__30389,(0),null);
var v = cljs.core.nth.call(null,vec__30389,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30393,p__30394){
var map__30641 = p__30393;
var map__30641__$1 = ((((!((map__30641 == null)))?((((map__30641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30641):map__30641);
var opts = map__30641__$1;
var before_jsload = cljs.core.get.call(null,map__30641__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30641__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30641__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30642 = p__30394;
var map__30642__$1 = ((((!((map__30642 == null)))?((((map__30642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30642):map__30642);
var msg = map__30642__$1;
var files = cljs.core.get.call(null,map__30642__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30642__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30642__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23057__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23057__auto__,map__30641,map__30641__$1,opts,before_jsload,on_jsload,reload_dependents,map__30642,map__30642__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (c__23057__auto__,map__30641,map__30641__$1,opts,before_jsload,on_jsload,reload_dependents,map__30642,map__30642__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30795){
var state_val_30796 = (state_30795[(1)]);
if((state_val_30796 === (7))){
var inst_30659 = (state_30795[(7)]);
var inst_30658 = (state_30795[(8)]);
var inst_30657 = (state_30795[(9)]);
var inst_30656 = (state_30795[(10)]);
var inst_30664 = cljs.core._nth.call(null,inst_30657,inst_30659);
var inst_30665 = figwheel.client.file_reloading.eval_body.call(null,inst_30664,opts);
var inst_30666 = (inst_30659 + (1));
var tmp30797 = inst_30658;
var tmp30798 = inst_30657;
var tmp30799 = inst_30656;
var inst_30656__$1 = tmp30799;
var inst_30657__$1 = tmp30798;
var inst_30658__$1 = tmp30797;
var inst_30659__$1 = inst_30666;
var state_30795__$1 = (function (){var statearr_30800 = state_30795;
(statearr_30800[(7)] = inst_30659__$1);

(statearr_30800[(8)] = inst_30658__$1);

(statearr_30800[(11)] = inst_30665);

(statearr_30800[(9)] = inst_30657__$1);

(statearr_30800[(10)] = inst_30656__$1);

return statearr_30800;
})();
var statearr_30801_30887 = state_30795__$1;
(statearr_30801_30887[(2)] = null);

(statearr_30801_30887[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (20))){
var inst_30699 = (state_30795[(12)]);
var inst_30707 = figwheel.client.file_reloading.sort_files.call(null,inst_30699);
var state_30795__$1 = state_30795;
var statearr_30802_30888 = state_30795__$1;
(statearr_30802_30888[(2)] = inst_30707);

(statearr_30802_30888[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (27))){
var state_30795__$1 = state_30795;
var statearr_30803_30889 = state_30795__$1;
(statearr_30803_30889[(2)] = null);

(statearr_30803_30889[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (1))){
var inst_30648 = (state_30795[(13)]);
var inst_30645 = before_jsload.call(null,files);
var inst_30646 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30647 = (function (){return ((function (inst_30648,inst_30645,inst_30646,state_val_30796,c__23057__auto__,map__30641,map__30641__$1,opts,before_jsload,on_jsload,reload_dependents,map__30642,map__30642__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30390_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30390_SHARP_);
});
;})(inst_30648,inst_30645,inst_30646,state_val_30796,c__23057__auto__,map__30641,map__30641__$1,opts,before_jsload,on_jsload,reload_dependents,map__30642,map__30642__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30648__$1 = cljs.core.filter.call(null,inst_30647,files);
var inst_30649 = cljs.core.not_empty.call(null,inst_30648__$1);
var state_30795__$1 = (function (){var statearr_30804 = state_30795;
(statearr_30804[(14)] = inst_30646);

(statearr_30804[(13)] = inst_30648__$1);

(statearr_30804[(15)] = inst_30645);

return statearr_30804;
})();
if(cljs.core.truth_(inst_30649)){
var statearr_30805_30890 = state_30795__$1;
(statearr_30805_30890[(1)] = (2));

} else {
var statearr_30806_30891 = state_30795__$1;
(statearr_30806_30891[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (24))){
var state_30795__$1 = state_30795;
var statearr_30807_30892 = state_30795__$1;
(statearr_30807_30892[(2)] = null);

(statearr_30807_30892[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (39))){
var inst_30749 = (state_30795[(16)]);
var state_30795__$1 = state_30795;
var statearr_30808_30893 = state_30795__$1;
(statearr_30808_30893[(2)] = inst_30749);

(statearr_30808_30893[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (46))){
var inst_30790 = (state_30795[(2)]);
var state_30795__$1 = state_30795;
var statearr_30809_30894 = state_30795__$1;
(statearr_30809_30894[(2)] = inst_30790);

(statearr_30809_30894[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (4))){
var inst_30693 = (state_30795[(2)]);
var inst_30694 = cljs.core.List.EMPTY;
var inst_30695 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30694);
var inst_30696 = (function (){return ((function (inst_30693,inst_30694,inst_30695,state_val_30796,c__23057__auto__,map__30641,map__30641__$1,opts,before_jsload,on_jsload,reload_dependents,map__30642,map__30642__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30391_SHARP_){
var and__16062__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30391_SHARP_);
if(cljs.core.truth_(and__16062__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30391_SHARP_));
} else {
return and__16062__auto__;
}
});
;})(inst_30693,inst_30694,inst_30695,state_val_30796,c__23057__auto__,map__30641,map__30641__$1,opts,before_jsload,on_jsload,reload_dependents,map__30642,map__30642__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30697 = cljs.core.filter.call(null,inst_30696,files);
var inst_30698 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30699 = cljs.core.concat.call(null,inst_30697,inst_30698);
var state_30795__$1 = (function (){var statearr_30810 = state_30795;
(statearr_30810[(12)] = inst_30699);

(statearr_30810[(17)] = inst_30693);

(statearr_30810[(18)] = inst_30695);

return statearr_30810;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30811_30895 = state_30795__$1;
(statearr_30811_30895[(1)] = (16));

} else {
var statearr_30812_30896 = state_30795__$1;
(statearr_30812_30896[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (15))){
var inst_30683 = (state_30795[(2)]);
var state_30795__$1 = state_30795;
var statearr_30813_30897 = state_30795__$1;
(statearr_30813_30897[(2)] = inst_30683);

(statearr_30813_30897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (21))){
var inst_30709 = (state_30795[(19)]);
var inst_30709__$1 = (state_30795[(2)]);
var inst_30710 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30709__$1);
var state_30795__$1 = (function (){var statearr_30814 = state_30795;
(statearr_30814[(19)] = inst_30709__$1);

return statearr_30814;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30795__$1,(22),inst_30710);
} else {
if((state_val_30796 === (31))){
var inst_30793 = (state_30795[(2)]);
var state_30795__$1 = state_30795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30795__$1,inst_30793);
} else {
if((state_val_30796 === (32))){
var inst_30749 = (state_30795[(16)]);
var inst_30754 = inst_30749.cljs$lang$protocol_mask$partition0$;
var inst_30755 = (inst_30754 & (64));
var inst_30756 = inst_30749.cljs$core$ISeq$;
var inst_30757 = (inst_30755) || (inst_30756);
var state_30795__$1 = state_30795;
if(cljs.core.truth_(inst_30757)){
var statearr_30815_30898 = state_30795__$1;
(statearr_30815_30898[(1)] = (35));

} else {
var statearr_30816_30899 = state_30795__$1;
(statearr_30816_30899[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (40))){
var inst_30770 = (state_30795[(20)]);
var inst_30769 = (state_30795[(2)]);
var inst_30770__$1 = cljs.core.get.call(null,inst_30769,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30771 = cljs.core.get.call(null,inst_30769,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30772 = cljs.core.not_empty.call(null,inst_30770__$1);
var state_30795__$1 = (function (){var statearr_30817 = state_30795;
(statearr_30817[(21)] = inst_30771);

(statearr_30817[(20)] = inst_30770__$1);

return statearr_30817;
})();
if(cljs.core.truth_(inst_30772)){
var statearr_30818_30900 = state_30795__$1;
(statearr_30818_30900[(1)] = (41));

} else {
var statearr_30819_30901 = state_30795__$1;
(statearr_30819_30901[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (33))){
var state_30795__$1 = state_30795;
var statearr_30820_30902 = state_30795__$1;
(statearr_30820_30902[(2)] = false);

(statearr_30820_30902[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (13))){
var inst_30669 = (state_30795[(22)]);
var inst_30673 = cljs.core.chunk_first.call(null,inst_30669);
var inst_30674 = cljs.core.chunk_rest.call(null,inst_30669);
var inst_30675 = cljs.core.count.call(null,inst_30673);
var inst_30656 = inst_30674;
var inst_30657 = inst_30673;
var inst_30658 = inst_30675;
var inst_30659 = (0);
var state_30795__$1 = (function (){var statearr_30821 = state_30795;
(statearr_30821[(7)] = inst_30659);

(statearr_30821[(8)] = inst_30658);

(statearr_30821[(9)] = inst_30657);

(statearr_30821[(10)] = inst_30656);

return statearr_30821;
})();
var statearr_30822_30903 = state_30795__$1;
(statearr_30822_30903[(2)] = null);

(statearr_30822_30903[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (22))){
var inst_30709 = (state_30795[(19)]);
var inst_30712 = (state_30795[(23)]);
var inst_30717 = (state_30795[(24)]);
var inst_30713 = (state_30795[(25)]);
var inst_30712__$1 = (state_30795[(2)]);
var inst_30713__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30712__$1);
var inst_30714 = (function (){var all_files = inst_30709;
var res_SINGLEQUOTE_ = inst_30712__$1;
var res = inst_30713__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30709,inst_30712,inst_30717,inst_30713,inst_30712__$1,inst_30713__$1,state_val_30796,c__23057__auto__,map__30641,map__30641__$1,opts,before_jsload,on_jsload,reload_dependents,map__30642,map__30642__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30392_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30392_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30709,inst_30712,inst_30717,inst_30713,inst_30712__$1,inst_30713__$1,state_val_30796,c__23057__auto__,map__30641,map__30641__$1,opts,before_jsload,on_jsload,reload_dependents,map__30642,map__30642__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30715 = cljs.core.filter.call(null,inst_30714,inst_30712__$1);
var inst_30716 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30717__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30716);
var inst_30718 = cljs.core.not_empty.call(null,inst_30717__$1);
var state_30795__$1 = (function (){var statearr_30823 = state_30795;
(statearr_30823[(23)] = inst_30712__$1);

(statearr_30823[(26)] = inst_30715);

(statearr_30823[(24)] = inst_30717__$1);

(statearr_30823[(25)] = inst_30713__$1);

return statearr_30823;
})();
if(cljs.core.truth_(inst_30718)){
var statearr_30824_30904 = state_30795__$1;
(statearr_30824_30904[(1)] = (23));

} else {
var statearr_30825_30905 = state_30795__$1;
(statearr_30825_30905[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (36))){
var state_30795__$1 = state_30795;
var statearr_30826_30906 = state_30795__$1;
(statearr_30826_30906[(2)] = false);

(statearr_30826_30906[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (41))){
var inst_30770 = (state_30795[(20)]);
var inst_30774 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30775 = cljs.core.map.call(null,inst_30774,inst_30770);
var inst_30776 = cljs.core.pr_str.call(null,inst_30775);
var inst_30777 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30776)].join('');
var inst_30778 = figwheel.client.utils.log.call(null,inst_30777);
var state_30795__$1 = state_30795;
var statearr_30827_30907 = state_30795__$1;
(statearr_30827_30907[(2)] = inst_30778);

(statearr_30827_30907[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (43))){
var inst_30771 = (state_30795[(21)]);
var inst_30781 = (state_30795[(2)]);
var inst_30782 = cljs.core.not_empty.call(null,inst_30771);
var state_30795__$1 = (function (){var statearr_30828 = state_30795;
(statearr_30828[(27)] = inst_30781);

return statearr_30828;
})();
if(cljs.core.truth_(inst_30782)){
var statearr_30829_30908 = state_30795__$1;
(statearr_30829_30908[(1)] = (44));

} else {
var statearr_30830_30909 = state_30795__$1;
(statearr_30830_30909[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (29))){
var inst_30709 = (state_30795[(19)]);
var inst_30712 = (state_30795[(23)]);
var inst_30715 = (state_30795[(26)]);
var inst_30717 = (state_30795[(24)]);
var inst_30713 = (state_30795[(25)]);
var inst_30749 = (state_30795[(16)]);
var inst_30745 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30748 = (function (){var all_files = inst_30709;
var res_SINGLEQUOTE_ = inst_30712;
var res = inst_30713;
var files_not_loaded = inst_30715;
var dependencies_that_loaded = inst_30717;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30709,inst_30712,inst_30715,inst_30717,inst_30713,inst_30749,inst_30745,state_val_30796,c__23057__auto__,map__30641,map__30641__$1,opts,before_jsload,on_jsload,reload_dependents,map__30642,map__30642__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30747){
var map__30831 = p__30747;
var map__30831__$1 = ((((!((map__30831 == null)))?((((map__30831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30831):map__30831);
var namespace = cljs.core.get.call(null,map__30831__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30709,inst_30712,inst_30715,inst_30717,inst_30713,inst_30749,inst_30745,state_val_30796,c__23057__auto__,map__30641,map__30641__$1,opts,before_jsload,on_jsload,reload_dependents,map__30642,map__30642__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30749__$1 = cljs.core.group_by.call(null,inst_30748,inst_30715);
var inst_30751 = (inst_30749__$1 == null);
var inst_30752 = cljs.core.not.call(null,inst_30751);
var state_30795__$1 = (function (){var statearr_30833 = state_30795;
(statearr_30833[(28)] = inst_30745);

(statearr_30833[(16)] = inst_30749__$1);

return statearr_30833;
})();
if(inst_30752){
var statearr_30834_30910 = state_30795__$1;
(statearr_30834_30910[(1)] = (32));

} else {
var statearr_30835_30911 = state_30795__$1;
(statearr_30835_30911[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (44))){
var inst_30771 = (state_30795[(21)]);
var inst_30784 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30771);
var inst_30785 = cljs.core.pr_str.call(null,inst_30784);
var inst_30786 = [cljs.core.str("not required: "),cljs.core.str(inst_30785)].join('');
var inst_30787 = figwheel.client.utils.log.call(null,inst_30786);
var state_30795__$1 = state_30795;
var statearr_30836_30912 = state_30795__$1;
(statearr_30836_30912[(2)] = inst_30787);

(statearr_30836_30912[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (6))){
var inst_30690 = (state_30795[(2)]);
var state_30795__$1 = state_30795;
var statearr_30837_30913 = state_30795__$1;
(statearr_30837_30913[(2)] = inst_30690);

(statearr_30837_30913[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (28))){
var inst_30715 = (state_30795[(26)]);
var inst_30742 = (state_30795[(2)]);
var inst_30743 = cljs.core.not_empty.call(null,inst_30715);
var state_30795__$1 = (function (){var statearr_30838 = state_30795;
(statearr_30838[(29)] = inst_30742);

return statearr_30838;
})();
if(cljs.core.truth_(inst_30743)){
var statearr_30839_30914 = state_30795__$1;
(statearr_30839_30914[(1)] = (29));

} else {
var statearr_30840_30915 = state_30795__$1;
(statearr_30840_30915[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (25))){
var inst_30713 = (state_30795[(25)]);
var inst_30729 = (state_30795[(2)]);
var inst_30730 = cljs.core.not_empty.call(null,inst_30713);
var state_30795__$1 = (function (){var statearr_30841 = state_30795;
(statearr_30841[(30)] = inst_30729);

return statearr_30841;
})();
if(cljs.core.truth_(inst_30730)){
var statearr_30842_30916 = state_30795__$1;
(statearr_30842_30916[(1)] = (26));

} else {
var statearr_30843_30917 = state_30795__$1;
(statearr_30843_30917[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (34))){
var inst_30764 = (state_30795[(2)]);
var state_30795__$1 = state_30795;
if(cljs.core.truth_(inst_30764)){
var statearr_30844_30918 = state_30795__$1;
(statearr_30844_30918[(1)] = (38));

} else {
var statearr_30845_30919 = state_30795__$1;
(statearr_30845_30919[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (17))){
var state_30795__$1 = state_30795;
var statearr_30846_30920 = state_30795__$1;
(statearr_30846_30920[(2)] = recompile_dependents);

(statearr_30846_30920[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (3))){
var state_30795__$1 = state_30795;
var statearr_30847_30921 = state_30795__$1;
(statearr_30847_30921[(2)] = null);

(statearr_30847_30921[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (12))){
var inst_30686 = (state_30795[(2)]);
var state_30795__$1 = state_30795;
var statearr_30848_30922 = state_30795__$1;
(statearr_30848_30922[(2)] = inst_30686);

(statearr_30848_30922[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (2))){
var inst_30648 = (state_30795[(13)]);
var inst_30655 = cljs.core.seq.call(null,inst_30648);
var inst_30656 = inst_30655;
var inst_30657 = null;
var inst_30658 = (0);
var inst_30659 = (0);
var state_30795__$1 = (function (){var statearr_30849 = state_30795;
(statearr_30849[(7)] = inst_30659);

(statearr_30849[(8)] = inst_30658);

(statearr_30849[(9)] = inst_30657);

(statearr_30849[(10)] = inst_30656);

return statearr_30849;
})();
var statearr_30850_30923 = state_30795__$1;
(statearr_30850_30923[(2)] = null);

(statearr_30850_30923[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (23))){
var inst_30709 = (state_30795[(19)]);
var inst_30712 = (state_30795[(23)]);
var inst_30715 = (state_30795[(26)]);
var inst_30717 = (state_30795[(24)]);
var inst_30713 = (state_30795[(25)]);
var inst_30720 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30722 = (function (){var all_files = inst_30709;
var res_SINGLEQUOTE_ = inst_30712;
var res = inst_30713;
var files_not_loaded = inst_30715;
var dependencies_that_loaded = inst_30717;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30709,inst_30712,inst_30715,inst_30717,inst_30713,inst_30720,state_val_30796,c__23057__auto__,map__30641,map__30641__$1,opts,before_jsload,on_jsload,reload_dependents,map__30642,map__30642__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30721){
var map__30851 = p__30721;
var map__30851__$1 = ((((!((map__30851 == null)))?((((map__30851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30851):map__30851);
var request_url = cljs.core.get.call(null,map__30851__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30709,inst_30712,inst_30715,inst_30717,inst_30713,inst_30720,state_val_30796,c__23057__auto__,map__30641,map__30641__$1,opts,before_jsload,on_jsload,reload_dependents,map__30642,map__30642__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30723 = cljs.core.reverse.call(null,inst_30717);
var inst_30724 = cljs.core.map.call(null,inst_30722,inst_30723);
var inst_30725 = cljs.core.pr_str.call(null,inst_30724);
var inst_30726 = figwheel.client.utils.log.call(null,inst_30725);
var state_30795__$1 = (function (){var statearr_30853 = state_30795;
(statearr_30853[(31)] = inst_30720);

return statearr_30853;
})();
var statearr_30854_30924 = state_30795__$1;
(statearr_30854_30924[(2)] = inst_30726);

(statearr_30854_30924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (35))){
var state_30795__$1 = state_30795;
var statearr_30855_30925 = state_30795__$1;
(statearr_30855_30925[(2)] = true);

(statearr_30855_30925[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (19))){
var inst_30699 = (state_30795[(12)]);
var inst_30705 = figwheel.client.file_reloading.expand_files.call(null,inst_30699);
var state_30795__$1 = state_30795;
var statearr_30856_30926 = state_30795__$1;
(statearr_30856_30926[(2)] = inst_30705);

(statearr_30856_30926[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (11))){
var state_30795__$1 = state_30795;
var statearr_30857_30927 = state_30795__$1;
(statearr_30857_30927[(2)] = null);

(statearr_30857_30927[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (9))){
var inst_30688 = (state_30795[(2)]);
var state_30795__$1 = state_30795;
var statearr_30858_30928 = state_30795__$1;
(statearr_30858_30928[(2)] = inst_30688);

(statearr_30858_30928[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (5))){
var inst_30659 = (state_30795[(7)]);
var inst_30658 = (state_30795[(8)]);
var inst_30661 = (inst_30659 < inst_30658);
var inst_30662 = inst_30661;
var state_30795__$1 = state_30795;
if(cljs.core.truth_(inst_30662)){
var statearr_30859_30929 = state_30795__$1;
(statearr_30859_30929[(1)] = (7));

} else {
var statearr_30860_30930 = state_30795__$1;
(statearr_30860_30930[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (14))){
var inst_30669 = (state_30795[(22)]);
var inst_30678 = cljs.core.first.call(null,inst_30669);
var inst_30679 = figwheel.client.file_reloading.eval_body.call(null,inst_30678,opts);
var inst_30680 = cljs.core.next.call(null,inst_30669);
var inst_30656 = inst_30680;
var inst_30657 = null;
var inst_30658 = (0);
var inst_30659 = (0);
var state_30795__$1 = (function (){var statearr_30861 = state_30795;
(statearr_30861[(7)] = inst_30659);

(statearr_30861[(8)] = inst_30658);

(statearr_30861[(9)] = inst_30657);

(statearr_30861[(32)] = inst_30679);

(statearr_30861[(10)] = inst_30656);

return statearr_30861;
})();
var statearr_30862_30931 = state_30795__$1;
(statearr_30862_30931[(2)] = null);

(statearr_30862_30931[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (45))){
var state_30795__$1 = state_30795;
var statearr_30863_30932 = state_30795__$1;
(statearr_30863_30932[(2)] = null);

(statearr_30863_30932[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (26))){
var inst_30709 = (state_30795[(19)]);
var inst_30712 = (state_30795[(23)]);
var inst_30715 = (state_30795[(26)]);
var inst_30717 = (state_30795[(24)]);
var inst_30713 = (state_30795[(25)]);
var inst_30732 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30734 = (function (){var all_files = inst_30709;
var res_SINGLEQUOTE_ = inst_30712;
var res = inst_30713;
var files_not_loaded = inst_30715;
var dependencies_that_loaded = inst_30717;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30709,inst_30712,inst_30715,inst_30717,inst_30713,inst_30732,state_val_30796,c__23057__auto__,map__30641,map__30641__$1,opts,before_jsload,on_jsload,reload_dependents,map__30642,map__30642__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30733){
var map__30864 = p__30733;
var map__30864__$1 = ((((!((map__30864 == null)))?((((map__30864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30864):map__30864);
var namespace = cljs.core.get.call(null,map__30864__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30864__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30709,inst_30712,inst_30715,inst_30717,inst_30713,inst_30732,state_val_30796,c__23057__auto__,map__30641,map__30641__$1,opts,before_jsload,on_jsload,reload_dependents,map__30642,map__30642__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30735 = cljs.core.map.call(null,inst_30734,inst_30713);
var inst_30736 = cljs.core.pr_str.call(null,inst_30735);
var inst_30737 = figwheel.client.utils.log.call(null,inst_30736);
var inst_30738 = (function (){var all_files = inst_30709;
var res_SINGLEQUOTE_ = inst_30712;
var res = inst_30713;
var files_not_loaded = inst_30715;
var dependencies_that_loaded = inst_30717;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30709,inst_30712,inst_30715,inst_30717,inst_30713,inst_30732,inst_30734,inst_30735,inst_30736,inst_30737,state_val_30796,c__23057__auto__,map__30641,map__30641__$1,opts,before_jsload,on_jsload,reload_dependents,map__30642,map__30642__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30709,inst_30712,inst_30715,inst_30717,inst_30713,inst_30732,inst_30734,inst_30735,inst_30736,inst_30737,state_val_30796,c__23057__auto__,map__30641,map__30641__$1,opts,before_jsload,on_jsload,reload_dependents,map__30642,map__30642__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30739 = setTimeout(inst_30738,(10));
var state_30795__$1 = (function (){var statearr_30866 = state_30795;
(statearr_30866[(33)] = inst_30737);

(statearr_30866[(34)] = inst_30732);

return statearr_30866;
})();
var statearr_30867_30933 = state_30795__$1;
(statearr_30867_30933[(2)] = inst_30739);

(statearr_30867_30933[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (16))){
var state_30795__$1 = state_30795;
var statearr_30868_30934 = state_30795__$1;
(statearr_30868_30934[(2)] = reload_dependents);

(statearr_30868_30934[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (38))){
var inst_30749 = (state_30795[(16)]);
var inst_30766 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30749);
var state_30795__$1 = state_30795;
var statearr_30869_30935 = state_30795__$1;
(statearr_30869_30935[(2)] = inst_30766);

(statearr_30869_30935[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (30))){
var state_30795__$1 = state_30795;
var statearr_30870_30936 = state_30795__$1;
(statearr_30870_30936[(2)] = null);

(statearr_30870_30936[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (10))){
var inst_30669 = (state_30795[(22)]);
var inst_30671 = cljs.core.chunked_seq_QMARK_.call(null,inst_30669);
var state_30795__$1 = state_30795;
if(inst_30671){
var statearr_30871_30937 = state_30795__$1;
(statearr_30871_30937[(1)] = (13));

} else {
var statearr_30872_30938 = state_30795__$1;
(statearr_30872_30938[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (18))){
var inst_30703 = (state_30795[(2)]);
var state_30795__$1 = state_30795;
if(cljs.core.truth_(inst_30703)){
var statearr_30873_30939 = state_30795__$1;
(statearr_30873_30939[(1)] = (19));

} else {
var statearr_30874_30940 = state_30795__$1;
(statearr_30874_30940[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (42))){
var state_30795__$1 = state_30795;
var statearr_30875_30941 = state_30795__$1;
(statearr_30875_30941[(2)] = null);

(statearr_30875_30941[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (37))){
var inst_30761 = (state_30795[(2)]);
var state_30795__$1 = state_30795;
var statearr_30876_30942 = state_30795__$1;
(statearr_30876_30942[(2)] = inst_30761);

(statearr_30876_30942[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30796 === (8))){
var inst_30669 = (state_30795[(22)]);
var inst_30656 = (state_30795[(10)]);
var inst_30669__$1 = cljs.core.seq.call(null,inst_30656);
var state_30795__$1 = (function (){var statearr_30877 = state_30795;
(statearr_30877[(22)] = inst_30669__$1);

return statearr_30877;
})();
if(inst_30669__$1){
var statearr_30878_30943 = state_30795__$1;
(statearr_30878_30943[(1)] = (10));

} else {
var statearr_30879_30944 = state_30795__$1;
(statearr_30879_30944[(1)] = (11));

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
});})(c__23057__auto__,map__30641,map__30641__$1,opts,before_jsload,on_jsload,reload_dependents,map__30642,map__30642__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22992__auto__,c__23057__auto__,map__30641,map__30641__$1,opts,before_jsload,on_jsload,reload_dependents,map__30642,map__30642__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22993__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22993__auto____0 = (function (){
var statearr_30883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30883[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22993__auto__);

(statearr_30883[(1)] = (1));

return statearr_30883;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22993__auto____1 = (function (state_30795){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_30795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e30884){if((e30884 instanceof Object)){
var ex__22996__auto__ = e30884;
var statearr_30885_30945 = state_30795;
(statearr_30885_30945[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30946 = state_30795;
state_30795 = G__30946;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22993__auto__ = function(state_30795){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22993__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22993__auto____1.call(this,state_30795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22993__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22993__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22993__auto__;
})()
;})(switch__22992__auto__,c__23057__auto__,map__30641,map__30641__$1,opts,before_jsload,on_jsload,reload_dependents,map__30642,map__30642__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23059__auto__ = (function (){var statearr_30886 = f__23058__auto__.call(null);
(statearr_30886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto__);

return statearr_30886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(c__23057__auto__,map__30641,map__30641__$1,opts,before_jsload,on_jsload,reload_dependents,map__30642,map__30642__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23057__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30949,link){
var map__30952 = p__30949;
var map__30952__$1 = ((((!((map__30952 == null)))?((((map__30952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30952):map__30952);
var file = cljs.core.get.call(null,map__30952__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__30952,map__30952__$1,file){
return (function (p1__30947_SHARP_,p2__30948_SHARP_){
if(cljs.core._EQ_.call(null,p1__30947_SHARP_,p2__30948_SHARP_)){
return p1__30947_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__30952,map__30952__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30958){
var map__30959 = p__30958;
var map__30959__$1 = ((((!((map__30959 == null)))?((((map__30959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30959):map__30959);
var match_length = cljs.core.get.call(null,map__30959__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30959__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30954_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30954_SHARP_);
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
var args30961 = [];
var len__17132__auto___30964 = arguments.length;
var i__17133__auto___30965 = (0);
while(true){
if((i__17133__auto___30965 < len__17132__auto___30964)){
args30961.push((arguments[i__17133__auto___30965]));

var G__30966 = (i__17133__auto___30965 + (1));
i__17133__auto___30965 = G__30966;
continue;
} else {
}
break;
}

var G__30963 = args30961.length;
switch (G__30963) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30961.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30968_SHARP_,p2__30969_SHARP_){
return cljs.core.assoc.call(null,p1__30968_SHARP_,cljs.core.get.call(null,p2__30969_SHARP_,key),p2__30969_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30970){
var map__30973 = p__30970;
var map__30973__$1 = ((((!((map__30973 == null)))?((((map__30973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30973):map__30973);
var f_data = map__30973__$1;
var file = cljs.core.get.call(null,map__30973__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30975,files_msg){
var map__30982 = p__30975;
var map__30982__$1 = ((((!((map__30982 == null)))?((((map__30982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30982):map__30982);
var opts = map__30982__$1;
var on_cssload = cljs.core.get.call(null,map__30982__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30984_30988 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30985_30989 = null;
var count__30986_30990 = (0);
var i__30987_30991 = (0);
while(true){
if((i__30987_30991 < count__30986_30990)){
var f_30992 = cljs.core._nth.call(null,chunk__30985_30989,i__30987_30991);
figwheel.client.file_reloading.reload_css_file.call(null,f_30992);

var G__30993 = seq__30984_30988;
var G__30994 = chunk__30985_30989;
var G__30995 = count__30986_30990;
var G__30996 = (i__30987_30991 + (1));
seq__30984_30988 = G__30993;
chunk__30985_30989 = G__30994;
count__30986_30990 = G__30995;
i__30987_30991 = G__30996;
continue;
} else {
var temp__4425__auto___30997 = cljs.core.seq.call(null,seq__30984_30988);
if(temp__4425__auto___30997){
var seq__30984_30998__$1 = temp__4425__auto___30997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30984_30998__$1)){
var c__16877__auto___30999 = cljs.core.chunk_first.call(null,seq__30984_30998__$1);
var G__31000 = cljs.core.chunk_rest.call(null,seq__30984_30998__$1);
var G__31001 = c__16877__auto___30999;
var G__31002 = cljs.core.count.call(null,c__16877__auto___30999);
var G__31003 = (0);
seq__30984_30988 = G__31000;
chunk__30985_30989 = G__31001;
count__30986_30990 = G__31002;
i__30987_30991 = G__31003;
continue;
} else {
var f_31004 = cljs.core.first.call(null,seq__30984_30998__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31004);

var G__31005 = cljs.core.next.call(null,seq__30984_30998__$1);
var G__31006 = null;
var G__31007 = (0);
var G__31008 = (0);
seq__30984_30988 = G__31005;
chunk__30985_30989 = G__31006;
count__30986_30990 = G__31007;
i__30987_30991 = G__31008;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30982,map__30982__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__30982,map__30982__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1447113463108