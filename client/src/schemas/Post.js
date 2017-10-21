const Post = `
  type Post {
    _id: String!
    userId: String!
    createdBy: String!
    tags: [Tag]
    title: String!
    text: String!
    numberOfViews: Int
    answers: [Answer]
  }
`;

export default Post;
