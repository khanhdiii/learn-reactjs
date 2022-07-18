import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import productApi from 'api/productApi';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import ProductList from '../component/ProductList';
import ProductSkeletonList from '../component/ProductSkeletonList';

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: '250px',
  },

  right: {
    flex: '1 1 0',
  },

  pagination: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    padding: '30px 0 20px',
  },
}));

function ListPage(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getAll({ _page: 1, _limit: 10 });
        setProductList(data);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }

      setLoading(false);
    })();
  }, []);

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left Column</Paper>
          </Grid>

          <Grid item className={classes.right}>
            <Paper elevation={0}>{loading ? <ProductSkeletonList /> : <ProductList data={productList} />}</Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
export default ListPage;
