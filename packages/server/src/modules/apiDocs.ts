import { Context } from 'koa';
import swaggerJsdoc from 'swagger-jsdoc';

export const apiDocs = async (ctx: Context) => {
  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'GithubStars API',
        version: '1.0.0'
      }
    },
    apis: ['./src/app*.ts']
  };

  const swaggerSpec = await swaggerJsdoc(options);

  ctx.body = swaggerSpec;
  ctx.status = 200;
};
