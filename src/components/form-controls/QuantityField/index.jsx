import { Box, FormHelperText, IconButton, makeStyles, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import React, { useState } from 'react';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};
const useStyles = makeStyles((theme) => ({
  root: {},
  box: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    maxWidth: '250px',
  },
}));
function QuantityField(props) {
  const classes = useStyles();
  const { form, name, label } = props;
  const { control, setValue } = form;

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { invalid, isTouched, error } }) => (
          <>
            <FormControl error={isTouched && invalid} fullWidth margin="normal" variant="outlined" size="medium">
              <Typography style={{ fontSize: '20px', marginBottom: '10px' }}>{label}</Typography>
              {/* <InputLabel style={{ fontSize: '20px', textAlign: 'center', marginBottom: '100px' }}>{label}</InputLabel> */}

              <Box className={classes.box}>
                <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}>
                  <RemoveCircleOutline />
                </IconButton>
                <OutlinedInput
                  id={name}
                  error={invalid}
                  type="number"
                  labelWidth={60}
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                />

                <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}>
                  <AddCircleOutline />
                </IconButton>
              </Box>
            </FormControl>
            <FormHelperText error={invalid}>{error?.message}</FormHelperText>
          </>
        )}
      />
    </div>
  );
}

export default QuantityField;
