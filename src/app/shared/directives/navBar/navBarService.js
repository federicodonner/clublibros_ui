app.service("NavBarService", [
  '$rootScope',

  function (
    $rootScope,

  ) {

    var _self = {
      data:{
        activeSection:1
      },

      initialize:function(){
        _self.data.activeSection = 1;
        _self.data.showResponsiveMenu = false;
      },

      setActiveSection:function(sectionId){
        _self.data.activeSection = sectionId;
        _self.data.showResponsiveMenu = false;
      },

      toggleResponsiveMenu:function(){
        _self.data.showResponsiveMenu = !_self.data.showResponsiveMenu;
      }





    }
    return _self;
  }]);
