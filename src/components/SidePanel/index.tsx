import { Divider, ListItemText, MenuItem as MenuItemUi, MenuList, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { MenuItem, setMenuItem } from '../../redux/reducers/menu';
import { deleteAllItems } from '../../redux/reducers/taskItems';

import './SidePanel.css';

/**
 * SidePanel component
 *
 * @return {*}
 */
function SidePanel() {
  const taskItems = useAppSelector((state) => state.taskItems.list);
  const menuSelected = useAppSelector((state) => state.menuItems.value);
  const dispatch = useAppDispatch();

  const [selectedName, setSelectedName] = useState('');

  useEffect(() => {
    let name = '';
    switch (menuSelected) {
      case MenuItem.LIST:
        name = 'List';
        break;
      case MenuItem.ADD_ITEM:
        name = 'Add Task';
        break;
      case MenuItem.UPDATE_ITEM:
        name = 'Update Task';
        break;
      default:
        break;
    }
    setSelectedName(name);
  }, [menuSelected]);

  return (
    <div className="side-panel">
      <h1>{selectedName}</h1>
      <Paper sx={{ maxWidth: '100%' }}>
        <MenuList>
          <MenuItemUi>
            <ListItemText onClick={() => dispatch(setMenuItem(MenuItem.LIST))}>Tasks List ({taskItems.length})</ListItemText>
          </MenuItemUi>
          <Divider />
          <MenuItemUi>
            <ListItemText onClick={() => dispatch(setMenuItem(MenuItem.ADD_ITEM))}>Add Task</ListItemText>
          </MenuItemUi>
          <MenuItemUi>
            <ListItemText onClick={() => dispatch(deleteAllItems())}>Delete All Tasks</ListItemText>
          </MenuItemUi>
        </MenuList>
      </Paper>
    </div>
  );
}

export default SidePanel;
