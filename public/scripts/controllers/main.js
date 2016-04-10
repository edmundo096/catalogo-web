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
  .controller('MainController', ['$location', function ($location) {
    var ctrl = this;

    this.text = 'Hello';

    this.foo = function() {
      ctrl.text = 'World';
    }

  }]);
