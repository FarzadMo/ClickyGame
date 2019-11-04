import React from "react";

const styles = {
  img: {
    width: "200px",
    height: "200px",
    margin: "10px"
  }
};

function Image(props) {
  return (
    <img
      style={styles.img}
      alt="all-characters"
      src={props.src}
      onClick={() => props.handleClickImage(props.id)}
    />
  );
}

export default Image;
