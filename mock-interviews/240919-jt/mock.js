
// tree A
//       1 
//      /  \ 
//     2   3 
//    /  \ 
//   4   5 

// tree B
//       1 
//      /  \ 
//     2   3 
//    /       \ 
//   4       5 

// tree D
//       1 
//      /  \ 
//     2   3 
//    /  \ 
//   4   5 
//  /   / 
// 6   7

// EDGE CASES
// empty tree (root = null)

function serialize(root) {
	const q = [root] // [5, null, null]
	const serialized = [] // [1, 2, 3, 4, null, null, 5

	while(q.length){
		const curr = q.unshift()  // 5

		serialized.push(curr)
		if(curr) {
q.push(curr.left)
			q.push(curr.right)
		}
}

return serialized
}


// q = [2,3,null]
// const serialized = [1,2,3,4,]

// while q not empty

	// dequeue item	
// push into serialized
	// push left and right child into queue (including null nodes)

// return serialized




If we were just doing a traversal, decide where we’re processing
	

	



// tree B
//       1 
//      /  \ 
//     2   3 
//    /       \ 
//   4       5 

// tree C
//       1 
//      /  
//     2   
//    /  \ 
//   4  5 

function TreeNode(val) { 
this.val = val; 
this.left = null;
this.right = null;
 }

const root = new TreeNode(1); 
root.left = new TreeNode(2); 
root.right = new TreeNode(3); 
root.right.left = new TreeNode(4); 
root.right.right = new TreeNode(5); 

// Serialize the tree 
const serializedData = serialize(root); 
console.log('Serialized:', serializedData);
>> tokenize the structure into some sort of DS (array, or other)
>> assume this is a binary tree

// [1,2,3,4,5,null,null]
// [1,2,3,4,null,null,5]
// [1,2,null,4,5]


// tree A
//       1 
//      /  \ 
//     2   3 
//    /  \ 
//   4   5 

[1]

Data = [1,2,3,4,5,null,null]
                         ^
Q = [2,3]

// dequeue one at a time
// how do we know what each node’s children are

1
/ \ 
2 3

// dequeue curr
// increment pointer on data by three

// create a node for each
// children = [left,right]

// curr.left =  children[0]
// curr.right = [children][1]

=======

Data = [1,2,3,4,5,null,null, null,null,null,null]
// child pointer, starts at index 1
// q

// while q not empty
	// dequeue curr
	// create node for curr

	// create left child node for val at childPointer
	// attach left child to curr node
	// enqueue val at childPointer
	// increment childPointer
	
// create right child node for val at childPointer
	// attach right child to curr node
	// enqueue val at childPointer
	// increment childPointer




	


