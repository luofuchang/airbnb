import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden; // 保持内容溢出隐藏
  .i-content {
    position: relative;
    display: flex;
    transition: transform 0.3s ease-out;

    /* 针对 .i-content 的直接子元素 (props.children) */
    > .dot-item {
      flex-shrink: 0; /* 防止项目在空间不足时被压缩 */
    }
  }
`;
