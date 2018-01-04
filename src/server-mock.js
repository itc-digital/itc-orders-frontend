/* eslint-disable no-console */
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const apiRouter = express.Router();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
    );
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.use(session({
    secret: 'SUPER_SECRET_SECRET',
    resave: true,
    saveUninitialized: true,
}));

apiRouter
    .get('/', (req, res) => {
        res.json({ message: 'API Initialized!' });
    })
    .get('/auth', auth)
    .get('/private', withAuth, privateRoute);

app.use(apiRouter);

app.listen(port, () => {
    console.log(`api running on port ${port}`);
});

function auth(req, res) {
    fetch(`https://api.vk.com/method/users.get?v=5.64&access_token=${req.query.access_token}`)
        .then(response => response.json())
        .then((json) => {
            console.log('auth:', JSON.stringify(json));
            if (json.error) {
                res.json({ success: false, ...json.error });
            } else {
                req.session.role = 'USER';
                res.json({ success: true });
            }
        });
}

function withAuth(req, res, next) {
    if (req.session && req.session.role === 'USER') {
        return next();
    }
    return res.sendStatus(401);
}

function privateRoute(req, res) {
    res.json({ success: true, privateData: 'SUPER SECRET DATA' });
}
