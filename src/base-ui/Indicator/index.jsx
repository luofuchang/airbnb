import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { IndicatorWrapper } from "./style";
import { useRef } from "react";
import { Children } from "react";
import { isValidElement } from "react";

const Indicator = memo((props) => {
  const { activeIndex = 0, activeColor } = props;

  const contentRef = useRef();

  useEffect(() => {
    // 获取activeIndex的元素，并设置其位置
    const activeItemEl = contentRef.current.children[activeIndex];
    // 获取activeIndex距离左侧的距离
    const activeItemLeft = activeItemEl.offsetLeft;
    // 获取activeIndex的宽度
    const activeItemWidth = activeItemEl.clientWidth;
    //  获取content的宽度
    const contentWidth = contentRef.current.clientWidth;
    // 获取可滚动的宽度
    const contentScrollWidth = contentRef.current.scrollWidth;

    //  计算滚动的距离
    let distance = activeItemLeft + activeItemWidth * 0.5 - contentWidth * 0.5;

    if (contentScrollWidth <= contentWidth) {
      distance = 0;
    } else {
      // 最大滚动距离
      const maxDistance = contentScrollWidth - contentWidth;
      //解决左边第一个元素不靠左
      if (distance < 0) distance = 0;
      // 解决右边最后一个元素不靠右
      if (distance > maxDistance) distance = maxDistance;
    }

    contentRef.current.style.transform = `translate(${-distance}px)`;
  }, [activeIndex]);

  return (
    <IndicatorWrapper $activeColor={activeColor || "#fff"}>
      <div className="i-content" ref={contentRef}>
        {props.children}
        {/* {Children.map(props.children, (child, index) => {
          if (isValidElement(child)) {
            // 保存已有的class
            const existedClassNames = child.props.className;
            // 为活动项添加 'active' 类
            const activeClassName = index === activeIndex ? "active" : "";
            // 合并已有的类名和 'active' 类（如果适用）
            // 使用 trim() 来移除可能因 existingClassName 或 activeClassName 为空而产生的多余空格
            const newClassName =
              `${existedClassNames} ${activeClassName}`.trim();
            return React.cloneElement(child, {
              className: newClassName || undefined,
            });
          }
          return child;
        })} */}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  activeIndex: PropTypes.number,
  activeColor: PropTypes.string,
};

export default Indicator;
