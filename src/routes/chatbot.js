import { Router } from 'express'

import { sendMessage } from '../services/dialogflow'

const chatbotRouter = (module.exports = new Router())

// @route 	POST api/chat
// @desc 		Chat with the bot, returns bots fullfilment
// @access  Public
chatbotRouter.post('/chat', async (req, res) => {
  const { content, customerId } = req.body
  sendMessage(content, customerId).then(botResponse =>
    res.json({
      user: false,
      content: botResponse.fulfillmentText
    })
  )
})
