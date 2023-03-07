import { combineReducers } from 'redux';
import nfts from './nftsReducer';

const createReducer = () =>
  combineReducers({
    nfts,
  });

export default createReducer;