/**
 * Created by itay on 08/11/16.
 */
import { combineReducers } from 'redux';
import counter from './counter';

var rootReducers = combineReducers({
  counter
})

export default rootReducers;