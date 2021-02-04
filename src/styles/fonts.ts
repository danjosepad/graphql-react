import styled from 'styled-components'


interface TextProps {
  color?: string
}

export const H1 = styled.h1<TextProps>`
  font-size: 54px;
  color: ${({ color }) => color ? color : 'white'};
  font-weight: 400;
  line-height: 1.3;
`

export const H2 = styled.h1<TextProps>`
  font-size: 36px;
  color: ${({ color }) => color ? color : 'white'};
  font-weight: 600;
  line-height: 1.3;
`

export const H3 = styled.h2<TextProps>`
  font-size: 24px;
  color: ${({ color }) => color ? color : 'white'};
  font-weight: 600;
  text-transform: capitalize;
  line-height: 1.3; 
`

export const Span = styled.span<TextProps>`
  font-size: 16px;
  color: ${({ color }) => color ? color : 'white'};
  font-weight: 400;
  line-height: 1.75;
`
