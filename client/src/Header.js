import { useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";

import { UserContext } from "./Users/UserProvider.js";
import Stack from "react-bootstrap/esm/Stack.js";

function Header({ handleShow }) {
  const { userMap, userList, loggedInUser, setLoggedInUser } = useContext(UserContext);
  const { t, i18n } = useTranslation();
  const lngs = { en: { nativeName: "English", shortName: "en" }, cs: { nativeName: "Čeština", shortName: "cs" } };

  return (
    <Stack className="p-2 border fixed-top" direction="horizontal" gap={1}>
      <Button onClick={handleShow} className="d-block d-md-none">
        <Icon path={mdiMenu} size={1} />
      </Button>
      <h3 style={{ display: "block", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
        <Link to="/">{t("header.appName")}</Link>
      </h3>
      <Dropdown className="ms-auto">
        <Dropdown.Toggle id="dropdown-basic">{lngs[i18n.resolvedLanguage].shortName}</Dropdown.Toggle>
        <Dropdown.Menu>
          {Object.keys(lngs).map((lng) => (
            <Dropdown.Item key={lng} active={i18n.resolvedLanguage === lng} onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">{userMap[loggedInUser].name}</Dropdown.Toggle>
        <Dropdown.Menu>
          {userList.map((user) => (
            <Dropdown.Item key={user.id} active={user.id === loggedInUser} onClick={() => setLoggedInUser(user.id)}>
              {user.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Stack>
  );
}

export default Header;
