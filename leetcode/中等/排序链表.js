/**
 * {@link https://leetcode-cn.com/problems/sort-list/}
 * @description 二分法插入 + 遍历
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head) return head;
  const nodes = [];

  function search(target) {

    let left = 0;
    let right = nodes.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nodes[mid].val > target) right = mid - 1;
      else if (nodes[mid].val < target) left = mid + 1;
      else return mid;
    }

    return nodes[left] && nodes[left].val > target ? left : left + 1;
  }
  while (head) {
    const idx = search(head.val);
    nodes.splice(idx, 0, head);
    head = head.next;
  }

  let result = null;
  let curNode = null;
  nodes.forEach(node => {
    if (result === null) {
      result = node;
      curNode = node;
    } else {
      curNode.next = node;
      curNode = curNode.next;
    }
  });

  curNode.next = null;
  return result;
};

console.log(sortList({ "val": 4, "next": { "val": 2, "next": { "val": 1, "next": { "val": 3, "next": null } } } })); // [1, 2, 3, 4]
console.log(sortList({ "val": -1, "next": { "val": 5, "next": { "val": 3, "next": { "val": 4, "next": { "val": 0, "next": null } } } } })); // [-1,0,3,4,5]

