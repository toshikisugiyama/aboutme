import Layout from '../components/Layout'
import { ProfileType, PageType } from '../types'
import styles from '../styles/home.module.scss'
import { getPages } from '../lib/pages'
import History from '../components/History'
import Topics from '../components/Topics'

export const getStaticProps = () => {
  const fileNames: Array<PageType> = getPages()
  return {props: {fileNames}}
}

const profile: ProfileType = {
  birthYear: 1990,
  birthPlace: '兵庫県',
  history: {
    title: '経歴',
    content: [
      {term: '2021年4月～現在', content: 'モバイルアプリ開発', skill: 'Flutter,Cloud Functions,Node.js,TypeScript',},
      {term: '2021年2月～現在', content: 'Webシステム開発', skill: 'Nuxt.js,TypeScript,Express,GCP',},
      {term: '2019年10月〜現在', content: 'オンラインプログラミングスクール メンター【フロントエンドコース（Vue.jsとFirebaseを扱うコース）, WordPressコース（オリジナルテーマを作成するコース）】', skill: 'JavaScript,Vue.js,Firebase,PHP,WordPress'},
      {term: '2019年4月〜2019年9月', content: 'NexSeed.Incでインターン【エンジニアクラス補佐・オフショア業務・自社サービス（学習管理システム）開発】フィリピンに滞在し、英語でコミュニケーションを取りながら開発を行いました。', skill: 'JavaScript,Vue.js,PHP,Laravel,Git'},
      {term: '2018年7月〜現在', content: 'ホームページ制作', skill: 'WordPress,PHP,JavaScript,jQuery,Git'},
      {term: '2018年4月〜2018年6月', content: 'フィリピン・セブ島のNexSeed.Incで留学。英語とWebコースで学ぶ。', skill: 'HTML, CSS, PHP, Git, GitHub'},
      {term: '2015年4月〜2018年3月', content: '食品会社にて食酢の発酵、調合を行う。ITによる製造管理システムの導入をきっかけに、プログラミングに興味を持つ。', skill: ''},
      {term: '2013年4月〜2015年3月', content: '関西学院大学大学院 理工学研究科 海洋性珪藻のリン酸輸送体についての研究を行う。', skill: ''},
      {term: '2009年4月〜2013年3月', content: '関西学院大学 理工学部 生命科学科 生命科学専攻', skill: ''}
    ]
  },
  summary: 'ホームページ制作およびオンラインプログラミングスクールのメンターをしています。Vue.jsやReact、AWS ECSやECRに興味を持って日々学んでいます。',
  skills: {
    title: 'スキル・資格',
    content: 'HTML(Pug),CSS(SCSS),JavaScript,TypeScript,Vue.js,Nuxt.js,React.js,Next.js,Gatsby,PHP,Laravel,Git,WordPress,Netlify,AWS,Illustrator,AWS SAA,宅地建物取引士,スキューバーダイビング PADI Open Water,フォークリフト運転,バーベキュー初級インストラクター,家庭菜園検定3級,英検2級,珠算1級'
  }
}

const Home = ({fileNames}: {fileNames: Array<PageType>}): JSX.Element => (
  <Layout fileNames={fileNames}>
    <section className="container">
      <section className={styles.section}>
        <p>{`${profile.birthYear}年 ${profile.birthPlace}出身`}</p>
        <p className={styles.summary}>{profile.summary}</p>
      </section>
      <section className={styles.section}>
        <h3 className={styles.title}>{profile.skills.title}</h3>
        <Topics topicsString={profile.skills.content} isCenter={false} />
      </section>
      <section className={styles.section}>
        <h3 className={styles.title}>{profile.history.title}</h3>
        <History history={profile.history.content} />
      </section>
    </section>
  </Layout>
)

export default Home