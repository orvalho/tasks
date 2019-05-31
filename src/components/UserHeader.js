import React from 'react';
import {connect} from 'react-redux';

const UserHeader = ({user}) => {
  return <div className="user header">{
      user
        ? user.name
        : null
    }</div>;
};

const mapStateToProps = (state, ownProps) => {
  const user = state.users.find(user => user.id === ownProps.userId);
  return {user};
};

export default connect(mapStateToProps)(UserHeader);
