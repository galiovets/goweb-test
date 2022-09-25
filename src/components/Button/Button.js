import Icon from 'components/Icon';
import { ButtonWrapper } from './Button.styled';

function Button({
  type,
  iconId,
  btnClassName,
  onClick,
  content,
  isIcon,
  fill,
  stroke,
  width,
  height,
}) {
  return (
    <ButtonWrapper type={type} className={btnClassName} iconId={iconId} onClick={onClick}>
      {isIcon ? (
        <Icon iconId={iconId} fill={fill} stroke={stroke} width={width} height={height} />
      ) : null}
      <span className="content">{content}</span>
    </ButtonWrapper>
  );
}

export default Button;
