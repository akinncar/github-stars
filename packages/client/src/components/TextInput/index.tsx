import { InputHTMLAttributes } from 'react';
import { Container, Input } from './styles';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  rest?: any;
}

const TextInput = ({ icon, ...rest }: TextInputProps) => {
  return (
    <Container>
      {icon}
      <Input type="text" {...rest} />
    </Container>
  );
};

export default TextInput;
