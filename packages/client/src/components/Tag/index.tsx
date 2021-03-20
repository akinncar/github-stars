import { useTheme } from '../../hooks/useTheme';

import { Container, CloseContainer } from './styles';

interface LoadingProps {
  children: string;
  icon?: JSX.Element;
  onPressIcon?(): void;
}

export default function Tag({ children, icon, onPressIcon }: LoadingProps) {
  const { getCurrentTheme } = useTheme();
  const theme = getCurrentTheme();

  return (
    <Container>
      <span>{children}</span>
      {icon && <CloseContainer onClick={onPressIcon}>{icon}</CloseContainer>}
    </Container>
  );
}
