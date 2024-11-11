import Toolbar from "./Toolbar";
import MemberList from "./MemberList";
import ItemList from "./ItemList";
import DetailProvider from "./DetailProvider";

function Detail({ id }) {
  console.log(id);
  return (
    <div>
      <DetailProvider>
        <Toolbar />
        <MemberList />
        <ItemList />
      </DetailProvider>
    </div>
  );
}

export default Detail;
