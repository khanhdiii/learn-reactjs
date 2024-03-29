import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disable } = props;
  const { control } = form;
  // console.log('onChange', onChange);
  console.log('form', form);
  console.log('name', props);
  return (
    <Controller
      name={name}
      control={control}
      render={({ onChange, onBlur, value, name, ref, fieldState: { invalid, error } }) => {
        return (
          <TextField
            margin="normal"
            variant="outlined"
            fullWidth
            label={label}
            error={invalid}
            helperText={error?.message}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            value={value}
            disabled={disable}
          />
        );
      }}
    ></Controller>
  );
}

export default InputField;
