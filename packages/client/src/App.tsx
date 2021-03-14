import GlobalStyle from './styles/global';
import Routes from './routes';
import AppProvider from './contexts';

const App = () => {
  return (
    <AppProvider>
      <GlobalStyle />
      <Routes />
    </AppProvider>
  );
};

export default App;
