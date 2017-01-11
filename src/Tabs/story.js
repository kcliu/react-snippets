import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Tabs from './Tabs.js';

const stories = storiesOf('Tabs', module);

const tabSources = ['DAY', 'WEEK', 'MONTH'];

stories.add('Default', () => {

  const Host = React.createClass({
    getInitialState() {
      return {
        currentIndex: 2,
      };
    },

    onClick(index) {
      return () => {
        action('onClick')(index);
        this.setState({
          currentIndex: index
        })
      }
    },

    render() {
      return (
        <Tabs
          currentIndex={ this.state.currentIndex }
          sourceName={ tabSources }
          onClick={ this.onClick }
        />
      )
    }
  })

  return <Host />;
});
