// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__21378,handler){
var map__21379 = p__21378;
var map__21379__$1 = ((((!((map__21379 == null)))?((((map__21379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21379):map__21379);
var uri = cljs.core.get.call(null,map__21379__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__21379__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__21379__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__21379__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__21379__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__21379__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__21379__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__21379,map__21379__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__21377_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__21377_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__21379,map__21379__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___21387 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___21387)){
var response_type_21388 = temp__4425__auto___21387;
this$__$1.responseType = cljs.core.name.call(null,response_type_21388);
} else {
}

var seq__21381_21389 = cljs.core.seq.call(null,headers);
var chunk__21382_21390 = null;
var count__21383_21391 = (0);
var i__21384_21392 = (0);
while(true){
if((i__21384_21392 < count__21383_21391)){
var vec__21385_21393 = cljs.core._nth.call(null,chunk__21382_21390,i__21384_21392);
var k_21394 = cljs.core.nth.call(null,vec__21385_21393,(0),null);
var v_21395 = cljs.core.nth.call(null,vec__21385_21393,(1),null);
this$__$1.setRequestHeader(k_21394,v_21395);

var G__21396 = seq__21381_21389;
var G__21397 = chunk__21382_21390;
var G__21398 = count__21383_21391;
var G__21399 = (i__21384_21392 + (1));
seq__21381_21389 = G__21396;
chunk__21382_21390 = G__21397;
count__21383_21391 = G__21398;
i__21384_21392 = G__21399;
continue;
} else {
var temp__4425__auto___21400 = cljs.core.seq.call(null,seq__21381_21389);
if(temp__4425__auto___21400){
var seq__21381_21401__$1 = temp__4425__auto___21400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21381_21401__$1)){
var c__17554__auto___21402 = cljs.core.chunk_first.call(null,seq__21381_21401__$1);
var G__21403 = cljs.core.chunk_rest.call(null,seq__21381_21401__$1);
var G__21404 = c__17554__auto___21402;
var G__21405 = cljs.core.count.call(null,c__17554__auto___21402);
var G__21406 = (0);
seq__21381_21389 = G__21403;
chunk__21382_21390 = G__21404;
count__21383_21391 = G__21405;
i__21384_21392 = G__21406;
continue;
} else {
var vec__21386_21407 = cljs.core.first.call(null,seq__21381_21401__$1);
var k_21408 = cljs.core.nth.call(null,vec__21386_21407,(0),null);
var v_21409 = cljs.core.nth.call(null,vec__21386_21407,(1),null);
this$__$1.setRequestHeader(k_21408,v_21409);

var G__21410 = cljs.core.next.call(null,seq__21381_21401__$1);
var G__21411 = null;
var G__21412 = (0);
var G__21413 = (0);
seq__21381_21389 = G__21410;
chunk__21382_21390 = G__21411;
count__21383_21391 = G__21412;
i__21384_21392 = G__21413;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__16751__auto__ = body;
if(cljs.core.truth_(or__16751__auto__)){
return or__16751__auto__;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1449083082145