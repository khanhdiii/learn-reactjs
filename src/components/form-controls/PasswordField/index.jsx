import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
  formState: PropTypes.isRequired,
};

function PasswordField(props) {
  const { form, name, label, disabled } = props;
  const {
    formState: { errors },
  } = form;

  const hasError = !!errors[name];
  const [showPassword, setShowPassword] = React.useState(false);
  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };
  return (
    <div>
      <FormControl
        error={hasError}
        variant="outlined"
        fullWidth
        margin="normal"
      >
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <Controller
          name={name}
          control={form.control}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <TextField
              name={name}
              control={form.control}
              type={showPassword ? 'text' : 'password'}
              onBlur={onBlur}
              value={value}
              label={label}
              onChange={onChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              disabled={disabled}
            />
          )}
        />
        <FormHelperText>
          {!!errors[name] ? errors[name].message : ''}
        </FormHelperText>
      </FormControl>
    </div>
  );
}

export default PasswordField;
