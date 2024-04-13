import { conexion } from "../database/conection.js"

export class FormModel {
  static async getAll ({ genre }) {
    const db = await conexion()
    
    if (genre) {
      return db.find({
        genre: {
          $elemMatch: {
            $regex: genre,
            $options: 'i'
          }
        }
      }).toArray()
    }

    return db.find({}).toArray() 
  }
  static async create ({ input }) {
    const db = await conexion()

    const { insertedId } = await db.insertOne(input)

    return {
      id: insertedId,
      ...input
    }
  }

}