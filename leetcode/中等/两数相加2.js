/**
 * @link https://leetcode-cn.com/problems/add-two-numbers-ii/
 * 1. 构建链表，先初始化链头，然后从数组第二个值继续构建
 * 2. 删除使用unshift(), shift(), push(), pop() 避免过于长的for循环
 */



function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (!l1 && !l2) return;
  let temp1 = [];
  let temp2 = [];

  while (l1) {
    temp1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    temp2.push(l2.val);
    l2 = l2.next;
  }

  const result = [];
  let temp3 = 0;
  while (temp1.length > 0 || temp2.length > 0 || temp3 > 0) {
    let val1 = temp1.pop() || 0;
    let val2 = temp2.pop() || 0;

    result.unshift((val1 + val2 + temp3) % 10);
    temp3 = Math.floor((val1 + val2 + temp3) / 10);
  }


  const resList = new ListNode(result.shift());
  let root = resList;
  while (result.length > 0) {
    root.next = new ListNode(result.shift());
    root = root.next;
  }

  return resList;
};

console.log(addTwoNumbers({ "val": 7, "next": { "val": 2, "next": { "val": 4, "next": { "val": 3, "next": null } } } }, { "val": 5, "next": { "val": 6, "next": { "val": 4, "next": null } } }
));
// 输入：(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 8 -> 0 -> 7