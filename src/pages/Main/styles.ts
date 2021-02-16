import styled from 'styled-components'

// Project imports

export const Wrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  // background: url() no-repeat center/100%;
  background-image: linear-gradient(to bottom, rgb(112, 123, 245), rgb(111, 132, 244), rgb(111, 142, 243), rgb(110, 151, 241), rgb(110, 160, 240), rgb(109, 170, 239), rgb(109, 179, 238), rgb(108, 189, 237), rgb(108, 198, 236), rgb(107, 207, 234), rgb(107, 217, 233), rgb(106, 226, 232));
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0,0,0,0.2);
`

export const MoreInfo = styled.div`
  display: flex;
  
  & > * + * {
    margin-left: 8px;
  }
`

export const CloudsAndWeather = styled.div`
  margin-top: 16px;
  display: flex;
  width: 30%;
  min-width: 300px;
  justify-content: space-between;
`

export const DataContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`