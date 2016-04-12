'use strict';

/**
 * Created by Edmundo on 4/8/2016
 *
 * @ngdoc function
 * @name catalogoWebApp.controller:MainController
 * @description
 * # MainController
 * Controller of the catalogoWebApp
 */
angular.module('catalogoWebApp')
  .controller('MainController', ['$http', function ($http) {
    var ctrl = this;


    /**
     * Load app main data.
     * TODO move to object in factory, with upload (post function).
     */
    this.loadData = function() {

      $http.get('/api/data').then(
        function successCallback(response) {
        ctrl.json = response.data;
      },
        function errorCallback(response) {
          ctrl.json = 'Error from server in AJAX request.';
      });

    };

    // Execute data load.
    this.loadData();

  }]);
