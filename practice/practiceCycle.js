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

const hasCycleSet = (head) => {
    let curr = head;
    let visited = new Set();
    while (curr) {
        if (visited.has(curr)) {
            return true;
        }
        visited.add(curr);
        curr = curr.next;
    }
    return false;
}

const hasCycleSlowFast = (head) => {
    let slow, fast;
    slow = fast = head; 

    while (fast && fast.next) {
        fast = fast.next.next;
        if (fast == slow || fast.next == slow) {
            return true;
        }
        slow = slow.next;
    }
    return false;
}


makeList();
function makeList() {
    let n1 = new ListNode(3);
    let n2 = new ListNode(2);
    let n3 = new ListNode(0);
    let n4 = new ListNode(-4);

    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    n4.next = n2; // cycle 
    let list = new LinkedList(n1);

    // Check with 3 nodes
    let n5 = new ListNode("hello");
    let n6 = new ListNode("goodbye");
    let n7 = new ListNode("Bonjour");

    n5.next = n6;
    n6.next = n7;
    n7.next = n5;

    let oddList = new LinkedList(n5);

    console.log(hasCycleSet(list.head));
    console.log(hasCycleSlowFast(list.head));

    console.log(">> Test with odd number <<");
    console.log(hasCycleSet(oddList.head));
    console.log(hasCycleSlowFast(oddList.head));

    // Edge case 1 node
    console.log(">> Single node <<");
    let singleNodeList = new LinkedList(new ListNode("sueprior"));
    console.log(hasCycleSet(singleNodeList.head));
    console.log(hasCycleSlowFast(singleNodeList.head));

}