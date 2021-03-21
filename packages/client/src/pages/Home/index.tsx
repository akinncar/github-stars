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

  function handleRedirectToGithub() {
    window.open('https://github.com/akinncar/github-stars');
  }

  function handleSearch() {
    if (username !== '') {
      history.push(`/repositories/${username}`);
    }
  }

  return (
    <Container>
      <Header>
        <Logo />
        <div>
          <button onClick={handleRedirectToGithub}>View on Github</button>
          <ThemeToggle />
        </div>
      </Header>

      <Content id="user">
        <div>
          <p>https://github.com/</p>
          <TextInput
            placeholder="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div>
          <Button
            type="submit"
            form="user"
            variant="primary"
            onClick={handleSearch}
            disabled={!username}
          >
            Search Repositories
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
