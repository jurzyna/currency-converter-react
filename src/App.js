import styled from 'styled-components';
import ResetStyle from './styles/reset.style';
import GlobalStyle from './styles/global.style';
import { Provider } from 'react-redux';
import store from './store/store';
import Converter from './containers/Converter';
const MainStyled = styled.main`
  max-width: 72rem;
  margin: 10rem auto;
`;

const App = () => {
  return (
    <MainStyled>
      <Provider store={store}>
        <ResetStyle />
        <GlobalStyle />
        <Converter />
      </Provider>
    </MainStyled>
  );
};

export default App;
