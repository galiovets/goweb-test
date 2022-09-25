import sprite from 'assets/sprite.svg';

function Icon({ iconId, className, fill, stroke, width, height }) {
  return (
    <svg
      className={`icon icon-${iconId} ${className}`}
      fill={fill}
      stroke={stroke}
      width={width}
      height={height}
    >
      <use xlinkHref={`${sprite}#${iconId}`}></use>
    </svg>
  );
}

export default Icon;
