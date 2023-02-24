import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import KeyBoard from './components/KeyBoard'
import ToogleBar from './components/ToogleBar'
import WordsRow from './components/WordsRow'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 px-5">
      <Head>
        <title>DDR WORDLE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="flex w-full min-h-screen flex-1 flex-col items-center justify-center text-center">
        <ToogleBar/>
        <WordsRow word={'testing'} typedWord={'testing'} isChecked={true}/>
        <WordsRow word={'testing'} typedWord={'testing'} isChecked={false}/>
        <WordsRow word={''} typedWord={''} isChecked={false}/>
        <WordsRow word={''} typedWord={''} isChecked={false}/>
        <WordsRow word={''} typedWord={''} isChecked={false}/>
        <KeyBoard/>
      </main>


    </div>
  )
}

export default Home
