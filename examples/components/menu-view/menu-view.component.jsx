import React from 'react';
import { Menu } from '../../../src/index';

function range(start, end) {
  const list = [];
  for (let i = start; i <= end; i += 1) {
    list.push(i);
  }
  return list;
}

const getItems = () => {
  const label = 'Menu Item';

  const items = range(1, 50).map((e, i) => (
    {
      id: i,
      text: `${label} ${i}`,
      items: range(1, 10).map((a, b) => (
        {
          id: `${i}.${b}`,
          text: `${label} ${i}.${b}`,
          items: range(1, 5).map((c, d) => (
            {
              id: `${i}.${b}.${d}`,
              text: `${label} ${i}.${b}.${d}`,
            }
          )),
        }
      )),
    }),
  );

  return items;
};

export default class MenuView extends React.Component {
  constructor(props) {
    super(props);
    this.items = getItems();
  }

  render() {
    const style = {
      height: 400,
      width: 300,
      overflowY: 'auto',
    };

    return (
      <div className="oc-content">
        <div style={style}>
          <Menu items={this.items} isNavigation={false} />
        </div>
      </div>
    );
  }
}
