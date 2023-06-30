connection = require('../config/connection');
const { User } = require('../models');
const { randomUsername, randomEmail } = require('./data');

connection.once('open', async () => {
    console.log('You are connected');
    let userCheck = await connection.db.listCollections({ name: 'users'}).toArray();
    if(userCheck.length) {
        await connection.dropCollection('users');
    }
    
    const users = [];
    
    for(let i = 0; i < 5; i++) {
        const username = randomUsername();
        const email = randomEmail();
        
        users.push({
            username,
            email
        });
    }
    
    await User.collection.insertMany(users);
    
    console.table(users);
    console.info('Seeding Completed');
    process.exit(0);
});