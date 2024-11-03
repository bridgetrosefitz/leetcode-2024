// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


// inputs: two linked lists (non empty)
// output: linked list - sum of two linked lists (new linked list)

// 3480 0-8-4-3
// 12.  2-1
// > 3492 2-9-4-3

// 19 >> 9-1
          |
// 4. >> 4
        |
// 23

// 88 >> 8-8
           |
// 34 >> 4-3
           |

2-1-

// carryOver = true
// remainder = 0 
// pointer1 = list1
// pointer2 = list2
// res = new Node()
// pointerRes = res // TO DO: check that we're using the correct head

// while pointer1 and pointer2 exist
   // let sum
      // val at pointer1 + val at pointer2
  // if carryOver is true
    // add 1 to sum

  // if sum is greater than 10
    // set remainder to be sum % 10
    // set carryOver to true
  // else
    // set carryOver to false

  // create new node with remainder value
  // point res to this node
  // increment pointer1
  // increment pointer2
  // increment pointerRes

  // while pointer1
    // add carryover to node val at pointer1
    // create node etc TO DO (increment, etc)

  // while pointer2
    // add carryover to node val at pointer1
    // create node etc TO DO (increment, etc)

  // 



// return res.next