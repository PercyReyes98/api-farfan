import { conexion } from "../database/conection.js"
import mongoose from "mongoose"

export class ReportModel {
  static async getAll () {
    const db = await conexion()
      return db.find().populate('empresa').toArray()
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