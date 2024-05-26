const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Database is Connected Successfully');
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
};

module.exports = dbConnect;
