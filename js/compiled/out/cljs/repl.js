// Compiled by ClojureScript 1.7.170 {}
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
var seq__28572_28586 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28573_28587 = null;
var count__28574_28588 = (0);
var i__28575_28589 = (0);
while(true){
if((i__28575_28589 < count__28574_28588)){
var f_28590 = cljs.core._nth.call(null,chunk__28573_28587,i__28575_28589);
cljs.core.println.call(null,"  ",f_28590);

var G__28591 = seq__28572_28586;
var G__28592 = chunk__28573_28587;
var G__28593 = count__28574_28588;
var G__28594 = (i__28575_28589 + (1));
seq__28572_28586 = G__28591;
chunk__28573_28587 = G__28592;
count__28574_28588 = G__28593;
i__28575_28589 = G__28594;
continue;
} else {
var temp__4425__auto___28595 = cljs.core.seq.call(null,seq__28572_28586);
if(temp__4425__auto___28595){
var seq__28572_28596__$1 = temp__4425__auto___28595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28572_28596__$1)){
var c__17554__auto___28597 = cljs.core.chunk_first.call(null,seq__28572_28596__$1);
var G__28598 = cljs.core.chunk_rest.call(null,seq__28572_28596__$1);
var G__28599 = c__17554__auto___28597;
var G__28600 = cljs.core.count.call(null,c__17554__auto___28597);
var G__28601 = (0);
seq__28572_28586 = G__28598;
chunk__28573_28587 = G__28599;
count__28574_28588 = G__28600;
i__28575_28589 = G__28601;
continue;
} else {
var f_28602 = cljs.core.first.call(null,seq__28572_28596__$1);
cljs.core.println.call(null,"  ",f_28602);

var G__28603 = cljs.core.next.call(null,seq__28572_28596__$1);
var G__28604 = null;
var G__28605 = (0);
var G__28606 = (0);
seq__28572_28586 = G__28603;
chunk__28573_28587 = G__28604;
count__28574_28588 = G__28605;
i__28575_28589 = G__28606;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28607 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16751__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28607);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28607)))?cljs.core.second.call(null,arglists_28607):arglists_28607));
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
var seq__28576 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28577 = null;
var count__28578 = (0);
var i__28579 = (0);
while(true){
if((i__28579 < count__28578)){
var vec__28580 = cljs.core._nth.call(null,chunk__28577,i__28579);
var name = cljs.core.nth.call(null,vec__28580,(0),null);
var map__28581 = cljs.core.nth.call(null,vec__28580,(1),null);
var map__28581__$1 = ((((!((map__28581 == null)))?((((map__28581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28581):map__28581);
var doc = cljs.core.get.call(null,map__28581__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28581__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28608 = seq__28576;
var G__28609 = chunk__28577;
var G__28610 = count__28578;
var G__28611 = (i__28579 + (1));
seq__28576 = G__28608;
chunk__28577 = G__28609;
count__28578 = G__28610;
i__28579 = G__28611;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28576);
if(temp__4425__auto__){
var seq__28576__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28576__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__28576__$1);
var G__28612 = cljs.core.chunk_rest.call(null,seq__28576__$1);
var G__28613 = c__17554__auto__;
var G__28614 = cljs.core.count.call(null,c__17554__auto__);
var G__28615 = (0);
seq__28576 = G__28612;
chunk__28577 = G__28613;
count__28578 = G__28614;
i__28579 = G__28615;
continue;
} else {
var vec__28583 = cljs.core.first.call(null,seq__28576__$1);
var name = cljs.core.nth.call(null,vec__28583,(0),null);
var map__28584 = cljs.core.nth.call(null,vec__28583,(1),null);
var map__28584__$1 = ((((!((map__28584 == null)))?((((map__28584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28584):map__28584);
var doc = cljs.core.get.call(null,map__28584__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28584__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28616 = cljs.core.next.call(null,seq__28576__$1);
var G__28617 = null;
var G__28618 = (0);
var G__28619 = (0);
seq__28576 = G__28616;
chunk__28577 = G__28617;
count__28578 = G__28618;
i__28579 = G__28619;
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

//# sourceMappingURL=repl.js.map?rel=1449083089141