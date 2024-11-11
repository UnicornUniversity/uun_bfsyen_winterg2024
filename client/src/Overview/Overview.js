import OverviewProvider from "./OverviewProvider";

import ToDoListOverviewList from "./OverviewList.js";
import Toolbar from "./Toolbar.js";

function Overview() {
  return (
    <OverviewProvider>
      <Toolbar />
      <ToDoListOverviewList />
    </OverviewProvider>
  );
}

export default Overview;
