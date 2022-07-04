import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from './../../../../components/form-controls/InputField/index';
import { Avatar, Typography, Button } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { makeStyles } from '@mui/styles';
import PasswordField from './../../../../components/form-controls/PasswordField/index';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '10px',
  },
  avatar: {
    margin: '0 auto',
    backgroundColor: '#fafaf',
  },
  title: {
    textAlign: 'center',
  },
  submit: {},
}));
RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();
  const schema = yup
    .object()
    .shape({
      fullName: yup
        .string()
        .required('Please enter your name')
        .test(
          'should has at least two words',
          'Please enter at least two words.',
          (value) => {
            return value.split(' ').length >= 2;
          }
        ),
      email: yup
        .string()
        .required('Please enter your email')
        .email('Please enter a valid email'),
      password: yup
        .string()
        .required('Please enter your password')
        .min(6, 'Please enter min password longer 6'),
      retypePassword: yup
        .string()
        .required('Please enter your password')
        .oneOf([yup.ref('password')], 'Password does not match'),
    })
    .required();

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    console.log('todo form', values);
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
      // console.log(values);
    }
    form.reset();
  };

  return (
    <div className={classes.root}>
      <Avatar
        sx={{ m: 1, bgcolor: 'secondary.main' }}
        className={classes.avatar}
      >
        <LockIcon />
      </Avatar>
      <Typography
        component="h3"
        variant="h5"
        alignItems="center"
        className={classes.title}
      >
        Sign Up
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField label="Full name" name="fullName" form={form} />
        <InputField label="Email" name="email" form={form} />
        <PasswordField label="Password" name="password" form={form} />
        <PasswordField
          label="Retype password"
          name="retypePassword"
          form={form}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
