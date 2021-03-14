import MoonLoader from 'react-spinners/MoonLoader';
import { Container } from './styles';
import { light } from '../../styles/themes/light';
import { dark } from '../../styles/themes/dark';

export default function Loading() {
  return (
    <Container>
      <MoonLoader
        color={
          localStorage.getItem('@GithubStars:theme') === 'dark'
            ? dark.colors.primary
            : light.colors.primary
        }
        loading={true}
        size={36}
      />
      <p>Loading Repositories...</p>
    </Container>
  );
}
