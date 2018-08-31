import React from 'react';
import Comment from './Comment';
// this component contains all comments in a given post

const CommentSection = props => {
  return (
    <div className="commentSection">
    {props.commentData.map((comment, index) => (
      <Comment />

    )}
  )
)}

export default CommentSection;