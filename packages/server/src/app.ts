import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import Router from '@koa/router';

import { repositoryGet } from './modules/repositories/repositoryGet';
import { repositoryTagAllPatch } from './modules/repositories/repositoryTagAllPatch';
import { repositoryTagPatch } from './modules/repositories/repositoryTagPatch';
import { repositoryTagDelete } from './modules/repositories/repositoryTagDelete';

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(cors({ maxAge: 86400, credentials: true }));

router.get('/', ctx => {
  const info = [
    'GET  / - repositoriesGet/:username',
    'PATCH  / - repositoryTagAllPatch',
    'PATCH  / - repositoryTagPatch',
    'DELETE  / - repositoryTagDelete'
  ];

  ctx.status = 200;
  ctx.body = info.join('\n');
});

router.get('/repositoryGet/:username', repositoryGet);
router.patch('/repositoryTagAllPatch', repositoryTagAllPatch);
router.patch('/repositoryTagPatch', repositoryTagPatch);
router.delete('/repositoryTagDelete/:id/:tag', repositoryTagDelete);

app.use(router.routes()).use(router.allowedMethods());

export default app;
