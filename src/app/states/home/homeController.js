app.controller("HomeController", [
  '$scope',
  'HomeService',
  function (
    $scope,
    HomeService
  ) {

    HomeService.initialize();

    $scope.data = HomeService.data;


  }]);
