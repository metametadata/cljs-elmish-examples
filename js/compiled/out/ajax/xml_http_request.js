// Compiled by ClojureScript 1.7.122 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__27884,handler){
var map__27885 = p__27884;
var map__27885__$1 = ((((!((map__27885 == null)))?((((map__27885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27885):map__27885);
var uri = cljs.core.get.call(null,map__27885__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__27885__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__27885__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__27885__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__27885__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__27885__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__27885__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__27885,map__27885__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__27883_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__27883_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__27885,map__27885__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___27893 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___27893)){
var response_type_27894 = temp__4425__auto___27893;
this$__$1.responseType = cljs.core.name.call(null,response_type_27894);
} else {
}

var seq__27887_27895 = cljs.core.seq.call(null,headers);
var chunk__27888_27896 = null;
var count__27889_27897 = (0);
var i__27890_27898 = (0);
while(true){
if((i__27890_27898 < count__27889_27897)){
var vec__27891_27899 = cljs.core._nth.call(null,chunk__27888_27896,i__27890_27898);
var k_27900 = cljs.core.nth.call(null,vec__27891_27899,(0),null);
var v_27901 = cljs.core.nth.call(null,vec__27891_27899,(1),null);
this$__$1.setRequestHeader(k_27900,v_27901);

var G__27902 = seq__27887_27895;
var G__27903 = chunk__27888_27896;
var G__27904 = count__27889_27897;
var G__27905 = (i__27890_27898 + (1));
seq__27887_27895 = G__27902;
chunk__27888_27896 = G__27903;
count__27889_27897 = G__27904;
i__27890_27898 = G__27905;
continue;
} else {
var temp__4425__auto___27906 = cljs.core.seq.call(null,seq__27887_27895);
if(temp__4425__auto___27906){
var seq__27887_27907__$1 = temp__4425__auto___27906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27887_27907__$1)){
var c__16877__auto___27908 = cljs.core.chunk_first.call(null,seq__27887_27907__$1);
var G__27909 = cljs.core.chunk_rest.call(null,seq__27887_27907__$1);
var G__27910 = c__16877__auto___27908;
var G__27911 = cljs.core.count.call(null,c__16877__auto___27908);
var G__27912 = (0);
seq__27887_27895 = G__27909;
chunk__27888_27896 = G__27910;
count__27889_27897 = G__27911;
i__27890_27898 = G__27912;
continue;
} else {
var vec__27892_27913 = cljs.core.first.call(null,seq__27887_27907__$1);
var k_27914 = cljs.core.nth.call(null,vec__27892_27913,(0),null);
var v_27915 = cljs.core.nth.call(null,vec__27892_27913,(1),null);
this$__$1.setRequestHeader(k_27914,v_27915);

var G__27916 = cljs.core.next.call(null,seq__27887_27907__$1);
var G__27917 = null;
var G__27918 = (0);
var G__27919 = (0);
seq__27887_27895 = G__27916;
chunk__27888_27896 = G__27917;
count__27889_27897 = G__27918;
i__27890_27898 = G__27919;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__16074__auto__ = body;
if(cljs.core.truth_(or__16074__auto__)){
return or__16074__auto__;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1447113459274