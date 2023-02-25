import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import HelpModal from './components/HelpModal'
import KeyBoard from './components/KeyBoard'
import StatsModal from './components/StatsModal'
import ToogleBar from './components/ToogleBar'
import WordsRow from './components/WordsRow'

const Home: NextPage = () => {
  const [showHelpModal, setShowHelpModal] = useState(false)
  const [showStatsModal, setShowStatsModal] = useState(false)
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white-bg dark:bg-blue-bg">
      <Head>
        <title>DDR WORDLE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-3/4 md:w-3/5 lg:w-2/6 min-h-screen flex-1 flex-col items-center justify-center text-center py-2 px-5">
        <ToogleBar setShowHelpModal={setShowHelpModal} setShowStatsModal={setShowStatsModal}/>
        <WordsRow word={'testing'} typedWord={'testing'} isChecked={true}/>
        <WordsRow word={'aaaaaaaa'} typedWord={'testing'} isChecked={true}/>
        <WordsRow word={''} typedWord={''} isChecked={false}/>
        <WordsRow word={''} typedWord={''} isChecked={false}/>
        <WordsRow word={''} typedWord={''} isChecked={false}/>
        <KeyBoard/>
      </main>
      <HelpModal showModal={showHelpModal} hideModal={() => setShowHelpModal(false)}/>
      <StatsModal showModal={showStatsModal} hideModal={() => setShowStatsModal(false)}/>

    </div>
  )
}

export default Home
