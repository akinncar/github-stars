import 'isomorphic-fetch';
import { createServer } from 'http';
import app from './app';

(async () => {
  const server = createServer(app.callback());

  server.listen(3333, () => {
    console.log(`🚀 Server running at http://localhost:3333`);
  });
})();
