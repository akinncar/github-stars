import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Logo from '../../components/Logo';
import ThemeToggle from '../../components/ThemeToggle';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

import { Container, Content, Header } from './styles';
import 'react-toggle/style.css';

const Home = () => {
  const history = useHistory();

  const [username, setUsername] = useState('');

  function handleSearch() {
    if (username !== '') {
      history.push(`/repositories/${username}`);
    }
  }

  return (
    <Container>
      <Header>
        <Logo />
        <ThemeToggle />
      </Header>

      <Content>
        <div>
          <p>https://github.com/</p>
          <TextInput
            placeholder="username"
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
