import { ParameterizedContext } from 'koa';
import Repository from './RepositoryModel';
import { ObjectID } from 'mongodb';

type RepositoryPatchBody = {
  _id?: ObjectID;
  username?: string;
  full_name?: string;
  tags?: Array<string>;
  createdAt?: Date;
  updatedAt?: Date;
  message?: string;
};

export const repositoryTagAllPatch = async (
  ctx: ParameterizedContext<{}, {}, RepositoryPatchBody>
) => {
  const { body } = ctx.request;

  const repository = await Repository.findOne({
    username: body.username,
    full_name: body.full_name
  }).lean();

  if (repository) {
    const updatedRepository = await Repository.findByIdAndUpdate(
      {
        _id: repository._id
      },
      {
        $set: {
          tags: body.tags
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

    ctx.body = {
      message: 'Error when trying to update tags'
    };
    ctx.status = 404;
    return;
  }

  const { _id, tags } = await new Repository({
    username: body.username,
    full_name: body.full_name,
    tags: body.tags
  }).save();

  ctx.body = {
    _id,
    tags
  };
  ctx.status = 200;
};
