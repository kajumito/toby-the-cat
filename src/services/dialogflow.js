const dialogflow = require('dialogflow')
/**
 * Send a query to the dialogflow agent, and console log the result
 * @param {string} text question ask from the bot
 */
export const sendMessage = async (text, customerId) => {
  // Create a new session
  const sessionClient = new dialogflow.SessionsClient()
  const sessionPath = sessionClient.sessionPath(
    process.env.GCP_PROJECT,
    customerId
  )

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: text,
        languageCode: 'en'
      }
    }
  }

  // Send request and log result
  const responses = await sessionClient.detectIntent(request)
  return responses[0].queryResult
}
