import wordsList from '../../words.json'

export const filterFiveLettersWords = () => {
    return JSON.parse(JSON.stringify(wordsList)).filter((word: string) => word.length === 5)
}