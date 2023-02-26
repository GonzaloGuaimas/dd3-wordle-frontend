import React from 'react'
import Box from './pure/Box'

const HelpModal = ({ showModal, hideModal }: { showModal: boolean, hideModal: Function }) => {
  return (
    <div className={showModal ? "modal-background" : "hidden"}>
        <div className="modal-container">
            <div className="mt-3 text-center">
                <h2>Cómo jugar</h2>
                <div className="flex flex-col gap-y-1 mt-5 text-start">
                    <p>Adivina la palabra oculta en cinco intentos.</p>
                    <p>Cada intento debe ser una palabra válida de 5 letras.</p>
                    <p>Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.</p>
                    <p className='font-bold'>Ejemplos</p>
                    <div className='flex gap-2 justify-center mt-1'>
                        <Box word={'G'} bgColor={'bg-green-box'} style={'w-12 h-12 text-black text-md md:text-2xl'}/>
                        <Box word={'A'} bgColor={'bg-white'} style={'w-12 h-12 text-black text-md md:text-2xl border-1 border-black dark:border-grey-box dark:bg-opacity-0'}/>
                        <Box word={'T'} bgColor={'bg-white'} style={'w-12 h-12 text-black text-md md:text-2xl border-1 border-black dark:border-grey-box dark:bg-opacity-0'}/>
                        <Box word={'O'} bgColor={'bg-white'} style={'w-12 h-12 text-black text-md md:text-2xl border-1 border-black dark:border-grey-box dark:bg-opacity-0'}/>
                        <Box word={'S'} bgColor={'bg-white'} style={'w-12 h-12 text-black text-md md:text-2xl border-1 border-black dark:border-grey-box dark:bg-opacity-0'}/>
                    </div>
                    <p>La letra <strong>G</strong> está en la palabra y en la posición correcta.</p>
                    <div className='flex gap-2 justify-center mt-1'>
                        <Box word={'V'} bgColor={'bg-white'} style={'w-12 h-12 text-black text-md md:text-2xl border-1 border-black dark:border-grey-box dark:bg-opacity-0'}/>
                        <Box word={'O'} bgColor={'bg-white'} style={'w-12 h-12 text-black text-md md:text-2xl border-1 border-black dark:border-grey-box dark:bg-opacity-0'}/>
                        <Box word={'C'} bgColor={'bg-yellow-box'} style={'w-12 h-12 text-black text-md md:text-2xl border-1 border-black'}/>
                        <Box word={'A'} bgColor={'bg-white'} style={'w-12 h-12 text-black text-md md:text-2xl border-1 border-black dark:border-grey-box dark:bg-opacity-0'}/>
                        <Box word={'L'} bgColor={'bg-white'} style={'w-12 h-12 text-black text-md md:text-2xl border-1 border-black dark:border-grey-box dark:bg-opacity-0'}/>
                    </div>
                    <p>La letra <strong>C</strong> está en la palabra pero en la posición incorrecta.</p>
                    <div className='flex gap-2 justify-center mt-1'>
                        <Box word={'C'} bgColor={'bg-white'} style={'w-12 h-12 text-black text-md md:text-2xl border-1 border-black dark:border-grey-box dark:bg-opacity-0'}/>
                        <Box word={'A'} bgColor={'bg-white'} style={'w-12 h-12 text-black text-md md:text-2xl border-1 border-black dark:border-grey-box dark:bg-opacity-0'}/>
                        <Box word={'N'} bgColor={'bg-white'} style={'w-12 h-12 text-black text-md md:text-2xl border-1 border-black dark:border-grey-box dark:bg-opacity-0'}/>
                        <Box word={'T'} bgColor={'bg-white'} style={'w-12 h-12 text-black text-md md:text-2xl border-1 border-black dark:border-grey-box dark:bg-opacity-0'}/>
                        <Box word={'O'} bgColor={'bg-grey-box'} style={'w-12 h-12 text-black text-md md:text-2xl border-1 border-black'}/>
                    </div>
                    <p>La letra <strong>O</strong> no está en la palabra.</p>
                    <p className='mt-3'>Pueden haber letras repetidas. Las pistas son independientes para cada letra.</p>
                    <p className='text-center my-3'>!Una palabra nueva cada 5 minutos!</p>
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