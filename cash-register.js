function checkCashRegister(price, cash, cid) {

    let returnObject = {
      status: "",
      change: []
    }
  
    const currenciesCost = { 
      "ONE HUNDRED": 100,
      "TWENTY": 20,
      "TEN": 10,
      "FIVE": 5,
      "ONE": 1,
      "QUARTER": 0.25,
      "DIME": 0.1,
      "NICKEL": 0.05,
      "PENNY": 0.01
    };
  
    let currenciesAmount = {
      "ONE HUNDRED": cid[8][1] / currenciesCost["ONE HUNDRED"],
      "TWENTY": cid[7][1] / currenciesCost["TWENTY"],
      "TEN": cid[6][1] / currenciesCost["TEN"],
      "FIVE": cid[5][1] / currenciesCost["FIVE"],
      "ONE": cid[4][1] / currenciesCost["ONE"],
      "QUARTER": cid[3][1] / currenciesCost["QUARTER"],
      "DIME": cid[2][1] / currenciesCost["DIME"],
      "NICKEL": cid[1][1] / currenciesCost["NICKEL"],
      "PENNY": cid[0][1] / currenciesCost["PENNY"]
    };
  
    let newCid = [];
  
    //sum up what we have in cash-in-drawer
    const cidSum = cid.reduce((acc, element) => acc + element[1], 0).toFixed(2);
    let changeNum = cash - price; 
    let wasChanged = {};
    //substracts certain number from change, if the cid has 1$ that it can substract, it'll
    //substract, then decrement currenciesAmount['DOLLARS'] by one.
    //the while loop makes sure we subtract by one again if it's possible instead of going to
    //the next value
    for (let element in currenciesCost) {
      let count = 0;
      wasChanged[element] = false;
      while ((changeNum - currenciesCost[element] >= 0) && currenciesAmount[element] > 0) {
        changeNum -= currenciesCost[element];
        changeNum = changeNum.toFixed(2);
        currenciesAmount[element]--;
        count++;
        wasChanged[element] = true;
        //console.log(changeNum);
      }
      newCid.unshift([element, currenciesCost[element] * count]); //unshift is used to invert the order
    }
  
    if (cidSum > cash) {
      returnObject.status = "OPEN";
      let newChange = newCid.filter((element) => wasChanged[element[0]]).reverse();
      returnObject.change = newChange;
    }
    else if ((cash - price).toFixed(2) === cidSum) {
      returnObject.status = "CLOSED";
      returnObject.change = newCid;
    }
    else if (cidSum < cash) {
      returnObject.status = "INSUFFICIENT_FUNDS";    
    }
  
    console.log(returnObject)
    return returnObject;
  }
