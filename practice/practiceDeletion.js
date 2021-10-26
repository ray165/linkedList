class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
}

class ListNode {
    constructor(data) {
        this.data = data || null; 
        this.next = null;
    }
}

/**
 * deletes the middle for a odd number of elemenets. Otherwise the second middle node
 * @param {head} head 
 * @returns new head
 */
function deleteMiddleNode(head) {
    if (!head || head.next == null) return null; 

    let curr, fast, prev;
    curr = fast = head; 

    while (fast && fast.next != null) {
        prev = curr;
        curr = curr.next;
        fast = fast.next.next;
    }
    // should delete curr 
    prev.next = prev.next.next;
    return head;
}

function printNodeValues(head) {
    let curr = head
    while (curr != null) {
        console.log(curr.data)
        curr = curr.next
    }
}


makeList()

function makeList() {
    let n1 = new ListNode("Pho")
    let n2 = new ListNode("is")
    let n3 = new ListNode("better")
    let n4 = new ListNode("than")
    let n5 = new ListNode("ramen")

    n1.next = n2
    n2.next = n3
    n3.next = n4
    n4.next = n5

    let list = new LinkedList(n1);

    // test case, one node
    let singleNode = new ListNode("one")
    let list2 = new LinkedList(singleNode)


    //run tets
    // console.log(list)
    //console.log("Node we want to delete:", findMiddle(list.head).data) // Expect to get "better" as our middle node
    list.head = deleteMiddleNode(list.head)
    printNodeValues(list.head)

    console.log(">>>>>>>> TEST 2 <<<<<<<<<<")

    //console.log("Node we want to delete:", findMiddle(list2.head).data) // Expect to get "one"
    list2.head = deleteMiddleNode(list2.head)
    printNodeValues(list2.head)

}