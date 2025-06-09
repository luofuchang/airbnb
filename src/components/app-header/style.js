import styled from "styled-components";

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #eee;
  background: #fff;

  &.fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;
  }

  .content {
    display: flex;
    align-items: center;
    height: 80px;
  }
  .search-area {
    height: 100px;
  }
`;
