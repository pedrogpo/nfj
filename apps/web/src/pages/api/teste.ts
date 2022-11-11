import { NextApiRequest, NextApiResponse } from 'next'
import { executeQuery } from '~/serveless/lib/db'

export default async function teste(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const results = await executeQuery('SELECT * FROM users')
        res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

        return res.status(200).json(results)
      } catch (error) {
        return res.status(500).json({ error })
      }
    default:
      return res.status(405).json({ error: 'Method not allowed' })
  }
}
