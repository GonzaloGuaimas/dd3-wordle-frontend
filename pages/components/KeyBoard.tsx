import React from 'react'
import Box from './pure/Box'

const KeyBoard = () => {
    const firstRow = 'qwertyuiop'
    const secondRow = 'asdfghjklñ'
    const thirdRow = 'zxcvbnm'
  return (
    <div className='bg-toogle-bar flex flex-col justify-between items-center w-full h-auto py-5 px-4 rounded-xl mt-10'>
       <div className='flex justify-center w-full flex-col'>
            <div className='flex justify-center'>
                {
                    firstRow.split('').map((word) => 
                        <Box word={word} bgColor={'bg-grey-default-key'} style={'w-10 h-10 text-sm font-bolder text-black-font m-1'}/>
                    )
                }
            </div>
            <div className='flex justify-end mr-2'>
                {
                    secondRow.split('').map((word) => 
                        <Box word={word} bgColor={'bg-grey-default-key'} style={'w-10 h-10 text-sm font-bolder text-black-font m-1'}/>
                    )
                }
            </div>
            <div className='flex'>
                <Box word={'ENTER'} bgColor={'bg-grey-default-key'} style={'w-auto px-3 h-10 text-sm font-bolder text-black-font m-1'}/>
                {
                    thirdRow.split('').map((word) => 
                        <Box word={word} bgColor={'bg-grey-default-key'} style={'w-10 h-10 text-sm font-bolder text-black-font m-1'}/>
                    )
                }
                <Box word={'DELETE'} bgColor={'bg-grey-default-key'} style={'w-auto px-3 h-10 text-sm font-bolder text-black-font m-1'}/>
            </div>
        </div>
    </div>
  )
}

export default KeyBoard