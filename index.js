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

/*
TO DEPLOY FROM HEROKU APP
step 1: go to heroku.com and create a new account
step 2: click the new button to create a new app
step 3: in the deployment tab of the dashboard, you click on GitHub, make sure GitHub is configured to heroku, then when you see your GitHub username pop up, find the name of your project on GitHub
step 4: click connect and it should say connected, can enable auto-deployment if you want to
step 5: might be better to use manual deployment; scroll down and click deploy branch. you should then see a window opening
step 6: heroku opened up a virtual machine, downloaded all of the resouces and dependencies needed and should give you a message telling you when it has been deployed successfully

TO DEPLOY FROM HEROKU COMMAND LINE
step 1: go to heroku.com and create a new account
step 2: click the new button to create a new app
step 3: this time in the deployment tab, hit heroku git button instead of Github button
step 4: if youdownloaded the heroku cli correctly you should now be able to write heroku commands in the terminal
step 5: can type 'heroku login' to get a pop up to let you log into the application, will tell you inside of the terminal when you are logged in correctly
step 6: type 'heroku git:remote -a' followed by the heroku project name to connect it to your already set up git project
step 7: type 'git push heroku main' to trigger deployment
step 8: when this succeeds you will see a link pop up in the terminal you can click to go to the deployed app

SIDENOTE
  * can type in 'heroku logs -a' followed by the name of your project and ' --tail' to help with troubleshooting. It shows the activity going on in the deployed app

*/

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
