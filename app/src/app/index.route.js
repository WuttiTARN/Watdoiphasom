(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/product', {
        templateUrl: 'app/product/product.html',
        controller: 'productController'
      })
      .when('/shop', {
        templateUrl: 'app/shop/shop.html',
        controller: 'shopController'
      })
      .when('/event', {
        templateUrl: 'app/event/event.html',
        controller: 'eventController'
      })
      .when('/profile', {
        templateUrl: 'app/profile/profile.html',
        controller: 'profileController'
      })
      .when('/register', {
        templateUrl: 'app/register/register.html',
        controller: 'registerController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
