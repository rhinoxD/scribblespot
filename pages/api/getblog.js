import * as fs from 'fs'

// http://localhost:3000/api/getblog?slug=intro-to-js
export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data) => {
    if (err) {
      res.status(400).json({ error: `${req.query.slug} not found` })
    }
    res.status(200).json(JSON.parse(data))
  })
}
