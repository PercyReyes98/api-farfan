import z from 'zod'

const formSchema = z.object({
  ruc: z.string(),
  name: z.string(),
  periodo: z.string(),
  ejercicio: z.string(),
})

export function validateForm (input) {
  return formSchema.safeParse(input)
}