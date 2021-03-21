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
    'PUT  / - repositoryTagAll',
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
 *        - in: query
 *          name: page
 *          schema:
 *            type: integer
 *            example: 1
 *     responses:
 *       200:
 *         description: Starred repositories List
 *         content:
 *           application/json:
 *             example:
 *               hasPreviousPage: false
 *               hasNextPage: false
 *               repositories:
 *                 - id: 135082477
 *                   node_id: MDEwOlJlcG9zaXRvcnkxMzUwODI0Nzc=
 *                   name: react-div-100vh
 *                   full_name: mvasin/react-div-100vh
 *                   description: A workaround for the '100vh' issue in mobile browsers
 *                   watchers_count: 706
 *                   language: TypeScript
 *                   tags_id: 604c13a7000a9904300ab822
 *                   tags:
 *                     - games
 *                     - design
 *                     - ui
 *                     - ux
 *                 - id: 172547948
 *                   node_id: MDEwOlJlcG9zaXRvcnkxNzI1NDc5NDg=
 *                   name: create-react-native-module
 *                   full_name: brodybits/create-react-native-module
 *                   description: null
 *                   language: null
 *                   tags_id: null
 *                   tags: []
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
 *   put:
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
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *              Bad request
 */
router.put('/repositoryTagAll', repositoryTagAllPatch);

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
