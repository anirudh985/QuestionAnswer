
import {
  makeExecutableSchema,
  // addMockFunctionsToSchema,
} from 'graphql-tools';
// import mocks from '../mocks/mocks';
// import { merge } from 'lodash';
import User from './User';
import Post from './Post';
import Comment from './Comment';
import Answer from './Answer';
import Tag from './Tag';

const RootQuery = `
  type RootQuery {
    postsByUser(preferredName: String): [Post]
    postsByKeyword(keyword: String): [Post]
    userProfile(preferredName: String!): User
    getTag(tname: String!): Tag
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;
// const typeDefs = `
// type Query {
//   getUserProfile(preferredName: String!): User
// }
// `;


const typeDefs = [User, Post, Comment, Answer, Tag, RootQuery, SchemaDefinition];

// const typeDefs = [User, Post, Comment, Answer, Tag, Query];

/* const typeDefs = `
  type Query {
    postsByUser(preferredName: String): [ String ]
    postsByKeyword(keyword: String): [ String ]
    userProfile(preferredName: String): User
}
`;
*/

const schema = makeExecutableSchema({ typeDefs });
// const schema = makeExecutableSchema({ typeDefs, resolvers });

// addMockFunctionsToSchema({ schema, mocks });

export default schema;
