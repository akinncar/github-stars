import { ButtonHTMLAttributes } from 'react';
import { Btn } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant: 'primary' | 'secondary';
  rest?: any;
}

const Button = ({ children, variant, ...rest }: ButtonProps) => {
  return (
    <>
      <Btn variant={variant} {...rest}>
        {children}
      </Btn>
    </>
  );
};

export default Button;
