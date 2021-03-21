import { Container, Previous, Next } from './styles';

interface PaginatorProps {
  hasPrevious?: boolean;
  hasNext?: boolean;
  onClickPrevious(): void;
  onClickNext(): void;
  rest?: any;
}

const Paginator = ({
  hasPrevious,
  hasNext,
  onClickPrevious,
  onClickNext,
  ...rest
}: PaginatorProps) => {
  return (
    <Container>
      <Previous onClick={onClickPrevious} disabled={!hasPrevious} {...rest}>
        Previous
      </Previous>
      <Next onClick={onClickNext} disabled={!hasNext} {...rest}>
        Next
      </Next>
    </Container>
  );
};

export default Paginator;
