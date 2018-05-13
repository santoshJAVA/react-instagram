// increment

export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

//add comment

export function add_comment(postId, author, comment) {
  console.log('dispatching action to reducer');
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

//remove comment

export function remove_comment(postId, index) {
  console.log("removing comments");
  return {
    type: 'REMOVE_COMMENT',
    postId,
    index
  }
}