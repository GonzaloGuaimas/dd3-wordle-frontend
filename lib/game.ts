import { filterFiveLettersWords } from '../services/filterFiveLettersWords'
import { getRandomWord } from '../services/getRandomWord'
import { toNormalForm } from '../services/wordToNormalize'
import { getStatsFromLocalStorage, saveGameToLocalStorage, StoredGameState } from './localStorage'

export const initGame = () => {
    const currentGame: StoredGameState = {
        currentWord: getRandomWord(),
        typedWords:  new Array(5).fill(''),
        currentRow: 0,
        rowsComplete:  new Array(5).fill(false)
    }   
    saveGameToLocalStorage(currentGame)
    return currentGame
}

export const isValidWord = (word: string) => {
    return filterFiveLettersWords().includes(word)
}

export const isWordPlayed = (word: string) => {
    const gameStats = getStatsFromLocalStorage()
    return (gameStats?.wordsPlayed)?.includes(word)
}

export const isRowComplete = (_currentGame: StoredGameState) => {
    return _currentGame?.typedWords[_currentGame.currentRow]?.length > 4
}

export const isRowCheck = ( index: number, currentGame: StoredGameState) => {
    return currentGame.typedWords[index]?.length > 4 && currentGame?.currentRow != index
}

export const isGuessed = (_currentGame: StoredGameState) => {
    return toNormalForm(_currentGame.typedWords[_currentGame.currentRow-1]) === toNormalForm(_currentGame.currentWord)
}