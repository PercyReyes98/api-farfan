import z from 'zod'

const companySchemaValidation = z.object({
    //datos de la empresa
    ruc: z.string(),
    name: z.string(),
    period: z.string(),
    exercise: z.string(),
    financeCompany: {
        name: z.string(),
        amount: z.number(),
    }
})

export function validateCompany(objet) {
    return companySchemaValidation.partial().safeParse(objet)
}
