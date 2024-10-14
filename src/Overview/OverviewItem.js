function OverviewItem({ itemData, setOverviewList }) {
  return (
    <div>
      <pre>{JSON.stringify(itemData, null, 2)}</pre>
      <button
        onClick={() => {
          setOverviewList((currentData) => {
            const itemIndex = currentData.findIndex(
              (item) => item.id === itemData.id
            );
            if (itemIndex > -1) {
              currentData.splice(itemIndex, 1);
            }
            return currentData.slice();
          });
        }}
      >
        delete
      </button>
    </div>
  );
}

export default OverviewItem;
