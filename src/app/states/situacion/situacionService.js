app.service("SituacionService", [
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
        situacion_banner_comida:''
      },

      initialize:function(){
        NavBarService.setActiveSection(2);
        _self.data.situacion_banner_comida = Configuration.pictures + '/situacion_banner_comida.jpg';

      }

    }

    return _self;

  }]);
