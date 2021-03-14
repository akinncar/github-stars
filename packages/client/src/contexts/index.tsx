import { ThemeProvider } from './Theme';

const AppProvider: React.FC = ({ children }) => (
  <>
    <ThemeProvider>{children}</ThemeProvider>
  </>
);

export default AppProvider;
