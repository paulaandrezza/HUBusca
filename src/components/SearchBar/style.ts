import { theme } from '@/app/theme/theme';
import styled from 'styled-components';

export const InputContainer = styled.div`
  background-color: ${theme.colors['bg-primary']};
  color: ${theme.colors['text-button']};
  padding: 8px 16px;
  font-weight: 500;
  border-radius: ${theme.borderRadius.button};
  border: none;
  white-space: nowrap;
  font-size: ${theme.fontSizes.normal};
  cursor: pointer;
  flex: 1;

  display: flex;
  gap: 8px;
  align-items: center;

  &:hover,
  &:focus {
    outline: 1px solid ${theme.colors['text-button']};
    color: ${theme.colors['text-button']};
  }

  &:active {
    background-color: ${theme.colors['button-active']};
  }

  input {
    background: transparent;
    border: none;
    color: ${theme.colors['text-button']};

    &:hover,
    &:focus {
      outline: none;
    }
  }
`;
