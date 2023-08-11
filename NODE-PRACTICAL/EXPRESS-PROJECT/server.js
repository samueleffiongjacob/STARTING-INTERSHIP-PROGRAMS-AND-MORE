const express = require('express')
const path = require('path')
// const hbs = require('express-hbs')

const meRouter = require('./routes/me.routes')
const bigRouter = require('./routes/big.routes')
const viewRouter = require('./routes/view.routes')
const app = express()

// using more advance render engine
// Use `.hbs` for extensions and find partials in `views/partials`.

// view engine
app.set('views', __dirname + '/views/');
app.set('view engine', 'hbs');
var hbs = require('handlebars');
hbs.registerHelper("inc", function(value, options)
{
    return parseInt(value) + 1;
});
// app.engine('handlebars', engines.handlebars);

// app.engine('hbs', hbs.express4({
//   partialsDir: __dirname + '/views/partials'
// }));


// app.set('view engine','hbs');
// app.set('views',path.join(__dirname, 'views'))

// hbs.registerAsyncHelper('readFile', function(filename, cb) {
//   fs.readFile(path.join(viewsDir, filename), 'utf8', function(err, content) {
//     cb(new hbs.SafeString(content));
//   });
// });
const port = 9000;

// middle ware

app.use ((req,res,next) => {
	const start = Date.now();
	next();
	// action of midleware
	// finding how long bigControllertime it took
	const delta = Date.now() - start;
	console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
})

// sending data from front end to backend
app.use(express.json());

// RENDERING A STIC PAGE ON SERVER
// u could use hbs --save or ejs
app.use("/site",express.static(path.join(__dirname, "public",'-HTML-and-CSS-zuri')))

app.get('/', (req,res) =>{
	res.render('index' ,{
		title: "SAMUEL EFFIONG"
	})
})

 // using the routers
app.use("/me", meRouter)
app.use("/big", bigRouter)
app.use("/views", viewRouter)

// templeting engine render on routes

//server spingup
app.listen(port, () => {
	console.log(`server listening on port ${port}.... welcome`)
})