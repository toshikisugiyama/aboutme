import styles from '../styles/copyright.module.scss'
import Capitalize from '../components/Capitalize'
const CopyRight = (): JSX.Element => {
  const name: string = 'sugiyama toshiki'
  const firstYear: number = 2020
  const thisYear: number = new Date().getFullYear()
  const year: string = firstYear < thisYear ? `${firstYear} - ${thisYear}` : `${firstYear}`
  return <span className={styles.copyright}>&#169;{` ${year} ${Capitalize(name)}`}</span>
}

export default CopyRight