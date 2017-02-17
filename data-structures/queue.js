/*

QUEUE

Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.


*** Operations:

myQueue.enqueue(value)
=> count of queue
add value to collection

myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection

myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection

myQueue.count()
=> number of elements in queue


 */

 class Queue {
   constructor(capacity) {
     this.capacity = capacity
     this.values = {}
     this.size = 0
   }

   enqueue(value) {
     if (this.size < this.capacity) {
       this.values[this.size] = value
       this.size++
       console.log(`Added ${value} at index ${this.size-1}!`)
     } else {
       console.log(`Sorry, I already have ${this.capacity} elements!`)
     }

     return this.size
   }
   //Time complexity: O(1)

   dequeue(value) {
     const val = this.values[0]
     let newVals = {}

     for (let i = 1; i < this.size-1; i++) {
       newVals[i-1] = this.values[i]
     }

     this.values = newVals
     this.size--

     console.log(`Just removed ${val} from the queue!`)
     return val
   }
   //Time complexity: O(n)

   peek() {
     console.log(`The value at the top of the queue is ${this.values[0]}!`)
     return this.values[0]
   }
   //Time complexity: O(1)

   count() {
     console.log(`There are ${this.size} elements in the queue!`)
     return this.size
   }
   //Time complexity: O(1)
 }

 let myQueue = new Queue(3)

 myQueue.enqueue("Athos")
 myQueue.enqueue("Porthos")
 myQueue.enqueue("Aramis")
 myQueue.enqueue("D'Artagnan")
 myQueue.dequeue()
 myQueue.count()
 myQueue.enqueue("D'Artagnan")
 myQueue.peek()

/*
*** Exercises:

1. Implement a queue using two stacks.

2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.

3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.


*** Additional Exercises:

Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?

 */
