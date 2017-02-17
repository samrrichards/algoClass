/*

LINKED LIST

Comprised of nodes that represent a sequence.
Each node is composed of data and a reference/link to the next node.


*** Operations:

** Part 1

myList.forEach(callbackFn)
invoke callback function with the value of each node

myList.print()
=> string with all values in list (ex: '0, 1, 2, 3')

myList.insertAfter(refNode, value)
=> new node
insert new node associated with value passed in after refNode

myList.removeAfter(refNode)
=> removed node
remove node after the refNode

myList.insertHead(value)
=> new head
insert new head node at the beginning of the list with the value passed in

myList.removeHead()
=> removed head node
remove the head node of the linked list

myList.findNode(value)
=> first node that has a value matching what was passed in


* Optimization:
Say we have a linked list that has 100 items and we want to add an item to the very end. How would you do that with your current implementation? How can you modify the data structure to add an item to the end in constant time?

myList.appendToTail(value)
=> new tail node
add a new tail node at the end of the list with the associated value passed in

myList.removeTail()
=> removed tail node
remove the tail node from the list


** Part 2

Now let's think about creating insertBefore and removeBefore methods for the nodes in our list. Can you think of an efficient way to do so?

Think about time complexity. What would it be for your current implementation of a linked list?

How can we modify our data structures (Node and Linked List classes) so that we can make these O(1) operations?

Once you've come up with a plan, implement the following methods.

myList.insertBefore(refNode, value)
=> new node inserted
insert new node with associated value before refNode

myList.removeBefore(refNode)
=> removed node
remove node before the refNode passed in


*** Additional Exercises:

Implement a circularly linked list:
https://en.wikipedia.org/wiki/Linked_list#Circularly_linked_list

Reimplement stack and queue data structures using linked lists.


 */


// PART 1

class Node {
  constructor(value) {
    this.next = null
    this.value = value
  }
}

class LinkedList {
  constructor(headValue) {
    if (headValue === undefined) console.log('Must provide value for first node');
    this.head = new Node(headValue);
    this.tail = this.head
  }

  forEach = (callback) => {
    //Just like good old Eloquent JavaScript ch. 4...
    for (let node = this.head; node; node = node.next) {
      callback(node.value)
    }
  }
  // Time complexity: O(n)

  print = () => {
    // => string with all values in list (ex: '0, 1, 2, 3')
    let valueString = ''
    this.forEach(val => valueString += `${val}, `)
    return valueString
  }
  // Time complexity: O(n)

  findNode = (value) => {
    // => first node that has a value matching what was passed in
    let foundNode = null

    //I wanted to use forEach, but you can't access entire nodes with it...
    for (let node = this.head; node; node = node.next) {
      if (node.value === value && foundNode !== null)
        foundNode = node
    }

    return foundNode
  }
  // Time complexity: O(n)

  findBefore = (value) => {
    // Helper function like findNode, but for the node *before* that node
    let foundNode = this.head.value === value ? this.head : null

    if (foundNode !== null) {
      for (let node = this.head; node; node = node.next) {
        if (node.next.value === value && foundNode !== null)
          foundNode = node
      }
    }

    return foundNode
  }
  // Time complexity: O(n)

  insertHead = (value) => {
    // => new head
    // insert new head node at the beginning of the list with the value passed in
    const oldHead = this.head
    this.head = new Node(value)
    this.head.next = oldHead
    return this.head
  }
  // Time complexity: O(1)

  removeHead = () => {
    // => removed head node
    // remove the head node of the linked list
    const oldHead = this.head
    this.head = this.head.next
    return oldHead
  }
  // Time complexity: O(1)

  appendToTail = (value) => {
    // => new tail node
    // add a new tail node at the end of the list with the associated value passed in
    const newTail = new Node(value)
    this.tail.next = newTail
    this.tail = this.tail.next
    return this.tail
  }
  // Time complexity: O(1)

  removeTail = () => {
    const oldTail = this.tail
    const newTail = this.findBefore(this.tail.value)

    this.tail = newTail
    this.tail.next = null

    return oldTail
  }
  //Time complexity: O(n)

  insertAfter = (node, value) => {
    // This assumes that values are unique

    let afterNode = this.findNode(node.value)

    if (this.tail.value === afterNode.value) {
      this.appendToTail(value)
    } else {
      let nextNode = afterNode.next
      const newNode = new Node(value)

      newNode.next = nextNode
      afterNode.next =  newNode
      return newNode
    }
  }
  // Time complexity: O(n)

  removeAfter = (node) => {
    // This assumes that values are unique
    let afterNode = this.findNode(node.value)

    if (afterNode.value === this.tail.value) {
      return null
    } else {
      const nextNode = afterNode.next

      afterNode.next = nextNode.next
      return nextNode
    }
  }
  // Time complexity: O(n), assuming you remove s

  insertBefore = (node, value) => {
    // This assumes that values are unique
    let beforeNode = this.findBefore(node.value)

    if (beforeNode.value === this.head.value) {
      this.insertHead(value)
    } else {
      let nextNode = beforeNode.next
      const newNode = new Node(value)

      newNode.next = nextNode
      beforeNode.next =  newNode
      return newNode
    }
  }
  // Time complexity: O(n)

  removeBefore = (node) => {
    // This assumes that values are unique
    let beforeNode = this.findBefore(node.value)

    if (beforeNode.value === this.head.value) {
      this.removeHead()
    } else {
      const nextNode = beforeNode.next

      beforeNode.next = nextNode.next
      return nextNode
    }
  }
  // Time complexity: O(n)
}
//  The beginning of a testing suite: 
//
// const sampleValues = ['friendship', 'honesty', 'respect', 'inclusiveness', 'fun']
//
// let myList = new List('awesomness')
//
// sampleValues.forEach(item => myList.appendToTail(item))
//
// myList.removeHead()
// myList.removeTail()
// myList.appendToTail('laughter')

/*
*** Exercises:

1. Implement a stack using a linked list.

2. Implement a queue using a linked list.

3. Write a method that remove duplicates from an unsorted linked list. What is the time complexity? Re-implement the method without using any additional storage structure (constant space complexity). What is the time complexity?

4. Reverse a linked list. Do not use any additional storage structures.

5. Find the kth to last element of a singly linked list.

6. Detect if a linked list has a loop.

7. Check if a linked list is a palindrome.

8. Given two linked lists that represent numbers, return a linked list that represents the sum of those numbers:
  4 2 5        (4 -> 2 -> 5)
+ 7 3 1        (7 -> 3 -> 1)
--------
1 1 5 6   (1 -> 1 -> 5 -> 6)

 */
