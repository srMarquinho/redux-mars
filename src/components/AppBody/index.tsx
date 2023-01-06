import AppContent from '../AppContent';
import SidePanel from '../SidePanel';
import './AppBody.css';

/**
 *
 *
 * @return {*}
 */
function AppBody() {
  return (
    <div className="app-body">
      <SidePanel />
      <AppContent />
    </div>
  );
}

export default AppBody;
