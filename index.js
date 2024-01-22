const express = require('express');
const server = express();

server.use(express.json());

console.log(process.argv)
const foo = process.argv[2]
console.log(foo)

server.get('/hello', (req, res) => {
  res.json('hello, there');
});

server.use('*', (req, res) => {
  res.json({ message: 'API is UP!' })
});

server.listen(9000, () => {
  console.log("\n*** Server Running on http://localhost:9000 ***\n");
});
