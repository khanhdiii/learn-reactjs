import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, LinearProgress, makeStyles, Paper } from '@material-ui/core';
import ProductThumbnail from '../components/ProductThumbnail';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import useProductDetail from '../hooks/useProductDetail';
import ProductInfo from '../components/ProductInfo';
import AddToCartForm from '../components/AddToCartForm';
import ProductMenu from '../components/ProductMenu';
import ProductDescription from '../components/ProductDescription';
import ProductAdditional from '../components/ProductAdditional';
import ProductReview from '../components/ProductReview';
import { useDispatch } from 'react-redux';
import { addToCart } from 'features/Cart/cartSlice';

const useStyles = makeStyles((theme) => ({
  root: { paddingBottom: theme.spacing(3) },

  left: {
    width: '400px',
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },

  right: {
    flex: '1 1 0',
    marginLeft: 20,
  },

  loading: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
  },
}));

function DetailPage() {
  const classes = useStyles();
  const {
    params: { productId },
    url,
  } = useRouteMatch();

  const { product, loading } = useProductDetail(productId);
  const dispatch = useDispatch();

  if (loading) {
    return (
      <Box className={classes.loading}>
        <LinearProgress />
      </Box>
    );
  }

  const handleAddToCartSubmit = ({ quantity }) => {
    // console.log('form', formValues);

    const action = addToCart({
      id: product.id,
      product,
      quantity: quantity,
    });
    console.log(action);
    dispatch(action);

    // dispatch(
    //   addToCart({
    //     id: product.id,
    //     product,
    //     quantity,
    //   })
    // );
  };
  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>

            <Grid item className={classes.right}>
              <ProductInfo product={product} />
              <AddToCartForm onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
        </Paper>
        <ProductMenu />
        <Switch>
          <Route exact path={url}>
            <ProductDescription product={product} />
          </Route>

          <Route path={`${url}/additional`} component={ProductAdditional} />
          <Route path={`${url}/reviews`} component={ProductReview} />
        </Switch>
      </Container>
    </Box>
  );
}

export default DetailPage;
