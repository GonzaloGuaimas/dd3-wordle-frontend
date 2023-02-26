import React from 'react'
import HelpIcon from './pure/HelpIcon'
import StatsIcon from './pure/StatsIcon'

const ToogleBar = ({ showHelp, showStats }: { showHelp: Function, showStats: Function }) => {
  return (
    <div className='bg-grey-bg dark:bg-containter-bg-dark flex justify-between items-center w-full px-4 py-4 rounded-xl mb-10'>
        <button onClick={() => showHelp()}>
          <HelpIcon/>
        </button>
        <h1 className='dark:text-white-font'>
          WORDLE
        </h1>
        <div className='inline-flex'>
          <button onClick={() => showStats()}>
            <StatsIcon/>
          </button>
          <button onClick={() => {}}>
            <StatsIcon/>
          </button>
        </div>
    </div>
  )
}

export default ToogleBar