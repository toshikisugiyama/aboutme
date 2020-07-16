import Link from 'next/link'
import { useRouter, NextRouter } from 'next/router'
import { HeaderInfoType } from '../types'
import styles from '../styles/header.module.scss'
import Capitalize from '../components/Capitalize'
const Header = () => {
  const router: NextRouter = useRouter()
  const headerInfo: HeaderInfoType =
    router.pathname === '/blog/[id]'
    ? {title: {en: 'blog', ja: 'ブログ'}, link: {prev: '/blog', next: '/blog'}}
    : router.pathname === '/blog'
    ? {title: {en: 'blog', ja: 'ブログ'}, link: {prev: '/', next: '/portfolio'}}
    : router.pathname === '/portfolio'
    ? {title: {en: 'portfolio', ja: 'ポートフォリオ'}, link: {prev: '/blog', next: '/contact'}}
    : router.pathname === '/contact'
    ? {title: {en: 'contact', ja: '連絡'}, link: {prev: '/portfolio', next: '/'}}
    : {title: {en: 'sugiyama toshiki', ja: '杉山 俊樹'}, link: {prev: '/contact', next: '/blog'}}
  const profileImage: string = '/images/profile.svg'
  return (
    <header>
      <section className={`container ${styles.container}`}>
        <h1 className={styles.title_en}>{Capitalize(headerInfo.title.en)}</h1>
        <div className={styles.profile_image}>
          <img src={profileImage} alt="profile image" width={150} height={150} />
        </div>
        <h2 className={styles.title_ja}>{headerInfo.title.ja}</h2>
        <Link href={headerInfo.link.prev}><a className={`${styles.array} ${styles.array__left}`}>&lt;</a></Link>
        <Link href={headerInfo.link.next}><a className={`${styles.array} ${styles.array__right}`}>&gt;</a></Link>
      </section>
    </header>
  )
}

export default Header