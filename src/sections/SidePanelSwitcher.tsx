import React from 'react';
import { css } from 'emotion';
import { Button } from '../shared';

const switcherCss = css`
  position: absolute;
  bottom: 20px;
  left: 30px;
`;

const buttonCss = css`
  font-weight: bold;
`;

interface ISidePanelSwitcher {
  isSidePanelVisible: boolean;
  switchSidePanel: () => void;
}

const SidePanelSwitcher: React.FC<ISidePanelSwitcher> = ({
  isSidePanelVisible,
  switchSidePanel,
}) => {
  return (
    <div className={switcherCss}>
      <Button onClick={switchSidePanel} className={buttonCss}>
        {isSidePanelVisible ? '\u2190' : '\u2192'}
      </Button>
    </div>
  );
};

export default SidePanelSwitcher;
