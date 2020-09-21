const express = require('express');
const connectDB = require('./config/db-atlas');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
//Connect database
connectDB();

app.get('/', (req, res) => res.send('This is Server'));

// Define Routes
app.use('/api/v1/kind-of-rooms', require('./routes/api/kind-of-room.route'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
