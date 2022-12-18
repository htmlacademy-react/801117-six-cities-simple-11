import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Reviews } from '../../types';

export const getComments = (state: State): Reviews => state[NameSpace.Review].comments;
export const getDataLoadingReviewStatus = (state: State): boolean => state[NameSpace.Review].isDataLoading;
