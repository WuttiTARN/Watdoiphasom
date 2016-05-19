<<<<<<< HEAD
(function () {
  'use strict'
  angular
    .module('app')
    .factory('shoppingCartService', shoppingCartService)
    .factory('cartManagement', cartManagement);

  /** @ngInject */
  function shoppingCartService($resource) {
    return $resource('http://localhost:8080/shoppingcart/:id', {id: '@_id'}, {
      update: {
        method: 'PUT' // this method issues a PUT request
      }
    });

  }

  /** @ngInject */
  function cartManagement($resource) {
    return $resource('/shoppingcart/:action/:id', {id:'@_id'}, {
      addToCart: {
        method: 'POST',
        params: {'action': 'addToCart'}
      },
      saveCart:{
        method: 'POST',
        params: {'action' : 'saveCart'}
      }
    })
  }
=======
(function() {
'use strict'
  angular
    .module('app')
    .factory('shoppingCartService',shoppingCartService);

  /** @ngInject */

  function shoppingCartService($resource){
    return $resource('/shoppingcart/:id', { id: '@_id' }, {
        update: {
            method: 'PUT' // this method issues a PUT request
        }});

}
>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127
})();
