import { IoIosSearch } from 'react-icons/io';
import { InputContainer } from './style';

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <InputContainer>
      <IoIosSearch />
      <input value={value} onChange={onChange} />
    </InputContainer>
  );
};
