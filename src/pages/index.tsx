import Layout from '../components/Layout'
import { ProfileType, HistoryType } from '../types'
import styles from '../styles/home.module.scss'

const profile: ProfileType = {
  birthYear: 1990,
  birthPlace: '兵庫県',
  history: [
    {term: '2019年10月〜現在', content: 'オンラインプログラミングスクール メンター'},
    {term: '2019年4月〜2019年9月', content: 'NexSeed.Incでインターン(エンジニアクラス補佐・オフショア業務)'},
    {term: '2018年7月〜現在', content: 'WordPressによるホームページ作成'},
    {term: '2018年4月〜2018年6月', content: 'フィリピン・セブ島のNexSeed.Incで留学。英語とWebコース（HTML, CSS, PHP, Git, GitHub）で学ぶ。'},
    {term: '2015年4月〜2018年3月', content: '微生物を使った研究をしていた経験から、食品会社にて食酢の発酵、調合を行う。ITによる製造管理システムの導入をきっかけに、プログラミングに興味を持つ。海外への興味もあり、留学のため退社。'},
    {term: '2013年4月〜2015年3月', content: '関西学院大学大学院 理工学研究科 海洋性珪藻のリン酸輸送体についての研究を行う。'},
    {term: '2009年4月〜2013年3月', content: '関西学院大学 理工学部 生命科学科 生命科学専攻'},
  ],
  summary: 'WordPressでのホームページ制作およびオンラインプログラミングスクールのメンターをしています。フロントエンドやAWSなどの知識や技術を身につけるため日々学んでいます。',
  skills: ['HTML(Pug)', 'CSS(SCSS)', 'JavaScript', 'TypeScript', 'Vue.js', 'Nuxt.js', 'React.js', 'Next.js', 'Gatsby', 'PHP', 'Laravel', 'Git', 'WordPress', 'Netlify', 'AWS', 'Illustrator', '宅地建物取引士', 'スキューバーダイビング PADI Open Water', 'フォークリフト運転', 'バーベキュー初級インストラクター', '家庭菜園検定3級', '英検2級', 'そろばん1級']
}

const Home = () => {
  return (
    <Layout>
      <section className="container">
        <section className={styles.section}>
          <p>{`${profile.birthYear}年 ${profile.birthPlace}出身`}</p>
          <p className={styles.summary}>{profile.summary}</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.title}>スキル・資格</h2>
          <div className={styles.skills}>
            {profile.skills.map((skill: string) => (
              <span key={skill} className={styles.skill}>{skill}</span>
              ))}
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.title}>経歴</h2>
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
        </section>
      </section>
    </Layout>
  )
}

export default Home