import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ToogleBar from './components/ToogleBar'
import WordsRow from './components/WordsRow'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>DDR WORDLE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToogleBar/>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <WordsRow word={'testing'} typedWord={'testing'} isChecked={true}/>
        <WordsRow word={'testing'} typedWord={'testing'} isChecked={false}/>
        <WordsRow word={''} typedWord={''} isChecked={false}/>
        <WordsRow word={''} typedWord={''} isChecked={false}/>
        <WordsRow word={''} typedWord={''} isChecked={false}/>
      </main>

    </div>
  )
}

export default Home
