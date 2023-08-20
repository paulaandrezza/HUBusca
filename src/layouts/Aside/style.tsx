import styled from 'styled-components';

export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    grid-area: aside;
  }
`;

export const RightAlign = styled.div`
  display: flex;
  justify-content: end;
`;
