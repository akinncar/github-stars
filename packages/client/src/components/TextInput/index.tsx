import { Container, Input } from './styles';

const TextInput = props => {
  return (
    <Container>
      <Input type="text" {...props} />
    </Container>
  );
};

export default TextInput;
