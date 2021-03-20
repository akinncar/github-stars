import MoonLoader from 'react-spinners/MoonLoader';
import { useTheme } from '../../hooks/useTheme';
import { Container } from './styles';
interface LoadingType {
  isFullScreen?: boolean;
}

export default function Loading({ isFullScreen }: LoadingType) {
  const { getCurrentTheme } = useTheme();
  const theme = getCurrentTheme();

  return (
    <Container isFullScreen={isFullScreen}>
      <MoonLoader color={theme.colors.primary} loading={true} size={36} />
    </Container>
  );
}
