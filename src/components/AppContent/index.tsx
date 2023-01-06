import TaskForm from '../Task/TaskForm';
import TaskList from '../Task/TaskList';
import { MenuItem } from '../../redux/reducers/menu';

import './AppContent.css';
import { useAppSelector } from '../../redux/hooks';

/**
 * AppContent component
 *
 * @return {*}
 */
function AppContent() {
  const menuSelected = useAppSelector((state) => state.menuItems.value);

  function renderForm() {
    switch (menuSelected) {
      case MenuItem.LIST:
        return null;
      case MenuItem.ADD_ITEM:
        return <TaskForm />;
      case MenuItem.UPDATE_ITEM:
        return <TaskForm />;
      default:
        break;
    }
  }

  return (
    <div className="app-content">
      {renderForm()}
      <TaskList />
    </div>
  );
}

export default AppContent;
