function palindrome(str) {
    let arr = str.match(/[a-z0-9]/gi);
    arr = arr.map((letter) => letter.toLowerCase());
    let oppArr = [...arr].reverse();
  
    let str1 = arr.join('');
    let str2 = oppArr.join('');
  
    console.log(str1);
    console.log(str2);
    
    return str1 === str2;
  }
  