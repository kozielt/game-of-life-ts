import React from 'react';
import { css, cx } from 'emotion';
import { THEME } from '../config';

const buttonCss = css`
  border-radius: 20px;
  padding: 8px 20px;
  font-size: ${THEME.FONT_SIZE};
  background-color: ${THEME.DEFAULT_FONT_COLOR};
  transition: all 0.2s;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    transform: translateY(-5px);
  }
`;

interface IButton {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<IButton> = ({ className, ...rest }) => {
  return <button className={cx(buttonCss, className)} {...rest} />;
};

export default Button;
