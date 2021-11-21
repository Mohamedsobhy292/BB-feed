import { Mission } from 'new-types'
import { FeedItem } from './feed-item'
import classes from './index.module.scss'

interface FeedProps {
    data?: Mission[]
}

interface Result {
    [key: string]: Mission[]
}

export const Feed = ({ data }: FeedProps) => {
    const groupMissionsByDay = () => {
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

    const groupedMissions = groupMissionsByDay()
    const missionsData = Object.keys(groupedMissions).map((date) => {
        return {
            date,
            missions: groupedMissions[date],
        }
    })

    const formatDate = (date: string) => {
        return new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' }).format(
            new Date(date)
        )
    }

    return (
        <div>
            {missionsData.map((day, index) => {
                return (
                    <div key={index}>
                        <h3 key={index} className={classes.date}>
                            {formatDate(day.date)}
                        </h3>
                        {day.missions.map((mission, index) => {
                            return <FeedItem mission={mission} key={index} />
                        })}
                    </div>
                )
            })}
        </div>
    )
}
