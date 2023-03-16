import fetch from 'isomorphic-fetch';
export const isCapatchaVaild = async (capatchaValue) => {
  const URL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_CAPATCHA}&response=${capatchaValue}`;

  const data = await fetch(URL, { method: 'POST' });
  const response = await data.json();
  return response.success ? true : false;
};
