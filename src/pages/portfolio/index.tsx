import Layout from '../../components/Layout'
import Link from 'next/link'
import { PortfolioType } from '../../types'
import Capitalize from '../../components/Capitalize'
import styles from '../../styles/portfolio.module.scss'
const portfolios: Array<PortfolioType> = [
  {title: {en: 'service', ja: 'サービス'}, description: '主にReact, Vue.js, Laravel などで作った作品'},
  {title: {en: 'drawing', ja: 'イラスト'}, description: 'Adobe Illustrator で描いたイラスト'}
]
const Portfolio = () => {
  return (
    <Layout>
      <section className="container">
        {portfolios.map((portfolio: PortfolioType) => (
          <div key={portfolio.title.en} className={styles.item}>
            <h2 className={styles.title}>{`${portfolio.title.ja} / ${Capitalize(portfolio.title.en)}`}</h2>
            <p>{portfolio.description}</p>
            <Link href={`/portfolio/${portfolio.title.en}`}><a className={styles.link}></a></Link>
          </div>
        ))}
      </section>
    </Layout>
  )
}

export default Portfolio