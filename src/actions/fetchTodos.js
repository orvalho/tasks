import jsonPlaceholder from '../apis/jsonPlaceholder';
import {FETCH_TODOS} from './types';

export default() => async dispatch => {
  const response = await jsonPlaceholder.get('/todos');
  dispatch({type: FETCH_TODOS, payload: response.data});
};
