const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI || 'mongodb://tai:taitai1@ds034797.mlab.com:34797/mojabaza',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;