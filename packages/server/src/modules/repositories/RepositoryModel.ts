import mongoose, { Document, Model } from 'mongoose';

const Schema = new mongoose.Schema(
  {
    username: {
      type: String,
      description: 'user that starred the repository'
    },
    full_name: {
      type: String,
      description: 'full name of repository'
    },
    tags: {
      type: [String],
      description: 'tags of repository',
      trim: true
    }
  },
  {
    collection: 'Repository',
    timestamps: true
  }
);

export interface IRepository extends Document {
  username: string;
  full_name: string;
  tags: Array<string>;
  createdAt: Date;
  updatedAt: Date;
}

const RepositoryModel: Model<IRepository> = mongoose.model(
  'Repository',
  Schema
);

export default RepositoryModel;
