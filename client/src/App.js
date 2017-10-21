import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider,
} from 'react-apollo';
import {
  addMockFunctionsToSchema
} from 'graphql-tools';
import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';

import schema from './schemas/schema';

// addMockFunctionsToSchema({ schema });
//
// const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema });

// const client = new ApolloClient({
//   networkInterface: mockNetworkInterface,
// });

const client = new ApolloClient();

const userProfileQuery = gql`
query UserProfileQuery {
  userProfile(preferredName: "AJ") {
    uname: String
    fname: String
    lname: String
    pname: String
    numberOfQuestions: Int
    numberOfAnswers: Int
    numberOfVotesCast: Int
    numberOfVotesEarned: Int
    experienceLevel: Int
  }
}
`;

const UserProfileComponent = ({ data: {loading, error, users }}) => {
   if (loading) {
     return <p>Loading ...</p>;
   }
   if (error) {
     return <p>{error.message}</p>;
   }
   return <ul>
     { users.map( user => <li key={user.uname}>{user.fname}</li> ) }
   </ul>;
 };

const UserQueryWithData = graphql(userProfileQuery)(UserProfileComponent);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
         <div className="App">
           <div className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
             <h2>Welcome to Question and Answer Forum</h2>
           </div>
           <UserQueryWithData/>
         </div>
       </ApolloProvider>
    );
  }
}

export default App;
