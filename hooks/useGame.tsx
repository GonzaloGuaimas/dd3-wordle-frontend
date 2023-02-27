import { useEffect } from 'react'
import { initGame, isGuessed, isRowComplete, isValidWord } from '../lib/game'
import { getGameFromLocalStorage, getStatsFromLocalStorage, saveGameToLocalStorage, saveStatsToLocalStorage, StoredGameState, StoredGameStats } from '../lib/localStorage'
import { initStats } from '../lib/stats'
import { isFirstTime } from '../services/isFirstTime'

const useGame = (stats: StoredGameStats, currentGame: StoredGameState, setCurrentGame: Function, setStats: Function, setShowHelpModal: Function, setShowStatsModal: Function) => {

  useEffect(() => {
    if (isFirstTime()) setShowHelpModal(true), initStats()

    setStats(getStatsFromLocalStorage())
    const storeGame = getGameFromLocalStorage()
    storeGame ? setCurrentGame(storeGame) : loadGame()
  }, [])

  useEffect(() => {
    if (currentGame.currentWord != '') {
      if (isGuessed(currentGame) || currentGame.rowsComplete.every((_) => _)){
        setShowStatsModal({show: true, isEnd: true})
        setStats((prevStats: StoredGameStats) => (
          {
            winsCounter: isGuessed(currentGame) ? prevStats.winsCounter++ : prevStats.winsCounter,
            gamesCounter: prevStats.gamesCounter++,
            wordsPlayed: [...prevStats.wordsPlayed, currentGame.currentWord]
          }
        ))
      }
      saveGameToLocalStorage(currentGame)
    }
  }, [currentGame])

  useEffect(() => {
    saveStatsToLocalStorage(stats)
  }, [stats])
  
  const loadGame = () => {
    setCurrentGame(initGame())
  }

  return { loadGame }
}

export default useGame