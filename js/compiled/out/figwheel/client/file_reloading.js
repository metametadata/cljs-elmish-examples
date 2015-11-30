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
var or__16113__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16113__auto__){
return or__16113__auto__;
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
var or__16113__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16113__auto__)){
return or__16113__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30137_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30137_SHARP_));
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
var seq__30142 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30143 = null;
var count__30144 = (0);
var i__30145 = (0);
while(true){
if((i__30145 < count__30144)){
var n = cljs.core._nth.call(null,chunk__30143,i__30145);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30146 = seq__30142;
var G__30147 = chunk__30143;
var G__30148 = count__30144;
var G__30149 = (i__30145 + (1));
seq__30142 = G__30146;
chunk__30143 = G__30147;
count__30144 = G__30148;
i__30145 = G__30149;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30142);
if(temp__4425__auto__){
var seq__30142__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30142__$1)){
var c__16916__auto__ = cljs.core.chunk_first.call(null,seq__30142__$1);
var G__30150 = cljs.core.chunk_rest.call(null,seq__30142__$1);
var G__30151 = c__16916__auto__;
var G__30152 = cljs.core.count.call(null,c__16916__auto__);
var G__30153 = (0);
seq__30142 = G__30150;
chunk__30143 = G__30151;
count__30144 = G__30152;
i__30145 = G__30153;
continue;
} else {
var n = cljs.core.first.call(null,seq__30142__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30154 = cljs.core.next.call(null,seq__30142__$1);
var G__30155 = null;
var G__30156 = (0);
var G__30157 = (0);
seq__30142 = G__30154;
chunk__30143 = G__30155;
count__30144 = G__30156;
i__30145 = G__30157;
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

var seq__30196_30203 = cljs.core.seq.call(null,deps);
var chunk__30197_30204 = null;
var count__30198_30205 = (0);
var i__30199_30206 = (0);
while(true){
if((i__30199_30206 < count__30198_30205)){
var dep_30207 = cljs.core._nth.call(null,chunk__30197_30204,i__30199_30206);
topo_sort_helper_STAR_.call(null,dep_30207,(depth + (1)),state);

var G__30208 = seq__30196_30203;
var G__30209 = chunk__30197_30204;
var G__30210 = count__30198_30205;
var G__30211 = (i__30199_30206 + (1));
seq__30196_30203 = G__30208;
chunk__30197_30204 = G__30209;
count__30198_30205 = G__30210;
i__30199_30206 = G__30211;
continue;
} else {
var temp__4425__auto___30212 = cljs.core.seq.call(null,seq__30196_30203);
if(temp__4425__auto___30212){
var seq__30196_30213__$1 = temp__4425__auto___30212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30196_30213__$1)){
var c__16916__auto___30214 = cljs.core.chunk_first.call(null,seq__30196_30213__$1);
var G__30215 = cljs.core.chunk_rest.call(null,seq__30196_30213__$1);
var G__30216 = c__16916__auto___30214;
var G__30217 = cljs.core.count.call(null,c__16916__auto___30214);
var G__30218 = (0);
seq__30196_30203 = G__30215;
chunk__30197_30204 = G__30216;
count__30198_30205 = G__30217;
i__30199_30206 = G__30218;
continue;
} else {
var dep_30219 = cljs.core.first.call(null,seq__30196_30213__$1);
topo_sort_helper_STAR_.call(null,dep_30219,(depth + (1)),state);

var G__30220 = cljs.core.next.call(null,seq__30196_30213__$1);
var G__30221 = null;
var G__30222 = (0);
var G__30223 = (0);
seq__30196_30203 = G__30220;
chunk__30197_30204 = G__30221;
count__30198_30205 = G__30222;
i__30199_30206 = G__30223;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30200){
var vec__30202 = p__30200;
var x = cljs.core.nth.call(null,vec__30202,(0),null);
var xs = cljs.core.nthnext.call(null,vec__30202,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30202,x,xs,get_deps__$1){
return (function (p1__30158_SHARP_){
return clojure.set.difference.call(null,p1__30158_SHARP_,x);
});})(vec__30202,x,xs,get_deps__$1))
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
var seq__30236 = cljs.core.seq.call(null,provides);
var chunk__30237 = null;
var count__30238 = (0);
var i__30239 = (0);
while(true){
if((i__30239 < count__30238)){
var prov = cljs.core._nth.call(null,chunk__30237,i__30239);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30240_30248 = cljs.core.seq.call(null,requires);
var chunk__30241_30249 = null;
var count__30242_30250 = (0);
var i__30243_30251 = (0);
while(true){
if((i__30243_30251 < count__30242_30250)){
var req_30252 = cljs.core._nth.call(null,chunk__30241_30249,i__30243_30251);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30252,prov);

var G__30253 = seq__30240_30248;
var G__30254 = chunk__30241_30249;
var G__30255 = count__30242_30250;
var G__30256 = (i__30243_30251 + (1));
seq__30240_30248 = G__30253;
chunk__30241_30249 = G__30254;
count__30242_30250 = G__30255;
i__30243_30251 = G__30256;
continue;
} else {
var temp__4425__auto___30257 = cljs.core.seq.call(null,seq__30240_30248);
if(temp__4425__auto___30257){
var seq__30240_30258__$1 = temp__4425__auto___30257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30240_30258__$1)){
var c__16916__auto___30259 = cljs.core.chunk_first.call(null,seq__30240_30258__$1);
var G__30260 = cljs.core.chunk_rest.call(null,seq__30240_30258__$1);
var G__30261 = c__16916__auto___30259;
var G__30262 = cljs.core.count.call(null,c__16916__auto___30259);
var G__30263 = (0);
seq__30240_30248 = G__30260;
chunk__30241_30249 = G__30261;
count__30242_30250 = G__30262;
i__30243_30251 = G__30263;
continue;
} else {
var req_30264 = cljs.core.first.call(null,seq__30240_30258__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30264,prov);

var G__30265 = cljs.core.next.call(null,seq__30240_30258__$1);
var G__30266 = null;
var G__30267 = (0);
var G__30268 = (0);
seq__30240_30248 = G__30265;
chunk__30241_30249 = G__30266;
count__30242_30250 = G__30267;
i__30243_30251 = G__30268;
continue;
}
} else {
}
}
break;
}

var G__30269 = seq__30236;
var G__30270 = chunk__30237;
var G__30271 = count__30238;
var G__30272 = (i__30239 + (1));
seq__30236 = G__30269;
chunk__30237 = G__30270;
count__30238 = G__30271;
i__30239 = G__30272;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30236);
if(temp__4425__auto__){
var seq__30236__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30236__$1)){
var c__16916__auto__ = cljs.core.chunk_first.call(null,seq__30236__$1);
var G__30273 = cljs.core.chunk_rest.call(null,seq__30236__$1);
var G__30274 = c__16916__auto__;
var G__30275 = cljs.core.count.call(null,c__16916__auto__);
var G__30276 = (0);
seq__30236 = G__30273;
chunk__30237 = G__30274;
count__30238 = G__30275;
i__30239 = G__30276;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30236__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30244_30277 = cljs.core.seq.call(null,requires);
var chunk__30245_30278 = null;
var count__30246_30279 = (0);
var i__30247_30280 = (0);
while(true){
if((i__30247_30280 < count__30246_30279)){
var req_30281 = cljs.core._nth.call(null,chunk__30245_30278,i__30247_30280);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30281,prov);

var G__30282 = seq__30244_30277;
var G__30283 = chunk__30245_30278;
var G__30284 = count__30246_30279;
var G__30285 = (i__30247_30280 + (1));
seq__30244_30277 = G__30282;
chunk__30245_30278 = G__30283;
count__30246_30279 = G__30284;
i__30247_30280 = G__30285;
continue;
} else {
var temp__4425__auto___30286__$1 = cljs.core.seq.call(null,seq__30244_30277);
if(temp__4425__auto___30286__$1){
var seq__30244_30287__$1 = temp__4425__auto___30286__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30244_30287__$1)){
var c__16916__auto___30288 = cljs.core.chunk_first.call(null,seq__30244_30287__$1);
var G__30289 = cljs.core.chunk_rest.call(null,seq__30244_30287__$1);
var G__30290 = c__16916__auto___30288;
var G__30291 = cljs.core.count.call(null,c__16916__auto___30288);
var G__30292 = (0);
seq__30244_30277 = G__30289;
chunk__30245_30278 = G__30290;
count__30246_30279 = G__30291;
i__30247_30280 = G__30292;
continue;
} else {
var req_30293 = cljs.core.first.call(null,seq__30244_30287__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30293,prov);

var G__30294 = cljs.core.next.call(null,seq__30244_30287__$1);
var G__30295 = null;
var G__30296 = (0);
var G__30297 = (0);
seq__30244_30277 = G__30294;
chunk__30245_30278 = G__30295;
count__30246_30279 = G__30296;
i__30247_30280 = G__30297;
continue;
}
} else {
}
}
break;
}

var G__30298 = cljs.core.next.call(null,seq__30236__$1);
var G__30299 = null;
var G__30300 = (0);
var G__30301 = (0);
seq__30236 = G__30298;
chunk__30237 = G__30299;
count__30238 = G__30300;
i__30239 = G__30301;
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
var seq__30306_30310 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30307_30311 = null;
var count__30308_30312 = (0);
var i__30309_30313 = (0);
while(true){
if((i__30309_30313 < count__30308_30312)){
var ns_30314 = cljs.core._nth.call(null,chunk__30307_30311,i__30309_30313);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30314);

var G__30315 = seq__30306_30310;
var G__30316 = chunk__30307_30311;
var G__30317 = count__30308_30312;
var G__30318 = (i__30309_30313 + (1));
seq__30306_30310 = G__30315;
chunk__30307_30311 = G__30316;
count__30308_30312 = G__30317;
i__30309_30313 = G__30318;
continue;
} else {
var temp__4425__auto___30319 = cljs.core.seq.call(null,seq__30306_30310);
if(temp__4425__auto___30319){
var seq__30306_30320__$1 = temp__4425__auto___30319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30306_30320__$1)){
var c__16916__auto___30321 = cljs.core.chunk_first.call(null,seq__30306_30320__$1);
var G__30322 = cljs.core.chunk_rest.call(null,seq__30306_30320__$1);
var G__30323 = c__16916__auto___30321;
var G__30324 = cljs.core.count.call(null,c__16916__auto___30321);
var G__30325 = (0);
seq__30306_30310 = G__30322;
chunk__30307_30311 = G__30323;
count__30308_30312 = G__30324;
i__30309_30313 = G__30325;
continue;
} else {
var ns_30326 = cljs.core.first.call(null,seq__30306_30320__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30326);

var G__30327 = cljs.core.next.call(null,seq__30306_30320__$1);
var G__30328 = null;
var G__30329 = (0);
var G__30330 = (0);
seq__30306_30310 = G__30327;
chunk__30307_30311 = G__30328;
count__30308_30312 = G__30329;
i__30309_30313 = G__30330;
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
goog.require_figwheel_backup_ = (function (){var or__16113__auto__ = goog.require__;
if(cljs.core.truth_(or__16113__auto__)){
return or__16113__auto__;
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
var G__30331__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30331 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30332__i = 0, G__30332__a = new Array(arguments.length -  0);
while (G__30332__i < G__30332__a.length) {G__30332__a[G__30332__i] = arguments[G__30332__i + 0]; ++G__30332__i;}
  args = new cljs.core.IndexedSeq(G__30332__a,0);
} 
return G__30331__delegate.call(this,args);};
G__30331.cljs$lang$maxFixedArity = 0;
G__30331.cljs$lang$applyTo = (function (arglist__30333){
var args = cljs.core.seq(arglist__30333);
return G__30331__delegate(args);
});
G__30331.cljs$core$IFn$_invoke$arity$variadic = G__30331__delegate;
return G__30331;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30335 = cljs.core._EQ_;
var expr__30336 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30335.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30336))){
var path_parts = ((function (pred__30335,expr__30336){
return (function (p1__30334_SHARP_){
return clojure.string.split.call(null,p1__30334_SHARP_,/[\/\\]/);
});})(pred__30335,expr__30336))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30335,expr__30336){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e30338){if((e30338 instanceof Error)){
var e = e30338;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30338;

}
}})());
});
;})(path_parts,sep,root,pred__30335,expr__30336))
} else {
if(cljs.core.truth_(pred__30335.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30336))){
return ((function (pred__30335,expr__30336){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__30335,expr__30336){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30335,expr__30336))
);

return deferred.addErrback(((function (deferred,pred__30335,expr__30336){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30335,expr__30336))
);
});
;})(pred__30335,expr__30336))
} else {
return ((function (pred__30335,expr__30336){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30335,expr__30336))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30339,callback){
var map__30342 = p__30339;
var map__30342__$1 = ((((!((map__30342 == null)))?((((map__30342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30342):map__30342);
var file_msg = map__30342__$1;
var request_url = cljs.core.get.call(null,map__30342__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30342,map__30342__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30342,map__30342__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__23143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto__){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto__){
return (function (state_30366){
var state_val_30367 = (state_30366[(1)]);
if((state_val_30367 === (7))){
var inst_30362 = (state_30366[(2)]);
var state_30366__$1 = state_30366;
var statearr_30368_30388 = state_30366__$1;
(statearr_30368_30388[(2)] = inst_30362);

(statearr_30368_30388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30367 === (1))){
var state_30366__$1 = state_30366;
var statearr_30369_30389 = state_30366__$1;
(statearr_30369_30389[(2)] = null);

(statearr_30369_30389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30367 === (4))){
var inst_30346 = (state_30366[(7)]);
var inst_30346__$1 = (state_30366[(2)]);
var state_30366__$1 = (function (){var statearr_30370 = state_30366;
(statearr_30370[(7)] = inst_30346__$1);

return statearr_30370;
})();
if(cljs.core.truth_(inst_30346__$1)){
var statearr_30371_30390 = state_30366__$1;
(statearr_30371_30390[(1)] = (5));

} else {
var statearr_30372_30391 = state_30366__$1;
(statearr_30372_30391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30367 === (6))){
var state_30366__$1 = state_30366;
var statearr_30373_30392 = state_30366__$1;
(statearr_30373_30392[(2)] = null);

(statearr_30373_30392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30367 === (3))){
var inst_30364 = (state_30366[(2)]);
var state_30366__$1 = state_30366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30366__$1,inst_30364);
} else {
if((state_val_30367 === (2))){
var state_30366__$1 = state_30366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30366__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30367 === (11))){
var inst_30358 = (state_30366[(2)]);
var state_30366__$1 = (function (){var statearr_30374 = state_30366;
(statearr_30374[(8)] = inst_30358);

return statearr_30374;
})();
var statearr_30375_30393 = state_30366__$1;
(statearr_30375_30393[(2)] = null);

(statearr_30375_30393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30367 === (9))){
var inst_30350 = (state_30366[(9)]);
var inst_30352 = (state_30366[(10)]);
var inst_30354 = inst_30352.call(null,inst_30350);
var state_30366__$1 = state_30366;
var statearr_30376_30394 = state_30366__$1;
(statearr_30376_30394[(2)] = inst_30354);

(statearr_30376_30394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30367 === (5))){
var inst_30346 = (state_30366[(7)]);
var inst_30348 = figwheel.client.file_reloading.blocking_load.call(null,inst_30346);
var state_30366__$1 = state_30366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30366__$1,(8),inst_30348);
} else {
if((state_val_30367 === (10))){
var inst_30350 = (state_30366[(9)]);
var inst_30356 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30350);
var state_30366__$1 = state_30366;
var statearr_30377_30395 = state_30366__$1;
(statearr_30377_30395[(2)] = inst_30356);

(statearr_30377_30395[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30367 === (8))){
var inst_30346 = (state_30366[(7)]);
var inst_30352 = (state_30366[(10)]);
var inst_30350 = (state_30366[(2)]);
var inst_30351 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30352__$1 = cljs.core.get.call(null,inst_30351,inst_30346);
var state_30366__$1 = (function (){var statearr_30378 = state_30366;
(statearr_30378[(9)] = inst_30350);

(statearr_30378[(10)] = inst_30352__$1);

return statearr_30378;
})();
if(cljs.core.truth_(inst_30352__$1)){
var statearr_30379_30396 = state_30366__$1;
(statearr_30379_30396[(1)] = (9));

} else {
var statearr_30380_30397 = state_30366__$1;
(statearr_30380_30397[(1)] = (10));

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
});})(c__23143__auto__))
;
return ((function (switch__23078__auto__,c__23143__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23079__auto__ = null;
var figwheel$client$file_reloading$state_machine__23079__auto____0 = (function (){
var statearr_30384 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30384[(0)] = figwheel$client$file_reloading$state_machine__23079__auto__);

(statearr_30384[(1)] = (1));

return statearr_30384;
});
var figwheel$client$file_reloading$state_machine__23079__auto____1 = (function (state_30366){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_30366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e30385){if((e30385 instanceof Object)){
var ex__23082__auto__ = e30385;
var statearr_30386_30398 = state_30366;
(statearr_30386_30398[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30399 = state_30366;
state_30366 = G__30399;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23079__auto__ = function(state_30366){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23079__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23079__auto____1.call(this,state_30366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23079__auto____0;
figwheel$client$file_reloading$state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23079__auto____1;
return figwheel$client$file_reloading$state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto__))
})();
var state__23145__auto__ = (function (){var statearr_30387 = f__23144__auto__.call(null);
(statearr_30387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto__);

return statearr_30387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto__))
);

return c__23143__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30400,callback){
var map__30403 = p__30400;
var map__30403__$1 = ((((!((map__30403 == null)))?((((map__30403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30403):map__30403);
var file_msg = map__30403__$1;
var namespace = cljs.core.get.call(null,map__30403__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30403,map__30403__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30403,map__30403__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30405){
var map__30408 = p__30405;
var map__30408__$1 = ((((!((map__30408 == null)))?((((map__30408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30408):map__30408);
var file_msg = map__30408__$1;
var namespace = cljs.core.get.call(null,map__30408__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16101__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16101__auto__){
var or__16113__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16113__auto__)){
return or__16113__auto__;
} else {
var or__16113__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16113__auto____$1)){
return or__16113__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16101__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30410,callback){
var map__30413 = p__30410;
var map__30413__$1 = ((((!((map__30413 == null)))?((((map__30413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30413):map__30413);
var file_msg = map__30413__$1;
var request_url = cljs.core.get.call(null,map__30413__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30413__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__23143__auto___30501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___30501,out){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto___30501,out){
return (function (state_30483){
var state_val_30484 = (state_30483[(1)]);
if((state_val_30484 === (1))){
var inst_30461 = cljs.core.nth.call(null,files,(0),null);
var inst_30462 = cljs.core.nthnext.call(null,files,(1));
var inst_30463 = files;
var state_30483__$1 = (function (){var statearr_30485 = state_30483;
(statearr_30485[(7)] = inst_30461);

(statearr_30485[(8)] = inst_30463);

(statearr_30485[(9)] = inst_30462);

return statearr_30485;
})();
var statearr_30486_30502 = state_30483__$1;
(statearr_30486_30502[(2)] = null);

(statearr_30486_30502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (2))){
var inst_30463 = (state_30483[(8)]);
var inst_30466 = (state_30483[(10)]);
var inst_30466__$1 = cljs.core.nth.call(null,inst_30463,(0),null);
var inst_30467 = cljs.core.nthnext.call(null,inst_30463,(1));
var inst_30468 = (inst_30466__$1 == null);
var inst_30469 = cljs.core.not.call(null,inst_30468);
var state_30483__$1 = (function (){var statearr_30487 = state_30483;
(statearr_30487[(11)] = inst_30467);

(statearr_30487[(10)] = inst_30466__$1);

return statearr_30487;
})();
if(inst_30469){
var statearr_30488_30503 = state_30483__$1;
(statearr_30488_30503[(1)] = (4));

} else {
var statearr_30489_30504 = state_30483__$1;
(statearr_30489_30504[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (3))){
var inst_30481 = (state_30483[(2)]);
var state_30483__$1 = state_30483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30483__$1,inst_30481);
} else {
if((state_val_30484 === (4))){
var inst_30466 = (state_30483[(10)]);
var inst_30471 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30466);
var state_30483__$1 = state_30483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30483__$1,(7),inst_30471);
} else {
if((state_val_30484 === (5))){
var inst_30477 = cljs.core.async.close_BANG_.call(null,out);
var state_30483__$1 = state_30483;
var statearr_30490_30505 = state_30483__$1;
(statearr_30490_30505[(2)] = inst_30477);

(statearr_30490_30505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (6))){
var inst_30479 = (state_30483[(2)]);
var state_30483__$1 = state_30483;
var statearr_30491_30506 = state_30483__$1;
(statearr_30491_30506[(2)] = inst_30479);

(statearr_30491_30506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30484 === (7))){
var inst_30467 = (state_30483[(11)]);
var inst_30473 = (state_30483[(2)]);
var inst_30474 = cljs.core.async.put_BANG_.call(null,out,inst_30473);
var inst_30463 = inst_30467;
var state_30483__$1 = (function (){var statearr_30492 = state_30483;
(statearr_30492[(12)] = inst_30474);

(statearr_30492[(8)] = inst_30463);

return statearr_30492;
})();
var statearr_30493_30507 = state_30483__$1;
(statearr_30493_30507[(2)] = null);

(statearr_30493_30507[(1)] = (2));


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
});})(c__23143__auto___30501,out))
;
return ((function (switch__23078__auto__,c__23143__auto___30501,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23079__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23079__auto____0 = (function (){
var statearr_30497 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30497[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23079__auto__);

(statearr_30497[(1)] = (1));

return statearr_30497;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23079__auto____1 = (function (state_30483){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_30483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e30498){if((e30498 instanceof Object)){
var ex__23082__auto__ = e30498;
var statearr_30499_30508 = state_30483;
(statearr_30499_30508[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30509 = state_30483;
state_30483 = G__30509;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23079__auto__ = function(state_30483){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23079__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23079__auto____1.call(this,state_30483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23079__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23079__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto___30501,out))
})();
var state__23145__auto__ = (function (){var statearr_30500 = f__23144__auto__.call(null);
(statearr_30500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto___30501);

return statearr_30500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___30501,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30510,opts){
var map__30514 = p__30510;
var map__30514__$1 = ((((!((map__30514 == null)))?((((map__30514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30514):map__30514);
var eval_body__$1 = cljs.core.get.call(null,map__30514__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30514__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16101__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16101__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16101__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30516){var e = e30516;
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
return (function (p1__30517_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30517_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__30522){
var vec__30523 = p__30522;
var k = cljs.core.nth.call(null,vec__30523,(0),null);
var v = cljs.core.nth.call(null,vec__30523,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30524){
var vec__30525 = p__30524;
var k = cljs.core.nth.call(null,vec__30525,(0),null);
var v = cljs.core.nth.call(null,vec__30525,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30529,p__30530){
var map__30777 = p__30529;
var map__30777__$1 = ((((!((map__30777 == null)))?((((map__30777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30777):map__30777);
var opts = map__30777__$1;
var before_jsload = cljs.core.get.call(null,map__30777__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30777__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30777__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30778 = p__30530;
var map__30778__$1 = ((((!((map__30778 == null)))?((((map__30778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30778):map__30778);
var msg = map__30778__$1;
var files = cljs.core.get.call(null,map__30778__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30778__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30778__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto__,map__30777,map__30777__$1,opts,before_jsload,on_jsload,reload_dependents,map__30778,map__30778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto__,map__30777,map__30777__$1,opts,before_jsload,on_jsload,reload_dependents,map__30778,map__30778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30931){
var state_val_30932 = (state_30931[(1)]);
if((state_val_30932 === (7))){
var inst_30794 = (state_30931[(7)]);
var inst_30795 = (state_30931[(8)]);
var inst_30792 = (state_30931[(9)]);
var inst_30793 = (state_30931[(10)]);
var inst_30800 = cljs.core._nth.call(null,inst_30793,inst_30795);
var inst_30801 = figwheel.client.file_reloading.eval_body.call(null,inst_30800,opts);
var inst_30802 = (inst_30795 + (1));
var tmp30933 = inst_30794;
var tmp30934 = inst_30792;
var tmp30935 = inst_30793;
var inst_30792__$1 = tmp30934;
var inst_30793__$1 = tmp30935;
var inst_30794__$1 = tmp30933;
var inst_30795__$1 = inst_30802;
var state_30931__$1 = (function (){var statearr_30936 = state_30931;
(statearr_30936[(7)] = inst_30794__$1);

(statearr_30936[(8)] = inst_30795__$1);

(statearr_30936[(9)] = inst_30792__$1);

(statearr_30936[(11)] = inst_30801);

(statearr_30936[(10)] = inst_30793__$1);

return statearr_30936;
})();
var statearr_30937_31023 = state_30931__$1;
(statearr_30937_31023[(2)] = null);

(statearr_30937_31023[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (20))){
var inst_30835 = (state_30931[(12)]);
var inst_30843 = figwheel.client.file_reloading.sort_files.call(null,inst_30835);
var state_30931__$1 = state_30931;
var statearr_30938_31024 = state_30931__$1;
(statearr_30938_31024[(2)] = inst_30843);

(statearr_30938_31024[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (27))){
var state_30931__$1 = state_30931;
var statearr_30939_31025 = state_30931__$1;
(statearr_30939_31025[(2)] = null);

(statearr_30939_31025[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (1))){
var inst_30784 = (state_30931[(13)]);
var inst_30781 = before_jsload.call(null,files);
var inst_30782 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30783 = (function (){return ((function (inst_30784,inst_30781,inst_30782,state_val_30932,c__23143__auto__,map__30777,map__30777__$1,opts,before_jsload,on_jsload,reload_dependents,map__30778,map__30778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30526_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30526_SHARP_);
});
;})(inst_30784,inst_30781,inst_30782,state_val_30932,c__23143__auto__,map__30777,map__30777__$1,opts,before_jsload,on_jsload,reload_dependents,map__30778,map__30778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30784__$1 = cljs.core.filter.call(null,inst_30783,files);
var inst_30785 = cljs.core.not_empty.call(null,inst_30784__$1);
var state_30931__$1 = (function (){var statearr_30940 = state_30931;
(statearr_30940[(14)] = inst_30781);

(statearr_30940[(15)] = inst_30782);

(statearr_30940[(13)] = inst_30784__$1);

return statearr_30940;
})();
if(cljs.core.truth_(inst_30785)){
var statearr_30941_31026 = state_30931__$1;
(statearr_30941_31026[(1)] = (2));

} else {
var statearr_30942_31027 = state_30931__$1;
(statearr_30942_31027[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (24))){
var state_30931__$1 = state_30931;
var statearr_30943_31028 = state_30931__$1;
(statearr_30943_31028[(2)] = null);

(statearr_30943_31028[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (39))){
var inst_30885 = (state_30931[(16)]);
var state_30931__$1 = state_30931;
var statearr_30944_31029 = state_30931__$1;
(statearr_30944_31029[(2)] = inst_30885);

(statearr_30944_31029[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (46))){
var inst_30926 = (state_30931[(2)]);
var state_30931__$1 = state_30931;
var statearr_30945_31030 = state_30931__$1;
(statearr_30945_31030[(2)] = inst_30926);

(statearr_30945_31030[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (4))){
var inst_30829 = (state_30931[(2)]);
var inst_30830 = cljs.core.List.EMPTY;
var inst_30831 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30830);
var inst_30832 = (function (){return ((function (inst_30829,inst_30830,inst_30831,state_val_30932,c__23143__auto__,map__30777,map__30777__$1,opts,before_jsload,on_jsload,reload_dependents,map__30778,map__30778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30527_SHARP_){
var and__16101__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30527_SHARP_);
if(cljs.core.truth_(and__16101__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30527_SHARP_));
} else {
return and__16101__auto__;
}
});
;})(inst_30829,inst_30830,inst_30831,state_val_30932,c__23143__auto__,map__30777,map__30777__$1,opts,before_jsload,on_jsload,reload_dependents,map__30778,map__30778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30833 = cljs.core.filter.call(null,inst_30832,files);
var inst_30834 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30835 = cljs.core.concat.call(null,inst_30833,inst_30834);
var state_30931__$1 = (function (){var statearr_30946 = state_30931;
(statearr_30946[(12)] = inst_30835);

(statearr_30946[(17)] = inst_30829);

(statearr_30946[(18)] = inst_30831);

return statearr_30946;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30947_31031 = state_30931__$1;
(statearr_30947_31031[(1)] = (16));

} else {
var statearr_30948_31032 = state_30931__$1;
(statearr_30948_31032[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (15))){
var inst_30819 = (state_30931[(2)]);
var state_30931__$1 = state_30931;
var statearr_30949_31033 = state_30931__$1;
(statearr_30949_31033[(2)] = inst_30819);

(statearr_30949_31033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (21))){
var inst_30845 = (state_30931[(19)]);
var inst_30845__$1 = (state_30931[(2)]);
var inst_30846 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30845__$1);
var state_30931__$1 = (function (){var statearr_30950 = state_30931;
(statearr_30950[(19)] = inst_30845__$1);

return statearr_30950;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30931__$1,(22),inst_30846);
} else {
if((state_val_30932 === (31))){
var inst_30929 = (state_30931[(2)]);
var state_30931__$1 = state_30931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30931__$1,inst_30929);
} else {
if((state_val_30932 === (32))){
var inst_30885 = (state_30931[(16)]);
var inst_30890 = inst_30885.cljs$lang$protocol_mask$partition0$;
var inst_30891 = (inst_30890 & (64));
var inst_30892 = inst_30885.cljs$core$ISeq$;
var inst_30893 = (inst_30891) || (inst_30892);
var state_30931__$1 = state_30931;
if(cljs.core.truth_(inst_30893)){
var statearr_30951_31034 = state_30931__$1;
(statearr_30951_31034[(1)] = (35));

} else {
var statearr_30952_31035 = state_30931__$1;
(statearr_30952_31035[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (40))){
var inst_30906 = (state_30931[(20)]);
var inst_30905 = (state_30931[(2)]);
var inst_30906__$1 = cljs.core.get.call(null,inst_30905,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30907 = cljs.core.get.call(null,inst_30905,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30908 = cljs.core.not_empty.call(null,inst_30906__$1);
var state_30931__$1 = (function (){var statearr_30953 = state_30931;
(statearr_30953[(21)] = inst_30907);

(statearr_30953[(20)] = inst_30906__$1);

return statearr_30953;
})();
if(cljs.core.truth_(inst_30908)){
var statearr_30954_31036 = state_30931__$1;
(statearr_30954_31036[(1)] = (41));

} else {
var statearr_30955_31037 = state_30931__$1;
(statearr_30955_31037[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (33))){
var state_30931__$1 = state_30931;
var statearr_30956_31038 = state_30931__$1;
(statearr_30956_31038[(2)] = false);

(statearr_30956_31038[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (13))){
var inst_30805 = (state_30931[(22)]);
var inst_30809 = cljs.core.chunk_first.call(null,inst_30805);
var inst_30810 = cljs.core.chunk_rest.call(null,inst_30805);
var inst_30811 = cljs.core.count.call(null,inst_30809);
var inst_30792 = inst_30810;
var inst_30793 = inst_30809;
var inst_30794 = inst_30811;
var inst_30795 = (0);
var state_30931__$1 = (function (){var statearr_30957 = state_30931;
(statearr_30957[(7)] = inst_30794);

(statearr_30957[(8)] = inst_30795);

(statearr_30957[(9)] = inst_30792);

(statearr_30957[(10)] = inst_30793);

return statearr_30957;
})();
var statearr_30958_31039 = state_30931__$1;
(statearr_30958_31039[(2)] = null);

(statearr_30958_31039[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (22))){
var inst_30849 = (state_30931[(23)]);
var inst_30848 = (state_30931[(24)]);
var inst_30845 = (state_30931[(19)]);
var inst_30853 = (state_30931[(25)]);
var inst_30848__$1 = (state_30931[(2)]);
var inst_30849__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30848__$1);
var inst_30850 = (function (){var all_files = inst_30845;
var res_SINGLEQUOTE_ = inst_30848__$1;
var res = inst_30849__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30849,inst_30848,inst_30845,inst_30853,inst_30848__$1,inst_30849__$1,state_val_30932,c__23143__auto__,map__30777,map__30777__$1,opts,before_jsload,on_jsload,reload_dependents,map__30778,map__30778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30528_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30528_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30849,inst_30848,inst_30845,inst_30853,inst_30848__$1,inst_30849__$1,state_val_30932,c__23143__auto__,map__30777,map__30777__$1,opts,before_jsload,on_jsload,reload_dependents,map__30778,map__30778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30851 = cljs.core.filter.call(null,inst_30850,inst_30848__$1);
var inst_30852 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30853__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30852);
var inst_30854 = cljs.core.not_empty.call(null,inst_30853__$1);
var state_30931__$1 = (function (){var statearr_30959 = state_30931;
(statearr_30959[(23)] = inst_30849__$1);

(statearr_30959[(24)] = inst_30848__$1);

(statearr_30959[(26)] = inst_30851);

(statearr_30959[(25)] = inst_30853__$1);

return statearr_30959;
})();
if(cljs.core.truth_(inst_30854)){
var statearr_30960_31040 = state_30931__$1;
(statearr_30960_31040[(1)] = (23));

} else {
var statearr_30961_31041 = state_30931__$1;
(statearr_30961_31041[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (36))){
var state_30931__$1 = state_30931;
var statearr_30962_31042 = state_30931__$1;
(statearr_30962_31042[(2)] = false);

(statearr_30962_31042[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (41))){
var inst_30906 = (state_30931[(20)]);
var inst_30910 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30911 = cljs.core.map.call(null,inst_30910,inst_30906);
var inst_30912 = cljs.core.pr_str.call(null,inst_30911);
var inst_30913 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30912)].join('');
var inst_30914 = figwheel.client.utils.log.call(null,inst_30913);
var state_30931__$1 = state_30931;
var statearr_30963_31043 = state_30931__$1;
(statearr_30963_31043[(2)] = inst_30914);

(statearr_30963_31043[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (43))){
var inst_30907 = (state_30931[(21)]);
var inst_30917 = (state_30931[(2)]);
var inst_30918 = cljs.core.not_empty.call(null,inst_30907);
var state_30931__$1 = (function (){var statearr_30964 = state_30931;
(statearr_30964[(27)] = inst_30917);

return statearr_30964;
})();
if(cljs.core.truth_(inst_30918)){
var statearr_30965_31044 = state_30931__$1;
(statearr_30965_31044[(1)] = (44));

} else {
var statearr_30966_31045 = state_30931__$1;
(statearr_30966_31045[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (29))){
var inst_30849 = (state_30931[(23)]);
var inst_30848 = (state_30931[(24)]);
var inst_30851 = (state_30931[(26)]);
var inst_30885 = (state_30931[(16)]);
var inst_30845 = (state_30931[(19)]);
var inst_30853 = (state_30931[(25)]);
var inst_30881 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30884 = (function (){var all_files = inst_30845;
var res_SINGLEQUOTE_ = inst_30848;
var res = inst_30849;
var files_not_loaded = inst_30851;
var dependencies_that_loaded = inst_30853;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30849,inst_30848,inst_30851,inst_30885,inst_30845,inst_30853,inst_30881,state_val_30932,c__23143__auto__,map__30777,map__30777__$1,opts,before_jsload,on_jsload,reload_dependents,map__30778,map__30778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30883){
var map__30967 = p__30883;
var map__30967__$1 = ((((!((map__30967 == null)))?((((map__30967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30967):map__30967);
var namespace = cljs.core.get.call(null,map__30967__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30849,inst_30848,inst_30851,inst_30885,inst_30845,inst_30853,inst_30881,state_val_30932,c__23143__auto__,map__30777,map__30777__$1,opts,before_jsload,on_jsload,reload_dependents,map__30778,map__30778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30885__$1 = cljs.core.group_by.call(null,inst_30884,inst_30851);
var inst_30887 = (inst_30885__$1 == null);
var inst_30888 = cljs.core.not.call(null,inst_30887);
var state_30931__$1 = (function (){var statearr_30969 = state_30931;
(statearr_30969[(28)] = inst_30881);

(statearr_30969[(16)] = inst_30885__$1);

return statearr_30969;
})();
if(inst_30888){
var statearr_30970_31046 = state_30931__$1;
(statearr_30970_31046[(1)] = (32));

} else {
var statearr_30971_31047 = state_30931__$1;
(statearr_30971_31047[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (44))){
var inst_30907 = (state_30931[(21)]);
var inst_30920 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30907);
var inst_30921 = cljs.core.pr_str.call(null,inst_30920);
var inst_30922 = [cljs.core.str("not required: "),cljs.core.str(inst_30921)].join('');
var inst_30923 = figwheel.client.utils.log.call(null,inst_30922);
var state_30931__$1 = state_30931;
var statearr_30972_31048 = state_30931__$1;
(statearr_30972_31048[(2)] = inst_30923);

(statearr_30972_31048[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (6))){
var inst_30826 = (state_30931[(2)]);
var state_30931__$1 = state_30931;
var statearr_30973_31049 = state_30931__$1;
(statearr_30973_31049[(2)] = inst_30826);

(statearr_30973_31049[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (28))){
var inst_30851 = (state_30931[(26)]);
var inst_30878 = (state_30931[(2)]);
var inst_30879 = cljs.core.not_empty.call(null,inst_30851);
var state_30931__$1 = (function (){var statearr_30974 = state_30931;
(statearr_30974[(29)] = inst_30878);

return statearr_30974;
})();
if(cljs.core.truth_(inst_30879)){
var statearr_30975_31050 = state_30931__$1;
(statearr_30975_31050[(1)] = (29));

} else {
var statearr_30976_31051 = state_30931__$1;
(statearr_30976_31051[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (25))){
var inst_30849 = (state_30931[(23)]);
var inst_30865 = (state_30931[(2)]);
var inst_30866 = cljs.core.not_empty.call(null,inst_30849);
var state_30931__$1 = (function (){var statearr_30977 = state_30931;
(statearr_30977[(30)] = inst_30865);

return statearr_30977;
})();
if(cljs.core.truth_(inst_30866)){
var statearr_30978_31052 = state_30931__$1;
(statearr_30978_31052[(1)] = (26));

} else {
var statearr_30979_31053 = state_30931__$1;
(statearr_30979_31053[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (34))){
var inst_30900 = (state_30931[(2)]);
var state_30931__$1 = state_30931;
if(cljs.core.truth_(inst_30900)){
var statearr_30980_31054 = state_30931__$1;
(statearr_30980_31054[(1)] = (38));

} else {
var statearr_30981_31055 = state_30931__$1;
(statearr_30981_31055[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (17))){
var state_30931__$1 = state_30931;
var statearr_30982_31056 = state_30931__$1;
(statearr_30982_31056[(2)] = recompile_dependents);

(statearr_30982_31056[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (3))){
var state_30931__$1 = state_30931;
var statearr_30983_31057 = state_30931__$1;
(statearr_30983_31057[(2)] = null);

(statearr_30983_31057[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (12))){
var inst_30822 = (state_30931[(2)]);
var state_30931__$1 = state_30931;
var statearr_30984_31058 = state_30931__$1;
(statearr_30984_31058[(2)] = inst_30822);

(statearr_30984_31058[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (2))){
var inst_30784 = (state_30931[(13)]);
var inst_30791 = cljs.core.seq.call(null,inst_30784);
var inst_30792 = inst_30791;
var inst_30793 = null;
var inst_30794 = (0);
var inst_30795 = (0);
var state_30931__$1 = (function (){var statearr_30985 = state_30931;
(statearr_30985[(7)] = inst_30794);

(statearr_30985[(8)] = inst_30795);

(statearr_30985[(9)] = inst_30792);

(statearr_30985[(10)] = inst_30793);

return statearr_30985;
})();
var statearr_30986_31059 = state_30931__$1;
(statearr_30986_31059[(2)] = null);

(statearr_30986_31059[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (23))){
var inst_30849 = (state_30931[(23)]);
var inst_30848 = (state_30931[(24)]);
var inst_30851 = (state_30931[(26)]);
var inst_30845 = (state_30931[(19)]);
var inst_30853 = (state_30931[(25)]);
var inst_30856 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30858 = (function (){var all_files = inst_30845;
var res_SINGLEQUOTE_ = inst_30848;
var res = inst_30849;
var files_not_loaded = inst_30851;
var dependencies_that_loaded = inst_30853;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30849,inst_30848,inst_30851,inst_30845,inst_30853,inst_30856,state_val_30932,c__23143__auto__,map__30777,map__30777__$1,opts,before_jsload,on_jsload,reload_dependents,map__30778,map__30778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30857){
var map__30987 = p__30857;
var map__30987__$1 = ((((!((map__30987 == null)))?((((map__30987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30987):map__30987);
var request_url = cljs.core.get.call(null,map__30987__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30849,inst_30848,inst_30851,inst_30845,inst_30853,inst_30856,state_val_30932,c__23143__auto__,map__30777,map__30777__$1,opts,before_jsload,on_jsload,reload_dependents,map__30778,map__30778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30859 = cljs.core.reverse.call(null,inst_30853);
var inst_30860 = cljs.core.map.call(null,inst_30858,inst_30859);
var inst_30861 = cljs.core.pr_str.call(null,inst_30860);
var inst_30862 = figwheel.client.utils.log.call(null,inst_30861);
var state_30931__$1 = (function (){var statearr_30989 = state_30931;
(statearr_30989[(31)] = inst_30856);

return statearr_30989;
})();
var statearr_30990_31060 = state_30931__$1;
(statearr_30990_31060[(2)] = inst_30862);

(statearr_30990_31060[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (35))){
var state_30931__$1 = state_30931;
var statearr_30991_31061 = state_30931__$1;
(statearr_30991_31061[(2)] = true);

(statearr_30991_31061[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (19))){
var inst_30835 = (state_30931[(12)]);
var inst_30841 = figwheel.client.file_reloading.expand_files.call(null,inst_30835);
var state_30931__$1 = state_30931;
var statearr_30992_31062 = state_30931__$1;
(statearr_30992_31062[(2)] = inst_30841);

(statearr_30992_31062[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (11))){
var state_30931__$1 = state_30931;
var statearr_30993_31063 = state_30931__$1;
(statearr_30993_31063[(2)] = null);

(statearr_30993_31063[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (9))){
var inst_30824 = (state_30931[(2)]);
var state_30931__$1 = state_30931;
var statearr_30994_31064 = state_30931__$1;
(statearr_30994_31064[(2)] = inst_30824);

(statearr_30994_31064[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (5))){
var inst_30794 = (state_30931[(7)]);
var inst_30795 = (state_30931[(8)]);
var inst_30797 = (inst_30795 < inst_30794);
var inst_30798 = inst_30797;
var state_30931__$1 = state_30931;
if(cljs.core.truth_(inst_30798)){
var statearr_30995_31065 = state_30931__$1;
(statearr_30995_31065[(1)] = (7));

} else {
var statearr_30996_31066 = state_30931__$1;
(statearr_30996_31066[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (14))){
var inst_30805 = (state_30931[(22)]);
var inst_30814 = cljs.core.first.call(null,inst_30805);
var inst_30815 = figwheel.client.file_reloading.eval_body.call(null,inst_30814,opts);
var inst_30816 = cljs.core.next.call(null,inst_30805);
var inst_30792 = inst_30816;
var inst_30793 = null;
var inst_30794 = (0);
var inst_30795 = (0);
var state_30931__$1 = (function (){var statearr_30997 = state_30931;
(statearr_30997[(7)] = inst_30794);

(statearr_30997[(32)] = inst_30815);

(statearr_30997[(8)] = inst_30795);

(statearr_30997[(9)] = inst_30792);

(statearr_30997[(10)] = inst_30793);

return statearr_30997;
})();
var statearr_30998_31067 = state_30931__$1;
(statearr_30998_31067[(2)] = null);

(statearr_30998_31067[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (45))){
var state_30931__$1 = state_30931;
var statearr_30999_31068 = state_30931__$1;
(statearr_30999_31068[(2)] = null);

(statearr_30999_31068[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (26))){
var inst_30849 = (state_30931[(23)]);
var inst_30848 = (state_30931[(24)]);
var inst_30851 = (state_30931[(26)]);
var inst_30845 = (state_30931[(19)]);
var inst_30853 = (state_30931[(25)]);
var inst_30868 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30870 = (function (){var all_files = inst_30845;
var res_SINGLEQUOTE_ = inst_30848;
var res = inst_30849;
var files_not_loaded = inst_30851;
var dependencies_that_loaded = inst_30853;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30849,inst_30848,inst_30851,inst_30845,inst_30853,inst_30868,state_val_30932,c__23143__auto__,map__30777,map__30777__$1,opts,before_jsload,on_jsload,reload_dependents,map__30778,map__30778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30869){
var map__31000 = p__30869;
var map__31000__$1 = ((((!((map__31000 == null)))?((((map__31000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31000):map__31000);
var namespace = cljs.core.get.call(null,map__31000__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31000__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30849,inst_30848,inst_30851,inst_30845,inst_30853,inst_30868,state_val_30932,c__23143__auto__,map__30777,map__30777__$1,opts,before_jsload,on_jsload,reload_dependents,map__30778,map__30778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30871 = cljs.core.map.call(null,inst_30870,inst_30849);
var inst_30872 = cljs.core.pr_str.call(null,inst_30871);
var inst_30873 = figwheel.client.utils.log.call(null,inst_30872);
var inst_30874 = (function (){var all_files = inst_30845;
var res_SINGLEQUOTE_ = inst_30848;
var res = inst_30849;
var files_not_loaded = inst_30851;
var dependencies_that_loaded = inst_30853;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30849,inst_30848,inst_30851,inst_30845,inst_30853,inst_30868,inst_30870,inst_30871,inst_30872,inst_30873,state_val_30932,c__23143__auto__,map__30777,map__30777__$1,opts,before_jsload,on_jsload,reload_dependents,map__30778,map__30778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30849,inst_30848,inst_30851,inst_30845,inst_30853,inst_30868,inst_30870,inst_30871,inst_30872,inst_30873,state_val_30932,c__23143__auto__,map__30777,map__30777__$1,opts,before_jsload,on_jsload,reload_dependents,map__30778,map__30778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30875 = setTimeout(inst_30874,(10));
var state_30931__$1 = (function (){var statearr_31002 = state_30931;
(statearr_31002[(33)] = inst_30873);

(statearr_31002[(34)] = inst_30868);

return statearr_31002;
})();
var statearr_31003_31069 = state_30931__$1;
(statearr_31003_31069[(2)] = inst_30875);

(statearr_31003_31069[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (16))){
var state_30931__$1 = state_30931;
var statearr_31004_31070 = state_30931__$1;
(statearr_31004_31070[(2)] = reload_dependents);

(statearr_31004_31070[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (38))){
var inst_30885 = (state_30931[(16)]);
var inst_30902 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30885);
var state_30931__$1 = state_30931;
var statearr_31005_31071 = state_30931__$1;
(statearr_31005_31071[(2)] = inst_30902);

(statearr_31005_31071[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (30))){
var state_30931__$1 = state_30931;
var statearr_31006_31072 = state_30931__$1;
(statearr_31006_31072[(2)] = null);

(statearr_31006_31072[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (10))){
var inst_30805 = (state_30931[(22)]);
var inst_30807 = cljs.core.chunked_seq_QMARK_.call(null,inst_30805);
var state_30931__$1 = state_30931;
if(inst_30807){
var statearr_31007_31073 = state_30931__$1;
(statearr_31007_31073[(1)] = (13));

} else {
var statearr_31008_31074 = state_30931__$1;
(statearr_31008_31074[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (18))){
var inst_30839 = (state_30931[(2)]);
var state_30931__$1 = state_30931;
if(cljs.core.truth_(inst_30839)){
var statearr_31009_31075 = state_30931__$1;
(statearr_31009_31075[(1)] = (19));

} else {
var statearr_31010_31076 = state_30931__$1;
(statearr_31010_31076[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (42))){
var state_30931__$1 = state_30931;
var statearr_31011_31077 = state_30931__$1;
(statearr_31011_31077[(2)] = null);

(statearr_31011_31077[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (37))){
var inst_30897 = (state_30931[(2)]);
var state_30931__$1 = state_30931;
var statearr_31012_31078 = state_30931__$1;
(statearr_31012_31078[(2)] = inst_30897);

(statearr_31012_31078[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30932 === (8))){
var inst_30792 = (state_30931[(9)]);
var inst_30805 = (state_30931[(22)]);
var inst_30805__$1 = cljs.core.seq.call(null,inst_30792);
var state_30931__$1 = (function (){var statearr_31013 = state_30931;
(statearr_31013[(22)] = inst_30805__$1);

return statearr_31013;
})();
if(inst_30805__$1){
var statearr_31014_31079 = state_30931__$1;
(statearr_31014_31079[(1)] = (10));

} else {
var statearr_31015_31080 = state_30931__$1;
(statearr_31015_31080[(1)] = (11));

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
});})(c__23143__auto__,map__30777,map__30777__$1,opts,before_jsload,on_jsload,reload_dependents,map__30778,map__30778__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23078__auto__,c__23143__auto__,map__30777,map__30777__$1,opts,before_jsload,on_jsload,reload_dependents,map__30778,map__30778__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23079__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23079__auto____0 = (function (){
var statearr_31019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31019[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23079__auto__);

(statearr_31019[(1)] = (1));

return statearr_31019;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23079__auto____1 = (function (state_30931){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_30931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e31020){if((e31020 instanceof Object)){
var ex__23082__auto__ = e31020;
var statearr_31021_31081 = state_30931;
(statearr_31021_31081[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31082 = state_30931;
state_30931 = G__31082;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23079__auto__ = function(state_30931){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23079__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23079__auto____1.call(this,state_30931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23079__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23079__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto__,map__30777,map__30777__$1,opts,before_jsload,on_jsload,reload_dependents,map__30778,map__30778__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23145__auto__ = (function (){var statearr_31022 = f__23144__auto__.call(null);
(statearr_31022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto__);

return statearr_31022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto__,map__30777,map__30777__$1,opts,before_jsload,on_jsload,reload_dependents,map__30778,map__30778__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23143__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31085,link){
var map__31088 = p__31085;
var map__31088__$1 = ((((!((map__31088 == null)))?((((map__31088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31088):map__31088);
var file = cljs.core.get.call(null,map__31088__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__31088,map__31088__$1,file){
return (function (p1__31083_SHARP_,p2__31084_SHARP_){
if(cljs.core._EQ_.call(null,p1__31083_SHARP_,p2__31084_SHARP_)){
return p1__31083_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__31088,map__31088__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31094){
var map__31095 = p__31094;
var map__31095__$1 = ((((!((map__31095 == null)))?((((map__31095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31095):map__31095);
var match_length = cljs.core.get.call(null,map__31095__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31095__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31090_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31090_SHARP_);
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
var args31097 = [];
var len__17171__auto___31100 = arguments.length;
var i__17172__auto___31101 = (0);
while(true){
if((i__17172__auto___31101 < len__17171__auto___31100)){
args31097.push((arguments[i__17172__auto___31101]));

var G__31102 = (i__17172__auto___31101 + (1));
i__17172__auto___31101 = G__31102;
continue;
} else {
}
break;
}

var G__31099 = args31097.length;
switch (G__31099) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31097.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31104_SHARP_,p2__31105_SHARP_){
return cljs.core.assoc.call(null,p1__31104_SHARP_,cljs.core.get.call(null,p2__31105_SHARP_,key),p2__31105_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31106){
var map__31109 = p__31106;
var map__31109__$1 = ((((!((map__31109 == null)))?((((map__31109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31109):map__31109);
var f_data = map__31109__$1;
var file = cljs.core.get.call(null,map__31109__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31111,files_msg){
var map__31118 = p__31111;
var map__31118__$1 = ((((!((map__31118 == null)))?((((map__31118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31118):map__31118);
var opts = map__31118__$1;
var on_cssload = cljs.core.get.call(null,map__31118__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31120_31124 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31121_31125 = null;
var count__31122_31126 = (0);
var i__31123_31127 = (0);
while(true){
if((i__31123_31127 < count__31122_31126)){
var f_31128 = cljs.core._nth.call(null,chunk__31121_31125,i__31123_31127);
figwheel.client.file_reloading.reload_css_file.call(null,f_31128);

var G__31129 = seq__31120_31124;
var G__31130 = chunk__31121_31125;
var G__31131 = count__31122_31126;
var G__31132 = (i__31123_31127 + (1));
seq__31120_31124 = G__31129;
chunk__31121_31125 = G__31130;
count__31122_31126 = G__31131;
i__31123_31127 = G__31132;
continue;
} else {
var temp__4425__auto___31133 = cljs.core.seq.call(null,seq__31120_31124);
if(temp__4425__auto___31133){
var seq__31120_31134__$1 = temp__4425__auto___31133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31120_31134__$1)){
var c__16916__auto___31135 = cljs.core.chunk_first.call(null,seq__31120_31134__$1);
var G__31136 = cljs.core.chunk_rest.call(null,seq__31120_31134__$1);
var G__31137 = c__16916__auto___31135;
var G__31138 = cljs.core.count.call(null,c__16916__auto___31135);
var G__31139 = (0);
seq__31120_31124 = G__31136;
chunk__31121_31125 = G__31137;
count__31122_31126 = G__31138;
i__31123_31127 = G__31139;
continue;
} else {
var f_31140 = cljs.core.first.call(null,seq__31120_31134__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31140);

var G__31141 = cljs.core.next.call(null,seq__31120_31134__$1);
var G__31142 = null;
var G__31143 = (0);
var G__31144 = (0);
seq__31120_31124 = G__31141;
chunk__31121_31125 = G__31142;
count__31122_31126 = G__31143;
i__31123_31127 = G__31144;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31118,map__31118__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__31118,map__31118__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1448902878164