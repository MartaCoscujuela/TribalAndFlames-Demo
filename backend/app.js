const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const errorHandler = require('errorhandler')
const bodyParser = require('body-parser')

const isProduction = process.env.NODE_ENV === 'production'

const adminRoutes = require('./routes/admin')
const authRoutes = require('./routes/auth')
const siteRoutes = require('./routes/site')
const coursesRoutes = require('./routes/courses')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/images/', express.static(path.join(__dirname, '/images')))

app.use('/', express.static(path.join(__dirname, '/angular')))

if (!isProduction) {
  app.use(errorHandler())
}
const connectionString = process.env.MONGO_DB_URI
console.log(connectionString);
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Mongodb Connected')
  })
  .catch((error) => {
    console.log('connection failed' + error)
  })

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  )
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.use('/api/admin', adminRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/site', siteRoutes)
app.use('/api/courses', coursesRoutes)

app.use((req, res, next)=>{
  res.sendFile(path.join(__dirname, "angular", "index.html"));
});


module.exports = app
