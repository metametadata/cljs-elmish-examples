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
var pred__28839 = cljs.core._EQ_;
var expr__28840 = (function (){var or__16074__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16074__auto__)){
return or__16074__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28839.call(null,"true",expr__28840))){
return true;
} else {
if(cljs.core.truth_(pred__28839.call(null,"false",expr__28840))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28840)].join('')));
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
var G__28842__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28842 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28843__i = 0, G__28843__a = new Array(arguments.length -  0);
while (G__28843__i < G__28843__a.length) {G__28843__a[G__28843__i] = arguments[G__28843__i + 0]; ++G__28843__i;}
  args = new cljs.core.IndexedSeq(G__28843__a,0);
} 
return G__28842__delegate.call(this,args);};
G__28842.cljs$lang$maxFixedArity = 0;
G__28842.cljs$lang$applyTo = (function (arglist__28844){
var args = cljs.core.seq(arglist__28844);
return G__28842__delegate(args);
});
G__28842.cljs$core$IFn$_invoke$arity$variadic = G__28842__delegate;
return G__28842;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28845){
var map__28848 = p__28845;
var map__28848__$1 = ((((!((map__28848 == null)))?((((map__28848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28848):map__28848);
var message = cljs.core.get.call(null,map__28848__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28848__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16074__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16074__auto__)){
return or__16074__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16062__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16062__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16062__auto__;
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
var c__23057__auto___29010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23057__auto___29010,ch){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (c__23057__auto___29010,ch){
return (function (state_28979){
var state_val_28980 = (state_28979[(1)]);
if((state_val_28980 === (7))){
var inst_28975 = (state_28979[(2)]);
var state_28979__$1 = state_28979;
var statearr_28981_29011 = state_28979__$1;
(statearr_28981_29011[(2)] = inst_28975);

(statearr_28981_29011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (1))){
var state_28979__$1 = state_28979;
var statearr_28982_29012 = state_28979__$1;
(statearr_28982_29012[(2)] = null);

(statearr_28982_29012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (4))){
var inst_28932 = (state_28979[(7)]);
var inst_28932__$1 = (state_28979[(2)]);
var state_28979__$1 = (function (){var statearr_28983 = state_28979;
(statearr_28983[(7)] = inst_28932__$1);

return statearr_28983;
})();
if(cljs.core.truth_(inst_28932__$1)){
var statearr_28984_29013 = state_28979__$1;
(statearr_28984_29013[(1)] = (5));

} else {
var statearr_28985_29014 = state_28979__$1;
(statearr_28985_29014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (15))){
var inst_28939 = (state_28979[(8)]);
var inst_28954 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28939);
var inst_28955 = cljs.core.first.call(null,inst_28954);
var inst_28956 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28955);
var inst_28957 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28956)].join('');
var inst_28958 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28957);
var state_28979__$1 = state_28979;
var statearr_28986_29015 = state_28979__$1;
(statearr_28986_29015[(2)] = inst_28958);

(statearr_28986_29015[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (13))){
var inst_28963 = (state_28979[(2)]);
var state_28979__$1 = state_28979;
var statearr_28987_29016 = state_28979__$1;
(statearr_28987_29016[(2)] = inst_28963);

(statearr_28987_29016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (6))){
var state_28979__$1 = state_28979;
var statearr_28988_29017 = state_28979__$1;
(statearr_28988_29017[(2)] = null);

(statearr_28988_29017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (17))){
var inst_28961 = (state_28979[(2)]);
var state_28979__$1 = state_28979;
var statearr_28989_29018 = state_28979__$1;
(statearr_28989_29018[(2)] = inst_28961);

(statearr_28989_29018[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (3))){
var inst_28977 = (state_28979[(2)]);
var state_28979__$1 = state_28979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28979__$1,inst_28977);
} else {
if((state_val_28980 === (12))){
var inst_28938 = (state_28979[(9)]);
var inst_28952 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28938,opts);
var state_28979__$1 = state_28979;
if(cljs.core.truth_(inst_28952)){
var statearr_28990_29019 = state_28979__$1;
(statearr_28990_29019[(1)] = (15));

} else {
var statearr_28991_29020 = state_28979__$1;
(statearr_28991_29020[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (2))){
var state_28979__$1 = state_28979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28979__$1,(4),ch);
} else {
if((state_val_28980 === (11))){
var inst_28939 = (state_28979[(8)]);
var inst_28944 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28945 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28939);
var inst_28946 = cljs.core.async.timeout.call(null,(1000));
var inst_28947 = [inst_28945,inst_28946];
var inst_28948 = (new cljs.core.PersistentVector(null,2,(5),inst_28944,inst_28947,null));
var state_28979__$1 = state_28979;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28979__$1,(14),inst_28948);
} else {
if((state_val_28980 === (9))){
var inst_28939 = (state_28979[(8)]);
var inst_28965 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28966 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28939);
var inst_28967 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28966);
var inst_28968 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28967)].join('');
var inst_28969 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28968);
var state_28979__$1 = (function (){var statearr_28992 = state_28979;
(statearr_28992[(10)] = inst_28965);

return statearr_28992;
})();
var statearr_28993_29021 = state_28979__$1;
(statearr_28993_29021[(2)] = inst_28969);

(statearr_28993_29021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (5))){
var inst_28932 = (state_28979[(7)]);
var inst_28934 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28935 = (new cljs.core.PersistentArrayMap(null,2,inst_28934,null));
var inst_28936 = (new cljs.core.PersistentHashSet(null,inst_28935,null));
var inst_28937 = figwheel.client.focus_msgs.call(null,inst_28936,inst_28932);
var inst_28938 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28937);
var inst_28939 = cljs.core.first.call(null,inst_28937);
var inst_28940 = figwheel.client.autoload_QMARK_.call(null);
var state_28979__$1 = (function (){var statearr_28994 = state_28979;
(statearr_28994[(9)] = inst_28938);

(statearr_28994[(8)] = inst_28939);

return statearr_28994;
})();
if(cljs.core.truth_(inst_28940)){
var statearr_28995_29022 = state_28979__$1;
(statearr_28995_29022[(1)] = (8));

} else {
var statearr_28996_29023 = state_28979__$1;
(statearr_28996_29023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (14))){
var inst_28950 = (state_28979[(2)]);
var state_28979__$1 = state_28979;
var statearr_28997_29024 = state_28979__$1;
(statearr_28997_29024[(2)] = inst_28950);

(statearr_28997_29024[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (16))){
var state_28979__$1 = state_28979;
var statearr_28998_29025 = state_28979__$1;
(statearr_28998_29025[(2)] = null);

(statearr_28998_29025[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (10))){
var inst_28971 = (state_28979[(2)]);
var state_28979__$1 = (function (){var statearr_28999 = state_28979;
(statearr_28999[(11)] = inst_28971);

return statearr_28999;
})();
var statearr_29000_29026 = state_28979__$1;
(statearr_29000_29026[(2)] = null);

(statearr_29000_29026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (8))){
var inst_28938 = (state_28979[(9)]);
var inst_28942 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28938,opts);
var state_28979__$1 = state_28979;
if(cljs.core.truth_(inst_28942)){
var statearr_29001_29027 = state_28979__$1;
(statearr_29001_29027[(1)] = (11));

} else {
var statearr_29002_29028 = state_28979__$1;
(statearr_29002_29028[(1)] = (12));

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
});})(c__23057__auto___29010,ch))
;
return ((function (switch__22992__auto__,c__23057__auto___29010,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22993__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22993__auto____0 = (function (){
var statearr_29006 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29006[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22993__auto__);

(statearr_29006[(1)] = (1));

return statearr_29006;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22993__auto____1 = (function (state_28979){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_28979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e29007){if((e29007 instanceof Object)){
var ex__22996__auto__ = e29007;
var statearr_29008_29029 = state_28979;
(statearr_29008_29029[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29030 = state_28979;
state_28979 = G__29030;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22993__auto__ = function(state_28979){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22993__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22993__auto____1.call(this,state_28979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22993__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22993__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22993__auto__;
})()
;})(switch__22992__auto__,c__23057__auto___29010,ch))
})();
var state__23059__auto__ = (function (){var statearr_29009 = f__23058__auto__.call(null);
(statearr_29009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto___29010);

return statearr_29009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(c__23057__auto___29010,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29031_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29031_SHARP_));
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
var base_path_29038 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29038){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_29036 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29037 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_29036,_STAR_print_newline_STAR_29037,base_path_29038){
return (function() { 
var G__29039__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29039 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29040__i = 0, G__29040__a = new Array(arguments.length -  0);
while (G__29040__i < G__29040__a.length) {G__29040__a[G__29040__i] = arguments[G__29040__i + 0]; ++G__29040__i;}
  args = new cljs.core.IndexedSeq(G__29040__a,0);
} 
return G__29039__delegate.call(this,args);};
G__29039.cljs$lang$maxFixedArity = 0;
G__29039.cljs$lang$applyTo = (function (arglist__29041){
var args = cljs.core.seq(arglist__29041);
return G__29039__delegate(args);
});
G__29039.cljs$core$IFn$_invoke$arity$variadic = G__29039__delegate;
return G__29039;
})()
;})(_STAR_print_fn_STAR_29036,_STAR_print_newline_STAR_29037,base_path_29038))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29037;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29036;
}}catch (e29035){if((e29035 instanceof Error)){
var e = e29035;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29038], null));
} else {
var e = e29035;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29038))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29042){
var map__29049 = p__29042;
var map__29049__$1 = ((((!((map__29049 == null)))?((((map__29049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29049):map__29049);
var opts = map__29049__$1;
var build_id = cljs.core.get.call(null,map__29049__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29049,map__29049__$1,opts,build_id){
return (function (p__29051){
var vec__29052 = p__29051;
var map__29053 = cljs.core.nth.call(null,vec__29052,(0),null);
var map__29053__$1 = ((((!((map__29053 == null)))?((((map__29053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29053):map__29053);
var msg = map__29053__$1;
var msg_name = cljs.core.get.call(null,map__29053__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29052,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29052,map__29053,map__29053__$1,msg,msg_name,_,map__29049,map__29049__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29052,map__29053,map__29053__$1,msg,msg_name,_,map__29049,map__29049__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29049,map__29049__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29059){
var vec__29060 = p__29059;
var map__29061 = cljs.core.nth.call(null,vec__29060,(0),null);
var map__29061__$1 = ((((!((map__29061 == null)))?((((map__29061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29061):map__29061);
var msg = map__29061__$1;
var msg_name = cljs.core.get.call(null,map__29061__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29060,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29063){
var map__29073 = p__29063;
var map__29073__$1 = ((((!((map__29073 == null)))?((((map__29073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29073):map__29073);
var on_compile_warning = cljs.core.get.call(null,map__29073__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29073__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29073,map__29073__$1,on_compile_warning,on_compile_fail){
return (function (p__29075){
var vec__29076 = p__29075;
var map__29077 = cljs.core.nth.call(null,vec__29076,(0),null);
var map__29077__$1 = ((((!((map__29077 == null)))?((((map__29077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29077):map__29077);
var msg = map__29077__$1;
var msg_name = cljs.core.get.call(null,map__29077__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29076,(1));
var pred__29079 = cljs.core._EQ_;
var expr__29080 = msg_name;
if(cljs.core.truth_(pred__29079.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29080))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29079.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29080))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29073,map__29073__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23057__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23057__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (c__23057__auto__,msg_hist,msg_names,msg){
return (function (state_29296){
var state_val_29297 = (state_29296[(1)]);
if((state_val_29297 === (7))){
var inst_29220 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
if(cljs.core.truth_(inst_29220)){
var statearr_29298_29344 = state_29296__$1;
(statearr_29298_29344[(1)] = (8));

} else {
var statearr_29299_29345 = state_29296__$1;
(statearr_29299_29345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (20))){
var inst_29290 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
var statearr_29300_29346 = state_29296__$1;
(statearr_29300_29346[(2)] = inst_29290);

(statearr_29300_29346[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (27))){
var inst_29286 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
var statearr_29301_29347 = state_29296__$1;
(statearr_29301_29347[(2)] = inst_29286);

(statearr_29301_29347[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (1))){
var inst_29213 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29296__$1 = state_29296;
if(cljs.core.truth_(inst_29213)){
var statearr_29302_29348 = state_29296__$1;
(statearr_29302_29348[(1)] = (2));

} else {
var statearr_29303_29349 = state_29296__$1;
(statearr_29303_29349[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (24))){
var inst_29288 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
var statearr_29304_29350 = state_29296__$1;
(statearr_29304_29350[(2)] = inst_29288);

(statearr_29304_29350[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (4))){
var inst_29294 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29296__$1,inst_29294);
} else {
if((state_val_29297 === (15))){
var inst_29292 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
var statearr_29305_29351 = state_29296__$1;
(statearr_29305_29351[(2)] = inst_29292);

(statearr_29305_29351[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (21))){
var inst_29251 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
var statearr_29306_29352 = state_29296__$1;
(statearr_29306_29352[(2)] = inst_29251);

(statearr_29306_29352[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (31))){
var inst_29275 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29296__$1 = state_29296;
if(cljs.core.truth_(inst_29275)){
var statearr_29307_29353 = state_29296__$1;
(statearr_29307_29353[(1)] = (34));

} else {
var statearr_29308_29354 = state_29296__$1;
(statearr_29308_29354[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (32))){
var inst_29284 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
var statearr_29309_29355 = state_29296__$1;
(statearr_29309_29355[(2)] = inst_29284);

(statearr_29309_29355[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (33))){
var inst_29273 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
var statearr_29310_29356 = state_29296__$1;
(statearr_29310_29356[(2)] = inst_29273);

(statearr_29310_29356[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (13))){
var inst_29234 = figwheel.client.heads_up.clear.call(null);
var state_29296__$1 = state_29296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29296__$1,(16),inst_29234);
} else {
if((state_val_29297 === (22))){
var inst_29255 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29256 = figwheel.client.heads_up.append_message.call(null,inst_29255);
var state_29296__$1 = state_29296;
var statearr_29311_29357 = state_29296__$1;
(statearr_29311_29357[(2)] = inst_29256);

(statearr_29311_29357[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (36))){
var inst_29282 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
var statearr_29312_29358 = state_29296__$1;
(statearr_29312_29358[(2)] = inst_29282);

(statearr_29312_29358[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (29))){
var inst_29266 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
var statearr_29313_29359 = state_29296__$1;
(statearr_29313_29359[(2)] = inst_29266);

(statearr_29313_29359[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (6))){
var inst_29215 = (state_29296[(7)]);
var state_29296__$1 = state_29296;
var statearr_29314_29360 = state_29296__$1;
(statearr_29314_29360[(2)] = inst_29215);

(statearr_29314_29360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (28))){
var inst_29262 = (state_29296[(2)]);
var inst_29263 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29264 = figwheel.client.heads_up.display_warning.call(null,inst_29263);
var state_29296__$1 = (function (){var statearr_29315 = state_29296;
(statearr_29315[(8)] = inst_29262);

return statearr_29315;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29296__$1,(29),inst_29264);
} else {
if((state_val_29297 === (25))){
var inst_29260 = figwheel.client.heads_up.clear.call(null);
var state_29296__$1 = state_29296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29296__$1,(28),inst_29260);
} else {
if((state_val_29297 === (34))){
var inst_29277 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29296__$1 = state_29296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29296__$1,(37),inst_29277);
} else {
if((state_val_29297 === (17))){
var inst_29242 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
var statearr_29316_29361 = state_29296__$1;
(statearr_29316_29361[(2)] = inst_29242);

(statearr_29316_29361[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (3))){
var inst_29232 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29296__$1 = state_29296;
if(cljs.core.truth_(inst_29232)){
var statearr_29317_29362 = state_29296__$1;
(statearr_29317_29362[(1)] = (13));

} else {
var statearr_29318_29363 = state_29296__$1;
(statearr_29318_29363[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (12))){
var inst_29228 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
var statearr_29319_29364 = state_29296__$1;
(statearr_29319_29364[(2)] = inst_29228);

(statearr_29319_29364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (2))){
var inst_29215 = (state_29296[(7)]);
var inst_29215__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29296__$1 = (function (){var statearr_29320 = state_29296;
(statearr_29320[(7)] = inst_29215__$1);

return statearr_29320;
})();
if(cljs.core.truth_(inst_29215__$1)){
var statearr_29321_29365 = state_29296__$1;
(statearr_29321_29365[(1)] = (5));

} else {
var statearr_29322_29366 = state_29296__$1;
(statearr_29322_29366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (23))){
var inst_29258 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29296__$1 = state_29296;
if(cljs.core.truth_(inst_29258)){
var statearr_29323_29367 = state_29296__$1;
(statearr_29323_29367[(1)] = (25));

} else {
var statearr_29324_29368 = state_29296__$1;
(statearr_29324_29368[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (35))){
var state_29296__$1 = state_29296;
var statearr_29325_29369 = state_29296__$1;
(statearr_29325_29369[(2)] = null);

(statearr_29325_29369[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (19))){
var inst_29253 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29296__$1 = state_29296;
if(cljs.core.truth_(inst_29253)){
var statearr_29326_29370 = state_29296__$1;
(statearr_29326_29370[(1)] = (22));

} else {
var statearr_29327_29371 = state_29296__$1;
(statearr_29327_29371[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (11))){
var inst_29224 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
var statearr_29328_29372 = state_29296__$1;
(statearr_29328_29372[(2)] = inst_29224);

(statearr_29328_29372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (9))){
var inst_29226 = figwheel.client.heads_up.clear.call(null);
var state_29296__$1 = state_29296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29296__$1,(12),inst_29226);
} else {
if((state_val_29297 === (5))){
var inst_29217 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29296__$1 = state_29296;
var statearr_29329_29373 = state_29296__$1;
(statearr_29329_29373[(2)] = inst_29217);

(statearr_29329_29373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (14))){
var inst_29244 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29296__$1 = state_29296;
if(cljs.core.truth_(inst_29244)){
var statearr_29330_29374 = state_29296__$1;
(statearr_29330_29374[(1)] = (18));

} else {
var statearr_29331_29375 = state_29296__$1;
(statearr_29331_29375[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (26))){
var inst_29268 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29296__$1 = state_29296;
if(cljs.core.truth_(inst_29268)){
var statearr_29332_29376 = state_29296__$1;
(statearr_29332_29376[(1)] = (30));

} else {
var statearr_29333_29377 = state_29296__$1;
(statearr_29333_29377[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (16))){
var inst_29236 = (state_29296[(2)]);
var inst_29237 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29238 = figwheel.client.format_messages.call(null,inst_29237);
var inst_29239 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29240 = figwheel.client.heads_up.display_error.call(null,inst_29238,inst_29239);
var state_29296__$1 = (function (){var statearr_29334 = state_29296;
(statearr_29334[(9)] = inst_29236);

return statearr_29334;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29296__$1,(17),inst_29240);
} else {
if((state_val_29297 === (30))){
var inst_29270 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29271 = figwheel.client.heads_up.display_warning.call(null,inst_29270);
var state_29296__$1 = state_29296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29296__$1,(33),inst_29271);
} else {
if((state_val_29297 === (10))){
var inst_29230 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
var statearr_29335_29378 = state_29296__$1;
(statearr_29335_29378[(2)] = inst_29230);

(statearr_29335_29378[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (18))){
var inst_29246 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29247 = figwheel.client.format_messages.call(null,inst_29246);
var inst_29248 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29249 = figwheel.client.heads_up.display_error.call(null,inst_29247,inst_29248);
var state_29296__$1 = state_29296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29296__$1,(21),inst_29249);
} else {
if((state_val_29297 === (37))){
var inst_29279 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
var statearr_29336_29379 = state_29296__$1;
(statearr_29336_29379[(2)] = inst_29279);

(statearr_29336_29379[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (8))){
var inst_29222 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29296__$1 = state_29296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29296__$1,(11),inst_29222);
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
});})(c__23057__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22992__auto__,c__23057__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22993__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22993__auto____0 = (function (){
var statearr_29340 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29340[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22993__auto__);

(statearr_29340[(1)] = (1));

return statearr_29340;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22993__auto____1 = (function (state_29296){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_29296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e29341){if((e29341 instanceof Object)){
var ex__22996__auto__ = e29341;
var statearr_29342_29380 = state_29296;
(statearr_29342_29380[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29381 = state_29296;
state_29296 = G__29381;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22993__auto__ = function(state_29296){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22993__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22993__auto____1.call(this,state_29296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22993__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22993__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22993__auto__;
})()
;})(switch__22992__auto__,c__23057__auto__,msg_hist,msg_names,msg))
})();
var state__23059__auto__ = (function (){var statearr_29343 = f__23058__auto__.call(null);
(statearr_29343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto__);

return statearr_29343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(c__23057__auto__,msg_hist,msg_names,msg))
);

return c__23057__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23057__auto___29444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23057__auto___29444,ch){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (c__23057__auto___29444,ch){
return (function (state_29427){
var state_val_29428 = (state_29427[(1)]);
if((state_val_29428 === (1))){
var state_29427__$1 = state_29427;
var statearr_29429_29445 = state_29427__$1;
(statearr_29429_29445[(2)] = null);

(statearr_29429_29445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29428 === (2))){
var state_29427__$1 = state_29427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29427__$1,(4),ch);
} else {
if((state_val_29428 === (3))){
var inst_29425 = (state_29427[(2)]);
var state_29427__$1 = state_29427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29427__$1,inst_29425);
} else {
if((state_val_29428 === (4))){
var inst_29415 = (state_29427[(7)]);
var inst_29415__$1 = (state_29427[(2)]);
var state_29427__$1 = (function (){var statearr_29430 = state_29427;
(statearr_29430[(7)] = inst_29415__$1);

return statearr_29430;
})();
if(cljs.core.truth_(inst_29415__$1)){
var statearr_29431_29446 = state_29427__$1;
(statearr_29431_29446[(1)] = (5));

} else {
var statearr_29432_29447 = state_29427__$1;
(statearr_29432_29447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29428 === (5))){
var inst_29415 = (state_29427[(7)]);
var inst_29417 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29415);
var state_29427__$1 = state_29427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29427__$1,(8),inst_29417);
} else {
if((state_val_29428 === (6))){
var state_29427__$1 = state_29427;
var statearr_29433_29448 = state_29427__$1;
(statearr_29433_29448[(2)] = null);

(statearr_29433_29448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29428 === (7))){
var inst_29423 = (state_29427[(2)]);
var state_29427__$1 = state_29427;
var statearr_29434_29449 = state_29427__$1;
(statearr_29434_29449[(2)] = inst_29423);

(statearr_29434_29449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29428 === (8))){
var inst_29419 = (state_29427[(2)]);
var state_29427__$1 = (function (){var statearr_29435 = state_29427;
(statearr_29435[(8)] = inst_29419);

return statearr_29435;
})();
var statearr_29436_29450 = state_29427__$1;
(statearr_29436_29450[(2)] = null);

(statearr_29436_29450[(1)] = (2));


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
});})(c__23057__auto___29444,ch))
;
return ((function (switch__22992__auto__,c__23057__auto___29444,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22993__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22993__auto____0 = (function (){
var statearr_29440 = [null,null,null,null,null,null,null,null,null];
(statearr_29440[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22993__auto__);

(statearr_29440[(1)] = (1));

return statearr_29440;
});
var figwheel$client$heads_up_plugin_$_state_machine__22993__auto____1 = (function (state_29427){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_29427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e29441){if((e29441 instanceof Object)){
var ex__22996__auto__ = e29441;
var statearr_29442_29451 = state_29427;
(statearr_29442_29451[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29452 = state_29427;
state_29427 = G__29452;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22993__auto__ = function(state_29427){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22993__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22993__auto____1.call(this,state_29427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22993__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22993__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22993__auto__;
})()
;})(switch__22992__auto__,c__23057__auto___29444,ch))
})();
var state__23059__auto__ = (function (){var statearr_29443 = f__23058__auto__.call(null);
(statearr_29443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto___29444);

return statearr_29443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(c__23057__auto___29444,ch))
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
var c__23057__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23057__auto__){
return (function (){
var f__23058__auto__ = (function (){var switch__22992__auto__ = ((function (c__23057__auto__){
return (function (state_29473){
var state_val_29474 = (state_29473[(1)]);
if((state_val_29474 === (1))){
var inst_29468 = cljs.core.async.timeout.call(null,(3000));
var state_29473__$1 = state_29473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29473__$1,(2),inst_29468);
} else {
if((state_val_29474 === (2))){
var inst_29470 = (state_29473[(2)]);
var inst_29471 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29473__$1 = (function (){var statearr_29475 = state_29473;
(statearr_29475[(7)] = inst_29470);

return statearr_29475;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29473__$1,inst_29471);
} else {
return null;
}
}
});})(c__23057__auto__))
;
return ((function (switch__22992__auto__,c__23057__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22993__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22993__auto____0 = (function (){
var statearr_29479 = [null,null,null,null,null,null,null,null];
(statearr_29479[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22993__auto__);

(statearr_29479[(1)] = (1));

return statearr_29479;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22993__auto____1 = (function (state_29473){
while(true){
var ret_value__22994__auto__ = (function (){try{while(true){
var result__22995__auto__ = switch__22992__auto__.call(null,state_29473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22995__auto__;
}
break;
}
}catch (e29480){if((e29480 instanceof Object)){
var ex__22996__auto__ = e29480;
var statearr_29481_29483 = state_29473;
(statearr_29481_29483[(5)] = ex__22996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29484 = state_29473;
state_29473 = G__29484;
continue;
} else {
return ret_value__22994__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22993__auto__ = function(state_29473){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22993__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22993__auto____1.call(this,state_29473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22993__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22993__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22993__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22993__auto__;
})()
;})(switch__22992__auto__,c__23057__auto__))
})();
var state__23059__auto__ = (function (){var statearr_29482 = f__23058__auto__.call(null);
(statearr_29482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23057__auto__);

return statearr_29482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23059__auto__);
});})(c__23057__auto__))
);

return c__23057__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29485){
var map__29492 = p__29485;
var map__29492__$1 = ((((!((map__29492 == null)))?((((map__29492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29492):map__29492);
var ed = map__29492__$1;
var formatted_exception = cljs.core.get.call(null,map__29492__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29492__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29492__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29494_29498 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29495_29499 = null;
var count__29496_29500 = (0);
var i__29497_29501 = (0);
while(true){
if((i__29497_29501 < count__29496_29500)){
var msg_29502 = cljs.core._nth.call(null,chunk__29495_29499,i__29497_29501);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29502);

var G__29503 = seq__29494_29498;
var G__29504 = chunk__29495_29499;
var G__29505 = count__29496_29500;
var G__29506 = (i__29497_29501 + (1));
seq__29494_29498 = G__29503;
chunk__29495_29499 = G__29504;
count__29496_29500 = G__29505;
i__29497_29501 = G__29506;
continue;
} else {
var temp__4425__auto___29507 = cljs.core.seq.call(null,seq__29494_29498);
if(temp__4425__auto___29507){
var seq__29494_29508__$1 = temp__4425__auto___29507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29494_29508__$1)){
var c__16877__auto___29509 = cljs.core.chunk_first.call(null,seq__29494_29508__$1);
var G__29510 = cljs.core.chunk_rest.call(null,seq__29494_29508__$1);
var G__29511 = c__16877__auto___29509;
var G__29512 = cljs.core.count.call(null,c__16877__auto___29509);
var G__29513 = (0);
seq__29494_29498 = G__29510;
chunk__29495_29499 = G__29511;
count__29496_29500 = G__29512;
i__29497_29501 = G__29513;
continue;
} else {
var msg_29514 = cljs.core.first.call(null,seq__29494_29508__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29514);

var G__29515 = cljs.core.next.call(null,seq__29494_29508__$1);
var G__29516 = null;
var G__29517 = (0);
var G__29518 = (0);
seq__29494_29498 = G__29515;
chunk__29495_29499 = G__29516;
count__29496_29500 = G__29517;
i__29497_29501 = G__29518;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29519){
var map__29522 = p__29519;
var map__29522__$1 = ((((!((map__29522 == null)))?((((map__29522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29522):map__29522);
var w = map__29522__$1;
var message = cljs.core.get.call(null,map__29522__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__16062__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16062__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16062__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29530 = cljs.core.seq.call(null,plugins);
var chunk__29531 = null;
var count__29532 = (0);
var i__29533 = (0);
while(true){
if((i__29533 < count__29532)){
var vec__29534 = cljs.core._nth.call(null,chunk__29531,i__29533);
var k = cljs.core.nth.call(null,vec__29534,(0),null);
var plugin = cljs.core.nth.call(null,vec__29534,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29536 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29530,chunk__29531,count__29532,i__29533,pl_29536,vec__29534,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29536.call(null,msg_hist);
});})(seq__29530,chunk__29531,count__29532,i__29533,pl_29536,vec__29534,k,plugin))
);
} else {
}

var G__29537 = seq__29530;
var G__29538 = chunk__29531;
var G__29539 = count__29532;
var G__29540 = (i__29533 + (1));
seq__29530 = G__29537;
chunk__29531 = G__29538;
count__29532 = G__29539;
i__29533 = G__29540;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29530);
if(temp__4425__auto__){
var seq__29530__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29530__$1)){
var c__16877__auto__ = cljs.core.chunk_first.call(null,seq__29530__$1);
var G__29541 = cljs.core.chunk_rest.call(null,seq__29530__$1);
var G__29542 = c__16877__auto__;
var G__29543 = cljs.core.count.call(null,c__16877__auto__);
var G__29544 = (0);
seq__29530 = G__29541;
chunk__29531 = G__29542;
count__29532 = G__29543;
i__29533 = G__29544;
continue;
} else {
var vec__29535 = cljs.core.first.call(null,seq__29530__$1);
var k = cljs.core.nth.call(null,vec__29535,(0),null);
var plugin = cljs.core.nth.call(null,vec__29535,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29545 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29530,chunk__29531,count__29532,i__29533,pl_29545,vec__29535,k,plugin,seq__29530__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29545.call(null,msg_hist);
});})(seq__29530,chunk__29531,count__29532,i__29533,pl_29545,vec__29535,k,plugin,seq__29530__$1,temp__4425__auto__))
);
} else {
}

var G__29546 = cljs.core.next.call(null,seq__29530__$1);
var G__29547 = null;
var G__29548 = (0);
var G__29549 = (0);
seq__29530 = G__29546;
chunk__29531 = G__29547;
count__29532 = G__29548;
i__29533 = G__29549;
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
var args29550 = [];
var len__17132__auto___29553 = arguments.length;
var i__17133__auto___29554 = (0);
while(true){
if((i__17133__auto___29554 < len__17132__auto___29553)){
args29550.push((arguments[i__17133__auto___29554]));

var G__29555 = (i__17133__auto___29554 + (1));
i__17133__auto___29554 = G__29555;
continue;
} else {
}
break;
}

var G__29552 = args29550.length;
switch (G__29552) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29550.length)].join('')));

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
var args__17139__auto__ = [];
var len__17132__auto___29561 = arguments.length;
var i__17133__auto___29562 = (0);
while(true){
if((i__17133__auto___29562 < len__17132__auto___29561)){
args__17139__auto__.push((arguments[i__17133__auto___29562]));

var G__29563 = (i__17133__auto___29562 + (1));
i__17133__auto___29562 = G__29563;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((0) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17140__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29558){
var map__29559 = p__29558;
var map__29559__$1 = ((((!((map__29559 == null)))?((((map__29559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29559):map__29559);
var opts = map__29559__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29557){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29557));
});

//# sourceMappingURL=client.js.map?rel=1447113462021