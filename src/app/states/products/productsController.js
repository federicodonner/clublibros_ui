app.controller("ProductsController", [
  '$scope',
  'ProductsService',
  function (
    $scope,
    ProductsService
  ) {

    ProductsService.initialize();

    $scope.data = ProductsService.data;


  }]);
