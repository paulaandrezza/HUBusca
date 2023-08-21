import { theme } from '@/app/theme/theme';
import styled from 'styled-components';

export const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const DeleteButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  cursor: pointer;
  position: relative;

  & > span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: ${theme.colors['text-button']};
    border-radius: 3px;
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      transform: translateY(7.5px) rotate(45deg);
    }

    &:nth-child(2) {
      transform: translateY(-7.5px) rotate(-45deg);
    }
  }
`;
