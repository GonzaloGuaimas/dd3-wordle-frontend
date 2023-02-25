import React from 'react'
import Box from './pure/Box'

const StatsModal = ({ showModal, hideModal }: { showModal: boolean, hideModal: Function }) => {
  return (
    <div className={showModal ? "modal-background" : "hidden"}>
        <div className="modal-container">
            <div className="mt-3 text-center">
                <h2>Estadísticas</h2>
                <div className="flex flex-col gap-y-4 mt-5 text-sm text-black font-semibold text-center">
                    <div className='flex justify-around mb-4'>
                    <div>
                        <h2>8</h2>
                        <p>Jugadas</p>
                    </div>
                    <div>
                        <h2>2</h2>
                        <p>Victorias</p>
                    </div>
                    </div>
                    <p>La palabra era: <strong>PERRO</strong></p>
                    <div className='mb-4'>
                    <p>SIGUIENTE PALABRA</p>
                    <h2 className='font-bold'>04:10</h2>
                    </div>
                    <button onClick={() => hideModal()} className='bg-green-box rounded-md mx-auto px-14 py-1 text-white font-bold text-lg'>
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StatsModal