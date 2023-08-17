import { SelectStyled } from './style';

type Option = {
  name: string;
  value: string;
};

interface SelectProps {
  options: Option[];
  placeholder: string;
}

export const Select = ({ options, placeholder }: SelectProps) => {
  return (
    <SelectStyled>
      <option value="" disabled selected>
        {placeholder}
      </option>
      {options.map((option: Option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </SelectStyled>
  );
};
