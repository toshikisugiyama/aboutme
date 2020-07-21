import styles from '../styles/topics.module.scss'
const Topics = ({ topicsString, isCenter }: {topicsString: string, isCenter: boolean}): JSX.Element => {
  if (topicsString.length > 0) {
    return (
      <div className={`${styles.wrapper} ${!isCenter ? styles.leftWrapper : ''}`}>
        <ul className={styles.list}>
          {topicsString.split(',').map((topic: string) => (
            <li key={topic} className={styles.item}>{topic}</li>
          ))}
        </ul>
      </div>
    )
  }
  return <></>
}

export default Topics