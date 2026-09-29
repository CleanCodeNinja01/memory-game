export const shuffleDeck = (deck) => {
    const shuffled = [...deck];

    for (let index = 0; index < shuffled.length-1; index++) {
        const j = Math.floor(Math.random()*(i+1))
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
        
    }
    return shuffled;
}