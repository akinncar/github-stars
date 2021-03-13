import { Context } from 'koa';
import Repository from './RepositoryModel';

export const repositoryGet = async (ctx: Context) => {
  const { username } = ctx.params;

  const response = await fetch(
    `https://api.github.com/users/${username}/starred`
  );

  const data = await response.json();

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
