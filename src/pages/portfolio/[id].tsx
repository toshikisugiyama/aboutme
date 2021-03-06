import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from "next/link"
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/Date'
import Topics from '../../components/Topics'
import styles from '../../styles/post.module.scss'
import { getPages } from '../../lib/pages'
import { PageType } from '../../types'

export const getStaticProps = async ({ params }: {params: any}) => {
  const postData = await getPostData(params.id, 'portfolio')
  const fileNames: Array<PageType> = getPages()
  return {
    props: {
      postData,
      fileNames
    }
  }
}

export const getStaticPaths = () => {
  const paths = getAllPostIds('portfolio')
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
        <section className="container">
          <article className={styles.article}>
            <div className={styles.topics}>
              <Topics topicsString={postData.topics} isCenter={true} />
            </div>
            <div className={styles.title}>
              <h1>{postData.title}</h1>
            </div>
            <div className={styles.date}>
              <Date dateString={postData.date} />
            </div>
            <section dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></section>
          </article>
          <Link href="/portfolio">
            <a className={styles.go_back}>戻る</a>
          </Link>
        </section>
      </>
    </Layout>
  )
}

export default Post