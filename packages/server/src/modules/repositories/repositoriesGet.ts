import { Context } from 'koa';

export const repositoriesGet = async (ctx: Context) => {
  const { username } = ctx.params;

  const response = await fetch(
    `https://api.github.com/users/${username}/starred`
  );

  const data = await response.json();

  console.log(data);

  ctx.body = data;
  ctx.status = 200;
};
