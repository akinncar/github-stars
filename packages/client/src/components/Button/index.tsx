import { Btn } from './styles';

const Button = ({ children, ...rest }) => {
  return (
    <>
      <Btn {...rest}>{children}</Btn>
    </>
  );
};

export default Button;
