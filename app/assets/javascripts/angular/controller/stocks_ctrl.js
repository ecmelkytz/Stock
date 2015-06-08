app.controller('StocksCtrl', ['$scope', 'Stock', '$filter', function($scope, Stock, $filter) {
  $scope.stocks = Stock.all();
  $scope.selectedStock = null;

  function viewController($scope, Page, Stock, $routeParams, $location) {
    var id = $scope.stockId = $routeParams.stockId;
    $scope.item = Stock.get(id);
  };

  $scope.createStock = function() {
    var attr = {};
    attr.symbol = $filter('uppercase')($scope.newSymbol);
    var newStock = Stock.create(attr);
    $scope.stocks.push(newStock);
    $scope.newSymbol = "";
  };

   $scope.deleteStock = function(id, idx) {
    $scope.stocks.splice(idx, 1);
    return Stock.delete(id);
  };
}]);

app.controller('viewController', function ($scope, $routeParams){
  $scope.stocks = $scope.$parent.stocks;
  console.log($scope.$parent.stocks)
  for (var index=0; index < stocks.length; index++) {
    if (stocks[index].id == $routeParams.stockId) {
      $scope.stock = stocks[index];
      break;
    }
  }

  $http.get('stocks.json').success(function(data) {

  var stock = data.filter(function(entry){
    return entry.name === $scope.name;
  })[0];

  console.log(stock);
});
});