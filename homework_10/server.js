const http = require('http');
const fs = require('fs');
const date = new Date();
const now = `<p>${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}</p>`;

 
const server = http.createServer(
  (req, res) => {

    const isHtml = req.url.includes('.html');
    const js = req.url.includes('.js');
    const css = req.url.includes('.css');
    const urlFile = req.url.replace('/', 'front-end/');
    
    if (isHtml) {
      fs.readFile(urlFile, (err, data) => {
        res.setHeader('Content-Type', 'text/html');
        if(err) return res.end(`<strong>${err}</strong>`);
        res.end(String(data + now));
      })
    } 

    if (js) {
      fs.readFile(urlFile, (err, data) => {
        res.setHeader('Content-Type', 'application/javascript');
        if(err) return res.end(`<strong>${err}</strong>`);
        res.end(data);
      })
    } 

    if(css){
      fs.readFile(urlFile, (err, data) => {
        res.setHeader('Content-Type', 'text/css');
        if(err) return res.end(`<strong>${err}</strong>`);
        res.end(String(data + now));
      })
    }

    fs.readFile(urlFile, (err, data) => {
      if(err) return res.end(`<strong>${err}</strong>`);
      res.end(data);
    })
  });
  
  server.listen(5600, () => {
    console.log('Server is listening on port: 5600');
  });
  
  