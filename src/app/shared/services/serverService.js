app.service("ServerService", [
  'ConfigurationResource',
  'ProductsResource',
  'AlmuerzosResource',
  'SessionService',
  function (
    ConfigurationResource,
    ProductsResource,
    AlmuerzosResource,
    SessionService
  ) {

    var _self = {
      data:{

      },

      initialize:function(){

      },

      fetchConfiguration:function(){
        var configuracion = new ConfigurationResource();
        SessionService.data.configurationPromise = configuracion.$query(function(response){
          SessionService.setConfiguration(response.configuracion[0]);
        })
      },

      fetchProducts:function(){
        var productos = new ProductsResource();
        SessionService.data.productsPromise = productos.$query(function(response){
          SessionService.setProducts(response.productos);
        })
      },

      fetchAlmuerzos:function(){
        var almuerzos = new AlmuerzosResource();
        SessionService.data.almuerzosPromise = almuerzos.$query(function(response){
          SessionService.setAlmuerzos(response.almuerzos);
        })
      },

      sendEmail:function(formData){

      }

    }

    return _self;

  }]);
