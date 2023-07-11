import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AuthSchema } from '../../utils/yup/schemas';
const AuthPage = ({ type }) => {
  return (
    <div>
      {`${type} here`}
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={AuthSchema}
        onSubmit={() => {
          console.log('Form submitted');
        }}
      >
        {() => {
          return (
            <Form>
              <Field type='email' name='email' placeholder='Email' />
              <ErrorMessage name='email' component='div' />
              <Field type='password' name='password' placeholder='Password' />
              <ErrorMessage name='password' component='div' />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AuthPage;
