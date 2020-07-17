import fs from 'fs'
import path from 'path'
import { PageType } from '../types'

const getPageNames = (fileNames: Array<string>): Array<PageType> => {
  const files = fileNames.map((file: string) => (
    file.replace(/\.tsx$/, '').replace('index', 'home')
  ))
  const filteredFiles: Array<string> = files.filter((file: string) => file !== '_app')
  const pages: Array<PageType> = filteredFiles.map((file, index) => {
    const value: number = file === 'home' ? 0 : index + 1
    return {name: file, value}
  })
  return pages.sort((a, b) => a.value - b.value)
}

export const getPages = () => {
  const pagesDirectory: string = path.join(process.cwd(), 'pages')
  const fileNames: Array<string> =  fs.readdirSync(pagesDirectory)
  const pages: Array<PageType> = getPageNames(fileNames)
  return pages
}