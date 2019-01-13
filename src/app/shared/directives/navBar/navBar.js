app.directive('navBar', [
  'NavBarService',
  function (
    NavBarService
  ) {
    return {
      restrict: 'E',
      templateUrl:'app/shared/directives/navBar/navBar.html',
      scope: {
        headerOpacity: '=',
        backButton: '='
      },
      link: function (scope, element, attrs) {

        scope.data = NavBarService.data;

        scope.toggleResponsiveMenu = NavBarService.toggleResponsiveMenu;



      }
    };
  }
]);
