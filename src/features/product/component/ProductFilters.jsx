import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;

    const newFilters = {
      'category.id': newCategoryId.id,
      'category.name': newCategoryId.name,
    };
    onChange(newFilters);
  };

  const handleChange = (values) => {
    if (onChange) onChange(values);
  };

  const handlePriceChange = (values) => {
    if (onchange) {
      onchange(values);
    }
  };
  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handlePriceChange} />
      <FilterByService filters={filters} onChange={handleChange} />
    </Box>
  );
}

export default ProductFilters;
