(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider.
<<<<<<< HEAD
=======
    when('/index',{
      templateUrl: 'app/index/index.html'
    }).
>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127
    when('/addProduct',{
      templateUrl: 'app/product/editProduct.html',
      controller: 'addProductController',
      controllerAs: 'vm'
    }).
    when('/editProduct/:id',{
      templateUrl: 'app/product/editProduct.html',
      controller: 'editProductController',
      controllerAs: 'vm'
    }).
    when('/listProduct',{
      templateUrl: 'app/product/productList.html',
      controller: 'listProductController',
      controllerAs: 'vm'
    }).
    when('/shoppingCart/:id',{
      templateUrl: 'app/shoppingcart/shoppingCart.html',
      controller: 'showShoppingCartController',
      controllerAs: 'vm'
    }).
<<<<<<< HEAD
    when('/shoppingCart',{
      templateUrl: 'app/shoppingcart/shoppingCart.html',
      controller: 'shoppingCartController',
      controllerAs: 'vm'

    }).
    otherwise({redirectTo: '/listProduct'});
=======
    otherwise({redirectTo: '/index'});
>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127

  }

})();
