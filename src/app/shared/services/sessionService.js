app.service("SessionService", [

  function (

  ) {

    var _self = {
      data:{
        configuration:{},
        configurationPromise:null,
        products:[],
        productsPromise:null,
        almuerzos:[],
        almuerzosPromise:null
      },

      initialize:function(){

      },

      getConfiguration:function(){
        return _self.data.configuration;
      },

      setConfiguration:function(configuration){
        _self.data.configuration = configuration;
      },

      getProducts:function(){
        return _self.data.products;
      },

      setProducts:function(products){
        _self.data.products = products;
      },

      getAlmuerzos:function(){
        return _self.data.almuerzos;
      },

      setAlmuerzos:function(almuerzos){
        _self.data.almuerzos = almuerzos;
      }


    }

    return _self;

  }]);
