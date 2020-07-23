import Head from 'next/head'
import { Seo } from '../config'

const Meta = (): JSX.Element => (
  <Head>
    <title>{Seo.title}</title>
    <meta key="charSet" charSet={Seo.charSet} />
    <meta key="viewport" name="viewport" content={Seo.viewport} />
    <meta key="description" name="description" content={Seo.description} />
    {Object.entries(Seo.openGraph).map((og: Array<string>): JSX.Element => (
      <meta key={og[0]} property={`og:${og[0]}`} content={og[1]} />
    ))}
    {Object.entries(Seo.twitter).map((tw: Array<string>): JSX.Element => (
      <meta key={tw[0]} name={`twitter:${tw[0]}`} content={tw[1]} />
    ))}
    <link key="icon" rel="icon" type="image/x-icon" href={Seo.favicon}/>
    <link key="apple-touch-icon" rel="apple-touch-icon" type="image/x-icon" href={Seo.favicon}/>
  </Head>
)

export default Meta