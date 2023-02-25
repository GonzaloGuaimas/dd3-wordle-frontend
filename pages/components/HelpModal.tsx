import React from 'react'
import Box from './pure/Box'

const HelpModal = ({ showModal, hideModal }: { showModal: boolean, hideModal: Function }) => {
  return (
    <div className={showModal ? "fixed w-full min-h-screen bg-opacity-bg flex flex-col items-center justify-center" : "hidden"}>
        <div className="w-2/4 md:w-2/4 lg:w-2/5 mx-auto p-5 rounded-2xl shadow-lg border-black border-2 bg-grey-bg">
            <div className="mt-3 text-center">
                <h2 className="text-xl text-black font-extrabold">Cómo jugar</h2>
                <div className="flex flex-col gap-y-2 mt-5 text-sm text-black font-semibold text-start">
                    <p>Adivina la palabra oculta en cinco intentos.</p>
                    <p>Cada intento debe ser una palabra válida de 5 letras.</p>
                    <p>Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.</p>
                    <p className='font-bold'>Ejemplos</p>
                    <div className='grid grid-cols-5 gap-1 justify-items-center mt-3'>
                        <Box word={'G'} bgColor={'bg-green-box'} style={'w-14 h-14 text-black text-2xl'}/>
                        <Box word={'A'} bgColor={'bg-white'} style={'w-14 h-14 text-black text-2xl border-2 border-black'}/>
                        <Box word={'T'} bgColor={'bg-white'} style={'w-14 h-14 text-black text-2xl border-2 border-black'}/>
                        <Box word={'O'} bgColor={'bg-white'} style={'w-14 h-14 text-black text-2xl border-2 border-black'}/>
                        <Box word={'S'} bgColor={'bg-white'} style={'w-14 h-14 text-black text-2xl border-2 border-black'}/>
                    </div>
                    <p>La letra <strong>G</strong> está en la palabra y en la posición correcta.</p>
                    <div className='grid grid-cols-5 gap-1 justify-items-center mt-3'>
                        <Box word={'V'} bgColor={'bg-white'} style={'w-14 h-14 text-black text-2xl border-2 border-black'}/>
                        <Box word={'O'} bgColor={'bg-white'} style={'w-14 h-14 text-black text-2xl border-2 border-black'}/>
                        <Box word={'C'} bgColor={'bg-yellow-box'} style={'w-14 h-14 text-black text-2xl border-2 border-black'}/>
                        <Box word={'A'} bgColor={'bg-white'} style={'w-14 h-14 text-black text-2xl border-2 border-black'}/>
                        <Box word={'L'} bgColor={'bg-white'} style={'w-14 h-14 text-black text-2xl border-2 border-black'}/>
                    </div>
                    <p>La letra <strong>C</strong> está en la palabra pero en la posición incorrecta.</p>
                    <div className='grid grid-cols-5 gap-1 justify-items-center mt-3'>
                        <Box word={'C'} bgColor={'bg-white'} style={'w-14 h-14 text-black text-2xl border-2 border-black'}/>
                        <Box word={'A'} bgColor={'bg-white'} style={'w-14 h-14 text-black text-2xl border-2 border-black'}/>
                        <Box word={'N'} bgColor={'bg-white'} style={'w-14 h-14 text-black text-2xl border-2 border-black'}/>
                        <Box word={'T'} bgColor={'bg-white'} style={'w-14 h-14 text-black text-2xl border-2 border-black'}/>
                        <Box word={'O'} bgColor={'bg-grey-box'} style={'w-14 h-14 text-black text-2xl border-2 border-black'}/>
                    </div>
                    <p>La letra <strong>O</strong> no está en la palabra.</p>
                    <p className='mt-5'>Pueden haber letras repetidas. Las pistas son independientes para cada letra.</p>
                    <p className='text-center my-5'>!Una palabra nueva cada 5 minutos!</p>
                    <button onClick={() => hideModal()} className='bg-green-box rounded-md mx-auto px-14 py-1 text-white font-bold text-lg'>
                        !JUGAR!
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HelpModal