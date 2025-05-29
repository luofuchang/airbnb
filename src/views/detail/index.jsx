import Indicator from "@/base-ui/Indicator";
import React, { memo } from "react";
import { DetailWrapper } from "./style";
import { useState } from "react";
import classNames from "classnames";

const names = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const Detail = memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prev) => {
      const newIndex = prev - 1;
      return newIndex < 0 ? names.length - 1 : newIndex;
    });
  };

  const handleNextClick = () => {
    setActiveIndex((prev) => {
      const newIndex = prev + 1;
      return newIndex > names.length - 1 ? 0 : newIndex;
    });
  };

  return (
    <DetailWrapper>
      <div className="control">
        <button onClick={handlePrevClick}>prev</button>
        <button onClick={handleNextClick}>next</button>
      </div>
      <div className="list">
        <Indicator activeIndex={activeIndex} activeColor="red">
          {names.map((item) => {
            return <button key={item}>{item}</button>;
          })}
        </Indicator>
      </div>
    </DetailWrapper>
  );
});

export default Detail;
