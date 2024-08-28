import {MAX_NUMBER, MESSAGES, MIN_NUMBER} from '../utils/constants';

export let secretNumber: number | null = null;

export const startGame = (): string => {
    secretNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
    return MESSAGES.GAME_STARTED;
};

export const checkGuess = (guess: number): string => {
    if (secretNumber === null) {
        throw new Error(MESSAGES.GAME_NOT_STARTED);
    }

    if (guess > secretNumber) {
        return MESSAGES.LESS;
    } else if (guess < secretNumber) {
        return MESSAGES.MORE;
    } else {
        return MESSAGES.GUESSED;
    }
};
