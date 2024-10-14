import Header from "./Header";
import Content from "./Content";

function Overview({ overviewList, setOverviewList }) {
  return (
    <>
      <Header setOverviewList={setOverviewList} />
      <Content overviewList={overviewList} setOverviewList={setOverviewList} />
    </>
  );
}

export default Overview;
