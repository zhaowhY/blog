/**
 * {@link https://leetcode-cn.com/problems/swap-nodes-in-pairs/}
 * @description 使用一个新链存储结果。使用新节点进行 交换节点
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head) return null;
  const newHead = new ListNode();
  newHead.next = head;
  let node = newHead;


  while (head && head.next) {
    const nextNode = new ListNode(head.next.val);
    head.next = head.next.next;

    nextNode.next = head;

    node.next = nextNode;
    node = node.next.next;

    head = head.next;
  }
  return newHead.next;
};

// [2,1,4,3]
console.log(swapPairs({ "val": 1, "next": { "val": 2, "next": { "val": 3, "next": { "val": 4, "next": null } } } }));