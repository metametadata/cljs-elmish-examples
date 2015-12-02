// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__28991 = cljs.core._EQ_;
var expr__28992 = (function (){var or__16751__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28991.call(null,"true",expr__28992))){
return true;
} else {
if(cljs.core.truth_(pred__28991.call(null,"false",expr__28992))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28992)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28994__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28994 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28995__i = 0, G__28995__a = new Array(arguments.length -  0);
while (G__28995__i < G__28995__a.length) {G__28995__a[G__28995__i] = arguments[G__28995__i + 0]; ++G__28995__i;}
  args = new cljs.core.IndexedSeq(G__28995__a,0);
} 
return G__28994__delegate.call(this,args);};
G__28994.cljs$lang$maxFixedArity = 0;
G__28994.cljs$lang$applyTo = (function (arglist__28996){
var args = cljs.core.seq(arglist__28996);
return G__28994__delegate(args);
});
G__28994.cljs$core$IFn$_invoke$arity$variadic = G__28994__delegate;
return G__28994;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28997){
var map__29000 = p__28997;
var map__29000__$1 = ((((!((map__29000 == null)))?((((map__29000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29000):map__29000);
var message = cljs.core.get.call(null,map__29000__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29000__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16751__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16739__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16739__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16739__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24715__auto___29162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto___29162,ch){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto___29162,ch){
return (function (state_29131){
var state_val_29132 = (state_29131[(1)]);
if((state_val_29132 === (7))){
var inst_29127 = (state_29131[(2)]);
var state_29131__$1 = state_29131;
var statearr_29133_29163 = state_29131__$1;
(statearr_29133_29163[(2)] = inst_29127);

(statearr_29133_29163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (1))){
var state_29131__$1 = state_29131;
var statearr_29134_29164 = state_29131__$1;
(statearr_29134_29164[(2)] = null);

(statearr_29134_29164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (4))){
var inst_29084 = (state_29131[(7)]);
var inst_29084__$1 = (state_29131[(2)]);
var state_29131__$1 = (function (){var statearr_29135 = state_29131;
(statearr_29135[(7)] = inst_29084__$1);

return statearr_29135;
})();
if(cljs.core.truth_(inst_29084__$1)){
var statearr_29136_29165 = state_29131__$1;
(statearr_29136_29165[(1)] = (5));

} else {
var statearr_29137_29166 = state_29131__$1;
(statearr_29137_29166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (15))){
var inst_29091 = (state_29131[(8)]);
var inst_29106 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29091);
var inst_29107 = cljs.core.first.call(null,inst_29106);
var inst_29108 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29107);
var inst_29109 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_29108)].join('');
var inst_29110 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29109);
var state_29131__$1 = state_29131;
var statearr_29138_29167 = state_29131__$1;
(statearr_29138_29167[(2)] = inst_29110);

(statearr_29138_29167[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (13))){
var inst_29115 = (state_29131[(2)]);
var state_29131__$1 = state_29131;
var statearr_29139_29168 = state_29131__$1;
(statearr_29139_29168[(2)] = inst_29115);

(statearr_29139_29168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (6))){
var state_29131__$1 = state_29131;
var statearr_29140_29169 = state_29131__$1;
(statearr_29140_29169[(2)] = null);

(statearr_29140_29169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (17))){
var inst_29113 = (state_29131[(2)]);
var state_29131__$1 = state_29131;
var statearr_29141_29170 = state_29131__$1;
(statearr_29141_29170[(2)] = inst_29113);

(statearr_29141_29170[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (3))){
var inst_29129 = (state_29131[(2)]);
var state_29131__$1 = state_29131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29131__$1,inst_29129);
} else {
if((state_val_29132 === (12))){
var inst_29090 = (state_29131[(9)]);
var inst_29104 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29090,opts);
var state_29131__$1 = state_29131;
if(cljs.core.truth_(inst_29104)){
var statearr_29142_29171 = state_29131__$1;
(statearr_29142_29171[(1)] = (15));

} else {
var statearr_29143_29172 = state_29131__$1;
(statearr_29143_29172[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (2))){
var state_29131__$1 = state_29131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29131__$1,(4),ch);
} else {
if((state_val_29132 === (11))){
var inst_29091 = (state_29131[(8)]);
var inst_29096 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29097 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29091);
var inst_29098 = cljs.core.async.timeout.call(null,(1000));
var inst_29099 = [inst_29097,inst_29098];
var inst_29100 = (new cljs.core.PersistentVector(null,2,(5),inst_29096,inst_29099,null));
var state_29131__$1 = state_29131;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29131__$1,(14),inst_29100);
} else {
if((state_val_29132 === (9))){
var inst_29091 = (state_29131[(8)]);
var inst_29117 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29118 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29091);
var inst_29119 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29118);
var inst_29120 = [cljs.core.str("Not loading: "),cljs.core.str(inst_29119)].join('');
var inst_29121 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29120);
var state_29131__$1 = (function (){var statearr_29144 = state_29131;
(statearr_29144[(10)] = inst_29117);

return statearr_29144;
})();
var statearr_29145_29173 = state_29131__$1;
(statearr_29145_29173[(2)] = inst_29121);

(statearr_29145_29173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (5))){
var inst_29084 = (state_29131[(7)]);
var inst_29086 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29087 = (new cljs.core.PersistentArrayMap(null,2,inst_29086,null));
var inst_29088 = (new cljs.core.PersistentHashSet(null,inst_29087,null));
var inst_29089 = figwheel.client.focus_msgs.call(null,inst_29088,inst_29084);
var inst_29090 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29089);
var inst_29091 = cljs.core.first.call(null,inst_29089);
var inst_29092 = figwheel.client.autoload_QMARK_.call(null);
var state_29131__$1 = (function (){var statearr_29146 = state_29131;
(statearr_29146[(8)] = inst_29091);

(statearr_29146[(9)] = inst_29090);

return statearr_29146;
})();
if(cljs.core.truth_(inst_29092)){
var statearr_29147_29174 = state_29131__$1;
(statearr_29147_29174[(1)] = (8));

} else {
var statearr_29148_29175 = state_29131__$1;
(statearr_29148_29175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (14))){
var inst_29102 = (state_29131[(2)]);
var state_29131__$1 = state_29131;
var statearr_29149_29176 = state_29131__$1;
(statearr_29149_29176[(2)] = inst_29102);

(statearr_29149_29176[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (16))){
var state_29131__$1 = state_29131;
var statearr_29150_29177 = state_29131__$1;
(statearr_29150_29177[(2)] = null);

(statearr_29150_29177[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (10))){
var inst_29123 = (state_29131[(2)]);
var state_29131__$1 = (function (){var statearr_29151 = state_29131;
(statearr_29151[(11)] = inst_29123);

return statearr_29151;
})();
var statearr_29152_29178 = state_29131__$1;
(statearr_29152_29178[(2)] = null);

(statearr_29152_29178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (8))){
var inst_29090 = (state_29131[(9)]);
var inst_29094 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29090,opts);
var state_29131__$1 = state_29131;
if(cljs.core.truth_(inst_29094)){
var statearr_29153_29179 = state_29131__$1;
(statearr_29153_29179[(1)] = (11));

} else {
var statearr_29154_29180 = state_29131__$1;
(statearr_29154_29180[(1)] = (12));

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
});})(c__24715__auto___29162,ch))
;
return ((function (switch__24603__auto__,c__24715__auto___29162,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24604__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24604__auto____0 = (function (){
var statearr_29158 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29158[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24604__auto__);

(statearr_29158[(1)] = (1));

return statearr_29158;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24604__auto____1 = (function (state_29131){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_29131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e29159){if((e29159 instanceof Object)){
var ex__24607__auto__ = e29159;
var statearr_29160_29181 = state_29131;
(statearr_29160_29181[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29182 = state_29131;
state_29131 = G__29182;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24604__auto__ = function(state_29131){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24604__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24604__auto____1.call(this,state_29131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24604__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24604__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto___29162,ch))
})();
var state__24717__auto__ = (function (){var statearr_29161 = f__24716__auto__.call(null);
(statearr_29161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto___29162);

return statearr_29161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto___29162,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29183_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29183_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29190 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29190){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_29188 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29189 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_29188,_STAR_print_newline_STAR_29189,base_path_29190){
return (function() { 
var G__29191__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29191 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29192__i = 0, G__29192__a = new Array(arguments.length -  0);
while (G__29192__i < G__29192__a.length) {G__29192__a[G__29192__i] = arguments[G__29192__i + 0]; ++G__29192__i;}
  args = new cljs.core.IndexedSeq(G__29192__a,0);
} 
return G__29191__delegate.call(this,args);};
G__29191.cljs$lang$maxFixedArity = 0;
G__29191.cljs$lang$applyTo = (function (arglist__29193){
var args = cljs.core.seq(arglist__29193);
return G__29191__delegate(args);
});
G__29191.cljs$core$IFn$_invoke$arity$variadic = G__29191__delegate;
return G__29191;
})()
;})(_STAR_print_fn_STAR_29188,_STAR_print_newline_STAR_29189,base_path_29190))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29189;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29188;
}}catch (e29187){if((e29187 instanceof Error)){
var e = e29187;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29190], null));
} else {
var e = e29187;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29190))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29194){
var map__29201 = p__29194;
var map__29201__$1 = ((((!((map__29201 == null)))?((((map__29201.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29201.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29201):map__29201);
var opts = map__29201__$1;
var build_id = cljs.core.get.call(null,map__29201__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29201,map__29201__$1,opts,build_id){
return (function (p__29203){
var vec__29204 = p__29203;
var map__29205 = cljs.core.nth.call(null,vec__29204,(0),null);
var map__29205__$1 = ((((!((map__29205 == null)))?((((map__29205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29205):map__29205);
var msg = map__29205__$1;
var msg_name = cljs.core.get.call(null,map__29205__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29204,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29204,map__29205,map__29205__$1,msg,msg_name,_,map__29201,map__29201__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29204,map__29205,map__29205__$1,msg,msg_name,_,map__29201,map__29201__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29201,map__29201__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29211){
var vec__29212 = p__29211;
var map__29213 = cljs.core.nth.call(null,vec__29212,(0),null);
var map__29213__$1 = ((((!((map__29213 == null)))?((((map__29213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29213):map__29213);
var msg = map__29213__$1;
var msg_name = cljs.core.get.call(null,map__29213__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29212,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29215){
var map__29225 = p__29215;
var map__29225__$1 = ((((!((map__29225 == null)))?((((map__29225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29225):map__29225);
var on_compile_warning = cljs.core.get.call(null,map__29225__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29225__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29225,map__29225__$1,on_compile_warning,on_compile_fail){
return (function (p__29227){
var vec__29228 = p__29227;
var map__29229 = cljs.core.nth.call(null,vec__29228,(0),null);
var map__29229__$1 = ((((!((map__29229 == null)))?((((map__29229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29229):map__29229);
var msg = map__29229__$1;
var msg_name = cljs.core.get.call(null,map__29229__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29228,(1));
var pred__29231 = cljs.core._EQ_;
var expr__29232 = msg_name;
if(cljs.core.truth_(pred__29231.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29232))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29231.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29232))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29225,map__29225__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24715__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto__,msg_hist,msg_names,msg){
return (function (state_29448){
var state_val_29449 = (state_29448[(1)]);
if((state_val_29449 === (7))){
var inst_29372 = (state_29448[(2)]);
var state_29448__$1 = state_29448;
if(cljs.core.truth_(inst_29372)){
var statearr_29450_29496 = state_29448__$1;
(statearr_29450_29496[(1)] = (8));

} else {
var statearr_29451_29497 = state_29448__$1;
(statearr_29451_29497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (20))){
var inst_29442 = (state_29448[(2)]);
var state_29448__$1 = state_29448;
var statearr_29452_29498 = state_29448__$1;
(statearr_29452_29498[(2)] = inst_29442);

(statearr_29452_29498[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (27))){
var inst_29438 = (state_29448[(2)]);
var state_29448__$1 = state_29448;
var statearr_29453_29499 = state_29448__$1;
(statearr_29453_29499[(2)] = inst_29438);

(statearr_29453_29499[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (1))){
var inst_29365 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29448__$1 = state_29448;
if(cljs.core.truth_(inst_29365)){
var statearr_29454_29500 = state_29448__$1;
(statearr_29454_29500[(1)] = (2));

} else {
var statearr_29455_29501 = state_29448__$1;
(statearr_29455_29501[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (24))){
var inst_29440 = (state_29448[(2)]);
var state_29448__$1 = state_29448;
var statearr_29456_29502 = state_29448__$1;
(statearr_29456_29502[(2)] = inst_29440);

(statearr_29456_29502[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (4))){
var inst_29446 = (state_29448[(2)]);
var state_29448__$1 = state_29448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29448__$1,inst_29446);
} else {
if((state_val_29449 === (15))){
var inst_29444 = (state_29448[(2)]);
var state_29448__$1 = state_29448;
var statearr_29457_29503 = state_29448__$1;
(statearr_29457_29503[(2)] = inst_29444);

(statearr_29457_29503[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (21))){
var inst_29403 = (state_29448[(2)]);
var state_29448__$1 = state_29448;
var statearr_29458_29504 = state_29448__$1;
(statearr_29458_29504[(2)] = inst_29403);

(statearr_29458_29504[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (31))){
var inst_29427 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29448__$1 = state_29448;
if(cljs.core.truth_(inst_29427)){
var statearr_29459_29505 = state_29448__$1;
(statearr_29459_29505[(1)] = (34));

} else {
var statearr_29460_29506 = state_29448__$1;
(statearr_29460_29506[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (32))){
var inst_29436 = (state_29448[(2)]);
var state_29448__$1 = state_29448;
var statearr_29461_29507 = state_29448__$1;
(statearr_29461_29507[(2)] = inst_29436);

(statearr_29461_29507[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (33))){
var inst_29425 = (state_29448[(2)]);
var state_29448__$1 = state_29448;
var statearr_29462_29508 = state_29448__$1;
(statearr_29462_29508[(2)] = inst_29425);

(statearr_29462_29508[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (13))){
var inst_29386 = figwheel.client.heads_up.clear.call(null);
var state_29448__$1 = state_29448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29448__$1,(16),inst_29386);
} else {
if((state_val_29449 === (22))){
var inst_29407 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29408 = figwheel.client.heads_up.append_message.call(null,inst_29407);
var state_29448__$1 = state_29448;
var statearr_29463_29509 = state_29448__$1;
(statearr_29463_29509[(2)] = inst_29408);

(statearr_29463_29509[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (36))){
var inst_29434 = (state_29448[(2)]);
var state_29448__$1 = state_29448;
var statearr_29464_29510 = state_29448__$1;
(statearr_29464_29510[(2)] = inst_29434);

(statearr_29464_29510[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (29))){
var inst_29418 = (state_29448[(2)]);
var state_29448__$1 = state_29448;
var statearr_29465_29511 = state_29448__$1;
(statearr_29465_29511[(2)] = inst_29418);

(statearr_29465_29511[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (6))){
var inst_29367 = (state_29448[(7)]);
var state_29448__$1 = state_29448;
var statearr_29466_29512 = state_29448__$1;
(statearr_29466_29512[(2)] = inst_29367);

(statearr_29466_29512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (28))){
var inst_29414 = (state_29448[(2)]);
var inst_29415 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29416 = figwheel.client.heads_up.display_warning.call(null,inst_29415);
var state_29448__$1 = (function (){var statearr_29467 = state_29448;
(statearr_29467[(8)] = inst_29414);

return statearr_29467;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29448__$1,(29),inst_29416);
} else {
if((state_val_29449 === (25))){
var inst_29412 = figwheel.client.heads_up.clear.call(null);
var state_29448__$1 = state_29448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29448__$1,(28),inst_29412);
} else {
if((state_val_29449 === (34))){
var inst_29429 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29448__$1 = state_29448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29448__$1,(37),inst_29429);
} else {
if((state_val_29449 === (17))){
var inst_29394 = (state_29448[(2)]);
var state_29448__$1 = state_29448;
var statearr_29468_29513 = state_29448__$1;
(statearr_29468_29513[(2)] = inst_29394);

(statearr_29468_29513[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (3))){
var inst_29384 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29448__$1 = state_29448;
if(cljs.core.truth_(inst_29384)){
var statearr_29469_29514 = state_29448__$1;
(statearr_29469_29514[(1)] = (13));

} else {
var statearr_29470_29515 = state_29448__$1;
(statearr_29470_29515[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (12))){
var inst_29380 = (state_29448[(2)]);
var state_29448__$1 = state_29448;
var statearr_29471_29516 = state_29448__$1;
(statearr_29471_29516[(2)] = inst_29380);

(statearr_29471_29516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (2))){
var inst_29367 = (state_29448[(7)]);
var inst_29367__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29448__$1 = (function (){var statearr_29472 = state_29448;
(statearr_29472[(7)] = inst_29367__$1);

return statearr_29472;
})();
if(cljs.core.truth_(inst_29367__$1)){
var statearr_29473_29517 = state_29448__$1;
(statearr_29473_29517[(1)] = (5));

} else {
var statearr_29474_29518 = state_29448__$1;
(statearr_29474_29518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (23))){
var inst_29410 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29448__$1 = state_29448;
if(cljs.core.truth_(inst_29410)){
var statearr_29475_29519 = state_29448__$1;
(statearr_29475_29519[(1)] = (25));

} else {
var statearr_29476_29520 = state_29448__$1;
(statearr_29476_29520[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (35))){
var state_29448__$1 = state_29448;
var statearr_29477_29521 = state_29448__$1;
(statearr_29477_29521[(2)] = null);

(statearr_29477_29521[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (19))){
var inst_29405 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29448__$1 = state_29448;
if(cljs.core.truth_(inst_29405)){
var statearr_29478_29522 = state_29448__$1;
(statearr_29478_29522[(1)] = (22));

} else {
var statearr_29479_29523 = state_29448__$1;
(statearr_29479_29523[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (11))){
var inst_29376 = (state_29448[(2)]);
var state_29448__$1 = state_29448;
var statearr_29480_29524 = state_29448__$1;
(statearr_29480_29524[(2)] = inst_29376);

(statearr_29480_29524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (9))){
var inst_29378 = figwheel.client.heads_up.clear.call(null);
var state_29448__$1 = state_29448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29448__$1,(12),inst_29378);
} else {
if((state_val_29449 === (5))){
var inst_29369 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29448__$1 = state_29448;
var statearr_29481_29525 = state_29448__$1;
(statearr_29481_29525[(2)] = inst_29369);

(statearr_29481_29525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (14))){
var inst_29396 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29448__$1 = state_29448;
if(cljs.core.truth_(inst_29396)){
var statearr_29482_29526 = state_29448__$1;
(statearr_29482_29526[(1)] = (18));

} else {
var statearr_29483_29527 = state_29448__$1;
(statearr_29483_29527[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (26))){
var inst_29420 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29448__$1 = state_29448;
if(cljs.core.truth_(inst_29420)){
var statearr_29484_29528 = state_29448__$1;
(statearr_29484_29528[(1)] = (30));

} else {
var statearr_29485_29529 = state_29448__$1;
(statearr_29485_29529[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (16))){
var inst_29388 = (state_29448[(2)]);
var inst_29389 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29390 = figwheel.client.format_messages.call(null,inst_29389);
var inst_29391 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29392 = figwheel.client.heads_up.display_error.call(null,inst_29390,inst_29391);
var state_29448__$1 = (function (){var statearr_29486 = state_29448;
(statearr_29486[(9)] = inst_29388);

return statearr_29486;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29448__$1,(17),inst_29392);
} else {
if((state_val_29449 === (30))){
var inst_29422 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29423 = figwheel.client.heads_up.display_warning.call(null,inst_29422);
var state_29448__$1 = state_29448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29448__$1,(33),inst_29423);
} else {
if((state_val_29449 === (10))){
var inst_29382 = (state_29448[(2)]);
var state_29448__$1 = state_29448;
var statearr_29487_29530 = state_29448__$1;
(statearr_29487_29530[(2)] = inst_29382);

(statearr_29487_29530[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (18))){
var inst_29398 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29399 = figwheel.client.format_messages.call(null,inst_29398);
var inst_29400 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29401 = figwheel.client.heads_up.display_error.call(null,inst_29399,inst_29400);
var state_29448__$1 = state_29448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29448__$1,(21),inst_29401);
} else {
if((state_val_29449 === (37))){
var inst_29431 = (state_29448[(2)]);
var state_29448__$1 = state_29448;
var statearr_29488_29531 = state_29448__$1;
(statearr_29488_29531[(2)] = inst_29431);

(statearr_29488_29531[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29449 === (8))){
var inst_29374 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29448__$1 = state_29448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29448__$1,(11),inst_29374);
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
});})(c__24715__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24603__auto__,c__24715__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24604__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24604__auto____0 = (function (){
var statearr_29492 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29492[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24604__auto__);

(statearr_29492[(1)] = (1));

return statearr_29492;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24604__auto____1 = (function (state_29448){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_29448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e29493){if((e29493 instanceof Object)){
var ex__24607__auto__ = e29493;
var statearr_29494_29532 = state_29448;
(statearr_29494_29532[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29533 = state_29448;
state_29448 = G__29533;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24604__auto__ = function(state_29448){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24604__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24604__auto____1.call(this,state_29448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24604__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24604__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto__,msg_hist,msg_names,msg))
})();
var state__24717__auto__ = (function (){var statearr_29495 = f__24716__auto__.call(null);
(statearr_29495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto__);

return statearr_29495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto__,msg_hist,msg_names,msg))
);

return c__24715__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24715__auto___29596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto___29596,ch){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto___29596,ch){
return (function (state_29579){
var state_val_29580 = (state_29579[(1)]);
if((state_val_29580 === (1))){
var state_29579__$1 = state_29579;
var statearr_29581_29597 = state_29579__$1;
(statearr_29581_29597[(2)] = null);

(statearr_29581_29597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (2))){
var state_29579__$1 = state_29579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29579__$1,(4),ch);
} else {
if((state_val_29580 === (3))){
var inst_29577 = (state_29579[(2)]);
var state_29579__$1 = state_29579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29579__$1,inst_29577);
} else {
if((state_val_29580 === (4))){
var inst_29567 = (state_29579[(7)]);
var inst_29567__$1 = (state_29579[(2)]);
var state_29579__$1 = (function (){var statearr_29582 = state_29579;
(statearr_29582[(7)] = inst_29567__$1);

return statearr_29582;
})();
if(cljs.core.truth_(inst_29567__$1)){
var statearr_29583_29598 = state_29579__$1;
(statearr_29583_29598[(1)] = (5));

} else {
var statearr_29584_29599 = state_29579__$1;
(statearr_29584_29599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (5))){
var inst_29567 = (state_29579[(7)]);
var inst_29569 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29567);
var state_29579__$1 = state_29579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29579__$1,(8),inst_29569);
} else {
if((state_val_29580 === (6))){
var state_29579__$1 = state_29579;
var statearr_29585_29600 = state_29579__$1;
(statearr_29585_29600[(2)] = null);

(statearr_29585_29600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (7))){
var inst_29575 = (state_29579[(2)]);
var state_29579__$1 = state_29579;
var statearr_29586_29601 = state_29579__$1;
(statearr_29586_29601[(2)] = inst_29575);

(statearr_29586_29601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29580 === (8))){
var inst_29571 = (state_29579[(2)]);
var state_29579__$1 = (function (){var statearr_29587 = state_29579;
(statearr_29587[(8)] = inst_29571);

return statearr_29587;
})();
var statearr_29588_29602 = state_29579__$1;
(statearr_29588_29602[(2)] = null);

(statearr_29588_29602[(1)] = (2));


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
});})(c__24715__auto___29596,ch))
;
return ((function (switch__24603__auto__,c__24715__auto___29596,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24604__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24604__auto____0 = (function (){
var statearr_29592 = [null,null,null,null,null,null,null,null,null];
(statearr_29592[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24604__auto__);

(statearr_29592[(1)] = (1));

return statearr_29592;
});
var figwheel$client$heads_up_plugin_$_state_machine__24604__auto____1 = (function (state_29579){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_29579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e29593){if((e29593 instanceof Object)){
var ex__24607__auto__ = e29593;
var statearr_29594_29603 = state_29579;
(statearr_29594_29603[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29604 = state_29579;
state_29579 = G__29604;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24604__auto__ = function(state_29579){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24604__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24604__auto____1.call(this,state_29579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24604__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24604__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto___29596,ch))
})();
var state__24717__auto__ = (function (){var statearr_29595 = f__24716__auto__.call(null);
(statearr_29595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto___29596);

return statearr_29595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto___29596,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24715__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24715__auto__){
return (function (){
var f__24716__auto__ = (function (){var switch__24603__auto__ = ((function (c__24715__auto__){
return (function (state_29625){
var state_val_29626 = (state_29625[(1)]);
if((state_val_29626 === (1))){
var inst_29620 = cljs.core.async.timeout.call(null,(3000));
var state_29625__$1 = state_29625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29625__$1,(2),inst_29620);
} else {
if((state_val_29626 === (2))){
var inst_29622 = (state_29625[(2)]);
var inst_29623 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29625__$1 = (function (){var statearr_29627 = state_29625;
(statearr_29627[(7)] = inst_29622);

return statearr_29627;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29625__$1,inst_29623);
} else {
return null;
}
}
});})(c__24715__auto__))
;
return ((function (switch__24603__auto__,c__24715__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24604__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24604__auto____0 = (function (){
var statearr_29631 = [null,null,null,null,null,null,null,null];
(statearr_29631[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24604__auto__);

(statearr_29631[(1)] = (1));

return statearr_29631;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24604__auto____1 = (function (state_29625){
while(true){
var ret_value__24605__auto__ = (function (){try{while(true){
var result__24606__auto__ = switch__24603__auto__.call(null,state_29625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24606__auto__;
}
break;
}
}catch (e29632){if((e29632 instanceof Object)){
var ex__24607__auto__ = e29632;
var statearr_29633_29635 = state_29625;
(statearr_29633_29635[(5)] = ex__24607__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29636 = state_29625;
state_29625 = G__29636;
continue;
} else {
return ret_value__24605__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24604__auto__ = function(state_29625){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24604__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24604__auto____1.call(this,state_29625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24604__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24604__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24604__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24604__auto__;
})()
;})(switch__24603__auto__,c__24715__auto__))
})();
var state__24717__auto__ = (function (){var statearr_29634 = f__24716__auto__.call(null);
(statearr_29634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24715__auto__);

return statearr_29634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24717__auto__);
});})(c__24715__auto__))
);

return c__24715__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29637){
var map__29644 = p__29637;
var map__29644__$1 = ((((!((map__29644 == null)))?((((map__29644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29644):map__29644);
var ed = map__29644__$1;
var formatted_exception = cljs.core.get.call(null,map__29644__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29644__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29644__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29646_29650 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29647_29651 = null;
var count__29648_29652 = (0);
var i__29649_29653 = (0);
while(true){
if((i__29649_29653 < count__29648_29652)){
var msg_29654 = cljs.core._nth.call(null,chunk__29647_29651,i__29649_29653);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29654);

var G__29655 = seq__29646_29650;
var G__29656 = chunk__29647_29651;
var G__29657 = count__29648_29652;
var G__29658 = (i__29649_29653 + (1));
seq__29646_29650 = G__29655;
chunk__29647_29651 = G__29656;
count__29648_29652 = G__29657;
i__29649_29653 = G__29658;
continue;
} else {
var temp__4425__auto___29659 = cljs.core.seq.call(null,seq__29646_29650);
if(temp__4425__auto___29659){
var seq__29646_29660__$1 = temp__4425__auto___29659;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29646_29660__$1)){
var c__17554__auto___29661 = cljs.core.chunk_first.call(null,seq__29646_29660__$1);
var G__29662 = cljs.core.chunk_rest.call(null,seq__29646_29660__$1);
var G__29663 = c__17554__auto___29661;
var G__29664 = cljs.core.count.call(null,c__17554__auto___29661);
var G__29665 = (0);
seq__29646_29650 = G__29662;
chunk__29647_29651 = G__29663;
count__29648_29652 = G__29664;
i__29649_29653 = G__29665;
continue;
} else {
var msg_29666 = cljs.core.first.call(null,seq__29646_29660__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29666);

var G__29667 = cljs.core.next.call(null,seq__29646_29660__$1);
var G__29668 = null;
var G__29669 = (0);
var G__29670 = (0);
seq__29646_29650 = G__29667;
chunk__29647_29651 = G__29668;
count__29648_29652 = G__29669;
i__29649_29653 = G__29670;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29671){
var map__29674 = p__29671;
var map__29674__$1 = ((((!((map__29674 == null)))?((((map__29674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29674):map__29674);
var w = map__29674__$1;
var message = cljs.core.get.call(null,map__29674__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16739__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16739__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16739__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29682 = cljs.core.seq.call(null,plugins);
var chunk__29683 = null;
var count__29684 = (0);
var i__29685 = (0);
while(true){
if((i__29685 < count__29684)){
var vec__29686 = cljs.core._nth.call(null,chunk__29683,i__29685);
var k = cljs.core.nth.call(null,vec__29686,(0),null);
var plugin = cljs.core.nth.call(null,vec__29686,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29688 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29682,chunk__29683,count__29684,i__29685,pl_29688,vec__29686,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29688.call(null,msg_hist);
});})(seq__29682,chunk__29683,count__29684,i__29685,pl_29688,vec__29686,k,plugin))
);
} else {
}

var G__29689 = seq__29682;
var G__29690 = chunk__29683;
var G__29691 = count__29684;
var G__29692 = (i__29685 + (1));
seq__29682 = G__29689;
chunk__29683 = G__29690;
count__29684 = G__29691;
i__29685 = G__29692;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29682);
if(temp__4425__auto__){
var seq__29682__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29682__$1)){
var c__17554__auto__ = cljs.core.chunk_first.call(null,seq__29682__$1);
var G__29693 = cljs.core.chunk_rest.call(null,seq__29682__$1);
var G__29694 = c__17554__auto__;
var G__29695 = cljs.core.count.call(null,c__17554__auto__);
var G__29696 = (0);
seq__29682 = G__29693;
chunk__29683 = G__29694;
count__29684 = G__29695;
i__29685 = G__29696;
continue;
} else {
var vec__29687 = cljs.core.first.call(null,seq__29682__$1);
var k = cljs.core.nth.call(null,vec__29687,(0),null);
var plugin = cljs.core.nth.call(null,vec__29687,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29697 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29682,chunk__29683,count__29684,i__29685,pl_29697,vec__29687,k,plugin,seq__29682__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29697.call(null,msg_hist);
});})(seq__29682,chunk__29683,count__29684,i__29685,pl_29697,vec__29687,k,plugin,seq__29682__$1,temp__4425__auto__))
);
} else {
}

var G__29698 = cljs.core.next.call(null,seq__29682__$1);
var G__29699 = null;
var G__29700 = (0);
var G__29701 = (0);
seq__29682 = G__29698;
chunk__29683 = G__29699;
count__29684 = G__29700;
i__29685 = G__29701;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args29702 = [];
var len__17809__auto___29705 = arguments.length;
var i__17810__auto___29706 = (0);
while(true){
if((i__17810__auto___29706 < len__17809__auto___29705)){
args29702.push((arguments[i__17810__auto___29706]));

var G__29707 = (i__17810__auto___29706 + (1));
i__17810__auto___29706 = G__29707;
continue;
} else {
}
break;
}

var G__29704 = args29702.length;
switch (G__29704) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29702.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17816__auto__ = [];
var len__17809__auto___29713 = arguments.length;
var i__17810__auto___29714 = (0);
while(true){
if((i__17810__auto___29714 < len__17809__auto___29713)){
args__17816__auto__.push((arguments[i__17810__auto___29714]));

var G__29715 = (i__17810__auto___29714 + (1));
i__17810__auto___29714 = G__29715;
continue;
} else {
}
break;
}

var argseq__17817__auto__ = ((((0) < args__17816__auto__.length))?(new cljs.core.IndexedSeq(args__17816__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17817__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29710){
var map__29711 = p__29710;
var map__29711__$1 = ((((!((map__29711 == null)))?((((map__29711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29711):map__29711);
var opts = map__29711__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29709){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29709));
});

//# sourceMappingURL=client.js.map?rel=1449083090044