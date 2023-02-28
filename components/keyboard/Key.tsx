import React from 'react'

const Key = ({ word, handleOnClickKeyDown, style }: { word: string, handleOnClickKeyDown: Function, style: string }) => {
  return (
    <button onClick={(e) => handleOnClickKeyDown(e)}
        value={word}
        type='button'
        className={`${style} w-10 h-10 md:w-10 md:h-10 text-sm font-bolder dark:text-white  rounded-box-radius flex justify-center items-center content-center uppercase font-bold`}>
        {word}
    </button>
  )
}

export default Key