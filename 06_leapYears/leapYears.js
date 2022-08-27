const leapYears = function(year) {
    
       if (year %  100 === 0 && year % 400 !== 0) {
        return false
       }
       if (year % 4 === 0){
        return true
       }
       return false;
};

// Do not edit below this line
module.exports = leapYears;


console.log(leapYears(2016));
console.log(leapYears(1985));
console.log(leapYears(1996));
console.log(leapYears(1900));
console.log(leapYears(2000));