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
  title: {
    en: string,
    ja: string,
  },
  link: {
      prev: string,
      next: string,
  },
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

export interface ServiceType {
  title: string,
  url: string,
  image: string
}