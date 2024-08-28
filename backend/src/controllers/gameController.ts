// src/controllers/gameController.ts

import { Request, Response } from 'express';
import { startGame, checkGuess } from '../services/gameService';
import { MESSAGES } from '../utils/constants';

export const startGameController = (req: Request, res: Response): void => {
    const message = startGame();

    res.json({ message });
};

export const guessController = (req: Request, res: Response): void | Response => {
    const { number } = req.body;

    if (typeof number !== 'number') {
        return res.status(400).json({ error: MESSAGES.INVALID_INPUT });
    }

    const result = checkGuess(number);
    res.json({ result });
};
