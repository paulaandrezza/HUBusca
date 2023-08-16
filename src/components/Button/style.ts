import { theme } from '@/app/theme/theme';
import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background: ${theme.colors['button-color']};
  padding: 0.625rem 0.75rem;
  gap: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  border: none;
  color: ${theme.colors['text-button']};
  font-weight: ${theme.fontWeights.subtitle};

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${theme.colors['button-hover']};
  }

  &:active {
    background-color: ${theme.colors['button-active']};
  }
`;
