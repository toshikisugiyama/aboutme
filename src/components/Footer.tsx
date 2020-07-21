import { PageType } from '../types'
import styles from '../styles/footer.module.scss'
import Navi from '../components/Navi'
import Sns from '../components/Sns'
import CopyRight from '../components/Copyright'

const Footer = ({fileNames}: {fileNames: Array<PageType>}) => (
  <footer className={styles.footer}>
    <nav className={styles.nav}>
      <Navi fileNames={fileNames} />
    </nav>
    <div className={styles.sns_icons}>
      <Sns />
    </div>
    <CopyRight />
  </footer>
)

export default Footer