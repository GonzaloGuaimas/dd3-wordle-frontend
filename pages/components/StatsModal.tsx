import React from 'react'
import { StoredGameState, StoredGameStats } from '../lib/localStorage'
import Box from './pure/Box'

const StatsModal = (
    { showModal, hideModal, stats, currentGame, loadGame }: 
    { showModal: any, hideModal: Function, stats: StoredGameStats, currentGame: StoredGameState, loadGame: Function }
    ) => {
  return (
    <div className={showModal.show ? "modal-background" : "hidden"}>
        <div className="modal-container">
            <div className="mt-3 text-center">
                <h2>Estadísticas</h2>
                <div className="flex flex-col gap-y-4 mt-5 text-sm text-black font-semibold text-center">
                    <div className='flex justify-around mb-4'>
                    <div>
                        <h2>{stats?.gamesCounter}</h2>
                        <p>Jugadas</p>
                    </div>
                    <div>
                        <h2>{stats?.winsCounter}</h2>
                        <p>Victorias</p>
                    </div>
                    </div>
                    {
                        showModal.isEnd 
                        ? (<p>La palabra era: <strong>{currentGame.currentWord}</strong></p>) 
                        : null
                    }
                    <div className='mb-4'>
                    <p>SIGUIENTE PALABRA</p>
                    <h2 className='font-bold'>04:10</h2>
                    </div>
                    <button onClick={() =>{ showModal.isEnd ? loadGame() : null, hideModal()}} className='bg-green-box rounded-md mx-auto px-14 py-1 text-white font-bold text-lg'>
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StatsModal