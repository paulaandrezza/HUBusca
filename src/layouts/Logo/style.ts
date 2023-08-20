import { theme } from '@/app/theme/theme';
import styled from 'styled-components';

export const RightAlign = styled.div`
  grid-area: logo;
  display: flex;
  justify-content: end;
  align-items: center;
`;

interface MenuIconProps {
  isOpen?: boolean;
}

export const MenuIcon = styled.div<MenuIconProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  cursor: pointer;
  position: relative;

  @media screen and (min-width: 768px) {
    display: none;
  }

  & > span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: ${theme.colors['text-button']};
    border-radius: 3px;
    transition: all 0.3s ease-in-out;

    ${(props) =>
      props.isOpen &&
      `
      &:nth-child(1) {
        transform: translateY(7.5px) rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: translateY(-7.5px) rotate(-45deg);
      }

    `}
  }
`;
