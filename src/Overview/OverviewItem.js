import { useContext } from "react";
import { UserContext } from "../Users/UserProvider";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Icon from "@mdi/react";
import { mdiDeleteForeverOutline } from "@mdi/js";

function OverviewItem({ itemData, setOverviewList }) {
  const { loggedInUser } = useContext(UserContext);

  return (
    <Card>
      <Card.Body>
        <Card.Title>{itemData.name}</Card.Title>
        {loggedInUser === itemData.owner ? (
          <>
            <Button
              variant="warning"
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
            </Button>
            <Button
              variant="danger"
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
              <Icon size={1} path={mdiDeleteForeverOutline} />
            </Button>
          </>
        ) : null}
      </Card.Body>
    </Card>
    // <div>
    //   <pre>{JSON.stringify(itemData, null, 2)}</pre>

    // </div>
  );
}

export default OverviewItem;
