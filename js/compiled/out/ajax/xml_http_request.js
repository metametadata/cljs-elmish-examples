// Compiled by ClojureScript 1.7.122 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__28020,handler){
var map__28021 = p__28020;
var map__28021__$1 = ((((!((map__28021 == null)))?((((map__28021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28021):map__28021);
var uri = cljs.core.get.call(null,map__28021__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__28021__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__28021__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__28021__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__28021__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__28021__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__28021__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__28021,map__28021__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__28019_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__28019_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__28021,map__28021__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___28029 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___28029)){
var response_type_28030 = temp__4425__auto___28029;
this$__$1.responseType = cljs.core.name.call(null,response_type_28030);
} else {
}

var seq__28023_28031 = cljs.core.seq.call(null,headers);
var chunk__28024_28032 = null;
var count__28025_28033 = (0);
var i__28026_28034 = (0);
while(true){
if((i__28026_28034 < count__28025_28033)){
var vec__28027_28035 = cljs.core._nth.call(null,chunk__28024_28032,i__28026_28034);
var k_28036 = cljs.core.nth.call(null,vec__28027_28035,(0),null);
var v_28037 = cljs.core.nth.call(null,vec__28027_28035,(1),null);
this$__$1.setRequestHeader(k_28036,v_28037);

var G__28038 = seq__28023_28031;
var G__28039 = chunk__28024_28032;
var G__28040 = count__28025_28033;
var G__28041 = (i__28026_28034 + (1));
seq__28023_28031 = G__28038;
chunk__28024_28032 = G__28039;
count__28025_28033 = G__28040;
i__28026_28034 = G__28041;
continue;
} else {
var temp__4425__auto___28042 = cljs.core.seq.call(null,seq__28023_28031);
if(temp__4425__auto___28042){
var seq__28023_28043__$1 = temp__4425__auto___28042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28023_28043__$1)){
var c__16916__auto___28044 = cljs.core.chunk_first.call(null,seq__28023_28043__$1);
var G__28045 = cljs.core.chunk_rest.call(null,seq__28023_28043__$1);
var G__28046 = c__16916__auto___28044;
var G__28047 = cljs.core.count.call(null,c__16916__auto___28044);
var G__28048 = (0);
seq__28023_28031 = G__28045;
chunk__28024_28032 = G__28046;
count__28025_28033 = G__28047;
i__28026_28034 = G__28048;
continue;
} else {
var vec__28028_28049 = cljs.core.first.call(null,seq__28023_28043__$1);
var k_28050 = cljs.core.nth.call(null,vec__28028_28049,(0),null);
var v_28051 = cljs.core.nth.call(null,vec__28028_28049,(1),null);
this$__$1.setRequestHeader(k_28050,v_28051);

var G__28052 = cljs.core.next.call(null,seq__28023_28043__$1);
var G__28053 = null;
var G__28054 = (0);
var G__28055 = (0);
seq__28023_28031 = G__28052;
chunk__28024_28032 = G__28053;
count__28025_28033 = G__28054;
i__28026_28034 = G__28055;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__16113__auto__ = body;
if(cljs.core.truth_(or__16113__auto__)){
return or__16113__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1448902874106