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

export interface HeaderInfoType {
  title: TitleType,
  link: {
      prev: string,
      next: string,
  },
  route: string
}

export interface TitleType {
  en: string,
  ja: string,
}

export interface ProfileType {
  birthYear: number,
  birthPlace: string,
  history: {
    title: string,
    content: Array<HistoryType>,
  },
  summary: string,
  skills: {
    title: string,
    content: string
  }
}

export interface HistoryType {
  term: string,
  content: string,
  skill: string
}

export interface FormItemType {
  label: {
    en: string,
    ja: string
  },
  tag: string,
  type?: string
}

export interface PortfolioType {
  title: {
    en: string,
    ja: string
  },
  description: string
}

export interface PageType {
  name: string,
  value: number
}

export interface ImageType {
  id: string,
  src: string,
  url: string
}