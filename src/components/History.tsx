import styles from '../styles/history.module.scss'
import { HistoryType } from '../types'
import Topics from '../components/Topics'

const History = ({history}: {history: Array<HistoryType>}): JSX.Element => {
  return (
    <section className={styles.history}>
      {history.map((history: HistoryType, index: number) => (
        <div key={index} className={styles.item}>
          <h4 className={styles.term}>{history.term}</h4>
          <p className={styles.content}>{history.content}</p>
          <div className={styles.skill}>
            <Topics topicsString={history.skill} isCenter={false} />
          </div>
        </div>
      ))}
    </section>
  )
}

export default History