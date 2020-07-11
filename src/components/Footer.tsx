import { SnsIconType } from '../types'
import styles from '../styles/footer.module.scss'
const snsIcons: Array<SnsIconType> = [
  {name: 'github', url: 'https://github.com/toshikisugiyama'},
  {name: 'qiita', url: 'https://qiita.com/toshikisugiyama'},
  {name: 'twitter', url: 'https://twitter.com/llwz886q'},
  {name: 'facebook', url: 'https://www.facebook.com/toshiki.sugiyama.31'},
  {name: 'instagram', url: 'https://www.instagram.com/axa81468'}
]
const image: string = '/images/snsIcons/'
const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.sns_icons}>
      {snsIcons.map((item: SnsIconType) => (
        <div key={item.name} className={styles.sns_icon}>
          <a href={item.url}>
            <img src={`${image}${item.name}.svg`} alt={item.name} width={30} height={30} />
          </a>
        </div>
      ))}
    </div>
  </footer>
)

export default Footer