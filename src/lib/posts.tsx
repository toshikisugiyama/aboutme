import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'


const postsDirectory = (post: string): string => (
  path.join(process.cwd(), `posts/${post}`)
)

export const getPostData = async (id: string, post: string) => {
  const fullPath: string = path.join(postsDirectory(post), `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult: matter.GrayMatterFile<string> = matter(fileContents)
  const processedContent = await remark().use(html).process(matterResult.content)
  const contentHtml: string = processedContent.toString()
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}

export const getAllPostIds = (post: string) => {
  const fileNames: Array<string> = fs.readdirSync(postsDirectory(post))
  return fileNames.map((fileName: string) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export const getStoredPostsData = (post: string) => {
  const fileNames: Array<string> = fs.readdirSync(postsDirectory(post))
  const allPostsData = fileNames.map((fileName: string) => {
    const id: string = fileName.replace(/\.md$/, '')
    const fullPath: string = path.join(postsDirectory(post), fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult: matter.GrayMatterFile<string> = matter(fileContents)
    return {
      id,
      ...matterResult.data
    }
  })
  return allPostsData.sort(() => 1)
}