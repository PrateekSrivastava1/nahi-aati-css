import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  white-space: nowrap;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DropdownTitle = styled.span`
  margin-right: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  padding: 4px 0;
  list-style: none;
  border: 1px solid #ccc;
  background-color: #fff;

  @media (max-width: 768px) {
    max-height: 150px;
  }
`;

const DropdownItem = styled.li`
  padding: 4px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 8px;
`;

type DropdownProps = {
  options: string[];
  kind?: string;
  onSelectChange?: (selectedOptions: string[]) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ options, kind, onSelectChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    if (onSelectChange) {
      onSelectChange(selectedOptions);
    }
  }, [selectedOptions, onSelectChange]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (option: string) => {
    if (kind === 'isMultiSelect') {
      const isSelected = selectedOptions.includes(option);
      const updatedOptions = isSelected
        ? selectedOptions.filter((selectedOption) => selectedOption !== option)
        : [...selectedOptions, option];

      setSelectedOptions(updatedOptions);
    } else {
      setSelectedOptions([option]);
      setIsOpen(false);
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const updatedOptions = checked
      ? [...selectedOptions, value]
      : selectedOptions.filter((selectedOption) => selectedOption !== value);

    setSelectedOptions(updatedOptions);
  };

  const getDropdownTitle = () => {
    if (selectedOptions.length === 0) {
      return 'Select an option';
    }

    if (kind === 'isMultiSelect') {
      if (selectedOptions.length === 1) {
        return selectedOptions[0];
      }

      return `${selectedOptions.length} options selected`;
    }

    return selectedOptions[0];
  };

  return (
    <Container>
      <DropdownButton onClick={toggleDropdown}>
        <DropdownTitle>{getDropdownTitle()}</DropdownTitle>
        {isOpen ? '▲' : '▼'}
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {options?.map((option) => (
            <DropdownItem key={option} onClick={() => handleItemClick(option)}>
              {kind === 'isMultiSelect' && (
                <Checkbox
                  value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={handleCheckboxChange}
                />
              )}
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </Container>
  );
};

export default Dropdown;
