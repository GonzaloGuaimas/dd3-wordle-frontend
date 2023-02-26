import { getGameFromLocalStorage, getStatsFromLocalStorage } from "../lib/localStorage"

export const isFirstTime = () => {
    return getStatsFromLocalStorage() === null || getGameFromLocalStorage() === null
}