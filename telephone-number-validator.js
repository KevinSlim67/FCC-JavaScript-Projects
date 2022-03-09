function telephoneCheck(str) {
    let format = /^(1?\s?(\(\d\d\d\)|\d\d\d)(-|\s)?\d\d\d(-|\s)?\d\d\d\d)$/;
  
    let cond = false;
    if (format.test(str)) {
      cond = true;
    }
  
    return cond;
}
  