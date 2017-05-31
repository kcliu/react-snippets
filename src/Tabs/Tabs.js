import React from 'react';
import classnames from 'classnames';

import './Tabs.css';

const Tabs = ({ currentIndex, onClick, sourceName }) => {
  return (
    <div className="tab-wrapper">
      {
        sourceName.map((d, i) =>
          <div className={classnames('tab', {
            active: i === currentIndex
          })} onClick={onClick(i)} key={i}>{d}</div>
        )
      }
    </div>
  );
};

export default Tabs;
