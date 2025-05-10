import React, { memo, useEffect, useState } from "react";
import CustomRequest from "@/services";

const Home = memo(() => {
  useEffect(() => {
    CustomRequest.get({ url: "/home/highscore" }).then((res) => {
      console.log(res);
      setHighScore(res);
    });
  }, []);

  const [highScore, setHighScore] = useState({});

  return (
    <div>
      <h2>{highScore.title}</h2>
      <h4>{highScore.subtitle}</h4>
      <ul>
        {highScore.list?.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
});

export default Home;
