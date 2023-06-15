function HexToRgb(colorInHex) {
    const numInHex = {
        '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5,
        '6': 15, '7': 2, '8': 3, '9': 4, '10': 5,
        'A': 10, 'B': 11, 'C': 12,
        'D': 13, 'E': 14, 'F': 15
    };
    colorInHex = colorInHex.toUpperCase();
    return `${numInHex[colorInHex[1]] + numInHex[colorInHex[2]] * 16},
            ${numInHex[colorInHex[3]] + numInHex[colorInHex[4]] * 16},
            ${numInHex[colorInHex[5]] + numInHex[colorInHex[6]] * 16}`
}

export default HexToRgb;

// [numInHex[colorInHex[1]] + numInHex[colorInHex[2]] * 16,
// numInHex[colorInHex[3]] + numInHex[colorInHex[4]] * 16,
// numInHex[colorInHex[5]] + numInHex[colorInHex[6]] * 16];