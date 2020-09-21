const mongoose = require('mongoose');
const config = require('config');
const dbAtlas = config.get('mongoURIAtlas');

const connectDB = async () => {
    try {
        await mongoose.connect(dbAtlas, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;
