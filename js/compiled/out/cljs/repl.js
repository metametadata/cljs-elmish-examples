// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29949_29963 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29950_29964 = null;
var count__29951_29965 = (0);
var i__29952_29966 = (0);
while(true){
if((i__29952_29966 < count__29951_29965)){
var f_29967 = cljs.core._nth.call(null,chunk__29950_29964,i__29952_29966);
cljs.core.println.call(null,"  ",f_29967);

var G__29968 = seq__29949_29963;
var G__29969 = chunk__29950_29964;
var G__29970 = count__29951_29965;
var G__29971 = (i__29952_29966 + (1));
seq__29949_29963 = G__29968;
chunk__29950_29964 = G__29969;
count__29951_29965 = G__29970;
i__29952_29966 = G__29971;
continue;
} else {
var temp__4425__auto___29972 = cljs.core.seq.call(null,seq__29949_29963);
if(temp__4425__auto___29972){
var seq__29949_29973__$1 = temp__4425__auto___29972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29949_29973__$1)){
var c__16877__auto___29974 = cljs.core.chunk_first.call(null,seq__29949_29973__$1);
var G__29975 = cljs.core.chunk_rest.call(null,seq__29949_29973__$1);
var G__29976 = c__16877__auto___29974;
var G__29977 = cljs.core.count.call(null,c__16877__auto___29974);
var G__29978 = (0);
seq__29949_29963 = G__29975;
chunk__29950_29964 = G__29976;
count__29951_29965 = G__29977;
i__29952_29966 = G__29978;
continue;
} else {
var f_29979 = cljs.core.first.call(null,seq__29949_29973__$1);
cljs.core.println.call(null,"  ",f_29979);

var G__29980 = cljs.core.next.call(null,seq__29949_29973__$1);
var G__29981 = null;
var G__29982 = (0);
var G__29983 = (0);
seq__29949_29963 = G__29980;
chunk__29950_29964 = G__29981;
count__29951_29965 = G__29982;
i__29952_29966 = G__29983;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29984 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16074__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16074__auto__)){
return or__16074__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29984);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29984)))?cljs.core.second.call(null,arglists_29984):arglists_29984));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29953 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29954 = null;
var count__29955 = (0);
var i__29956 = (0);
while(true){
if((i__29956 < count__29955)){
var vec__29957 = cljs.core._nth.call(null,chunk__29954,i__29956);
var name = cljs.core.nth.call(null,vec__29957,(0),null);
var map__29958 = cljs.core.nth.call(null,vec__29957,(1),null);
var map__29958__$1 = ((((!((map__29958 == null)))?((((map__29958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29958):map__29958);
var doc = cljs.core.get.call(null,map__29958__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29958__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29985 = seq__29953;
var G__29986 = chunk__29954;
var G__29987 = count__29955;
var G__29988 = (i__29956 + (1));
seq__29953 = G__29985;
chunk__29954 = G__29986;
count__29955 = G__29987;
i__29956 = G__29988;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29953);
if(temp__4425__auto__){
var seq__29953__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29953__$1)){
var c__16877__auto__ = cljs.core.chunk_first.call(null,seq__29953__$1);
var G__29989 = cljs.core.chunk_rest.call(null,seq__29953__$1);
var G__29990 = c__16877__auto__;
var G__29991 = cljs.core.count.call(null,c__16877__auto__);
var G__29992 = (0);
seq__29953 = G__29989;
chunk__29954 = G__29990;
count__29955 = G__29991;
i__29956 = G__29992;
continue;
} else {
var vec__29960 = cljs.core.first.call(null,seq__29953__$1);
var name = cljs.core.nth.call(null,vec__29960,(0),null);
var map__29961 = cljs.core.nth.call(null,vec__29960,(1),null);
var map__29961__$1 = ((((!((map__29961 == null)))?((((map__29961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29961):map__29961);
var doc = cljs.core.get.call(null,map__29961__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29961__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29993 = cljs.core.next.call(null,seq__29953__$1);
var G__29994 = null;
var G__29995 = (0);
var G__29996 = (0);
seq__29953 = G__29993;
chunk__29954 = G__29994;
count__29955 = G__29995;
i__29956 = G__29996;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1447113462568