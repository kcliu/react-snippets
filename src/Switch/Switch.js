import React from 'react';
import classnames from 'classnames';

import './Switch.css';

const Switch = ({ status, onToggle, isDisabled }) => {
  return (
    <div className={classnames('switch-wrapper', {off: status === false})} onClick={onToggle} disabled={isDisabled} >
      <div className={classnames('oval', {
        on: status === true,
        off: status === false,
      })}/>
    </div>
  )
}

export default Switch;
