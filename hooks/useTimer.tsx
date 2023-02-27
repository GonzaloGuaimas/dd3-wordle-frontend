import { useEffect, useState } from 'react'
import { getTimeFromLocalStorage, saveTimeToLocalStorage } from '../lib/localStorage';

const useTimer = (setTime: Function, loadGame: Function, setShowStatsModal: Function) => {
  const [isActive] = useState(true);

  useEffect(() => {
    try {
        setTime(getTimeFromLocalStorage())
    } catch (error) {
        setTime(60 * 5)
        saveTimeToLocalStorage(60 * 5)
    }

  }, [])

  useEffect(() => {
    let intervalId: any;
    if (isActive) {
      intervalId = setInterval(() => {
        setTime((prevTime: number) => {
            const newTime = prevTime - 1
            saveTimeToLocalStorage(newTime)
            if (newTime < 0) setShowStatsModal({show: true, isEnd: true}), loadGame()
            return newTime
        });
        
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isActive]);


  const handleReset = () => {
    setTime(60 * 5)
    saveTimeToLocalStorage(60 * 5)
  };

  return { handleReset }
}

export default useTimer