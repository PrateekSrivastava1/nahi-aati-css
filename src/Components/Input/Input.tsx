import React, { InputHTMLAttributes, ChangeEvent } from 'react';
import styled from 'styled-components';

type StyledInputProps = InputHTMLAttributes<HTMLInputElement> & {
  type: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  padding?: string;
  border?: string;
};

// Define reusable styled component for input
const StyledInput = styled.input<StyledInputProps>`
  /* Default styles */
  padding: ${({ padding }) => padding || '8px'};
  border: ${({ border }) => border || '1px solid #ccc'};
  border-radius: 4px;
  font-size: 14px;

  /* Additional styles for specific input types */
  ${({ type }) => {
    switch (type) {
      case 'checkbox':
        return `
          /* Checkbox styles */
          appearance: none;
          width: 16px;
          height: 16px;
          margin-right: 8px;
          border-radius: 3px;
          outline: none;
          transition: border-color 0.2s;

          &:checked {
            border-color: #007bff;
            background-color: #007bff;
          }
        `;
      case 'radio':
        return `
          /* Radio button styles */
          appearance: none;
          width: 16px;
          height: 16px;
          margin-right: 8px;
          border-radius: 50%;
          outline: none;
          transition: border-color 0.2s;

          &:checked {
            border-color: #007bff;
            background-color: #007bff;
          }
        `;
      case 'range':
        return `
          /* Range input styles */
          -webkit-appearance: none;
          width: 100%;
          height: 6px;
          background-color: #f1f1f1;
          outline: none;
          transition: background-color 0.2s;

          &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background-color: #007bff;
            cursor: pointer;
          }

          &::-moz-range-thumb {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background-color: #007bff;
            cursor: pointer;
          }
        `;
      case 'search':
        return `
          /* Search input styles */
          appearance: none;
          border-radius: 4px;
          outline: none;
          transition: border-color 0.2s;

          &:focus {
            border-color: #007bff;
          }
        `;
      case 'email':
        return `
          /* Email input styles */
          border-radius: 4px;
          outline: none;
          transition: border-color 0.2s;

          &:focus {
            border-color: #007bff;
          }
        `;
      case 'time':
        return `
          /* Time input styles */
          border-radius: 4px;
          outline: none;
          transition: border-color 0.2s;

          &:focus {
            border-color: #007bff;
          }
        `;
      case 'week':
        return `
          /* Week input styles */
          border-radius: 4px;
          outline: none;
          transition: border-color 0.2s;

          &:focus {
            border-color: #007bff;
          }
        `;
      case 'date':
        return `
          /* Date input styles */
          border-radius: 4px;
          outline: none;
          transition: border-color 0.2s;

          &:focus {
            border-color: #007bff;
          }
        `;
      case 'color':
        return `
          /* Color input styles */
          border-radius: 4px;
          outline: none;
          transition: border-color 0.2s;

          &:focus {
            border-color: #007bff;
          }
        `;
      default:
        return '';
    }
  }}
`;

// Define the Input component
const Input: React.FC<StyledInputProps> = ({ type, onChange, padding, border, ...rest }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return <StyledInput type={type} onChange={handleChange} padding={padding} border={border} {...rest} />;
};

export default Input;
