import styles from '../styles/sns.module.scss'
import { SnsIconType } from '../types'

const snsIcons: Array<SnsIconType> = [
  {name: 'github', url: 'https://github.com/toshikisugiyama'},
  {name: 'qiita', url: 'https://qiita.com/toshikisugiyama'},
  {name: 'twitter', url: 'https://twitter.com/llwz886q'},
  {name: 'facebook', url: 'https://www.facebook.com/toshiki.sugiyama.31'},
  {name: 'instagram', url: 'https://www.instagram.com/axa81468'}
]

const Sns = (): JSX.Element => (
  <>
    {snsIcons.map((snsIcon: SnsIconType): JSX.Element => {
      const srcUrl: string = `https://raw.githubusercontent.com/toshikisugiyama/aboutme/master/src/public/images/snsIcons/${snsIcon.name}.svg`
      return (
        <div key={snsIcon.name} className={styles.icon}>
          <a href={snsIcon.url}>
            <img src={srcUrl} alt={snsIcon.name} width={30} height={30} />
          </a>
        </div>
      )
    })}
  </>
)

export default Sns