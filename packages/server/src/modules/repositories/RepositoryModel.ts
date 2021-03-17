import mongoose, { Document, Model } from 'mongoose';
import { ObjectID } from 'mongodb';

const Schema = new mongoose.Schema(
  {
    username: {
      type: String,
      description: 'user that starred repository'
    },
    full_name: {
      type: String,
      description: 'full name of repository'
    },
    html_url: {
      type: String,
      description: 'html url of repository'
    },
    description: {
      type: String,
      description: 'description of repository'
    },
    language: {
      type: String,
      description: 'language of repository'
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
  _id: ObjectID;
  username: string;
  full_name: string;
  html_url: string;
  description: string;
  language: string;
  tags: Array<string>;
  createdAt: Date;
  updatedAt: Date;
}

const RepositoryModel: Model<IRepository> = mongoose.model(
  'Repository',
  Schema
);

export default RepositoryModel;
