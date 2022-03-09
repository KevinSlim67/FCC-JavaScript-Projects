const numbers = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  }
  
  function convertToRoman(num) {
    let romanArray = [];
  
    for(let i = Object.keys(numbers).length - 1; i >= 0;) {
      if (num - Object.keys(numbers).at(i) >= 0) {
        num = num - Object.keys(numbers).at(i);
        romanArray.push(Object.values(numbers).at(i));
        continue;
      }
      i--;
    }
  
    let romanNumeral = romanArray.join('');
    console.log(romanNumeral);
    return romanNumeral;
  }