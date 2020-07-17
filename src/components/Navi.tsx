import Link from 'next/link'
import Capitalize from '../components/Capitalize'
import styles from '../styles/navi.module.scss'
import { PageType } from '../types'
const Navi = ({fileNames}: {fileNames: Array<PageType>}) => {
  return (
    <ul className={styles.list}>
      {fileNames.map((page: any) => {
        const path = page.name === 'home' ? '/' : page.name
        return (
          <li key={page.value} className={styles.item}><Link href={path}><a>{Capitalize(page.name)}</a></Link></li>
        )})}
    </ul>
  )
}

export default Navi