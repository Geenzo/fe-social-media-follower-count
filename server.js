const express = require('express')
const app = express()
const db = require('./model/db')
const bodyParser = require('body-parser')

const { scrapeTwitterFunc } = require('./routes/twitter')
const { scrapeInstagramFunc } = require('./routes/instagram')
const { scrapeFacebookFunc } = require('./routes/facebook')
// const { scrapeLinkedinFunc } = require('./routes/linkedin')

const { addNewPage } = require('./routes/page')
const { getAllPages } = require('./routes/page')

const { startScrape } = require('./routes/startScrape')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.post('/scrapeTwitter', scrapeTwitterFunc)

app.post('/scrapeInstagram', scrapeInstagramFunc)

app.post('/scrapeFacebook', scrapeFacebookFunc)

app.post('/addNewPage', addNewPage)
app.get('/allPages', getAllPages)

app.get('/startScrape', startScrape)

// TODO: WIP - linkedin has anti-scrapping (requires log in)
// app.get('/scrapeLinkedin', scrapeLinkedinFunc)

app.listen('8081')
console.log('Server started on port 8081')
exports = module.exports = app
