import React from 'react'
import HelpIcon from './pure/HelpIcon'
import StatsIcon from './pure/StatsIcon'

const ToogleBar = ({ setShowHelpModal, setShowStatsModal }: { setShowHelpModal: any, setShowStatsModal: any }) => {
  return (
    <div className='bg-grey-bg dark:bg-containter-bg-dark flex justify-between items-center w-full h-20 px-4 rounded-xl mb-20'>
        <button onClick={() => setShowHelpModal(true)}>
          <HelpIcon/>
        </button>
        <h1 className='dark:text-white-font'>
          WORDLE
        </h1>
        <div className='inline-flex'>
          <button onClick={() => setShowStatsModal(true)}>
            <StatsIcon/>
          </button>
          <StatsIcon/>
        </div>
    </div>
  )
}

export default ToogleBar