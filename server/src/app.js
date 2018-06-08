import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import mongoose from 'mongoose'
import Post from '../models/Post'

let mongoURI = 'mongodb://localhost:27017/posts'

mongoose.connect(mongoURI)

let db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))
db.once('open', callback => {
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

  newPost.save(error => {
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

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})

export default app