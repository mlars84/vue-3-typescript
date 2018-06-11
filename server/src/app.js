import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import mongoose from 'mongoose'
import Post from '../models/Post'
import request from 'request'

let mongoURI = 'mongodb://localhost:27017/posts'

mongoose.connect(mongoURI)

let db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))
db.once('open', (callback) => {
  console.log('Success!')
})

const app = express()
const PORT = 8081

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/api/posts', (req, res) => {
  let title = req.body.title
  let description = req.body.description

  const newPost = new Post({
    title: title,
    description: description
  })

  newPost.save((error) => {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
  })
})

app.get('/api/posts', (req, res) => {
  Post.find({}, 'title description', (error, posts) => {
    if (error) { console.log(error) }
    res.send({
      posts: posts
    })
  }).sort({_id:-1})
})

app.delete('/api/posts/:id', (req, res) => {
  Post.remove({
    _id: req.params.id
  }, function(err, post){
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})

let apiKey = 'c6b35afe21df33e7ec358d02df7f2eb6'
let lat = '44.9532392'
let long = '-93.1403'

app
  .get('/api/forecast', (req, res) => {
    request(
      `https://api.darksky.net/forecast/${apiKey}/${lat},${long}`,
      function (error, response, body) {
        // console.log(error)
        // console.log('statusCode: ', response)
        // console.log('body: ', body)
        res.json(body)
      }
    )
  })

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})

export default app