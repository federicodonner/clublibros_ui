app.factory("ProductsResource", [
  '$resource',
  'Configuration',
  function (
    $resource,
    Configuration
  ) {
    return new $resource(Configuration.apiUrl+Configuration.productsUri, {},
      {
        query:{
          isArray: false,
          timeout:60000
        }
      });
    }]);
