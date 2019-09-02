const dbName = 'webbshop', dbCol = 'products';
const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const server = express()

const url = 'mongodb://localhost:27017';

const settings = {
	useNewUrlParser: true, useUnifiedTopology: true
}

MongoClient.connect(url, settings,  (error, client) => {
	if( error ) throw error;  // if unable to connect
	const db = client.db(dbName);  // ansluten
  let collection = db.collection(dbCol);

  // find the first 8 documents in collection
  function findByLimit() {
    collection.find().limit(8).toArray(function(error, response) {
      if (error) throw error;
      console.log(response);
      client.close();
    });
  }


  findByLimit()

});
