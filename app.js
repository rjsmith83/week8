
// bring in Express
var express = require('express');
var app = express();

// set up the Handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// tell express to find static files in the "public" directory
app.use(express.static('public'));

//body parser -- for form processing
app.use(require('body-parser').urlencoded({extended:true}));


// --- ROUTES --- //

//Main Page
app.get('/',function(req,res){	
	res.render('enterName');	
});



// handle the post to the form
app.post('/compliment',function(req,res){
	//Array of compliments
	var comps =[
	"Your smile is contagious.", 
	"You look great today.", 
	"You're a smart cookie.", 
	"On a scale from 1 to 10, you're an 11." 
	"You're all that and a super-size bag of chips.",
	"You're even more beautiful on the inside than you are on the outside.",
	"If you were a box of crayons, you'd be the giant name-brand one with the built-in sharpener.",
	"You're like sunshine on a cloudy day.",
	"You're more fun than bubble wrap."
	]; 
	var yourcompliment = comps[Math.floor(Math.random()*comps.length)];
    data = {
    	greeting: "Greetings, " + req.body.yourname  + "!" + " " + yourcompliment
    };
    res.render('yourCompliment', data);
	
});

// start server
app.listen(8000, function(){
	console.log( 'Express started on port 8000; press Ctrl-C to terminate.' );
});