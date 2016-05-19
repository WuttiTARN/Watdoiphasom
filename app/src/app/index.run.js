<<<<<<< HEAD
(function () {
=======
(function() {
>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127
  'use strict';

  angular
    .module('app')
    .run(runBlock)
    .run(runSecurity);

  /** @ngInject */
<<<<<<< HEAD
  function runBlock($log) {

    $log.debug('runBlock end');
  }

  /** @ngInject */
  function runSecurity($rootScope, $location, $cookies, UserService) {
    var removeErrorMsg = $rootScope.$on('$viewContentLoaded', function () {
=======
  function  runSecurity ($rootScope, $location, $cookies, UserService){
    var removeErrorMsg = $rootScope.$on('$viewContentLoaded', function (){
>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127
      delete $rootScope.error;
    });
    removeErrorMsg();

<<<<<<< HEAD

=======
>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127
    $rootScope.hasRole = function (role) {
      if ($rootScope.user == undefined) {
        return false;
      }

<<<<<<< HEAD
      if ($rootScope.user.roles[role] == undefined) {
=======
      if ($rootScope.user.roles[role] == undefined){
>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127
        return false;
      }

      return $rootScope.user.roles[role];
    }

    $rootScope.logout = function () {
      delete $rootScope.user;
      delete $rootScope.authToken;
      $cookies.remove('authToken');
<<<<<<< HEAD
      $location.path("/listProduct")

      // remove shopping Cart
      $rootScope.shoppingCart = {};
=======
      $location.path("/index")
>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127
    }

    /* Try getting valid user from cookie or go to login page */
    var originalPath = $location.path();
<<<<<<< HEAD
    $location.path("/listProduct");
    var authToken = $cookies.get('authToken');
    if (authToken != undefined) {
      $rootScope.authToken = authToken;
      UserService.get(function (user) {
=======
    $location.path("/index");
    var authToken = $cookies.get('authToken');
    if (authToken != undefined){
      $rootScope.authToken = authToken;
      UserService.get(function(user){
>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127
        $rootScope.user = user;
        $location.path(originalPath);
      })
    }
<<<<<<< HEAD
    $rootScope.initialized = true;
    $rootScope.shoppingCart = {};
  }


=======
    $rootScope.initialzed = true;
  }

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }
>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127

})();
