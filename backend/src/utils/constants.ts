import dotenv from 'dotenv'

dotenv.config()

export const TOKEN = process.env.TELEGRAM_BOT_TOKEN
export const WEB_APP_URL = process.env.REACT_APP_API_URL || ''

export const MESSAGES = {
  GAME_STARTED_TRY: 'Game started. Try to guess the number!',
  GAME_STARTED: 'Game started',
  GAME_NOT_STARTED: 'Game not started',
  INVALID_INPUT: 'Invalid input',
  LESS: 'less',
  MORE: 'more',
  GUESSED: 'guessed',
}

export const PORT = process.env.PORT || 5001
export const MAX_NUMBER = 100
export const MIN_NUMBER = 1
