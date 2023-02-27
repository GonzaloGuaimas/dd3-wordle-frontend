import React from 'react'

const Key = ({ word, handleOnClickKeyDown, bgColor }: { word: string, handleOnClickKeyDown: Function, bgColor: string }) => {
  return (
    <button onClick={(e) => handleOnClickKeyDown(e)}
        value={word}
        className={`${bgColor} w-10 h-10 md:w-10 md:h-10 text-sm font-bolder dark:text-white  rounded-box-radius flex justify-center items-center content-center uppercase font-bold `}>
        {word}
    </button>
  )
}

export default Key