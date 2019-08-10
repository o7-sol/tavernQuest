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

/*for(let i = 0; i < 20; i++) {

    const newStackExchangeItem = StackExchange({
        title: 'Elite Weapon',
        img: 'W_Sword016.png',
        user: 'Feknaz',
        userImg: 'necromancer.png',
        type: 'Strength',
        level: 100,
        power: 70,
        price: 2900,
        elite: true,
        createdAt: dayjs().format('YYYY MM DD h:mm:ss A')
    });
    

newStackExchangeItem.save();
}*/

app.use(userRouter);
app.use(itemsRouter);

app.listen(port, () => {
    console.log('server running on port: ' + port);
});