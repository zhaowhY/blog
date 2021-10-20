function compareVersion(verA, operator, verB) {
  // 补充逻辑
}

console.log(compareVersion('4.0.1.0', '=', '0.4.1.0'));   // false
console.log(compareVersion('4.0.1.0', '>', '4'));    // true(0417修正)
console.log(compareVersion('4.0.1.0', '<', '4.1.0'));   // true


function compareVersion(verA, operator, verB) {
  // 补充逻辑
  if (!verA || !operator || !verB) return false;
  const aTemp = verA.split('.');
  const bTemp = verB.split('.');
  const maxLen = Math.max(aTemp.length, bTemp.length);
  for (let i = 0; i < maxLen; i++) {
    aTemp[i] = Number(aTemp[i]) || 0;
    bTemp[i] = Number(bTemp[i]) || 0;
    if (aTemp[i] < bTemp[i]) {
      return operator === '<';
    }

    if (aTemp[i] > bTemp[i]) {
      return operator === '>';
    }

    if (i === maxLen - 1) {
      return operator === '=';
    }
  }
}