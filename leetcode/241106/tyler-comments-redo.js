class Comment {
  constructor(commentId, parentId) {
    this.id = commentId;
    this.parentId = parentId;
    this.children = [];
  }
}

const comments = [
  new Comment(1, null),
  new Comment(2, null),
  new Comment(3, null),
  new Comment(4, 1),
  new Comment(5, 1),
  new Comment(6, 5),
  new Comment(7, 6),
  new Comment(8, 4),
];

/*

  1        2           3
  4   5
  8    6
    7

{

}
*/

function generateCommentTree(comments) {
  // for each comment
  // create a key in an object for id, with node stored as value
  const commentsObj = {};

  comments.forEach(comment => {
    commentsObj[comment.id] = comment;
  });

  const roots = [];
  // for each comment
  // if parent is null, push into roots
  // else grab parent and push curr comment into children array of parent

  comments.forEach(comment => {
    if (comment.parentId === null) {
      roots.push(comment);
    } else {
      const parent = commentsObj[comment.parentId];
      parent.children.push(comment);
    }
  });
  // return array of root comments

  return roots;
}
