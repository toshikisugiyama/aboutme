import Link from 'next/link'
import { useRouter, NextRouter } from 'next/router'
import { HeaderInfoType, PageType, TitleType } from '../types'
import styles from '../styles/header.module.scss'
import Capitalize from '../components/Capitalize'
import Head from 'next/head'
const Header = ({fileNames}: {fileNames: Array<PageType>}): JSX.Element => {
  const router: NextRouter = useRouter()
  const name: TitleType = {en: 'sugiyama toshiki', ja: 'スギヤマ トシキ'}
  const lastIndex: number = fileNames.length - 1
  const HeaderInfos: Array<HeaderInfoType> = fileNames.map((fileName: PageType, index: number) => {
    const ja: Array<string> = [name.ja, 'ブログ', '連絡', 'ポートフォリオ']
    const en: string = fileName.value === 0 ? name.en : fileName.name
    const title: TitleType = {en, ja: ja[index]}
    const checkLink = (link: string): string => {
      if (link === '/home') {
        return '/'
      }
      return link
    }
    if (index === 0) {
      return {
        title,
        link: {
          prev: checkLink(`/${fileNames[lastIndex].name}`),
          next: checkLink(`/${fileNames[index + 1].name}`)
        },
        route: '/'
      }
    }
    if (index === lastIndex) {
      return {
        title,
        link: {
          prev: checkLink(`/${fileNames[index - 1].name}`),
          next: checkLink(`/${fileNames[0].name}`)
        },
        route: `/${en}`
      }
    }
    return {
      title,
      link: {
        prev: checkLink(`/${fileNames[index - 1].name}`),
        next: checkLink(`/${fileNames[index + 1].name}`)
      },
      route: `/${en}`
    }
  })
  const path: string = `/${router.pathname.split('/')[1]}`
  let headerInfo: HeaderInfoType | undefined = HeaderInfos.find((info) => (info.route === path))
  if (headerInfo === undefined) {
    headerInfo = {
      title: name,
      link: {
        prev: `/${fileNames[1].name}`,
        next: `/${fileNames[lastIndex].name}`
      },
      route: '/'
    }
  }
  const setLabel = (label: string) => {
    const l = label === '/' ? 'top page' : label
    return Capitalize(l.replace('/', ''))
  }
  const profileImage: string = 'https://raw.githubusercontent.com/toshikisugiyama/aboutme/master/src/public/images/profile.svg'
  return (
    <header>
      <section className={`container ${styles.container}`}>
        <h1 className={styles.title_en}>
          <Link href={headerInfo.route}>
            <a>{Capitalize(headerInfo.title.en)}</a>
          </Link>
        </h1>
        <div className={styles.profile_image}>
          <Link href="/"><a><img src={profileImage} alt="profile image" width={150} height={150} /></a></Link>
        </div>
        <h2 className={styles.title_ja}>{headerInfo.title.ja}</h2>
        <Link href={headerInfo.link.prev}><a className={`${styles.arrow} ${styles.arrow__left}`}>&lt;<span className={styles.label}>{setLabel(headerInfo.link.prev)}</span></a></Link>
        <Link href={headerInfo.link.next}><a className={`${styles.arrow} ${styles.arrow__right}`}>&gt;<span className={styles.label}>{setLabel(headerInfo.link.next)}</span></a></Link>
      </section>
    </header>
  )
}

export default Header