// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17178__auto__ = [];
var len__17171__auto___29837 = arguments.length;
var i__17172__auto___29838 = (0);
while(true){
if((i__17172__auto___29838 < len__17171__auto___29837)){
args__17178__auto__.push((arguments[i__17172__auto___29838]));

var G__29839 = (i__17172__auto___29838 + (1));
i__17172__auto___29838 = G__29839;
continue;
} else {
}
break;
}

var argseq__17179__auto__ = ((((2) < args__17178__auto__.length))?(new cljs.core.IndexedSeq(args__17178__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17179__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__29829_29840 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__29830_29841 = null;
var count__29831_29842 = (0);
var i__29832_29843 = (0);
while(true){
if((i__29832_29843 < count__29831_29842)){
var k_29844 = cljs.core._nth.call(null,chunk__29830_29841,i__29832_29843);
e.setAttribute(cljs.core.name.call(null,k_29844),cljs.core.get.call(null,attrs,k_29844));

var G__29845 = seq__29829_29840;
var G__29846 = chunk__29830_29841;
var G__29847 = count__29831_29842;
var G__29848 = (i__29832_29843 + (1));
seq__29829_29840 = G__29845;
chunk__29830_29841 = G__29846;
count__29831_29842 = G__29847;
i__29832_29843 = G__29848;
continue;
} else {
var temp__4425__auto___29849 = cljs.core.seq.call(null,seq__29829_29840);
if(temp__4425__auto___29849){
var seq__29829_29850__$1 = temp__4425__auto___29849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29829_29850__$1)){
var c__16916__auto___29851 = cljs.core.chunk_first.call(null,seq__29829_29850__$1);
var G__29852 = cljs.core.chunk_rest.call(null,seq__29829_29850__$1);
var G__29853 = c__16916__auto___29851;
var G__29854 = cljs.core.count.call(null,c__16916__auto___29851);
var G__29855 = (0);
seq__29829_29840 = G__29852;
chunk__29830_29841 = G__29853;
count__29831_29842 = G__29854;
i__29832_29843 = G__29855;
continue;
} else {
var k_29856 = cljs.core.first.call(null,seq__29829_29850__$1);
e.setAttribute(cljs.core.name.call(null,k_29856),cljs.core.get.call(null,attrs,k_29856));

var G__29857 = cljs.core.next.call(null,seq__29829_29850__$1);
var G__29858 = null;
var G__29859 = (0);
var G__29860 = (0);
seq__29829_29840 = G__29857;
chunk__29830_29841 = G__29858;
count__29831_29842 = G__29859;
i__29832_29843 = G__29860;
continue;
}
} else {
}
}
break;
}

var seq__29833_29861 = cljs.core.seq.call(null,children);
var chunk__29834_29862 = null;
var count__29835_29863 = (0);
var i__29836_29864 = (0);
while(true){
if((i__29836_29864 < count__29835_29863)){
var ch_29865 = cljs.core._nth.call(null,chunk__29834_29862,i__29836_29864);
e.appendChild(ch_29865);

var G__29866 = seq__29833_29861;
var G__29867 = chunk__29834_29862;
var G__29868 = count__29835_29863;
var G__29869 = (i__29836_29864 + (1));
seq__29833_29861 = G__29866;
chunk__29834_29862 = G__29867;
count__29835_29863 = G__29868;
i__29836_29864 = G__29869;
continue;
} else {
var temp__4425__auto___29870 = cljs.core.seq.call(null,seq__29833_29861);
if(temp__4425__auto___29870){
var seq__29833_29871__$1 = temp__4425__auto___29870;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29833_29871__$1)){
var c__16916__auto___29872 = cljs.core.chunk_first.call(null,seq__29833_29871__$1);
var G__29873 = cljs.core.chunk_rest.call(null,seq__29833_29871__$1);
var G__29874 = c__16916__auto___29872;
var G__29875 = cljs.core.count.call(null,c__16916__auto___29872);
var G__29876 = (0);
seq__29833_29861 = G__29873;
chunk__29834_29862 = G__29874;
count__29835_29863 = G__29875;
i__29836_29864 = G__29876;
continue;
} else {
var ch_29877 = cljs.core.first.call(null,seq__29833_29871__$1);
e.appendChild(ch_29877);

var G__29878 = cljs.core.next.call(null,seq__29833_29871__$1);
var G__29879 = null;
var G__29880 = (0);
var G__29881 = (0);
seq__29833_29861 = G__29878;
chunk__29834_29862 = G__29879;
count__29835_29863 = G__29880;
i__29836_29864 = G__29881;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq29826){
var G__29827 = cljs.core.first.call(null,seq29826);
var seq29826__$1 = cljs.core.next.call(null,seq29826);
var G__29828 = cljs.core.first.call(null,seq29826__$1);
var seq29826__$2 = cljs.core.next.call(null,seq29826__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__29827,G__29828,seq29826__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17026__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17027__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17028__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17029__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17030__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17026__auto__,prefer_table__17027__auto__,method_cache__17028__auto__,cached_hierarchy__17029__auto__,hierarchy__17030__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17026__auto__,prefer_table__17027__auto__,method_cache__17028__auto__,cached_hierarchy__17029__auto__,hierarchy__17030__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17030__auto__,method_table__17026__auto__,prefer_table__17027__auto__,method_cache__17028__auto__,cached_hierarchy__17029__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_29882 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_29882.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_29882.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_29882.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_29882);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__29883,st_map){
var map__29888 = p__29883;
var map__29888__$1 = ((((!((map__29888 == null)))?((((map__29888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29888):map__29888);
var container_el = cljs.core.get.call(null,map__29888__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__29888,map__29888__$1,container_el){
return (function (p__29890){
var vec__29891 = p__29890;
var k = cljs.core.nth.call(null,vec__29891,(0),null);
var v = cljs.core.nth.call(null,vec__29891,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__29888,map__29888__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__29892,dom_str){
var map__29895 = p__29892;
var map__29895__$1 = ((((!((map__29895 == null)))?((((map__29895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29895):map__29895);
var c = map__29895__$1;
var content_area_el = cljs.core.get.call(null,map__29895__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__29897){
var map__29900 = p__29897;
var map__29900__$1 = ((((!((map__29900 == null)))?((((map__29900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29900):map__29900);
var content_area_el = cljs.core.get.call(null,map__29900__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__23143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto__){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto__){
return (function (state_29943){
var state_val_29944 = (state_29943[(1)]);
if((state_val_29944 === (1))){
var inst_29928 = (state_29943[(7)]);
var inst_29928__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29929 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29930 = ["10px","10px","100%","68px","1.0"];
var inst_29931 = cljs.core.PersistentHashMap.fromArrays(inst_29929,inst_29930);
var inst_29932 = cljs.core.merge.call(null,inst_29931,style);
var inst_29933 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29928__$1,inst_29932);
var inst_29934 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29928__$1,msg);
var inst_29935 = cljs.core.async.timeout.call(null,(300));
var state_29943__$1 = (function (){var statearr_29945 = state_29943;
(statearr_29945[(7)] = inst_29928__$1);

(statearr_29945[(8)] = inst_29934);

(statearr_29945[(9)] = inst_29933);

return statearr_29945;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29943__$1,(2),inst_29935);
} else {
if((state_val_29944 === (2))){
var inst_29928 = (state_29943[(7)]);
var inst_29937 = (state_29943[(2)]);
var inst_29938 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_29939 = ["auto"];
var inst_29940 = cljs.core.PersistentHashMap.fromArrays(inst_29938,inst_29939);
var inst_29941 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29928,inst_29940);
var state_29943__$1 = (function (){var statearr_29946 = state_29943;
(statearr_29946[(10)] = inst_29937);

return statearr_29946;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29943__$1,inst_29941);
} else {
return null;
}
}
});})(c__23143__auto__))
;
return ((function (switch__23078__auto__,c__23143__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__23079__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__23079__auto____0 = (function (){
var statearr_29950 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29950[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__23079__auto__);

(statearr_29950[(1)] = (1));

return statearr_29950;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__23079__auto____1 = (function (state_29943){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_29943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e29951){if((e29951 instanceof Object)){
var ex__23082__auto__ = e29951;
var statearr_29952_29954 = state_29943;
(statearr_29952_29954[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29955 = state_29943;
state_29943 = G__29955;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__23079__auto__ = function(state_29943){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23079__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23079__auto____1.call(this,state_29943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__23079__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__23079__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto__))
})();
var state__23145__auto__ = (function (){var statearr_29953 = f__23144__auto__.call(null);
(statearr_29953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto__);

return statearr_29953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto__))
);

return c__23143__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__29957 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__29957,(0),null);
var ln = cljs.core.nth.call(null,vec__29957,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__29960 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__29960,(0),null);
var file_line = cljs.core.nth.call(null,vec__29960,(1),null);
var file_column = cljs.core.nth.call(null,vec__29960,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__29960,file_name,file_line,file_column){
return (function (p1__29958_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__29958_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__29960,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16113__auto__ = file_line;
if(cljs.core.truth_(or__16113__auto__)){
return or__16113__auto__;
} else {
var and__16101__auto__ = cause;
if(cljs.core.truth_(and__16101__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16101__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__29963 = figwheel.client.heads_up.ensure_container.call(null);
var map__29963__$1 = ((((!((map__29963 == null)))?((((map__29963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29963):map__29963);
var content_area_el = cljs.core.get.call(null,map__29963__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__23143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto__){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto__){
return (function (state_30011){
var state_val_30012 = (state_30011[(1)]);
if((state_val_30012 === (1))){
var inst_29994 = (state_30011[(7)]);
var inst_29994__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29995 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29996 = ["0.0"];
var inst_29997 = cljs.core.PersistentHashMap.fromArrays(inst_29995,inst_29996);
var inst_29998 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29994__$1,inst_29997);
var inst_29999 = cljs.core.async.timeout.call(null,(300));
var state_30011__$1 = (function (){var statearr_30013 = state_30011;
(statearr_30013[(7)] = inst_29994__$1);

(statearr_30013[(8)] = inst_29998);

return statearr_30013;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30011__$1,(2),inst_29999);
} else {
if((state_val_30012 === (2))){
var inst_29994 = (state_30011[(7)]);
var inst_30001 = (state_30011[(2)]);
var inst_30002 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_30003 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_30004 = cljs.core.PersistentHashMap.fromArrays(inst_30002,inst_30003);
var inst_30005 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29994,inst_30004);
var inst_30006 = cljs.core.async.timeout.call(null,(200));
var state_30011__$1 = (function (){var statearr_30014 = state_30011;
(statearr_30014[(9)] = inst_30001);

(statearr_30014[(10)] = inst_30005);

return statearr_30014;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30011__$1,(3),inst_30006);
} else {
if((state_val_30012 === (3))){
var inst_29994 = (state_30011[(7)]);
var inst_30008 = (state_30011[(2)]);
var inst_30009 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29994,"");
var state_30011__$1 = (function (){var statearr_30015 = state_30011;
(statearr_30015[(11)] = inst_30008);

return statearr_30015;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30011__$1,inst_30009);
} else {
return null;
}
}
}
});})(c__23143__auto__))
;
return ((function (switch__23078__auto__,c__23143__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__23079__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__23079__auto____0 = (function (){
var statearr_30019 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30019[(0)] = figwheel$client$heads_up$clear_$_state_machine__23079__auto__);

(statearr_30019[(1)] = (1));

return statearr_30019;
});
var figwheel$client$heads_up$clear_$_state_machine__23079__auto____1 = (function (state_30011){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_30011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e30020){if((e30020 instanceof Object)){
var ex__23082__auto__ = e30020;
var statearr_30021_30023 = state_30011;
(statearr_30021_30023[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30024 = state_30011;
state_30011 = G__30024;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__23079__auto__ = function(state_30011){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__23079__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__23079__auto____1.call(this,state_30011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__23079__auto____0;
figwheel$client$heads_up$clear_$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__23079__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto__))
})();
var state__23145__auto__ = (function (){var statearr_30022 = f__23144__auto__.call(null);
(statearr_30022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto__);

return statearr_30022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto__))
);

return c__23143__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__23143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto__){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto__){
return (function (state_30056){
var state_val_30057 = (state_30056[(1)]);
if((state_val_30057 === (1))){
var inst_30046 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_30056__$1 = state_30056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30056__$1,(2),inst_30046);
} else {
if((state_val_30057 === (2))){
var inst_30048 = (state_30056[(2)]);
var inst_30049 = cljs.core.async.timeout.call(null,(400));
var state_30056__$1 = (function (){var statearr_30058 = state_30056;
(statearr_30058[(7)] = inst_30048);

return statearr_30058;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30056__$1,(3),inst_30049);
} else {
if((state_val_30057 === (3))){
var inst_30051 = (state_30056[(2)]);
var inst_30052 = figwheel.client.heads_up.clear.call(null);
var state_30056__$1 = (function (){var statearr_30059 = state_30056;
(statearr_30059[(8)] = inst_30051);

return statearr_30059;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30056__$1,(4),inst_30052);
} else {
if((state_val_30057 === (4))){
var inst_30054 = (state_30056[(2)]);
var state_30056__$1 = state_30056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30056__$1,inst_30054);
} else {
return null;
}
}
}
}
});})(c__23143__auto__))
;
return ((function (switch__23078__auto__,c__23143__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__23079__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__23079__auto____0 = (function (){
var statearr_30063 = [null,null,null,null,null,null,null,null,null];
(statearr_30063[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__23079__auto__);

(statearr_30063[(1)] = (1));

return statearr_30063;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__23079__auto____1 = (function (state_30056){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_30056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e30064){if((e30064 instanceof Object)){
var ex__23082__auto__ = e30064;
var statearr_30065_30067 = state_30056;
(statearr_30065_30067[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30068 = state_30056;
state_30056 = G__30068;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__23079__auto__ = function(state_30056){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23079__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23079__auto____1.call(this,state_30056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__23079__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__23079__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto__))
})();
var state__23145__auto__ = (function (){var statearr_30066 = f__23144__auto__.call(null);
(statearr_30066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto__);

return statearr_30066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto__))
);

return c__23143__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1448902877538