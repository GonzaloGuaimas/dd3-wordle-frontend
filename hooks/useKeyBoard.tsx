import { useEffect } from 'react'
import { isRowComplete, isValidWord } from '../lib/game'
import { StoredGameState } from '../lib/localStorage'

const useKeyBoard = (currentGame: StoredGameState, setCurrentGame: Function) => {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
        window.removeEventListener('keydown', handleKeyDown)
        }
    }, [currentGame])

    const addWord = (word: string) => {
        setCurrentGame((prevGame: StoredGameState) => {
            const _typedWords = [...prevGame.typedWords]
            _typedWords[currentGame.currentRow] = _typedWords[currentGame.currentRow] + word
            return {
            ...prevGame,
            typedWords: _typedWords
            }
        })
    }

    const addCompletedRow = () => {
        setCurrentGame((prevGame: StoredGameState) => {
            const _rowsComplete = [...prevGame.rowsComplete]
            _rowsComplete[prevGame.currentRow - 1] = true
                return {
                    ...prevGame,
                    rowsComplete: _rowsComplete
                }
            })
        currentGame.currentRow ++
    }

    const deleteWord = () => {
        setCurrentGame((prevGame: StoredGameState) => {
            const _typedWords = [...prevGame.typedWords]
            _typedWords[currentGame.currentRow] = _typedWords[currentGame.currentRow].slice(0, _typedWords[currentGame.currentRow].length - 1)
            return {
                ...prevGame,
                typedWords: _typedWords
            }
        })
    }
    
    const handleKeyDown = (event: KeyboardEvent) => {
        if (!isRowComplete(currentGame) && event.key.match(/^[A-z]$/)) {
            addWord(event.key)
        } else if (event.key === 'Enter' && isRowComplete(currentGame) && isValidWord(currentGame.typedWords[currentGame.currentRow])) {
            addCompletedRow()
        } else if (event.key === 'Backspace') {
            deleteWord()
        }
    }

    const handleOnClickKeyDown = (event: any) => {
        let target = event.target
        while (target && target !== event.currentTarget) {
            if (target.nodeName !== "BUTTON") target = target.parentNode;
        }
        if (!isRowComplete(currentGame) && target.value != 'Enter' && target.value != 'Backspace') {
            addWord(target.value)
        } else if (target.value === 'Enter' && isRowComplete(currentGame) && isValidWord(currentGame.typedWords[currentGame.currentRow])) {
            addCompletedRow()
        } else if (target.value === 'Backspace') {
            deleteWord()
        }
    }

      return { handleOnClickKeyDown }
}

export default useKeyBoard