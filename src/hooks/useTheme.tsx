import { useEffect, useState } from 'react'

const useTheme = () => {
    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        const userTheme = localStorage.getItem('theme')
     if (userTheme === 'dark') {
        document.documentElement.classList.add('dark')
        setIsDark(true)
      } else {
        document.documentElement.classList.remove('dark')
        setIsDark(false)
      }
    }, [])

    const themeSwitch = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
            setIsDark(true)
            return
        }
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        setIsDark(false)
    }

  return { themeSwitch, isDark }
}

export default useTheme