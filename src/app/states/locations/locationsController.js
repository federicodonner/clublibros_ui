app.controller("LocationsController", [
  '$scope',
  'LocationsService',
  function (
    $scope,
    LocationsService
  ) {



    $scope.data = LocationsService.data;

    LocationsService.initialize();


  }]);
