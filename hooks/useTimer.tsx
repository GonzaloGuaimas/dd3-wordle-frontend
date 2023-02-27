import { useEffect, useState } from 'react'

const useTimer = (setTime: Function) => {
  const [isActive] = useState(true);

  useEffect(() => {
    try {
        setTime(Number(localStorage.getItem('countdownTime')))
    } catch (error) {
        setTime(60 * 5)
        localStorage.setItem('countdownTime', (60 * 5).toString());
    }

  }, [])

  useEffect(() => {
    let intervalId: any;
    if (isActive) {
      intervalId = setInterval(() => {
        setTime((prevTime: number) => {
            const newTime = prevTime - 1
            localStorage.setItem('countdownTime', (newTime).toString());
            return newTime
        });
        
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isActive]);


  const handleReset = () => {
    setTime(60 * 5);
    localStorage.setItem('countdownTime', (60 * 5).toString());
  };

  return { handleReset }
}

export default useTimer