import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/post.actions";
import { isEmpty } from "../components/Utils";
import Card from "./Post/Card";

const Tread = () => {
  const [loadPost, setLoadPost] = useState(true);
  const [count, setCount] = useState(5);
  const dispatch = useDispatch();
  // récupérer les posts dans le store
  const posts = useSelector((state) => state.postReducer);

  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.scrollingElement.scrollHeight
    ) {
      setLoadPost(true);
    }
  };

  useEffect(() => {
    if (loadPost) {
      // remplir le store avec count posts
      dispatch(getPosts(count));
      // ne plus charger les posts
      setLoadPost(false);
      setCount(count + 5);
    }
    // si scroll arrive en bas de la fenêtre
    window.addEventListener("scroll", loadMore);
    return () => window.removeEventListener("scroll", loadMore);
  }, [loadPost, dispatch, count]);

  return (
    <div className="thread-container">
      <ul>
        {!isEmpty(posts[0]) &&
          posts.map((post) => {
            return <Card key={post._id} post={post} />;
          })}
      </ul>
    </div>
  );
};

export default Tread;
