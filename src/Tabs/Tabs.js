import React from 'react';
import classnames from 'classnames';

import './Tabs.css';

const Tabs = ({ currentIndex, onClick, sourceName }) => {
  const sourceCx = (clicked) => {
    return classnames('tab', {
      active: clicked === currentIndex,
    })
  }

  const renderTab = () => {
    return sourceName.map((d, i) => {
      return (
        <div className={sourceCx(i)} onClick={onClick(i)} key={i}>
          {d}
        </div>
      )
    })
  }

  return (
    <div className="tab-wrapper">
      {renderTab()}
    </div>
  );
};

export default Tabs;
