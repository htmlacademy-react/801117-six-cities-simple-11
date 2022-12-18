import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ReviewProcces } from '../../types/state';
import {
  fetchComments,
  sendComment
} from '../api-action';

const initialState: ReviewProcces = {
  comments: [],
  isDataLoading: false,
};

export const reviewProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(sendComment.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(sendComment.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isDataLoading = false;
      })
      .addCase(sendComment.rejected, (state) => {
        state.isDataLoading = false;
      });
  }
});
