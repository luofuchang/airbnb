import PropTypes from "prop-types";
import React, { memo, useEffect, useState, useRef } from "react";
import { ScrollWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const ScrollView = memo((props) => {
  const [show, setShow] = useState(false);
  const [showLeft, setShowLeft] = useState(false); // 是否显示左箭头
  /** 滚动区域的值 */
  const scrollRef = useRef();
  const totalDistanceRef = useRef(0);
  /** 记录正在显示的是哪一个 */
  const posIndexRef = useRef(0);

  useEffect(() => {
    // console.log(props.children);
    const scrollWidth = scrollRef.current.scrollWidth; // 全部滚动内容的宽度
    const clientWidth = scrollRef.current.clientWidth; // 可视宽度

    totalDistanceRef.current = scrollWidth - clientWidth; // 不可见宽度
    setShow(totalDistanceRef.current > 0);
  }, [props.children]);

  const controlClick = (index) => {
    const scrollLeft = scrollRef.current.children[index].offsetLeft;
    scrollRef.current.style.transform = `translate(-${scrollLeft}px)`;
    posIndexRef.current = index;
    if (scrollLeft > totalDistanceRef.current) {
      setShow(false);
    }
    setShow(totalDistanceRef.current > scrollLeft);
    setShowLeft(scrollLeft > 0);
  };

  const leftClick = () => {
    controlClick(posIndexRef.current - 1);
  };

  const rightClick = () => {
    controlClick(posIndexRef.current + 1);
  };

  return (
    <ScrollWrapper>
      {showLeft && (
        <div className="control left" onClick={leftClick}>
          <IconArrowLeft />
        </div>
      )}
      {show && (
        <div className="control right" onClick={rightClick}>
          <IconArrowRight />
        </div>
      )}
      <div className="content">
        <div className="scroll" ref={scrollRef}>
          {props.children}
        </div>
      </div>
    </ScrollWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
