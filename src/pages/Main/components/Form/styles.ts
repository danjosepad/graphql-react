import styled from 'styled-components'
import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react'
import { Form } from 'formik'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  error?: boolean
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  error?: boolean
  disabled?: boolean
  isLoading?: boolean
}

export const Container = styled(Form)`
  width: 100%;
  max-width: 300px;
  display: flex;
  margin-right: 40px;
`

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  text-align: center;
  transition: border 0.2s;
  border-radius: 8px;

  ${({ error }) => error  ? `
    border: 1px solid red;
  ` : `
    border: 1px solid green;
  `};

  &:focus {
    background: white;
    border: 1px solid black;
  }
`

export const Button = styled.button<ButtonProps>`
  height: 40px;
  width: 40px;
  padding: 8px;
  margin-left: 8px;
  border: none;
  border-radius: 8px;
  ${({ error }) => error  ? `
    background: red;
  ` : `
  background: green;
  `};
  ${({ disabled }) => disabled && `
    background: gray;
  `};
  transition: background 0.2s;
`;