import styled from 'styled-components';

interface AsideContainerProps {
  isOpen?: boolean;
}

export const AsideContainer = styled.aside<AsideContainerProps>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;

  ${(props) =>
    props.isOpen &&
    `
    background: linear-gradient(
    90deg,
    rgba(215, 230, 255, 1) 0%,
    rgba(243, 219, 246, 1) 50%,
    rgba(240, 220, 247, 1) 55%,
    rgba(217, 227, 255, 1) 100%
  );
  position: absolute;
  padding: 16px;
  top: 80px;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 30;
    `}

  @media screen and (min-width: 768px) {
    grid-area: aside;
    display: flex;
  }
`;

export const RightAlign = styled.div`
  display: flex;
  justify-content: end;
`;
