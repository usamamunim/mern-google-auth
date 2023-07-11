import * as Yup from 'yup';

export const AuthSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email is required'),
  password: Yup.string().min(2, 'Too shot!').max(20, 'Too long!'),
});
