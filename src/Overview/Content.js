import OverviewItem from "./OverviewItem";

function Content({ overviewList, setOverviewList }) {
  return overviewList.map((itemData) => {
    return (
      <OverviewItem itemData={itemData} setOverviewList={setOverviewList} />
    );
  });
}

export default Content;
