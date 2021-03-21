import { useTheme } from '../../hooks/useTheme';

import { Container, CloseContainer } from './styles';

interface TagProps {
  children: string;
  icon?: JSX.Element;
  onPressIcon?(): void;
}

export default function Tag({ children, icon, onPressIcon }: TagProps) {
  const { getCurrentTheme } = useTheme();

  return (
    <Container>
      <span>{children}</span>
      {icon && <CloseContainer onClick={onPressIcon}>{icon}</CloseContainer>}
    </Container>
  );
}
