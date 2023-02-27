import React from 'react'

const Key = ({ word, handleOnClickKeyDown }: { word: string, handleOnClickKeyDown: Function }) => {
  return (
    <button onClick={(e) => handleOnClickKeyDown(e)}
        value={word}
        className='w-10 h-10 md:w-10 md:h-10 text-sm font-bolder dark:text-white bg-grey-default-key dark:bg-blue-default-key rounded-box-radius flex justify-center items-center content-center uppercase font-bold'>
        {word}
    </button>
  )
}

export default Key