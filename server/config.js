var config = {

  development: {
    dbpath: 'mongodb://localhost/redirecterdev',
    port: 3000,
  },

  production: {
    dbpath: process.env.MONGOLAB_URI,
    port: process.env.PORT || 3000,
  }

};

// Set current environment here
module.exports = config[process.env.NODE_ENV || 'development'];