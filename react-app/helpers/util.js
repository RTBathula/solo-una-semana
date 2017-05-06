import cookie from 'react-cookie'
import _ from 'underscore'
import * as localDb from './localDb'

export const validarEmail = (email) => {
  let expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return expr.test(email);
};

export const capitalizeFirstLetter = (txt) => {
  return txt.charAt(0).toUpperCase() + txt.slice(1);
};

export const getTokenFromCookie = () => {
  let token = cookie.load('token');
  return token ? token : null;
};

export const setTokenInCookie = (token) => {
  cookie.save('token', token, { path: '/' });
};

export const removeTokenFromCookie = () => {
  cookie.remove('token', { path: '/' });
};

export const getUserIdFromCookie = () => {
  let token = cookie.load('token');
  return token ?  JSON.parse(new Buffer(token.split('.')[1], 'base64').toString()).userId : null;
};

export const getRandomColor = () => {
  return _.sample(localDb.colors)
}

export const getRandomHeight = () => {
  return _.sample(localDb.heights)
}

export const getColorByName = (name) => {
  return _.first(_.where(localDb.colors, {name: name}))
}

export const getBasicByName = (name) => {
  return _.first(_.where(localDb.heights, {name: name}))
}