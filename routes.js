const Home = require('./controllers/home');
{
method:
'GET',
path: '/',
handler: Home,
config: {
description: 'Gets all the notes available'
} }
