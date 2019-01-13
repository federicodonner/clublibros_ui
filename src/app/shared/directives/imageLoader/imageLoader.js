app.directive('imageLoader', [
  'Configuration',
  function (
    Configuration
  ) {
    return {
      restrict: 'A',
      scope: {
        model: '=ngModel'
      },
      link: function (scope, element, attrs) {
        element.addClass('no-foto');

        //Functions
        function clearImage(){
          element.css('background-image', 'url()');
          element.removeClass('loading');
          element.removeClass('no-foto');
        }

        function loadImage(pictureUrl){
          element.css('background-image', 'url(' + pictureUrl + ')');
        }

        //Events
        scope.$watch('model', function (newValue, oldValue) {
          //Init clear
          clearImage();

          if(scope.model) {
            var img = new Image();
            var picture = scope.model;

            element.addClass('loading');
            element.addClass('hide');
            img.src = picture;


            img.onload = function () {
              loadImage(picture);
              element.removeClass('loading');
              element.removeClass('hide');
            };
            img.onerror = function(){
              loadImage(Configuration.imagePlaceholder);
              element.removeClass('loading');
              element.removeClass('hide');
            }
          } else {
            element.addClass('no-foto');
          }
        });
      }
    };
  }
]);
