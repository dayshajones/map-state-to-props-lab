import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);
    return (
      <div>
        {this.props.numOfUsers}
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

 const mapStateToProps = (state) => {
   return {
     users: state.users,
    numOfUsers: state.users.length
  }
 }

// connect this component to Redux

export default connect(mapStateToProps)(Users)
