// load the express package and create our app
var express = require('express');
var app = express();

// send our index.html file to the user for the home page 
app.get('/', function(req,res) {
	res.sendFile(__dirname + '/index.html');
});

// create routes for the admin section

// get an instance of the router
var adminRouter = express.Router();

adminRouter.use(function(req, res, next) {
	// log each request to the console
	console.log(req.method, req.url);

	// continue doing what we were doing and go to the route
	next();
});

// admin main page. the dashboard (http://localhost:1337/admin)
adminRouter.get('/',function(req,res){
	res.send('I am the dashboard');
});
// users page (http://localhost:1337/admin/users)
adminRouter.get('/users',function(req,res){
	res.send('I show all the users!');
});

// posts page (http://localhost:1337/admin/posts)
adminRouter.get('/posts',function(req,res){
	res.send('I show all the posts!');
});

//apply the routes to our application
app.use('/admin',adminRouter);

// start the server
app.listen(1337);
console.log('1337 is the magic port!');