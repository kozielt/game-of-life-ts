import React from 'react';
import { css } from 'emotion';
import { THEME } from '../../config';

const buttonCss = css`
  border-radius: 20px;
  padding: 8px 20px;
  font-size: ${THEME.FONT_SIZE};
  background-color: ${THEME.DEFAULT_FONT_COLOR};
`;

interface IButton {
  onClick: () => void;
}

const Button: React.FC<IButton> = (props: IButton): JSX.Element => {
  return <button className={buttonCss} {...props} />;
};

export default Button;
