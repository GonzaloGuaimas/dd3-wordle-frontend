import React from 'react'
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
                        <Box key={word} word={word} bgColor={'bg-grey-default-key dark:bg-blue-default-key'} style={'w-6 h-6 md:w-10 md:h-10 text-sm font-bolder text-black-font'}/>
                    )
                }
            </div>
            <div className='flex justify-end ml-10 gap-2'>
                {
                    secondRow.split('').map((word) => 
                        <Box key={word} word={word} bgColor={'bg-grey-default-key dark:bg-blue-default-key'} style={'w-6 h-6 md:w-10 md:h-10 text-sm font-bolder text-black-font'}/>
                    )
                }
            </div>
            <div className='flex gap-2'>
                <Box word={'ENTER'} bgColor={'bg-grey-default-key dark:bg-blue-default-key'} style={'w-auto h-6 px-2 md:px-3 md:h-10 text-sm font-bolder text-black-font'}/>
                {
                    thirdRow.split('').map((word) => 
                        <Box key={word} word={word} bgColor={'bg-grey-default-key dark:bg-blue-default-key'} style={'w-6 h-6 md:w-10 md:h-10 text-sm font-bolder text-black-font'}/>
                    )
                }
                <Box word={'DELETE'} bgColor={'bg-grey-default-key dark:bg-blue-default-key'} style={'w-auto h-6 px-2 md:px-3 md:h-10 text-sm font-bolder text-black-font'}/>
            </div>
        </div>
    </div>
  )
}

export default KeyBoard