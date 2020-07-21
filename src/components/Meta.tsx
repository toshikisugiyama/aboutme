import Head from 'next/head'
import { Seo } from '../config'

const Meta = () => (
  <Head>
    <title key="title">{Seo.title}</title>
    <meta key="viewport" name="viewport" content={Seo.viewport} />
    <meta key="description" name="description" content={Seo.description} />
    <meta key="og:type" property="og:type" content={Seo.openGraph.type} />
    <meta key="og:url" property="og:url" content={Seo.openGraph.url} />
    <meta key="og:title" property="og:title" content={Seo.openGraph.title} />
    <meta key="og:description" property="og:description" content={Seo.openGraph.description} />
    <meta key="og:site_name" property="og:site_name" content={Seo.openGraph.site_name} />
    <meta key="og:image" property="og:image" content={Seo.openGraph.image} />
    <meta key="twitter:card" property="twitter:card" content={Seo.twitter.card} />
    <meta key="twitter:site" property="twitter:site" content={Seo.twitter.site} />
  </Head>
)

export default Meta