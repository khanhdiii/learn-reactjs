import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './couterSlice';
import styles from './styles.module.css';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 35,
    padding: '0 30px',
  },
});

function CouterFeature(props) {
  const classnames = useStyles();
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const handleIncreaseClick = () => {
    const action = increase();
    console.log(action);
    dispatch(action);
  };

  const handleDecreaseClick = () => {
    const action = decrease();
    console.log(action);
    dispatch(action);
  };

  return (
    <div className={styles.counter}>
      Couter {counter}
      <div>
        <Button className={classnames.root} onClick={handleIncreaseClick}>
          Increase
        </Button>
        <Button className={classnames.root} onClick={handleDecreaseClick}>
          Decrease
        </Button>
      </div>
    </div>
  );
}

export default CouterFeature;
