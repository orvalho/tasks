import React from 'react';

export default({userId}) => {
  return <img className="ui avatar image" src={`./tasks/img/avatars/${userId}.png`} alt={`user-${userId}`}/>;
};
