import { Mission } from 'types'

interface Result {
    [key: string]: Mission[]
}

export const formatDate = (date: string, language?: string) => {
    const selectedLanguage = language === 'es' ? 'es-ES' : 'en-GB'
    return new Intl.DateTimeFormat(selectedLanguage, {
        dateStyle: 'long',
    })
        .format(new Date(date))
        .replace(/de/g, '')
}

export const groupMissionsByDay = (data?: Mission[]) => {
    if (!data) return {}
    const result: Result = {}
    data?.forEach((element: Mission) => {
        const day = element.date?.slice(0, 10)

        if (!result[day]) {
            result[day] = []
        }

        return result[day].push(element)
    })

    return result
}
