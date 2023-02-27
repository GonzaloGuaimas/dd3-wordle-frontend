import React, { ReactNode } from 'react'

const KeySpecial = ({ children, handleOnClickKeyDown, value }: { children: ReactNode, handleOnClickKeyDown: Function, value: string }) => {
  return (
    <button
        onClick={(e) => handleOnClickKeyDown(e)}
        value={value}
        className='rounded-box-radius content-center uppercase w-auto h-10 px-2 md:px-3 md:h-10 bg-grey-default-key dark:bg-blue-default-key'>
        {children}
    </button>
  )
}

export default KeySpecial