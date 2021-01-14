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

  & + & {
    margin-left: 8px;
  }
`

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  font-size: 14px;
  border: 1px solid black;
  transition: border 0.2s;

  ${({ error }) => error  ? `
    border: 1px solid red;
  ` : `
    border: 1px solid green;
  `};
`

export const Button = styled.button<ButtonProps>`
  height: 40px;
  width: 40px;
  padding: 8px;
  border: none;
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