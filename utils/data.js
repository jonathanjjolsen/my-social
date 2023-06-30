//Mock usernames to be used for seed generation
const usernames = [
    'addressfuneral',
    'woodchuckinternet',
    'gingerstatement',
    'ailsensitive',
    'scrollduct',
    'fastminister',
    'metacarpalmanagement',
    'alreadysort',
];

//Mock emails to be used for seed generation
const emails = [
'lstein@optonline.net',
'panolex@comcast.net',
'hamilton@live.com',
'bigmauler@aol.com',
'pontipak@msn.com',
'gospodin@aol.com',
'flakeg@optonline.net',
'mirod@hotmail.com',
'fwiles@gmail.com',
'tezbo@gmail.com',
'crobles@aol.com',
'ghost@aol.com',
];

//Picks out a random item from an array
const randomGen = (arr) => arr[Math.floor(Math.random() * arr.length)];

//Get a random Username
const randomUsername = () =>
randomGen(usernames);

//Get a random email
const randomEmail = () =>
randomGen(emails);

module.exports = { randomUsername, randomEmail };

