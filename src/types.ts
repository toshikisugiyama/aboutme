export interface SeoType {
  title: string,
  description: string,
  viewport: string,
  openGraph: {
      type: string,
      url: string,
      title: string,
      description: string,
      image: string,
  }
}

export interface SnsIconType {
  name: string,
  url: string
}

export interface TitleType {
  en: string,
  ja: string
}