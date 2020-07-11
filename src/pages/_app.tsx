import Meta from '../components/Meta'
import 'modern-css-reset'
import '../styles/styles.scss'
const App = ({ Component, pageProps }: { Component: any, pageProps: any }) => (
  <>
    <Meta />
    <Component {...pageProps} />
  </>
)

export default App