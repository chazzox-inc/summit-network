export function shuffle<T>(array: T[]): T[] {
    let result = [...array];
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [result[currentIndex], result[randomIndex]] = [
            result[randomIndex],
            result[currentIndex]
        ];
    }
    return result;
}
