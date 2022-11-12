import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.status(400).json({
    message: 'Hello World',
  })
})

export { app }
