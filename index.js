const express = require("express");
const path = require('path');
const app = express();


app.get('/', (req, res) => {
    res.send('soar lib');
   });
 
   app.get('soar/objectweb/asm/5.0.3/asm-5.0.3.jar', (req, res) => {
    res.sendFile(path.join(__dirname, './', 'asm-all-5.0.3.jar')); 
   });
   app.get('me/eldodebug/soar/7.1.2/soar-7.1.2.jar', (req, res) => {
     res.redirect('https://github.com/Soar-Client/Legacy-SoarClient/releases/download/v7.1.2/SoarClient.jar')
   });

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;