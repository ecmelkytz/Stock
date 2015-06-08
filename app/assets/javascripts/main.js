var app = angular.module("StockWatch", ['ngResource', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/stocks/index.html'
    })
    .when('/stock/:stockId', {
      templateUrl: 'templates/stocks/about.html',
      controller:'viewController'
    });
}]);

