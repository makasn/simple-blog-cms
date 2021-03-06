const functions = require('firebase-functions')
const express = require('express')
const { Nuxt } = require('nuxt')

const app = express();
const nuxt = new Nuxt({
    dev: false,
    buildDir: 'nuxt',
    build: {
        publicPath: '/assets/'
    }
});

function handleRequest(req, res) {
    res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
    return nuxt.render(req, res)
}

app.use(handleRequest);
exports.ssrapp = functions.https.onRequest(app)
