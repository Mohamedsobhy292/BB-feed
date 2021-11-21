import { Mission } from 'new-types'

interface Result {
    [key: string]: Mission[]
}

export const formatDate = (date: string) => {
    return new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' }).format(
        new Date(date)
    )
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

export const handleScroll = (
    fetchMore: any,
    loading: any,
    hasNextPage: any
) => {
    const onTheEndofPage =
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
    if (onTheEndofPage || loading || !hasNextPage) return
    fetchMore()
}
