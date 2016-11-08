//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

var mongoose = require("mongoose");
var Book = require('../models/book');

//Require the dev-dependencies
var server = require('../server');
var should = require('should');
var request = require("supertest");

//Our parent block
describe('Books', () => {
    beforeEach((done) => { //Before each test we empty the database
        Book.remove({}, (err) => { 
           done();         
        });     
    });
 /*
  * Test the /GET route
  */
  describe('/GET book', () => {
      it('it should GET all the books', (done) => {
        request(server)
            .get('/book')
            .expect(200)
            // If you are using the .end() method .expect() assertions that fail will not throw -
            // they will return the assertion as an error to the .end() callback. 
            // In order to fail the test case, 
            // you will need to rethrow or pass err to done(), as follows
            .end((err, res) => {
                
                if(err) return done(err);
                //res.should.have.status(200);
                //res.body.should.be.a('array');
                //res.body.length.should.be.eql(0);
                //console.log(res.body);
                res.status.should.equal(200);
                res.body.should.deepEqual([]);
                /*
                res.status.should.equal(200);
                res.body.error.should.equal(false);
                res.body.data.should.equal(40);
                */
              done();
            });
      });
  });

 });

