app.service("AlmuerzosService", [
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
        almuerzos:[],
        mondayOfThisWeek:0,
        almuerzoEstaSemana:null,
        mondayOfNextWeek:0,
        almuerzoProximaSemana:null
      },

      initialize:function(){

        ServerService.fetchAlmuerzos();
        NavBarService.setActiveSection(5);
        _self.data.picturesUrl = Configuration.productPicturesUrl;

        // Do nothing until the user is finished loading
        var promises = [];
        promises.push(SessionService.data.almuerzosPromise);

        $q.all(promises).then(function(allResponses){
          _self.data.almuerzos = SessionService.getAlmuerzos();

          _self.findThisWeek();
          var fechaLunesAux = new Date();
          _self.data.almuerzos.forEach(function(almuerzo,index){
            if(almuerzo.monday == _self.data.mondayOfThisWeek.getTime()){
              _self.data.almuerzoEstaSemana = almuerzo;
              fechaLunesAux.setTime(almuerzo.monday);
              _self.data.almuerzoEstaSemana['mondayDate'] = fechaLunesAux.getDate();
              _self.data.almuerzoEstaSemana['mondayMonth'] = fechaLunesAux.getMonth()+1;
              fechaLunesAux.setDate(fechaLunesAux.getDate()+4)
              _self.data.almuerzoEstaSemana['fridayDate'] = fechaLunesAux.getDate();
              _self.data.almuerzoEstaSemana['fridayMonth'] = fechaLunesAux.getMonth()+1;

            }else if(almuerzo.monday == _self.data.mondayOfNextWeek.getTime()){
              _self.data.almuerzoProximaSemana = almuerzo;
              fechaLunesAux.setTime(almuerzo.monday);
              _self.data.almuerzoProximaSemana['mondayDate'] = fechaLunesAux.getDate();
              _self.data.almuerzoProximaSemana['mondayMonth'] = fechaLunesAux.getMonth()+1;
              fechaLunesAux.setDate(fechaLunesAux.getDate()+4)
              _self.data.almuerzoProximaSemana['fridayDate'] = fechaLunesAux.getDate();
              _self.data.almuerzoProximaSemana['fridayMonth'] = fechaLunesAux.getMonth()+1;
            }
          });
        });
      },

      // Devuelve el lunes de esta semana y de la semana siguiente
      findThisWeek:function(){
        _self.data.mondayOfThisWeek = new Date();
        // Cambia la hora a la hora de Uruguay para que cambie de fecha a las 12PM y no a las 9PM
        _self.data.mondayOfThisWeek.setHours(_self.data.mondayOfThisWeek.getHours()-3);
        if (_self.data.mondayOfThisWeek.getUTCDay() == 0){
          _self.data.mondayOfThisWeek.setUTCDate(_self.data.mondayOfThisWeek.getUTCDate()-6);
        }else{
          _self.data.mondayOfThisWeek.setUTCDate(_self.data.mondayOfThisWeek.getUTCDate()-(_self.data.mondayOfThisWeek.getUTCDay()-2));
        }
        // Set la hora a 00:00.000
        _self.data.mondayOfThisWeek.setHours(0);
        _self.data.mondayOfThisWeek.setMinutes(0);
        _self.data.mondayOfThisWeek.setSeconds(0);
        _self.data.mondayOfThisWeek.setMilliseconds(0);

        _self.data.mondayOfNextWeek = new Date();
        _self.data.mondayOfNextWeek.setTime(_self.data.mondayOfThisWeek.getTime()+604800000);
      },

    }

    return _self;

  }]);
