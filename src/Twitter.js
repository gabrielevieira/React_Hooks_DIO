import React, { useEffect, useState, memo } from "react";

//valida a atualização constate
const areEqual = (prevProps, nextProps) => {
  return prevProps.loading == nextProps.loading;
};

function Twitter(props) {
  const { loading } = props;
  const { tweet, seTweet } = useState("title");

  //componentDidMount ; equivale este componente quando passa o array sozinho
  useEffect(() => {
    const { posts, loading } = props;
    console.log("componentDidMount", posts);
    console.log("componentDidUpdate:loading", loading);
  }, []);

  //componentDidUpdate
  useEffect(() => {
    console.log("componentDidUpdate", loading);
  }, [loading]);

  //componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("componentWillUnmount: fui removido: ");
    };
  }, []);

  const handleTweet = () => {
    seTweet("Tweet atualizado");
  };

  console.log("Tweet atualizado:", tweet);
  return (
    <div>
      <button onClick={handleTweet}>Re-render</button>
      teste
    </div>
  );
}

export default memo(Twitter, areEqual);
