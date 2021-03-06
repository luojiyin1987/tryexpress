// server.js

//BASE SETUP

// call the packeage we need
var express = require('express');
var app     = express();
var bodyParser =require('body-parser');

var mogoose = require('mongoose');
mogoose.connect('mongodb://mongo:27017/test');

var Bear = require('./app/models/bear.js');

// configure app to use boadyParser()
// this will let us get the date from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;    //set our port


// ROUTES FOR OUR API
var router = express.Router();

router.use(function(req, res, next){
    console.log('Something is happening');
    next();
});



//test route to make sure everything is working (access at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({message: 'hooray! welcome to our api!'});
});


router.route('/bears')
    .post(function(req, res) {
        console.log('bearssddf');
        var bear = new Bear();
        bear.name = req.body.name;
        console.log(bear.name)
        bear.save(function(err) {
            if (err)
                res.send(err);

            
            res.json({ message: 'Bear created!' });
        });

    })

    .get(function(req, res) {
        Bear.find(function(err, bears) {
            if (err)
                res.send(err);


            res.json(bears);
        });
    });

//all of our routes will be prefixed with  /api
app.use('/api', router);


app.listen(port);
console.log('Mageic happens on port  ' + port);
