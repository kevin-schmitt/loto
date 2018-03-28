const http = require('http');
const fs = require("fs");

module.exports = {

  displayView: function(){
    fs.readFile("view/index.html", function(err, data){
      response.writeHead(200, {'Content-type': 'text/html'});
      response.write(data);
      response.end();
    })
  }

}
