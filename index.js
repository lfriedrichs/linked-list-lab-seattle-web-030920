function getName(node) {
    return node.name
}

function headNode(linkedList, collection) {
    return collection[linkedList]
}

function next(head, collection) {
    let node = head
    return collection[node.next]
    
}

function nodeAt(index, linkedList, collection) {
    let head = headNode(linkedList, collection)
        while (index !== 0) {
            head = next(head, collection);
            index --;
        }
        return head
}

function addressAt(index, linkedList, collection) {
    let address = linkedList
    let head = headNode(linkedList, collection)
        while (index > 0) {
            address = head.next
            head = next(head, collection);
            index --;
        }
        return address
}

function indexAt(node, collection, linkedList) {
    let head = headNode(linkedList, collection)
    let index = 0;
        while (node !== head) {
            head = next(head, collection);
            index ++;
        }
        return index
}

function insertNodeAt(index, newKey, linkedList, collection){
    let prevAddress = addressAt(index-1, linkedList, collection);
    let nextAddress = addressAt(index, linkedList, collection);
  
    collection[newKey].next = nextAddress;
    collection[prevAddress].next = newKey;
  }
  

function deleteNodeAt(index, linkedList, collection) {
    let prevNode = nodeAt(index-1, linkedList, collection)
    let node = nodeAt(index, linkedList, collection)
    prevNode.next = node.next
    
}