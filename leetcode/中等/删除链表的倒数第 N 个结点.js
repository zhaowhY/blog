/**
 * {@link https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/}
 */


function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let node = head;

  let len = 0;
  while (node) {
    if (!node) return;
    len += 1;
    node = node.next;
  }
  if (len - n === 0) return head.next;

  let index = -1;
  node = head;
  while (node) {
    if (!node) return head;
    index++;
    if (index === len - n - 1) {
      if (node.next) node.next = node.next.next;
      return head;
    }

    node = node.next;
  }
};


console.log(removeNthFromEnd({ "val": 1, "next": { "val": 2, "next": { "val": 3, "next": { "val": 4, "next": { "val": 5, "next": null } } } } }, 4)); // [1, 3,4, 5]
