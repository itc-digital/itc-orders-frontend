/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const apiRouter = express.Router();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
    );
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

apiRouter
    .get('/', (req, res) => {
        res.json({ message: 'API Initialized!' });
    })
    .get('/auth', auth);

app.use(apiRouter);

app.listen(port, () => {
    console.log(`api running on port ${port}`);
});

function auth(req, res) {
    fetch(`https://api.vk.com/method/users.get?v=5.64&access_token=${req.query.access_token}`)
        .then(response => response.json())
        .then((json) => {
            console.log(JSON.stringify(json));
            if (json.error) {
                res.json({ success: false, error: json.error.error_msg });
            } else {
                res.json({ success: true });
            }
        });
}
