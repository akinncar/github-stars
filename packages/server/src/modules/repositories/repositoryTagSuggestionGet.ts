import { Context } from 'koa';
import Repository from './RepositoryModel';

const mostFrequent = (arr: Array<string>) =>
  Object.entries(
    arr.reduce<Record<string, number>>((a, v) => {
      a[v] = a[v] ? a[v] + 1 : 1;
      return a;
    }, {})
  ).reduce<Record<string, any>>((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0];

export const repositoryTagSuggestionGet = async (ctx: Context) => {
  const { language } = ctx.params;

  const repositories = await Repository.find({
    language: { $regex: new RegExp('^' + language.toLowerCase(), 'i') }
  });

  if (!repositories) {
    ctx.body = [];
    ctx.status = 200;
  }

  let allTags: Array<string> = [];

  repositories.map(repository => {
    allTags.push(...repository.tags);
  });

  const firstSuggestedTag = mostFrequent(allTags);

  let reducedTags: Array<string> = allTags.filter(
    tag => tag !== firstSuggestedTag
  );

  const secondSuggestedTag = mostFrequent(reducedTags);

  let suggestions: Array<string> = [
    firstSuggestedTag,
    secondSuggestedTag
  ].filter(tag => tag !== null);

  ctx.body = suggestions;
  ctx.status = 200;
};
