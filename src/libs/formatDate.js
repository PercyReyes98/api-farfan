import { format } from 'date-fns'

export const formatDate = (date) => {
    const timeZone = 'America/Lima'
    const zonedDate = new Date(date).toLocaleString('es-PE', { timeZone })
    return format(new Date(zonedDate), 'dd/MM/yyyy HH:mm:ss')
}
