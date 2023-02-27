import React from 'react'
import { StoredGameState } from '../../lib/localStorage'
import { BackSpaceIcon } from '../pure/BackSpaceIcon'
import Key from './Key'

const KeyBoard = ({ handleOnClickKeyDown, currentGame }: { handleOnClickKeyDown: Function, currentGame: StoredGameState }) => {
    const firstRow = 'qwertyuiop'
    const secondRow = 'asdfghjklñ'
    const thirdRow = 'zxcvbnm'
    
    const resolveColor = (word: string) => {
        let bgColor = 'bg-grey-default-key dark:bg-blue-default-key'
        currentGame.typedWords.map((typedWord, row) => {
            if (currentGame.rowsComplete[row]) {
                typedWord.split('').map((w, index) => {
                    if (w === word){
                        return (w === currentGame.currentWord[index]) ? bgColor = 'bg-green-box'
                        : (currentGame.currentWord.includes(w)) ? bgColor = 'bg-yellow-box' : bgColor = 'bg-grey-default-key dark:bg-blue-default-key'
                    }
                })
            }
              
        })
        return bgColor
    }

  return (
    <div className='bg-grey-bg dark:bg-containter-bg-dark flex flex-col justify-between items-center w-full h-auto py-5 px-4 rounded-xl mt-10'>
       <div className='flex justify-center w-full flex-col gap-2'>
            <div className='flex justify-center gap-2'>
                {
                    firstRow.split('').map((word) => {
                            return <Key key={word} word={word} handleOnClickKeyDown={handleOnClickKeyDown} bgColor={resolveColor(word)}/>
                        } 
                    )
                }
            </div>
            <div className='flex justify-end ml-10 gap-2'>
                {
                    secondRow.split('').map((word) => 
                        <Key key={word} word={word} handleOnClickKeyDown={handleOnClickKeyDown} bgColor={resolveColor(word)}/>
                    )
                }
            </div>
            <div className='flex gap-2'>
                <Key word={'Enter'} handleOnClickKeyDown={handleOnClickKeyDown} bgColor={resolveColor('Enter')}/>
                {
                    thirdRow.split('').map((word) => 
                        <Key key={word} word={word} handleOnClickKeyDown={handleOnClickKeyDown} bgColor={resolveColor(word)}/>
                    )
                }
                <button
                    onClick={(e) => handleOnClickKeyDown(e)}
                    value='Backspace'
                    className='rounded-box-radius flex justify-center items-center content-center uppercase font-bold w-auto h-10 px-2 md:px-3 md:h-10 text-sm font-bolder bg-grey-default-key dark:bg-blue-default-key'>
                    <BackSpaceIcon/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default KeyBoard