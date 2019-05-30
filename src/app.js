import express from 'express'
// middleware
import cors from 'cors'

// polyfill
import '@babel/polyfill'

// routes
import chatbot from './routes/chatbot'

// init enviroment variables from .env
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const PORT = process.env.PORT || 5000
const HOST = process.env.HOST || '0.0.0.0'

// express server
const app = express()

// cors middleware
app.use(cors())

// application/json parser middleware
app.use(express.json())

app.use('/', chatbot)

// Catch other routes
app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(PORT, HOST, () => {
  console.log(`Ready to serve you at port ${PORT}, sir.`)
})
