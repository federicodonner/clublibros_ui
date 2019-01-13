app.controller("AlmuerzosController", [
  '$scope',
  'AlmuerzosService',
  function (
    $scope,
    AlmuerzosService
  ) {

    AlmuerzosService.initialize();

    $scope.data = AlmuerzosService.data;


  }]);
