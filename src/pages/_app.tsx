import Meta from '../components/Meta'
import 'modern-css-reset'
import 'next-pagination/dist/index.css'
import '../styles/styles.scss'
const App = ({ Component, pageProps }: { Component: any, pageProps: any }) => (
  <>
    <Meta />
    <Component {...pageProps} />
  </>
)

export default App