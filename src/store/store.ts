import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import businessReducer from './slices/business-slice';

export const store = configureStore({
  reducer: {
    business: businessReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
