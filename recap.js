class Graph {
  constructor() {
    this.adjacentList = {};
  }

  addVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = new Set();
    }
  }

  addEdges(vertex1, vertex2) {
    if (!this.adjacentList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacentList[vertex2]) {
      this.addVertex(vertex2);
    }

    this.adjacentList[vertex1].add(vertex2);
    this.adjacentList[vertex2].add(vertex1);
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacentList[vertex1].has(vertex2) &&
      this.adjacentList[vertex2].has(vertex1)
    );
  }

  display() {
    for (let vertex in this.adjacentList) {
      console.log(vertex, " -> ", [...this.adjacentList[vertex]]);
    }
  }
  removeEdge(vertex1, vertex2) {
    this.adjacentList[vertex1].delete(vertex2);
    this.adjacentList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacentList[vertex]) return;

    for (let adjacentVertex of this.adjacentList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacentList[vertex];
  }
}

class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  size() {
    return this.rear - this.front;
  }

  enqueue(element) {
    this.items[this.rear++] = element;
  }

  dequeue() {
    let item = this.items[this.front];
    delete this.items[this.front++];
    return item;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return !this.root;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (!root.left) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (!root.right) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) return false;
    if (root.value === value) {
      return true;
    } else if (root.value < value) {
      return this.search(root.right, value);
    } else {
      return this.search(root.left, value);
    }
  }
  // BFS
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder(root) {
    if (root) {
      const queue = new Queue();
      queue.enqueue(root);

      while (queue.size()) {
        const node = queue.dequeue();

        console.log(node.value);
        if (node.left) {
          queue.enqueue(node.left);
        }

        if (node.right) {
          queue.enqueue(node.right);
        }
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }
}

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameIndexkey = bucket.find((item) => item[0] === key);
      if (sameIndexkey) {
        sameIndexkey[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      const sameIndexkey = bucket.find((item) => item[0] === key);
      if (sameIndexkey) {
        return sameIndexkey[1];
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      const sameIndexkey = bucket.find((item) => item[0] === key);
      if (sameIndexkey) {
        bucket.splice(bucket.indexOf(sameIndexkey), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.size; i++) {
      console.log(`${i} -> `, this.table[i]);
    }
  }
}

class LinkedNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  prepend(value) {
    const node = new LinkedNode(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new LinkedNode(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  search(value) {
    if (!this.isEmpty()) {
      let curr = this.head;
      let idx = 0;
      while (curr.next) {
        if (curr.value === value) {
          return idx;
        }
        idx++;
        curr = curr.next;
      }

      return -1;
    }
  }

  insert(idx, value) {
    if (idx < 0 || idx > this.size) {
      throw new Error(`TypeError : Invalid index ${idx}`);
    }
    if (idx === 0) {
      this.prepend(value);
    } else {
      const node = new LinkedNode(value);
      let curr = this.head;
      for (let i = 0; i < idx - 1; i++) {
        curr = curr.next;
      }
      node.next = curr.next;
      curr.next = node;
      this.size++;
    }
  }

  remove(idx) {
    if (idx < 0 || idx > this.size) {
      return;
    }
    let removedNode;
    if (idx === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let curr = this.head;
      for (let i = 0; i < idx - 1; i++) {
        curr = curr.next;
      }
      removedNode = curr.next;
      curr.next = removedNode.next;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    let str = "";
    let curr = this.head;
    while (curr) {
      str += `${curr.value}, `;
      curr = curr.next;
    }
    console.log(str);
  }
}

class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  push(element) {
    return this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items);
  }
}

// Circular queue
class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.size = 0;
    this.front = -1;
    this.rear = -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.capacity === this.size;
  }

  enqueue(element) {
    if (this.isFull()) return `Queue is full.`;
    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = element;
    if (this.front === -1) {
      this.front = this.rear;
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) return;
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
  }

  print() {
    // O(N) => Printing the entire queue involves iterating through the elements in the queue where N is the number of elements in the queue at that moment.
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }

      str += this.items[i];
      console.log(str);
    }
  }
}

class LinkedListWithTail {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new LinkedNode(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new LinkedNode(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  #reset() {
    this.head = null;
    this.tail = null;
  }

  removeFromFront() {
    if (this.isEmpty()) return;

    const value = this.head.value;
    if (this.size === 1) {
      this.#reset();
    } else {
      this.head = this.head.next;
    }
    this.size--;
    return value;
  }

  removeFromTail() {
    if (this.isEmpty()) return;
    const value = this.tail.value;
    if (this.size === 1) {
      this.#reset();
    } else {
      let curr = this.head;
      while (curr.next !== this.tail) {
        curr = curr.next;
      }
      curr.next = this.tail.next;
      this.tail = curr;
    }
    this.size--;
    return value;
  }

  print() {
    if (this.isEmpty()) {
      console.log(`List is empty`);
    } else {
      let str = " ";
      let curr = this.head;
      while (curr) {
        str += `${curr.value}, `;
        curr = curr.next;
      }

      console.log(str);
    }
  }
}

class LinkedQueue {
  constructor() {
    this.items = new LinkedListWithTail();
  }

  size() {
    return this.items.getSize();
  }

  enqueue(element) {
    this.items.prepend(element);
  }

  dequeue() {
    return this.items.removeFromTail();
  }

  print() {
    this.items.print();
  }
}

// Searching algorithm
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// function binarySearch(arr, target){
//   let start = 0;
//   let end = arr.length - 1;
//   while(start <= end){
//     let mid = Math.floor((start + end) / 2);
//     if(arr[mid] === target){
//       return mid;
//     }else if (arr[mid] < target){
//       start = mid + 1;
//     }else{
//       end = mid - 1;
//     }
//   }

//   return -1;
// }

function recursiveBinarySearch(arr, target) {
  return binarySearch(arr, target, 0, arr.length - 1);
}

function binarySearch(arr, target, start, end) {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, end);
  } else {
    return binarySearch(arr, target, start, mid - 1);
  }
}

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let numToSort = arr[i];

    while (j >= 0 && arr[j] > numToSort) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numToSort;
  }
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let sortedArr = [];
  while(leftArr.length && rightArr.length){
    if(leftArr[0] < rightArr[0]){
      sortedArr.push(leftArr.shift())
    }else{
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}
let arr = [54, 12, 98, 57, 29];
const result = mergeSort(arr);
console.log(result);