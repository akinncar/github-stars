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

export const repositoryTagPatch = async (
  ctx: ParameterizedContext<{}, {}, RepositoryPatchBody>
) => {
  const { body } = ctx.request;

  const repository = await Repository.findOne({
    username: body.username,
    full_name: body.full_name
  }).lean();

  if (repository) {
    if (repository.tags.includes(body.tag)) {
      ctx.body = {
        message: 'This tag already exists'
      };
      ctx.status = 409;

      return;
    }

    const newTags = [...repository.tags, body.tag];

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

    ctx.body = {
      message: 'Tag not found for this repository'
    };
    ctx.status = 404;
    return;
  }

  const { _id, tags } = await new Repository({
    username: body.username,
    full_name: body.full_name,
    tags: [body.tag]
  }).save();

  ctx.body = {
    _id,
    tags
  };
  ctx.status = 200;
};
