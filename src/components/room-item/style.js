import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  box-sizing: border-box;
  padding: 8px;
  margin: 8px 0;
  width: ${(props) => props.$itemwidth};

  height: 100%;
  display: flex;
  flex-direction: column;

  .inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.6% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    flex-shrink: 0; /* 防止封面图被压缩 */

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      object-fit: cover; /* 确保图片填充容器 */
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.$verify_color};
  }

  .name {
    font-size: 16px;
    font-weight: 700;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    min-height: 38px; /* 设置最小高度确保两行文本空间 */
    // margin: 4px 0;
  }
  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${(props) => props.theme.text.primaryColor};

    margin-top: auto; /* 将底部元素推到容器底部 */

    .count {
      margin: 0 4px 0 4px;
    }

    .extra {
      color: ${(props) => props.$content_color};
      font-size: ${(props) => props.$content_fontsize};
    }

    .MuiRating-decimal {
      margin-left: -2px;
    }
  }
`;
