import Header from './Header'
import Footer from './Footer'
import { PageType } from '../types'

const Layout = ({ children, fileNames }: { children: JSX.Element, fileNames: Array<PageType> }) => (
  <>
    <Header fileNames={fileNames} />
    <main>
      {children}
    </main>
    <Footer fileNames={fileNames} />
  </>
)

export default Layout