/**
 * @description dp有关的是为什么做优化， 先写基础的 -> 在添加剪枝操作
 * {@link https://leetcode-cn.com/problems/restore-ip-addresses/}
 */

/**
 * @description 定义全局变量存储结果
 * @param {string} s
 * @return {string[]}
 */

var restoreIpAddresses = function (s) {
  if (!s || s.length < 4 || s.length > 3 * 4) return [];
  const result = [];
  const dp = [];
  function dfs(s, path) {
    const pathLen = path.split('.').length;
    dp[s] = dp[s] || [];
    dp[s][pathLen] = dp[s][pathLen] || [];
    if (dp[s][pathLen].length > 0) {

      return result.push(...(dp[s][pathLen].map((item) => {
        item = item ? `.${item}` : item;
        return path + item;
      })));
    }
    if (path !== '' && s.length > 3 * (4 - pathLen) || (s === '' && pathLen < 4)) return;
    if (pathLen === 4) {
      dp[s][pathLen] = [''];
      return result.push(path);
    };
    for (let i = 0; i < Math.min(s.length, 3); i++) {
      const ipVal = s.slice(0, i + 1);
      if (Number(ipVal) > 255) return;
      if (ipVal.length > 1 && ipVal[0] === '0') return;
      const newPath = path === '' ? ipVal : path + '.' + ipVal;
      dfs(s.slice(i + 1), newPath);

      dp[s][pathLen].push(...((dp[s.slice(i + 1)][newPath.split('.').length] || []).map((item) => {
        item = item ? `.${item}` : item;
        return s.slice(0, i + 1) + item;
      })));
    }
  }

  dfs(s, '');

  return result;
};

/**
 * @description 利用返回值存储结果，中间特殊情况返回时，需要注意返回值
 * @param {string} s
 * @return {string[]}
 */

// var restoreIpAddresses = function (s) {
//   if (!s || s.length < 4 || s.length > 3 * 4) return [];
//   const dp = [];
//   function dfs(s, path) {
//     let temp = [];
//     const pathLen = path.split('.').length;
//     dp[s] = dp[s] || [];
//     dp[s][pathLen] = dp[s][pathLen] || [];
//     if (dp[s][pathLen].length > 0) {
//       return dp[s][pathLen].map((item) => {
//         item = item ? `.${item}` : item;
//         return path + item;
//       });
//     }
//     if (path !== '' && s.length > 3 * (4 - pathLen) || (s === '' && pathLen < 4)) return temp;
//     if (pathLen === 4) {
//       dp[s][pathLen] = [''];
//       return [path];
//     };
//     for (let i = 0; i < Math.min(s.length, 3); i++) {
//       const ipVal = s.slice(0, i + 1);
//       if (Number(ipVal) > 255) return temp;
//       if (ipVal.length > 1 && ipVal[0] === '0') return temp;
//       const newPath = path === '' ? ipVal : path + '.' + ipVal;
//       const a = dfs(s.slice(i + 1), newPath);
//       temp.push(...a);

//       dp[s][pathLen].push(...((dp[s.slice(i + 1)][newPath.split('.').length] || []).map((item) => {
//         item = item ? `.${item}` : item;
//         return s.slice(0, i + 1) + item;
//       })));

//     }
//     return temp;
//   }

//   return dfs(s, '');
// };


console.log(restoreIpAddresses('25525511135')); // ["255.255.11.135","255.255.111.35"]
console.log(restoreIpAddresses('0000')); // ["0.0.0.0"]
console.log(restoreIpAddresses('1111')); // ["1.1.1.1"]
console.log(restoreIpAddresses('010010')); // ["0.10.0.10","0.100.1.0"]
console.log(restoreIpAddresses('101023')); // [ '1.0.10.23', '1.0.102.3', '10.1.0.23', '10.10.2.3', '101.0.2.3' ]


