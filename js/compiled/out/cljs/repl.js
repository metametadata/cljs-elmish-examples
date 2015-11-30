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
var seq__30085_30099 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30086_30100 = null;
var count__30087_30101 = (0);
var i__30088_30102 = (0);
while(true){
if((i__30088_30102 < count__30087_30101)){
var f_30103 = cljs.core._nth.call(null,chunk__30086_30100,i__30088_30102);
cljs.core.println.call(null,"  ",f_30103);

var G__30104 = seq__30085_30099;
var G__30105 = chunk__30086_30100;
var G__30106 = count__30087_30101;
var G__30107 = (i__30088_30102 + (1));
seq__30085_30099 = G__30104;
chunk__30086_30100 = G__30105;
count__30087_30101 = G__30106;
i__30088_30102 = G__30107;
continue;
} else {
var temp__4425__auto___30108 = cljs.core.seq.call(null,seq__30085_30099);
if(temp__4425__auto___30108){
var seq__30085_30109__$1 = temp__4425__auto___30108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30085_30109__$1)){
var c__16916__auto___30110 = cljs.core.chunk_first.call(null,seq__30085_30109__$1);
var G__30111 = cljs.core.chunk_rest.call(null,seq__30085_30109__$1);
var G__30112 = c__16916__auto___30110;
var G__30113 = cljs.core.count.call(null,c__16916__auto___30110);
var G__30114 = (0);
seq__30085_30099 = G__30111;
chunk__30086_30100 = G__30112;
count__30087_30101 = G__30113;
i__30088_30102 = G__30114;
continue;
} else {
var f_30115 = cljs.core.first.call(null,seq__30085_30109__$1);
cljs.core.println.call(null,"  ",f_30115);

var G__30116 = cljs.core.next.call(null,seq__30085_30109__$1);
var G__30117 = null;
var G__30118 = (0);
var G__30119 = (0);
seq__30085_30099 = G__30116;
chunk__30086_30100 = G__30117;
count__30087_30101 = G__30118;
i__30088_30102 = G__30119;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30120 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16113__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16113__auto__)){
return or__16113__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30120);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30120)))?cljs.core.second.call(null,arglists_30120):arglists_30120));
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
var seq__30089 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30090 = null;
var count__30091 = (0);
var i__30092 = (0);
while(true){
if((i__30092 < count__30091)){
var vec__30093 = cljs.core._nth.call(null,chunk__30090,i__30092);
var name = cljs.core.nth.call(null,vec__30093,(0),null);
var map__30094 = cljs.core.nth.call(null,vec__30093,(1),null);
var map__30094__$1 = ((((!((map__30094 == null)))?((((map__30094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30094):map__30094);
var doc = cljs.core.get.call(null,map__30094__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30094__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30121 = seq__30089;
var G__30122 = chunk__30090;
var G__30123 = count__30091;
var G__30124 = (i__30092 + (1));
seq__30089 = G__30121;
chunk__30090 = G__30122;
count__30091 = G__30123;
i__30092 = G__30124;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30089);
if(temp__4425__auto__){
var seq__30089__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30089__$1)){
var c__16916__auto__ = cljs.core.chunk_first.call(null,seq__30089__$1);
var G__30125 = cljs.core.chunk_rest.call(null,seq__30089__$1);
var G__30126 = c__16916__auto__;
var G__30127 = cljs.core.count.call(null,c__16916__auto__);
var G__30128 = (0);
seq__30089 = G__30125;
chunk__30090 = G__30126;
count__30091 = G__30127;
i__30092 = G__30128;
continue;
} else {
var vec__30096 = cljs.core.first.call(null,seq__30089__$1);
var name = cljs.core.nth.call(null,vec__30096,(0),null);
var map__30097 = cljs.core.nth.call(null,vec__30096,(1),null);
var map__30097__$1 = ((((!((map__30097 == null)))?((((map__30097.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30097.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30097):map__30097);
var doc = cljs.core.get.call(null,map__30097__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30097__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30129 = cljs.core.next.call(null,seq__30089__$1);
var G__30130 = null;
var G__30131 = (0);
var G__30132 = (0);
seq__30089 = G__30129;
chunk__30090 = G__30130;
count__30091 = G__30131;
i__30092 = G__30132;
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

//# sourceMappingURL=repl.js.map?rel=1448902877605