app.service("ProductsService", [
  '$q',
  'ServerService',
  'SessionService',
  'NavBarService',
  'Configuration',
  function (
    $q,
    ServerService,
    SessionService,
    NavBarService,
    Configuration
  ) {

    var _self = {
      data:{
        products:[],
        picturesUrl:''
      },

      initialize:function(){

        ServerService.fetchProducts();
        NavBarService.setActiveSection(4);
        _self.data.picturesUrl = Configuration.productPicturesUrl;

        // Do nothing until the user is finished loading
        var promises = [];
        promises.push(SessionService.data.productsPromise);

        $q.all(promises).then(function(allResponses){
          _self.data.products = SessionService.getProducts();

        });

      }

    }

    return _self;

  }]);
