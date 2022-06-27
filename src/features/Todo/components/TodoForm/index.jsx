import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from './../../../../components/form-controls/InputField/index';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup
    .object()
    .shape({
      title: yup
        .string()
        .required('Please enter title')
        .min(5, 'Title is too short'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    console.log('todo form', values);
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField label="Your name" name="title" form={form} />
    </form>
  );
}

export default TodoForm;
