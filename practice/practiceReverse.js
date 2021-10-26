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
 * reverse 
 * null <- 1 <- 2 <- 3 
 * return new head
 */
function reverse(head) {
    if (!head || !head.next) return head;

    let curr = head;
    let prev = null;

    while (curr) {
        let temp  = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    // return the prev as the new head. Cause curr becomes null at the end
    return prev;
}

function printNodeValues(head) {
    let curr = head
    while (curr) {
        console.log(curr.data)
        curr = curr.next
    }
}

makeList();


function makeList() {
    let n1 = new ListNode(1);
    let n2 = new ListNode(2);
    let n3 = new ListNode(3);

    // 1 -> 2 -> 3
    // 3 , 2 , 1 desired output

    n1.next = n2;
    n2.next = n3; 

    let list = new LinkedList(n1);
    printNodeValues(list.head);
    console.log(">>>> Output <<<<")
    let reversed = new LinkedList(reverse(list.head));
    printNodeValues(reversed.head);

    // test with empty list
    let emptyList = new LinkedList();
    console.log(">>>> Empty List <<<<")
    printNodeValues(reverse(emptyList.head));

}