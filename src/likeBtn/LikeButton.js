import React, { useState } from "react";
import "./likebtn.css";

const LikeButtonComponent = () => {
  const [like, setLike] = useState([]),
    [isLike, setIsLike] = useState(false),
    onLikeButtonClick = () => {
      setLike(like);
      setIsLike(!isLike);
    };

  return (
    <>
      <button
        className={"like-button " + (isLike ? "liked" : "")}
        onClick={onLikeButtonClick}
      >
        {"<3"}  {like}
      </button>
    
    </>
  );
};

export default function App() {
  return <LikeButtonComponent />;
}
