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

//Get a random Username
const randomUsername = () => {
    const index = Math.floor(Math.random() * usernames.length);
    const selectedUsername = usernames[index];
    usernames.splice(index, 1);

    return selectedUsername;
}

//Get a random email
const randomEmail = () => {
    const index = Math.floor(Math.random() * emails.length);
    const selectedEmail = emails[index];
    emails.splice(index, 1);

    return selectedEmail;
}

module.exports = { randomUsername, randomEmail };

