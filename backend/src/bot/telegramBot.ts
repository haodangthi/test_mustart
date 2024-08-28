import TelegramBot from 'node-telegram-bot-api'
import { MESSAGES } from '../utils/constants'

const token = '7521316894:AAFtKOwJL3srXLK5ZBHs19T53LybWJDrM7I'

if (!token) {
  throw new Error('TELEGRAM_BOT_TOKEN is not set in the environment variables')
}

const bot = new TelegramBot(token, { polling: true })

console.log('Bot is running...')

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id

  await bot.sendMessage(chatId, MESSAGES.GAME_STARTED, {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'open the game', web_app: { url: 'https://localhost:5173' } }],
      ],
    },
  })
})

export default bot
