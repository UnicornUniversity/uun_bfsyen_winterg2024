import DetailProvider from "./Provider";
import Header from "./Header";
import Toolbar from "./Toolbar";
import MemberList from "./MemberList";
import ItemList from "./ItemList";

function Detail() {
  return (
    <DetailProvider>
      <Header />
      <Toolbar />
      <MemberList />
      <ItemList />
    </DetailProvider>
  );
}

export default Detail;
