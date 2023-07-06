/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * SLL(Singly Linked List) 
 * keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */
class SLL {
    constructor() {
        this.head = null;
    }


    // -----------W1D4 -------------

    insertAtBack(data) {
        // Create a new node with the given value 
        const node = new ListNode(data);
        if (this.head) {
            console.log("Head: " + this.head.data)
        } else {
        }

        let runner = this.head;
        while (runner.next !== null) {
            //create a runner, that's gonna go thru your list
            runner = runner.next
            //when the runner reaches null, we set the runner to our node
        }

    }
    /**
   * Creates a new node with the given data and inserts that node at the front
   * of the list.
   * @param {any} data The data for the new node.
   * @returns {SinglyLinkedList} This list.
   */
    isEmpty() {
        if (this.head) {
            return true;
        }
        else {
            return false;
        }
    }

    insertAtFront(data) {
        const node1 = new ListNode(data);
        node1.next = this.head;
        this.head = node1;

        // instantiate the ListNode with data
        // pointer of the newNode to the original head
        // reassign the head

        // edge case: how do we handle an empty list

    }


    /**
   * Removes the first node of this list.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The data from the removed node.
   */
    removeHead() {
        // reassign the head
        var removed = this.head;
        this.head = removed.next;
        removed.next = null;
        return removed;
    }

    /**
   * Removes the last node of this list.
   * @returns {any} The data from the node that was removed.
   */
    removeBack() {

    }

    //given
    printList() {
        if (!this.head) {
            console.log("Empty list");
            return
        }
        var runner = this.head;
        while (runner) { // while(runner != null)
            console.log(runner.data);
            runner = runner.next;
        }
    }
}



var emptyList = new SLL(); // EMPTY LIST
emptyList.printList();


var list1 = new SLL();
list1.insertAtBack(5);
list1.insertAtBack(6);
list1.insertAtBack(7);

// HEAD
// (5) -> (6) -> (7) -> NULL

list1.printList();





