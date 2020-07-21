import styles from '../styles/topics.module.scss'
const Topics = ({ topicsString }: {topicsString: string}) => (
  <div className={styles.wrapper}>
    <ul className={styles.list}>
      {topicsString.split(',').map((topic: string) => (
        <li key={topic} className={styles.item}>{topic}</li>
      ))}
    </ul>
  </div>
)

export default Topics