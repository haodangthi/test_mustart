import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {
  startGameController,
  guessController,
} from './controllers/gameController'
import { errorHandler } from './middlewares/errorHandler'
import './bot/telegramBot'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.post('/start_game', startGameController)
app.post('/guess', guessController)

// Error handling middleware
app.use(errorHandler)

export default app
