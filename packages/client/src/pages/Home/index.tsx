import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Logo from '../../components/Logo';
import ThemeToggle from '../../components/ThemeToggle';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

import { Container, Content } from './styles';
import 'react-toggle/style.css';

const Home = () => {
  const history = useHistory();

  const [username, setUsername] = useState('akinncar');

  function handleSearch() {
    history.push(`/repositories/${username}`);
  }

  return (
    <Container>
      <Logo />
      <ThemeToggle />

      <Content>
        <div>
          <p>https://github.com/</p>
          <TextInput
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div>
          <Button variant="primary" onClick={handleSearch}>
            Search Repositories
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
