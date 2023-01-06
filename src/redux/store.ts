import { configureStore } from '@reduxjs/toolkit';
import menuItems from './reducers/menu';
import taskItems from './reducers/taskItems';

const store = configureStore({
  reducer: {
    menuItems,
    taskItems
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
