/*
 * Shuffles the contents of an array
 * @param array e
 * @return array e
 * referenced from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 */
function shuffle(e) {
    for (let i = e.length - 1; i > 0; --i) {
        const j = Math.floor(Math.random() * (i + 1));
        [e[i], e[j]] = [e[j], e[i]];
    }
    return e;
}
