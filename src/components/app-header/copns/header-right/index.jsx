import React, { memo, useEffect, useState, useRef } from "react";
import { RightWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon-global";
import IconMenu from "@/assets/svg/icon-profile-menu";
import IconProfileAvatar from "@/assets/svg/icon-profile-avatar";

const HeaderRight = memo(() => {
  const [show, setShow] = useState(false);
  const panelRef = useRef(null);
  const profileRef = useRef(null);

  //处理外部点击关闭
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        !profileRef.current.contains(e.target)
      ) {
        setShow(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // 处理 profile 区域的悬停
  useEffect(() => {
    const profileElement = profileRef.current;
    if (!profileElement) return;

    const handleMouseEnter = () => setShow(true);
    const handleMouseLeave = () => {
      setShow(false);
    };

    profileElement.addEventListener("mouseenter", handleMouseEnter);
    // profileElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      profileElement.removeEventListener("mouseenter", handleMouseEnter);
      // profileElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>
      <div
        className="profile"
        ref={profileRef}
        onClick={(e) => {
          e.stopPropagation();
          setShow(!show);
        }}
      >
        <IconMenu />
        <IconProfileAvatar />
        {show && (
          <div className="panel" ref={panelRef}>
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item resource">出租房源</div>
              <div className="item experience">开展体验</div>
              <div className="item activity">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
