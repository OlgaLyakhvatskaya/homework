const fs = require('file-system');
const http = require('http');


http.get('http://wttr.in/~kharkov', (res) => {
   let result = '';
   res.on('data', data => result += data);
   res.on('end', () => fs.writeFile("./index.html", `${result}`, (err) => {
     return err;
   }))
});
