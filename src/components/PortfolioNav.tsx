import { PortfolioType } from '../types'
import Link from 'next/link'
import { useRouter, NextRouter } from 'next/router'
import styles from '../styles/portfolionav.module.scss'

const portfolios: Array<PortfolioType> = [
  {title: {en: 'service', ja: 'サービス'}, description: '主にReact, Vue.js, Laravel などで作った作品'},
  {title: {en: 'drawing', ja: 'イラスト'}, description: 'Adobe Illustrator で描いたイラスト'}
]

const PortfolioNav = (): JSX.Element => {
  const router: NextRouter = useRouter()
  const reversedPathName: string = router.pathname.split('/').reverse()[0]
  const pathToProfile: string = reversedPathName === 'portfolio' ? '' : reversedPathName
  return (
    <ul className={styles.list}>
      {portfolios.map((portfolio: PortfolioType) => {
        const path: string = portfolio.title.en === 'service' ? '' : `/${portfolio.title.en}`
        const style: string = pathToProfile !== path.replace('/', '') ? styles.link_inactive : ''
        return (
          <li key={portfolio.title.en}>
            <Link href={`/portfolio${path}`}>
              <a className={`${styles.link} ${style}`}>{portfolio.title.ja}</a>
            </Link>
          </li>
      )})}
    </ul>
)}

export default PortfolioNav