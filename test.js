
let unique = (input) => {
	if (!Array.isArray(input)) return null;
	// 请补充逻辑, 不考虑undefined, function, symbol值的情况， 对象、数组暂时只考虑一级
	const result = [];
	const temp = {};
	input.forEach((item) => {
		let type = typeof item;
		if (type === 'object') {
			type = Object.prototype.toString.call(item); // [object Array]
			if (type === '[object Array]' && !temp[JSON.stringify(item.sort())]) {
				result.push(item);
				temp[JSON.stringify(item.sort())] = true;
			}

			if (type === '[object Object]') {
				const arrTemp = [];
				Object.keys(item).sort().forEach((key) => arrTemp.push([key, item[key]]));
				if (!temp[JSON.stringify(arrTemp)]) {
					result.push(item);
					temp[JSON.stringify(arrTemp)] = true;
				}
			}
		} else if (!temp[type + item]) {
			result.push(item);
			temp[type + item] = true;
		}
	});

	return result;
};
//  预期结果 ==>  [1, "a", {b: 2}, {c: 3},[ 2 ], "1"]
console.log(unique([1, "a", { b: 2 }, { c: 3 }, { b: 2 }, [2], [2], "1", "a"]));


