/* Genius POS storefront integration facade.
 * The supplied Bonds POS package was rebranded to Genius POS. This file
 * exposes the Genius namespace/events expected by the upgraded frontend.
 */
(function(global){
  const VERSION='1.0.0';
  const api={
    version:VERSION,
    openProductById(id){global.dispatchEvent(new CustomEvent('geniuspos:open-product',{detail:{id}}));},
    emit(name,detail={}){global.dispatchEvent(new CustomEvent(`geniuspos:${name}`,{detail}));},
    getUserId(){try{return JSON.parse(localStorage.getItem('geniuspos.session')||'null')?.userId||null}catch{return null}}
  };
  global.GeniusPOSIntegration=api;
  global.GeniusPOSOpenProductById=api.openProductById;
})(window);
