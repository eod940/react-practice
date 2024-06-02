import React from "react";

const style = {
  wrapper: {
    margin: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid grey',
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  nameText: {
    color: 'black',
    fontsize: 16,
    fontWeight: 'bold',
  },
  commentText: {
    color: 'black',
    fontsize: 16,
  },
};

function Comment(props) {
  return (
    <div style={style.wrapper}>
      <div style={style.imageContainer}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
             alt="comment"
             style={style.image}
        />
      </div>

      <div style={style.contentContainer}>
        <span style={style.nameText}>{props.name}</span>
        <span style={style.commentText}>{props.comment}</span>
      </div>
    </div>
  );
}

export default Comment;