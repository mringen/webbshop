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

  // generateProduct to collection
  function generateProduct() {

      const name = ['caravan', 'plate', 'hammer', 'sofa']
  	  const price = [256, 785, 156, 198]
  	  const category = ['vehicle', 'kitchen', 'construction', 'living room']

      let productDocs = [];
      for(let i=0; i<400000; i++) {
        let randomName = Math.floor(Math.random() * name.length);
        let randomPrice = Math.floor(Math.random() * price.length);
        let randomCategory = Math.floor(Math.random() * category.length);

        productDocs.push({name: name[Math.floor(randomName)], price: price[Math.floor(randomPrice)], category: category[Math.floor(randomCategory)]})
      }

      collection.insertMany(productDocs, (error, response) => {
          if(error) {
            throw error;
            console.log('error insertOne');
          }
          console.log('succsess insertOne: ', response);
          client.close()
        })
  }

generateProduct()

});
