import React from 'react'
import HelpIcon from './pure/HelpIcon'
import StatsIcon from './pure/StatsIcon'

const ToogleBar = ({ setShowHelpModal }: { setShowHelpModal: any }) => {
  return (
    <div className='bg-toogle-bar flex justify-between items-center w-full h-20 px-4 rounded-xl mb-20'>
        <HelpIcon/>
        <h1 className='font-bold text-3xl'>
          WORDLE
        </h1>
        <div className='inline-flex'>
          <button onClick={() => setShowHelpModal(true)}>
            <StatsIcon/>
          </button>
          <StatsIcon/>
        </div>
    </div>
  )
}

export default ToogleBar