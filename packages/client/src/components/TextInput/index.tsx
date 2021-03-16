import { Container, Input } from './styles';

const TextInput = props => {
  return (
    <Container>
      {props.icon}
      <Input type="text" {...props} />
    </Container>
  );
};

export default TextInput;
