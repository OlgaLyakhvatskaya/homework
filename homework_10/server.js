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
    
    const arg = (url) => new Promise((resolve, rejecte) => {
      fs.readFile(url, (err, file) => {
        if (isHtml) {
          res.setHeader('Content-Type', 'text/html');
          resolve(res.end(String(file + now)));
        }
        if (js) {
          res.setHeader('Content-Type', 'application/javascript');
        }
        if (css) { 
          res.setHeader('Content-Type', 'text/css');
        }
        if (err) return rejecte(res.end(`<strong>${err}</strong>`));
        resolve(res.end(file));
      })
    })

    arg(urlFile)
      .then(result => result)
      .catch(err => err)
});
    
server.listen(5600, () => {
  console.log('Server is listening on port: 5600');
});
  