import Layout from '../components/Layout'
import { ProfileType, HistoryType } from '../types'
import styles from '../styles/home.module.scss'

const profile: ProfileType = {
  birthYear: 1990,
  birthPlace: '兵庫県',
  history: [
    {term: '2019年10月〜現在', content: 'オンラインプログラミングスクール WordPressコース メンター'},
    {term: '2019年4月〜2019年9月', content: 'NexSeed.Incでインターン(エンジニアクラス補佐・オフショア業務)'},
    {term: '2018年7月〜現在', content: 'WordPressによるホームページ作成'},
    {term: '2018年4月〜2018年6月', content: 'フィリピン・セブ島のNexSeed.Incで留学(英語・Web)'},
    {term: '2015年4月〜2018年3月', content: 'マルカン酢株式会社'},
    {term: '2015年3月', content: '関西学院大学大学院 理工学研究科 修了'},
    {term: '2013年3月', content: '関西学院大学 理工学部 生命科学科 卒業'},
  ],
  summary: '大学、大学院で植物プランクトンの研究をしました。卒業後、微生物を用いて作る調味料である、お酢を作る食品会社で製造業に従事しました。その中で、ITで製造過程を管理するシステムが導入されつつあり、自分にはITの知識が足りないということと、これからはもっとそのような知識が必須になってくると感じました。また、海外にも興味があったため、退職を決意しフィリピンに渡り、英語とプログラミングを学びました。その後、WordPressでのホームページ制作などの案件を受けています。さらに、再度フィリピンに渡り、スクールにてエンジニアクラスの補佐やオフショアでのWeb開発のコミュニケーター業務を行いました。現在はホームページ制作を続けながらフロントエンドなどの新しい技術を身につけるため学習も続けています。'
}

const Home = () => {
  return (
    <Layout>
      <main className="container">
        <p>{`${profile.birthYear}年 ${profile.birthPlace}出身`}</p>
        <p className={styles.summary}>{profile.summary}</p>
        <table>
          <tbody>
            {profile.history.map((history: HistoryType, index: number) => (
              <tr key={index}>
                <th className={styles.th}>{history.term}</th>
                <td className={styles.td}>{history.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Layout>
  )
}

export default Home