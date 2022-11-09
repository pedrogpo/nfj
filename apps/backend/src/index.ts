// express

import express from 'express';
import net from 'net'

const app = express();

app.get('/', (req, res) => {
  res.status(400).json({
    message: 'Hello World',
  })
})

const server = app.listen(3333, () => {
  const address = server.address() as net.AddressInfo;
  console.log('Example app listening on port '+address.port+'!');
})

