import { Btn } from './styles';

interface ButtonProps {
  children: string;
  type: 'primary' | 'secondary';
  rest?: any;
}

const Button = ({ children, type, ...rest }: ButtonProps) => {
  return (
    <>
      <Btn type={type} {...rest}>
        {children}
      </Btn>
    </>
  );
};

export default Button;
