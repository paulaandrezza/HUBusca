import { theme } from '@/app/theme/theme';
import styled from 'styled-components';

export const SelectStyled = styled.select`
  background-color: ${theme.colors['bg-primary']};
  color: ${theme.colors['text-button']};
  padding: 0 16px;
  font-weight: 500;
  border-radius: ${theme.borderRadius.button};
  border: none;
  white-space: nowrap;
  height: 32px;

  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    border: 1px solid ${theme.colors['text-button']};
    color: ${theme.colors['text-button']};
  }

  &:active {
    background-color: ${theme.colors['button-active']};
  }
`;
