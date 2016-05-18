(function () {
  'use strict';

  angular
    .module('app')
    .controller('addProductController', addProductController)
    .controller('listProductController', listProductController)
    .controller('editProductController', editProductController);


  /** @ngInject */
  function addProductController($http, $location, $rootScope, productService) {
    var vm = this;
    vm.product = {};
    vm.addPerson = true;
    vm.editPerson = false;
    vm.addProduct = function (flowFiles) {
      productService.save(vm.product, function (data) {
        // after adding the object, add a new picture
        // get the product id which the image will be addded
        var productid = data.id;
        // set location
        flowFiles.opts.target = 'http://localhost:8080/productImage/add';
        flowFiles.opts.testChunks = false;
        flowFiles.opts.query = {productid: productid};
        flowFiles.upload();

        $rootScope.addSuccess = true;
        $location.path("listProduct");
      });
    }

  }


  /** @ngInject */
  function listProductController( $scope,$rootScope, productService, $route, queryProductService) {
    var vm = this;
    //$http.get("/product/").success(function (data) {
    vm.queryPromise = productService.query(function (data) {
      // $scope.totalNetPrice= totalCalService.getTotalNetPrice(data);
      vm.products = data;
    }).$promise;


    $scope.$on('$locationChangeStart', function (event) {
      $rootScope.addSuccess = false;
      $rootScope.editSuccess = false;
      $rootScope.deleteSuccess = false;
    });

    vm.deleteProduct = function (id) {
      var answer = confirm("Do you want to delete the product?");
      if (answer) {
        productService.delete({id: id}, function () {
          $rootScope.deleteSuccess = true;
          $route.reload();
        })
      }
    }

    vm.searchProduct = function (name) {
      queryProductService.query({name: name}, function (data) {
        vm.products = data;
      });
    }

  }


  /** @ngInject */
  function editProductController( $http, $routeParams, $location, $rootScope, productService) {
    var vm = this;
    vm.addPerson = false;
    vm.editPerson = true;
    var id = $routeParams.id;
    productService.get({id:id},
      // success function
      function(data){
        vm.product=data;
      }
    )


    vm.editProduct = function (flowFiles) {
      //$http.put("/product", $scope.product).then(function () {
      productService.update({id: vm.product.id}, vm.product, function () {
        var productid = vm.product.id;
        // set location
        flowFiles.opts.target = 'http://localhost:8080/productImage/add';
        flowFiles.opts.testChunks = false;
        flowFiles.opts.query = {productid: productid};
        flowFiles.upload();
        $rootScope.editSuccess = true;
        $location.path("listProduct");
      });
    }

    vm.deleteImage = function (id) {
      var answer = confirm("Do you want to delete the image?");
      if (answer) {
        $http.delete("http://localhost:8080/productImage/remove?imageid=" + id + "&productid=" + vm.product.id).success(function (data) {
          vm.product = data;
        });
      }
    }


  }
})();
