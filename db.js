// I'm going to handle everythiig which is related with my
// DB Configuration

import { MongoClient } from 'mongodb'

const url = "mongodb+srv://poornimakumar2907:ngHzZG1fs89afL26@cluster0.8h3b9xn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"



export const client = new MongoClient(url);

export const connectToDatabase = async() => {
  try {
    await client.connect();
    console.log("DB CONNECTION SUCCEEDED")
  } catch (error) {
    console.log(error)
  }
}

