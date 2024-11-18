import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Overview from "./Overview/Overview";

function Layout() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className="p-0">
      <Header handleShow={handleShow} />
      <Row className="m-0" style={{ position: "absolute", top: "56px", bottom: "42px", left: "0px", right: "0px" }}>
        <Col
          style={{ width: "320px", maxWidth: "320px", height: "100%", overflow: "auto" }}
          className={"d-none d-md-block p-2 border"}
        >
          <Overview show={show} handleClose={handleClose} />
        </Col>
        <Col className="p-0" style={{ height: "100%", overflow: "auto" }}>
          <Outlet />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default Layout;
