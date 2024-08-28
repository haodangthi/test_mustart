import TelegramBot from 'node-telegram-bot-api'
import { MESSAGES, TOKEN, WEB_APP_URL } from '../utils/constants'

if (!TOKEN) {
  throw new Error('TELEGRAM_BOT_TOKEN is not set in the environment variables')
}

const bot = new TelegramBot(TOKEN, { polling: true })

const opt = {
  reply_markup: {
    inline_keyboard: [
      [{ text: 'open the game', web_app: { url: WEB_APP_URL } }],
    ],
  },
}

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id

  await bot.sendMessage(chatId, MESSAGES.GAME_STARTED, opt)
})

export default bot
