app.service("HomeService", [
  'ServerService',
  'SessionService',
  'NavBarService',
  'Configuration',
  function (
    ServerService,
    SessionService,
    NavBarService,
    Configuration
  ) {

    var _self = {
      data:{
        configuration:{},
        home_banner_precios:''
      },

      initialize:function(){
        NavBarService.setActiveSection(1);
        _self.data.home_banner_precios = Configuration.pictures + '/home_banner_precios.jpg';

      }

    }

    return _self;

  }]);
