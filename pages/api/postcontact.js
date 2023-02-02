import * as fs from 'fs'

// api/postcontact.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })

    return
  } else {
    const data = fs.readFileSync('contactdata/results.json', 'utf-8')

    let obj = JSON.parse(data)

    obj.push(req.body)

    let newData = JSON.stringify(obj)

    fs.writeFile('contactdata/results.json', newData, (err) => {
      // error checking
      if (err) throw err

      console.log('New data added')
    })

    res.status(200).json(req.body)
  }
}
