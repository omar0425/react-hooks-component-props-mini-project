import React from "react";
import Article from "./Article";
const ArtileList = ({ posts }) => {
  const articleArray = posts.map((post) => {
    return (
      <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
      />
    );
  });
  return <main>{articleArray}</main>;
};

export default ArtileList;
