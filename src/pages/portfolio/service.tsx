import Layout from '../../components/Layout'
import { ServiceType } from '../../types'
import styles from '../../styles/service.module.scss'
const services: Array<ServiceType> = [
  {title: '名前をつけて早く呼ぶゲーム', url: 'https://toshikisugiyama-images.netlify.com', image: 'https://placehold.it/300x200'},
  {title: '都道府県別の総人口推移グラフを表示するSPA', url: 'https://population-app.netlify.app/', image: 'https://placehold.it/300x200'},
  {title: 'タスク管理アプリ', url: 'http://obscure-falls-29065.herokuapp.com', image: 'https://placehold.it/300x200'},
  {title: '発表会開始までのカウントダウン', url: 'https://toshikisugiyama-ns-countdown.netlify.com', image: 'https://placehold.it/300x200'},
]
const Service = () => {
  return (
    <Layout>
      <section className="container">
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

export default Service