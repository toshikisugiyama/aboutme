import { PageType } from '../types'
import styles from '../styles/footer.module.scss'
import Capitalize from '../components/Capitalize'
import Navi from '../components/Navi'
import Sns from '../components/Sns'

const copyRight = (): JSX.Element => {
  const name: string = 'sugiyama toshiki'
  const firstYear: number = 2020
  const thisYear: number = new Date().getFullYear()
  const year: string = firstYear < thisYear ? `${firstYear} - ${thisYear}` : `${firstYear}`
  return <span className={styles.copyright}>&#169;{` ${year} ${Capitalize(name)}`}</span>
}

const Footer = ({fileNames}: {fileNames: Array<PageType>}) => (
  <footer className={styles.footer}>
    <nav className={styles.nav}>
      <Navi fileNames={fileNames} />
    </nav>
    <div className={styles.sns_icons}>
      <Sns />
    </div>
    <div>{copyRight()}</div>
  </footer>
)

export default Footer