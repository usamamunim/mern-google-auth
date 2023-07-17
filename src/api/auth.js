import axiosInstance from './axiosInstance';

export const login = async (creds) => {
  try {
    console.log('In login request');
    const result = await axiosInstance.post(
      '/user/login',
      JSON.stringify(creds)
    );
    console.log(result?.data);
    return result?.data;
  } catch (error) {
    console.log(error);
  }
};

export const register = async (creds) => {
  try {
    const result = await axiosInstance.post(
      '/user/register',
      JSON.stringify(creds)
    );
    console.log(result?.data);
    return result?.data;
  } catch (error) {
    console.log(error);
  }
};
