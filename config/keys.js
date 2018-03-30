// since this is not es2017, we can do logic if/else before require
// but not so on the front-end
// import syntax cannot be preceded by logic code

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
