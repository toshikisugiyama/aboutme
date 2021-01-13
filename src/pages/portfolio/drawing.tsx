import Layout from '../../components/Layout'
import Link from 'next/link'
import styles from '../../styles/portfolio.module.scss'
import { getPages } from '../../lib/pages'
import { PageType, ImageType } from '../../types'
import PortfolioNav from '../../components/PortfolioNav'

export const getStaticProps = () => {
  const fileNames: Array<PageType> = getPages()
  return {props: {fileNames}}
}
const editNumberStyle = (num: number): string => (
  (num < 10) ? 0 + num.toString() : num.toString()
)
const imageFiles: number = 19
const githubRepo = 'toshikisugiyama/illustrator-works'
const images: Array<ImageType> = [...Array(imageFiles)].map((_: undefined, i: number) => ({
  id: editNumberStyle(i+1),
  src: `https://raw.githubusercontent.com/${githubRepo}/master/drawing-${editNumberStyle(i+1)}/drawing-${editNumberStyle(i+1)}.svg`,
  url: `https://github.com/${githubRepo}/blob/master/drawing-${editNumberStyle(i+1)}/README.md`
}))
const description = (): JSX.Element => {
  const illustrator: JSX.Element = <a href="https://www.adobe.com/jp/products/illustrator.html">Adobe Illustrator</a>
  const game = <Link href="/portfolio/2020-05-16_名前をつけて早く呼ぶゲーム"><a>ゲーム</a></Link>
  return (
    <p>
      {illustrator} を使って趣味で描いた絵です。
      ここに載せた絵を使った{game}もあるので、御覧ください。
    </p>
  )
}
const Drawing = ({fileNames}: {fileNames: Array<PageType>}) => {
  return (
    <Layout fileNames={fileNames}>
      <section className={`container ${styles.drawing}`}>
        <div className={styles.nav}>
          <PortfolioNav />
        </div>
        <div className={styles.description}>{description()}</div>
        <ul className={styles.lists}>
          {images.reverse().map((image: ImageType) => (
            <li key={image.id} className={styles.item}>
              <div className={styles.image}>
                <img src={image.src} alt={`image-${image.id}`} />
                <a href={image.url} className={styles.link}></a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Drawing