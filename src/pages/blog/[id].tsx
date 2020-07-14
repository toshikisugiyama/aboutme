import Layout from '../../components/Layout'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/Date'
import styles from '../../styles/blog.module.scss'

export const getStaticProps = async ({ params }: {params: any}) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export const getStaticPaths = () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const Post = ({ postData }: {postData: any}) => {
  return (
    <Layout>
      <>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article className={`container ${styles.article}`}>
          <h1 className={styles.title}>{postData.title}</h1>
          <div className={styles.date}>
            <Date dateString={postData.date} />
          </div>
          <section dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></section>
        </article>
      </>
    </Layout>
  )
}

export default Post