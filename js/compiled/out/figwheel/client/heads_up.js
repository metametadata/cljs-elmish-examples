// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17816__auto__ = [];
var len__17809__auto___28757 = arguments.length;
var i__17810__auto___28758 = (0);
while(true){
if((i__17810__auto___28758 < len__17809__auto___28757)){
args__17816__auto__.push((arguments[i__17810__auto___28758]));

var G__28759 = (i__17810__auto___28758 + (1));
i__17810__auto___28758 = G__28759;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((2) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17817__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28749_28760 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28750_28761 = null;
var count__28751_28762 = (0);
var i__28752_28763 = (0);
while(true){
if((i__28752_28763 < count__28751_28762)){
var k_28764 = cljs.core._nth.call(null,chunk__28750_28761,i__28752_28763);
e.setAttribute(cljs.core.name.call(null,k_28764),cljs.core.get.call(null,attrs,k_28764));

var G__28765 = seq__28749_28760;
var G__28766 = chunk__28750_28761;
var G__28767 = count__28751_28762;
var G__28768 = (i__28752_28763 + (1));
seq__28749_28760 = G__28765;
chunk__28750_28761 = G__28766;
count__28751_28762 = G__28767;
i__28752_28763 = G__28768;
continue;
} else {
var temp__4425__auto___28769 = cljs.core.seq.call(null,seq__28749_28760);
if(temp__4425__auto___28769){
var seq__28749_28770__$1 = temp__4425__auto___28769;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28749_28770__$1)){
var c__17554__auto___28771 = cljs.core.chunk_first.call(null,seq__28749_28770__$1);
var G__28772 = cljs.core.chunk_rest.call(null,seq__28749_28770__$1);
var G__28773 = c__17554__auto___28771;
var G__28774 = cljs.core.count.call(null,c__17554__auto___28771);
var G__28775 = (0);
seq__28749_28760 = G__28772;
chunk__28750_28761 = G__28773;
count__28751_28762 = G__28774;
i__28752_28763 = G__28775;
continue;
} else {
var k_28776 = cljs.core.first.call(null,seq__28749_28770__$1);
e.setAttribute(cljs.core.name.call(null,k_28776),cljs.core.get.call(null,attrs,k_28776));

var G__28777 = cljs.core.next.call(null,seq__28749_28770__$1);
var G__28778 = null;
var G__28779 = (0);
var G__28780 = (0);
seq__28749_28760 = G__28777;
chunk__28750_28761 = G__28778;
count__28751_28762 = G__28779;
i__28752_28763 = G__28780;
continue;
}
} else {
}
}
break;
}

var seq__28753_28781 = cljs.core.seq.call(null,children);
var chunk__28754_28782 = null;
var count__28755_28783 = (0);
var i__28756_28784 = (0);
while(true){
if((i__28756_28784 < count__28755_28783)){
var ch_28785 = cljs.core._nth.call(null,chunk__28754_28782,i__28756_28784);
e.appendChild(ch_28785);

var G__28786 = seq__28753_28781;
var G__28787 = chunk__28754_28782;
var G__28788 = count__28755_28783;
var G__28789 = (i__28756_28784 + (1));
seq__28753_28781 = G__28786;
chunk__28754_28782 = G__28787;
count__28755_28783 = G__28788;
i__28756_28784 = G__28789;
continue;
} else {
var temp__4425__auto___28790 = cljs.core.seq.call(null,seq__28753_28781);
if(temp__4425__auto___28790){
var seq__28753_28791__$1 = temp__4425__auto___28790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28753_28791__$1)){
var c__17554__auto___28792 = cljs.core.chunk_first.call(null,seq__28753_28791__$1);
var G__28793 = cljs.core.chunk_rest.call(null,seq__28753_28791__$1);
var G__28794 = c__17554__auto___28792;
var G__28795 = cljs.core.count.call(null,c__17554__auto___28792);
var G__28796 = (0);
seq__28753_28781 = G__28793;
chunk__28754_28782 = G__28794;
count__28755_28783 = G__28795;
i__28756_28784 = G__28796;
continue;
} else {
var ch_28797 = cljs.core.first.call(null,seq__28753_28791__$1);
e.appendChild(ch_28797);

var G__28798 = cljs.core.next.call(null,seq__28753_28791__$1);
var G__28799 = null;
var G__28800 = (0);
var G__28801 = (0);
seq__28753_28781 = G__28798;
chunk__28754_28782 = G__28799;
count__28755_28783 = G__28800;
i__28756_28784 = G__28801;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28746){
var G__28747 = cljs.core.first.call(null,seq28746);
var seq28746__$1 = cljs.core.next.call(null,seq28746);
var G__28748 = cljs.core.first.call(null,seq28746__$1);
var seq28746__$2 = cljs.core.next.call(null,seq28746__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28747,G__28748,seq28746__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17664__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17665__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17666__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17667__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17668__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17664__auto__,prefer_table__17665__auto__,method_cache__17666__auto__,cached_hierarchy__17667__auto__,hierarchy__17668__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17664__auto__,prefer_table__17665__auto__,method_cache__17666__auto__,cached_hierarchy__17667__auto__,hierarchy__17668__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17668__auto__,method_table__17664__auto__,prefer_table__17665__auto__,method_cache__17666__auto__,cached_hierarchy__17667__auto__));
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
var el_28802 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28802.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28802.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_28802.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28802);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28803,st_map){
var map__28808 = p__28803;
var map__28808__$1 = ((((!((map__28808 == null)))?((((map__28808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28808):map__28808);
var container_el = cljs.core.get.call(null,map__28808__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28808,map__28808__$1,container_el){
return (function (p__28810){
var vec__28811 = p__28810;
var k = cljs.core.nth.call(null,vec__28811,(0),null);
var v = cljs.core.nth.call(null,vec__28811,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28808,map__28808__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28812,dom_str){
var map__28815 = p__28812;
var map__28815__$1 = ((((!((map__28815 == null)))?((((map__28815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28815):map__28815);
var c = map__28815__$1;
var content_area_el = cljs.core.get.call(null,map__28815__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28817){
var map__28820 = p__28817;
var map__28820__$1 = ((((!((map__28820 == null)))?((((map__28820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28820):map__28820);
var content_area_el = cljs.core.get.call(null,map__28820__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__24715__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto__){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto__){
return (function (state_28863){
var state_val_28864 = (state_28863[(1)]);
if((state_val_28864 === (1))){
var inst_28848 = (state_28863[(7)]);
var inst_28848__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28849 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28850 = ["10px","10px","100%","68px","1.0"];
var inst_28851 = cljs.core.PersistentHashMap.fromArrays(inst_28849,inst_28850);
var inst_28852 = cljs.core.merge.call(null,inst_28851,style);
var inst_28853 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28848__$1,inst_28852);
var inst_28854 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28848__$1,msg);
var inst_28855 = cljs.core.async.timeout.call(null,(300));
var state_28863__$1 = (function (){var statearr_28865 = state_28863;
(statearr_28865[(8)] = inst_28854);

(statearr_28865[(7)] = inst_28848__$1);

(statearr_28865[(9)] = inst_28853);

return statearr_28865;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28863__$1,(2),inst_28855);
} else {
if((state_val_28864 === (2))){
var inst_28848 = (state_28863[(7)]);
var inst_28857 = (state_28863[(2)]);
var inst_28858 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28859 = ["auto"];
var inst_28860 = cljs.core.PersistentHashMap.fromArrays(inst_28858,inst_28859);
var inst_28861 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28848,inst_28860);
var state_28863__$1 = (function (){var statearr_28866 = state_28863;
(statearr_28866[(10)] = inst_28857);

return statearr_28866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28863__$1,inst_28861);
} else {
return null;
}
}
});})(c__24715__auto__))
;
return ((function (switch__24603__auto__,c__24715__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__24604__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__24604__auto____0 = (function (){
var statearr_28870 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28870[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__24604__auto__);

(statearr_28870[(1)] = (1));

return statearr_28870;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__24604__auto____1 = (function (state_28863){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_28863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e28871){if((e28871 instanceof Object)){
var ex__24607__auto__ = e28871;
var statearr_28872_28874 = state_28863;
(statearr_28872_28874[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28875 = state_28863;
state_28863 = G__28875;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__24604__auto__ = function(state_28863){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24604__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24604__auto____1.call(this,state_28863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__24604__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__24604__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto__))
})();
var state__24717__auto__ = (function (){var statearr_28873 = f__24716__auto__.call(null);
(statearr_28873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto__);

return statearr_28873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto__))
);

return c__24715__auto__;
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
var vec__28877 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__28877,(0),null);
var ln = cljs.core.nth.call(null,vec__28877,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28880 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28880,(0),null);
var file_line = cljs.core.nth.call(null,vec__28880,(1),null);
var file_column = cljs.core.nth.call(null,vec__28880,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28880,file_name,file_line,file_column){
return (function (p1__28878_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__28878_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__28880,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16751__auto__ = file_line;
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
var and__16739__auto__ = cause;
if(cljs.core.truth_(and__16739__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16739__auto__;
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
var map__28883 = figwheel.client.heads_up.ensure_container.call(null);
var map__28883__$1 = ((((!((map__28883 == null)))?((((map__28883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28883):map__28883);
var content_area_el = cljs.core.get.call(null,map__28883__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__24715__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto__){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto__){
return (function (state_28931){
var state_val_28932 = (state_28931[(1)]);
if((state_val_28932 === (1))){
var inst_28914 = (state_28931[(7)]);
var inst_28914__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28915 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28916 = ["0.0"];
var inst_28917 = cljs.core.PersistentHashMap.fromArrays(inst_28915,inst_28916);
var inst_28918 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28914__$1,inst_28917);
var inst_28919 = cljs.core.async.timeout.call(null,(300));
var state_28931__$1 = (function (){var statearr_28933 = state_28931;
(statearr_28933[(7)] = inst_28914__$1);

(statearr_28933[(8)] = inst_28918);

return statearr_28933;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28931__$1,(2),inst_28919);
} else {
if((state_val_28932 === (2))){
var inst_28914 = (state_28931[(7)]);
var inst_28921 = (state_28931[(2)]);
var inst_28922 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28923 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28924 = cljs.core.PersistentHashMap.fromArrays(inst_28922,inst_28923);
var inst_28925 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28914,inst_28924);
var inst_28926 = cljs.core.async.timeout.call(null,(200));
var state_28931__$1 = (function (){var statearr_28934 = state_28931;
(statearr_28934[(9)] = inst_28921);

(statearr_28934[(10)] = inst_28925);

return statearr_28934;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28931__$1,(3),inst_28926);
} else {
if((state_val_28932 === (3))){
var inst_28914 = (state_28931[(7)]);
var inst_28928 = (state_28931[(2)]);
var inst_28929 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28914,"");
var state_28931__$1 = (function (){var statearr_28935 = state_28931;
(statearr_28935[(11)] = inst_28928);

return statearr_28935;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28931__$1,inst_28929);
} else {
return null;
}
}
}
});})(c__24715__auto__))
;
return ((function (switch__24603__auto__,c__24715__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__24604__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__24604__auto____0 = (function (){
var statearr_28939 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28939[(0)] = figwheel$client$heads_up$clear_$_state_machine__24604__auto__);

(statearr_28939[(1)] = (1));

return statearr_28939;
});
var figwheel$client$heads_up$clear_$_state_machine__24604__auto____1 = (function (state_28931){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_28931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e28940){if((e28940 instanceof Object)){
var ex__24607__auto__ = e28940;
var statearr_28941_28943 = state_28931;
(statearr_28941_28943[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28944 = state_28931;
state_28931 = G__28944;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__24604__auto__ = function(state_28931){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__24604__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__24604__auto____1.call(this,state_28931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__24604__auto____0;
figwheel$client$heads_up$clear_$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__24604__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto__))
})();
var state__24717__auto__ = (function (){var statearr_28942 = f__24716__auto__.call(null);
(statearr_28942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto__);

return statearr_28942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto__))
);

return c__24715__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__24715__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto__){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto__){
return (function (state_28976){
var state_val_28977 = (state_28976[(1)]);
if((state_val_28977 === (1))){
var inst_28966 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28976__$1 = state_28976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28976__$1,(2),inst_28966);
} else {
if((state_val_28977 === (2))){
var inst_28968 = (state_28976[(2)]);
var inst_28969 = cljs.core.async.timeout.call(null,(400));
var state_28976__$1 = (function (){var statearr_28978 = state_28976;
(statearr_28978[(7)] = inst_28968);

return statearr_28978;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28976__$1,(3),inst_28969);
} else {
if((state_val_28977 === (3))){
var inst_28971 = (state_28976[(2)]);
var inst_28972 = figwheel.client.heads_up.clear.call(null);
var state_28976__$1 = (function (){var statearr_28979 = state_28976;
(statearr_28979[(8)] = inst_28971);

return statearr_28979;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28976__$1,(4),inst_28972);
} else {
if((state_val_28977 === (4))){
var inst_28974 = (state_28976[(2)]);
var state_28976__$1 = state_28976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28976__$1,inst_28974);
} else {
return null;
}
}
}
}
});})(c__24715__auto__))
;
return ((function (switch__24603__auto__,c__24715__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__24604__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__24604__auto____0 = (function (){
var statearr_28983 = [null,null,null,null,null,null,null,null,null];
(statearr_28983[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__24604__auto__);

(statearr_28983[(1)] = (1));

return statearr_28983;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__24604__auto____1 = (function (state_28976){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_28976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e28984){if((e28984 instanceof Object)){
var ex__24607__auto__ = e28984;
var statearr_28985_28987 = state_28976;
(statearr_28985_28987[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28988 = state_28976;
state_28976 = G__28988;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__24604__auto__ = function(state_28976){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24604__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24604__auto____1.call(this,state_28976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__24604__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__24604__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto__))
})();
var state__24717__auto__ = (function (){var statearr_28986 = f__24716__auto__.call(null);
(statearr_28986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto__);

return statearr_28986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto__))
);

return c__24715__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1449083089654