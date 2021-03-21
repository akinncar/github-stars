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

  ctx.body = [
    {
      id: 347493428,
      node_id: 'MDEwOlJlcG9zaXRvcnkzNDc0OTM0Mjg=',
      name: 'relay-first-try',
      full_name: 'luiznasciment0/relay-first-try',
      description: 'Aquela desc',
      language: 'PHP',
      tags_id: null,
      tags: []
    },
    {
      id: 135082477,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMzUwODI0Nzc=',
      name: 'react-div-100vh',
      full_name: 'mvasin/react-div-100vh',
      description: "A workaround for the '100vh' issue in mobile browsers",
      watchers_count: 706,
      language: 'TypeScript',
      tags_id: '604c13a7000a9904300ab822',
      tags: ['games', 'design', 'ui', 'ux']
    },
    {
      id: 172547948,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNzI1NDc5NDg=',
      name: 'create-react-native-module',
      full_name: 'brodybits/create-react-native-module',
      description: null,
      language: 'JavaScript',
      tags_id: null,
      tags: []
    }
  ];
  ctx.status = 200;
  return;

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
