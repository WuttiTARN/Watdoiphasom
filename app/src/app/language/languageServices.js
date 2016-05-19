(function () {
  'use strict';


  angular
    .module('app')
    .factory('UrlLanguageStorage', urlLanguageStorage);
<<<<<<< HEAD
=======

>>>>>>> 9a2d5077c44f970032b0f7b7bfbacad619139127
  /** @ngInject */
  function urlLanguageStorage($location) {
    return {
      put: function () {
      },
      get: function () {
        return $location.search()['lang']
      }
    };
  }
})();
