import Layout from '../../components/Layout'
import { getStoredPostsData } from '../../lib/posts'
import Date from '../../components/Date'
import Link from 'next/link'
import styles from '../../styles/blog.module.scss'

export const getStaticProps = async () => {
  const allPostsData = getStoredPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const Blog = ({ allPostsData }: {allPostsData: any}) => (
  <Layout>
    <section className="container">
      <ul className={styles.list}>
        {allPostsData.map(({id, title, date}: {id: string, title: string, date: string}) => (
          <li key={id} className={styles.item}>
            <h2>{title}</h2>
            <div className={styles.date}>
              <Date dateString={date} />
            </div>
            <Link href="/blog/[id]" as={`/blog/${id}`}><a className={styles.link}></a></Link>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
)

export default Blog