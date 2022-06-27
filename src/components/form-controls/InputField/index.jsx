import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const {
    formState: { errors },
  } = form;

  const hasError = errors[name];
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange, onBlur, value, name, ref } }) => (
        <TextField
          margin="normal"
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          inputRef={ref}
          label={label}
          disabled={disabled}
          fullWidth
          error={!!hasError}
          helperText={errors[name] ? errors[name].message : ''}
        />
      )}
    />
  );
}

export default InputField;
