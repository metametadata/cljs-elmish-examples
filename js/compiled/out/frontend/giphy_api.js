// Compiled by ClojureScript 1.7.122 {}
goog.provide('frontend.giphy_api');
goog.require('cljs.core');
goog.require('ajax.core');
/**
 * Async. Will eventually call (handler url) on success.
 */
frontend.giphy_api.get_random_gif = (function frontend$giphy_api$get_random_gif(topic,handler){
return ajax.core.GET.call(null,"http://api.giphy.com/v1/gifs/random",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, ["api_key","dc6zaTOxFJmzC","tag",topic], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__27108_SHARP_){
return handler.call(null,cljs.core.get_in.call(null,p1__27108_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data","image_url"], null)));
})], null));
});

//# sourceMappingURL=giphy_api.js.map?rel=1448902872254