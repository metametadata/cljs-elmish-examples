// Compiled by ClojureScript 1.7.122 {}
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
var pred__28975 = cljs.core._EQ_;
var expr__28976 = (function (){var or__16113__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16113__auto__)){
return or__16113__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28975.call(null,"true",expr__28976))){
return true;
} else {
if(cljs.core.truth_(pred__28975.call(null,"false",expr__28976))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28976)].join('')));
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
var G__28978__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28978 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28979__i = 0, G__28979__a = new Array(arguments.length -  0);
while (G__28979__i < G__28979__a.length) {G__28979__a[G__28979__i] = arguments[G__28979__i + 0]; ++G__28979__i;}
  args = new cljs.core.IndexedSeq(G__28979__a,0);
} 
return G__28978__delegate.call(this,args);};
G__28978.cljs$lang$maxFixedArity = 0;
G__28978.cljs$lang$applyTo = (function (arglist__28980){
var args = cljs.core.seq(arglist__28980);
return G__28978__delegate(args);
});
G__28978.cljs$core$IFn$_invoke$arity$variadic = G__28978__delegate;
return G__28978;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28981){
var map__28984 = p__28981;
var map__28984__$1 = ((((!((map__28984 == null)))?((((map__28984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28984):map__28984);
var message = cljs.core.get.call(null,map__28984__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28984__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16113__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16113__auto__)){
return or__16113__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16101__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16101__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16101__auto__;
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
var c__23143__auto___29146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___29146,ch){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto___29146,ch){
return (function (state_29115){
var state_val_29116 = (state_29115[(1)]);
if((state_val_29116 === (7))){
var inst_29111 = (state_29115[(2)]);
var state_29115__$1 = state_29115;
var statearr_29117_29147 = state_29115__$1;
(statearr_29117_29147[(2)] = inst_29111);

(statearr_29117_29147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (1))){
var state_29115__$1 = state_29115;
var statearr_29118_29148 = state_29115__$1;
(statearr_29118_29148[(2)] = null);

(statearr_29118_29148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (4))){
var inst_29068 = (state_29115[(7)]);
var inst_29068__$1 = (state_29115[(2)]);
var state_29115__$1 = (function (){var statearr_29119 = state_29115;
(statearr_29119[(7)] = inst_29068__$1);

return statearr_29119;
})();
if(cljs.core.truth_(inst_29068__$1)){
var statearr_29120_29149 = state_29115__$1;
(statearr_29120_29149[(1)] = (5));

} else {
var statearr_29121_29150 = state_29115__$1;
(statearr_29121_29150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (15))){
var inst_29075 = (state_29115[(8)]);
var inst_29090 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29075);
var inst_29091 = cljs.core.first.call(null,inst_29090);
var inst_29092 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29091);
var inst_29093 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_29092)].join('');
var inst_29094 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29093);
var state_29115__$1 = state_29115;
var statearr_29122_29151 = state_29115__$1;
(statearr_29122_29151[(2)] = inst_29094);

(statearr_29122_29151[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (13))){
var inst_29099 = (state_29115[(2)]);
var state_29115__$1 = state_29115;
var statearr_29123_29152 = state_29115__$1;
(statearr_29123_29152[(2)] = inst_29099);

(statearr_29123_29152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (6))){
var state_29115__$1 = state_29115;
var statearr_29124_29153 = state_29115__$1;
(statearr_29124_29153[(2)] = null);

(statearr_29124_29153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (17))){
var inst_29097 = (state_29115[(2)]);
var state_29115__$1 = state_29115;
var statearr_29125_29154 = state_29115__$1;
(statearr_29125_29154[(2)] = inst_29097);

(statearr_29125_29154[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (3))){
var inst_29113 = (state_29115[(2)]);
var state_29115__$1 = state_29115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29115__$1,inst_29113);
} else {
if((state_val_29116 === (12))){
var inst_29074 = (state_29115[(9)]);
var inst_29088 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29074,opts);
var state_29115__$1 = state_29115;
if(cljs.core.truth_(inst_29088)){
var statearr_29126_29155 = state_29115__$1;
(statearr_29126_29155[(1)] = (15));

} else {
var statearr_29127_29156 = state_29115__$1;
(statearr_29127_29156[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (2))){
var state_29115__$1 = state_29115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29115__$1,(4),ch);
} else {
if((state_val_29116 === (11))){
var inst_29075 = (state_29115[(8)]);
var inst_29080 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29081 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29075);
var inst_29082 = cljs.core.async.timeout.call(null,(1000));
var inst_29083 = [inst_29081,inst_29082];
var inst_29084 = (new cljs.core.PersistentVector(null,2,(5),inst_29080,inst_29083,null));
var state_29115__$1 = state_29115;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29115__$1,(14),inst_29084);
} else {
if((state_val_29116 === (9))){
var inst_29075 = (state_29115[(8)]);
var inst_29101 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29102 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29075);
var inst_29103 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29102);
var inst_29104 = [cljs.core.str("Not loading: "),cljs.core.str(inst_29103)].join('');
var inst_29105 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29104);
var state_29115__$1 = (function (){var statearr_29128 = state_29115;
(statearr_29128[(10)] = inst_29101);

return statearr_29128;
})();
var statearr_29129_29157 = state_29115__$1;
(statearr_29129_29157[(2)] = inst_29105);

(statearr_29129_29157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (5))){
var inst_29068 = (state_29115[(7)]);
var inst_29070 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29071 = (new cljs.core.PersistentArrayMap(null,2,inst_29070,null));
var inst_29072 = (new cljs.core.PersistentHashSet(null,inst_29071,null));
var inst_29073 = figwheel.client.focus_msgs.call(null,inst_29072,inst_29068);
var inst_29074 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29073);
var inst_29075 = cljs.core.first.call(null,inst_29073);
var inst_29076 = figwheel.client.autoload_QMARK_.call(null);
var state_29115__$1 = (function (){var statearr_29130 = state_29115;
(statearr_29130[(9)] = inst_29074);

(statearr_29130[(8)] = inst_29075);

return statearr_29130;
})();
if(cljs.core.truth_(inst_29076)){
var statearr_29131_29158 = state_29115__$1;
(statearr_29131_29158[(1)] = (8));

} else {
var statearr_29132_29159 = state_29115__$1;
(statearr_29132_29159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (14))){
var inst_29086 = (state_29115[(2)]);
var state_29115__$1 = state_29115;
var statearr_29133_29160 = state_29115__$1;
(statearr_29133_29160[(2)] = inst_29086);

(statearr_29133_29160[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (16))){
var state_29115__$1 = state_29115;
var statearr_29134_29161 = state_29115__$1;
(statearr_29134_29161[(2)] = null);

(statearr_29134_29161[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (10))){
var inst_29107 = (state_29115[(2)]);
var state_29115__$1 = (function (){var statearr_29135 = state_29115;
(statearr_29135[(11)] = inst_29107);

return statearr_29135;
})();
var statearr_29136_29162 = state_29115__$1;
(statearr_29136_29162[(2)] = null);

(statearr_29136_29162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (8))){
var inst_29074 = (state_29115[(9)]);
var inst_29078 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29074,opts);
var state_29115__$1 = state_29115;
if(cljs.core.truth_(inst_29078)){
var statearr_29137_29163 = state_29115__$1;
(statearr_29137_29163[(1)] = (11));

} else {
var statearr_29138_29164 = state_29115__$1;
(statearr_29138_29164[(1)] = (12));

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
});})(c__23143__auto___29146,ch))
;
return ((function (switch__23078__auto__,c__23143__auto___29146,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23079__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23079__auto____0 = (function (){
var statearr_29142 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29142[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23079__auto__);

(statearr_29142[(1)] = (1));

return statearr_29142;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23079__auto____1 = (function (state_29115){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_29115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e29143){if((e29143 instanceof Object)){
var ex__23082__auto__ = e29143;
var statearr_29144_29165 = state_29115;
(statearr_29144_29165[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29166 = state_29115;
state_29115 = G__29166;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23079__auto__ = function(state_29115){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23079__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23079__auto____1.call(this,state_29115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23079__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23079__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto___29146,ch))
})();
var state__23145__auto__ = (function (){var statearr_29145 = f__23144__auto__.call(null);
(statearr_29145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto___29146);

return statearr_29145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___29146,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29167_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29167_SHARP_));
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
var base_path_29174 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29174){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_29172 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29173 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_29172,_STAR_print_newline_STAR_29173,base_path_29174){
return (function() { 
var G__29175__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29175 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29176__i = 0, G__29176__a = new Array(arguments.length -  0);
while (G__29176__i < G__29176__a.length) {G__29176__a[G__29176__i] = arguments[G__29176__i + 0]; ++G__29176__i;}
  args = new cljs.core.IndexedSeq(G__29176__a,0);
} 
return G__29175__delegate.call(this,args);};
G__29175.cljs$lang$maxFixedArity = 0;
G__29175.cljs$lang$applyTo = (function (arglist__29177){
var args = cljs.core.seq(arglist__29177);
return G__29175__delegate(args);
});
G__29175.cljs$core$IFn$_invoke$arity$variadic = G__29175__delegate;
return G__29175;
})()
;})(_STAR_print_fn_STAR_29172,_STAR_print_newline_STAR_29173,base_path_29174))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29173;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29172;
}}catch (e29171){if((e29171 instanceof Error)){
var e = e29171;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29174], null));
} else {
var e = e29171;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29174))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29178){
var map__29185 = p__29178;
var map__29185__$1 = ((((!((map__29185 == null)))?((((map__29185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29185):map__29185);
var opts = map__29185__$1;
var build_id = cljs.core.get.call(null,map__29185__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29185,map__29185__$1,opts,build_id){
return (function (p__29187){
var vec__29188 = p__29187;
var map__29189 = cljs.core.nth.call(null,vec__29188,(0),null);
var map__29189__$1 = ((((!((map__29189 == null)))?((((map__29189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29189):map__29189);
var msg = map__29189__$1;
var msg_name = cljs.core.get.call(null,map__29189__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29188,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29188,map__29189,map__29189__$1,msg,msg_name,_,map__29185,map__29185__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29188,map__29189,map__29189__$1,msg,msg_name,_,map__29185,map__29185__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29185,map__29185__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29195){
var vec__29196 = p__29195;
var map__29197 = cljs.core.nth.call(null,vec__29196,(0),null);
var map__29197__$1 = ((((!((map__29197 == null)))?((((map__29197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29197):map__29197);
var msg = map__29197__$1;
var msg_name = cljs.core.get.call(null,map__29197__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29196,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29199){
var map__29209 = p__29199;
var map__29209__$1 = ((((!((map__29209 == null)))?((((map__29209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29209):map__29209);
var on_compile_warning = cljs.core.get.call(null,map__29209__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29209__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29209,map__29209__$1,on_compile_warning,on_compile_fail){
return (function (p__29211){
var vec__29212 = p__29211;
var map__29213 = cljs.core.nth.call(null,vec__29212,(0),null);
var map__29213__$1 = ((((!((map__29213 == null)))?((((map__29213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29213):map__29213);
var msg = map__29213__$1;
var msg_name = cljs.core.get.call(null,map__29213__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29212,(1));
var pred__29215 = cljs.core._EQ_;
var expr__29216 = msg_name;
if(cljs.core.truth_(pred__29215.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29216))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29215.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29216))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29209,map__29209__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto__,msg_hist,msg_names,msg){
return (function (state_29432){
var state_val_29433 = (state_29432[(1)]);
if((state_val_29433 === (7))){
var inst_29356 = (state_29432[(2)]);
var state_29432__$1 = state_29432;
if(cljs.core.truth_(inst_29356)){
var statearr_29434_29480 = state_29432__$1;
(statearr_29434_29480[(1)] = (8));

} else {
var statearr_29435_29481 = state_29432__$1;
(statearr_29435_29481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (20))){
var inst_29426 = (state_29432[(2)]);
var state_29432__$1 = state_29432;
var statearr_29436_29482 = state_29432__$1;
(statearr_29436_29482[(2)] = inst_29426);

(statearr_29436_29482[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (27))){
var inst_29422 = (state_29432[(2)]);
var state_29432__$1 = state_29432;
var statearr_29437_29483 = state_29432__$1;
(statearr_29437_29483[(2)] = inst_29422);

(statearr_29437_29483[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (1))){
var inst_29349 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29432__$1 = state_29432;
if(cljs.core.truth_(inst_29349)){
var statearr_29438_29484 = state_29432__$1;
(statearr_29438_29484[(1)] = (2));

} else {
var statearr_29439_29485 = state_29432__$1;
(statearr_29439_29485[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (24))){
var inst_29424 = (state_29432[(2)]);
var state_29432__$1 = state_29432;
var statearr_29440_29486 = state_29432__$1;
(statearr_29440_29486[(2)] = inst_29424);

(statearr_29440_29486[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (4))){
var inst_29430 = (state_29432[(2)]);
var state_29432__$1 = state_29432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29432__$1,inst_29430);
} else {
if((state_val_29433 === (15))){
var inst_29428 = (state_29432[(2)]);
var state_29432__$1 = state_29432;
var statearr_29441_29487 = state_29432__$1;
(statearr_29441_29487[(2)] = inst_29428);

(statearr_29441_29487[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (21))){
var inst_29387 = (state_29432[(2)]);
var state_29432__$1 = state_29432;
var statearr_29442_29488 = state_29432__$1;
(statearr_29442_29488[(2)] = inst_29387);

(statearr_29442_29488[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (31))){
var inst_29411 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29432__$1 = state_29432;
if(cljs.core.truth_(inst_29411)){
var statearr_29443_29489 = state_29432__$1;
(statearr_29443_29489[(1)] = (34));

} else {
var statearr_29444_29490 = state_29432__$1;
(statearr_29444_29490[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (32))){
var inst_29420 = (state_29432[(2)]);
var state_29432__$1 = state_29432;
var statearr_29445_29491 = state_29432__$1;
(statearr_29445_29491[(2)] = inst_29420);

(statearr_29445_29491[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (33))){
var inst_29409 = (state_29432[(2)]);
var state_29432__$1 = state_29432;
var statearr_29446_29492 = state_29432__$1;
(statearr_29446_29492[(2)] = inst_29409);

(statearr_29446_29492[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (13))){
var inst_29370 = figwheel.client.heads_up.clear.call(null);
var state_29432__$1 = state_29432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29432__$1,(16),inst_29370);
} else {
if((state_val_29433 === (22))){
var inst_29391 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29392 = figwheel.client.heads_up.append_message.call(null,inst_29391);
var state_29432__$1 = state_29432;
var statearr_29447_29493 = state_29432__$1;
(statearr_29447_29493[(2)] = inst_29392);

(statearr_29447_29493[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (36))){
var inst_29418 = (state_29432[(2)]);
var state_29432__$1 = state_29432;
var statearr_29448_29494 = state_29432__$1;
(statearr_29448_29494[(2)] = inst_29418);

(statearr_29448_29494[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (29))){
var inst_29402 = (state_29432[(2)]);
var state_29432__$1 = state_29432;
var statearr_29449_29495 = state_29432__$1;
(statearr_29449_29495[(2)] = inst_29402);

(statearr_29449_29495[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (6))){
var inst_29351 = (state_29432[(7)]);
var state_29432__$1 = state_29432;
var statearr_29450_29496 = state_29432__$1;
(statearr_29450_29496[(2)] = inst_29351);

(statearr_29450_29496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (28))){
var inst_29398 = (state_29432[(2)]);
var inst_29399 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29400 = figwheel.client.heads_up.display_warning.call(null,inst_29399);
var state_29432__$1 = (function (){var statearr_29451 = state_29432;
(statearr_29451[(8)] = inst_29398);

return statearr_29451;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29432__$1,(29),inst_29400);
} else {
if((state_val_29433 === (25))){
var inst_29396 = figwheel.client.heads_up.clear.call(null);
var state_29432__$1 = state_29432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29432__$1,(28),inst_29396);
} else {
if((state_val_29433 === (34))){
var inst_29413 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29432__$1 = state_29432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29432__$1,(37),inst_29413);
} else {
if((state_val_29433 === (17))){
var inst_29378 = (state_29432[(2)]);
var state_29432__$1 = state_29432;
var statearr_29452_29497 = state_29432__$1;
(statearr_29452_29497[(2)] = inst_29378);

(statearr_29452_29497[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (3))){
var inst_29368 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29432__$1 = state_29432;
if(cljs.core.truth_(inst_29368)){
var statearr_29453_29498 = state_29432__$1;
(statearr_29453_29498[(1)] = (13));

} else {
var statearr_29454_29499 = state_29432__$1;
(statearr_29454_29499[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (12))){
var inst_29364 = (state_29432[(2)]);
var state_29432__$1 = state_29432;
var statearr_29455_29500 = state_29432__$1;
(statearr_29455_29500[(2)] = inst_29364);

(statearr_29455_29500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (2))){
var inst_29351 = (state_29432[(7)]);
var inst_29351__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29432__$1 = (function (){var statearr_29456 = state_29432;
(statearr_29456[(7)] = inst_29351__$1);

return statearr_29456;
})();
if(cljs.core.truth_(inst_29351__$1)){
var statearr_29457_29501 = state_29432__$1;
(statearr_29457_29501[(1)] = (5));

} else {
var statearr_29458_29502 = state_29432__$1;
(statearr_29458_29502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (23))){
var inst_29394 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29432__$1 = state_29432;
if(cljs.core.truth_(inst_29394)){
var statearr_29459_29503 = state_29432__$1;
(statearr_29459_29503[(1)] = (25));

} else {
var statearr_29460_29504 = state_29432__$1;
(statearr_29460_29504[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (35))){
var state_29432__$1 = state_29432;
var statearr_29461_29505 = state_29432__$1;
(statearr_29461_29505[(2)] = null);

(statearr_29461_29505[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (19))){
var inst_29389 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29432__$1 = state_29432;
if(cljs.core.truth_(inst_29389)){
var statearr_29462_29506 = state_29432__$1;
(statearr_29462_29506[(1)] = (22));

} else {
var statearr_29463_29507 = state_29432__$1;
(statearr_29463_29507[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (11))){
var inst_29360 = (state_29432[(2)]);
var state_29432__$1 = state_29432;
var statearr_29464_29508 = state_29432__$1;
(statearr_29464_29508[(2)] = inst_29360);

(statearr_29464_29508[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (9))){
var inst_29362 = figwheel.client.heads_up.clear.call(null);
var state_29432__$1 = state_29432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29432__$1,(12),inst_29362);
} else {
if((state_val_29433 === (5))){
var inst_29353 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29432__$1 = state_29432;
var statearr_29465_29509 = state_29432__$1;
(statearr_29465_29509[(2)] = inst_29353);

(statearr_29465_29509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (14))){
var inst_29380 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29432__$1 = state_29432;
if(cljs.core.truth_(inst_29380)){
var statearr_29466_29510 = state_29432__$1;
(statearr_29466_29510[(1)] = (18));

} else {
var statearr_29467_29511 = state_29432__$1;
(statearr_29467_29511[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (26))){
var inst_29404 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29432__$1 = state_29432;
if(cljs.core.truth_(inst_29404)){
var statearr_29468_29512 = state_29432__$1;
(statearr_29468_29512[(1)] = (30));

} else {
var statearr_29469_29513 = state_29432__$1;
(statearr_29469_29513[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (16))){
var inst_29372 = (state_29432[(2)]);
var inst_29373 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29374 = figwheel.client.format_messages.call(null,inst_29373);
var inst_29375 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29376 = figwheel.client.heads_up.display_error.call(null,inst_29374,inst_29375);
var state_29432__$1 = (function (){var statearr_29470 = state_29432;
(statearr_29470[(9)] = inst_29372);

return statearr_29470;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29432__$1,(17),inst_29376);
} else {
if((state_val_29433 === (30))){
var inst_29406 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29407 = figwheel.client.heads_up.display_warning.call(null,inst_29406);
var state_29432__$1 = state_29432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29432__$1,(33),inst_29407);
} else {
if((state_val_29433 === (10))){
var inst_29366 = (state_29432[(2)]);
var state_29432__$1 = state_29432;
var statearr_29471_29514 = state_29432__$1;
(statearr_29471_29514[(2)] = inst_29366);

(statearr_29471_29514[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (18))){
var inst_29382 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29383 = figwheel.client.format_messages.call(null,inst_29382);
var inst_29384 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29385 = figwheel.client.heads_up.display_error.call(null,inst_29383,inst_29384);
var state_29432__$1 = state_29432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29432__$1,(21),inst_29385);
} else {
if((state_val_29433 === (37))){
var inst_29415 = (state_29432[(2)]);
var state_29432__$1 = state_29432;
var statearr_29472_29515 = state_29432__$1;
(statearr_29472_29515[(2)] = inst_29415);

(statearr_29472_29515[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29433 === (8))){
var inst_29358 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29432__$1 = state_29432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29432__$1,(11),inst_29358);
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
});})(c__23143__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23078__auto__,c__23143__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23079__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23079__auto____0 = (function (){
var statearr_29476 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29476[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23079__auto__);

(statearr_29476[(1)] = (1));

return statearr_29476;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23079__auto____1 = (function (state_29432){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_29432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e29477){if((e29477 instanceof Object)){
var ex__23082__auto__ = e29477;
var statearr_29478_29516 = state_29432;
(statearr_29478_29516[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29517 = state_29432;
state_29432 = G__29517;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23079__auto__ = function(state_29432){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23079__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23079__auto____1.call(this,state_29432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23079__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23079__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto__,msg_hist,msg_names,msg))
})();
var state__23145__auto__ = (function (){var statearr_29479 = f__23144__auto__.call(null);
(statearr_29479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto__);

return statearr_29479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto__,msg_hist,msg_names,msg))
);

return c__23143__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23143__auto___29580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto___29580,ch){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto___29580,ch){
return (function (state_29563){
var state_val_29564 = (state_29563[(1)]);
if((state_val_29564 === (1))){
var state_29563__$1 = state_29563;
var statearr_29565_29581 = state_29563__$1;
(statearr_29565_29581[(2)] = null);

(statearr_29565_29581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (2))){
var state_29563__$1 = state_29563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29563__$1,(4),ch);
} else {
if((state_val_29564 === (3))){
var inst_29561 = (state_29563[(2)]);
var state_29563__$1 = state_29563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29563__$1,inst_29561);
} else {
if((state_val_29564 === (4))){
var inst_29551 = (state_29563[(7)]);
var inst_29551__$1 = (state_29563[(2)]);
var state_29563__$1 = (function (){var statearr_29566 = state_29563;
(statearr_29566[(7)] = inst_29551__$1);

return statearr_29566;
})();
if(cljs.core.truth_(inst_29551__$1)){
var statearr_29567_29582 = state_29563__$1;
(statearr_29567_29582[(1)] = (5));

} else {
var statearr_29568_29583 = state_29563__$1;
(statearr_29568_29583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (5))){
var inst_29551 = (state_29563[(7)]);
var inst_29553 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29551);
var state_29563__$1 = state_29563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29563__$1,(8),inst_29553);
} else {
if((state_val_29564 === (6))){
var state_29563__$1 = state_29563;
var statearr_29569_29584 = state_29563__$1;
(statearr_29569_29584[(2)] = null);

(statearr_29569_29584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (7))){
var inst_29559 = (state_29563[(2)]);
var state_29563__$1 = state_29563;
var statearr_29570_29585 = state_29563__$1;
(statearr_29570_29585[(2)] = inst_29559);

(statearr_29570_29585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (8))){
var inst_29555 = (state_29563[(2)]);
var state_29563__$1 = (function (){var statearr_29571 = state_29563;
(statearr_29571[(8)] = inst_29555);

return statearr_29571;
})();
var statearr_29572_29586 = state_29563__$1;
(statearr_29572_29586[(2)] = null);

(statearr_29572_29586[(1)] = (2));


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
});})(c__23143__auto___29580,ch))
;
return ((function (switch__23078__auto__,c__23143__auto___29580,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23079__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23079__auto____0 = (function (){
var statearr_29576 = [null,null,null,null,null,null,null,null,null];
(statearr_29576[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23079__auto__);

(statearr_29576[(1)] = (1));

return statearr_29576;
});
var figwheel$client$heads_up_plugin_$_state_machine__23079__auto____1 = (function (state_29563){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_29563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e29577){if((e29577 instanceof Object)){
var ex__23082__auto__ = e29577;
var statearr_29578_29587 = state_29563;
(statearr_29578_29587[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29588 = state_29563;
state_29563 = G__29588;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23079__auto__ = function(state_29563){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23079__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23079__auto____1.call(this,state_29563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23079__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23079__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto___29580,ch))
})();
var state__23145__auto__ = (function (){var statearr_29579 = f__23144__auto__.call(null);
(statearr_29579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto___29580);

return statearr_29579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto___29580,ch))
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
var c__23143__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23143__auto__){
return (function (){
var f__23144__auto__ = (function (){var switch__23078__auto__ = ((function (c__23143__auto__){
return (function (state_29609){
var state_val_29610 = (state_29609[(1)]);
if((state_val_29610 === (1))){
var inst_29604 = cljs.core.async.timeout.call(null,(3000));
var state_29609__$1 = state_29609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29609__$1,(2),inst_29604);
} else {
if((state_val_29610 === (2))){
var inst_29606 = (state_29609[(2)]);
var inst_29607 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29609__$1 = (function (){var statearr_29611 = state_29609;
(statearr_29611[(7)] = inst_29606);

return statearr_29611;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29609__$1,inst_29607);
} else {
return null;
}
}
});})(c__23143__auto__))
;
return ((function (switch__23078__auto__,c__23143__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23079__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23079__auto____0 = (function (){
var statearr_29615 = [null,null,null,null,null,null,null,null];
(statearr_29615[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23079__auto__);

(statearr_29615[(1)] = (1));

return statearr_29615;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23079__auto____1 = (function (state_29609){
while(true){
var ret_value__23080__auto__ = (function (){try{while(true){
var result__23081__auto__ = switch__23078__auto__.call(null,state_29609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23081__auto__;
}
break;
}
}catch (e29616){if((e29616 instanceof Object)){
var ex__23082__auto__ = e29616;
var statearr_29617_29619 = state_29609;
(statearr_29617_29619[(5)] = ex__23082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29620 = state_29609;
state_29609 = G__29620;
continue;
} else {
return ret_value__23080__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23079__auto__ = function(state_29609){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23079__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23079__auto____1.call(this,state_29609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23079__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23079__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23079__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23079__auto__;
})()
;})(switch__23078__auto__,c__23143__auto__))
})();
var state__23145__auto__ = (function (){var statearr_29618 = f__23144__auto__.call(null);
(statearr_29618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23143__auto__);

return statearr_29618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23145__auto__);
});})(c__23143__auto__))
);

return c__23143__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29621){
var map__29628 = p__29621;
var map__29628__$1 = ((((!((map__29628 == null)))?((((map__29628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29628):map__29628);
var ed = map__29628__$1;
var formatted_exception = cljs.core.get.call(null,map__29628__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29628__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29628__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29630_29634 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29631_29635 = null;
var count__29632_29636 = (0);
var i__29633_29637 = (0);
while(true){
if((i__29633_29637 < count__29632_29636)){
var msg_29638 = cljs.core._nth.call(null,chunk__29631_29635,i__29633_29637);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29638);

var G__29639 = seq__29630_29634;
var G__29640 = chunk__29631_29635;
var G__29641 = count__29632_29636;
var G__29642 = (i__29633_29637 + (1));
seq__29630_29634 = G__29639;
chunk__29631_29635 = G__29640;
count__29632_29636 = G__29641;
i__29633_29637 = G__29642;
continue;
} else {
var temp__4425__auto___29643 = cljs.core.seq.call(null,seq__29630_29634);
if(temp__4425__auto___29643){
var seq__29630_29644__$1 = temp__4425__auto___29643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29630_29644__$1)){
var c__16916__auto___29645 = cljs.core.chunk_first.call(null,seq__29630_29644__$1);
var G__29646 = cljs.core.chunk_rest.call(null,seq__29630_29644__$1);
var G__29647 = c__16916__auto___29645;
var G__29648 = cljs.core.count.call(null,c__16916__auto___29645);
var G__29649 = (0);
seq__29630_29634 = G__29646;
chunk__29631_29635 = G__29647;
count__29632_29636 = G__29648;
i__29633_29637 = G__29649;
continue;
} else {
var msg_29650 = cljs.core.first.call(null,seq__29630_29644__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29650);

var G__29651 = cljs.core.next.call(null,seq__29630_29644__$1);
var G__29652 = null;
var G__29653 = (0);
var G__29654 = (0);
seq__29630_29634 = G__29651;
chunk__29631_29635 = G__29652;
count__29632_29636 = G__29653;
i__29633_29637 = G__29654;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29655){
var map__29658 = p__29655;
var map__29658__$1 = ((((!((map__29658 == null)))?((((map__29658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29658):map__29658);
var w = map__29658__$1;
var message = cljs.core.get.call(null,map__29658__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__16101__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16101__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16101__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29666 = cljs.core.seq.call(null,plugins);
var chunk__29667 = null;
var count__29668 = (0);
var i__29669 = (0);
while(true){
if((i__29669 < count__29668)){
var vec__29670 = cljs.core._nth.call(null,chunk__29667,i__29669);
var k = cljs.core.nth.call(null,vec__29670,(0),null);
var plugin = cljs.core.nth.call(null,vec__29670,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29672 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29666,chunk__29667,count__29668,i__29669,pl_29672,vec__29670,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29672.call(null,msg_hist);
});})(seq__29666,chunk__29667,count__29668,i__29669,pl_29672,vec__29670,k,plugin))
);
} else {
}

var G__29673 = seq__29666;
var G__29674 = chunk__29667;
var G__29675 = count__29668;
var G__29676 = (i__29669 + (1));
seq__29666 = G__29673;
chunk__29667 = G__29674;
count__29668 = G__29675;
i__29669 = G__29676;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29666);
if(temp__4425__auto__){
var seq__29666__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29666__$1)){
var c__16916__auto__ = cljs.core.chunk_first.call(null,seq__29666__$1);
var G__29677 = cljs.core.chunk_rest.call(null,seq__29666__$1);
var G__29678 = c__16916__auto__;
var G__29679 = cljs.core.count.call(null,c__16916__auto__);
var G__29680 = (0);
seq__29666 = G__29677;
chunk__29667 = G__29678;
count__29668 = G__29679;
i__29669 = G__29680;
continue;
} else {
var vec__29671 = cljs.core.first.call(null,seq__29666__$1);
var k = cljs.core.nth.call(null,vec__29671,(0),null);
var plugin = cljs.core.nth.call(null,vec__29671,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29681 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29666,chunk__29667,count__29668,i__29669,pl_29681,vec__29671,k,plugin,seq__29666__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29681.call(null,msg_hist);
});})(seq__29666,chunk__29667,count__29668,i__29669,pl_29681,vec__29671,k,plugin,seq__29666__$1,temp__4425__auto__))
);
} else {
}

var G__29682 = cljs.core.next.call(null,seq__29666__$1);
var G__29683 = null;
var G__29684 = (0);
var G__29685 = (0);
seq__29666 = G__29682;
chunk__29667 = G__29683;
count__29668 = G__29684;
i__29669 = G__29685;
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
var args29686 = [];
var len__17171__auto___29689 = arguments.length;
var i__17172__auto___29690 = (0);
while(true){
if((i__17172__auto___29690 < len__17171__auto___29689)){
args29686.push((arguments[i__17172__auto___29690]));

var G__29691 = (i__17172__auto___29690 + (1));
i__17172__auto___29690 = G__29691;
continue;
} else {
}
break;
}

var G__29688 = args29686.length;
switch (G__29688) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29686.length)].join('')));

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
var args__17178__auto__ = [];
var len__17171__auto___29697 = arguments.length;
var i__17172__auto___29698 = (0);
while(true){
if((i__17172__auto___29698 < len__17171__auto___29697)){
args__17178__auto__.push((arguments[i__17172__auto___29698]));

var G__29699 = (i__17172__auto___29698 + (1));
i__17172__auto___29698 = G__29699;
continue;
} else {
}
break;
}

var argseq__17179__auto__ = ((((0) < args__17178__auto__.length))?(new cljs.core.IndexedSeq(args__17178__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17179__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29694){
var map__29695 = p__29694;
var map__29695__$1 = ((((!((map__29695 == null)))?((((map__29695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29695):map__29695);
var opts = map__29695__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29693){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29693));
});

//# sourceMappingURL=client.js.map?rel=1448902876981