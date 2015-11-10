// Compiled by ClojureScript 1.7.122 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('ajax.xml_http_request');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('clojure.string');
goog.require('goog.json.Serializer');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
ajax.core.process_response = (function ajax$core$process_response(response,interceptor){

return ajax.protocols._process_response.call(null,interceptor,response);
});
ajax.core.process_request = (function ajax$core$process_request(request,interceptor){

return ajax.protocols._process_request.call(null,interceptor,request);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16688__auto__,k__16689__auto__){
var self__ = this;
var this__16688__auto____$1 = this;
return cljs.core._lookup.call(null,this__16688__auto____$1,k__16689__auto__,null);
});

ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16690__auto__,k27370,else__16691__auto__){
var self__ = this;
var this__16690__auto____$1 = this;
var G__27372 = (((k27370 instanceof cljs.core.Keyword))?k27370.fqn:null);
switch (G__27372) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27370,else__16691__auto__);

}
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__27373,opts){
var self__ = this;
var map__27374 = p__27373;
var map__27374__$1 = ((((!((map__27374 == null)))?((((map__27374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27374):map__27374);
var request__$1 = cljs.core.get.call(null,map__27374__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__27376 = this;
var map__27376__$1 = ((((!((map__27376 == null)))?((((map__27376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27376):map__27376);
var request__$2 = cljs.core.get.call(null,map__27376__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__27378,xhrio){
var self__ = this;
var map__27379 = p__27378;
var map__27379__$1 = ((((!((map__27379 == null)))?((((map__27379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27379):map__27379);
var response__$1 = cljs.core.get.call(null,map__27379__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__27381 = this;
var map__27381__$1 = ((((!((map__27381 == null)))?((((map__27381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27381):map__27381);
var response__$2 = cljs.core.get.call(null,map__27381__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.core.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16702__auto__,writer__16703__auto__,opts__16704__auto__){
var self__ = this;
var this__16702__auto____$1 = this;
var pr_pair__16705__auto__ = ((function (this__16702__auto____$1){
return (function (keyval__16706__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16703__auto__,cljs.core.pr_writer,""," ","",opts__16704__auto__,keyval__16706__auto__);
});})(this__16702__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16703__auto__,pr_pair__16705__auto__,"#ajax.core.StandardInterceptor{",", ","}",opts__16704__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$ = true;

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27369){
var self__ = this;
var G__27369__$1 = this;
return (new cljs.core.RecordIter((0),G__27369__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16686__auto__){
var self__ = this;
var this__16686__auto____$1 = this;
return self__.__meta;
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16682__auto__){
var self__ = this;
var this__16682__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16692__auto__){
var self__ = this;
var this__16692__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16683__auto__){
var self__ = this;
var this__16683__auto____$1 = this;
var h__16509__auto__ = self__.__hash;
if(!((h__16509__auto__ == null))){
return h__16509__auto__;
} else {
var h__16509__auto____$1 = cljs.core.hash_imap.call(null,this__16683__auto____$1);
self__.__hash = h__16509__auto____$1;

return h__16509__auto____$1;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16684__auto__,other__16685__auto__){
var self__ = this;
var this__16684__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16062__auto__ = other__16685__auto__;
if(cljs.core.truth_(and__16062__auto__)){
var and__16062__auto____$1 = (this__16684__auto____$1.constructor === other__16685__auto__.constructor);
if(and__16062__auto____$1){
return cljs.core.equiv_map.call(null,this__16684__auto____$1,other__16685__auto__);
} else {
return and__16062__auto____$1;
}
} else {
return and__16062__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16697__auto__,k__16698__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__16698__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16697__auto____$1),self__.__meta),k__16698__auto__);
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16698__auto__)),null));
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16695__auto__,k__16696__auto__,G__27369){
var self__ = this;
var this__16695__auto____$1 = this;
var pred__27383 = cljs.core.keyword_identical_QMARK_;
var expr__27384 = k__16696__auto__;
if(cljs.core.truth_(pred__27383.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__27384))){
return (new ajax.core.StandardInterceptor(G__27369,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27383.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__27384))){
return (new ajax.core.StandardInterceptor(self__.name,G__27369,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27383.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__27384))){
return (new ajax.core.StandardInterceptor(self__.name,self__.request,G__27369,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16696__auto__,G__27369),null));
}
}
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16700__auto__){
var self__ = this;
var this__16700__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16687__auto__,G__27369){
var self__ = this;
var this__16687__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,G__27369,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16693__auto__,entry__16694__auto__){
var self__ = this;
var this__16693__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16694__auto__)){
return cljs.core._assoc.call(null,this__16693__auto____$1,cljs.core._nth.call(null,entry__16694__auto__,(0)),cljs.core._nth.call(null,entry__16694__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16693__auto____$1,entry__16694__auto__);
}
});

ajax.core.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.core.StandardInterceptor.cljs$lang$type = true;

ajax.core.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__16722__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/StandardInterceptor");
});

ajax.core.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__16722__auto__,writer__16723__auto__){
return cljs.core._write.call(null,writer__16723__auto__,"ajax.core/StandardInterceptor");
});

ajax.core.__GT_StandardInterceptor = (function ajax$core$__GT_StandardInterceptor(name,request,response){
return (new ajax.core.StandardInterceptor(name,request,response,null,null,null));
});

ajax.core.map__GT_StandardInterceptor = (function ajax$core$map__GT_StandardInterceptor(G__27371){
return (new ajax.core.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__27371),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__27371),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__27371),null,cljs.core.dissoc.call(null,G__27371,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)),null));
});

ajax.core.to_interceptor = (function ajax$core$to_interceptor(m){
return ajax.core.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.core.get_content_type = (function ajax$core$get_content_type(response){
var or__16074__auto__ = ajax.protocols._get_response_header.call(null,response,"Content-Type");
if(cljs.core.truth_(or__16074__auto__)){
return or__16074__auto__;
} else {
return "";
}
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.protocols._abort.call(null,this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.exception_message = (function ajax$core$exception_message(e){
return e.message;
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__27387,xhrio){
var map__27390 = p__27387;
var map__27390__$1 = ((((!((map__27390 == null)))?((((map__27390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27390):map__27390);
var description = cljs.core.get.call(null,map__27390__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(ajax.core.exception_message.call(null,e)),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.core.fail = (function ajax$core$fail(var_args){
var args__17139__auto__ = [];
var len__17132__auto___27396 = arguments.length;
var i__17133__auto___27397 = (0);
while(true){
if((i__17133__auto___27397 < len__17132__auto___27396)){
args__17139__auto__.push((arguments[i__17133__auto___27397]));

var G__27398 = (i__17133__auto___27397 + (1));
i__17133__auto___27397 = G__27398;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((3) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((3)),(0))):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17140__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq27392){
var G__27393 = cljs.core.first.call(null,seq27392);
var seq27392__$1 = cljs.core.next.call(null,seq27392);
var G__27394 = cljs.core.first.call(null,seq27392__$1);
var seq27392__$2 = cljs.core.next.call(null,seq27392__$1);
var G__27395 = cljs.core.first.call(null,seq27392__$2);
var seq27392__$3 = cljs.core.next.call(null,seq27392__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__27393,G__27394,G__27395,seq27392__$3);
});
ajax.core.content_type_to_request_header = (function ajax$core$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",cljs.core.map.call(null,(function (p1__27399_SHARP_){
return [cljs.core.str(p1__27399_SHARP_),cljs.core.str("; charset=utf-8")].join('');
}),((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16688__auto__,k__16689__auto__){
var self__ = this;
var this__16688__auto____$1 = this;
return cljs.core._lookup.call(null,this__16688__auto____$1,k__16689__auto__,null);
});

ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16690__auto__,k27402,else__16691__auto__){
var self__ = this;
var this__16690__auto____$1 = this;
var G__27404 = (((k27402 instanceof cljs.core.Keyword))?k27402.fqn:null);
switch (G__27404) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27402,else__16691__auto__);

}
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__27405,request){
var self__ = this;
var map__27406 = p__27405;
var map__27406__$1 = ((((!((map__27406 == null)))?((((map__27406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27406):map__27406);
var content_type__$1 = cljs.core.get.call(null,map__27406__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__27408 = this;
var map__27408__$1 = ((((!((map__27408 == null)))?((((map__27408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27408):map__27408);
var content_type__$2 = cljs.core.get.call(null,map__27408__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__27408,map__27408__$1,content_type__$2,map__27406,map__27406__$1,content_type__$1){
return (function (p1__27400_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.core.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__16074__auto__ = p1__27400_SHARP_;
if(cljs.core.truth_(or__16074__auto__)){
return or__16074__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__27408,map__27408__$1,content_type__$2,map__27406,map__27406__$1,content_type__$1))
);
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__27410,xhrio){
var self__ = this;
var map__27411 = p__27410;
var map__27411__$1 = ((((!((map__27411 == null)))?((((map__27411.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27411.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27411):map__27411);
var format = map__27411__$1;
var read__$1 = cljs.core.get.call(null,map__27411__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__27413 = this;
var map__27413__$1 = ((((!((map__27413 == null)))?((((map__27413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27413):map__27413);
var format__$1 = map__27413__$1;
var read__$2 = cljs.core.get.call(null,map__27413__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
var G__27416 = status;
switch (G__27416) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e27417){if((e27417 instanceof Object)){
var e = e27417;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e27417;

}
}
}
}catch (e27415){if((e27415 instanceof Object)){
var e = e27415;
var message = e.message;
return ajax.core.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e27415;

}
}});

ajax.core.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16702__auto__,writer__16703__auto__,opts__16704__auto__){
var self__ = this;
var this__16702__auto____$1 = this;
var pr_pair__16705__auto__ = ((function (this__16702__auto____$1){
return (function (keyval__16706__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16703__auto__,cljs.core.pr_writer,""," ","",opts__16704__auto__,keyval__16706__auto__);
});})(this__16702__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16703__auto__,pr_pair__16705__auto__,"#ajax.core.ResponseFormat{",", ","}",opts__16704__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27401){
var self__ = this;
var G__27401__$1 = this;
return (new cljs.core.RecordIter((0),G__27401__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16686__auto__){
var self__ = this;
var this__16686__auto____$1 = this;
return self__.__meta;
});

ajax.core.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16682__auto__){
var self__ = this;
var this__16682__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16692__auto__){
var self__ = this;
var this__16692__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16683__auto__){
var self__ = this;
var this__16683__auto____$1 = this;
var h__16509__auto__ = self__.__hash;
if(!((h__16509__auto__ == null))){
return h__16509__auto__;
} else {
var h__16509__auto____$1 = cljs.core.hash_imap.call(null,this__16683__auto____$1);
self__.__hash = h__16509__auto____$1;

return h__16509__auto____$1;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16684__auto__,other__16685__auto__){
var self__ = this;
var this__16684__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16062__auto__ = other__16685__auto__;
if(cljs.core.truth_(and__16062__auto__)){
var and__16062__auto____$1 = (this__16684__auto____$1.constructor === other__16685__auto__.constructor);
if(and__16062__auto____$1){
return cljs.core.equiv_map.call(null,this__16684__auto____$1,other__16685__auto__);
} else {
return and__16062__auto____$1;
}
} else {
return and__16062__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16697__auto__,k__16698__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__16698__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16697__auto____$1),self__.__meta),k__16698__auto__);
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16698__auto__)),null));
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16695__auto__,k__16696__auto__,G__27401){
var self__ = this;
var this__16695__auto____$1 = this;
var pred__27418 = cljs.core.keyword_identical_QMARK_;
var expr__27419 = k__16696__auto__;
if(cljs.core.truth_(pred__27418.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__27419))){
return (new ajax.core.ResponseFormat(G__27401,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27418.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__27419))){
return (new ajax.core.ResponseFormat(self__.read,G__27401,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27418.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__27419))){
return (new ajax.core.ResponseFormat(self__.read,self__.description,G__27401,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16696__auto__,G__27401),null));
}
}
}
});

ajax.core.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16700__auto__){
var self__ = this;
var this__16700__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16687__auto__,G__27401){
var self__ = this;
var this__16687__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,G__27401,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16693__auto__,entry__16694__auto__){
var self__ = this;
var this__16693__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16694__auto__)){
return cljs.core._assoc.call(null,this__16693__auto____$1,cljs.core._nth.call(null,entry__16694__auto__,(0)),cljs.core._nth.call(null,entry__16694__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16693__auto____$1,entry__16694__auto__);
}
});

ajax.core.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.core.ResponseFormat.cljs$lang$type = true;

ajax.core.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__16722__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ResponseFormat");
});

ajax.core.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__16722__auto__,writer__16723__auto__){
return cljs.core._write.call(null,writer__16723__auto__,"ajax.core/ResponseFormat");
});

ajax.core.__GT_ResponseFormat = (function ajax$core$__GT_ResponseFormat(read,description,content_type){
return (new ajax.core.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.core.map__GT_ResponseFormat = (function ajax$core$map__GT_ResponseFormat(G__27403){
return (new ajax.core.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__27403),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__27403),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__27403),null,cljs.core.dissoc.call(null,G__27403,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)),null));
});

ajax.core.params_to_str_old = (function ajax$core$params_to_str_old(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.param_to_str;
ajax.core.vec_param_to_str = (function ajax$core$vec_param_to_str(var_args){
var args27423 = [];
var len__17132__auto___27426 = arguments.length;
var i__17133__auto___27427 = (0);
while(true){
if((i__17133__auto___27427 < len__17132__auto___27426)){
args27423.push((arguments[i__17133__auto___27427]));

var G__27428 = (i__17133__auto___27427 + (1));
i__17133__auto___27427 = G__27428;
continue;
} else {
}
break;
}

var G__27425 = args27423.length;
switch (G__27425) {
case 3:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27423.length)].join('')));

}
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3 = (function (prefix,key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,key){
return (function (value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$lang$maxFixedArity = 3;
ajax.core.param_to_str = (function ajax$core$param_to_str(var_args){
var args27430 = [];
var len__17132__auto___27437 = arguments.length;
var i__17133__auto___27438 = (0);
while(true){
if((i__17133__auto___27438 < len__17132__auto___27437)){
args27430.push((arguments[i__17133__auto___27438]));

var G__27439 = (i__17133__auto___27438 + (1));
i__17133__auto___27438 = G__27439;
continue;
} else {
}
break;
}

var G__27432 = args27430.length;
switch (G__27432) {
case 2:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27430.length)].join('')));

}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,p__27433){
var vec__27434 = p__27433;
var key = cljs.core.nth.call(null,vec__27434,(0),null);
var value = cljs.core.nth.call(null,vec__27434,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (p__27435){
var vec__27436 = p__27435;
var key = cljs.core.nth.call(null,vec__27436,(0),null);
var value = cljs.core.nth.call(null,vec__27436,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});
});

ajax.core.param_to_str.cljs$lang$maxFixedArity = 2;
ajax.core.to_utf8_writer = (function ajax$core$to_utf8_writer(to_str){
return to_str;
});
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__27443){
var vec__27444 = p__27443;
var k = cljs.core.nth.call(null,vec__27444,(0),null);
var v = cljs.core.nth.call(null,vec__27444,(1),null);
return [cljs.core.str(k),cljs.core.str("="),cljs.core.str(v)].join('');
}),cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,null),cljs.core.seq.call(null,params))));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(ajax.core.params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16688__auto__,k__16689__auto__){
var self__ = this;
var this__16688__auto____$1 = this;
return cljs.core._lookup.call(null,this__16688__auto____$1,k__16689__auto__,null);
});

ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16690__auto__,k27447,else__16691__auto__){
var self__ = this;
var this__16690__auto____$1 = this;
var G__27449 = k27447;
switch (G__27449) {
default:
return cljs.core.get.call(null,self__.__extmap,k27447,else__16691__auto__);

}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__27450){
var self__ = this;
var map__27451 = p__27450;
var map__27451__$1 = ((((!((map__27451 == null)))?((((map__27451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27451):map__27451);
var request = map__27451__$1;
var method = cljs.core.get.call(null,map__27451__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),((function (___$1,map__27451,map__27451__$1,request,method){
return (function (p1__27445_SHARP_){
return ajax.core.uri_with_params.call(null,p1__27445_SHARP_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(request));
});})(___$1,map__27451,map__27451__$1,request,method))
));
} else {
return request;
}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16702__auto__,writer__16703__auto__,opts__16704__auto__){
var self__ = this;
var this__16702__auto____$1 = this;
var pr_pair__16705__auto__ = ((function (this__16702__auto____$1){
return (function (keyval__16706__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16703__auto__,cljs.core.pr_writer,""," ","",opts__16704__auto__,keyval__16706__auto__);
});})(this__16702__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16703__auto__,pr_pair__16705__auto__,"#ajax.core.ProcessGet{",", ","}",opts__16704__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IIterable$ = true;

ajax.core.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27446){
var self__ = this;
var G__27446__$1 = this;
return (new cljs.core.RecordIter((0),G__27446__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16686__auto__){
var self__ = this;
var this__16686__auto____$1 = this;
return self__.__meta;
});

ajax.core.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16682__auto__){
var self__ = this;
var this__16682__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16692__auto__){
var self__ = this;
var this__16692__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16683__auto__){
var self__ = this;
var this__16683__auto____$1 = this;
var h__16509__auto__ = self__.__hash;
if(!((h__16509__auto__ == null))){
return h__16509__auto__;
} else {
var h__16509__auto____$1 = cljs.core.hash_imap.call(null,this__16683__auto____$1);
self__.__hash = h__16509__auto____$1;

return h__16509__auto____$1;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16684__auto__,other__16685__auto__){
var self__ = this;
var this__16684__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16062__auto__ = other__16685__auto__;
if(cljs.core.truth_(and__16062__auto__)){
var and__16062__auto____$1 = (this__16684__auto____$1.constructor === other__16685__auto__.constructor);
if(and__16062__auto____$1){
return cljs.core.equiv_map.call(null,this__16684__auto____$1,other__16685__auto__);
} else {
return and__16062__auto____$1;
}
} else {
return and__16062__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16697__auto__,k__16698__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__16698__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16697__auto____$1),self__.__meta),k__16698__auto__);
} else {
return (new ajax.core.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16698__auto__)),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16695__auto__,k__16696__auto__,G__27446){
var self__ = this;
var this__16695__auto____$1 = this;
var pred__27453 = cljs.core.keyword_identical_QMARK_;
var expr__27454 = k__16696__auto__;
return (new ajax.core.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16696__auto__,G__27446),null));
});

ajax.core.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16700__auto__){
var self__ = this;
var this__16700__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16687__auto__,G__27446){
var self__ = this;
var this__16687__auto____$1 = this;
return (new ajax.core.ProcessGet(G__27446,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16693__auto__,entry__16694__auto__){
var self__ = this;
var this__16693__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16694__auto__)){
return cljs.core._assoc.call(null,this__16693__auto____$1,cljs.core._nth.call(null,entry__16694__auto__,(0)),cljs.core._nth.call(null,entry__16694__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16693__auto____$1,entry__16694__auto__);
}
});

ajax.core.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ProcessGet.cljs$lang$type = true;

ajax.core.ProcessGet.cljs$lang$ctorPrSeq = (function (this__16722__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ProcessGet");
});

ajax.core.ProcessGet.cljs$lang$ctorPrWriter = (function (this__16722__auto__,writer__16723__auto__){
return cljs.core._write.call(null,writer__16723__auto__,"ajax.core/ProcessGet");
});

ajax.core.__GT_ProcessGet = (function ajax$core$__GT_ProcessGet(){
return (new ajax.core.ProcessGet(null,null,null));
});

ajax.core.map__GT_ProcessGet = (function ajax$core$map__GT_ProcessGet(G__27448){
return (new ajax.core.ProcessGet(null,cljs.core.dissoc.call(null,G__27448),null));
});

ajax.core.throw_error = (function ajax$core$throw_error(args){
throw (new Error([cljs.core.str(args)].join('')));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16688__auto__,k__16689__auto__){
var self__ = this;
var this__16688__auto____$1 = this;
return cljs.core._lookup.call(null,this__16688__auto____$1,k__16689__auto__,null);
});

ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16690__auto__,k27458,else__16691__auto__){
var self__ = this;
var this__16690__auto____$1 = this;
var G__27460 = k27458;
switch (G__27460) {
default:
return cljs.core.get.call(null,self__.__extmap,k27458,else__16691__auto__);

}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__27461){
var self__ = this;
var map__27462 = p__27461;
var map__27462__$1 = ((((!((map__27462 == null)))?((((map__27462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27462):map__27462);
var request = map__27462__$1;
var body = cljs.core.get.call(null,map__27462__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var params = cljs.core.get.call(null,map__27462__$1,new cljs.core.Keyword(null,"params","params",710516235));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16702__auto__,writer__16703__auto__,opts__16704__auto__){
var self__ = this;
var this__16702__auto____$1 = this;
var pr_pair__16705__auto__ = ((function (this__16702__auto____$1){
return (function (keyval__16706__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16703__auto__,cljs.core.pr_writer,""," ","",opts__16704__auto__,keyval__16706__auto__);
});})(this__16702__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16703__auto__,pr_pair__16705__auto__,"#ajax.core.DirectSubmission{",", ","}",opts__16704__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$ = true;

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27457){
var self__ = this;
var G__27457__$1 = this;
return (new cljs.core.RecordIter((0),G__27457__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16686__auto__){
var self__ = this;
var this__16686__auto____$1 = this;
return self__.__meta;
});

ajax.core.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16682__auto__){
var self__ = this;
var this__16682__auto____$1 = this;
return (new ajax.core.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16692__auto__){
var self__ = this;
var this__16692__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16683__auto__){
var self__ = this;
var this__16683__auto____$1 = this;
var h__16509__auto__ = self__.__hash;
if(!((h__16509__auto__ == null))){
return h__16509__auto__;
} else {
var h__16509__auto____$1 = cljs.core.hash_imap.call(null,this__16683__auto____$1);
self__.__hash = h__16509__auto____$1;

return h__16509__auto____$1;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16684__auto__,other__16685__auto__){
var self__ = this;
var this__16684__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16062__auto__ = other__16685__auto__;
if(cljs.core.truth_(and__16062__auto__)){
var and__16062__auto____$1 = (this__16684__auto____$1.constructor === other__16685__auto__.constructor);
if(and__16062__auto____$1){
return cljs.core.equiv_map.call(null,this__16684__auto____$1,other__16685__auto__);
} else {
return and__16062__auto____$1;
}
} else {
return and__16062__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16697__auto__,k__16698__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__16698__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16697__auto____$1),self__.__meta),k__16698__auto__);
} else {
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16698__auto__)),null));
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16695__auto__,k__16696__auto__,G__27457){
var self__ = this;
var this__16695__auto____$1 = this;
var pred__27464 = cljs.core.keyword_identical_QMARK_;
var expr__27465 = k__16696__auto__;
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16696__auto__,G__27457),null));
});

ajax.core.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16700__auto__){
var self__ = this;
var this__16700__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16687__auto__,G__27457){
var self__ = this;
var this__16687__auto____$1 = this;
return (new ajax.core.DirectSubmission(G__27457,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16693__auto__,entry__16694__auto__){
var self__ = this;
var this__16693__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16694__auto__)){
return cljs.core._assoc.call(null,this__16693__auto____$1,cljs.core._nth.call(null,entry__16694__auto__,(0)),cljs.core._nth.call(null,entry__16694__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16693__auto____$1,entry__16694__auto__);
}
});

ajax.core.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.DirectSubmission.cljs$lang$type = true;

ajax.core.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__16722__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/DirectSubmission");
});

ajax.core.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__16722__auto__,writer__16723__auto__){
return cljs.core._write.call(null,writer__16723__auto__,"ajax.core/DirectSubmission");
});

ajax.core.__GT_DirectSubmission = (function ajax$core$__GT_DirectSubmission(){
return (new ajax.core.DirectSubmission(null,null,null));
});

ajax.core.map__GT_DirectSubmission = (function ajax$core$map__GT_DirectSubmission(G__27459){
return (new ajax.core.DirectSubmission(null,cljs.core.dissoc.call(null,G__27459),null));
});

ajax.core.apply_request_format = (function ajax$core$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16688__auto__,k__16689__auto__){
var self__ = this;
var this__16688__auto____$1 = this;
return cljs.core._lookup.call(null,this__16688__auto____$1,k__16689__auto__,null);
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16690__auto__,k27469,else__16691__auto__){
var self__ = this;
var this__16690__auto____$1 = this;
var G__27471 = k27469;
switch (G__27471) {
default:
return cljs.core.get.call(null,self__.__extmap,k27469,else__16691__auto__);

}
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__27472){
var self__ = this;
var map__27473 = p__27472;
var map__27473__$1 = ((((!((map__27473 == null)))?((((map__27473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27473):map__27473);
var request = map__27473__$1;
var uri = cljs.core.get.call(null,map__27473__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__27473__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__27473__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__27473__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__27473__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__27475 = ajax.core.get_request_format.call(null,format);
var map__27475__$1 = ((((!((map__27475 == null)))?((((map__27475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27475):map__27475);
var write = cljs.core.get.call(null,map__27475__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__27475__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.core.apply_request_format.call(null,write,params):ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__16074__auto__ = headers;
if(cljs.core.truth_(or__16074__auto__)){
return or__16074__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.core.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16702__auto__,writer__16703__auto__,opts__16704__auto__){
var self__ = this;
var this__16702__auto____$1 = this;
var pr_pair__16705__auto__ = ((function (this__16702__auto____$1){
return (function (keyval__16706__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16703__auto__,cljs.core.pr_writer,""," ","",opts__16704__auto__,keyval__16706__auto__);
});})(this__16702__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16703__auto__,pr_pair__16705__auto__,"#ajax.core.ApplyRequestFormat{",", ","}",opts__16704__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27468){
var self__ = this;
var G__27468__$1 = this;
return (new cljs.core.RecordIter((0),G__27468__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16686__auto__){
var self__ = this;
var this__16686__auto____$1 = this;
return self__.__meta;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16682__auto__){
var self__ = this;
var this__16682__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16692__auto__){
var self__ = this;
var this__16692__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16683__auto__){
var self__ = this;
var this__16683__auto____$1 = this;
var h__16509__auto__ = self__.__hash;
if(!((h__16509__auto__ == null))){
return h__16509__auto__;
} else {
var h__16509__auto____$1 = cljs.core.hash_imap.call(null,this__16683__auto____$1);
self__.__hash = h__16509__auto____$1;

return h__16509__auto____$1;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16684__auto__,other__16685__auto__){
var self__ = this;
var this__16684__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16062__auto__ = other__16685__auto__;
if(cljs.core.truth_(and__16062__auto__)){
var and__16062__auto____$1 = (this__16684__auto____$1.constructor === other__16685__auto__.constructor);
if(and__16062__auto____$1){
return cljs.core.equiv_map.call(null,this__16684__auto____$1,other__16685__auto__);
} else {
return and__16062__auto____$1;
}
} else {
return and__16062__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16697__auto__,k__16698__auto__){
var self__ = this;
var this__16697__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__16698__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16697__auto____$1),self__.__meta),k__16698__auto__);
} else {
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16698__auto__)),null));
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16695__auto__,k__16696__auto__,G__27468){
var self__ = this;
var this__16695__auto____$1 = this;
var pred__27477 = cljs.core.keyword_identical_QMARK_;
var expr__27478 = k__16696__auto__;
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16696__auto__,G__27468),null));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16700__auto__){
var self__ = this;
var this__16700__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16687__auto__,G__27468){
var self__ = this;
var this__16687__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(G__27468,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16693__auto__,entry__16694__auto__){
var self__ = this;
var this__16693__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16694__auto__)){
return cljs.core._assoc.call(null,this__16693__auto____$1,cljs.core._nth.call(null,entry__16694__auto__,(0)),cljs.core._nth.call(null,entry__16694__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16693__auto____$1,entry__16694__auto__);
}
});

ajax.core.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ApplyRequestFormat.cljs$lang$type = true;

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__16722__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ApplyRequestFormat");
});

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__16722__auto__,writer__16723__auto__){
return cljs.core._write.call(null,writer__16723__auto__,"ajax.core/ApplyRequestFormat");
});

ajax.core.__GT_ApplyRequestFormat = (function ajax$core$__GT_ApplyRequestFormat(){
return (new ajax.core.ApplyRequestFormat(null,null,null));
});

ajax.core.map__GT_ApplyRequestFormat = (function ajax$core$map__GT_ApplyRequestFormat(G__27470){
return (new ajax.core.ApplyRequestFormat(null,cljs.core.dissoc.call(null,G__27470),null));
});

ajax.core.transit_type = (function ajax$core$transit_type(p__27481){
var map__27484 = p__27481;
var map__27484__$1 = ((((!((map__27484 == null)))?((((map__27484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27484):map__27484);
var type = cljs.core.get.call(null,map__27484__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var or__16074__auto__ = type;
if(cljs.core.truth_(or__16074__auto__)){
return or__16074__auto__;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
});
ajax.core.transit_write_fn = (function ajax$core$transit_write_fn(type,request){
var writer = (function (){var or__16074__auto__ = new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__16074__auto__)){
return or__16074__auto__;
} else {
return cognitect.transit.writer.call(null,type,request);
}
})();
return ((function (writer){
return (function ajax$core$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write.call(null,writer,params);
});
;})(writer))
});
ajax.core.transit_request_format = (function ajax$core$transit_request_format(var_args){
var args27486 = [];
var len__17132__auto___27489 = arguments.length;
var i__17133__auto___27490 = (0);
while(true){
if((i__17133__auto___27490 < len__17132__auto___27489)){
args27486.push((arguments[i__17133__auto___27490]));

var G__27491 = (i__17133__auto___27490 + (1));
i__17133__auto___27490 = G__27491;
continue;
} else {
}
break;
}

var G__27488 = args27486.length;
switch (G__27488) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27486.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
var type = ajax.core.transit_type.call(null,request);
var mime_type = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"json","json",1279968570)))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.transit_write_fn.call(null,type,request),new cljs.core.Keyword(null,"content-type","content-type",-508222634),[cljs.core.str("application/transit+"),cljs.core.str(mime_type)].join('')], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;
ajax.core.transit_read_fn = (function ajax$core$transit_read_fn(request){
var reader = (function (){var or__16074__auto__ = new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__16074__auto__)){
return or__16074__auto__;
} else {
return cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),request);
}
})();
return ((function (reader){
return (function ajax$core$transit_read_fn_$_transit_read_response(response){
var data = cognitect.transit.read.call(null,reader,ajax.protocols._body.call(null,response));
if(cljs.core.truth_(new cljs.core.Keyword(null,"raw","raw",1604651272).cljs$core$IFn$_invoke$arity$1(request))){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
;})(reader))
});
ajax.core.transit_response_format = (function ajax$core$transit_response_format(var_args){
var args27493 = [];
var len__17132__auto___27496 = arguments.length;
var i__17133__auto___27497 = (0);
while(true){
if((i__17133__auto___27497 < len__17132__auto___27496)){
args27493.push((arguments[i__17133__auto___27497]));

var G__27498 = (i__17133__auto___27497 + (1));
i__17133__auto___27497 = G__27498;
continue;
} else {
}
break;
}

var G__27495 = args27493.length;
switch (G__27495) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27493.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return ajax.core.transit_response_format.call(null,ajax.core.transit_type.call(null,request),request);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,request){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.transit_read_fn.call(null,request),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 2;
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,ajax.core.params_to_str),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(var_args){
var args27500 = [];
var len__17132__auto___27503 = arguments.length;
var i__17133__auto___27504 = (0);
while(true){
if((i__17133__auto___27504 < len__17132__auto___27503)){
args27500.push((arguments[i__17133__auto___27504]));

var G__27505 = (i__17133__auto___27504 + (1));
i__17133__auto___27504 = G__27505;
continue;
} else {
}
break;
}

var G__27502 = args27500.length;
switch (G__27502) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27500.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.protocols._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.core.raw_response_format.call(null);
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.text_request_format = (function ajax$core$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,cljs.core.identity),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
});
ajax.core.text_response_format = ajax.core.raw_response_format;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax.core.strip_prefix = (function ajax$core$strip_prefix(prefix,text){
if(cljs.core.truth_((function (){var and__16062__auto__ = prefix;
if(cljs.core.truth_(and__16062__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__16062__auto__;
}
})())){
return text.substring(prefix.length);
} else {
return text;
}
});
ajax.core.json_read = (function ajax$core$json_read(var_args){
var args27507 = [];
var len__17132__auto___27510 = arguments.length;
var i__17133__auto___27511 = (0);
while(true){
if((i__17133__auto___27511 < len__17132__auto___27510)){
args27507.push((arguments[i__17133__auto___27511]));

var G__27512 = (i__17133__auto___27511 + (1));
i__17133__auto___27511 = G__27512;
continue;
} else {
}
break;
}

var G__27509 = args27507.length;
switch (G__27509) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27507.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;
/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(var_args){
var args27514 = [];
var len__17132__auto___27520 = arguments.length;
var i__17133__auto___27521 = (0);
while(true){
if((i__17133__auto___27521 < len__17132__auto___27520)){
args27514.push((arguments[i__17133__auto___27521]));

var G__27522 = (i__17133__auto___27521 + (1));
i__17133__auto___27521 = G__27522;
continue;
} else {
}
break;
}

var G__27516 = args27514.length;
switch (G__27516) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27514.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__27517){
var map__27518 = p__27517;
var map__27518__$1 = ((((!((map__27518 == null)))?((((map__27518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27518):map__27518);
var prefix = cljs.core.get.call(null,map__27518__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var keywords_QMARK_ = cljs.core.get.call(null,map__27518__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var raw = cljs.core.get.call(null,map__27518__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.core.raw_response_format], null)], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args27524 = [];
var len__17132__auto___27527 = arguments.length;
var i__17133__auto___27528 = (0);
while(true){
if((i__17133__auto___27528 < len__17132__auto___27527)){
args27524.push((arguments[i__17133__auto___27528]));

var G__27529 = (i__17133__auto___27528 + (1));
i__17133__auto___27528 = G__27529;
continue;
} else {
}
break;
}

var G__27526 = args27524.length;
switch (G__27526) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27524.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;
ajax.core.get_accept_entries = (function ajax$core$get_accept_entries(var_args){
var args27531 = [];
var len__17132__auto___27534 = arguments.length;
var i__17133__auto___27535 = (0);
while(true){
if((i__17133__auto___27535 < len__17132__auto___27534)){
args27531.push((arguments[i__17133__auto___27535]));

var G__27536 = (i__17133__auto___27535 + (1));
i__17133__auto___27535 = G__27536;
continue;
} else {
}
break;
}

var G__27533 = args27531.length;
switch (G__27533) {
case 2:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27531.length)].join('')));

}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
});

ajax.core.get_accept_entries.cljs$lang$maxFixedArity = 2;
ajax.core.content_type_matches = (function ajax$core$content_type_matches(var_args){
var args27538 = [];
var len__17132__auto___27541 = arguments.length;
var i__17133__auto___27542 = (0);
while(true){
if((i__17133__auto___27542 < len__17132__auto___27541)){
args27538.push((arguments[i__17133__auto___27542]));

var G__27543 = (i__17133__auto___27542 + (1));
i__17133__auto___27542 = G__27543;
continue;
} else {
}
break;
}

var G__27540 = args27538.length;
switch (G__27540) {
case 2:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27538.length)].join('')));

}
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.content_type_matches.cljs$lang$maxFixedArity = 2;
ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var args27545 = [];
var len__17132__auto___27548 = arguments.length;
var i__17133__auto___27549 = (0);
while(true){
if((i__17133__auto___27549 < len__17132__auto___27548)){
args27545.push((arguments[i__17133__auto___27549]));

var G__27550 = (i__17133__auto___27549 + (1));
i__17133__auto___27549 = G__27550;
continue;
} else {
}
break;
}

var G__27547 = args27545.length;
switch (G__27547) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27545.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;
ajax.core.get_default_format = (function ajax$core$get_default_format(response,p__27552){
var map__27555 = p__27552;
var map__27555__$1 = ((((!((map__27555 == null)))?((((map__27555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27555):map__27555);
var request = map__27555__$1;
var response_format = cljs.core.get.call(null,map__27555__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,ajax.core.get_content_type.call(null,response),request);
return ajax.core.get_format.call(null,request,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args27557 = [];
var len__17132__auto___27560 = arguments.length;
var i__17133__auto___27561 = (0);
while(true){
if((i__17133__auto___27561 < len__17132__auto___27560)){
args27557.push((arguments[i__17133__auto___27561]));

var G__27562 = (i__17133__auto___27561 + (1));
i__17133__auto___27561 = G__27562;
continue;
} else {
}
break;
}

var G__27559 = args27557.length;
switch (G__27559) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27557.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;
ajax.core.accept_header = (function ajax$core$accept_header(p__27564){
var map__27567 = p__27564;
var map__27567__$1 = ((((!((map__27567 == null)))?((((map__27567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27567):map__27567);
var request = map__27567__$1;
var response_format = cljs.core.get.call(null,map__27567__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return cljs.core.mapcat.call(null,ajax.core.get_accept_entries.call(null,request),response_format);
} else {
return ajax.core.get_accept_entries.call(null,request,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args27569 = [];
var len__17132__auto___27572 = arguments.length;
var i__17133__auto___27573 = (0);
while(true){
if((i__17133__auto___27573 < len__17132__auto___27572)){
args27569.push((arguments[i__17133__auto___27573]));

var G__27574 = (i__17133__auto___27573 + (1));
i__17133__auto___27573 = G__27574;
continue;
} else {
}
break;
}

var G__27571 = args27569.length;
switch (G__27571) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27569.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header.call(null,opts);
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null));
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.get_response_format = (function ajax$core$get_response_format(p__27576){
var map__27579 = p__27576;
var map__27579__$1 = ((((!((map__27579 == null)))?((((map__27579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27579):map__27579);
var opts = map__27579__$1;
var response_format = cljs.core.get.call(null,map__27579__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if((response_format instanceof ajax.core.ResponseFormat)){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return ajax.core.detect_response_format.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,response_format);
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var args27581 = [];
var len__17132__auto___27584 = arguments.length;
var i__17133__auto___27585 = (0);
while(true){
if((i__17133__auto___27585 < len__17132__auto___27584)){
args27581.push((arguments[i__17133__auto___27585]));

var G__27586 = (i__17133__auto___27585 + (1));
i__17133__auto___27585 = G__27586;
continue;
} else {
}
break;
}

var G__27583 = args27581.length;
switch (G__27583) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27581.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (handler,interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (handler,interceptors){
return (function (response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return (function (interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;
ajax.core.base_handler = (function ajax$core$base_handler(interceptors,p__27588){
var map__27591 = p__27588;
var map__27591__$1 = ((((!((map__27591 == null)))?((((map__27591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27591):map__27591);
var handler = cljs.core.get.call(null,map__27591__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,handler,interceptors);
} else {
return ajax.core.throw_error.call(null,"No ajax handler provided.");
}
});
ajax.core.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.core.ProcessGet(null,null,null)),(new ajax.core.DirectSubmission(null,null,null)),(new ajax.core.ApplyRequestFormat(null,null,null))], null);
ajax.core.default_interceptors = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
ajax.core.normalize_request = (function ajax$core$normalize_request(request){
var response_format = ajax.core.get_response_format.call(null,request);
return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"method","method",55703592),ajax.core.normalize_method),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),((function (response_format){
return (function (p1__27593_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__16074__auto__ = p1__27593_SHARP_;
if(cljs.core.truth_(or__16074__auto__)){
return or__16074__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_interceptors);
}
})(),ajax.core.request_interceptors);
});})(response_format))
);
});
ajax.core.new_default_api = (function ajax$core$new_default_api(){
return (new goog.net.XhrIo());
});
ajax.core.raw_ajax_request = (function ajax$core$raw_ajax_request(p__27594){
var map__27597 = p__27594;
var map__27597__$1 = ((((!((map__27597 == null)))?((((map__27597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27597):map__27597);
var request = map__27597__$1;
var interceptors = cljs.core.get.call(null,map__27597__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var request__$1 = cljs.core.reduce.call(null,ajax.core.process_request,request,interceptors);
var handler = ajax.core.base_handler.call(null,cljs.core.reverse.call(null,interceptors),request__$1);
var api = (function (){var or__16074__auto__ = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__16074__auto__)){
return or__16074__auto__;
} else {
return ajax.core.new_default_api.call(null);
}
})();
return ajax.protocols._js_ajax_request.call(null,api,request__$1,handler);
});
ajax.core.ajax_request = (function ajax$core$ajax_request(request){
return ajax.core.raw_ajax_request.call(null,ajax.core.normalize_request.call(null,request));
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.call(null,format_params);
} else {
var G__27600 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__27600) {
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "text":
return ajax.core.text_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "url":
return ajax.core.url_request_format.call(null);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_element = (function ajax$core$keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,format),ajax$core$keyword_response_format_element.call(null,cljs.core.second.call(null,format),format_params)], null);
} else {
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.call(null);
} else {
var G__27603 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__27603) {
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "text":
return ajax.core.text_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "detect":
return ajax.core.detect_response_format.call(null);

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__27605_SHARP_){
return ajax.core.keyword_response_format_element.call(null,p1__27605_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_element.call(null,format,format_params);
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(var_args){
var args27606 = [];
var len__17132__auto___27619 = arguments.length;
var i__17133__auto___27620 = (0);
while(true){
if((i__17133__auto___27620 < len__17132__auto___27619)){
args27606.push((arguments[i__17133__auto___27620]));

var G__27621 = (i__17133__auto___27620 + (1));
i__17133__auto___27620 = G__27621;
continue;
} else {
}
break;
}

var G__27608 = args27606.length;
switch (G__27608) {
case 2:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27606.length)].join('')));

}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2 = (function (p__27609,p__27610){
var map__27611 = p__27609;
var map__27611__$1 = ((((!((map__27611 == null)))?((((map__27611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27611):map__27611);
var handler = cljs.core.get.call(null,map__27611__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__27611__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__27611__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var vec__27612 = p__27610;
var ok = cljs.core.nth.call(null,vec__27612,(0),null);
var result = cljs.core.nth.call(null,vec__27612,(1),null);
var temp__4423__auto___27623 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___27623)){
var h_27624 = temp__4423__auto___27623;
h_27624.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1 = (function (p__27614){
var map__27615 = p__27614;
var map__27615__$1 = ((((!((map__27615 == null)))?((((map__27615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27615):map__27615);
var handler = cljs.core.get.call(null,map__27615__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__27615__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__27615__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
return ((function (map__27615,map__27615__$1,handler,error_handler,finally$){
return (function (p__27617){
var vec__27618 = p__27617;
var ok = cljs.core.nth.call(null,vec__27618,(0),null);
var result = cljs.core.nth.call(null,vec__27618,(1),null);
var temp__4423__auto___27625 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___27625)){
var h_27626 = temp__4423__auto___27625;
h_27626.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(map__27615,map__27615__$1,handler,error_handler,finally$))
});

ajax.core.transform_handler.cljs$lang$maxFixedArity = 2;
ajax.core.transform_opts = (function ajax$core$transform_opts(p__27627){
var map__27630 = p__27627;
var map__27630__$1 = ((((!((map__27630 == null)))?((((map__27630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27630):map__27630);
var opts = map__27630__$1;
var method = cljs.core.get.call(null,map__27630__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__27630__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__27630__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var params = cljs.core.get.call(null,map__27630__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.call(null,map__27630__$1,new cljs.core.Keyword(null,"body","body",-2049205669));

var needs_format = ((body == null)) && (cljs.core.not_EQ_.call(null,method,"GET"));
var rf = (cljs.core.truth_((function (){var or__16074__auto__ = format;
if(cljs.core.truth_(or__16074__auto__)){
return or__16074__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.keyword_response_format.call(null,response_format,opts));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request.call(null,ajax.core.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method)));
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__17139__auto__ = [];
var len__17132__auto___27634 = arguments.length;
var i__17133__auto___27635 = (0);
while(true){
if((i__17133__auto___27635 < len__17132__auto___27634)){
args__17139__auto__.push((arguments[i__17133__auto___27635]));

var G__27636 = (i__17133__auto___27635 + (1));
i__17133__auto___27635 = G__27636;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((1) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((1)),(0))):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17140__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21553__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__21553__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21553__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq27632){
var G__27633 = cljs.core.first.call(null,seq27632);
var seq27632__$1 = cljs.core.next.call(null,seq27632);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__27633,seq27632__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__17139__auto__ = [];
var len__17132__auto___27639 = arguments.length;
var i__17133__auto___27640 = (0);
while(true){
if((i__17133__auto___27640 < len__17132__auto___27639)){
args__17139__auto__.push((arguments[i__17133__auto___27640]));

var G__27641 = (i__17133__auto___27640 + (1));
i__17133__auto___27640 = G__27641;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((1) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((1)),(0))):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17140__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21553__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__21553__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21553__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq27637){
var G__27638 = cljs.core.first.call(null,seq27637);
var seq27637__$1 = cljs.core.next.call(null,seq27637);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__27638,seq27637__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__17139__auto__ = [];
var len__17132__auto___27644 = arguments.length;
var i__17133__auto___27645 = (0);
while(true){
if((i__17133__auto___27645 < len__17132__auto___27644)){
args__17139__auto__.push((arguments[i__17133__auto___27645]));

var G__27646 = (i__17133__auto___27645 + (1));
i__17133__auto___27645 = G__27646;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((1) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((1)),(0))):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17140__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21553__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__21553__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21553__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq27642){
var G__27643 = cljs.core.first.call(null,seq27642);
var seq27642__$1 = cljs.core.next.call(null,seq27642);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__27643,seq27642__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__17139__auto__ = [];
var len__17132__auto___27649 = arguments.length;
var i__17133__auto___27650 = (0);
while(true){
if((i__17133__auto___27650 < len__17132__auto___27649)){
args__17139__auto__.push((arguments[i__17133__auto___27650]));

var G__27651 = (i__17133__auto___27650 + (1));
i__17133__auto___27650 = G__27651;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((1) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((1)),(0))):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17140__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21553__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__21553__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21553__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq27647){
var G__27648 = cljs.core.first.call(null,seq27647);
var seq27647__$1 = cljs.core.next.call(null,seq27647);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__27648,seq27647__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__17139__auto__ = [];
var len__17132__auto___27654 = arguments.length;
var i__17133__auto___27655 = (0);
while(true){
if((i__17133__auto___27655 < len__17132__auto___27654)){
args__17139__auto__.push((arguments[i__17133__auto___27655]));

var G__27656 = (i__17133__auto___27655 + (1));
i__17133__auto___27655 = G__27656;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((1) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((1)),(0))):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17140__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21553__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__21553__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21553__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq27652){
var G__27653 = cljs.core.first.call(null,seq27652);
var seq27652__$1 = cljs.core.next.call(null,seq27652);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__27653,seq27652__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__17139__auto__ = [];
var len__17132__auto___27659 = arguments.length;
var i__17133__auto___27660 = (0);
while(true){
if((i__17133__auto___27660 < len__17132__auto___27659)){
args__17139__auto__.push((arguments[i__17133__auto___27660]));

var G__27661 = (i__17133__auto___27660 + (1));
i__17133__auto___27660 = G__27661;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((1) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((1)),(0))):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17140__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21553__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__21553__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21553__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq27657){
var G__27658 = cljs.core.first.call(null,seq27657);
var seq27657__$1 = cljs.core.next.call(null,seq27657);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__27658,seq27657__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__17139__auto__ = [];
var len__17132__auto___27664 = arguments.length;
var i__17133__auto___27665 = (0);
while(true){
if((i__17133__auto___27665 < len__17132__auto___27664)){
args__17139__auto__.push((arguments[i__17133__auto___27665]));

var G__27666 = (i__17133__auto___27665 + (1));
i__17133__auto___27665 = G__27666;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((1) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((1)),(0))):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17140__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21553__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__21553__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21553__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq27662){
var G__27663 = cljs.core.first.call(null,seq27662);
var seq27662__$1 = cljs.core.next.call(null,seq27662);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__27663,seq27662__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__17139__auto__ = [];
var len__17132__auto___27669 = arguments.length;
var i__17133__auto___27670 = (0);
while(true){
if((i__17133__auto___27670 < len__17132__auto___27669)){
args__17139__auto__.push((arguments[i__17133__auto___27670]));

var G__27671 = (i__17133__auto___27670 + (1));
i__17133__auto___27670 = G__27671;
continue;
} else {
}
break;
}

var argseq__17140__auto__ = ((((1) < args__17139__auto__.length))?(new cljs.core.IndexedSeq(args__17139__auto__.slice((1)),(0))):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17140__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21553__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PATCH",(((f__21553__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21553__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq27667){
var G__27668 = cljs.core.first.call(null,seq27667);
var seq27667__$1 = cljs.core.next.call(null,seq27667);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__27668,seq27667__$1);
});

//# sourceMappingURL=core.js.map?rel=1447113458767