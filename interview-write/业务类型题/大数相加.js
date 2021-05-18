// js数范围: -2^53 ~ 2^53 -1
// 9007199254740991 + 1234567899999999999 = 1243575099254740990


// 1. 利用BigInt
console.log(String(9007199254740991n + 1234567899999999999n));

// 2. 利用数组和字符串，从末尾相加，> 9 则进位
function add(n, m) {
  const maxLen = Math.max(n.length, m.length);
  n = n.padStart(maxLen, 0);
  m = m.padStart(maxLen, 0);
  let result = '';
  let temp = 0;
  for (let i = maxLen - 1; i >= 0; i--) {
    const sum = Number(n[i]) + Number(m[i]) + temp;
    temp = Math.floor(sum / 10);
    result = sum % 10 + result;
  }
  if (temp > 0) result = temp + result;

  return result;
}

console.log(add('9007199254740991', '1234567899999999999'));