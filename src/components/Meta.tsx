import Head from 'next/head'
import { Seo } from '../config'

const Meta = () => (
  <Head>
    <title key="title">{Seo.title}</title>
    <meta key="viewport" name="viewport" content={Seo.viewport} />
    <meta key="description" name="description" content={Seo.description} />
    <meta key="og:type" name="og:type" content={Seo.openGraph.type} />
    <meta key="og:url" name="og:url" content={Seo.openGraph.url} />
    <meta key="og:title" name="og:title" content={Seo.openGraph.title} />
    <meta key="og:description" name="og:description" content={Seo.openGraph.description} />
    <meta key="og:image" name="og.image" content={Seo.openGraph.image} />
  </Head>
)


export default Meta