import _ from 'lodash';
import fetchTodos from './fetchTodos';
import fetchUser from './fetchUser';

export default() => async (dispatch, getState) => {
  await dispatch(fetchTodos());
  _.chain(getState().todos).map('userId').uniq().forEach(id => dispatch(fetchUser(id))).value();
};
