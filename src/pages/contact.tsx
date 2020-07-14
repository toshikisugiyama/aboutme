import Layout from '../components/Layout'
import { FormItemType } from '../types'
import styles from '../styles/contact.module.scss'
import Button from '../components/Button'
import Capitalize from '../components/Capitalize'

const Contact = () => {
  const formItems: Array<FormItemType> = [
    { label: {en: 'name', ja: 'お名前'}, tag: 'input', type: 'text' },
    { label: {en: 'email', ja: 'メール'}, tag: 'input', type: 'email' },
    { label: {en: 'message', ja: 'メッセージ'}, tag: 'textarea' }
  ]
  return (
    <Layout>
      <section className="container">
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact"/>
          {
            formItems.map((item: FormItemType, index: number) => (
              <div key={item.label.en} className={styles.form__item}>
                <label htmlFor={item.label.en} className={styles.label}>
                  {`${item.label.ja} / ${Capitalize(item.label.en)}`}
                </label>
                {
                  item.tag === 'input'
                  ? <input type={item.type} name={item.label.en} id={item.label.en} className={styles.input} autoFocus={index===0?true:false} required/>
                  : <textarea id={item.label.en} name={item.label.en} className={styles.textarea} cols={30} rows={10} required></textarea>
                }
              </div>
            ))
          }
          <Button buttonType="submit" buttonText="OK" />
        </form>
      </section>
    </Layout>
  )
}

export default Contact