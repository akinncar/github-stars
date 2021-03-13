import GlobalStyle from './styles/global';
import Routes from './routes';
import Theme from './contexts/Theme';

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Routes />
    </Theme>
  );
};

export default App;
