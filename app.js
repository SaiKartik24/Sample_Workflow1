const express = require('express');
const port = process.env.port || 8000;
const app = express();

app.get('/', (req, res) => {
    res.send('Sample Git Hub Actions');
});

app.listen(port, () => { console.log('Our App Is Up And Running on!'+port); });
module.exports = app