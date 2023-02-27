import React from 'react'

const Box = ({ word, bgColor, style }: { word: string, bgColor: string, style: string}) => {
  return (
    <div className={`${bgColor} rounded-box-radius flex justify-center items-center content-center uppercase font-bold ${style}`}>
        {word}
    </div>
  )
}

export default Box