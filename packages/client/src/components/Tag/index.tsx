import { MdClose } from 'react-icons/md';
import { useTheme } from '../../hooks/useTheme';

import { Container, CloseContainer } from './styles';

interface LoadingProps {
  children: string;
  isEditable?: boolean;
  onPressIcon?(): void;
}

export default function Loading({
  children,
  isEditable,
  onPressIcon
}: LoadingProps) {
  const { getCurrentTheme } = useTheme();
  const theme = getCurrentTheme();

  return (
    <Container>
      <span>{children}</span>
      {isEditable && (
        <CloseContainer onClick={onPressIcon}>
          <MdClose size={14} color={theme.colors.tag.text} />
        </CloseContainer>
      )}
    </Container>
  );
}
