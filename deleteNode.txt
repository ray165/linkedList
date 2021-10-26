// Initially definition from Freecodecamp

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
    console.log("Node we want to delete:", findMiddle(list.head).data) // Expect to get "better" as our middle node
    list.head = deleteMiddleV2(list.head)
    printNodeValues(list.head)

    console.log(">>>>>>>> TEST 2 <<<<<<<<<<")

    console.log("Node we want to delete:", findMiddle(list2.head).data) // Expect to get "one"
    list2.head = deleteMiddleV2(list2.head)
    printNodeValues(list2.head)

}

/**
 * New version of deletion with a single pass.
 * @param {ListNdoe} head 
 * @returns new Head
 */
function deleteMiddleV2(head) {
    let fast = head
    let curr = head
    let prev

    // grab middle node
    while (fast != null && fast.next != null) {
        prev = curr
        curr = curr.next
        fast = fast.next.next
    }

    // deletion
    if (curr && curr.next && curr.next.next) {
        prev.next = curr.next.next 
    } else {
        head = null // in a scenario with only 1 node 
    }

    //printNodeValues(head)
    return head
}


function findMiddle(head) {
    let fast = head
    let slow = head
    // Find middle node
    while (fast != null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next
    }
    // By the time fast is null, slow is at the center
    // If there's two middle nodes, this returns the second one.
    return slow
}

function deleteMiddle(head) {
    let midNode = findMiddle(head)
    let curr = head
    let prev = head

    while (curr != null) {
        if (curr.data === midNode.data) {
            if (curr.next != null) {
                prev.next = prev.next.next || null
            } 
            
            if (curr.next == null) {
                console.log("LINE 76:  this should run for second test")
                curr = null // for single node list
                prev = null
                head = null
            }
            return
        }
        prev = curr
        curr = curr.next
    }
}

function printNodeValues(head) {
    let curr = head
    while (curr != null) {
        console.log(curr.data)
        curr = curr.next
    }
}