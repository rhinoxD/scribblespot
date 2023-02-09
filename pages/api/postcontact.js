// import * as fs from 'fs'

// // api/postcontact.js
// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     res.status(405).send({ message: 'Only POST requests allowed' })

//     return
//   } else {
//     const data = fs.readFileSync('contactdata/results.json', 'utf-8')

//     let obj = JSON.parse(data)

//     obj.push(req.body)

//     let newData = JSON.stringify(obj)

//     fs.writeFile('contactdata/results.json', newData, (err) => {
//       // error checking
//       if (err) throw err
//     })

//     res.status(200).json(req.body)
//   }
// }

import clientPromise from '../../lib/mongodb'

export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db('scribblespot')
  switch (req.method) {
    case 'POST':
      let bodyObject = req.body
      console.log(bodyObject)
      let myPost = await db.collection('contacts').insertOne(bodyObject)
      res.json(myPost.ops[0])
      break
  }
}
