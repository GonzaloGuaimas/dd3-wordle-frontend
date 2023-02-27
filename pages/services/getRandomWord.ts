import { isWordPlayed } from "../lib/game"
import { filterFiveLettersWords } from "./filterFiveLettersWords"

export const getRandomWord = () => {
    let randomWord = filterFiveLettersWords()[Math.round(Math.random() * filterFiveLettersWords().length)]
    while (isWordPlayed(randomWord)){
        randomWord = filterFiveLettersWords()[Math.round(Math.random() * filterFiveLettersWords().length)]
    }
    return randomWord
}