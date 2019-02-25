import { combineReducers } from 'redux';
import reducerPost from './reducer-posts';
import reducerActivePost from './reducer-active-post';

const rootReducer = combineReducers({
  posts: reducerPost,
  ActivePost: reducerActivePost
});

export default rootReducer;
