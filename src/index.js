const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let resStr = ''

    let arrToStr = expr.match(/.{1,10}/g);

    for (let i = 0; i < arrToStr.length; i++) {

        if (arrToStr[i] === "**********") {
            resStr += " "
        } else {
            let sumbolMorse = ""
            let elementReversBeenar = arrToStr[i].split('').reverse().join('')
            let forSpace = elementReversBeenar.match(/.{1,2}/g).reverse();

            for (let i = 0; i < forSpace.length; i++) {
                if (forSpace[i] === '01') {
                    sumbolMorse += '.'
                } else if (forSpace[i] === '11') {
                    sumbolMorse += '-'
                }
            }
            let sumbolAlf = MORSE_TABLE[sumbolMorse]

            resStr += sumbolAlf
        }


    }

    return resStr
}

module.exports = {
    decode
}