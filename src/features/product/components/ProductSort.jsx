import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, Paper } from '@material-ui/core';

ProductSort.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  onchange: PropTypes.func,
};

function ProductSort({currentSort, onChange}) {
  const [value, setValue] = React.useState(2);

  const handleSortChange = (event, newValue) => {
    // setValue(newValue);
    if(onChange) onChange(newValue)
  };
  return (
    <Paper>
      <Tabs
        value={currentSort}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleSortChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Giá thấp tới cao" value="salePrice:ASC"></Tab>
        <Tab label="Giá cao tới thấp" value="salePrice:DESC"></Tab>
      </Tabs>
    </Paper>
  );
}

export default ProductSort;
