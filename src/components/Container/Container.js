import { ContainerStyled } from './Container.styled';

function Container({ children, className }) {
  return <ContainerStyled className={className}>{children}</ContainerStyled>;
}

export default Container;
