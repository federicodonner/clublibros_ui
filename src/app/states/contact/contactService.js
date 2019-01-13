app.service("ContactService", [
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
        contacto_banner:'',
        contactForm:{}
      },

      initialize:function(){
        NavBarService.setActiveSection(6);
        _self.data.contacto_banner = Configuration.pictures + '/contacto_banner.jpg ';
      },

      contactSubmit:function(){
        if(_self.data.contactForm.name == null){
          window.alert('Debes escribir tu nombre');
        }else if(_self.data.contactForm.email == null){
          window.alert('Debes escribir una dirección de correo');
        }else if(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(_self.data.contactForm.email) == false){
          window.alert('La dirección de correo ingresada no es correcta');
        }else if(_self.data.contactForm.message == null){
          window.alert('Debes escribir un mensaje');
        }else{
        ServerService.sendEmail(_self.data.contactForm);
        }
      }


    }

    return _self;

  }]);
