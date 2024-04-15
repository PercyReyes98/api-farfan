import z from 'zod'

const reportSchema = z.object({
  //datos de la empresa
  ruc: z.string(),
  name: z.string(),
  periodo: z.string(),
  ejercicio: z.string(),
  ingresos_recaudados: {
                bcp: z.number(),
                bbva: z.number(),
                interbank: z.number(),
                ingresos_total: z.number()
              },
  proyecciones :{
                ventas_valor: z.number(),
                ventas_igv: z.number(),
                ventas_total: z.number(),
                adquiridas_valor: z.number(),
                adquirirdad_igv: z.number(),
                adquiridas_total: z.number()
              },
  determinacion_de_impuestos: {
                      igv_del_periodo: z.number(),
                      credito_a_favor_anterior: z.number(),
                      igv_por_devolver: z.number(),
                      impuesto_a_la_renta_mensual: z.number(),
                      impuesto_total: z.number()
                    }
})

export function validateReport (input) {
  return reportSchema.safeParse(input)
}