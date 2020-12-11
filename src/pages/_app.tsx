import Meta from '../components/Meta'
// import 'modern-css-reset'
import 'css-reset-and-normalize'
import 'next-pagination/dist/index.css'
import '../styles/styles.scss'
const App = ({ Component, pageProps }: { Component: any, pageProps: any }) => (
  <>
    <Meta />
    <Component {...pageProps} />
  </>
)

export default App