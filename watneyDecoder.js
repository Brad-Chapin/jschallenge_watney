function decode(str){
  let asciiVals = [];
  let plainText = [];
  for (let n = 0; n < str.length; n++){
    asciiVals.push(parseInt(str[n], 16));
  }
  for (let m = 0; m < asciiVals.length; m++){
      plainText.push(String.fromCharCode(asciiVals[m]));
  }
  console.log(plainText.join(""));
  return plainText.join("");
}

function encode(str){
  let asciiVals = []
  let hexVals = [];
  for (let i = 0; i < str.length; i++){
    asciiVals.push(str.charCodeAt(i));
  }
  for (let x = 0; x <asciiVals.length; x++){
    hexVals.push(asciiVals[x].toString(16))
  }
  console.log(hexVals);
  return hexVals;
}

function encodeArc(str) {
  const arcVals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  const arcRanges = [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5];
  let arcCode = [];
  for (let d = 0; d < str.length; d++){
    arcCode.push(arcRanges[arcVals.indexOf(str[d][0])]);
    arcCode.push(arcRanges[arcVals.indexOf(str[d][1])]);
  }
  console.log(arcCode);
  return arcCode;
}


module.exports = {decode,encode,encodeArc}
