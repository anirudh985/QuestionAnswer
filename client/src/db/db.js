import mongoose from 'mongoose';

const mongo = mongoose.connect('mongodb://localhost/qa', { useMongoClient: true });

const UserSchema = new mongoose.Schema({
  uname: String,
  fname: String,
  lname: String,
  pname: String,
  numberOfQuestions: Number,
  numberOfAnswers: Number,
  numberOfVotesCast: Number,
  numberOfVotesEarned: Number,
  experienceLevel: Number,
});

const TagSchema = new mongoose.Schema({
  tagName: String,
});

const CommentSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  writtenBy: String,
  postId: mongoose.Schema.Types.ObjectId,
  answerId: mongoose.Schema.Types.ObjectId,
  text: String,
});

const AnswerSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  writtenBy: String,
  text: String,
  numberOfUpvotes: Number,
  numberOfDownvotes: Number,
  accepted: Boolean,
  comments: [mongoose.Schema.Types.ObjectId],
  postId: mongoose.Schema.Types.ObjectId,
});

const PostSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  createdBy: String,
  tags: [mongoose.Schema.Types.ObjectId],
  title: String,
  text: String,
  numberOfViews: Number,
  answers: [mongoose.Schema.Types.ObjectId],
});

const PostModel = mongo.model('posts', PostSchema);
const UserModel = mongo.model('users', UserSchema);
const TagModel = mongo.model('tags', TagSchema);
const AnswerModel = mongo.model('answers', AnswerSchema);
const CommentModel = mongo.model('comments', CommentSchema);

export { PostModel, UserModel, TagModel, AnswerModel, CommentModel };
