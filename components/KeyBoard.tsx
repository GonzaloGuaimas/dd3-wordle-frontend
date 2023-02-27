import React from 'react'
import { BackSpaceIcon } from './pure/BackSpaceIcon'
import Box from './pure/Box'

const KeyBoard = () => {
    const firstRow = 'qwertyuiop'
    const secondRow = 'asdfghjklñ'
    const thirdRow = 'zxcvbnm'
  return (
    <div className='bg-grey-bg dark:bg-containter-bg-dark flex flex-col justify-between items-center w-full h-auto py-5 px-4 rounded-xl mt-10'>
       <div className='flex justify-center w-full flex-col gap-2'>
            <div className='flex justify-center gap-2'>
                {
                    firstRow.split('').map((word) => 
                        <Box key={word} word={word} bgColor={'bg-grey-default-key dark:bg-blue-default-key'} style={'w-10 h-10 md:w-10 md:h-10 text-sm font-bolder dark:text-white'}/>
                    )
                }
            </div>
            <div className='flex justify-end ml-10 gap-2'>
                {
                    secondRow.split('').map((word) => 
                        <Box key={word} word={word} bgColor={'bg-grey-default-key dark:bg-blue-default-key'} style={'w-10 h-10 md:w-10 md:h-10 text-sm font-bolder dark:text-white'}/>
                    )
                }
            </div>
            <div className='flex gap-2'>
                <Box word={'ENTER'} bgColor={'bg-grey-default-key dark:bg-blue-default-key'} style={'w-auto h-10 px-2 md:px-3 md:h-10 text-sm font-bolder dark:text-white'}/>
                {
                    thirdRow.split('').map((word) => 
                        <Box key={word} word={word} bgColor={'bg-grey-default-key dark:bg-blue-default-key'} style={'w-10 h-10 md:w-10 md:h-10 text-sm font-bolder dark:text-white'}/>
                    )
                }
                <button 
                    className='rounded-box-radius flex justify-center items-center content-center uppercase font-bold w-auto h-10 px-2 md:px-3 md:h-10 text-sm font-bolder bg-grey-default-key dark:bg-blue-default-key'>
                    <BackSpaceIcon/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default KeyBoard