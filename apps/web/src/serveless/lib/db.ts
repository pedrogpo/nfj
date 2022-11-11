import mysql from 'serverless-mysql'

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    port: 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  },
})

export const executeQuery = async (query: string) => {
  try {
    const results = await db.query(query)
    await db.end()
    return results
  } catch (error) {
    return { problema: 'foi amar demais' }
  }
}
