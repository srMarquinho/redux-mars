import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * TaskItem interface
 *
 * @export
 * @interface TaskItem
 */
export interface TaskItem {
  _id?: string;
  title: string;
  description: string;
  addedBy: string;
  assignedTo: string;
}

/**
 * TaskItemState interface
 *
 * @interface TaskItemState
 */
interface TaskItemState {
  list: TaskItem[],
  updateId: string | null
}

const initialState: TaskItemState = {
  list: [],
  updateId: null
}

export const taskItems = createSlice({
  name: 'task-items',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<TaskItem>) => {
      const payload = { ...action.payload };
      payload._id = window.crypto.randomUUID();
      state.list.push(payload);
    },
    updateItem: (state, action: PayloadAction<TaskItem>) => {
      const index = state.list.findIndex((item => item._id === action.payload._id));
      state.list[index] = action.payload;
    },
    deleteItem: (state, action: PayloadAction<TaskItem>) => {
      state.list = [...state.list.filter(item => item._id !== action.payload._id)];
    },
    deleteAllItems: (state) => {
      state.list = [];
    },
    updateId: (state, action: PayloadAction<string>) => {
      state.updateId = action.payload;
    },
    clearUpdateId: (state) => {
      state.updateId = null;
    }
  }
});

export const {
  addItem,
  updateItem,
  deleteItem,
  deleteAllItems,
  updateId,
  clearUpdateId
} = taskItems.actions;

export default taskItems.reducer;