import { Container, ActionContainer } from './styles';

interface TagProps {
  children: string;
  icon?: JSX.Element;
  onPressIcon?(): void;
}

export default function Tag({ children, icon, onPressIcon }: TagProps) {
  return (
    <Container>
      <span>{children}</span>
      {icon && <ActionContainer onClick={onPressIcon}>{icon}</ActionContainer>}
    </Container>
  );
}
