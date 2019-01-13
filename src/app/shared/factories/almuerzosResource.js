app.factory("AlmuerzosResource", [
  '$resource',
  'Configuration',
  function (
    $resource,
    Configuration
  ) {
    return new $resource(Configuration.apiUrl+Configuration.almuerzosUri, {},
      {
        query:{
          isArray: false,
          timeout:60000
        }
      });
    }]);
