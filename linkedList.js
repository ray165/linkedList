import ListNode from './listNode.js'

/**
 * Example from free code camp
 */
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

// Setup the nodes and their order
let node1 = new ListNode(2)
let node2 = new ListNode(5)

node1.next = node2

// Set the 'head' of the linked list
let list = new LinkedList(node1)

console.log(list.head.next.data)
