// app.js

const express = require('express');
const { MongoClient } = require('mongodb');
const cors= require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Define a route to retrieve data from MongoDB

//Gets experience collection
app.get('/api/experience', async (req, res) => {
  const uri = 'mongodb+srv://enowmyke944:eNow123Eta@portfolio.ttm7djt.mongodb.net/?retryWrites=true&w=majority';
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const collection = client.db('PortfolioData').collection('experience');
    const data = await collection.find().toArray();
    res.json(data);
  } catch (err) {
    console.log(err.stack);
    res.status(500).send('Something went wrong.');
  }
  client.close();
});


//Gets services collection
app.get('/api/services', async (req, res) => {
    const uri = 'mongodb+srv://enowmyke944:eNow123Eta@portfolio.ttm7djt.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await client.connect();
      const collection = client.db('PortfolioData').collection('services');
      const data = await collection.find().toArray();
      res.json(data);
    } catch (err) {
      console.log(err.stack);
      res.status(500).send('Something went wrong.');
    }
    client.close();
  });

  //Gets projects collection
  app.get('/api/projects', async (req, res) => {
    const uri = 'mongodb+srv://enowmyke944:eNow123Eta@portfolio.ttm7djt.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await client.connect();
      const collection = client.db('PortfolioData').collection('projects');
      const data = await collection.find().toArray();
      res.json(data);
    } catch (err) {
      console.log(err.stack);
      res.status(500).send('Something went wrong.');
    }
    client.close();
  });

//Set listening port to process enviroment if no process environment set to Port 5000 
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});