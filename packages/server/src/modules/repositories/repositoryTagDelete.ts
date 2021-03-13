import { Context } from 'koa';
import Repository from './RepositoryModel';

export const repositoryTagDelete = async (ctx: Context) => {
  const { id, tag } = ctx.params;

  const repository = await Repository.findOne({
    _id: id
  }).lean();

  if (repository) {
    if (!repository.tags.includes(tag)) {
      ctx.body = {
        message: 'Tag not found for this repository'
      };
      ctx.status = 404;

      return;
    }

    const newTags = repository.tags.filter(item => item !== tag);

    const updatedRepository = await Repository.findByIdAndUpdate(
      {
        _id: repository._id
      },
      {
        $set: {
          tags: newTags
        }
      },
      { new: true }
    );

    if (updatedRepository) {
      ctx.body = {
        _id: updatedRepository._id,
        tags: updatedRepository.tags
      };
      ctx.status = 200;
      return;
    }
  }

  ctx.body = {
    message: 'Repository not found'
  };
  ctx.status = 404;
};
