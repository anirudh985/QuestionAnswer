import { PostModel, UserModel, TagModel, AnswerModel, CommentModel } from '../db/db';

const resolvers = {
  RootQuery: {
    postsByUser(root, args) {
      return PostModel.find({
        createdBy: args.preferredName,
      });
    },
    // postsByKeyword(root, args) {
    //   return PostModel.find({
    //     text
    //   });
    // },
    getTag(root, args) {
      return TagModel.findOne({ tagName: args.tname });
    },
    userProfile(root, args) {
      return UserModel.findOne({
        $or: [{ fname: args.preferredName },
              { pname: args.preferredName },
              { uname: args.preferredName }],
      });
    },
  },
  Post: {
    tags(post) {
      return TagModel.find({
        _id: { $in: post.tags },
      });
    },
    answers(post) {
      return AnswerModel.find({
        _id: { $in: post.answers },
      });
    },
  },
  Answer: {
    comments(answer) {
      return CommentModel.find({
        _id: { $in: answer.comments },
      });
    },
  },
};

export default resolvers;
