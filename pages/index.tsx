import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import HelpModal from './components/HelpModal'
import KeyBoard from './components/KeyBoard'
import StatsModal from './components/StatsModal'
import ToogleBar from './components/ToogleBar'
import WordsRow from './components/WordsRow'
import useGame from './hooks/useGame'
import { defaultGameState, defaultGameStats,StoredGameState, StoredGameStats } from './lib/localStorage'

const Home: NextPage = () => {
  const [currentGame, setCurrentGame] = useState<StoredGameState>(defaultGameState)
  const [stats, setStats] = useState<StoredGameStats>(defaultGameStats)
  const [showHelpModal, setShowHelpModal] = useState(false)
  const [showStatsModal, setShowStatsModal] = useState({show: false, isEnd: false})
  
  const { loadGame } = useGame(stats, currentGame, setCurrentGame, setStats, setShowHelpModal, setShowStatsModal)

  return (
    <>
      <div className="min-h-screen w-full text-center items-center justify-center bg-white-bg dark:bg-blue-bg">
        {/* <div className="min-h-screen flex flex-col items-center justify-center bg-white-bg dark:bg-blue-bg"> */}
        <Head>
          <title>DDR WORDLE</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex min-h-screen flex-1 flex-col items-center justify-center text-center py-2 px-5 md:w-2/5 mx-auto">
          <ToogleBar showHelp={() => setShowHelpModal(true)} showStats={() =>  setShowStatsModal({show: true, isEnd: false})}/>
          {
              Array(5).fill(0).map((_, i) => (
                  <WordsRow key={i} word={currentGame?.currentWord} typedWord={currentGame?.typedWords[i]} isChecked={currentGame?.rowsComplete[i]} />
                )
              )
          }
          <KeyBoard/>
        </main>

      </div>
        <HelpModal showModal={showHelpModal} hideModal={() => setShowHelpModal(false)}/>
        <StatsModal showModal={showStatsModal} hideModal={() => setShowStatsModal({isEnd: true, show: false})} stats={stats} currentGame={currentGame} loadGame={loadGame}/>
    </>
  )
}

export default Home

