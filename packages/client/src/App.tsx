import GlobalStyle from './styles/global';
import Routes from './routes';
import Theme from './styles/Theme';

const App = () => {
  console.log('ops');

  return (
    <Theme>
      <GlobalStyle />
      <Routes />
    </Theme>
  );
};

export default App;
