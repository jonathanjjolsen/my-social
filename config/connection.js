//Import mongoose for DB connection
const { connect, connection } = require('mongoose');

//Or statement for default route if variables are unavailable
const connectionString = (process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mySocial')

connect(connectionString);

module.exports = connection;