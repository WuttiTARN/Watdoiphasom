(function() {
  'use strict';
  angular
    .module('app')
    .config(routeConfig);
  function routeConfig($routeProvider) {
    $routeProvider.
    when('/home',{
      templateUrl: 'app/home/home.html'
    }).

    when('/register',{
      templateUrl: 'app/user/registration.html',
      controller: 'registerController',
      controllerAs: 'vm'
    }).

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

    when('/editReview/:id',{
      templateUrl: 'app/product/editReview.html',
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
    when('/shoppingCart',{
      templateUrl: 'app/shoppingcart/shoppingCart.html',
      controller: 'shoppingCartController',
      controllerAs: 'vm'
    }).
    otherwise({redirectTo: '/home'});
  }
})();
