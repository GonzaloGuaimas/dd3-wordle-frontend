import React from 'react'
import HelpIcon from './pure/HelpIcon'
import StatsIcon from './pure/StatsIcon'
import ToggleSwitch from './ToggleSwitch'

const ToogleBar = ({ showHelp, showStats }: { showHelp: Function, showStats: Function }) => {
  return (
    <div className='bg-grey-bg dark:bg-containter-bg-dark grid grid-cols-3 items-center w-full px-4 py-4 rounded-xl mb-10'>
        <button onClick={() => showHelp()} className=''>
          <HelpIcon/>
        </button>
        <h1 className='dark:text-white-font text-2xl'>
          WORDLE
        </h1>
        <div className='inline-flex justify-end items-center'>
          <button onClick={() => showStats()}>
            <StatsIcon/>
          </button>
          <ToggleSwitch/>
        </div>
    </div>
  )
}

export default ToogleBar