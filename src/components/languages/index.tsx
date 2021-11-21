import { useTranslation } from 'react-i18next'
import classes from './index.module.scss'

interface LanguagesProps {
    selectedLanguage: string
    setSelectedLanguage: (language: string) => void
}
const languages = [
    {
        name: 'english',
        symbol: 'en',
    },
    {
        name: 'spanish',
        symbol: 'es',
    },
]
export const Languages = ({
    selectedLanguage,
    setSelectedLanguage,
}: LanguagesProps) => {
    const { t, i18n } = useTranslation()
    const handleClick = (language: string) => {
        i18n.changeLanguage(language)
        setSelectedLanguage(language)
    }
    return (
        <div>
            <ul className={classes.languagesList}>
                {languages.map((language) => {
                    return (
                        <li
                            onClick={() => handleClick(language.symbol)}
                            className={`${classes.languageItem} ${
                                selectedLanguage === language.symbol
                                    ? classes.isActive
                                    : ''
                            } `}
                            key={language.symbol}
                        >
                            {language.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
