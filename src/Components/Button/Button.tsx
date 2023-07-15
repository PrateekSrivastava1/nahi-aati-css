import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: ReactNode;
  fontSize?: string;
  color?: string;
  kind?: 'primary' | 'secondary';
  border?: string;
  buttonWithSVG?: boolean;
  borderRadius?: string;
  onClick?: any;
}

const ButtonStyled = styled.button<ButtonProps>`
  padding: 10px 20px;
  font-size: ${props => props.fontSize || '14px'};
  color: ${props => props.color || 'white'};
  background-color: ${props => (props.kind === 'secondary' ? 'lightgray' : '#74b4fe')};
  border: ${props => props.border || 'none'};
  border-radius: ${props => props.borderRadius || '10px'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${props => (props.kind === 'secondary' ? '#949494' : '#408ee8')};
  }
`;

const Button: React.FC<ButtonProps> = props => {
  const { children, onClick, ...rest } = props;
  return (
    <ButtonStyled {...rest} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
