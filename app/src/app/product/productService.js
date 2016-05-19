(function() {
'use strict'
  angular
    .module('app')
    .factory('productService',productService)
    .factory('totalCalService',totalCalService)
    .factory('queryProductService',queryProductService);



  /** @ngInject */
  function productService($resource){
    return $resource('/product/:id', { id: '@_id' }, {
<<<<<<< HEAD
        update: {
            method: 'PUT' // this method issues a PUT request
        }});
=======
      update: {
        method: 'PUT', // this method issues a PUT request
        params:{
          name:'@name',
          description: '@description',
          totalPrice:'@totalPrice'
        }
      }});
>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127

  }


  /** @ngInject */
  function totalCalService() {
    this.getTotalNetPrice = function (products) {
        var output = 0.0;

        for (var index = 0; index < products.length;index++) {
            var product = products[index];
            output += parseFloat(product.netPrice);
        }
        return output;
    }
}


  /** @ngInject */
  function queryProductService($resource){
    return $resource('/getProduct/?name=:name',
        {query:{method:'GET',params:{name:''},isArray:true}

        });
}
})();
