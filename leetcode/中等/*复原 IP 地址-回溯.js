/**
 * @description 回溯
 * {@link https://leetcode-cn.com/problems/restore-ip-addresses/}
 */

/**
 * @description 定义全局变量存储结果
 * @param {string} s
 * @return {string[]}
 */

var restoreIpAddresses = function (s) {
  if (!s || s.length < 4) return [];
  const result = [];

  function DFS(arr) {
    const curlen = arr.join('').length;
    if (curlen === s.length && arr.length === 4) {
      result.push(arr.join('.'));
    }
    if (curlen === s.length || arr.length === 4) {
      return;
    }

    for (let i = curlen; i < curlen + 3; i++) {
      if (i >= s.length) break;
      const str = s.slice(curlen, i + 1);
      if (str.length > 1 && str.startsWith('0')) break;
      if (Number(str) >= 0 && Number(str) <= 255) {
        DFS([...arr, Number(str)]);
      }
    }
  }

  DFS([]);
  return result;
};



console.log(restoreIpAddresses('25525511135')); // ["255.255.11.135","255.255.111.35"]
console.log(restoreIpAddresses('0000')); // ["0.0.0.0"]
console.log(restoreIpAddresses('1111')); // ["1.1.1.1"]
console.log(restoreIpAddresses('010010')); // ["0.10.0.10","0.100.1.0"]
console.log(restoreIpAddresses('101023')); // [ '1.0.10.23', '1.0.102.3', '10.1.0.23', '10.10.2.3', '101.0.2.3' ]


