import Capitalize from './components/Capitalize'
import { SeoType } from './types'
const name: string = Capitalize('sugiyama toshiki')
const title: string = `AboutMe | ${name}`
const description: string = "Sugiyama Toshiki, a web engineer. This page is made with Next.js and published with Netlify. Contents are managed with Netlify CMS."
const image: string = "https://raw.githubusercontent.com/toshikisugiyama/aboutme/master/src/public/images/profile.svg"
export const Seo: SeoType = {
  title,
  charSet: 'utf-8',
  description,
  viewport: "width=device-width, initial-scale=1.0",
  favicon: image,
  openGraph: {
    type: "website",
    url: "https://aboutme-toshikisugiyama.netlify.app",
    title,
    description,
    site_name: title,
    image
  },
  twitter: {
    cardType: "summary",
    site: "@llwz886q",
    creator: name,
    title,
    description,
    image
  }
}