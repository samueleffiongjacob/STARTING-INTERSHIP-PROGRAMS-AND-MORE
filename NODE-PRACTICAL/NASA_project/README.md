// old way of running both serve and client together

"server": "cd server && npm run watch",
"client": "cd client && npm start",

// new way of running both serve and client together//

"server": "npm run watch --prefix server",
"client": "npm start --prefix client"

// run the two serve in root package.json

"watch": "npm run server & npm run client"

npm run server



// install two server dependencies
"install-server": "npm install --prefix server",

"install-client": "npm install --prefix client"

// install both
"install": "npm run install-server && npm run install-client"

//to test
"test": "npm run test --prefix server && npm run test --prefix client",

// run npm i

//for  production go to the client folder
"build": "BUILD_PATH=../server/public react-scripts build",

// for windows
build": "set BUILD_PATH=../server/public&& react-scripts build",

// then do
npm run build

// Deploying all in one step:
"deploy": "npm run build --prefix client && npm start --prefix server"

// then to deploy:
npm run deploy
// for yarn
yarn --cwd client build  && yarn --cwd server start
app.use (morgan('combined'))

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req,res) => {
    res.sendIle(path.join(__dirname, '..','public','index.html'));
})

