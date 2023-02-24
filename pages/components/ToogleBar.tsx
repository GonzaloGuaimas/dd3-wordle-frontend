import React from 'react'
import HelpIcon from './pure/HelpIcon'
import StatsIcon from './pure/statsIcon'

const ToogleBar = () => {
  return (
    <div className='bg-toogle-bar flex justify-between items-center w-3/5 h-20 px-4 rounded-xl'>
        <HelpIcon/>
        <h1 className='font-bold text-3xl'>
          WORDLE
        </h1>
        <div className='inline-flex'>
          <StatsIcon/>
          <StatsIcon/>
        </div>
    </div>
  )
}

export default ToogleBar