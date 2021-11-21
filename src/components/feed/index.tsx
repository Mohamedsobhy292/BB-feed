import { Mission } from 'new-types'
import { useEffect } from 'react'
import { FeedItem } from './feed-item'
import { groupMissionsByDay, formatDate } from './helpers'
import classes from './index.module.scss'

interface FeedProps {
    data?: Mission[]
    fetchMore: () => void
    isLoading: boolean
    hasNextPage: boolean
}

export const Feed = ({
    data,
    fetchMore,
    isLoading,
    hasNextPage,
}: FeedProps) => {
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    const handleScroll = () => {
        const onTheEndofPage =
            window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight
        if (onTheEndofPage || isLoading || !hasNextPage) return
        fetchMore()
    }

    const groupedMissions = groupMissionsByDay(data)
    const missionsData = Object.keys(groupedMissions).map((date) => {
        return {
            date,
            missions: groupedMissions[date],
        }
    })

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
