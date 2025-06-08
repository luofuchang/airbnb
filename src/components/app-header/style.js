import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #eee;
  background: #fff;

  &.fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;
  }
`;
