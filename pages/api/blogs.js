import * as fs from 'fs'

export default async function handler(req, res) {
  let data = await fs.promises.readdir('blogdata')
  let blogs = []
  let blog
  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    blog = await fs.promises.readFile(`blogdata/${item}`, 'utf-8')
    blogs.push(JSON.parse(blog))
  }
  res.status(200).json(blogs)
}
