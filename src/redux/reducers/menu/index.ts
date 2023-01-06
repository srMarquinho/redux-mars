import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Menu Item interface
 *
 * @export
 * @enum {number}
 */
export enum MenuItem {
  LIST,
  ADD_ITEM,
  UPDATE_ITEM
}

export const menuItems = createSlice({
  name: 'menu',
  initialState: { value: MenuItem.LIST },
  reducers: {
    setMenuItem: (state, action: PayloadAction<MenuItem>) => {
      state.value = action.payload;
    }
  }
});

export const { setMenuItem } = menuItems.actions;

export default menuItems.reducer;