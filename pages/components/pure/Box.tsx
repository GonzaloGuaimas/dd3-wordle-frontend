import React from 'react'

const Box = ({ word, bgColor }: { word: string, bgColor: string }) => {
  return (
    <div className={`${bgColor} rounded-md w-20 h-20 flex justify-center items-center text-white uppercase font-bold text-3xl`}>
        {word}
    </div>
  )
}

export default Box