import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import '../components/scss/ProductInfo.scss';
import { formatPrice } from 'utils';
ProductInfo.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},

  desciption: {},
  salePrice: {},

  originalPrice: {},

  promotionPercent: {},
}));

function ProductInfo({ product = {} }) {
  const classes = useStyles();
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;

  return (
    <Box className="Detail">
      <Typography component="h1" variant="h4" className="Detail-name">
        {name}
      </Typography>
      <Typography className="Detail-shortdescription">{shortDescription}</Typography>

      <Box className="PriceBox">
        <span className="Label-salePrice">Price: </span>
        <Box className="Detail-salePrice" component="span">
          {formatPrice(salePrice)}
        </Box>

        {promotionPercent > 0 && (
          <>
            <Box className="Detail-originalPrice" component="span">
              {formatPrice(originalPrice)}
            </Box>
            <Box className="Detail-promotionPercent" component="span">
              {`- ${product.promotionPercent}%`}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductInfo;
