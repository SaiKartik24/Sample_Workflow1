const express = require('express');
const port = process.env.port || 8080;
const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Sample Git Hub Actions');
});

app.get('/showDate', (req, res) => {
    const d = new Date();
    let textDate = d.toLocaleDateString();
    let textTime = d.toLocaleTimeString()
    res.send("Curent Date:"+ textDate+ '\n'+ "Present Time:"+ textTime);
    //res.send(__dirname + '/index.html');
  });

app.listen(port, () => { console.log('Our App Is Up And Running on!'+port); });
module.exports = app
