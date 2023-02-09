// import * as fs from 'fs'

// export default async function handler(req, res) {
//   let data = await fs.promises.readdir('blogdata')
//   data = data.slice(0, +req.query.count)

//   let blogs = []
//   let blog

//   for (let i = 0; i < data.length; i++) {
//     const item = data[i]

//     blog = await fs.promises.readFile(`blogdata/${item}`, 'utf-8')
//     blogs.push(JSON.parse(blog))
//   }
//   res.status(200).json(blogs)
// }

import clientPromise from '../../lib/mongodb'

export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db('scribblespot')
  switch (req.method) {
    case 'POST':
      let bodyObject = req.body
      let myPost = await db.collection('blogs').insertOne(bodyObject)
      res.json(myPost.ops[0])
      break
    case 'GET':
      const blogs = await db.collection('blogs').find({}).toArray()
      res.json({ status: 200, data: blogs })
      break
  }
}
