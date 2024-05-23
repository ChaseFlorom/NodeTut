const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({hi: 'there'});
});

app.get('/greeting', (req, res) => {
	res.send({greeting: 'welcome'});
});

app.listen(5000);