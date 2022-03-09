function rot13(str) {
    let arr = [];
  
    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
      if (/[a-m]/i.test(str.charAt(i))) {
        code += 13;
      } else if (/[n-z]/i.test(str.charAt(i))) {
        code -= 13;
      }
      arr.push(String.fromCharCode(code));
    }
    let decryptedStr = arr.join('');
    console.log(decryptedStr);
    return decryptedStr;
}
  