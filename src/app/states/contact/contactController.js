app.controller("ContactController", [
  '$scope',
  'ContactService',
  function (
    $scope,
    ContactService
  ) {

    ContactService.initialize();

    $scope.data = ContactService.data;

    $scope.contactSubmit = ContactService.contactSubmit;


  }]);
