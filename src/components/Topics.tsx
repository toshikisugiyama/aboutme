import styles from '../styles/topics.module.scss'
const Topics = ({ topicsString }: {topicsString: string}) => (
  <div className={styles.topics}>
    {topicsString.split(',').map((topic: string) => (
      <span key={topic} className={styles.topic}>{topic}</span>
    ))}
  </div>
)

export default Topics