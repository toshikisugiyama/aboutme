import Footer from './Footer'
import { TitleType } from '../types'
import styles from '../styles/layout.module.scss'
const title: TitleType  = {en: 'Sugiyama Toshiki', ja: '杉山俊樹'}
const profileImage: string = '/images/profile.svg'
const Layout = ({ children }: { children: JSX.Element }) => (
  <>
    <header>
      <section className={`container ${styles.container}`}>
        <h1 className={styles.title_en}>{title.en}</h1>
        <div className={styles.profile_image}>
          <img src={profileImage} alt="profile image" width={100} height={100} />
        </div>
        <h2 className={styles.title_ja}>{title.ja}</h2>
      </section>
    </header>
    <main>
      {children}
    </main>
    <Footer />
  </>
)

export default Layout