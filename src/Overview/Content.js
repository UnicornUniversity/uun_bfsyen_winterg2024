import OverviewItem from "./OverviewItem";

function Content({ overviewList, setOverviewList }) {
  return overviewList.map((itemData) => {
    return (
      <OverviewItem
        key={itemData.id}
        itemData={itemData}
        setOverviewList={setOverviewList}
      />
    );
  });
}

export default Content;
