const fs = require("fs");
const ejs = require("ejs");
//const router = require("../src/settings");
const views = require("../test/views/views");
const urlpattern = require("../src/settings.js");
/////
function getRoot(_url) {
    return urlpattern.urlpattern[_url];
}
/////
module.exports = function responseProcesse(req,res,_url) {
    fs.readFile("./templates/"+getRoot(_url), function(err, data) {
        if(err){
            res.write(err);
            res.end();
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(ejs.render(data,{"date":new Date()}));
            res.end();
        }
       
      });
}