import { Dispatch, SetStateAction } from 'react';
import { SelectStyled } from './style';

type Option = {
  name: string;
  value: string;
};

interface SelectProps {
  options: Option[];
  placeholder: string;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

export const Select = ({
  options,
  placeholder,
  filter,
  setFilter,
}: SelectProps) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setFilter(selectedValue);
  };

  return (
    <SelectStyled
      onChange={handleSelectChange}
      value={filter}
      defaultValue={placeholder}
    >
      <option value="all" disabled>
        {placeholder}
      </option>
      <option value="all" selected>
        Todas
      </option>
      {options.map((item: Option) => (
        <option key={item.value} value={item.value}>
          {item.name}
        </option>
      ))}
    </SelectStyled>
  );
};
