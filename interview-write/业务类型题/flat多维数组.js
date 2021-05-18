// 希望实现⼀个 function flat：
// 1、参数为多个多维数组;
// 2、输出为⼀个⼀维数组;
// 3、数组元素包括：string，number，array，undefined，object;
// 4、以⼴度优先的⽅式输出;
// 例如 flat([1, 2, [3, 4], 5, [6, 7, [8]]]) => [1, 2, 5, 3, 4, 6, 7, 8];

// dfs
function flat(data) {
  const result = [];

  function dfs(data) {
    data.forEach(item => {
      if (Object.prototype.toString.call(item) === '[object Array]') {
        dfs(item);
      } else {
        result.push(item);
      }
    });
  }

  dfs(data);
  return result;
}

// bfs
function flat(data) {
  let temp = [];

  data.forEach(item => {
    if (Object.prototype.toString.call(item) === '[object Array]') {
      temp.push(item);
    }
  });

  while (temp.length > 0) {
    temp = temp.flat().filter(item => Object.prototype.toString.call(item) === '[object Array]');
  }

  return data;
}

console.log(flat([1, 2, [3, 4], 5, [6, 7, [8]]]));