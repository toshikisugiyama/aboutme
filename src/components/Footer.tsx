import { SnsIconType, PageType } from '../types'
import styles from '../styles/footer.module.scss'
import Capitalize from '../components/Capitalize'
import Navi from '../components/Navi'

const copyRight = (): JSX.Element => {
  const name: string = 'sugiyama toshiki'
  const firstYear: number = 2020
  const thisYear: number = new Date().getFullYear()
  const year: string = firstYear < thisYear ? `${firstYear} - ${thisYear}` : `${firstYear}`
  return <span>&#169;{` ${year} ${Capitalize(name)}`}</span>
}
const snsIcons: Array<SnsIconType> = [
  {name: 'github', url: 'https://github.com/toshikisugiyama'},
  {name: 'qiita', url: 'https://qiita.com/toshikisugiyama'},
  {name: 'twitter', url: 'https://twitter.com/llwz886q'},
  {name: 'facebook', url: 'https://www.facebook.com/toshiki.sugiyama.31'},
  {name: 'instagram', url: 'https://www.instagram.com/axa81468'}
]
const image: string = '/images/snsIcons/'
const Footer = ({fileNames}: {fileNames: Array<PageType>}) => (
  <footer className={styles.footer}>
    <nav className={styles.nav}>
      <Navi fileNames={fileNames} />
    </nav>
    <div className={styles.sns_icons}>
      {snsIcons.map((item: SnsIconType) => (
        <div key={item.name} className={styles.sns_icon}>
          <a href={item.url}>
            <img src={`${image}${item.name}.svg`} alt={item.name} width={30} height={30} />
          </a>
        </div>
      ))}
    </div>
    <div> {copyRight()} </div>
  </footer>
)

export default Footer