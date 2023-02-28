import { useEffect } from 'react'
import { initGame, isGuessed } from '../lib/game'
import { getGameFromLocalStorage, getStatsFromLocalStorage, getTimeFromLocalStorage, saveGameToLocalStorage, saveStatsToLocalStorage, saveTimeToLocalStorage, StoredGameState, StoredGameStats } from '../lib/localStorage'
import { initStats } from '../lib/stats'
import { isFirstTime } from '../services/isFirstTime'

const useGame = (stats: StoredGameStats, currentGame: StoredGameState, setCurrentGame: Function, setStats: Function, setShowHelpModal: Function, setShowStatsModal: Function, setTime: Function) => {

  useEffect(() => {
    if (isFirstTime()) setShowHelpModal(true), initStats(), saveTimeToLocalStorage(60 * 5)
    setTime(getTimeFromLocalStorage())
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
            ...prevStats,
            wordsPlayed: [...prevStats.wordsPlayed, currentGame.currentWord]
          }
        ))
        isGuessed(currentGame) ? stats.winsCounter++ : null
        stats.gamesCounter++
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