const zero = 'zero';
const hundred = 'hundred';
const numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const hundreds = ['', 'hundred', 'thousand', 'million'];

function encode(n100 = 0, n10 = 0, n1 = 0, rank) {
    let res = [];
    if (n100) res.push(`${numbers[n100]} ${hundred}`);
    if (n10 === 1) {
        res.push(numbers[n10 * 10 + n1]);
    } else {
        res.push(tens[n10]);
        res.push(numbers[n1]);
    }
    res.push(rank);
    return res.filter((value)=>value).join(' ').trim();
}

module.exports = function toReadable (number) {
    if (number === 0) return zero;
    let res = '';
    let digits = String(number).split('').reverse();
    for (let i = Math.ceil(digits.length / 3) - 1; i >= 0; i --) {
        res += encode(+digits[i * 3 + 2] || 0, +digits[i * 3 + 1] || 0, +digits[i * 3] || 0, hundreds[i]) + ' ';
    }
    return res.trim();
}
