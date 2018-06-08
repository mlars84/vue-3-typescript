import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'

const app = express()
const PORT = 8081
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res, err) => {
  res.send(
    [{
      title: 'Hello world',
      description: 'Hey there. This is cool stuff.'
    }]
  )
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})

export default app