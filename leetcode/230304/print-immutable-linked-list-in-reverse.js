var printLinkedListInReverse = function (head) {
  if (head === null) return;
  printLinkedListInReverse(head.getNext());
  head.printValue();
};
