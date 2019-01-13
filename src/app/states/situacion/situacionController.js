app.controller("SituacionController", [
  '$scope',
  'SituacionService',
  function (
    $scope,
    SituacionService
  ) {

    SituacionService.initialize();

    $scope.data = SituacionService.data;


  }]);
