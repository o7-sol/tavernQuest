const dotenv = require('dotenv').config();
const express = require('express');
const connectToDB = require('./db/connect');
const morgan = require('morgan');
const cors = require('cors');
const ItemDiscount = require('./models/ItemDiscount');
const dayjs = require('dayjs');
const StackExchange = require('./models/StackExchange');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('tiny'));

// Routers
const userRouter = require('./routes/user');
const itemsRouter = require('./routes/items');
const guildRouter = require('./routes/guild');

app.use(userRouter);
app.use(itemsRouter);
app.use(guildRouter);

app.listen(port, () => {
    console.log('server running on port: ' + port);
});