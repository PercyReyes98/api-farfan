import { conexion } from "../database/conection.js"

export class FormModel {
  static async getAll () {
    const db = await conexion()
      return db.find().toArray()
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