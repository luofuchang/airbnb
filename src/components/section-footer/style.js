import styled from "styled-components";

export const FooterWrapper = styled.div`
  .info {
    display: inline-flex;
    align-items: center;
    margin: 10px 0 10px;
    color: ${(props) => props.$color};
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;

    .message {
      margin-right: 1px;
    }

    &:hover {
      .message {
        text-decoration: underline;
      }
    }
  }
`;
