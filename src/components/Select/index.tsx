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
      {options.map((item: Option) => (
        <option key={item.value} value={item.value}>
          {item.name}
        </option>
      ))}
    </SelectStyled>
  );
};
