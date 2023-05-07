export const environment = process.env.NODE_ENV || 'development';
export const isProd = environment === 'production';
export const isDev = environment === 'development';
export const isTest = environment === 'test';

export default {
  environment,
  isProd,
  isDev,
  isTest,
};
