/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  var middleNode = function () {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }

    return slow;
  };

  var reverseList = function (h) {
    let prev = null;
    let current = h;

    while (current) {
      let nxt = current.next;
      current.next = prev;
      prev = current;
      current = nxt;
    }

    return prev;
  };

  if (!head) return null;

  let middle = middleNode();
  let reverse = reverseList(middle);

  while (reverse) {
    if (reverse.val != head.val) return false;

    reverse = reverse.next;
    head = head.next;
  }

  return true;
};
