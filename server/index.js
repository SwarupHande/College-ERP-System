const express = require('express');
const cors = require('cors');
require('dotenv').config();
const dbConnect = require('./config/dbConnect');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000,
  })
);
// database connection
dbConnect();
//Routes
const feereceiptRoute = require('./Routes/feeReceipt');
const certificateRoute = require('./Routes/certificate');
const userRoute = require('./Routes/user');
const salaryRoute = require('./routes/salary');

app.use('/feereceipt', feereceiptRoute);
app.use('/certificate', certificateRoute);
app.use('/user', userRoute);
app.use('/salary', salaryRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
