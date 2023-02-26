import { getStatsFromLocalStorage, saveStatsToLocalStorage, StoredGameStats } from "./localStorage"

export const initStats = () => {
    const stats: StoredGameStats = {
        winsCounter: 0,
        gamesCounter: 0,
        wordsPlayed: []
    }   
    saveStatsToLocalStorage(stats)
    return stats
}

export const updateWinStats = ({ isGuessed }: { isGuessed: boolean }) => {
    const gameStats = { ...getStatsFromLocalStorage()}
    gameStats.gamesCounter ++
    isGuessed ? gameStats.winsCounter ++ : null
}