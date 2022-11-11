import { NextApiRequest, NextApiResponse } from 'next'
import { executeQuery } from '~/serveless/lib/db'
import axios from 'axios'

export const config = {
  runtime: 'experimental-edge',
}

export default async function teste(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const result = await axios.get('https://api.github.com/users/pedrogpo')

        return res.status(200).json(result)
      } catch (error) {
        return res.status(500).json({ error })
      }
    default:
      return res.status(405).json({ error: 'Method not allowed' })
  }
}
