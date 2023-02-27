
export type StoredGameState = {
    currentWord: string,
    typedWords: string[]
    currentRow: number,
    rowsComplete:  boolean[]
}
export const defaultGameState = {
    currentWord: '',
    typedWords:  new Array(5).fill('') as string[],
    currentRow: 0,
    rowsComplete:  new Array(5).fill(false) as boolean[]
} 

export type StoredGameStats = {
    winsCounter: number,
    gamesCounter: number,
    wordsPlayed: string[]
}

export const defaultGameStats = {
    winsCounter: 0,
    gamesCounter: 0,
    wordsPlayed: []
} 

export const saveGameToLocalStorage = (game: StoredGameState) => {
    localStorage.setItem('gameState', JSON.stringify(game))
}

export const deleteGameFromLocalStorage = () => {
    localStorage.removeItem('gameState')
}

export const getGameFromLocalStorage = () => {
    try {
        return JSON.parse(localStorage.getItem('gameState')!) as StoredGameState
    } catch (error) {
        return defaultGameState
    }
}

export const saveStatsToLocalStorage = (gameStats: StoredGameStats) => {
    localStorage.setItem('gameStats', JSON.stringify(gameStats))
}

export const getStatsFromLocalStorage = () => {
    try {
        return JSON.parse(localStorage.getItem('gameStats')!) as StoredGameStats 
    } catch (error) {
        return defaultGameStats
    }
}


export const saveTimeToLocalStorage = (time: number) => {
    localStorage.setItem('countdownTime', (time).toString());
}

export const getTimeFromLocalStorage = () => {
    try {
        return localStorage.getItem('countdownTime')
    } catch (error) {
        return 60 * 5
    }
}