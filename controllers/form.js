import { FormModel } from '../models/form.js'
import { validateForm} from '../schemas/validacion.form.js'

export class FormController {
  static async getAll (req, res) {
    const form = await FormModel.getAll()
    res.json(form)
  }
  static async create (req, res) {
    const result = validateForm(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newForm = await FormModel.create({ input: result.data })

    res.status(201).json(newForm)
  }
}