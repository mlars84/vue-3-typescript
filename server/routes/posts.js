import express from 'express'
const router = express.Router()
import mongoose from 'mongoose'
import Post from '../models/Post'

router.get('/posts', (req, res) => {
  Post
    .find()
    .then(data => {
      res.send(data)
    })
})

module.exports = router