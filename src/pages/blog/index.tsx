import Layout from '../../components/Layout'
import { getStoredPostsData } from '../../lib/posts'
import Date from '../../components/Date'
import Topics from '../../components/Topics'
import Link from 'next/link'
import styles from '../../styles/blog.module.scss'
import { getPages } from '../../lib/pages'

export const getStaticProps = async () => {
  const allPostsData = getStoredPostsData('blog')
  const fileNames = getPages()
  return {
    props: {
      allPostsData,
      fileNames
    }
  }
}

const Blog = ({ allPostsData, fileNames }: {allPostsData: any, fileNames: any}) => (
  <Layout fileNames={fileNames}>
    <section className={`container ${styles.list}`}>
      {allPostsData.map(({id, title, date, topics}: {id: string, title: string, date: string, topics: string}) => (
        <article key={id} className={styles.item}>
          <Topics topicsString={topics} />
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.date}>
            <Date dateString={date} />
          </div>
          <Link href="/blog/[id]" as={`/blog/${id}`}><a className={styles.link}></a></Link>
        </article>
      ))}
    </section>
  </Layout>
)

export default Blog