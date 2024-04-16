//import { MongoClient, ServerApiVersion } from 'mongodb'
import mongoose from 'mongoose'
const uri = process.env.ATLAS_URI
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
/* const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const conexion = async function connect () {
  try {
    await client.connect()
    const database = client.db('database')
    return database.collection('empresa')
  } catch (error) {
    console.error('Error connecting to the database')
    console.error(error)
    await client.close()
  }
}*/
export const conexion = async function connect(){
      try {
        await mongoose.connect(uri)
        
      } catch (error) {
        console.log(error)
      }
}