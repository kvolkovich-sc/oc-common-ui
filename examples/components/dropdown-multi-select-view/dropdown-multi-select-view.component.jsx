import React from 'react';
import { Map } from 'immutable';

import { DropdownMultiSelect } from '../../../src/index';

export default class DropdownMultiSelectView extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = { checkedItems: Map() };
  }

  componentWillMount() {
    this.items = this.initializeItems();
  }

  onChange = (checkedItems) => {
    this.setState({ checkedItems });
  }

  initializeItems = () => {
    const items = [];
    for (let i = 0; i < 300; i += 1) {
      items.push({ id: i, text: `Item ${i}` });
    }
    return items;
  };

  render() {
    const containerStyle = {
      width: '400px',
      padding: '10px',
      margin: '10px',
      background: 'white',
    };
    const checkedItems = this.state.checkedItems;
    return (
      <div style={containerStyle}>
        <DropdownMultiSelect
          checkedItems={checkedItems}
          id="exampleDropdownMultiSelect"
          items={this.items}
          onChange={this.onChange}
          defaultPlaceholder="{N} kpl"
        />
      </div>
    );
  }
}
