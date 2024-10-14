import OverviewItem from "./OverviewItem";

function Content({ overviewList, setOverviewList }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "8px",
        margin: "8px",
      }}
    >
      {overviewList.map((itemData) => {
        return (
          <OverviewItem
            key={itemData.id}
            itemData={itemData}
            setOverviewList={setOverviewList}
          />
        );
      })}
    </div>
  );
}

export default Content;
