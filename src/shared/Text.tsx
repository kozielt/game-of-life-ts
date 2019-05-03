import React from 'react';
import { css, cx } from 'emotion';
import { THEME } from '../config';

const textCss = css`
  color: ${THEME.DEFAULT_FONT_COLOR};
  font-size: ${THEME.FONT_SIZE};
  font-weight: bold;
`;

interface IText {
  className?: string;
}

const Text: React.FC<IText> = ({ className, ...rest }) => (
  <span className={cx(textCss, className)} {...rest} />
);

export default Text;
