'use strict';

/**
 * @ngdoc service
 * @name publicApp.JsonContainer
 * @description
 * # JsonContainer
 * Factory in the publicApp.
 */
angular.module('catalogoWebApp')
  .factory('JsonContainer', ['$http', '$q', function jsonContainerFactory($http, $q) {

    // Constructor.
    function JsonContainer() {
      'use strict';

      this.responseData = undefined;
      this.requestSucessfull = false;
    }


    // JsonContainer's makeAjaxRequest function.
    JsonContainer.prototype.makeAjaxRequest = function() {
      var data = this.responseData;
      var sucess = this.requestSucessfull;

      var deferred = $q.defer();
      var httpPromise = $http.get('/api/data');

      httpPromise.then(
        function(value) {
          // Assign data.
          data = value.data;
          sucess = true;

          deferred.resolve(value);
        },
        function(reason) {
          sucess = false;

          deferred.reject(reason);
        }
      );

      return deferred.promise;
    };


    // Angular Factory returns JsonContainer contructor.
    return JsonContainer;

  }]);
