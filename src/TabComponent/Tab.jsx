import React from 'react';
import { string } from 'prop-types';

import Button from "../Button";

export const Tabs = ({ classes }) => {
  const dummyData = [{
    label: "Tab 1",
    classes: 'tab'
  }, {
    label: "Tab 2",
    classes: 'tab'
  }];

  return (
    <Tabs className={classes}>
      {dummyData.map(item => <Button className={item.classes}>{item.label}</Button>)}
    </Tabs>
  );
}

Tabs.propTypes = {
  label: string,
}
