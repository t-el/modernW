var http = require('http'); // Import Node.js core module



class App {


  constructor(port){
   this.port = port ||  8080;
   //this.request = undefined;
   //this.response = undefined;
   this.server = undefined;
   this.routers = {};
    
  }

   
 
   listentoPort(port){
    this.server = http.createServer((req, res) => { 
       res.write("<h1>Hello Platinuim</h1>");
       res.end();
       
    });
      this.server.listen(port ,()=>{
        console.log(`Hashtag app listening at http://localhost:${port}`);
     
      });
   
     
   }

  
  

}
module.exports =  App;
