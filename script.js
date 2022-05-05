class QuickObject {
  constructor(input) {
    this.input = input;
    console.log("ready");
  }
  
  find(n) {
    var interval = {
      low: 0,
      high: this.length()
    }
    var that = this;
    var ret;
    var lastRet = false;
    var steps = 0;
    function recursion() {
      steps += 1;
      var intervalLength = interval.high - interval.low;
      if (lastRet != ret) {
        lastRet = ret;
        var half = Math.floor(intervalLength / 2);
        console.log("hledám",that.nthKey(interval.low + half),n);
        ret = that.nthKey(interval.low + half);
        if (that.nthKey(interval.low + half) > n) {
          interval.high = interval.low + half;
        } else {
          interval.low = interval.low + half;
        }
        recursion();
      }
    }
    recursion();
    return {
      key: ret,
      value: this.input[ret],
      steps: steps
    };
  }
  
  nthKey(n) {
    return parseInt(Object.keys(this.input).slice(n, n + 1)[0]);
  }
  
  length() {
    return Object.keys(this.input).length;
  }
}

var Qo = new QuickObject({
  0: "nultý",
  16: "první",
  472:"sedmý",
  30:"třetí",
  64: "pátý",
  6895: "desátý",
  526: "osmý",
  57: "čtvrtý",
  18: "druhý",
  969: "devátý",
  100: "šestý",
  32579: "jedenáctý",
  56778: "dvanáctý",
  69864: "třináctý",
  765894: "osmnáctý",
  111111: "čtrnáctý",
  467962: "sedmnáctý",
  6643890: "devatenáctý",
  332456: "patnáctý",
  9753789: "dvacátý",
  443258: "šestnáctý",
});