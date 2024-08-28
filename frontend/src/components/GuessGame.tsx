import React, { useState } from 'react'
import { apiRequest } from '../helpers'
import { GuessResponse, StartGameResponse } from '../interfaces'

import '../styles/GuessGame.css'
import { MESSAGES } from '../constants/messages.ts'

const GuessGame: React.FC = () => {
  const [input, setInput] = useState<string>('')
  const [result, setResult] = useState<string>('')
  const [gameStarted, setGameStarted] = useState<boolean>(false)

  const apiUrl = import.meta.env.VITE_API_URL

  const startGame = async () => {
    try {
      await apiRequest<StartGameResponse>(apiUrl, 'start_game', {
        method: 'POST',
      })

      setGameStarted(true)
      setResult(MESSAGES.GAME_STARTED)
      setInput('')
    } catch (error) {
      if (error instanceof Error) {
        setResult(error.message)
      }
    }
  }

  const makeGuess = async () => {
    try {
      const data = await apiRequest<GuessResponse>(apiUrl, 'guess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ number: +input }),
      })
      setResult(
        data.result === 'guessed'
          ? MESSAGES.GUESS_CORRECT
          : `The number is ${data.result}.`,
      )
    } catch (error) {
      if (error instanceof Error) {
        setResult(error.message)
      }
    }
  }

  return (
    <div>
      {!gameStarted ? (
        <button onClick={startGame}>Start Game</button>
      ) : (
        <>
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your guess"
          />
          <button onClick={makeGuess}>Guess</button>
          <p>{result}</p>
          {result === MESSAGES.GUESS_CORRECT && (
            <button onClick={startGame}>Start Again</button>
          )}
        </>
      )}
    </div>
  )
}

export default GuessGame
