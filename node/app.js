const http = require('http');
const fs= require('fs');

http.createServer((request,Response) => {
    Response.writeHead(200,{
        'content-type' : 'text/html'
    });
  try {
     const data = fs.readFileSync('index.html', {
        encoding : "utf-8"
    });
  }
    catch(e){
        Response.write("<h1 style = 'color :red;' >404 page found!</h1>")
    }
    (()=>Response.write("<h1>submit  the form</h1>"));




}).listen(3000);