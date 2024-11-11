import { useContext, useState } from "react";
import { OverviewContext } from "./OverviewProvider.js";
import CreateForm from "./CreateForm.js";

function Toolbar() {
  const { showArchived, setShowArchived } = useContext(OverviewContext);
  const [showCreateForm, setShowCreateForm] = useState();

  return (
    <div>
      {showCreateForm ? <CreateForm onClose={() => setShowCreateForm(false)} /> : null}
      <button onClick={() => setShowCreateForm(true)}>Create</button>
      <button onClick={() => setShowArchived((current) => !current)}>Filter {showArchived.toString()}</button>
    </div>
  );
}

export default Toolbar;
