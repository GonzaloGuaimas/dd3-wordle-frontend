import React from 'react'
import useTheme from '../hooks/useTheme'

const ToggleSwitch = () => {
    const { themeSwitch, isDark } = useTheme()
   
  return (
    <label htmlFor="check" className='bg-gradient-to-t from-[#FFEEB2] to-[#66FFED] dark:from-[#AFCAFF] dark:to-[#2B4485]2B4485 cursor-pointer relative w-10 h-6 rounded-full'>
        <input type="checkbox" id="check" className='sr-only peer' onChange={(e) => themeSwitch()}/>
        <span className={`w-2/5 h-3/5 absolute rounded-full transition-all duration-500
        ${isDark ? 'toggle-dark' : 'toggle-light'}`}></span>
    </label>
  )
}

export default ToggleSwitch