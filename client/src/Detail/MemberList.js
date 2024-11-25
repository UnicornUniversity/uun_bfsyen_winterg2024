import { useContext, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Icon from "@mdi/react";
import { mdiAccountPlusOutline } from "@mdi/js";

import { DetailContext } from "./DetailProvider";
import { UserContext } from "../Users/UserProvider";
import AddMemberForm from "./AddMemberForm";
import Member from "./Member";

function MemberList() {
  const { data, handlerMap } = useContext(DetailContext);
  const { userMap, userList, loggedInUser } = useContext(UserContext);
  const [show, setShow] = useState(false);

  return (
    <div style={{ display: "flex", gap: "4px" }}>
      <AddMemberForm
        show={show}
        data={data}
        userList={userList}
        handlerMap={handlerMap}
        handleClose={() => setShow(false)}
      />
      <Row className="p-2">
        <Col className="p-0">
          <Member
            memberId={data.owner}
            data={userMap[data.owner]}
            isOwner={true}
          />
        </Col>
        {data.memberList?.map((memberId) => (
          <Col className="p-0">
            <Member
              key={memberId}
              memberId={memberId}
              data={userMap[memberId]}
              handlerMap={handlerMap}
              showRemoveButton={
                loggedInUser === data.owner || memberId === loggedInUser
              }
            />
          </Col>
        ))}
        {data.owner === loggedInUser ? (
          <Col className="p-0 m-1 my-0 d-flex">
            <Button size="sm" onClick={() => setShow(true)} variant="success">
              <Icon path={mdiAccountPlusOutline} size={0.8} />
            </Button>
          </Col>
        ) : null}
      </Row>
    </div>
  );
}

export default MemberList;
