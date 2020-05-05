
// To import database
const sqlite = require('sqlite3').verbose();
let db = my_database('./phones.db');

// To import express
var express = require("express");
var app = express();

// To import body-parser
var bodyParser = require("body-parser");
app.use(bodyParser.json());

// MIME type
app.use(function(req, res, next) {
    res.setHeader("Content-Type", "application/json");
    next();
});

// Retrieve item by ID
app.get('/phones/:id', function(req, res) {
    db.all(`SELECT * FROM phones WHERE id=?`, [req.params.id], (err, rows) => {

        if (err) {
            // In case of error, send 404 HTTP status code
            res.status(404).json({error: "Not found"});
        }
        else {
            console.log("Displaying item with ID " + req.params.id);
            // In case of successful request, send 200 HTTP status code and the requested data
            return res.status(200).json(rows);
        }
    });
});

// Retrieve item by brand
app.get('/phones/brands/:brand', function(req, res)   {
    db.all(`SELECT * FROM phones WHERE brand=?`, [req.params.brand], (err, rows) => {

        if (err) {
            // In case of error, send 404 HTTP status code
            res.status(404).json({error: "Not found"});
        }
        else {
            console.log("Displaying all products of " + req.params.brand);
            // In case of successful request, send 200 HTTP status code and the requested data
            return res.status(200).json(rows);
        }
    });
});

//Retrieve item by model
app.get('/phones/models/:model', function(req, res)   {
    db.all(`SELECT * FROM phones WHERE model=?`, [req.params.model], (err, rows) => {

        if (err) {
            // In case of error, send 404 HTTP status code
            res.status(404).json({error: "Not found"});
        }
        else {
            console.log("Displaying the following model: " + req.params.model);
            // In case of successful request, send 200 HTTP status code and the requested data
            return res.status(200).json(rows);
        }
    });
});

//Retrieve item by OS
app.get('/phones/OS/:os', function(req, res)   {
    db.all(`SELECT * FROM phones WHERE os=?`, [req.params.os], (err, rows) => {

        if (err) {
            // In case of error, send 404 HTTP status code
            res.status(404).json({error: "Not found"});
        }
        else {
            console.log("Displaying products ruuning on: " + req.params.os);
            // In case of successful request, send 200 HTTP status code and the requested data
            return res.status(200).json(rows);
        }
    });
});

// Retrieve all Data
app.get('/phones', function(req, res) {
    db.all(`SELECT * FROM phones`, function(err, rows) {

        if (err) {
            // In case of error, send 404 HTTP status code
            res.status(404).json({error: "Not found"});
        }
        else {
            console.log("Displaying all data.");
            // In case of successful request, send 200 HTTP status code and the requested data
            return res.status(200).json(rows);
        }
    });
});

// Delete item
app.delete('/phones/:id', function(req, res)   {
    db.run(`DELETE FROM phones WHERE id=?`, [req.params.id], (err, rows) => {

        if (err) {
            console.log(err);
            // In case of error, send 404 HTTP status code
            res.status(404).json({error: "Not found"});
        }
        else {
            console.log("Item " + req.params.id + " has been deleted successfully.");
            // In case of successful request, send 204 HTTP status code
            return res.status(204);
        }
    });
});

// Insert new item
app.post('/phones', function(req, res)   {
    var item = 
    {
        brand: req.body.brand,
        model: req.body.model,
        os: req.body.os,
        image: req.body.image,
        screensize: req.body.screensize    
    }

    db.run(`INSERT INTO phones (brand, model, os, image, screensize)
    VALUES (?, ?, ?, ?, ?)`,
    [item['brand'], item['model'], item['os'], item['image'], item['screensize']], (err,rows) => {

        if (err) {
            // In case of error, send 404 HTTP status code
            res.status(404).json({error: "Not found"});
            console.log(err);
        }
        else {
            console.log("New item has been added successfully");
            // In case of successful request, send 201 HTTP status code
            return res.status(201).send("New item has been added successfully");

        }
    });
});

// Update an existing item
app.put('/phones', function (req, res) {
    var item = 
    {
            brand: req.body.brand,
            model: req.body.model,
            os: req.body.os,
            image: req.body.image,
            screensize: req.body.screensize,
            id: req.body.id      
    }

    db.run(`UPDATE phones SET brand=?, model=?, os=?, image=?, screensize=? WHERE id=?`,
    [item['brand'], item['model'], item['os'], item['image'], item['screensize'], item['id']], (err, rows) => {
        if (err)   {
            console.log(err);
            // In case of error, send 404 HTTP status code
            res.status(404).json({error: "Not found"});
        }
        else {
            console.log("Item " + item['id'] + " has been updated successfully");
            // In case of successful request, send 204 HTTP status code
            return res.status(204).json();  
        }
    });
});

app.listen(3000);

function my_database(filename) {

    // Connect to db by opening filename, create filename if it does not exist:
    var db = new sqlite.Database(filename, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Connected to the phones database.');
    });

    // Create our phones table if it does not exist already:
    db.serialize(() => {
        db.run(`
        	CREATE TABLE IF NOT EXISTS phones
        	(id 	INTEGER PRIMARY KEY,
        	brand	CHAR(100) NOT NULL,
        	model 	CHAR(100) NOT NULL,
        	os 	    CHAR(10) NOT NULL,
        	image 	CHAR(254) NOT NULL,
        	screensize INTEGER NOT NULL
        	)`);
        db.all(`select count(*) as count from phones`, function(err, result) {
            // Display how many items in database at startup
            if (result[0].count == 0) {
                console.log('Database is empty at startup.');
            } else {
                console.log("Database already contains", result[0].count, " item(s) at startup.");
            }
        });     
    });
    return db;
}
