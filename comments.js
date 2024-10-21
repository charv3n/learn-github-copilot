// Create web server
// Create a new web server
var webserver = require('webserver');
var server = webserver.create();
var port = require('system').env.PORT || 8080; // default back to 8080
var service = server.listen(port, function(request, response) {
  console.log('Request at ' + new Date());
  response.statusCode = 200;
  response.write('<html><body>Hello!</body></html>');
  response.close();
});