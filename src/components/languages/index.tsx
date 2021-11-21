import classes from './index.module.scss'

export const Languages = () => {
    return (
        <div>
            <ul className={classes.languagesList}>
                <li className={classes.languageItem}>english</li>
                <li className={classes.languageItem}>spanish</li>
            </ul>
        </div>
    )
}
