import Layout from '../../components/Layout'
import { ServiceType, PageType } from '../../types'
import styles from '../../styles/portfolio.module.scss'
import { getPages } from '../../lib/pages'
import PortfolioNav from '../../components/PortfolioNav'
import { getStoredPostsData } from '../../lib/posts'
import Date from '../../components/Date'
import Topics from '../../components/Topics'
import Link from 'next/link'

export const getStaticProps = async () => {
  const allPostsData = getStoredPostsData('portfolio')
  const fileNames = getPages()
  return {
    props: {
      allPostsData,
      fileNames
    }
  }
}

const services: Array<ServiceType> = [
  {title: '名前をつけて早く呼ぶゲーム', url: 'https://toshikisugiyama-images.netlify.com', image: 'https://placehold.it/300x200'},
  {title: '都道府県別の総人口推移グラフを表示するSPA', url: 'https://population-app.netlify.app/', image: 'https://placehold.it/300x200'},
  {title: 'タスク管理アプリ', url: 'http://obscure-falls-29065.herokuapp.com', image: 'https://placehold.it/300x200'},
  {title: '発表会開始までのカウントダウン', url: 'https://toshikisugiyama-ns-countdown.netlify.com', image: 'https://placehold.it/300x200'},
]

const Portfolio = ({ allPostsData, fileNames }: {allPostsData: any, fileNames: any}) => (
  <Layout fileNames={fileNames}>
    <section className="container">
      <div className={styles.nav}>
        <PortfolioNav />
      </div>
      <ul className={styles.list}>
      {allPostsData.map(({id, title, date, topics}: {id: string, title: string, date: string, topics: string}) => (
        <li key={id} className={styles.item}>
          <section className={styles.contents}>
            <Topics topicsString={topics} />
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.date}>
              <Date dateString={date} />
            </div>
          </section>
          <Link href="/portfolio/[id]" as={`/portfolio/${id}`}><a className={styles.link}></a></Link>
        </li>
      ))}
      </ul>
    </section>
  </Layout>
)

export default Portfolio