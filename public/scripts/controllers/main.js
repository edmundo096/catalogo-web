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
  .controller('MainController', ['JsonContainer', function (JsonContainer) {


    var ctrl = this;


    var jsonContainer = new JsonContainer();

    // Load app main data.
    jsonContainer.makeAjaxRequest().then(
      function success(value) {
        ctrl.categories = value.data;

        console.log(value.data);
      },
      function error(reason) {
        alert(reason);
      }
    );


    // Update the selected movie object.
    this.showDescriptionOf = function(movie) {
      this.movie = movie;
    }

  }]);
