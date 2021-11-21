import { useRef, useState } from 'react'
import classes from './index.module.scss'
import { GiftIcon, FacebookIcon, InstagramIcon, PlayIcon } from '@/icons/index'
import { Mission } from '../../new-types'

type FeedItemProps = {
    mission: Mission
}

export const FeedItem = ({ mission }: FeedItemProps) => {
    const isFacebookItem = mission.__typename === 'FBPostMission'
    const isInstagramItem = mission.__typename === 'IGStoryMission'

    const videoRef = useRef<HTMLVideoElement>(null)
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)

    const videoHandler = () => {
        videoRef?.current?.play()
        setIsVideoPlaying(true)
    }

    return (
        <div className={classes.feedItem} key={mission.date}>
            <div className={classes.mediaContainer}>
                {isFacebookItem && (
                    <img
                        src={mission?.image?.src2x}
                        alt={mission?.image?.alt || ''}
                    />
                )}

                {isInstagramItem && (
                    <>
                        <video src={mission.video.src} ref={videoRef} />

                        {!isVideoPlaying && (
                            <PlayIcon
                                className={classes.playIcon}
                                onClick={videoHandler}
                            />
                        )}
                    </>
                )}

                <span className={classes.label}>
                    cash
                    <span className={classes.circle}></span>
                    {isFacebookItem ? <FacebookIcon /> : <InstagramIcon />}
                </span>
            </div>

            <div className={classes.contentContainer}>
                <h2 className={classes.title}>{mission.title}</h2>
                <div className={classes.rewardContainer}>
                    <GiftIcon className={classes.giftIcon} />
                    <span className={classes.reward}>Reward </span>{' '}
                    <span className={classes.dollarSign}> $ </span>{' '}
                    {mission.cashReward}
                </div>
            </div>
        </div>
    )
}
