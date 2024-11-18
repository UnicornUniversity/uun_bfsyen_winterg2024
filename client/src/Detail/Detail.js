import Toolbar from "./Toolbar";
import MemberList from "./MemberList";
import ItemList from "./ItemList";
import DetailProvider from "./DetailProvider";

function Detail() {
  return (
    <div className="p-2">
      <DetailProvider>
        <Toolbar />
        <MemberList />
        <ItemList />
      </DetailProvider>
    </div>
  );
}

export default Detail;
