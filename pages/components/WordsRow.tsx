import React from 'react'
import Box from './pure/Box'

const WordsRow = ({ word, typedWord, isChecked }: { word: string, typedWord: string, isChecked: boolean }) => {
  return (
    <div className='grid grid-cols-5 gap-2 mb-2'>
        {
            Array(5).fill(0).map((_, i) => {
                const bgColor = 
                !isChecked ? 'bg-grey-box bg-opacity-30' :
                (word[i] === typedWord[i]) ? 'bg-green-box' :
                (word.includes(typedWord[i])) ? 'bg-yellow-box' : 'bg-grey-box'

                return (
                    <div key={i}>
                        <Box word={typedWord[i]} bgColor={bgColor} style={'w-20 h-20 text-3xl'}/>
                    </div>
                )
            }
            )
        }
    </div>
  )
}

export default WordsRow