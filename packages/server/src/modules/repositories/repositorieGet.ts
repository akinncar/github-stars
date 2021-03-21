import { Context } from 'koa';
import Repository from './RepositoryModel';

function getPages(link: string) {
  const hasPreviousPage = link.indexOf(`rel="prev"`) !== -1;
  const hasNextPage = link.indexOf(`rel="next"`) !== -1;

  return { hasPreviousPage, hasNextPage };
}

export const repositoriesGet = async (ctx: Context) => {
  const { username } = ctx.params;
  const { tag, page } = ctx.query;

  // filter
  if (tag && typeof tag === 'string') {
    const repositories = await Repository.find({
      username,
      tags: { $regex: `${tag.toLowerCase()}` }
    });

    ctx.body = { hasPreviousPage: false, hasNextPage: false, repositories };
    ctx.status = 200;
    return;
  }

  const response = await fetch(
    `https://api.github.com/users/${username}/starred?page=${page}`
  );

  const { hasPreviousPage, hasNextPage } = getPages(
    response.headers.get('link') || ''
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

  ctx.body = { hasPreviousPage, hasNextPage, repositories: newData };
  ctx.status = 200;
};
