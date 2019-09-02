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


  function createIndex() {
      let newIndex = { category: -1, price: -1 }
    collection.createIndex( newIndex, (error, response) => {
      if(error) {
        console.log('error to create index');
        throw error;
      } else {
        console.log(' new index was created: ', newIndex);
      }
    })
    client.close()
  }

  createIndex()

});
