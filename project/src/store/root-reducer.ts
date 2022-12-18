import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offersProcess } from './offers-process/offers-process';
import { reviewProcess } from './review-process/review-process';
import { userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.Review]: reviewProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
