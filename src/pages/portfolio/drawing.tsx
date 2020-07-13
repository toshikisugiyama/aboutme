import Layout from '../../components/Layout'
import Link from 'next/link'
import styles from '../../styles/drawing.module.scss'
const imageFiles: number = 10
const path: string = '/images/'
const extension: string = '.svg'
const images: Array<string> = [...Array(imageFiles)].map((_: undefined, i: number) => `${path}${i + 1}${extension}`)
const Drawing = () => {
  return (
    <Layout>
      <section className="container">
        <ul className={styles.lists}>
          {images.map((image: string) => (
            <li key={image} className={styles.item}>
              <img src="https://placehold.jp/400x400.png" alt={image} className={styles.image} />
              <Link href={`/portfolio/drawing${image}`}>
                <a className={styles.link}>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Drawing