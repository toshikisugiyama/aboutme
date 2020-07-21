import Layout from '../../components/Layout'
import { PageType } from '../../types'
import styles from '../../styles/portfolio.module.scss'
import { getPages } from '../../lib/pages'
import PortfolioNav from '../../components/PortfolioNav'
import { getStoredPostsData } from '../../lib/posts'
import Date from '../../components/Date'
import Topics from '../../components/Topics'
import Link from 'next/link'
import Pagination from 'next-pagination'

export const getStaticProps = async () => {
  const allPostsData = getStoredPostsData('portfolio')
  const fileNames: Array<PageType> = getPages()
  return {
    props: {
      allPostsData,
      fileNames
    }
  }
}

const Portfolio = ({ allPostsData, fileNames }: {allPostsData: any, fileNames: Array<PageType>}) => (
  <Layout fileNames={fileNames}>
    <section className={`container ${styles.container}`}>
      <div className={styles.nav}>
        <PortfolioNav />
      </div>
      <ul className={styles.list}>
      {allPostsData.map(({id, title, date, topics}: {id: string, title: string, date: string, topics: string}) => (
        <li key={id} className={styles.item}>
          <article className={styles.contents}>
            <Topics topicsString={topics} isCenter={true} />
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.date}>
              <Date dateString={date} />
            </div>
          </article>
          <Link href="/portfolio/[id]" as={`/portfolio/${id}`}><a className={styles.link}></a></Link>
        </li>
      ))}
      </ul>
      <div className={styles.pagination}>
        <Pagination total={allPostsData.length} />
      </div>
    </section>
  </Layout>
)

export default Portfolio