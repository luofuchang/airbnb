import styled from "styled-components";

export const TabsWrapper = styled.div`
  display: flex;
  .item {
    box-sizing: border-box;
    flex-basis: 120px;
    flex-shrink: 0;
    padding: 14px 16px;
    margin-right: 16px;
    border-radius: 10px;
    border: 0.5px solid #d8d8d8;
    text-align: center;
    font-size: 17px;
    white-space: nowrap;
    cursor: pointer;
    ${(props) => props.theme.mixins.boxShadow}

    &.last-child {
      margin-right: 0;
    }

    &.active {
      color: #fff;
      background-color: ${(props) => props.theme.color.secondary};
    }
  }
`;
