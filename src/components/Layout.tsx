import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }: { children: JSX.Element }) => (
  <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </>
)

export default Layout