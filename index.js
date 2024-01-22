//console.log(process.argv)//this shows an array consisting of the node path, the actual path, and whatever arguments you pass into the terminal. EX: node index.js foo bar baz
//const foo = process.argv[2]
//foo is number 3 in the array!
//console.log(foo)

//typing env into the terminal shows you a list on environment variables
//console.log(process.env)//you would use this to get access to the environment variables
//console.log(process.env.USER)//to get access to the USER variable inside the environment variables()says jovan which is me 😉

const express = require('express');
const server = express();

server.use(express.json());//teaches this server to read JSON from request bodies

server.get('/hello', (req, res) => {
  res.json('hello, there');
});



server.use('*', (req, res) => {
  res.json({ message: 'API is UP!' })
});


  const port = process.env.PORT || 9000
  //heroku requires you have a start script and a port that is grabbed from the heroku environment


server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
