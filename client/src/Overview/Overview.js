import OverviewProvider from "./OverviewProvider";

import ToDoListOverviewList from "./OverviewList.js";
import Toolbar from "./Toolbar.js";

function Overview({ setSelected }) {
  return (
    <OverviewProvider>
      <Toolbar />
      <ToDoListOverviewList setSelected={setSelected} />
    </OverviewProvider>
  );
}

export default Overview;
