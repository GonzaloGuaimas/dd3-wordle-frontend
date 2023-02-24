import React from 'react'

const Box = ({ word, bgColor, style }: { word: string, bgColor: string, style: string}) => {
  return (
    <div className={`${bgColor} rounded-md flex justify-center items-center text-white uppercase font-bold ${style}`}>
        {word}
    </div>
  )
}

export default Box