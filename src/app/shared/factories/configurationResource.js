app.factory("ConfigurationResource", [
  '$resource',
  'Configuration',
  function (
    $resource,
    Configuration
  ) {
    return new $resource(Configuration.apiUrl+Configuration.configurationUri, {},
      {
        query:{
          isArray: false,
          timeout:60000
        }
      });
    }]);
