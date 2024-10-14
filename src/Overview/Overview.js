import Header from "./Header";
import Content from "./Content";

function Overview({
  overviewList,
  setOverviewList,
  showArchived,
  setShowArchived,
}) {
  return (
    <>
      <Header
        setOverviewList={setOverviewList}
        showArchived={showArchived}
        setShowArchived={setShowArchived}
      />
      <Content overviewList={overviewList} setOverviewList={setOverviewList} />
    </>
  );
}

export default Overview;
