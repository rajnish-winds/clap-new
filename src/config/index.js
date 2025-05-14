const config = {
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'https://pmfbydemo.amnex.co.in'
      : 'https://pmfby.gov.in',

  hashPassword: {
    salt: process.env.SALT,
    iterations: parseInt(process.env.HASH_ITERATIONS, 10),
    keylen: parseInt(process.env.KEYLEN, 10),
    digest: process.env.DIGEST,
  },
  alertDuration: 3000,
  alertType: 'primary',
};

export default config;
