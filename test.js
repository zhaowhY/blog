// function add(a, b) {
//   return BigInt(a) + BigInt(b);
// }
// 1n + 2n = 3n

// 123.12  33.3
function add(a, b) {

  function isNotNumber(num) {
    if (['number', 'string'].includes(typeof num)) {
      return !Number(num) && ![0, '0'].includes(num);
    }
    return true;
  }

  if (isNotNumber(a) || isNotNumber(b)) return null;

  let [newA1, newA2 = ''] = String(a).split('.');
  let [newB1, newB2 = ''] = String(b).split('.');

  const maxLen1 = Math.max(newA1.length, newB1.length);
  const maxLen2 = Math.max(newA2.length, newB2.length);
  const newA = newA1.padStart(maxLen1, '0') + '.' + newA2.padEnd(maxLen2, '0');
  const newB = newB1.padStart(maxLen1, '0') + '.' + newB2.padEnd(maxLen2, '0');
  // 122.23  041.30
  let temp = 0;
  let result = '';
  for (let i = maxLen1 + maxLen2; i >= 0; i--) {
    if (newA[i] === '.') {
      result = '.' + result;
      continue;
    }
    const sum = Number(newA[i]) + Number(newB[i]);
    result = temp + sum % 10 + result;
    temp = Math.floor(sum / 10);
  }
  return result.endsWith('.') ? result.slice(0, -1) : result;; // String
}

console.log(add(11, 12)); // 156.42
console.log(add(true, true)); // 156.42
