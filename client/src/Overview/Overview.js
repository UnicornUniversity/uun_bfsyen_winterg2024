import OverviewProvider from "./OverviewProvider";

import Header from "./Header.js";
import ToDoListOverviewList from "./OverviewList.js";
import Toolbar from "./Toolbar.js";

function Overview() {
  return (
    <OverviewProvider>
      <Header />
      <Toolbar />
      <ToDoListOverviewList />
    </OverviewProvider>
  );
}

export default Overview;
