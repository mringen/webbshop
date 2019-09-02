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

function dropIndex() {
  collection.dropIndex( "category_-1_price_-1", (error, response) =>  {
		if(error) {
			console.log('error when dropIndex');
			throw error;
		} else {
			console.log('index were deleted');
		}
	})
 client.close()
}

dropIndex()

});
