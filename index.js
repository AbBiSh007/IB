const http= require ( "http");
const url= require( "url");
const cors = require("cors");
const requestHandler = (req, res) => {
    const Url = url.parse(req.url, true);
  
    if (req.method === 'GET') {
      if (Url.pathname === '/') {
        res.writeHead(200,{ 'Content-Type': 'text/plain' });
        res.end('Welcome to the default page of Cloud computing class backend!');
      } else if (Url.pathname === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the about page, where you can see about us now explore it.');
      } else if (Url.pathname === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Contact us at contactus@gmail.com');
       } else if (Url.pathname === '/sanuj') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('sanuj is a good boy');
      } 
    }
  };
  
  const server = http.createServer(requestHandler);
  
  const PORT = 3006;
  
  server.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
  });