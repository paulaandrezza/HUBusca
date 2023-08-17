import { IoIosSearch } from 'react-icons/io';
import { InputContainer } from './style';

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({ value, onChange, onKeyDown }: SearchBarProps) => {
  return (
    <InputContainer>
      <IoIosSearch />
      <input
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        style={{ width: '100%' }}
      />
    </InputContainer>
  );
};
