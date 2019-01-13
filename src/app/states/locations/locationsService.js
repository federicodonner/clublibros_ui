app.service("LocationsService", [
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
        logos:{},
        fotos:{}
      },

      initialize:function(){
        NavBarService.setActiveSection(3);
        _self.data.logos['sagradoCorazon'] = Configuration.pictures+'/logo_sagrado_corazon.jpg';
        _self.data.fotos['sagradoCorazon'] = Configuration.pictures+'/foto_sagrado_corazon.jpg';
        _self.data.logos['elisaQueirolo'] = Configuration.pictures+'/logo_elisa_queirolo.jpg';
        _self.data.fotos['elisaQueirolo'] = Configuration.pictures+'/foto_elisa_queirolo.jpg';
        _self.data.logos['santaLuisa'] = Configuration.pictures+'/logo_santa_luisa.jpg';
        _self.data.fotos['santaLuisa'] = Configuration.pictures+'/foto_santa_luisa.jpg';
        _self.data.logos['santaMaria'] = Configuration.pictures+'/logo_santa_maria.jpg';
        _self.data.fotos['santaMaria'] = Configuration.pictures+'/foto_santa_maria.jpg';
        _self.data.logos['donBosco'] = Configuration.pictures+'/logo_don_bosco.jpg';
        _self.data.fotos['donBosco'] = Configuration.pictures+'/foto_don_bosco.jpg';
        // _self.mapInit();


      },


      mapInit:function(){
        var map_vedruna = new google.maps.Map(document.getElementById('map-vedruna'), {zoom: 14, center: {lat:-34.8259141,lng:-56.1074476}});
        var marker = new google.maps.Marker({position: {lat:-34.8259141,lng:-56.1074476}, map: map_vedruna});

        var map_queirolo = new google.maps.Map(document.getElementById('map-queirolo'), {zoom: 14, center: {lat:-34.8735557, lng:-56.1868977}});
        var marker = new google.maps.Marker({position: {lat:-34.8735557, lng:-56.1868977}, map: map_queirolo});

        var map_marillac = new google.maps.Map(document.getElementById('map-marillac'), {zoom: 14, center: {lat:-34.8751451, lng:-56.1369816}});
        var marker = new google.maps.Marker({position: {lat:-34.8751451, lng:-56.1369816}, map: map_marillac});

        var map_ayuda = new google.maps.Map(document.getElementById('map-ayuda'), {zoom: 14, center: {lat:-34.88722,lng:-56.2542818}});
        var marker = new google.maps.Marker({position: {lat:-34.88722,lng:-56.2542818}, map: map_ayuda});

        var map_bosco = new google.maps.Map(document.getElementById('map-bosco'), {zoom: 14, center: {lat:-34.8074077,lng:-56.1766598}});
        var marker = new google.maps.Marker({position: {lat:-34.8074077,lng:-56.1766598}, map: map_bosco});

      }

    }

    return _self;

  }]);
