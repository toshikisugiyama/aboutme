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

export interface ProfileType {
  birthYear: number,
    birthPlace: string,
    history: Array<HistoryType>,
    summary: string
}

export interface HistoryType {
  term: string,
  content: string
}