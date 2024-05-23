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
    let textTime = d.toLocaleTimeString();
    res.send(`  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My HTML Template for test</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f0f0f0;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
            .container {
                background-color: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
                color: #333;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Date: ${textDate}</h1>
            <h3>Present Time: ${textTime}</h3>
        </div>
    </body>
    </html>`)
    //res.send("Curent Date:"+ textDate+ '\n'+ "Present Time:"+ textTime);
    //res.send(__dirname + '/index.html');
  });

app.listen(port, () => { console.log('Our App Is Up And Running on!'+port); });
module.exports = app
