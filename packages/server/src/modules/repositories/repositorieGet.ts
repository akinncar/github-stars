import { Context } from 'koa';
import Repository from './RepositoryModel';

export const repositoriesGet = async (ctx: Context) => {
  const { username } = ctx.params;

  // filter
  if (ctx.query.tag && typeof ctx.query.tag === 'string') {
    const repositories = await Repository.find({
      username,
      tags: { $regex: `${ctx.query.tag.toLowerCase()}` }
    });

    ctx.body = repositories;
    ctx.status = 200;
    return;
  }

  const response = await fetch(
    `https://api.github.com/users/${username}/starred`
  );

  const data = await response.json();

  if (data.message) {
    ctx.body = data;
    ctx.status = 404;
    return;
  }

  const repositories = await Repository.find({
    username
  });

  let newData: Array<any> = [];

  data.map((item: any) => {
    const repo = repositories.find(
      repository => repository.full_name === item.full_name
    );

    if (repo) {
      item['tags_id'] = repo._id;
      item['tags'] = repo.tags;
    } else {
      item['tags_id'] = null;
      item['tags'] = [];
    }
    newData.push(item);
  });

  ctx.body = newData;
  ctx.status = 200;
};
