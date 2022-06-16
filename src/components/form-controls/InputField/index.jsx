import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import React from 'react';
InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
  formState: PropTypes.isRequired,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const {
    formState: { errors },
  } = form;
  const hasError = errors[name];

  console.log(errors[name]);
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange, onBlur, value, name, ref } }) => (
        <TextField
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          inputRef={ref}
          label={label}
          disabled={disabled}
          fullWidth
          id="filled-error-helper-text"
          error={!!hasError}
          // helperText={errors[name]?.message}
        />
      )}
    />
  );
}

export default InputField;
