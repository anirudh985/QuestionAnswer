import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider,
} from 'react-apollo';
import schema from './schemas/schema';

const client = new ApolloClient();
const userQuery = gql`
query userProfile {
  uname
  lname
  fname
  pname
}
`;

const userslist = ({ data: {loading, error, users }}) => {
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

const UserQueryWithData = graphql(userQuery);
(userslist);

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
