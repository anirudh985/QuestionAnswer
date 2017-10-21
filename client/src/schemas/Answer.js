const Answer = `
  type Answer {
    _id: String!
    userId: String!
    writtenBy: String!
    text: String!
    numberOfUpvotes: Int
    numberOfDownvotes: Int
    accepted: Boolean
    comments: [Comment]
    answerId: String!
  }
`;

export default Answer;
