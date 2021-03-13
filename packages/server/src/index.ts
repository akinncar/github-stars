import 'isomorphic-fetch';
import { createServer } from 'http';
import app from './app';
import { connectDatabase } from './mongo';

(async () => {
  await connectDatabase();

  const server = createServer(app.callback());

  server.listen(3333, () => {
    console.log(`🚀 Server running at http://localhost:3333`);
  });
})();
