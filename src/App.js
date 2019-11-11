import styled from 'styled-components';
import ResetStyle from './styles/reset.style';
import GlobalStyle from './styles/global.style';

const MainStyled = styled.main`
  max-width: 72rem;
  margin: 10rem auto;
`;

const App = () => {
  return (
    <MainStyled>
      <ResetStyle />
      <GlobalStyle />
      <h1>Currency Conventer</h1>
    </MainStyled>
  );
};

export default App;
