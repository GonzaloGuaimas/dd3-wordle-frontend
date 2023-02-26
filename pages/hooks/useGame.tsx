import { useEffect } from 'react'
import { initGame, isGuessed, isRowComplete, isValidWord } from '../lib/game'
import { getGameFromLocalStorage, getStatsFromLocalStorage, saveGameToLocalStorage, saveStatsToLocalStorage, StoredGameState, StoredGameStats } from '../lib/localStorage'
import { initStats } from '../lib/stats'
import { isFirstTime } from '../services/isFirstTime'

const useGame = (stats: StoredGameStats, currentGame: StoredGameState, setCurrentGame: Function, setStats: Function, setShowHelpModal: Function, setShowStatsModal: Function) => {

  useEffect(() => {
    console.log('entra1')
    if (isFirstTime()) setShowHelpModal(true), initStats()

    setStats(getStatsFromLocalStorage())
    const storeGame = getGameFromLocalStorage()
    storeGame ? setCurrentGame(storeGame) : loadGame()
  }, [])

  useEffect(() => {
    console.log(currentGame)
    if (currentGame.currentWord != '') {
      console.log(currentGame)
      console.log(currentGame.rowsComplete.every((_) => _))
      if (isGuessed(currentGame) || currentGame.rowsComplete.every((_) => _)){
        console.log('entra')
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
  

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [currentGame])
  
  const loadGame = () => {
    setCurrentGame(initGame())
  }

  const handleKeyUp = (event: KeyboardEvent) => {
    if (!isRowComplete(currentGame) && event.key.match(/^[A-z]$/)) {
      setCurrentGame((prevGame: StoredGameState) => {
        const _typedWords = [...prevGame.typedWords]
        _typedWords[currentGame.currentRow] = _typedWords[currentGame.currentRow] + event.key
        return {
          ...prevGame,
          typedWords: _typedWords
        }
      })
    } else if (event.key === 'Enter' && isRowComplete(currentGame) && isValidWord(currentGame.typedWords[currentGame.currentRow])) {
      setCurrentGame((prevGame: StoredGameState) => {
        const _rowsComplete = [...prevGame.rowsComplete]
        _rowsComplete[prevGame.currentRow - 1] = true
        return {
          ...prevGame,
          rowsComplete: _rowsComplete
        }
      })
      currentGame.currentRow ++
    } else if (event.key === 'Backspace') {
      setCurrentGame((prevGame: StoredGameState) => {
        const _typedWords = [...prevGame.typedWords]
        _typedWords[currentGame.currentRow] = _typedWords[currentGame.currentRow].slice(0, _typedWords[currentGame.currentRow].length - 1)
        return {
          ...prevGame,
          typedWords: _typedWords
        }
      })
    }
  }
  return { loadGame }
}

export default useGame