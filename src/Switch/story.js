import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Switch from './Switch.js';

const stories = storiesOf('Switch', module);

stories.add('Default', () => {

  class Host extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        toggleStatus: false,
        toggleStatus2: true,
        toggleStatus3: false,
      };
    }

    onToggle = (key, status) => (e) => {
      this.setState({[key]: !status});
    }

    render() {
      return (
        <div>
          <p>
            <Switch status={this.state.toggleStatus} onToggle={this.onToggle('toggleStatus', this.state.toggleStatus)} />
          </p>
          <p>
            <Switch status={this.state.toggleStatus2} onToggle={this.onToggle('toggleStatus2', this.state.toggleStatus2)} />
          </p>
          <p>
            <Switch status={this.state.toggleStatus3} onToggle={this.onToggle('toggleStatus', this.state.toggleStatus3)} isDisabled={true} />
          </p>
        </div>
      )
    }
  }

  return <Host />;
});
