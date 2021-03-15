import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import Router from '@koa/router';

import { repositoriesGet } from './modules/repositories/repositorieGet';
import { repositoryTagAllPatch } from './modules/repositories/repositoryTagAllPatch';
import { repositoryTagPatch } from './modules/repositories/repositoryTagPatch';
import { repositoryTagDelete } from './modules/repositories/repositoryTagDelete';

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(cors({ maxAge: 86400, credentials: true }));

router.get('/', ctx => {
  const info = [
    'GET  / - repositories/:username',
    'PATCH  / - repositoryTagAll',
    'PATCH  / - repositoryTag',
    'DELETE  / - repositoryTag'
  ];

  ctx.status = 200;
  ctx.body = info.join('\n');
});

router.get('/repositories/:username', repositoriesGet);
router.patch('/repositoryTagAll', repositoryTagAllPatch);
router.patch('/repositoryTag', repositoryTagPatch);
router.delete('/repositoryTag/:id/:tag', repositoryTagDelete);

app.use(router.routes()).use(router.allowedMethods());

export default app;
