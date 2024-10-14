import { useContext } from "react";
import { UserContext } from "../Users/UserProvider";

function OverviewItem({ itemData, setOverviewList }) {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div>
      <pre>{JSON.stringify(itemData, null, 2)}</pre>
      {loggedInUser === itemData.owner ? (
        <>
          <button
            onClick={() => {
              setOverviewList((currentData) => {
                const itemIndex = currentData.findIndex(
                  (item) => item.id === itemData.id
                );
                currentData[itemIndex] = {
                  ...currentData[itemIndex],
                  archived: true,
                };
                return currentData.slice();
              });
            }}
          >
            archive
          </button>
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
        </>
      ) : null}
    </div>
  );
}

export default OverviewItem;
