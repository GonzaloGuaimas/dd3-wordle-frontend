import { useEffect, useState } from 'react'

const useTheme = () => {
    useEffect(() => {
        const userTheme = localStorage.getItem('theme')
     if (userTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }, [])

    const themeSwitch = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
            return
        }
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    }

  return { themeSwitch }
}

export default useTheme