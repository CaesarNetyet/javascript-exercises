const sumAll = function(firstnumber, finalnumber) {
    let sum = 0;
    if (firstnumber < 0 || finalnumber < 0) return 'ERROR';
    if (typeof firstnumber !== 'number' || typeof finalnumber !== 'number') return 'ERROR';
    if (firstnumber > finalnumber) {
        for (let i = firstnumber; i >= finalnumber; i--) {
            sum += i;
        }
        return sum;
    }
    if (finalnumber > firstnumber) {
        for (let i = firstnumber; i <= finalnumber; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

console.log(sumAll(1, "4000"));

console.log(typeof '1' === "string")