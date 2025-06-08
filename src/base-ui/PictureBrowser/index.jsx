import PropTypes from "prop-types";
import React, { memo, useEffect, useState, useRef } from "react";
import { PictureBrowserWrapper } from "./style";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import IconClose from "@/assets/svg/icon-close";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconTriangleBottom from "@/assets/svg/icon-triangle-bottom";
import Indicator from "../Indicator";
import classNames from "classnames";
import IconTriangleTop from "@/assets/svg/icon-triangle-top";

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(false);
  const [showList, setShowList] = useState(true);

  const picRef = useRef(null);

  // 隐藏滚动条
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handlePrevClick = () => {
    setIsNext(false);
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return pictureUrls.length - 1;
      }
      return prevIndex - 1;
    });
  };

  const handleNextClick = () => {
    setIsNext(true);
    setCurrentIndex((prevIndex) => {
      if (prevIndex === pictureUrls.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const handleSwitchPic = (index) => {
    if (index === currentIndex) return;
    setIsNext(index > currentIndex);
    setCurrentIndex(index);
  };

  return (
    <PictureBrowserWrapper $isnext={isNext} $showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={closeClick}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={handlePrevClick}>
            <IconArrowLeft width={77} height={77} />
          </div>
          <div className="btn right" onClick={handleNextClick}>
            <IconArrowRight width={77} height={77} />
          </div>
        </div>
        <div className="container">
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={200}
              nodeRef={picRef}
            >
              <img ref={picRef} src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{pictureUrls.length}:
              </span>
              <span>Room Apartment图片</span>
            </div>
            <div className="toggle" onClick={(e) => setShowList(!showList)}>
              <span>{showList ? "隐藏" : "展示"}照片列表</span>
              {showList ? <IconTriangleBottom /> : <IconTriangleTop />}
            </div>
          </div>
          <div className="pic-list">
            <Indicator activeIndex={currentIndex}>
              {pictureUrls?.map((item, index) => {
                return (
                  <div
                    className={classNames("pic-item", {
                      active: currentIndex === index,
                    })}
                    key={item}
                    onClick={(e) => handleSwitchPic(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </PictureBrowserWrapper>
  );
});

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
};

export default PictureBrowser;
