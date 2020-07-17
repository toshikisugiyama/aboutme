import Layout from '../../components/Layout'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/Date'
import Topics from '../../components/Topics'
import styles from '../../styles/blog.module.scss'
import { getPages } from '../../lib/pages'
import { PageType } from '../../types'

export const getStaticProps = async ({ params }: {params: any}) => {
  const postData = await getPostData(params.id)
  const fileNames: Array<PageType> = getPages()
  return {
    props: {
      postData,
      fileNames
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

export const Post = ({ postData, fileNames }: {postData: any, fileNames: Array<PageType>}) => {
  return (
    <Layout fileNames={fileNames}>
      <>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article className={`container ${styles.article}`}>
          <h1 className={styles.title}>{postData.title}</h1>
          <Topics topicsString={postData.topics} />
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