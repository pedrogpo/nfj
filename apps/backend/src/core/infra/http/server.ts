import 'reflect-metadata'
import '../providers/index.ts'
import { app } from './app'

app.listen(3333, () => {
  console.log('Example app listening on port !')
})
