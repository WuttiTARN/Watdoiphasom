(function () {
  'use strict';

  angular
    .module('app')
    .controller('shoppingCartController', ShoppingCartController);


  /** @ngInject */
<<<<<<< HEAD
  function ShoppingCartController(shoppingCartService,cartManagement,$scope, $rootScope, $routeParams,$log ) {
    var vm = this;

    if ($rootScope.shoppingCart != null){
      vm.cart = $rootScope.shoppingCart;
    }else {
      var id = $routeParams.id;
      shoppingCartService.get({id: id}, function (data) {
        vm.cart = data;
      })
    }
    $scope.$on('$locationChangeStart', function () {
=======
  function ShoppingCartController(shoppingCartService, $location, $rootScope, $rootParams) {
    var vm = this;
    var id = $rootParams.id;
    shoppingCartService.get({id: id}, function (data) {
      vm.cart = data;
    })

    vm.$on('$locationChangeStart', function () {
>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127
      $rootScope.cartUpdateSuccess = false;

    });

    vm.updateCart = function () {
<<<<<<< HEAD
        $rootScope.cartUpdateSuccess = true;
=======
      shoppingCartService.update({id: id}, vm.cart, function () {
        $rootScope.cartUpdateSuccess = true;

      });
>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127
    }

    vm.totalEach = function (index) {
      return vm.cart.selectedProducts[index].product.totalPrice * vm.cart.selectedProducts[index].amount;
    }

<<<<<<< HEAD
    vm.saveCart = function (cart){
      cart.user = {};
      cart.user.username = $rootScope.user.name;
      cartManagement.saveCart(cart,function(returnData){
        $rootScope.shoppingCart = returnData;
        //success add cart
        $log.debug("save cart success");
      })
    }


=======
>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127
    vm.total = function () {
      var total = 0;
      angular.forEach(vm.cart.selectedProducts, function (item) {
        total += item.amount * item.product.totalPrice;
      })

      return total;
    }
<<<<<<< HEAD

    vm.removeProduct = function(index){
      $rootScope.shoppingCart.selectedProducts.splice(index, 1);
    }
=======
>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127
  }
})();
