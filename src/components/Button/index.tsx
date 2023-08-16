import { FaGithub } from 'react-icons/fa';
import { ButtonStyled } from './style';

export const Button = ({ children }: { children: string }) => {
  return (
    <ButtonStyled>
      <FaGithub />
      {children}
    </ButtonStyled>
  );
};
