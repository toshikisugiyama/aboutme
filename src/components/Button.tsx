import styles from '../styles/button.module.scss'
interface Props {
  buttonText: string,
  buttonType?: any
}
const Button = (props: Props) => {
  return (
    <div className={styles.container}>
      <button
        type={props.buttonType}
        className={styles.button}
      >
        {props.buttonText}
      </button>
    </div>
  )
}

export default Button
