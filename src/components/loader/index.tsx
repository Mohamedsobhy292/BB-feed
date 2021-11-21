import { LoaderIcon } from '@/icons/index'
import classes from './index.module.scss'

export const Loader = () => {
    return (
        <div className={classes.loaderContainer}>
            <LoaderIcon className={classes.loader} />
        </div>
    )
}
