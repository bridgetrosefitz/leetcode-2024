/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  // initiate left stack and right stack
  // iniate start = 0
  // iterate left to right
  // when we see a non alpha ch
  // if ch is "(" add slice from start to curr index to left stack, and update start to curr + 1
  // if ch is ")"
  // add slice from start to curr to right stack, and update start
  // reverse right stack
  // pop left and pop right
  // reverse left and add to ans
  // while length of left stack
  // pop left and pop right
  // concatenate left onto front of ans and right onto end of ans
  // reverse ans
  // return ans
};
