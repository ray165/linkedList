class ListNode {
    constructor(data) {
        this.data = data || null;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
}

function printNodeValues(head) {
    let curr = head;
    while (curr) {
        console.log(curr.data);
        curr = curr.next;
    }
}

/**
 * Where do you want to insert the data? Head, tail, somewhere in between?
 * @param {head} head 
 */
function insertNewHead(head, newNode) {
    newNode.next = head;
    return newNode
}

function insertNewTail(head, newNode) {
    let curr = head; 
    let prev;
    while (curr) {
        prev = curr;
        curr = curr.next;
    }
    prev.next = newNode;
    return head;
}

/**
 * Insert a new middle node. If its even it'll come after the 2nd node 
 * @param {head} head 
 * @param {node} newNode 
 */
function insertMiddle(head, newNode) {
    if (!head) {
        return newNode;
    } else if (!head.next) {
        head.next = newNode;
        return head;
    }

    let curr, fast;
    curr = fast = head; 
    let prev;
    let counter = 0;
    // Need prev for even nodes
    while (fast && fast.next) {
        prev = curr;
        fast = fast.next.next;
        curr = curr.next;
        counter++;
    }

    if (counter % 2 === 0) {
        let temp = prev.next; 
        prev.next = newNode;
        newNode.next = temp;
    } else {
        let temp = curr.next;
        curr.next = newNode; 
        newNode.next = temp;
    }

    return head;
}

makeList();

function makeList() {
    let n1 = new ListNode(2);
    let n2 = new ListNode(3);

    n1.next = n2;

    // new node
    let n3 = new ListNode(1);
    let n4 = new ListNode(4);
    let n5 = new ListNode("Middle");

    let list = new LinkedList(n1);
    console.log("Before");
    printNodeValues(list.head);
    list.head = insertNewHead(list.head, n3);
    console.log("After");
    printNodeValues(list.head);

    list.head = insertNewTail(list.head, n4);
    console.log(`Inserting ${n4.data} at tail`);
    printNodeValues(list.head);

    console.log(`Inserting ${n5} as new middle node`);
    list.head = insertMiddle(list.head, n5);
    printNodeValues(list.head);

}