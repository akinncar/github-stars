import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import Router from '@koa/router';
import { repositoriesGet } from './modules/repositories/repositoriesGet';

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(cors({ maxAge: 86400, credentials: true }));

router.get('/', ctx => {
  const info = ['GET  / - repositoriesGet/:username'];

  ctx.status = 200;
  ctx.body = info.join('\n');
});

router.get('/repositoriesGet/:username', repositoriesGet);

app.use(router.routes()).use(router.allowedMethods());

export default app;
