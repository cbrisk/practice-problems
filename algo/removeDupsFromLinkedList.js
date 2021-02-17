function removeDuplicatesFromLinkedList(linkedList) {
  let ele = linkedList;
  while (ele !== null) {
    let nextNode = ele.next;
    while (nextNode !== null && nextNode.value === ele.value) {
      nextNode = nextNode.next;
    }
    ele.next = nextNode;
    ele = ele.next;
  }
  return linkedList;
}
