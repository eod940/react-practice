import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name: "이대영",
    comment: "안녕하세요. 실습중입니다.",
  },
  {
    name: "김용찬",
    comment: "우와",
  },
  {
    name: "노효빈",
    comment: "리액트 ㄹㅇ 꿀잼",
  },
];

function CommentList() {
  return (
    <div>
      {comments.map((item) => {
        return (
          <Comment name={item.name} comment={item.comment}/>
        )
      })}
    </div>
  );
}

export default CommentList;