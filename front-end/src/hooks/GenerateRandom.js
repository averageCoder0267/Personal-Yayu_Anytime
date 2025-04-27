
export default function GenerateRandom() {
    let str = "1234657890";
    let random = "";
    for (let i = 0; i >= 0; i++) {
        if (random.length != 6) {
            random += str.charAt(Math.floor(Math.random() * str.length + 1))
        } else {
            break;
        }
    }
    return random;
}