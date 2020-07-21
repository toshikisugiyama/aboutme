import { SeoType } from './types'
const title: string = "AboutMe | Sugiyama Toshiki"
const description: string = "Sugiyama Toshiki, a web engineer. This page is made with Next.js and published Netlify. Contents are managed with Netlify CMS."
export const Seo: SeoType = {
  title,
  description,
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    type: "website",
    url: "https://aboutme-toshikisugiyama.netlify.app",
    title,
    description,
    site_name: title,
    image: "https://raw.githubusercontent.com/toshikisugiyama/aboutme/master/src/public/images/profile.svg"
  },
  twitter: {
    card: "summary",
    site: "@llwz886q"
  }
}