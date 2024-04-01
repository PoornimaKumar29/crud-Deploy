import { client, connectToDatabase } from "../database/db.js";
import axios from "axios";


export const fetchDataFromDummyJson = async () => {
  try {
    // Fetch data from the API
    const response = await axios.get('https://dummyjson.com/products?limit=10');
      return response.data.products; // Assuming the API returns an array of objects
  } catch (error) {
    console.error('Error fetching data from dummy.json:', error);
    throw error;
  }
};


export const createUser = async (req,res) => {
  try {
    // Establish MongoDB connection
    await connectToDatabase(); 
    const database = client.db('dummyJson');
    const productsCollection = database.collection('products');
    
    // Fetch data from the API
    const productsData = await fetchDataFromDummyJson();
    // console.log(productsData)
    
    // const arrayData = Array.entries(productsData).map(([key, value]) => ({ [key]: value }));
    // console.log("Converted array data:", arrayData);
    
    const insert =await productsCollection.insertMany(productsData);
    
    console.log("Inserted products into collection",insert);
    // res.send(insert)

    
    const product = await productsCollection.findOne({ title: 'iPhone 9' });
    console.log("Found product:", product);
    //res.send(product)
    

    
    const updateResult = await productsCollection.updateOne(
      { price: 899 },
      { $set: { title: 'iPhone 14' } },
      { upsert: true }
    );
    
    res.send(updateResult)
    console.log("Updated document:", updateResult);

    
    const deleteResult = await productsCollection.deleteOne({ title: "OPPOF19" });
    
    console.log("Deleted document:", deleteResult);
    
  } catch (error) {
    console.error("Error performing tasks:", error);
   } 
  //finally {
    
  //   await client.close();
  // }
};


