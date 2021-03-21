import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import Router from '@koa/router';

import { repositoriesGet } from './modules/repositories/repositorieGet';
import { repositoryTagAllPatch } from './modules/repositories/repositoryTagAllPatch';
import { repositoryTagPatch } from './modules/repositories/repositoryTagPatch';
import { repositoryTagDelete } from './modules/repositories/repositoryTagDelete';
import { repositoryTagSuggestionGet } from './modules/repositories/repositoryTagSuggestionGet';

import { apiDocs } from './modules/apiDocs';

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(cors({ maxAge: 86400, credentials: true }));

router.get('/', ctx => {
  const info = [
    'GET  / - repositories/:username',
    'PATCH  / - repositoryTagAll',
    'PATCH  / - repositoryTag',
    'DELETE  / - repositoryTag',
    'GET  / - repositoryTagSuggestion/:language'
  ];

  ctx.status = 200;
  ctx.body = info.join('\n');
});

router.get('/api-docs', apiDocs);

/**
 * @openapi
 * /repositories/{username}:
 *   get:
 *     description: User starred repositories
 *     tags: [Starred Repositories]
 *     summary: Starred repositories
 *     parameters:
 *        - name: username
 *          description: Github username
 *          in: path
 *          required: true
 *          schema:
 *             type: string
 *             example: akinncar
 *     responses:
 *       200:
 *         description: Starred repositories List
 *         content:
 *           application/json:
 *             example:
 *             - tags:
 *                 - facebook
 *                 - tsc
 *               _id: 60567453f41e101f44a3d9ea
 *               username: akinncar
 *               full_name: facebook/docusaurus
 *               createdAt: '2021-03-20T22:16:51.355Z'
 *               updatedAt: '2021-03-20T22:29:43.757Z'
 *       404:
 *         description: Repositories not found
 *         content:
 *           application/json:
 *             example:
 *              message: Not Found
 */
router.get('/repositories/:username', repositoriesGet);

/**
 * @openapi
 * /repositoryTagAll:
 *   patch:
 *     description: Update tags to a starred repository
 *     tags: [Repository Tags]
 *     summary: Update tags
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 description: Github username
 *                 type: string
 *                 example: "akinncar"
 *               full_name:
 *                 description: Repository full name
 *                 type: string
 *                 example: "facebook/relay"
 *               tags:
 *                 description: All repository tags
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["framework", "graphql", "js"]
 *     responses:
 *       200:
 *           description: Edited tags
 *           content:
 *             application/json:
 *               example:
 *                _id: 60513b24f39d7e495c62eb8b
 *                tags:
 *                  - framework
 *                  - graphql
 *                  - js
 */
router.patch('/repositoryTagAll', repositoryTagAllPatch);

/**
 * @openapi
 * /repositoryTag:
 *   patch:
 *     description: Add a new tag for starred repository
 *     tags: [Repository Tags]
 *     summary: Add a new tag
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 description: Github username
 *                 type: string
 *                 example: "akinncar"
 *               full_name:
 *                 description: Repository full name
 *                 type: string
 *                 example: "facebook/docusaurus"
 *               tag:
 *                 description: Tag to add
 *                 type: string
 *                 example: "javascript"
 *     responses:
 *       200:
 *           description: Edited tags
 *           content:
 *             application/json:
 *               example:
 *                _id: 60513b24f39d7e495c62eb8b
 *                tags:
 *                  - javascript
 *       409:
 *         description: This tag already exists
 *         content:
 *           application/json:
 *             example:
 *              message: This tag already exists
 */
router.patch('/repositoryTag', repositoryTagPatch);

/**
 * @openapi
 * /repositoryTag/{id}/{tag}:
 *   delete:
 *     description: Delete an existent tag from a repository
 *     tags: [Repository Tags]
 *     summary: Delete tag
 *     parameters:
 *        - name: id
 *          description: Database unique id
 *          in: path
 *          required: true
 *          schema:
 *             type: string
 *             example: "60567453f41e101f44a3d9ea"
 *        - name: tag
 *          description: Tag to delete
 *          in: path
 *          required: true
 *          schema:
 *             type: string
 *             example: "javascript"
 *     responses:
 *       200:
 *           description: Edited tags
 *           content:
 *             application/json:
 *               example:
 *                _id: 60513b24f39d7e495c62eb8b
 *                tags:
 *                  - webpack
 *       404:
 *         description: Tag not found for this repository
 *         content:
 *           application/json:
 *             example:
 *              message: Tag not found for this repository
 */
router.delete('/repositoryTag/:id/:tag', repositoryTagDelete);

/**
 * @openapi
 * /repositoryTagSuggestion/{language}:
 *   get:
 *     description: Suggested tags for a repository
 *     tags: [Repository Tags]
 *     summary: Suggested tags
 *     parameters:
 *        - name: language
 *          description: Repository language
 *          in: path
 *          required: true
 *          schema:
 *             type: string
 *             example: TypeScript
 *     responses:
 *       200:
 *           description: Suggested tags
 *           content:
 *             application/json:
 *               example:
 *               - koa
 *               - tsc
 */
router.get('/repositoryTagSuggestion/:language', repositoryTagSuggestionGet);

app.use(router.routes()).use(router.allowedMethods());

export default app;
