import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AuthSchema } from '../../utils/yup/schemas';
import bgImg from '../../images/bg-img2.jpeg';
const AuthPage = ({ type }) => {
  return (
    <div>
      <div
        className='z-2 absolute top-0 left-0 w-full h-full bg-cover bg-center'
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <div className='z-3 absolute top-0 left-0 w-full h-full bg-black bg-opacity-60'></div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={AuthSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => {
          return (
            <Form className='flex justify-center min-h-screen relative'>
              <div className='z-4 w-2/5 flex flex-col my-auto gap-5 items-center bg-black bg-opacity-70 py-10 shadow-2xl'>
                <p
                  className={`text-2xl mb-5 ${
                    type === 'Register' ? 'text-blue-500' : 'text-orange-500'
                  }`}
                >
                  {type}
                </p>
                <div className='flex flex-col w-3/5'>
                  <Field
                    className='p-3 bg-slate-100 bg-opacity-20 rounded text-sm focus:outline-none'
                    type='email'
                    name='email'
                    placeholder='Email'
                  />
                  <ErrorMessage
                    name='email'
                    component='div'
                    className='text-xs text-red-500 pt-1'
                  />
                </div>
                <div className='flex flex-col w-3/5'>
                  <Field
                    className='p-3 bg-slate-100 bg-opacity-20 rounded text-sm focus:outline-none'
                    type='password'
                    name='password'
                    placeholder='Password'
                  />
                  <ErrorMessage
                    name='password'
                    component='div'
                    className='text-xs text-red-500 pt-1'
                  />
                </div>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`${
                    type === 'Register' ? 'bg-blue-500' : 'bg-orange-500'
                  }  py-1 px-5 text-white mt-5 opacity-70 rounded px-5 py-2`}
                >
                  {type}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AuthPage;
