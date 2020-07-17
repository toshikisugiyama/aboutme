import Layout from '../../components/Layout'
import { ServiceType, PageType } from '../../types'
import styles from '../../styles/portfolio.module.scss'
import { getPages } from '../../lib/pages'
import PortfolioNav from '../../components/PortfolioNav'

export const getStaticProps = () => {
  const fileNames: Array<PageType> = getPages()
  return {props: {fileNames}}
}

const services: Array<ServiceType> = [
  {title: '名前をつけて早く呼ぶゲーム', url: 'https://toshikisugiyama-images.netlify.com', image: 'https://placehold.it/300x200'},
  {title: '都道府県別の総人口推移グラフを表示するSPA', url: 'https://population-app.netlify.app/', image: 'https://placehold.it/300x200'},
  {title: 'タスク管理アプリ', url: 'http://obscure-falls-29065.herokuapp.com', image: 'https://placehold.it/300x200'},
  {title: '発表会開始までのカウントダウン', url: 'https://toshikisugiyama-ns-countdown.netlify.com', image: 'https://placehold.it/300x200'},
]

const Portfolio = ({fileNames}: {fileNames: Array<PageType>}) => {
  return (
    <Layout fileNames={fileNames}>
      <section className="container">
        <div className={styles.nav}>
          <PortfolioNav />
        </div>
        <ul className={styles.list}>
          {
            services.map((service: ServiceType) => (
              <li key={service.title} className={styles.item}>
                <div className={styles.imagewrapper}>
                  <img src={service.image} alt={service.title} className={styles.image} />
                </div>
                <section className={styles.contents}>
                  <h1 className={styles.title}>{service.title}</h1>
                </section>
                <a href={service.url} className={styles.link} ></a>
              </li>
            ))
          }
        </ul>
      </section>
    </Layout>
  )
}

export default Portfolio