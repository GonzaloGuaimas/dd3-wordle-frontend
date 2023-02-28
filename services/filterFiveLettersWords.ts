import wordsList from '../words.json'
import { toNormalForm } from './wordToNormalize'

export const filterFiveLettersWords = () => {
    return JSON.parse(JSON.stringify(wordsList)).filter((word: string) => { if (word.length === 5) return toNormalForm(word) })
}